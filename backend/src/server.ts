import fastify from "fastify";
import cors from "@fastify/cors";
import { productRoutes } from "./routes/products";

const app = fastify();

app.register(cors, {
  origin: true,
});

app.register(productRoutes);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Server in Running port 3333");
  });
