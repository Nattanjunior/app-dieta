import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  FastifyPluginOptions
} from "fastify";
import { CreateNutritioncontroller } from "./controllers/CreateNutritionController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

  fastify.get("/teste", (req: FastifyRequest, res: FastifyReply) => {
   console.log("ROTA CHAMADA")
   res.send({ok: true})
  })

  fastify.get("/create", async (req: FastifyRequest, res: FastifyReply) => {
    return new CreateNutritioncontroller().handle(req, res)
  })
}