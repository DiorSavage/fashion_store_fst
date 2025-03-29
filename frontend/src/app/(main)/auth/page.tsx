"use client"

import { useLoginUserMutation, useRegisterMutation } from '@/app/store/api/user.api';
import { FormEvent, useState } from 'react';
import AuthBlock from './_components/AuthBlock';
import { useRouter } from 'next/navigation'
interface IAuth {
	email: string;
	password: string;
	confpassword: string;
	role: string
}

const Auth = () => {

	const [loginUser]  = useLoginUserMutation()
	const [registrateUser] = useRegisterMutation()
	const [authData, setAuthData] = useState<IAuth>({
		email: "",
		password: "",
		confpassword: "",
		role: "user"
	})
	const router = useRouter()

	const authUser = (e: FormEvent, type: string) => {
		e.preventDefault()
		if (type === 'Вход') {
			loginUser(authData).then(res => console.log(res.data?.accessToken)).then(() => {
				setAuthData({
					email: "",
					password: "",
					confpassword: "",
					role: "user"
				})
			}).then(res => router.push("/profile")).catch(res => router.push("/"))
		} else if (type === 'Регистрация') {
			if (authData.password === authData.confpassword) {
				alert('Пароли не совпадают')
				return
			} else {
				registrateUser(authData).then(res => console.log(res.data)).then(() => {
					setAuthData({
						email: "",
						password: "",
						confpassword: "",
						role: "user"
					})
				}).then(res => router.push("/"))
			}
		}
	}

	return (
		<section className='flex flex-col gap-y-11'>
			<div className='flex gap-x-4 items-center text-sm my-3 text-[#0000008e]'>
				<span>Главная</span>
				<span className='text-xs font-extrabold '> {">"} </span>
				<span className='font-bold text-black'>Авторизация</span>
			</div>
			<h1 className='font-extrabold text-[31px] text-[#121214]'>Аккаунт</h1>
			<div className='flex flex-col xl:flex-row justify-between w-full'>
				<AuthBlock type='Вход' authUser={authUser} setAuthData={setAuthData} authData={authData} />
				<AuthBlock type='Регистрация' authUser={authUser} authData={authData} setAuthData={setAuthData} />
			</div>
		</section>
	)
}

export default Auth