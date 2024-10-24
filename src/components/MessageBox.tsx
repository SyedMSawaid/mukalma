import { useRecoilState } from "recoil";
import { Button } from "./Button";
import { TextArea } from "./TextArea";
import { chatState } from "../atoms/state";
import { useState } from "react";

export const MessageBox = () => {
  const [, setChatState] = useRecoilState(chatState);

  const [message, setMessage] = useState("");

  const onSend = () => {
    setChatState((prev) => ({
      chats: [
        ...prev.chats,
        {
          id: prev.chats.length + 1,
          player: 1,
          message: message,
          timeStamp: new Date(),
        },
      ],
    }));

    setMessage("");
  };

  return (
    <div>
      <TextArea value={message} onChange={(e) => setMessage(e.target.value)} />
      <Button onClick={onSend}>Send</Button>
    </div>
  );
};
