import { IBasket } from '@/types/user.type'
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUser {
	firstname: string;
	basket: IBasket[];
	history: string;
	surname: string;
	phone: string;
	email: string;
	role: string;
	id: number;
	avatar: string;
	status: "authorized" | "unauthorized",
	loading: boolean
}

const initialState: IUser = {
	firstname: "",
	basket: [],
	history: "",
	surname: "",
	phone: "",
	email: "",
	role: "",
	id: 0,
	avatar: "",
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