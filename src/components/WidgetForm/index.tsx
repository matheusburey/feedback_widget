import { useState } from "react"
import { WidgetCloseButton } from "../WidgetCloseButton";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<string | null>(null);
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">
          Deixe seu feedback
          <WidgetCloseButton />
        </span>
      </header>
      {!feedbackType ? (
        <FeedbackTypeStep setFeedbackType={setFeedbackType} />
      ) : (
        <p>helloword</p>
      )}
      <footer className="text-xs text-neutral-400">
        Feito com ♥  pela {" "}
        <a className="underline underline-offset-2" href="#">
          Rockteseat
        </a>
      </footer>
    </div>
  );
};
