export interface IOrder {
	id: number;
	date: string;
	status: "В обработке" | "Готов к выдаче" | "Выдан" | "Отправлен" | "Отклонен";
	products: number[];
	result: number;
	sizes: number[];
}