import { ArrowLeft } from "phosphor-react";
import { FeedbackType, feedbackTypes } from "..";
import { WidgetCloseButton } from "../../WidgetCloseButton";

interface IFeedbackContentProps {
  feedbackType: FeedbackType;
  handleRestartFeedback: () => void;
}

export function FeedbackContentSteps({
  feedbackType,
  handleRestartFeedback,
}: IFeedbackContentProps) {
  const feedbackIten = feedbackTypes[feedbackType];

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
      <form className="my-4 w-full">
        <textarea 
          className="min-w-[305px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que esta acontecendo..."
        />
          <footer>
          <button>
            type="submit"
          </button>
        </footer>
      </form>
      </>
  );
}
