import {
  RebootAccentSection,
  RebootButton,
  RebootTitle,
} from "@/modules/reboot/components/features";
import { sections } from "@/modules/reboot/constants";
import { RebootTariffItem } from "./RebootTariffItem";

export function RebootTariff() {
  return (
    <RebootAccentSection id={sections.tariff.anchor!}>
      <RebootTitle className="text-[#CAA52C]">Тарифы</RebootTitle>
      <div className="grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1 gap-5 max-lg:gap-10 mt-20 max-lg:mt-16 max-sm:mt-10">
        <div className="max-lg:max-w-[540px] max-lg:mx-auto">
          <RebootTariffItem
            iconSrc="/tariff-1.svg"
            bgIcon="#A28C44"
            title="Самостоятельный путь"
            description="Идеально, если ты уже в терапии или хочешь начать с базового уровня"
            options={[
              "Для тех, кто хочет изучать в своём темпе, без обратной связи",
              "Доступ ко всем 13 модулям курса",
              "1 онлайн групповая встреча — живой разбор с экспертом личных ситуаций",
              "Дополнительные практики и упражнения",
              "Поддержка психолога в чате единомышленниц в течении 3-х месяцев",
              "Доступ ко всем материалам на 6 месяцев",
            ]}
            price={[27900, 79900]}
          >
            <a
              className="contents"
              href="https://amareladyschool.getcourse.ru/independent"
            >
              <RebootButton className="bg-[linear-gradient(-81deg,#CAA52C_0%,#E6BD35_25%,#FFCA1C_50%,#E6BD35_75%,#CAA52C_100%)]! text-black/70! shadow-[0]!">
                Оплатить
              </RebootButton>
            </a>
            <a
              className="contents"
              href="https://amareladyschool.getcourse.ru/independent_foreign"
            >
              <RebootButton className="bg-[linear-gradient(81deg,#D4D4D4_0%,#E8E0E0_25%,#E3E0E0_50%,#E8E0E0_75%,#D4D4D4_100%)]! text-black/70! shadow-[0]!">
                Оплатить из-за рубежа
              </RebootButton>
            </a>
            <a className="contents" href="https://amareladyschool.getcourse.ru/independent_4parts">
              <RebootButton className="bg-[linear-gradient(81deg,#D4D4D4_0%,#E8E0E0_25%,#E3E0E0_50%,#E8E0E0_75%,#D4D4D4_100%)]! text-black/70! shadow-[0]!">
                Оплатить частями
              </RebootButton>
            </a>
          </RebootTariffItem>
        </div>

        <div className="max-lg:max-w-[540px] max-lg:mx-auto">
          <RebootTariffItem
            iconSrc="/tariff-2.svg"
            bgIcon="#A2A2A2"
            title="С поддержкой психолога"
            description="Если хочешь результат, поддержку и личный рост — этот формат даст тебе максимум"
            options={[
              "Всё из базового тарифа",
              "5 онлайн групповых Zoom-разборов личных ситуаций с экспертом",
              "Доступ ко всем материалам на 6 месяцев",
              "Участие в закрытом чате с обратной связью практикующего психолога 6 месяцев",
            ]}
            price={[49900, 99900]}
          >
            <a
              className="contents"
              href="https://amareladyschool.getcourse.ru/psychologist_support"
            >
              <RebootButton className="bg-[linear-gradient(-81deg,#CAA52C_0%,#E6BD35_25%,#FFCA1C_50%,#E6BD35_75%,#CAA52C_100%)]! text-black/70! shadow-[0]!">
                Оплатить
              </RebootButton>
            </a>
            <a
              className="contents"
              href="https://amareladyschool.getcourse.ru/psychologist_support_foreign"
            >
              <RebootButton className="bg-[linear-gradient(81deg,#D4D4D4_0%,#E8E0E0_25%,#E3E0E0_50%,#E8E0E0_75%,#D4D4D4_100%)]! text-black/70! shadow-[0]!">
                Оплатить из-за рубежа
              </RebootButton>
            </a>
            <a className="contents" href="https://amareladyschool.getcourse.ru/psychologist_support_4parts">
              <RebootButton className="bg-[linear-gradient(81deg,#D4D4D4_0%,#E8E0E0_25%,#E3E0E0_50%,#E8E0E0_75%,#D4D4D4_100%)]! text-black/70! shadow-[0]!">
                Оплатить частями
              </RebootButton>
            </a>
          </RebootTariffItem>
        </div>

        <div className="max-xl:max-w-[540px] max-xl:mx-auto max-xl:col-span-2 max-lg:col-span-1">
          <RebootTariffItem
            iconSrc="/tariff-3.svg"
            bgIcon="#CAA52C"
            title="VIP-погружение"
            description="Подходит, если ты хочешь работать в личном темпе и получить максимум отдачи (5 участниц максимум)"
            options={[
              "Работа 1-на-1 с Екатериной Ришар — для глубоких трансформаций",
              "Личный план на основе твоей истории",
              "Личное голосовое сопровождение в Telegram и Zoom эксперта в течении 6 месяцев до результата",
              "Участие в закрытом чате с обратной связью практикующего психолога 6 месяцев",
              "5 онлайн групповых онлайн встреч - Zoom-разборы личных ситуаций  с экспертом",
              "Полный доступ ко всем материалам и бонусам курса в течении года",
            ]}
            price={[350000]}
          >
            <a
              className="contents"
              href="https://amareladyschool.getcourse.ru/VIP"
            >
              <RebootButton className="bg-[linear-gradient(81deg,#D4D4D4_0%,#E8E0E0_25%,#E3E0E0_50%,#E8E0E0_75%,#D4D4D4_100%)]! text-black/70! shadow-[0]!">
                Связаться со службой поддержки
              </RebootButton>
            </a>
            <p className="text-center text-black/60">
              Личная консультация необходима
            </p>
          </RebootTariffItem>
        </div>
      </div>
    </RebootAccentSection>
  );
}
