"use client";

import {
  RebootSection,
  RebootTitle,
} from "@/modules/reboot/components/features";
import { sections } from "@/modules/reboot/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { useRef } from "react";

export function RebootHistories() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <RebootSection id={sections.cases.anchor!}>
      <RebootTitle className="max-w-[824px] mx-auto">
        Истории моих клиентов, о которых невозможно молчать!
      </RebootTitle>
      <div>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 12 },
            640: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <SwiperSlide key={i} className="rounded-[16px] overflow-hidden">
              <img
                src={`/cases-${i + 1}.jpg`}
                alt={`case-${i + 1}`}
                className="w-full h-auto object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center items-center gap-[142px] mt-8 max-lg:mt-4 max-sm:gap-[80px]">
          <button
            className="flex items-center justify-center bg-[#8B1E3F] size-[78px] max-sm:scale-75 rounded-full cursor-pointer"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <svg
              width="37"
              height="36"
              viewBox="0 0 37 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.75 18L7.25 18M7.25 18L17.375 7.875M7.25 18L17.375 28.125"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className="flex items-center justify-center bg-[#8B1E3F] size-[78px] max-sm:scale-75 rounded-full cursor-pointer"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.0625 18L28.9375 18M28.9375 18L19.0938 28.125M28.9375 18L19.0938 7.875"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </RebootSection>
  );
}
