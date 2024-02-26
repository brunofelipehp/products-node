"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

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
  name,
  description,
  price,
  color,
}: ProductsInputsProps) {
  try {
    const response = await fetch(`http://localhost:3333/product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description, price, color }),
    });

    revalidateTag("get-products");
  } catch (error) {
    console.error("Erro ao enviar dados para a API:", error);
  }

  revalidateTag("get-products");
}

export async function updatedProduct({
  id,
  name,
  description,
  price,
  color,
}: ProductsInputsProps) {
  try {
    await fetch(`http://localhost:3333/product/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description, price, color }),
    });
  } catch (error) {
    console.error("Erro ao enviar dados para a API:", error);
  }

  revalidateTag("get-products");
  redirect(`/products/${1}`);
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
