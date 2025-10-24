import type { ReactNode } from "react";

export function RebootAccentSection({
  children,
  id,
}: {
  children: ReactNode;
  id: string;
}) {
  return (
    <div
      className="bg-white py-[100px] max-md:py-[64px] my-[100px] max-md:my-[60px] rounded-[100px] max-lg:rounded-[50px]"
      id={id}
    >
      <div className="max-w-[1360px] px-4 mx-auto">{children}</div>
    </div>
  );
}
