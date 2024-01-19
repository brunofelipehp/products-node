interface ProductsProps {
  id: string;
  name: string;
  description: string;
  price: number;
  color: string;
}

async function getProducts() {
  const res = await fetch(`http://localhost:3333/product`);

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
            <span>{product.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
