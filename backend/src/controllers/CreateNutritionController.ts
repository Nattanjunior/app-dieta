import {
  FastifyRequest,
  FastifyReply
} from 'fastify'

class CreateNutritioncontroller {
  async handle(req: FastifyRequest, res: FastifyReply) {
    console.log("ROTA FOI CHAMADA!!")
    res.send({ message: "ROTA FOI CHAMADA!!!" })
  }
}

export { CreateNutritioncontroller } 