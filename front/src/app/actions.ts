"use server";

import { redirect, useRouter } from "next/navigation";

export async function getProducts() {
  try {
    const res = await fetch(`http://localhost:3333/product`, {
      cache: "no-store",
    });

    return res.json();
  } catch (error) {
    console.log(error);
  }
}
/*
export async function deleteProduct(id: string) {
  const res = await fetch(`http://localhost:3333/product/${id}`, {
    method: "DELETE",
  });

  if (res.ok) {
    router.refresh();
  }
}
*/
