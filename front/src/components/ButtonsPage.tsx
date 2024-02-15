"use client";

import { useProductContext } from "@/context/ProductMessageContext";

export default function ButtonsPage() {
  const { countPage, setCountPage } = useProductContext();

  const pageClickLess = () => {
    if (countPage > 1) {
      setCountPage(countPage - 1);
    }
  };

  const pageClickMore = () => {
    setCountPage(countPage + 1);
  };
  return (
    <div className="flex place-content-center gap-2">
      <button
        className="bg-purple-600 p-2 rounded-md text-zinc-100"
        onClick={() => pageClickLess()}
      >
        Anterior
      </button>
      <button
        className="bg-purple-600 p-2 rounded-md text-zinc-100"
        onClick={() =>
          countPage ? setCountPage(countPage - 1) : setCountPage(1)
        }
      >
        Proxímo
      </button>
    </div>
  );
}
