import bugImgUrl from "../../../assets/bug.svg";
import ideaImgUrl from "../../../assets/idea.svg";
import thoughtImgUrl from "../../../assets/thought.svg";

const feedbackTypes = {
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

type FeedbackType = keyof typeof feedbackTypes;

interface FeedbackTypeStepProps {
  setFeedbackType: (type: FeedbackType) => void;
}

export const FeedbackTypeStep = ({
  setFeedbackType,
}: FeedbackTypeStepProps) => {
  return (
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
  );
};
