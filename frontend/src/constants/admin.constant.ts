interface IAdminPage {
	title: string
	link: string
}

interface IAddProductInputs {
	title: string;
	help: string;
	name: string;
	placeholder: string;
}

export const adminLinks: IAdminPage[] = [
	{
		title: "Добавление товара",
		link: "/add_product"
	},
	{
		title: "Обновление товара",
		link: "/update_product"
	},
	{
		title: "Удаление товара",
		link: "/remove_product"
	},
	{
		title: "Выдача роли админа",
		link: "/add_admin"
	},
]

export const AddProductInputs: IAddProductInputs[] = [
	{
		title: "Название",
		help: "Введите название товара",
		name: "title",
		placeholder: "Название товара"
	},
	{
		title: "Описание товара",
		help: "Введите продукта товара",
		name: "description",
		placeholder: "Описание товара"
	},
	{
		title: "Цвет или цвета товара",
		help: "Введите цвет или цвета товара (если несколько, то через запятую без пробелов)",
		name: "color",
		placeholder: "Цвет товара"
	},
	{
		title: "Категория товара",
		help: "Введите категорию товара",
		name: "category",
		placeholder: "Категория товара"
	},
	{
		title: "Модель",
		help: "Введите модель товара",
		name: "model",
		placeholder: "Модель товара"
	},
	{
		title: "Название бренда",
		help: "Введите название бренда товара",
		name: "brand",
		placeholder: "Название бренда товара"
	},
	{
		title: "Коллаборация",
		help: "Введите коллаборацию с другим брендом если есть",
		name: "collaboration",
		placeholder: "Коллаборация товара"
	},
	{
		title: "Размеры товара",
		help: "Введите размеры товара через запятую без пробелов (если нет, то оставляйте поле пустым)",
		name: "sizes",
		placeholder: "Название товара"
	},
	{
		title: "Цена",
		help: "Введите цену товара ( через запятую без пробелов соответственно с размерами, введенными ранее )",
		name: "price",
		placeholder: "Цена товара"
	},
	{
		title: "Скидка",
		help: "Введите скидку на товар (просто число), если она есть. Если нет, то оставьте поле пустым",
		name: "discount",
		placeholder: "Скидка на товар"
	},
]
