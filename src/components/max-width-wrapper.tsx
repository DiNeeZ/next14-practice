import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MaxWidthWrapperPrpps {
  children: ReactNode;
  className?: string;
}

const MaxWidthWrapper = (props: MaxWidthWrapperPrpps) => (
  <div
    className={cn(
      "mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
      props.className,
    )}
  >
    {props.children}
  </div>
);

export default MaxWidthWrapper;
