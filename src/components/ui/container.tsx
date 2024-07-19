import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div className="lg:w-[980px] mx-auto px-4">{children}</div>;
}
