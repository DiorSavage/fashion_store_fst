export interface IProduct {
	id: number;
	title: string;
	mainimg: string;
	sizes: string[];
	imgs: string[] | null;
	article: string;
	category: string;
	color: string[];
	brand: string;
	model: string;
	collaboration: string;
	price: number[];
	discount: number;
	description: string;
	typeproduct: string;
}

export interface IMutationProduct extends Omit<IProduct, "id" | "imgs" > {}

export interface INewProduct extends Omit<IProduct, "id" | "imgs" | "mainimg" | "price" | "color" | "sizes"> {
	price: string;
	color: string;
	sizes: string;
}

export interface IProducts {
	products: IProduct[];
	success: boolean
}