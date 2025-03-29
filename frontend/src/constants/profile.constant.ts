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
		title: "Админ",
		link: "/admin",
		image: "/admin.png"
	},
	{
		title: "Смена пароля",
		link: "/passwords",
		image: "/passwords.png"
	},
]

export const Blocks: IProfilePage[] = [
	{
		title: "Мой профиль",
		link: "/profile/editing_profile",
		image: "/profile.svg"
	},
	{
		title: "Заказы",
		link: "/profile/my_orders",
		image: "/my_orders.svg"
	},
	{
		title: "Мои адреса",
		link: "/profile/locations",
		image: "/locations.svg"
	},
	{
		title: "Сменить пароль",
		link: "/profile/passwords",
		image: "/settings.svg"
	},
	{
		title: "История заказов",
		link: "/profile/history",
		image: "/history_orders.png"
	},
	{
		title: "Выход",
		link: "/profile/logout",
		image: "/logout.svg"
	}
]

export const Orders: string[] = [
	"Всего", "Скидка", "Доставка", "Итого"
]