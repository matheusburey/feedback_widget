import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";

import { FeedbackType, feedbackTypes } from "..";
import api from "../../../service/api";
import { Loading } from "../../Loading";

import { WidgetCloseButton } from "../../WidgetCloseButton";
import { ScreenshotButton } from "../ScreenshotButton";

interface IFeedbackContentProps {
  feedbackType: FeedbackType;
  handleRestartFeedback: () => void;
  setFeedbackSend: (type: true) => void;
}

export function FeedbackContentSteps({
  feedbackType,
  handleRestartFeedback,
  setFeedbackSend,
}: IFeedbackContentProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState("");
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  const feedbackIten = feedbackTypes[feedbackType];

  const handleSubmitFeedback = async (event: FormEvent) => {
    event.preventDefault();
    setIsSendingFeedback(true);
    await api
      .post("feedback", {
        type: feedbackType,
        comment,
        screenshot,
      })
      .then(() => setFeedbackSend(true))
      .catch(() => {
        setIsSendingFeedback(false);
        console.log("ERRO");
      });
  };

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={handleRestartFeedback}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex intems-center gap-2">
          <img
            src={feedbackIten.img.source}
            alt={feedbackIten.img.alt}
            className="w-6 h-6"
          />
          {feedbackIten.title}
          <WidgetCloseButton />
        </span>
      </header>
      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
          className="min-w-[305px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que esta acontecendo..."
          onChange={(event) => setComment(event.target.value)}
        />
        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            setScreenshot={setScreenshot}
            screenshot={screenshot}
          />
          <button
            type="submit"
            disabled={!comment || isSendingFeedback}
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            {isSendingFeedback ? <Loading /> : "Enviar Feedback"}
            Enviar
          </button>
        </footer>
      </form>
    </>
  );
}
