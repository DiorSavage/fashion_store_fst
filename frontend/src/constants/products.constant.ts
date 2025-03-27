interface IDeliveryConstant {
	header: string;
	text: string;
}

interface IFaqConstants {
	[key: string]: {
		title: string;
		text: string;
	}[]
}

interface IProductsCategories {
	[key: string]: {
		categories: string[];
	}
}

interface IBrandsConstant {
	[key: string]: {
		values: {
			title: string;
			value: string;
		}[]
	}
}

interface IModelsConstants {
	[key: string]: {
		values: {
			title: string;
			value: string;
		}[]
	}
} 

export const DeliveryConstants: IDeliveryConstant[] = [
	{
		header: "В обработке",
		text: "Заказ ожидает подтверждения платежа."
	},
	{
		header: "Оплачен",
		text: "Заказ оплачен и в течении дня будет выкуплен с китайского маркетплейса Poizon."
	},
	{
		header: "Доставка на склад в Китае",
		text: "Заказ выкуплен и уже направляется на наш склад в Китае."
	},
	{
		header: "На складе в Китае",
		text: "Заказ поступил на наш склад в Китае и скоро будет отправлен в Россию."
	},
	{
		header: "Доставка на склад в РФ",
		text: "Заказ отправился на наш склад в России."
	},
	{
		header: "На складе в РФ",
		text: "Заказ поступил на наш склад и в скором времени отправиться на указанный вами адрес."
	},
	{
		header: "Доставляется",
		text: "Заказ уже направляется на указанный вами адрес."
	},
	{
		header: "Завершен",
		text: "Заказ прибыл в место вручения."
	},
]

export const pageNames: { [key: string]: string } = {
	"shoes": "Обувь",
	"clothes": "Одежда"
}

export const productsCategories: IProductsCategories = {
	"Обувь": {
		categories: ["Кроссовки", "Кеды", "Лофферы", "Сандали", "Шлепки"]
	},
	"Одежда": {
		categories: ["Рубашки", "Кофты", "Брюки", "Костюмы", "Платья", "Футболки", "Свитшоты",]
	}
}

export const productsSizes: number[] =[
	36, 36.5, 37, 37.5, 38, 38.5, 39, 39.5, 40, 40.5, 41, 42, 43
]

export const filtersNames: string[][] = [
	["page", "category"],
	["categories", "typeproduct"],
	["colors", "color"],
	["sizes", "sizes"],
	["brands", "brand"],
	["models", "model"],
]

export const faqConstants: IFaqConstants[] = [
	{
		"Общие вопросы": [
			{
				title: "ЧЕМ ЗАНИМАЕТСЯ ВАШ ИНТЕРНЕТ-МАГАЗИН?",
				text: "Мы гарантируем полную безопасность ваших персональных данных. Если у вас есть вопросы, пожалуйста, ознакомьтесь с нашей Политикой конфиденциальности."
			},
			{
				title: "ГАРАНТИРОВАНА ЛИ БЕЗОПАСНОСТЬ МОИХ ДАННЫХ?",
				text: "Мы гарантируем полную безопасность ваших персональных данных. Если у вас есть вопросы, пожалуйста, ознакомьтесь с нашей Политикой конфиденциальности."
			},
			{
				title: "ГАРАНТИРОВАНА ЛИ БЕЗОПАСНОСТЬ МОИХ ДАННЫХ?",
				text: "Мы гарантируем полную безопасность ваших персональных данных. Если у вас есть вопросы, пожалуйста, ознакомьтесь с нашей Политикой конфиденциальности."
			},
		]
	},
	{
		"ТОВАРЫ": [
			{
				title: "ВЫ РЕАЛИЗУЕТЕ ОРИГИНАЛЬНЫЕ ТОВАРЫ?",
				text: "Мы гарантируем полную безопасность ваших персональных данных. Если у вас есть вопросы, пожалуйста, ознакомьтесь с нашей Политикой конфиденциальности."
			},
			{
				title: "В ВАШЕМ МАГАЗИНЕ ПРЕДСТАВЛЕНЫ НОВЫЕ ТОВАРЫ?",
				text: "Мы гарантируем полную безопасность ваших персональных данных. Если у вас есть вопросы, пожалуйста, ознакомьтесь с нашей Политикой конфиденциальности."
			},
			{
				title: "ПОЧЕМУ ЦЕНА ЗАВИСИТ ОТ РАЗМЕРА?",
				text: "Мы гарантируем полную безопасность ваших персональных данных. Если у вас есть вопросы, пожалуйста, ознакомьтесь с нашей Политикой конфиденциальности."
			},
			{
				title: "СТОИМОСТЬ ТОВАРов ОКОНЧАТЕЛЬНАЯ?",
				text: "Мы гарантируем полную безопасность ваших персональных данных. Если у вас есть вопросы, пожалуйста, ознакомьтесь с нашей Политикой конфиденциальности."
			},
		],
	},
	{
		"ДОСТАВКА": [
			{
				title: "СКОЛЬКО ИДЕТ ДОСТАВКА?",
				text: "Мы гарантируем полную безопасность ваших персональных данных. Если у вас есть вопросы, пожалуйста, ознакомьтесь с нашей Политикой конфиденциальности."
			},
			{
				title: "МОЖНО ЛИ ВЕРНУТЬ ТОВАР?",
				text: "Мы гарантируем полную безопасность ваших персональных данных. Если у вас есть вопросы, пожалуйста, ознакомьтесь с нашей Политикой конфиденциальности."
			},
		]
	}
]

export const brandsConstants: IBrandsConstant = {
	"shoes": {
		values: [
			{
				title: "Adidas",
				value: "adidas"
			},
			{
				title: "Nike",
				value: "nike"
			},
			{
				title: "AppleGate",
				value: "applegate"
			},
			{	
				title: "Basic Fitness",
				value: "basic-fitness"
			},
			{
				title: "BH Fitness",
				value: "bh-Fitness"
			},
			{
				title: "Body Craft",
				value: "body-craft"
			},
			{
				title: "Bronze Gym",
				value: "bronze-gym"
			},
			{
				title: "Adidas",
				value: "adidas"
			},
			{
				title: "Bronze Gym",
				value: "bronze-gym"
			},
			{
				title: "Adidas",
				value: "adidas"
			},
			{
				title: "Bronze Gym",
				value: "bronze-gym"
			},
			{
				title: "Adidas",
				value: "adidas"
			},
		]
	},
	"clothes": {
		values: [
			{
				title: "Gucci",
				value: "gucci"
			},
			{
				title: "Churka",
				value: "churka"
			},
			{
				title: "Nigger",
				value: "nigger"
			},
		]
	}
}

export const modelsConstants: IModelsConstants = {
	"nike": {
		values: [
			{
				title: "Air Force 1 Low",
				value: "air-force-1-low"
			},
			{
				title: "Air Force 1 High",
				value: "air-force-1-high"
			},
			{
				title: "Air Force 1 Mid",
				value: "air-force-1-mid"
			},
			{
				title: "Air Humara",
				value: "air-humara"
			},
			{
				title: "Air Force 1 Max",
				value: "air-force-1-max"
			},
			{
				title: "Air Force 1 Slay",
				value: "air-force-1-slay"
			},
		]
	}
}

export const colorsConstants: { [key: string]: string } = {
	"multicolor": "#FF0000",
	"желтый": "#FFFF00",
	"серый": "#CCCCCC",
	"белый": "#FAFAFA",
	"синий": "#0000FF",
	"голубой": "#6ECFFF",
	"красный": "#FF0000",
	"черный": "#000000",
	"коричневый": "#754C24",
	"бежевый": "#CEB593",
	"оранжевый": "#FFA500",
	"фиолетовый": "#EE82EE",
	"розовый": "#FFC0CB",
	"зеленый": "#008000",
}