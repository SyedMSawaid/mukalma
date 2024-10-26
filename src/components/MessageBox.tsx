import { useState } from "react";
import { useRecoilState } from "recoil";
import { Button, Textarea } from ".";
import { applicationState, chatState } from "../atoms/state";

export const MessageBox = () => {
  const [, setChatState] = useRecoilState(chatState);
  const [appState, setAppState] = useRecoilState(applicationState);
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message === "") return;

    const player = appState.activePlayer;

    setChatState((prev) => ({
      chats: [
        ...prev.chats,
        {
          id: prev.chats.length + 1,
          player,
          message: message,
        },
      ],
    }));

    setAppState((prev) => ({
      ...prev,
      activePlayer: player === 1 ? 2 : 1,
    }));

    setMessage("");
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  };
  return (
    <div className="flex flex-row gap-x-2 s">
      <Textarea
        className="bg-white"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={onKeyDown}
      />
      <Button onClick={sendMessage}>Send</Button>
    </div>
  );
};
