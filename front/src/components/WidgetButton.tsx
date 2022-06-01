import { Popover } from "@headlessui/react";
import { ChatTeardropDots } from "phosphor-react";

import { WidgetForm } from "./WidgetForm";

export function WidgetButton() {
  return (
    <Popover className="absolute bottom-5 right-5 flex flex-col items-end">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>
      <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
        <ChatTeardropDots className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs trasition-all duration-500">
          <span className="p-1" />
          Feddback
        </span>
      </Popover.Button>
    </Popover>
  );
}
