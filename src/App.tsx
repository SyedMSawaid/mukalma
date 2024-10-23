import { useState } from "react";
import { ChatOptions } from "./components";
import { ChatPage } from "./pages";
import { chatData } from "./data/chat-data";

function App() {
  const [isChat] = useState(true);
  const [chat] = useState(chatData);

  return (
    <>
      <div>Mukalma</div>

      {!isChat ? <ChatOptions /> : <ChatPage chats={chat} />}
    </>
  );
}

export default App;
