import { chatState } from "@/atoms/state";
import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { MessageBox, MessageBubble } from "../components";
import { ScrollArea } from "@/components/ui/scroll-area";

export const ChatPage = () => {
  const [chats] = useRecoilState(chatState);
  const container = useRef<HTMLDivElement>(null);

  const Scroll = () => {
    container.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  useEffect(() => {
    Scroll();
  }, [chats]);

  return (
    <div className="grow">
      <div className="">Chat Page</div>

      <div className="flex flex-col grow">
        <ScrollArea className="grow">
          <div className="flex flex-col pb-20 gap-y-2" ref={container}>
            {chats.chats.map((chat) => (
              <MessageBubble
                key={chat.id}
                chat={chat}
                side={chat.player == 1 ? "LEFT" : "RIGHT"}
              />
            ))}
          </div>
        </ScrollArea>

        <div className="sticky bottom-0 py-8">
          <MessageBox />
        </div>
      </div>
    </div>
  );
};
