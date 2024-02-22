"use server";

import { revalidateTag } from "next/cache";

interface ProductsInputsProps {
  id?: string;
  name: string;
  description: string;
  price: number;
  color: string;
}

export async function getProducts(pageNumber: number) {
  try {
    const res = await fetch(
      `http://localhost:3333/product?page=${pageNumber}`,
      {
        next: {
          tags: ["get-products"],
        },
      }
    );

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function postProduct({
  id,
  name,
  description,
  price,
  color,
}: ProductsInputsProps) {
  try {
    if (!id) {
      const response = await fetch(`http://localhost:3333/product`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, description, price, color }),
      });

      if (response.ok) {
        revalidateTag("get-products");
        return response.json();
      } else {
        console.error("Erro ao enviar dados para a API:", response.status);
      }
    }
  } catch (error) {
    console.error("Erro ao enviar dados para a API:");
  }
}

export async function deleteProduct(id: string) {
  await fetch(`http://localhost:3333/product/${id}`, {
    method: "DELETE",
  });

  //if (res.ok) {
  revalidateTag("get-products");
  // router.refresh();
  // }
}
