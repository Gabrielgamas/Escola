import { ReactNode } from "react";
import { cn } from "~/lib/utils";

interface IClassName {
  className?: string;
  children: ReactNode;
}

const Button = ({ children, className }: IClassName) => {
  return (
    <button
      className={cn(
        "bg-orange-500 px-8 py-3 rounded-3xl text-white font-bold",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;

("bg-orange-500 px-8 py-3 rounded-3xl text-white font-bold");
