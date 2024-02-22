"use client";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  const backPage = () => {
    router.push(`/products/${1}`);
    router.refresh();
  };

  return <button onClick={() => backPage()}>Home</button>;
}
