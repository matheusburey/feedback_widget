import { useState } from "react";

import bugImgUrl from "../../assets/bug.svg";
import ideaImgUrl from "../../assets/idea.svg";
import thoughtImgUrl from "../../assets/thought.svg";
import { FeedbackContentSteps } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    img: {
      source: bugImgUrl,
      alt: "Imagen de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    img: {
      source: ideaImgUrl,
      alt: "Imagen de uma lampada",
    },
  },
  OTHER: {
    title: "Outro",
    img: {
      source: thoughtImgUrl,
      alt: "Imagen de um balão de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSend, setFeedbackSend] = useState(false);

  const handleRestartFeedback = () => {
    setFeedbackSend(false)
    setFeedbackType(null);
  };

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSend ? (
        <FeedbackSuccessStep handleRestartFeedback={handleRestartFeedback}/>
      ) : (!feedbackType ? (
            <FeedbackTypeStep setFeedbackType={setFeedbackType} />
          ) : (
            <FeedbackContentSteps
              feedbackType={feedbackType}
              handleRestartFeedback={handleRestartFeedback}
              setFeedbackSend={setFeedbackSend}
            />
          )
      )}
      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela{" "}
        <a className="underline underline-offset-2" href="https://google.com">
          Rockteseat
        </a>
      </footer>
    </div>
  );
}
