import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLHeadingElement> {}

export function RebootTitle({ children, className, ...props }: Props) {
  return (
    <h1
      className={`text-center text-[#8B1E3F] text-[42px] max-lg:text-3xl max-sm:text-2xl font-semibold uppercase ${className}`}
      style={{ fontFamily: "var(--font-playfair)" }}
      {...props}
    >
      {children}
    </h1>
  );
}
