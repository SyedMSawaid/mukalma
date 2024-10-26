import { chatState } from "@/atoms/state";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { MessageBox, MessageBubble } from "../components";

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
    <div className="flex flex-col items-center pt-2 grow gap-y-1">
      <ScrollArea className="h-[550px] w-[700px]">
        {chats.chats.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full font-serif text-stone-400">
            <p>Start typing in the message box below to start chatting.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-y-2" ref={container}>
            {chats.chats.map((chat) => (
              <MessageBubble
                key={chat.id}
                chat={chat}
                side={chat.player == 2 ? "LEFT" : "RIGHT"}
              />
            ))}
          </div>
        )}
      </ScrollArea>

      <div className="sticky bottom-0 py-4 flex justify-center items-center w-[840px] border-2 border-amber-200 bg-amber-100 px-10 rounded-lg mb-4">
        <div className="w-[700px]">
          <MessageBox />
        </div>
      </div>
    </div>
  );
};
