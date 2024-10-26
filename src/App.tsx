import { Navbar } from "./components/Navbar";
import { ChatPage } from "./pages";

function App() {
  return (
    <div className="flex flex-col items-center h-screen">
      <header className="sticky top-0 z-50 flex items-center justify-center w-full h-12 shadow-md grow bg-amber-100">
        <Navbar />
      </header>

      <div className="flex flex-col grow">
        <main className="flex grow">
          <ChatPage />
        </main>

        {/* TODO: Add your footer here. */}
        {/* <footer></footer> */}
      </div>
    </div>
  );
}

export default App;
