import { useState } from "react";
import { ChatOptions } from "./components";
import { ChatPage } from "./pages";
import { chatData } from "./data/chat-data";

function App() {
  const [isChat, setIsChat] = useState(false);
  const [chat, setChat] = useState(chatData);

  const clearChat = () => {
    setChat([]);
  };

  return (
    <div className="flex justify-center">
      <div className="container">
        <header>
          <div className="flex justify-between">
            <h1>Mukalma</h1>
            <div onClick={() => setIsChat(false)}>Options</div>
          </div>
        </header>

        <main>
          <div>
            {!isChat ? (
              <ChatOptions
                onConfirm={() => setIsChat(true)}
                onClearChat={clearChat}
              />
            ) : (
              <ChatPage chats={chat} />
            )}
          </div>
        </main>

        {/* <footer></footer> */}
      </div>
    </div>
  );
}

export default App;
