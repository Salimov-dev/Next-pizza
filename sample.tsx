import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  className?: string;
}

const SortPopup: FC<Props> = ({ className }) => {
  return <div className={cn("", className)}></div>;
};

export { SortPopup };
