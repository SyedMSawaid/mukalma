import { useRecoilState } from "recoil";
import { Button } from ".";
import { Textarea } from ".";
import { applicationState, chatState } from "../atoms/state";
import { useState } from "react";

export const MessageBox = () => {
  const [, setChatState] = useRecoilState(chatState);
  const [appState, setAppState] = useRecoilState(applicationState);
  const [message, setMessage] = useState("");

  const onSend = () => {
    const player = appState.activePlayer;

    setChatState((prev) => ({
      chats: [
        ...prev.chats,
        {
          id: prev.chats.length + 1,
          player,
          message: message,
          timeStamp: new Date(),
        },
      ],
    }));

    setAppState((prev) => ({
      ...prev,
      activePlayer: player === 1 ? 2 : 1,
    }));

    setMessage("");
  };

  return (
    <div className="flex flex-col gap-y-2">
      <Textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      <Button onClick={onSend}>Send</Button>
    </div>
  );
};
