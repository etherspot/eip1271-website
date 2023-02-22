import { ReactNode } from "react";
import Meta from "./meta";

export default function Layout({
  meta,
  children,
}: {
  meta?: {
    title?: string;
    description?: string;
    image?: string;
  };
  children: ReactNode;
}) {

  return (
    <>
      <Meta {...meta} />
      <main className="flex w-full flex-col items-center justify-center bg-primary">
        {children}
      </main>
    </>
  );
}
