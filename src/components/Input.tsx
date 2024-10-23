import { ComponentProps } from "react";

type Props = {} & ComponentProps<"input">;

export const Input = ({ id }: Props) => {
  return (
    <div>
      <label htmlFor={id}></label>
      <input type="text" id={id} />
    </div>
  );
};
