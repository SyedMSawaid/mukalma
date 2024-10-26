import React from "react";

type Props = {} & React.ComponentProps<"div">;

export const Icon = ({ children }: Props) => {
  return (
    <div className="flex items-center justify-center p-1 border border-transparent rounded w-7 h-7 hover:border hover:border-amber-400 hover:bg-amber-200">
      {children}
    </div>
  );
};
