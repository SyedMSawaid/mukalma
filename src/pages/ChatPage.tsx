import { MessageBox, MessageBubble } from "../components";
import { Chat } from "../data";

type Props = {
  chats: Chat[];
};

export const ChatPage = ({ chats }: Props) => {
  return (
    <div className="grow">
      <div className="">Chat Page</div>

      <div className="flex flex-col py-10 gap-y-6">
        <div className="flex flex-col gap-y-2">
          {chats.map((chat) => (
            <MessageBubble
              key={chat.id}
              chat={chat}
              side={chat.player == 1 ? "LEFT" : "RIGHT"}
            />
          ))}
        </div>

        <div>
          <MessageBox />
        </div>
      </div>
    </div>
  );
};
