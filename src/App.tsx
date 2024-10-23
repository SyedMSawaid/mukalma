import { useRecoilState } from "recoil";
import { applicationState, chatState } from "./atoms/state";
import { ChatOptions } from "./components";
import { ChatPage } from "./pages";

function App() {
  const [appState, setAppState] = useRecoilState(applicationState);
  const [chats] = useRecoilState(chatState);

  return (
    <div className="flex justify-center">
      <div className="container">
        <header>
          <div className="flex justify-between">
            <h1>Mukalma</h1>
            <div onClick={() => setAppState({ isChatScreen: false })}>
              Options
            </div>
          </div>
        </header>

        <main>
          <div>
            {!appState.isChatScreen ? (
              <ChatOptions />
            ) : (
              <ChatPage chats={chats.chats} />
            )}
          </div>
        </main>

        {/* <footer></footer> */}
      </div>
    </div>
  );
}

export default App;
