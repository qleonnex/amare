import { Container } from '@/components/shared/container'
import { Marck_Script } from "next/font/google"
import Image from "next/image"

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
					<p className={marckScript.className}>Рина Лазар — дипломированный практикующий психолог и коуч мужско- женских отношений с опытом работы более  20 лет  </p>
					<h1>Как найти своего мужчину и стать той женщиной, которую боятся потерять</h1>
					<ToMarafon variant="light"/>
				</div>
				<Image className={cs.image} src="/images/person.png" alt="Рина Лазар" width={1005} height={1600}/>
				<Image className={cs.image_mob} src="/images/person-mobile.png" alt="Рина Лазар" width={1005} height={1350}/>
			</div>
		</Container>
	);
}