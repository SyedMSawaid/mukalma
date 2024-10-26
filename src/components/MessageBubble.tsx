import { Chat } from "../data";
import { cn } from "../lib";

type Props = {
  chat: Chat;
  side: "LEFT" | "RIGHT";
};

export const MessageBubble = ({ chat, side }: Props) => {
  return (
    <div
      className={cn(
        "border border-black px-4 py-4 rounded-xl w-3/5",
        side === "LEFT"
          ? "self-start text- bg-white"
          : "self-end text-right bg-gray-200"
      )}
    >
      <div className="">
        <div>{chat.message}</div>
      </div>
    </div>
  );
};
