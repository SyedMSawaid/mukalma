import { atom } from "recoil";
import { chatData } from "../data/chat-data";

export const applicationState = atom({
  key: "applicationState",
  default: {
    activePlayer: 1,
  },
});

export const chatState = atom({
  key: "chatState",
  default: {
    // chats: [] as Chat[],
    chats: chatData,
  },
});
