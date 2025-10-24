"use client";

import { RefObject, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

export interface Option {
  title: string;
  href: string;
}

interface Position {
  x: number;
  y: number;
}

interface Props {
  triggerRef: RefObject<HTMLButtonElement | null>;
  options: Option[];
  isOpen: boolean;
  onChangeOpen: (isOpen: boolean) => void;
}

export function DropdownLinks({
  triggerRef,
  options,
  isOpen,
  onChangeOpen,
}: Props) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState<Position | null>(null);

  function handleClick() {
    onChangeOpen(false);
  }

  useLayoutEffect(() => {
    if (!triggerRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();
    const absoluteY = rect.y + window.scrollY;

    setPosition({
      x: rect.x - 16,
      y: absoluteY + 35,
    });
  }, [triggerRef.current, isOpen]);

  useLayoutEffect(() => {
    document.body.style.overflowY = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (!isOpen) return;

  return createPortal(
    <div
      ref={wrapperRef}
      className="absolute flex flex-col bg-white/80 py-3 rounded-2xl backdrop-blur-2xl"
      style={{ top: position?.y, left: position?.x }}
    >
      {options.map((option) => (
        <Link
          key={option.href}
          className="px-4 py-3 text-[15px] font-semibold uppercase opacity-60 cursor-pointer hover:bg-black/5 hover:opacity-100 duration-200"
          href={`#${option.href}`}
          onClick={handleClick}
        >
          {option.title}
        </Link>
      ))}
    </div>,
    document.body,
  );
}
