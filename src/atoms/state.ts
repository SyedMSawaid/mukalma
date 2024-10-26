import { Chat } from "@/data";
import { atom } from "recoil";

export const applicationState = atom({
  key: "applicationState",
  default: {
    activePlayer: 1,
  },
});

export const chatState = atom({
  key: "chatState",
  default: {
    chats: [] as Chat[],
  },
});
