import { useRecoilState } from "recoil";
import { applicationState, chatState } from "./atoms/state";
import { ChatOptions } from "./components";
import { ChatPage } from "./pages";

function App() {
  const [appState, setAppState] = useRecoilState(applicationState);
  const [chats] = useRecoilState(chatState);

  return (
    <div className="flex flex-col items-center h-screen">
      <div className="container flex flex-col grow">
        <header>
          <div className="flex justify-between">
            <h1>Mukalma</h1>
            <div>Download</div>
            <div
              onClick={() =>
                setAppState((prev) => ({ ...prev, isChatScreen: false }))
              }
            >
              Options
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

        {/* <footer></footer> */}
      </div>
    </div>
  );
}

export default App;
