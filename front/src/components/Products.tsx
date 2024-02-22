import Buttons from "./Buttons";
import { getProducts } from "@/app/actions";
import ButtonsPage from "./ButtonsPage";
//import { useProductContext } from "@/context/ProductMessageContext";

interface ProductsProps {
  id: string;
  name: string;
  description: string;
  price: number;
  color: string;
}

export default async function Products() {
  //const { countPage } = useProductContext();

  const products: ProductsProps[] = await getProducts(1);
  console.log(products);
  return (
    <div className="w-1/4">
      <div className="grid  w-full ">
        {/*products.map((product: ProductsProps) => (
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
                <Buttons id={product.id} />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/*<ButtonsPage countPages={page}/>*/}
      </div>
    </div>
  );
}
