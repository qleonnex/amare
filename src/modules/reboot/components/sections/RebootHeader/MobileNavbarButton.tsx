"use client";

import { useState } from "react";
import { MobileNavbar } from "@/modules/reboot/components/sections/RebootHeader/MobileNavbar";

export function MobileNavbarButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="flex flex-col gap-[6px] cursor-pointer min-lg:hidden p-2"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className={`bg-black w-6 h-[2px]`}></div>
        <div className={`bg-black w-6 h-[2px]`}></div>
        <div className={`bg-black w-6 h-[2px]`}></div>
      </button>
      <MobileNavbar isOpen={isOpen} onChangeIsOpen={setIsOpen} />
    </>
  );
}
