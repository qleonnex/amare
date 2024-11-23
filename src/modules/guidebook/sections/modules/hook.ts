import { useState } from 'react'

const MODULES = [
	{
		title: "Стать магнитом для мужчины",
		desc: "Первый шаг на пути к гармоничным отношениям — это умение привлекать внимание мужчин, сохраняя при этом свою естественность и достоинство. На этом этапе вы научитесь раскрывать свою женственность, а также усиливать свою энергетику, становясь притягательной для мужчин"
	},
	{
		title: "Изменение модели любви, чистка родительской семьи",
		desc: "Многие убеждения и сценарии, которые мы неосознанно следуем в отношениях, родом из детства и отношений в родительской семье. В этом модуле вы проработаете свои семейные программы и измените модель любви на здоровую и гармоничную"
	},
	{
		title: "Проработка негативных сценариев",
		desc: "Застревание в негативных сценариях может привести к хроническому стрессу, тревоге, депрессии, саморазрушительному поведению и ухудшению отношений. В этом модуле мы сосредоточимся на выявлении и проработке негативных сценариев, которые формируют ваше поведение в отношениях. Эти сценарии могут быть результатом детских травм, прошлых неудач или усвоенных моделей поведения. Вы научитесь распознавать такие сценарии, которые мешают вам строить счастливые отношения, и заменять их на новые, здоровые и позитивные установки"
	},
	{
		title: "От первых свиданий к браку",
		desc: "Умение вести отношения от первого знакомства до создания семьи — важный навык, который требует осознанности и понимания. Вы узнаете, как правильно развивать отношения на каждом этапе, чтобы прийти к гармоничному и крепкому союзу"
	},
	{
		title: "Секреты мужской психологии",
		desc: "Идеального мужчину невозможно найти, но его можно создать, используя свое женское влияние на противоположный пол. Мужчины мыслят и воспринимают мир иначе, чем женщины. Понимание основ мужской психологии поможет вам избегать недопонимания в отношениях и строить более глубокие и доверительные связи с партнером.Модель отношений в паре всегда выстраивает женщина. И тебе важно быть мудрой женщиной, чтобы выстроить те отношения, которые сделают тебя счастливой"
	},
	{
		title: "Внутренний мужчина и внутренняя женщина",
		desc: "Каждый из нас дуален. Внутри есть и мужское, и женское. И если внутри сформированы вот эти «неправильные», перекошенные в ненужную сторону мужчины и женщины, если между ними внутри нет любви, ее не будет нигде. Любовь получается только внутри. Внешней любви не бывает. К тебе могут испытывать любовь только тогда, когда ты сама наполнена любовью. Этот модуль поможет вам сбалансировать мужскую и женскую энергии внутри себя. Понимание этого баланса важно не только для построения отношений, но и для достижения внутренней гармонии и уверенности"
	},
	{
		title: "Идеальный секс-снятие блоков",
		desc: "Сексуальность это энергетический ресурс. Если энергии много, то желания легко исполняются, к вам тянутся люди, вы легко проявляетесь в социуме. Если есть сексуальные блоки, то их нужно обязательно убирать. В этом модуле будут даны практические технологии,  с помощью которых вы восстановите свою сексуальность и устраните все ограничивающие убеждения и их источники: ситуации прошлого, негативное влияние других людей. Перепишем негативные программы на позитивные и задействуем энергию вашего рода. Это вам даст дополнительный источник энергии, молодости и красоты. Вы помолодеете, тело начнет меняться на молекулярном уровне и вы будете подсвечиваться в пространстве как желанная женщина"
	},
	{
		title: "Как сделать так, что была пара была финансово успешной. С каким партнером это возможно",
		desc: "Финансовое благополучие семьи во многом зависит от того, насколько оба партнера готовы к созданию общего будущего и умеют управлять финансами. Мы обсудим, как сделать так, чтобы пара была успешной и с какими партнерами это возможно. Поймёте, как общее планирование бюджета влияет на отношения с партнёром. Получите инструменты для проработки финансового вопроса в паре"
	},
	{
		title: "Секреты женского влияния. Углубление",
		desc: "В этом модуле будут раскрыты: Механизмы влияния. Стратегии влияния. Правила убеждения. Технологии сирены. Женщина способна влиять на успех мужчины, его амбиции и уверенность в себе. Вы научитесь развивать в себе навыки, которые позволят вам стать той женщиной, рядом с которой мужчина расцветает и достигает своих целей. Влиять нужно по разному на разных людей. Вы приобретете навыки воздействовия в обход сознания для получения желаемого"
	},
	{
		title: "Эксперт по цифровой нумерологии. Совместимость пары по дате рождения. Ценности, потребности и задачи партнера",
		desc: "На заключительном этапе вы узнаете основы нумерологии и научитесь определять совместимость партнеров по дате рождения. Мы также рассмотрим, как просчитать ценности, потребности и жизненные задачи партнеров, что поможет вам правильно подбирать технологии и стратегии влияния"
	},
]

export const useSlider = () => {
	const [stage, setStage] = useState(0);

	function handleNext() {
		setStage(stage + 1);
	}

	function handlePrevious() {
		setStage(stage - 1);
	}

	return {stage, MODULES, handleNext, handlePrevious}
}