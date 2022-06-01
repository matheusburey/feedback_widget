import nodemailer from "nodemailer";

import { MailAdapter, SendMailData } from "../mailAdapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "9beae50e956cc9",
    pass: "05d0f553064cf6"
  }
});

export class NodemailerAdapter implements MailAdapter {
	async sendMail({subject, body}: SendMailData) {
		await transport.sendMail({
			from: "Equipe Feedget <matheus.hb99@gmail.com>",
			to: "Matheus Hnrique Burei <matheus.hb99@gmail.com>",
			subject,
			html: body
		})
	}
}
