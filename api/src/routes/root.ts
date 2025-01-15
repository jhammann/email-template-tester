import { FastifyPluginAsync, FastifyRequest } from "fastify"
import { sendEmail } from "../services/email"
import { SendEmailRequest } from "../types/email"

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post("/", async function (request: FastifyRequest<SendEmailRequest>, reply) {
    try {
      const response = await sendEmail(request.body)

      return {
        status: "ok",
        message: response,
      }
    } catch (error) {
      reply.code(400)
      return {
        status: "error",
        message: error,
      }
    }
  })
}

export default root
