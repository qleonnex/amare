"use client";

import {
  RebootButton,
  RebootSection,
  RebootTitle,
} from "@/modules/reboot/components/features";
import { sections } from "@/modules/reboot/constants";
import { RebootChangeBlock } from "@/modules/reboot/components/sections/RebootChange/RebootChangeBlock";

export function RebootChange() {
  return (
    <RebootSection id={sections.results.subs?.[1].anchor!}>
      <RebootTitle>Как изменится твоя жизнь</RebootTitle>
      <div className="flex flex-col items-center max-w-[785px] mx-auto">
        <div className="flex flex-col items-center gap-2.5">
          <RebootChangeBlock
            title="Станешь женщиной, которую боятся потерять"
            description="Ты раскроешь свою ценность, научишься выстраивать границы и создашь отношения, в которых тебя любят, слышат и уважают. Больше никаких компромиссов с собой"
          />
          <img src="/change-arrow.svg" className="max-md:hidden" alt="" />
          <RebootChangeBlock
            title="Выйдешь из сценариев боли, обиды и самопожертвования"
            description="Проработаешь внутренние блоки, отпустишь прошлые отношения и освободишься от чувства вины, страха и зависимости. Вместо выживания — ты выберешь заботу о себе"
          />
          <img
            src="/change-arrow.svg"
            className="transform scale-x-[-1] max-md:hidden"
            alt=""
          />
          <RebootChangeBlock
            title="Начнёшь получать от мужчины то, что ты хочешь и заслуживаешь"
            description="Подарки, внимание, признание, поддержку, нежность. Не потому что ты выпросила — а потому что ты умеешь вдохновлять, а не давить. Потому что ты стала другой"
          />
        </div>
        <div className="relative mt-[90px] max-md:hidden">
          <img
            src="/change-arrow-bottom.svg"
            className="absolute -top-16 left-[-160px]"
            alt=""
          />
          <RebootButton
            className="w-min mx-auto"
            onClick={() =>
              document.getElementById(sections.tariff.anchor!)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
          >
            Хочу перемен
          </RebootButton>
        </div>
      </div>
      <RebootButton
        className="w-min mx-auto md:hidden"
        onClick={() =>
          document.getElementById(sections.tariff.anchor!)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      >
        Хочу перемен
      </RebootButton>
    </RebootSection>
  );
}
