"use client";

import {
  RebootSection,
  RebootTitle,
} from "@/modules/reboot/components/features";
import { sections } from "@/modules/reboot/constants";
import { RebootProgramExpand } from "./RebootProgramExpand";
import { useState } from "react";
import { Expands } from "@/modules/reboot/components/sections/RebootProgram/programs";

export interface Expand {
  title: string;
  description: string;
  result: string;
  isOpen: boolean;
}

export function RebootProgram() {
  const [expands, setExpands] = useState<Expand[]>(Expands);

  function handleChangeExpand({
    isOpen,
    title,
  }: {
    isOpen: boolean;
    title: string;
  }) {
    setExpands((prev) =>
      prev.map((expand) =>
        expand.title === title
          ? {
              ...expand,
              isOpen,
            }
          : {
              ...expand,
              isOpen: false,
            },
      ),
    );
  }

  return (
    <RebootSection id={sections.program.anchor!}>
      <RebootTitle>Программа курса</RebootTitle>
      <div className="flex flex-col gap-5 max-md:gap-2.5">
        {expands.map(({ title, description, result, isOpen }, i) => (
          <RebootProgramExpand
            key={title}
            order={i + 1}
            title={title}
            description={description}
            result={result}
            isOpen={isOpen}
            onChangeIsOpen={(isOpen) => handleChangeExpand({ isOpen, title })}
          />
        ))}
      </div>
    </RebootSection>
  );
}
