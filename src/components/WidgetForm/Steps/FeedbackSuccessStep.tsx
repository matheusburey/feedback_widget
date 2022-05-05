import { WidgetCloseButton } from "../../WidgetCloseButton";

import successSvg from "../../../assets/success.svg"

interface FeedbackSuccessProps {
  handleRestartFeedback: () => void;
}

export function FeedbackSuccessStep({handleRestartFeedback}:FeedbackSuccessProps) {
  return (
    <>
      <header>
        <WidgetCloseButton />
      </header>
      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={successSvg} alt="imagen sucesso" />
        <span className="text-xl mt-8">Agradecemos o feedback!</span>
        <button onClick={handleRestartFeedback} type="button" className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-tranparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500">Quero enviar outro</button>
      </div>
    </>
  )
}
