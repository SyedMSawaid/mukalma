import { ComponentProps } from "react";

type Props = {} & ComponentProps<"textarea">;

export const TextArea = ({ id, name, ...props }: Props) => {
  return (
    <div>
      <textarea name={name} id={id} {...props}></textarea>
    </div>
  );
};
