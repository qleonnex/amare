"use client";

import Image from "next/image";
import { NavLinks } from "../../features/NavLinks";
import { MobileNavbarButton } from "@/modules/reboot/components/sections/RebootHeader/MobileNavbarButton";

export function RebootHeader() {
  return (
    <header className="flex items-center justify-between mt-[46px] max-lg:mt-5">
      <Image src="/logo.svg" width={70} height={59} alt="amare logo" />
      <div className="max-lg:hidden">
        <NavLinks />
      </div>
      <MobileNavbarButton />
    </header>
  );
}
