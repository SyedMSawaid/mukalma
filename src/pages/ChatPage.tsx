import { MessageBubble } from "../components";
import { Chat } from "../data";

type Props = {
  chats: Chat[];
};

export const ChatPage = ({ chats }: Props) => {
  return (
    <div className="">
      <div className="">Chat Page</div>
      <div className="flex flex-col">
        {chats.map((chat) => (
          <MessageBubble
            chat={chat}
            side={chat.player == 1 ? "LEFT" : "RIGHT"}
          />
        ))}
      </div>
    </div>
  );
};
