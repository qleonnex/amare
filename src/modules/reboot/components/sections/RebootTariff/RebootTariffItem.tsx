import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  bgIcon: string;
  iconSrc: string;
  title: string;
  description: string;
  options: string[];
  price: number[];
}

export function RebootTariffItem({
  children,
  bgIcon,
  iconSrc,
  title,
  description,
  options,
  price,
}: Props) {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex flex-col items-center justify-between max-lg:gap-6 h-[800px] max-lg:h-auto bg-black/5 p-6 rounded-[36px] mt-16">
        <div className="flex flex-col items-center gap-6 -mt-16">
          <div
            className="flex items-center justify-center size-[94px] max-sm:size-[76px] rounded-full"
            style={{ backgroundColor: bgIcon }}
          >
            <img className="max-sm:size-[28px]" src={iconSrc} alt="" />
          </div>
          <div className="flex flex-col gap-[2px]">
            <h1 className="text-[26px] max-sm:text-[22px] font-semibold text-center">
              {title}
            </h1>
            <p className="text-black/60 text-center max-sm:text-[13px]">
              {description}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          <p className="text-[15px] max-sm:text-[13px] text-black/50 text-center font-semibold uppercase">
            В тариф входит
          </p>
          <ul className="flex flex-col gap-[14px]">
            {options.map((option) => (
              <li key={option} className="text-lg font-medium text-center">
                {option}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center w-full bg-black/5 p-3 rounded-[20px]">
          <p className="text-[#CAA52C] text-[26px] max-sm:text-[22px] font-semibold">
            {price[0]} ₽{" "}
            {price[1] && (
              <span className="text-lg max-sm:text-base font-medium text-black/50 line-through">
                {price[1]} ₽
              </span>
            )}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}
