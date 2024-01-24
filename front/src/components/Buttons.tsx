"use client";
import { FaRegTrashAlt } from "react-icons/fa";

interface ButtonsProps {
  id: string;
}

const deleteProduct = async (id: ButtonsProps) => {
  await fetch(`http://localhost:3333/product/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export default function Buttons(id: ButtonsProps) {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => {
          deleteProduct(id);
        }}
        className="w-8 h-8 bg-red-600 rounded-lg flex justify-center items-center hover:cursor-pointer"
      >
        <FaRegTrashAlt size={16} className="text-white" />
      </button>
      <button className="w-8 h-8 bg-red-600 rounded-lg flex justify-center items-center hover:cursor-pointer">
        <FaRegTrashAlt size={16} className="text-white" />
      </button>
      <button className="w-8 h-8 bg-red-600 rounded-lg flex justify-center items-center hover:cursor-pointer">
        <FaRegTrashAlt size={16} className="text-white" />
      </button>
    </div>
  );
}
