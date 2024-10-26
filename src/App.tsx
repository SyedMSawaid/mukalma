import { useRecoilState } from "recoil";
import { applicationState } from "./atoms/state";
import { ChatOptions } from "./components";
import { ChatPage } from "./pages";
import { Navbar } from "./components/Navbar";

function App() {
  const [appState] = useRecoilState(applicationState);

  return (
    <div className="flex flex-col items-center h-screen">
      <header className="sticky top-0 flex items-center justify-center w-full shadow-md grow bg-amber-100">
        <Navbar />
      </header>

      <div className="flex flex-col grow">
        <main className="flex  grow">
          {!appState.isChatScreen ? <ChatOptions /> : <ChatPage />}
        </main>

        {/* TODO: Add your footer here. */}
        {/* <footer></footer> */}
      </div>
    </div>
  );
}

export default App;
