import type { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function RebootButton({ children, className, ...props }: Props) {
  return (
    <button
      className={`bg-[linear-gradient(90deg,rgba(139,30,63,1)_0%,rgba(197,88,121,1)_25%,rgba(224,96,135,1)_50%,rgba(197,88,121,1)_75%,rgba(139,30,63,1)_100%)] shadow-[0_11px_28px_rgba(223,97,135,0.28)] px-9 py-[22px] border-2 border-white/50 rounded-2xl text-white text-base font-bold tracking-wider uppercase cursor-pointer hover:shadow-[0_6px_28px_rgba(223,97,135,0.28)] max-sm:px-8 max-sm:py-[18px] max-sm:text-sm hover:border-white/0 duration-500 flex justify-center ${className}`}
      {...props}
    >
      <span className="truncate overflow-hidden text-ellipsis whitespace-nowrap max-w-[600px] max-[400px]:max-w-[260px]">
        {children}
      </span>
    </button>
  );
}
