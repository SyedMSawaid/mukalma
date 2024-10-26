import { applicationState, chatState } from "@/atoms/state";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import jsPDF from "jspdf";
import { LucideDownload, LucideSettings, LucideTrash } from "lucide-react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [, setAppState] = useRecoilState(applicationState);
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
    <div className="container flex items-center justify-between py-4">
      <div className="w-1/3"></div>
      <div className=" w-1/3flex gap-x-4">
        <h1 className="font-serif text-2xl">Mukalma</h1>
      </div>
      <div className="flex justify-end w-1/3 gap-x-4">
        <LucideDownload onClick={downloadChat} />

        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogTrigger>
            <LucideTrash />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
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
  );
};