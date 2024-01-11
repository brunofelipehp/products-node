import fastify from "fastify";

const app = fastify();

app.get("/product", () => {
  return "Hello world!";
});

app.post("/product", () => {
  return "Hello world!";
});

app.put("/product/:id", () => {
  return "Hello world!";
});

app.delete("/", () => {
  return "Hello world!";
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Server in Running port 3333");
  });
