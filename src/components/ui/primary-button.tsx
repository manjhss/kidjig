import { ButtonProps } from "@/types";

export default function PrimaryButton({ onClick, children }: ButtonProps) {
  return (
    <button
      className="bg-[#6a35ff] px-10 py-[14px] text-[18px] font-bold rounded-[12px] hover:scale-105 transition-all duration-200"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
