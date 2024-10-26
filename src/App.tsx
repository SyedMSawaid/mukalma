import { LucideDownload, LucideSettings, LucideTrash } from "lucide-react";
import { useRecoilState } from "recoil";
import { applicationState, chatState } from "./atoms/state";
import { Button, ChatOptions } from "./components";
import { ChatPage } from "./pages";
import jsPDF from "jspdf";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

function App() {
  const [appState, setAppState] = useRecoilState(applicationState);
  const [, setChats] = useRecoilState(chatState);
  const [openDialog, setOpenDialog] = useState(false);

  const downloadChat = () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: [210, 297],
    });

    doc.html(`<div>Hi</div>`, {
      async callback(doc) {
        doc.save("pdf_name");
      },
    });
  };

  const cleanChat = () => {
    setChats({ chats: [] });
    setOpenDialog(false);
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

              <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogTrigger>
                  <LucideTrash />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button onClick={cleanChat}>Confirm</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <LucideSettings
                onClick={() =>
                  setAppState((prev) => ({ ...prev, isChatScreen: false }))
                }
              />
            </div>
          </div>
        </header>

        <main className="flex grow">
          {!appState.isChatScreen ? <ChatOptions /> : <ChatPage />}
        </main>

        {/* TODO: Add your footer here. */}
        {/* <footer></footer> */}
      </div>
    </div>
  );
}

export default App;
