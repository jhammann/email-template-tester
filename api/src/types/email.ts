import { RouteGenericInterface } from "fastify"

export interface SendEmailBody {
  email: string
  subject?: string
  code: string
}

export interface SendEmailRequest extends RouteGenericInterface {
  Body: SendEmailBody
}
