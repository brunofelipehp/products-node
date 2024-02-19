"use client";

import { useRouter } from "next/navigation";

interface PageProps {
  countPages: number;
}

export default function ButtonsPage({ countPages }: PageProps) {
  const router = useRouter();

  const currentPage = Number(countPages) || 1;

  const pageClickLess = () => {
    if (currentPage > 1) {
      router.push(`/products/${currentPage - 1}`);
    }
  };

  const pageClickMore = () => {
    router.push(`/products/${currentPage + 1}`);
  };

  return (
    <div className="flex place-content-center gap-2">
      <button
        className="bg-purple-600 p-2 rounded-md text-zinc-100 hover:bg-purple-400"
        onClick={() => pageClickLess()}
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      <button
        className="bg-purple-600 p-2 rounded-md text-zinc-100 hover:bg-purple-400"
        onClick={() => pageClickMore()}
      >
        Proxímo
      </button>
    </div>
  );
}
