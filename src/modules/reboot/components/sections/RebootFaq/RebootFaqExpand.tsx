"use client";

import { useLayoutEffect, useRef, useState } from "react";

interface Props {
  children: string;
  answer: string;
  isOpen: boolean;
  onChangeIsOpen: (isOpen: boolean) => void;
}

export function RebootFaqExpand({
  children,
  answer,
  isOpen,
  onChangeIsOpen,
}: Props) {
  const infoExpandRef = useRef<HTMLParagraphElement | null>(null);
  const headerExpandRef = useRef<HTMLButtonElement | null>(null);

  const [heightExpand, setHeightExpand] = useState(0);

  useLayoutEffect(() => {
    const gap = 16;

    if (!infoExpandRef.current) return;
    if (!headerExpandRef.current) return;

    if (!isOpen) {
      const height = headerExpandRef.current.offsetHeight;
      setHeightExpand(height);
    }

    if (isOpen) {
      const headerHeight = headerExpandRef.current.offsetHeight;
      const infoHeight = infoExpandRef.current.offsetHeight;
      setHeightExpand(headerHeight + infoHeight + gap);
    }
  }, [isOpen]);

  return (
    <div
      className="flex flex-col gap-4 max-lg:gap-2 bg-[#FFE5E5] border border-black/5 px-9 max-lg:px-7 max-sm:px-6 pb-4 rounded-[26px] duration-500 overflow-hidden"
      style={{ height: heightExpand }}
    >
      <button
        ref={headerExpandRef}
        className="flex items-center justify-between py-4 border-b border-black/10 cursor-pointer"
        onClick={() => onChangeIsOpen(!isOpen)}
      >
        <h4 className="text-[22px] max-lg:text-xl max-sm:text-base font-semibold text-left">
          {children}
        </h4>
        <img
          className={`-mr-4 ${isOpen ? "rotate-180" : "rotate-0"} max-lg:size-[50px] max-sm:size-[42px] duration-300`}
          src="/module-arrow.svg"
          alt=""
        />
      </button>
      <p
        ref={infoExpandRef}
        className="text-lg max-sm:text-base font-medium py-4"
      >
        {answer}
      </p>
    </div>
  );
}
