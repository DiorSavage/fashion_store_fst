"use client"

interface IAuth {
	type: string;
	authData: {
		email: string;
		password: string;
		confpassword: string
		role: string;
	};
	authUser: (e: FormEvent, type: string) => void;
	remember?: boolean;
	setAuthData: (data: {  email: string; password: string; confpassword: string; role: string }) => void
}

import { FormEvent, useRef } from 'react'

const AuthBlock = ({ type, authData, remember=false, authUser, setAuthData }: IAuth) => {

	const inputRef = useRef<HTMLInputElement>(null)

	return (
		<form onSubmit={(e) => authUser(e, type)} className='w-[45%] flex flex-col my-12 gap-y-6 p-9 rounded-md border border-[#E9EAEE]'>
			<h1 className='font-bold text-[23px] text-[#303030]'>
				{type}
			</h1>
			<label className='flex flex-col gap-y-2 bg-[#F9F9F9] py-3 px-5'>
				Email
				<input onChange={(e) => setAuthData({
					...authData,
					email: e.target.value
				})} className='text-[#424347] focus-visible:bg-white outline-none py-1 px-2 font-normal bg-transparent placeholder:text-xs' placeholder='Введите Email' type="text" />
			</label>
			<label className='flex flex-col gap-y-2 bg-[#F9F9F9] py-3 px-5'>
				Пароль
				<input onChange={(e) => setAuthData({
					...authData,
					password: e.target.value
				})} className='text-[#424347] focus-visible:bg-white outline-none py-1 px-2 font-normal bg-transparent placeholder:text-xs' placeholder='Введите пароль' type="password" />
			</label>
			{type === 'Регистрация' && (
				<label className='flex flex-col gap-y-2 bg-[#F9F9F9] py-3 px-5'>
					Подтвердите пароль
					<input className='bg-transparent focus-visible:bg-white outline-none py-1 px-2 placeholder:text-xs text-[#424347] font-normal' type="password" placeholder='Подтвердите пароль' />
				</label>
			)}
			{type === 'Вход' && (
				<div className='flex justify-between items-center w-full'>
					<label className='flex items-center gap-x-1'>
						<input type="checkbox" ref={inputRef} />
						<span className='text-sm text-black font-normal'>Запомнить меня</span>
					</label>
					<button className='text-sm font-normal text-[#676767] transition-all duration-300 hover:text-site-blue underline underline-offset-4'>Забыли пароль?</button>
				</div>
			)}
			<button type='submit' className='text-white mx-auto bg-[#121214] w-2/4 py-3 rounded-md transition-all duration-300 hover:bg-site-blue'>{type === 'Вход' ? 'Войти' : 'Зарегистрироваться'}</button>
		</form>
	)
}

export default AuthBlock