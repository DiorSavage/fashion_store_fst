export interface ILoginReponse {
	success: boolean;
	userData: {
		id: number;
		passwordhash: string;
		firstname: string | null;
		surname: string | null;
		email: string;
		phone: string | null;
		basket: string[] | null;
		history: string | null;
		role: string;
		cardnumber: string | null;
		carddate: string | null;
		cardcvv: string | null;
		photo: string | null;
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
		basket: string | null;
		history: string | null;
		role: string;
		cardnumber: string | null;
		carddate: string | null;
		cardcvv: string | null;
		photo: string | null;
	}
}