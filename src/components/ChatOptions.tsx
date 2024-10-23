import { useRecoilState } from "recoil";
import { Button } from "./Button";
import { Input } from "./Input";
import { playerState } from "../atoms/state";
import { ChangeEvent } from "react";

type Props = {
  onConfirm: () => void;
  onClearChat: () => void;
};

export const ChatOptions = ({ onConfirm, onClearChat }: Props) => {
  const [player, setPlayer] = useRecoilState(playerState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setPlayer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <Input
        label="First Player"
        id="firstPlayer"
        name="firstPlayer"
        value={player.firstPlayer}
        onChange={handleChange}
      />
      <Input
        label="Second Player"
        id="secondPlayer"
        name="secondPlayer"
        value={player.secondPlayer}
        onChange={handleChange}
      />

      <Button onClick={onConfirm}>Confirm</Button>

      {/* <Button onClick={onClearChat}>Clear Chat?</Button> */}
    </div>
  );
};
