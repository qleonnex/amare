interface Props {
  className?: string;
  title: string;
  description: string;
  after: string;
}

export function InfoBlock({ className, title, description, after }: Props) {
  return (
    <div
      className={`max-w-[785px] max-lg:max-w-full flex flex-col bg-[#FFD8D8]/40 p-4 rounded-[36px] max-sm:p-3 border border-black/5 sm:shadow-[0_13px_67px_rgba(223,97,135,0.12)] ${className}`}
    >
      <div className="flex flex-col gap-1.5 p-4 max-sm:p-3 max-sm:pb-[18px]">
        <h4 className="text-[22px] max-md:text-lg max-sm:text-base font-semibold">
          {title}
        </h4>
        <p className="text-black/80 max-sm:text-sm">{description}</p>
      </div>
      <h4 className="bg-[#FFDADA] border border-white/5 p-[18px] max-sm:p-4 rounded-[20px] text-[#8B1E3F] text-lg font-medium max-sm:text-base">
        {after}
      </h4>
    </div>
  );
}
