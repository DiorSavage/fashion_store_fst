export interface IOrder {
	color: string;
	status: string;
	size: number;
	quantity: number;
	product_title: string;
	order_id: number;
	created_at: string;
	price_per_unit: number
}

export interface IOrderInfo {
	created_at: string;
	delivery_address: string;
	id: number;
	payment_method: string;
	status: "pending" | "sent" | "delivered" | "canceled";
	total_price: number;
	user_id: number;
	orders: IOrder[];
}