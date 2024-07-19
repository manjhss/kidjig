import { ButtonProps } from "@/types";

export default function SecondaryButton({ onClick, children }: ButtonProps) {
  return (
    <button
      className="border border-[#6881FF] px-10 py-[14px] text-[18px] font-bold rounded-[12px] hover:bg-[#6881FF] hover:scale-105 transition-all duration-200"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
