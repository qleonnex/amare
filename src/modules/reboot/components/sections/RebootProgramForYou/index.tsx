"use client";

import {
  RebootButton,
  RebootSection,
  RebootTitle,
} from "@/modules/reboot/components/features";
import { InfoBlock } from "@/modules/reboot/components/sections/RebootProgramForYou/InfoBlock";
import { sections } from "@/modules/reboot/constants";

export function RebootProgramForYou() {
  return (
    <RebootSection id={sections.forWhom.anchor!}>
      <RebootTitle>
        Эта программа для
        <br />
        тебя, если…
      </RebootTitle>
      <div className="flex flex-col gap-5 max-sm:gap-2.5">
        <div className="flex items-end gap-5">
          <InfoBlock
            className="mb-[52px] max-lg:mb-0"
            title="Если ты без пары, но хочешь настоящей любви"
            description="Ты устала от одинаковых свиданий, где мужчины часами ноют, как им не повезло встретить “ту самую”, а потом предлагают разделить счет пополам."
            after="После изучения программы ты научишься притягивать зрелых мужчин, и начинать отношения, в которых мужчина сам вкладывается, проявляет инициативу и заботу."
          />
          <img className="max-lg:hidden" src="/for-u-arrow.svg" alt="" />
        </div>
        <div className="flex items-end justify-end gap-5">
          <img
            className="transform scale-x-[-1] max-lg:hidden"
            src="/for-u-arrow.svg"
            alt=""
          />
          <InfoBlock
            className="mb-[52px] max-lg:mb-0"
            title="Если ты в отношениях, но несчастлива"
            description="Ты смотришь на чужие пары в Instagram, где девушки получают цветы и подарки, а потом смотришь на своего мужчину и пытаешься вспомнить, когда он баловал тебя цветами и подарками. Ты чувствуешь, что с тобой что-то не так. Хотя ты красивая и умная. Но он будто перестал видеть тебя такой."
            after="После изучения программы ты перезапустишь отношения, вернёшь уважение, страсть и романтику. Мужчина снова начнет видеть в тебе женщину, которую хочется носить на руках."
          />
        </div>
        <div className="flex items-end gap-5">
          <InfoBlock
            className="mb-[116px] max-lg:mb-0"
            title="Если ты после расставания, боль ещё не прошла, а доверие не вернулось"
            description="Ты пережила болезненный разрыв и не понимаешь, как снова доверять мужчинам и миру. Ты боишься повторить ту же ошибку — влюбиться, а потом снова остаться разбитой и опустошённой."
            after="Эта программа твой путь к исцелению. Ты восстановишь связь с собой, будешь чувствовать себя в безопасности, и сможешь открыться новым отношениям с другим уровнем уверенности, любви и достоинства."
          />
          <img className="max-lg:hidden" src="/for-u-arrow-bottom.svg" alt="" />
        </div>
      </div>
      <RebootButton
        className="w-min mx-auto -mt-[120px] max-lg:mt-0"
        onClick={() =>
          document.getElementById(sections.tariff.anchor!)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      >
        Да, это про меня
      </RebootButton>
    </RebootSection>
  );
}
