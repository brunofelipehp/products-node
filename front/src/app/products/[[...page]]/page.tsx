import { getProducts } from "@/app/actions";
import Buttons from "@/components/Buttons";
import ButtonsPage from "@/components/ButtonsPage";

interface ProductsProps {
  id: string;
  name: string;
  description: string;
  price: number;
  color: string;
}

interface PageCountProps {
  params: {
    page: number;
    totalPages: number;
  };
}

export default async function Products({ params }: PageCountProps) {
  const { page } = params;

  const { products, totalPages } = await getProducts(page);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full ">
      <div className="pb-7 items-center">
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
                  <span>
                    <strong>R$</strong>
                    {product.price}
                  </span>
                  <Buttons id={product.id} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <ButtonsPage countPages={page} totPages={totalPages} />
      </div>
    </main>
  );
}
