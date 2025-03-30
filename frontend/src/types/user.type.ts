export interface IBasket {
	basket_id: number;
	product_color: string
	product_id: number;
	product_image: string;
	product_price: number;
	product_size: number;
	product_title: string;
	product_description: string;
	max_quantity: number;
	quantity: number;
}

export interface ILoginReponse {
	success: boolean;
	userData: {
		id: number;
		passwordhash: string;
		firstname: string | null;
		surname: string | null;
		email: string;
		phone: string | null;
		basket: IBasket[] | null;
		history: string | null;
		role: string;
		avatar: string | null;
	}
	refreshToken: string;
	accessToken: string;
}

export interface IGetUser {
	success: boolean;
	user: {
		id: number;
		firstname: string | null;
		surname: string | null;
		email: string;
		phone: string | null;
		basket: IBasket[] | null;
		history: string | null;
		role: string;
		avatar: string | null;
	}
}