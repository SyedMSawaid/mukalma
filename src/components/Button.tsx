import { ComponentProps } from "react";

type Props = {} & ComponentProps<"button">;
export const Button = ({ children, ...props }: Props) => {
  return <button {...props}>{children}</button>;
};
