import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { RefObject } from "react";

interface Props {
  children: string;
  ref: RefObject<HTMLButtonElement | null>;
  isDropdownOpen: boolean;
  onChangeIsDropdownOpen: (isOpen: boolean) => void;
}

export function NavButton({
  children,
  ref,
  isDropdownOpen,
  onChangeIsDropdownOpen,
}: Props) {
  return (
    <button
      ref={ref}
      className="flex items-center gap-[6px] text-[15px] font-semibold uppercase opacity-60 cursor-pointer hover:opacity-100 duration-200"
      onClick={() => onChangeIsDropdownOpen(!isDropdownOpen)}
    >
      <span>{children}</span>
      <ChevronDownIcon
        className={`${!isDropdownOpen ? "rotate-0" : "rotate-180"} duration-200`}
        width={20}
        height={20}
      />
    </button>
  );
}
