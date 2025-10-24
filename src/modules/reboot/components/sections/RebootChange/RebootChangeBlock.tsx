interface Props {
  title: string;
  description: string;
}

export function RebootChangeBlock({ title, description }: Props) {
  return (
    <div className="flex flex-col gap-1.5 bg-[#FFD8D8]/40 border border-black/5 p-8 max-md:p-6 rounded-[36px]">
      <h4 className="text-[22px] max-md:text-lg max-sm:text-base font-semibold">
        {title}
      </h4>
      <p className="text-black/70 max-sm:text-sm">{description}</p>
    </div>
  );
}
