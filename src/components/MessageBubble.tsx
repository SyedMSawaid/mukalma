import { Chat } from "../data";
import { cn } from "../lib";

type Props = {
  chat: Chat;
  side: "LEFT" | "RIGHT";
};

export const MessageBubble = ({ chat, side }: Props) => {
  return (
    <div className={cn(side === "LEFT" ? "self-start" : "self-end")}>
      <div>
        <div>{chat.message}</div>
        <div>{chat.timeStamp.toString()}</div>
      </div>
    </div>
  );
};
