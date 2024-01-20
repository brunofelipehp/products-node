export default function Register() {
  async function createProduct(formData: FormData) {
    "use server";

    const productFormData = {
      name: formData.get("name"),
      color: formData.get("color"),
      price: formData.get("price"),
      description: formData.get("description"),
    };

    const { name, color, price, description } = productFormData;

    try {
      await fetch(`http://localhost:3333/product`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          color,
          price,
          description,
        }),
      });
      console.log("Ok");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="grid justify-center place-content-center">
      <h1 className="mb-8 font-bold text-5xl">Cadastrar produto</h1>
      <form action={createProduct}>
        <div className="grid grid-cols-2 gap-3">
          <div className="grid ">
            <label htmlFor="">Name</label>
            <input
              className="mt-2 w-80 border rounded-md p-1 outline-purple-600"
              type="text"
              name="name"
            />
          </div>

          <div className="grid ">
            <label htmlFor="">Cor</label>
            <input
              className="mt-2 w-80 border rounded-md p-1 outline-purple-600"
              type="text"
              name="color"
            />
          </div>
        </div>

        <div className="grid">
          <label htmlFor="">Preço</label>
          <div className="grid ">
            <input
              className="mt-2  border rounded-md p-1 w-3/5 outline-purple-600"
              type="number"
              name="price"
            />
          </div>
        </div>

        <div className="grid">
          <label htmlFor="">Descrição</label>
          <div className="grid ">
            <textarea
              className="mt-2  border rounded-md p-1 w-full h-32 resize-none outline-purple-600"
              name="description"
            />
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
