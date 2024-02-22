"use client";

import { getProducts } from "@/app/actions";
import { useRouter } from "next/navigation";

interface PageProps {
  countPages: number;
  totPages: number;
}

const getPages = async (id: number) => {
  const { totalPages } = await getProducts(id);

  return totalPages;
};

export default function ButtonsPage({ countPages, totPages }: PageProps) {
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
        className={`bg-purple-600 p-2 rounded-md text-zinc-100 hover:bg-purple-400 ${
          currentPage <= 1 ? "opacity-30" : "opacity-100"
        }`}
        onClick={() => pageClickLess()}
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      <div className="flex place-content-center p-2 rounded-md font-semibold border">
        <span>{currentPage}</span>
      </div>
      <button
        className={`bg-purple-600 p-2 rounded-md p-2 rounded-md text-zinc-100 hover:bg-purple-400 ${
          currentPage >= totPages ? "opacity-30" : "opacity-100"
        }`}
        onClick={() => pageClickMore()}
        disabled={currentPage >= totPages}
      >
        Proxímo
      </button>
    </div>
  );
}
