import { FaRegTrashAlt } from "react-icons/fa";
import Buttons from "./Buttons";
import Link from "next/link";

interface ProductsProps {
  id: string;
  name: string;
  description: string;
  price: number;
  color: string;
}

async function getProducts() {
  const res = await fetch(`http://localhost:3333/product`, {
    cache: "no-store",
  });

  return res.json();
}

export default async function Product() {
  const products = await getProducts();

  return (
    <div className="grid  w-full ">
      {products.map((product: ProductsProps) => (
        <div
          key={product.id}
          className="grid justify-center w-full h-23 p-4 m-4 gap-5  border-2 border-purple-600 rounded-lg"
        >
          <h2 className="border-b border-purple-600 text-2xl font-medium">
            {product.name}
          </h2>
          <div className="flex justify-center gap-16">
            <p className="w-96">{product.description}</p>
            <div className="grid gap-3">
              <span>{product.price}</span>
              <Link
                href={`/register/${product.id}/`}
                className="w-8 h-8 bg-red-600 rounded-lg flex justify-center items-center hover:cursor-pointer"
              >
                <FaRegTrashAlt size={16} className="text-white" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
