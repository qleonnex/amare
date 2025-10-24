import {
  RebootSection,
  RebootTitle,
} from "@/modules/reboot/components/features";
import { sections } from "@/modules/reboot/constants";

export function RebootReceive() {
  return (
    <RebootSection id={sections.results.subs?.[0].anchor!}>
      <RebootTitle className="max-w-[772px] mx-auto">
        Что ты получишь, независимо от своего статуса сейчас?
      </RebootTitle>
      <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1 max-md:gap-2.5">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5 bg-[#FFDADA] p-[18px] max-sm:p-4 rounded-[26px] border border-white/5 text-[#8B1E3F] text-lg max-sm:text-base font-medium">
            Освоишь сценарии женского влияния — как общаться с мужчиной, чтобы
            он сам хотел дарить, помогать и заботиться
          </div>
          <div className="flex flex-col gap-5 bg-[#FFDADA] p-[18px] max-sm:p-4 rounded-[26px] border border-white/5 text-[#8B1E3F] text-lg max-sm:text-base font-medium">
            Раскроешь чувственность и начнёшь получать удовольствие от близости
            — без стыда и напряжения
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5 bg-[#FFDADA] p-[18px] max-sm:p-4 rounded-[26px] border border-white/5 text-[#8B1E3F] text-lg max-sm:text-base font-medium">
            Поймёшь, как выстраивать границы и при этом быть мягкой и желанной
          </div>
          <div className="flex flex-col gap-5 bg-[#FFDADA] p-[18px] max-sm:p-4 rounded-[26px] border border-white/5 text-[#8B1E3F] text-lg max-sm:text-base font-medium">
            Научишься проходить конфликты спокойно и добиваться желаемого без
            крика и истерик
          </div>
          <div className="flex flex-col gap-5 bg-[#FFDADA] p-[18px] max-sm:p-4 rounded-[26px] border border-white/5 text-[#8B1E3F] text-lg max-sm:text-base font-medium">
            Перестанешь быть удобной и начнёшь получать внимание, подарки и
            уважение
          </div>
        </div>
      </div>
    </RebootSection>
  );
}
