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
    <div className="flex flex-col items-center grow gap-y-1">
      <ScrollArea className="h-[570px] w-[700px]">
        <div className="flex flex-col gap-y-2" ref={container}>
          {chats.chats.map((chat) => (
            <MessageBubble
              key={chat.id}
              chat={chat}
              side={chat.player == 1 ? "LEFT" : "RIGHT"}
            />
          ))}
        </div>
      </ScrollArea>

      <div className="sticky bottom-0 py-4 flex justify-center items-center w-[840px] border-2 border-amber-200 bg-amber-100 px-10 rounded-lg mb-4">
        <div className="w-[700px]">
          <MessageBox />
        </div>
      </div>
    </div>
  );
};
