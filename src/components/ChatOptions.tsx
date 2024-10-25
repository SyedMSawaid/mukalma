import { useRecoilState } from "recoil";
import { Button } from ".";
import { Input } from ".";
import { applicationState, playerState } from "../atoms/state";
import { ChangeEvent } from "react";

export const ChatOptions = () => {
  const [player, setPlayer] = useRecoilState(playerState);
  const [, setAppState] = useRecoilState(applicationState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setPlayer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex items-center justify-center grow">
      <div className="flex flex-col px-20 border border-black rounded-lg gap-y-4 py-36">
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

        <Button
          onClick={() =>
            setAppState((prev) => ({ ...prev, isChatScreen: true }))
          }
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};
