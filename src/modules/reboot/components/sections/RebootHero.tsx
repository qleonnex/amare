"use client";

import { sections } from "@/modules/reboot/constants";
import {
  RebootButton,
  RebootTitle,
} from "@/modules/reboot/components/features";

export function RebootHero() {
  return (
    <section
      className="grid grid-cols-2 max-lg:grid-cols-1 items-center gap-10 max-lg:gap-8 max-lg:text-center max-lg:justify-center mt-16 max-lg:mt-24 max-sm:mt-12"
      id={sections.main.anchor}
    >
      <div className="flex flex-col gap-11">
        <div className="flex flex-col gap-3">
          <RebootTitle className="text-left max-lg:text-center">
            ЛЮБОВЬ - ПЕРЕЗАГРУЗКА,
            <br />
            АЗБУКА ОТНОШЕНИЙ
          </RebootTitle>
          <p className="max-w-[530px] max-lg:max-w-full text-black/70 max-lg:text-sm">
            2.5 месяца, которые помогут тебе перестать «пахать в отношениях» и
            наконец почувствовать себя любимой.
          </p>
        </div>
        <div className="flex flex-col gap-4 max-w-[610px] max-lg:max-w-full">
          <p className="text-lg font-medium max-lg:text-base">
            Устала быть той, кто отдает себя без остатка — но остаётся без
            любви? Построй отношения, где ты важна, любима и на первом месте.
          </p>
          <p className="text-lg font-medium max-lg:text-base">
            Ознакомься с моей программой, где узнаешь почему ты привлекаешь не
            тех мужчин и как переписать сценарий, который рушит твои отношения
            снова и снова.
          </p>
        </div>
        <div className="flex items-center gap-7 max-lg:hidden">
          <RebootButton
            onClick={() =>
              document
                .getElementById(sections.program.anchor!)
                ?.scrollIntoView({ block: "start", behavior: "smooth" })
            }
          >
            Хочу узнать больше
          </RebootButton>
          <div className="flex items-center gap-2">
            <span className="size-[6px] bg-[#22EE41] outline-4 outline-[#22EE41]/20 rounded-full"></span>
            <p className="text-black/70">1000+ участниц, 20 лет практики</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col max-lg:w-2/3 max-sm:w-full mx-auto ">
        <img className="-mb-4" src="/hero.png" alt="" />
        <p className="bg-[#FFD8D8]/40 p-4 rounded-[14px] text-[#8B1E3F] backdrop-blur-[104px] max-sm:text-sm">
          Флагманская программа Екатерина Ришар - психолога с 20-летним опытом.
          Помогла 1000+ женщинам переписать сценарий отношений и стать желанными
          для достойных мужчин.
        </p>
      </div>
      <div className="flex flex-col items-center gap-3 min-lg:hidden">
        <RebootButton
          onClick={() =>
            document
              .getElementById(sections.program.anchor!)
              ?.scrollIntoView({ block: "start", behavior: "smooth" })
          }
        >
          Хочу узнать больше
        </RebootButton>
        <div className="flex items-center gap-2">
          <span className="size-[6px] bg-[#22EE41] outline-4 outline-[#22EE41]/20 rounded-full"></span>
          <p className="text-black/70 max-sm:text-sm">
            1000+ участниц, 20 лет практики
          </p>
        </div>
      </div>
    </section>
  );
}
