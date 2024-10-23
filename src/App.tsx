import { useState } from "react";
import { ChatOptions } from "./components";
import { ChatPage } from "./pages";

function App() {
  const [chat] = useState(true);
  return (
    <>
      <div>Mukalma</div>

      {!chat ? <ChatOptions /> : <ChatPage />}
    </>
  );
}

export default App;
