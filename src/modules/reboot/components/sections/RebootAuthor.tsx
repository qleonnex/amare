import {
  RebootAccentSection,
  RebootTitle,
} from "@/modules/reboot/components/features";
import { sections } from "@/modules/reboot/constants";

export function RebootAuthor() {
  return (
    <RebootAccentSection id={sections.aboutAuthor.anchor!}>
      <RebootTitle className="text-[#CAA52C]">Об авторе</RebootTitle>
      <div className="grid grid-cols-[2fr_400px] max-lg:grid-cols-1 items-center gap-[127px] max-lg:gap-12 mt-20 max-lg:mt-12">
        <div className="flex flex-col gap-[46px] max-lg:gap-[32px]">
          <div className="flex flex-col gap-1.5 max-w-[388px] max-lg:mx-auto">
            <h2
              className="text-[#CAA52C] text-[32px] max-lg:text-[26px] font-semibold uppercase max-lg:text-center"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Екатерина Ришар
            </h2>
            <p className="text-black/70 max-lg:text-center">
              дипломированный, практикующий психолог и коуч мужско-женских
              отношений.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-lg max-sm:text-base font-medium">
              Но в первую очередь я женщина и мать. За моей спиной — два
              развода, я знаю, что такое остаться без денег и с маленьким
              ребёнком на руках. Я понимаю боль каждой женщины, потому что сама
              её прожила. Я знаю, каково это — плакать ночами в подушку,
              держаться из последних сил и думать «проблема во мне».
            </p>
            <p className="text-lg max-sm:text-base font-medium">
              И теперь я точно знаю, что умение управлять своей жизнью через
              психологию — это ключ к внутренней опоре и счастливым отношениям.
              Именно психология помогла мне восстановить себя и построить новую
              жизнь — наполненную любовью, уверенностью и гармоничными
              отношениями.
            </p>
            <p className="text-lg max-sm:text-base font-medium">
              Мой путь вдохновил меня создать метод, который помогает другим
              женщинам через работу с подсознанием, восстановление женской
              энергии и простые алгоритмы построения отношений.
            </p>
            <p className="text-lg max-sm:text-base font-medium">
              Именно поэтому сейчас моя миссия — помогать женщинам возвращать
              веру в себя и создавать отношения, где есть любовь, забота и
              стабильность.
            </p>
          </div>
        </div>
        <div className="flex flex-col max-lg:flex-row gap-4 w-full max-md:flex-col">
          <img className="w-full" src="/author.png" alt="автор" />
          <img className="w-full" src="/diplom.png" alt="диплом" />
        </div>
      </div>
    </RebootAccentSection>
  );
}
