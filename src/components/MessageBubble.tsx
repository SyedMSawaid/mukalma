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
        "border border-black p-6 rounded-md w-3/5",
        side === "LEFT" ? "self-start text-left" : "self-end text-right"
      )}
    >
      <div className="">
        <div>{chat.message}</div>
      </div>
    </div>
  );
};
