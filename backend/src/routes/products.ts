import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";

export async function productRoutes(app: FastifyInstance) {
  app.get("/product", async () => {
    const products = await prisma.product.findMany();

    return products;
  });

  app.post("/product", async (request) => {
    const bodySchema = z.object({
      name: z.string(),
      description: z.string(),
      color: z.string(),
      price: z.number(),
    });

    const { name, description, color, price } = bodySchema.parse(request.body);

    const product = await prisma.product.create({
      data: {
        name,
        description,
        color,
        price,
      },
    });

    return product;
  });

  app.put("/product/:id", async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(request.params);

    const bodySchema = z.object({
      name: z.string(),
      description: z.string(),
      color: z.string(),
      price: z.number(),
    });

    const { name, description, color, price } = bodySchema.parse(request.body);

    const product = await prisma.product.update({
      where: {
        id,
      },
      data: {
        name,
        description,
        color,
        price,
      },
    });

    return product;
  });

  app.delete("/product/:id", async (req, reply) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(req.params);

    await prisma.product.delete({
      where: {
        id,
      },
    });
  });
}
