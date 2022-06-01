import { connectionDB } from "../connectionDB";
import { FeedbacksRepository, FeedbackCreateData } from "../FeedbacksRepository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
	async create({type, comment, screenshot}: FeedbackCreateData) {
		await connectionDB.feedback.create({data: {type, comment, screenshot}})
	}
}
