import type { ReactNode } from "react";

export function RebootSection({
  children,
  id,
}: {
  children: ReactNode;
  id: string;
}) {
  return (
    <section
      className="flex flex-col gap-20 max-lg:gap-12 max-sm:gap-[30px]"
      id={id}
    >
      {children}
    </section>
  );
}
