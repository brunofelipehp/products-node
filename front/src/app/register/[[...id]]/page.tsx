import ProductForm from "@/components/ProductForm";

interface ProductProps {
  params: {
    id?: string;
  };
}

export default function Register({ params }: ProductProps) {
  const { id } = params;

  return (
    <div className="grid justify-center place-content-center items-center">
      <div className=" bg-green-100 p-2 rounded-md w-full mb-7 text-center">
        <strong className="text-green-500">
          Produto cadastrado com sucesso
        </strong>
      </div>
      <h1 className="mb-8 font-bold text-3xl">Cadastrar produto</h1>
      <ProductForm id={id} />
    </div>
  );
}
