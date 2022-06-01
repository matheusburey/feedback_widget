import { SubmitFeedbackUseCase } from "./submitFeedbackUseCase"

describe("submit feedback", () => {
  const createFeedbackSpy = jest.fn();
  const sendMailSpy = jest.fn();
  const submitFeedback = new SubmitFeedbackUseCase({ create: createFeedbackSpy }, { sendMail: sendMailSpy });

  it("should be able to submit a feedback", async () => {
    await expect(submitFeedback.execute({
      type: "BUG",
      comment: "example comment",
      screenshot: "data:image/png;base64,534534434twg"
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  })

  it("should not be able to submit a feedback without comment", async () => {
    await expect(submitFeedback.execute({
      type: "",
      comment: "example comment"
    })).rejects.toThrow();
  })
})
