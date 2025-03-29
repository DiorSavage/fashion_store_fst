interface IProfilePage {
	title: string;
	link: string;
	image: string;
}

export const profilePage: IProfilePage[] = [
	{
		title: "Мой аккаунт",
		link: "/",
		image: "/profile.svg"
	},
	{
		title: "Редактировать профиль",
		link: "/editing_profile",
		image: "/settings.svg"
	},
	{
		title: "История заказов",
		link: "/history",
		image: "/history_orders.png"
	},
	{
		title: "Мои заказы",
		link: "/my_orders",
		image: "/my_orders.svg"
	},
	{
		title: "Адреса",
		link: "/locations",
		image: "/locations.svg"
	},
	{
		title: "Редактировать адреса",
		link: "/editing_locations",
		image: "/set_locations.svg"
	},
	{
		title: "Пароль",
		link: "/passwords",
		image: "/passwords.svg"
	},
	{
		title: "Выход",
		link: "/logout",
		image: "/logout.svg"
	},
	{
		title: "Админ",
		link: "/admin",
		image: "/admin.png"
	},
]

export const Blocks: IProfilePage[] = [
	{
		title: "Мой профиль",
		link: "/about",
		image: "/profile.svg"
	},
	{
		title: "Заказы",
		link: "/my_orders",
		image: "/my_orders.svg"
	},
	{
		title: "Мои адреса",
		link: "/locations",
		image: "/locations.svg"
	},
	{
		title: "Редактировать профиль",
		link: "/editing_profile",
		image: "/settings.svg"
	},
	{
		title: "Избранные товары",
		link: "/favourites",
		image: "/fav_products.svg"
	},
	{
		title: "Выход",
		link: "/logout",
		image: "/logout.svg"
	}
]

export const Orders: string[] = [
	"Всего", "Скидка", "Доставка", "Итого"
]