import { ComponentProps } from "react";

type Props = { label: string } & ComponentProps<"input">;

export const Input = ({ id, label, ...props }: Props) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} {...props} />
    </div>
  );
};
