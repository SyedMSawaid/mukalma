import { atom } from "recoil";
import { chatData } from "../data/chat-data";

export const playerState = atom({
  key: "playerState",
  default: {
    firstPlayer: "",
    secondPlayer: "",
  },
});

export const applicationState = atom({
  key: "applicationState",
  default: {
    isChatScreen: true,
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
