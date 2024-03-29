import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";

interface ProductsProps {
  page: number | undefined;
  limit: number | undefined;
}

export async function productRoutes(app: FastifyInstance) {
  app.get(
    `/product`,
    {
      schema: {
        querystring: {
          type: "object",
          properties: {
            page: { type: "integer", minimum: 1 },
            limit: { type: "integer", minimum: 1 },
          },
        },
      },
    },
    async (request, reply) => {
      try {
        const querySchema = z.object({
          page: z.number().int().positive().optional(),
          limit: z.number().int().positive().optional(),
        });

        const { page, limit = 4 } = querySchema.parse(request.query);

        const offset = page ? (page - 1) * limit : 0;

        const totalProducts = await prisma.product.count();

        const totalPages = Math.ceil(totalProducts / limit);

        const products = await prisma.product.findMany({
          take: limit,
          skip: offset,
        });

        const productWithDescription = products.map((product) => {
          return {
            id: product.id,
            name: product.name,
            description: product.description.substring(0, 155).concat("..."),
            color: product.color,
            price: product.price,
          };
        });

        reply.send({ products: productWithDescription, totalPages });
      } catch (error) {
        return reply.code(404).send("Error when searching for products!!!");
      }
    }
  );

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
