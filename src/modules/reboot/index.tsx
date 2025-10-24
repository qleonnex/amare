import { RebootContainer } from "./components/features";
import {
  RebootAuthor,
  RebootChange,
  RebootFaq,
  RebootFooter,
  RebootHeader,
  RebootHero,
  RebootHistories,
  RebootProgram,
  RebootProgramForYou,
  RebootReceive,
  RebootTariff,
} from "./components/sections";

export function Reboot() {
  return (
    <>
      <RebootContainer>
        <div>
          <RebootHeader />
          <RebootHero />
        </div>
        <RebootProgramForYou />
        <div className="max-w-[1130px] mx-auto">
          <RebootReceive />
        </div>
      </RebootContainer>
      <RebootAuthor />
      <RebootContainer>
        <RebootHistories />
        <RebootProgram />
        <RebootChange />
      </RebootContainer>
      <RebootTariff />
      <RebootContainer>
        <RebootFaq />
      </RebootContainer>
      <RebootFooter />
    </>
  );
}
