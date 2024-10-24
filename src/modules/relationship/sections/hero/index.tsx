import { Container } from '@/components/shared/container'
import { Marck_Script } from "next/font/google"
import Image from "next/image"

import { Info } from '../../components/info'
import { ToMarafon } from '../../components/to-marafon'
import cs from "./style.module.css"

const marckScript = Marck_Script({
	weight: ["400"],
	subsets: ["cyrillic"]
});

export const Hero = () => {
	return (
		<Container>
			<div className={cs.hero}>
				<div className={cs.left}>
					<Info className="mb-10"/>
					<p className={marckScript.className}>Рина Лазар, практикующий психолог и коуч</p>
					<h1>Как найти своего мужчину. Причины одиночества</h1>
					<ToMarafon variant="light"/>
				</div>
				<Image className={cs.image} src="/images/person.png" alt="Рина Лазар" width={1005} height={1350}/>
				<Image className={cs.image_mob} src="/images/person-mobile.png" alt="Рина Лазар" width={1005} height={1350}/>
			</div>
		</Container>
	);
}