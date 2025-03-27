export const headerLink: { title: string, link: string }[] = [
	{
		title: "Одежда",
		link: "/catalog/clothes"
	},
	{
		title: "Обувь",
		link: "/catalog/shoes"
	},
	{
		title: "Аксессуары",
		link: "/catalog/accessories"
	},
	{
		title: "Бренды",
		link: "/catalog/brands"
	},
	{
		title: "Расчет стоимости",
		link: "/calculator"
	},
	{
		title: "Информация",
		link: "/information"
	}
]

export const headerIcons: { icon: string, link: string | { pathname: string, query: { [key: string]: string }}, alt: string }[] = [
	{
		icon: '/star.png',
		link: '/favourites',
		alt: "favourites"
	},
	{
		icon: '/account.png',
		link: '/auth',
		alt: "account"
	},
	{
		icon: '/basket.png',
		link: '/basket',
		alt: "basket"
	},
]
export const greetingIcons: { image: string; mob_image: string }[] = [
	{
		image: "/greeting_fst.png",
		mob_image: "/greeting_mobile.png"
	},
	{
		image: "/greeting_fst.png",
		mob_image: "/greeting_mobile.png"
	},
	{
		image: "/greeting_fst.png",
		mob_image: "/greeting_mobile.png"
	},
	{
		image: "/greeting_fst.png",
		mob_image: "/greeting_mobile.png"
	},
	{
		image: "/greeting_fst.png",
		mob_image: "/greeting_mobile.png"
	}
]