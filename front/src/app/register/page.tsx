"use client";

import { useForm, SubmitHandler } from "react-hook-form";

interface ProductsInputsProps {
  name: string;
  description: string;
  price: number;
  color: string;
}

export default function Register() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<ProductsInputsProps>({
    defaultValues: { name: "", description: "", price: 0, color: "" },
  });

  const onSubmit: SubmitHandler<ProductsInputsProps> = async (
    data: ProductsInputsProps
  ) => {
    const { name, description, price: priceInput, color } = data;

    const price = Number(priceInput);

    try {
      const response = await fetch(`http://localhost:3333/product`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, description, price, color }),
      });

      reset({
        name: "",
        description: "",
        price: 0,
        color: "",
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Resposta da API:", responseData);
      } else {
        console.error("Erro ao enviar dados para a API:", response.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid justify-center place-content-center">
      <h1 className="mb-8 font-bold text-5xl">Cadastrar produto</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-3 items-baseline">
          <div className="grid ">
            <label htmlFor="">Name</label>
            <input
              className="mt-2 w-80 border rounded-md p-1 outline-purple-600"
              type="text"
              {...register("name", { required: "*Digite o nome do produto" })}
              placeholder="Digite o nome do produto"
            />
            {errors.name && (
              <span className="text-red-600 text-xs">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="grid">
            <label htmlFor="">Cor</label>
            <input
              className="mt-2 w-80 border rounded-md p-1 outline-purple-600"
              type="text"
              {...register("color", { required: "*Digite a cor do produto" })}
              placeholder="Cor do produto"
            />
            {errors.color && (
              <span className="text-red-600 text-xs">
                {errors.color.message}
              </span>
            )}
          </div>
        </div>

        <div className="grid mt-2">
          <label htmlFor="">Preço</label>
          <div className="grid ">
            <input
              className="mt-2  border rounded-md p-1 w-3/5 outline-purple-600"
              type="number"
              {...register("price", {
                required: "*Digite o preço do produto",
                min: {
                  value: 1,
                  message: "O preço do produto precisa ser maior 0",
                },
              })}
            />
            {errors.price && (
              <span className="text-red-600 text-xs">
                {errors.price.message}
              </span>
            )}
          </div>
        </div>

        <div className="grid mt-2">
          <label htmlFor="">Descrição</label>
          <div className="grid ">
            <textarea
              className="mt-2  border rounded-md p-1 w-full h-32 resize-none outline-purple-600"
              placeholder="Digite a descrição do produto"
              {...register("description", {
                required: "*Digite a descrição do produto",
              })}
            />
            {errors.description && (
              <span className="text-red-600 text-xs">
                {errors.description.message}
              </span>
            )}
          </div>
        </div>

        <div>
          <button
            className="mt-4 py-4 w-64  flex place-content-center bg-purple-700 text-white font-semibold border rounded-md hover:cursor-pointer hover:bg-purple-500"
            type="submit"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}
