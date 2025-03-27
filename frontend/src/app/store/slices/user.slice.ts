import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUser {
	cardnumber: string;
	firstname: string;
	passwordhash: string;
	basket: string[];
	carddate: string;
	cardcvv: string;
	history: string;
	surname: string;
	phone: string;
	email: string;
	role: string;
	id: number;
	photo: string;
	status: "authorized" | "unauthorized",
	loading: boolean
}

const initialState = {
	cardnumber: "",
	firstname: "",
	basket: [""],
	carddate: "",
	cardcvv: "",
	history: "",
	surname: "",
	phone: "",
	email: "",
	role: "",
	id: 0,
	photo: "",
	status: "unauthorized",
	loading: true
}

const UserSlice = createSlice({
	name: "UserSlice",
	initialState,
	reducers: {
		setUser: (state, { payload }: PayloadAction<IUser>) => {
			state = {
				...payload,
				loading: false,
				status: "authorized",
			}
			return state
		}
	}
})

export default UserSlice