import { LucideDownload, LucideSettings } from "lucide-react";
import { useRecoilState } from "recoil";
import { applicationState, chatState } from "./atoms/state";
import { ChatOptions } from "./components";
import { ChatPage } from "./pages";

function App() {
  const [appState, setAppState] = useRecoilState(applicationState);
  const [chats] = useRecoilState(chatState);

  const downloadChat = () => {
    return;
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <div className="container flex flex-col grow">
        <header>
          <div className="flex justify-between">
            <div className="flex gap-x-4">
              <h1>Mukalma</h1>
              <p>Talk to yourself</p>
            </div>
            <div className="flex gap-x-4">
              <LucideDownload onClick={downloadChat} />

              <LucideSettings
                onClick={() =>
                  setAppState((prev) => ({ ...prev, isChatScreen: false }))
                }
              />
            </div>
          </div>
        </header>

        <main className="flex grow">
          {!appState.isChatScreen ? (
            <ChatOptions />
          ) : (
            <ChatPage chats={chats.chats} />
          )}
        </main>

        {/* TODO: Add your footer here. */}
        {/* <footer></footer> */}
      </div>
    </div>
  );
}

export default App;
