// export const catalog: { title: string, link: string }[] = [
// 	{
// 		title: "Одежда",
// 		link: "/clothes"
// 	},
// 	{
// 		title: "Обувь",
// 		link: "/shoes"
// 	},
// 	{
// 		title: "Аксессуары",
// 		link: "/accessories"
// 	},
// 	{
// 		title: "Расчет стоимости",
// 		link: '/calculator'
// 	},
// 	{
// 		title: "Блог",
// 		link: '/blog'
// 	},
// 	{
// 		title: "Контакты",
// 		link: '/contacts'
// 	},
// 	{
// 		title: "Доставка",
// 		link: '/delivery'
// 	},
// 	{
// 		title: "Оплата",
// 		link: '/payment'
// 	},
// 	{
// 		title: "FAQ",
// 		link: '/faq'
// 	}
// ]

type IInfo = {
	[key in string]: { title: string, link: string }[]
}

export const info: IInfo = {"catalog": 
	[
		{
			title: "Одежда",
			link: "/clothes"
		},
		{
			title: "Обувь",
			link: "/shoes"
		},
		{
			title: "Аксессуары",
			link: "/accessories"
		},
		{
			title: "Расчет стоимости",
			link: '/calculator'
		}
	],
	"information":
	[
		{
			title: "Блог",
			link: '/blog'
		},
		{
			title: "Контакты",
			link: '/contacts'
		},
		{
			title: "Доставка",
			link: '/delivery'
		},
		{
			title: "Оплата",
			link: '/payment'
		},
		{
			title: "FAQ",
			link: '/faq'
		}
	]
}

export const socialLinks: { title: string, links: string[] }[] = [
	{
		title: 'МЕССЕНДЖЕРЫ',
		links: ['/tg.png', '/wapp.png']
	},
	{
		title: 'НАШИ СОЦ.СЕТИ',
		links: ['/vk.png']
	}
]