import { FeedbackType, feedbackTypes } from "..";
import { WidgetCloseButton } from "../../WidgetCloseButton";

interface FeedbackTypeStepProps {
  setFeedbackType: (type: FeedbackType) => void;
}

export const FeedbackTypeStep = ({
  setFeedbackType,
}: FeedbackTypeStepProps) => {
  return (
    <>
      <header>
        <span className="text-xl leading-6">
          Deixe seu feedback
          <WidgetCloseButton />
        </span>
      </header>
      <main className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              onClick={() => setFeedbackType(key as FeedbackType)}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1
              flex flex-col items-center gap-2 border-2 border-transparent 
              hover:border-brand-500 focus:border-brand-500 focus:outline-none"
            >
              <img src={value.img.source} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </main>
      </>
  );
};
