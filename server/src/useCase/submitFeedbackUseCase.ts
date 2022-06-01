import { MailAdapter } from "../adapters/mailAdapter";
import { FeedbacksRepository } from "../repositories/FeedbacksRepository";

export interface SubmitFeedbackUseCaseRequest {
	type: string;
	comment: string;
	screenshot?: string;
}

export class SubmitFeedbackUseCase {
	constructor(
		private feedbackRepository: FeedbacksRepository,
		private mailAdapter: MailAdapter
	){}
	async execute({type, comment, screenshot}:SubmitFeedbackUseCaseRequest) {

  if(!type || !comment) {
      throw new Error("Type and comment is required.")
    }

  if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new Error("Invalid screenshot format")
    }

	await this.feedbackRepository.create({type, comment, screenshot})
	await this.mailAdapter.sendMail({
			subject: "Novo Feedback",
			body: [
				`<p>Tipo do feedback: ${type}</p>`,
				`<p>Comentario: ${comment}<?p>`
			].join("\n")})
	}
}
