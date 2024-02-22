import Products from "./products/[[...page]]/page";
import { pages } from "next/dist/build/templates/app-page";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full ">
      <Suspense fallback={<p>Loading products...</p>}>
        <Products params={pages} />
      </Suspense>
    </main>
  );
}
