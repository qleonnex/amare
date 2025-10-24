import type { ReactNode } from "react";

export function RebootContainer({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-[200px] max-lg:gap-[120px] max-sm:gap-20 max-w-[1360px] px-4 mx-auto">
      {children}
    </div>
  );
}
