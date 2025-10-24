"use client";

import { useLayoutEffect, useRef, useState } from "react";

interface Props {
  order: number;
  title: string;
  description: string;
  result: string;
  isOpen: boolean;
  onChangeIsOpen: (isOpen: boolean) => void;
}

export function RebootProgramExpand({
  order,
  title,
  description,
  result,
  isOpen,
  onChangeIsOpen,
}: Props) {
  const infoExpandRef = useRef<HTMLDivElement | null>(null);
  const headerExpandRef = useRef<HTMLButtonElement | null>(null);

  const [heightExpand, setHeightExpand] = useState(0);

  useLayoutEffect(() => {
    const blockPadding = 16 * 2;
    const gap = 16;

    if (!infoExpandRef.current) return;
    if (!headerExpandRef.current) return;

    if (!isOpen) {
      const height = headerExpandRef.current.offsetHeight;
      setHeightExpand(height + blockPadding / 2);
    }

    if (isOpen) {
      const headerHeight = headerExpandRef.current.offsetHeight;
      const infoHeight = infoExpandRef.current.offsetHeight;
      setHeightExpand(headerHeight + infoHeight + blockPadding + gap);
    }
  }, [isOpen]);

  return (
    <div
      className="flex flex-col gap-4 bg-[#FFE5E5] rounded-[26px] border border-black/5 p-4 overflow-hidden duration-500"
      style={{ height: heightExpand }}
    >
      <button
        ref={headerExpandRef}
        className="flex gap-6 max-md:gap-4 cursor-pointer"
        onClick={() => onChangeIsOpen(!isOpen)}
      >
        <div className="flex shrink-0 justify-center items-center bg-[#FFDADA] size-[68px] max-md:size-[56px] max-sm:size-[48px] rounded-[10px] text-[#8B1E3F] text-[32px] max-md:text-[26px] max-sm:text-[22px] font-semibold">
          {order}
        </div>
        <div className="flex justify-between items-center w-full pb-4 border-b border-black/10">
          <div className="flex flex-col gap-1 max-md:gap-0">
            <p className="text-black/50 text-[15px] text-left max-lg:text-[13px] font-semibold tracking-wider uppercase">
              Модуль
            </p>
            <h2 className="text-[22px] max-lg:text-lg max-md:text-base text-left font-semibold">
              {title}
            </h2>
          </div>
          <img
            className={`${isOpen ? "rotate-180" : "rotate-0"} max-md:max-w-[52px] max-sm:max-w-[46px] duration-200`}
            src="/module-arrow.svg"
            alt=""
          />
        </div>
      </button>
      <div ref={infoExpandRef} className="flex flex-col gap-[26px]">
        <div className="flex flex-col gap-1.5 px-4">
          <p className="text-black/50 text-[15px] text-left max-md:text-[13px] font-semibold tracking-wider uppercase">
            Описание
          </p>
          <h6 className="text-lg max-lg:text-base font-medium">
            {description}
          </h6>
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="text-black/50 text-[15px] text-left max-md:text-[13px] font-semibold tracking-wider uppercase px-4">
            Результат
          </p>
          <h6 className="bg-[#FFDADA] border border-white/5 p-4 rounded-[20px] text-[#8B1E3F] text-lg max-lg:text-base font-medium">
            {result}
          </h6>
        </div>
      </div>
    </div>
  );
}
