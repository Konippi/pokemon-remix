import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Pokemon Remix" },
    { name: "description", content: "A Pokemon illustrated book with Remix" },
  ];
};

export default function Index() {
  return (
    <>
      <h1>Hi</h1>
    </>
  );
}
