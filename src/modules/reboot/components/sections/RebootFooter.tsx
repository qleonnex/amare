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
          <div className="max-w-full opacity-60 text-center mt-16">
              <div className="flex items-center justify-center gap-3.5 text-sm underline mb-3">
                  <a href="/files/privacy-policy.docx" download>Политика конфиденциальности</a>
                  <a href="/files/offer.docx" download>Договор оферты</a>
              </div>
              <p className="text-sm">Мы предоставляем возможность оплатить покупку онлайн непосредственно через интернет-магазин. К оплате принимаются пластиковые карты VISA, MasterCard и МИР, а также СБП, рассрочка и кредит. Прием оплат осуществляется при помощи платежного решения GetCourse (Get Модуль). Платежи, при этом данные карт и клиента передаются по защищенным каналам связи. Приём платежей происходит через защищённое безопасное соединение, используется SSL протокол.</p>
          </div>
      </div>
    </div>
  );
}
