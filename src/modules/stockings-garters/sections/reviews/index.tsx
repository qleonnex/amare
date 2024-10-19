"use client"

import { Container } from '@/components/shared'
import { Icon, Title } from '@/components/ui'
import Image from 'next/image'
import { useContext, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper/types'

import { OpenerContext } from '@/provider/OpenerProvider'
import { Controller } from 'swiper/modules'
import cs from "./style.module.css"

export const Reviews = () => {
	const swiperRef = useRef<SwiperType>();
	const [isBeginning, setIsBeginnig] = useState(true);
	const [isEnd, setIsEnd] = useState(false);
	const { openImg } = useContext(OpenerContext)

	return (
		<Container>
			<div className={cs.inner}>
				<Title>Отзывы клиентов</Title>
				<div className={cs.reviews}>
					<Swiper
						onBeforeInit={(swiper) => {
							swiperRef.current = swiper;
						}}
						onSlideChange={(swiper) => {
							setIsBeginnig(swiper.isBeginning);
							setIsEnd(swiper.isEnd);
						}}
						modules={[Controller]}
						breakpoints={{
							"1024": {
								slidesPerView: 3,
      					spaceBetween: 19,
							},
							"645": {
								slidesPerView: 2,
      					spaceBetween: 16,
							},
							"0": {
								slidesPerView: 1,
								spaceBetween: 10,
							}
						}}
					>
						{new Array(14).fill(0).map((_, i) => (
							<SwiperSlide key={i} className={cs.slide} onClick={() => openImg(`/images/review-${i + 1}.jpg`)}>
								<Image src={`/images/review-${i + 1}.jpg`} width={441} height={284} alt="Отзыв" />
								<div>
									<div className={cs.inner_module}>
										<Icon
											path="/icons/cursor.svg"
											size="32px"
										/>
										<p>Нажмите, чтобы открыть</p>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
					<div className={cs.controllers}>
							<button
								onClick={() => swiperRef.current?.slidePrev()}
								disabled={isBeginning}
							>
								<Icon path="/icons/arrow-left.svg" color="#000" />
							</button>
							<button 
								onClick={() => swiperRef.current?.slideNext()}
								disabled={isEnd}
							>
								<Icon path="/icons/arrow-right.svg" color="#000" />
							</button>
						</div>
				</div>
			</div>
		</Container>
	);
}