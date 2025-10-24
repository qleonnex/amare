import {
  NavLinks,
  RebootAccentSection,
  RebootContainer,
  RebootTitle,
} from "@/modules/reboot/components/features";

export function RebootFooter() {
  return (
    <div className="bg-white pt-12 pb-6 mt-[100px]">
      <div className="max-w-[1350px] mx-auto px-4">
        <div className="flex items-center justify-between gap-10 max-xl:flex-col-reverse">
          <NavLinks />
          <a
            className="text-black/60 underline"
            href="mail:amareladyschool@gmail.com"
          >
            amareladyschool@gmail.com
          </a>
        </div>
        <div className="flex flex-col items-center gap-4 mt-20 max-md:mt-12">
          <h4 className="max-w-[410px] text-lg max-md:text-base font-medium text-center">
            Академия Психологии Устойчивых отношений. Знакомства, брак, семья
          </h4>
          <p className="text-black/60 max-md:text-sm">ИП Лазарева Екатерина</p>
        </div>
      </div>
    </div>
  );
}
