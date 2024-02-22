"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaRegTrashAlt, FaRegEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

interface ButtonsProps {
  id: string;
}

export default function Buttons({ id }: ButtonsProps) {
  const router = useRouter();

  async function deleteProduct(id: string) {
    const res = await fetch(`http://localhost:3333/product/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      router.refresh();
    }
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={() => {
          deleteProduct(id);
        }}
        className="w-8 h-8 bg-red-500 rounded-lg flex justify-center items-center hover:cursor-pointer hover:bg-red-700"
      >
        <FaRegTrashAlt size={16} className="text-white" />
      </button>
      <Link
        href={`http://localhost:3001/register/${id}`}
        className="w-8 h-8 bg-green-500 rounded-lg flex justify-center items-center hover:cursor-pointer hover:bg-green-700"
      >
        <MdEdit size={16} className="text-white" />
      </Link>
    </div>
  );
}
