"use server";

interface ProductsInputsProps {
  id?: string;
  name: string;
  description: string;
  price: number;
  color: string;
}

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
        return response.json();
      } else {
        console.error("Erro ao enviar dados para a API:", response.status);
      }
    } else {
      const response = await fetch(`http://localhost:3333/product/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, description, price, color }),
      });

      if (response.ok) {
        return response.json();
      } else {
        console.error("Erro ao enviar dados para a API:", response.status);
      }
    }
  } catch (error) {
    console.error("Erro ao enviar dados para a API:");
  }
}
