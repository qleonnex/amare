"use client";

import {
  RebootSection,
  RebootTitle,
} from "@/modules/reboot/components/features";
import { sections } from "@/modules/reboot/constants";
import { RebootFaqExpand } from "@/modules/reboot/components/sections/RebootFaq/RebootFaqExpand";
import { useState } from "react";
import { FaqExpand, faqExpands } from "./expands";

export function RebootFaq() {
  const [expands, setExpands] = useState<FaqExpand[]>(faqExpands);

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
    <RebootSection id={sections.faq.anchor!}>
      <RebootTitle>Часто задаваемые вопросы</RebootTitle>
      <div className="max-w-[1130px] mx-auto">
        <div className="flex flex-col gap-5 max-lg:gap-2.5">
          {expands.map((expand) => (
            <RebootFaqExpand
              key={expand.title}
              answer={expand.answer}
              isOpen={expand.isOpen}
              onChangeIsOpen={(isOpen) =>
                handleChangeExpand({
                  isOpen,
                  title: expand.title,
                })
              }
            >
              {expand.title}
            </RebootFaqExpand>
          ))}
        </div>
      </div>
    </RebootSection>
  );
}
