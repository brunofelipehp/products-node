import Products from "@/components/Products";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full ">
      <Products />
    </main>
  );
}
