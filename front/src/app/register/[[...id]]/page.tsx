import ProductForm from "@/components/ProductForm";

interface ProductProps {
  params: {
    id?: string;
  };
}

export default function Register({ params }: ProductProps) {
  const { id } = params;

  return (
    <div className="grid justify-center place-content-center">
      <h1 className="mb-8 font-bold text-5xl">Cadastrar produto</h1>
      <ProductForm id={id} />
    </div>
  );
}
