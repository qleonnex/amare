import { createPortal } from "react-dom";
import { useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { sections } from "@/modules/reboot/constants";

interface Props {
  isOpen: boolean;
  onChangeIsOpen: (isOpen: boolean) => void;
}

export function MobileNavbar({ isOpen, onChangeIsOpen }: Props) {
  useLayoutEffect(() => {
    document.body.style.overflowY = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (!isOpen) return;

  return createPortal(
    <div className="absolute top-0 left-0 bg-white w-full h-svh px-4 py-5">
      <header className="flex items-center justify-between">
        <Image src="/logo.svg" width={70} height={59} alt="amare logo" />
        <button
          className="flex flex-col gap-[6px] cursor-pointer min-lg:hidden p-2"
          onClick={() => onChangeIsOpen(!isOpen)}
        >
          <img src="/cross.svg" alt="cross close" />
        </button>
      </header>
      <div className="flex flex-col items-center gap-8 mt-8">
        {Object.values(sections).map((section) => (
          <div className="contents" key={section.title}>
            {section.subs ? (
              section.subs.map((section) => (
                <Link
                  key={section.title}
                  className="text-lg"
                  href={`#${section.anchor}`}
                  onClick={() => onChangeIsOpen(!isOpen)}
                >
                  {section.title}
                </Link>
              ))
            ) : (
              <Link
                className="text-lg"
                href={`#${section.anchor}`}
                onClick={() => onChangeIsOpen(!isOpen)}
              >
                {section.title}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>,
    document.body,
  );
}
