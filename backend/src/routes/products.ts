import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";

export async function productRoutes(app: FastifyInstance) {
  app.get("/product", async (request, reply) => {
    try {
      const products = await prisma.product.findMany();

      return reply.code(200).send(products);
    } catch (error) {
      return reply.code(404).send("Error when searching for products!!!");
    }
  });

  app.get("/product/:id", async (request, reply) => {
    try {
      const paramsSchema = z.object({
        id: z.string().uuid(),
      });

      const { id } = paramsSchema.parse(request.params);

      const products = await prisma.product.findFirstOrThrow({
        where: {
          id,
        },
      });

      return reply.code(200).send(products);
    } catch (error) {
      return reply.code(404).send("Error when searching for products!!!");
    }
  });

  app.post("/product", async (request, reply) => {
    try {
      const bodySchema = z.object({
        name: z.string(),
        description: z.string(),
        color: z.string(),
        price: z.number(),
      });

      const { name, description, color, price } = bodySchema.parse(
        request.body
      );

      const product = await prisma.product.create({
        data: {
          name,
          description,
          color,
          price,
        },
      });

      return reply.code(201).send(product);
    } catch (error) {
      return reply.code(400).send("error when registering a new product!!!");
    }
  });

  app.put("/product/:id", async (request, reply) => {
    try {
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

      const { name, description, color, price } = bodySchema.parse(
        request.body
      );

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

      return reply.code(200).send(product);
    } catch (error) {
      return reply.code(400).send("Error. Unable to edit product");
    }
  });

  app.delete("/product/:id", async (req, reply) => {
    try {
      const paramsSchema = z.object({
        id: z.string().uuid(),
      });

      const { id } = paramsSchema.parse(req.params);

      await prisma.product.delete({
        where: {
          id,
        },
      });

      return reply.code(200).send("Product deleted successfully");
    } catch (error) {
      return reply.code(404).send("Error. Unable to delete product");
    }
  });
}
