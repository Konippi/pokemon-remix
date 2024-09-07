import { PassThrough } from "node:stream";

import { type EntryContext, createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";

const ABORT_DELAY = 5000;

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  context: EntryContext
) {
  return isbot(request.headers.get("user-agent") || "")
    ? _handleRequest(request, responseStatusCode, responseHeaders, context, "bot")
    : _handleRequest(request, responseStatusCode, responseHeaders, context, "browser");
}

function _handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  context: EntryContext,
  mode: "bot" | "browser"
) {
  return new Promise((resolve, reject) => {
    let hasRenderingError = false;
    let shellRendered = false;

    const { pipe, abort } = renderToPipeableStream(
      <RemixServer context={context} url={request.url} abortDelay={ABORT_DELAY} />,
      {
        [mode === "bot" ? "onAllReady" : "onShellReady"]: () => {
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);

          shellRendered = true;
          responseHeaders.set("Content-Type", "text/html");

          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: hasRenderingError ? 500 : responseStatusCode,
            })
          );

          pipe(body);
        },
        onShellError: (error: unknown) => {
          reject(error);
        },
        onError: (error: unknown) => {
          hasRenderingError = true;
          if (shellRendered) {
            console.error(error);
          }
        },
      }
    );

    setTimeout(abort, ABORT_DELAY);
  });
}
