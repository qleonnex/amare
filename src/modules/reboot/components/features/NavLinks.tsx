"use client";

import Link from "next/link";
import { sections } from "@/modules/reboot/constants";
import { NavButton } from "./NavButton";
import { DropdownLinks, Option } from "./DropdownLinks";
import { useRef, useState } from "react";

export function NavLinks() {
  const dropdownTriggerRef = useRef<HTMLButtonElement | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav>
      <ul className="flex flex-wrap items-center gap-10">
        {Object.values(sections).map((section) => (
          <li key={section.title}>
            {Boolean(section.subs) ? (
              <>
                <NavButton
                  ref={dropdownTriggerRef}
                  isDropdownOpen={isDropdownOpen}
                  onChangeIsDropdownOpen={setIsDropdownOpen}
                >
                  {section.title}
                </NavButton>
                <DropdownLinks
                  isOpen={isDropdownOpen}
                  onChangeOpen={setIsDropdownOpen}
                  triggerRef={dropdownTriggerRef}
                  options={
                    sections.results.subs?.map((sub) => ({
                      title: sub.title,
                      href: sub.anchor,
                    })) as Option[]
                  }
                />
              </>
            ) : (
              <Link
                href={`#${section?.anchor}`}
                className="text-[15px] font-semibold uppercase opacity-60 cursor-pointer hover:opacity-100 duration-200"
              >
                {section.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
