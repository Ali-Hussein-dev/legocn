import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LEGOCN",
  description: "The Registry directory for shadcn components",
};
export default function Home() {

  return (
    <div className="container mx-auto max-w-4xl px-4 py-2 flex flex-col w-full h-[90svh]">
      <div className="flex flex-col items-center justify-center grow border">
        <h1 className="text-2xl font-bold">The Registry directory for shadcn components</h1>
        <p className="text-muted-foreground">
          Coming soon...
        </p>
      </div>
    </div>
  );
}
