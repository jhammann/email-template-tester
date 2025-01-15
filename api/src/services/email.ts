import dotenv from "dotenv"
import nodemailer from "nodemailer"
import { SendEmailBody } from "../types/email"

dotenv.config()

export const sendEmail = async (body: SendEmailBody): Promise<string> => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const info = await transporter.sendMail({
    from: process.env.SMTP_EMAIL,
    to: body.email,
    subject: !!body.subject ? body.subject : `Test HTML Email ${new Date()}`,
    html: body.code,
  })

  return `Message sent: ${info.messageId}`
}
