import { z } from "zod";

function initEnv() {
  const envSchema = z.object({
    POKE_API_BASE_URL: z.string().url(),
  });

  const envVars = Object.entries(import.meta.env).reduce<Record<string, string>>((acc, cur) => {
    const [k, v] = cur;
    if (k.startsWith("VITE_")) {
      acc[k.replace("VITE_", "")] = v;
    }
    return acc;
  }, {});

  const parsedEnv = envSchema.safeParse(envVars);

  if (!parsedEnv.success) {
    throw new Error(
      `The following environment variables are invalid or missing:\n ${Object.entries(
        parsedEnv.error.flatten().fieldErrors
      )
        .map(([k, v]) => `- ${k}: ${v}`)
        .join("\n")} `
    );
  }

  return parsedEnv.data;
}

export const env = initEnv();
