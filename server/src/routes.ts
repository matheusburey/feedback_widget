import { Router } from "express";
import { NodemailerAdapter } from "./adapters/nodemailer/nodemailerAdapter";

import { PrismaFeedbacksRepository } from "./repositories/prisma/PrismaFeedbacksRepository";
import { SubmitFeedbackUseCase } from "./useCase/submitFeedbackUseCase";

export const router = Router();

router.post('/feedback',async (req, res) => {
	const {type, comment, screenshot} = req.body;

	const prismaFeedbackRepository = new PrismaFeedbacksRepository();
	const nodemailerAdapter = new NodemailerAdapter();
	const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbackRepository, nodemailerAdapter)
	await submitFeedbackUseCase.execute({type, screenshot, comment})

	
	return res.status(201).send();
})


