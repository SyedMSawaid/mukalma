import { Chat } from "@/data";
import { atom } from "recoil";

export const applicationState = atom({
  key: "applicationState",
  default: {
    activePlayer: Number(localStorage.getItem("activePlayer") ?? "1"),
  },
  effects: [
    ({ onSet }) => {
      onSet((state) =>
        localStorage.setItem("activePlayer", state.activePlayer.toString())
      );
    },
  ],
});

export const chatState = atom({
  key: "chatState",
  default: {
    chats: JSON.parse(localStorage.getItem("chats") ?? "[]") as Chat[],
  },
  effects: [
    ({ onSet }) => {
      onSet((state) =>
        localStorage.setItem("chats", JSON.stringify(state.chats))
      );
    },
  ],
});
