"use client"

import { useEffect, useRef, useState } from 'react'
import ProfileInput from '../_components/ProfileInput'

export default function ChangePassword() {

	const showoldPassword = useRef<HTMLInputElement>(null)
	const shownewPassword = useRef<HTMLInputElement>(null)
	const showcurPassword = useRef<HTMLInputElement>(null)
	const [oldtype, setoldType] = useState<string>('password')
	const [newtype, setnewType] = useState<string>('password')
	const [curtype, setcurType] = useState<string>('password')

	const changeVisible = (showPassword: React.RefObject<HTMLInputElement>,  setType: React.Dispatch<React.SetStateAction<string>> | null) => {
		if (showPassword.current) {
			showPassword.current.checked = !showPassword.current.checked
			if (setType) setType(showPassword.current.checked ? 'text' : 'password')
		}
	} //! ПРИДУМАТЬ ЧТО НИБУДЬ, ФУНКЦИЯ ДУБЛИРУЕТСЯ В НЕСКОЛЬКИХ КОМПОНЕНТАХ, ЧЕРЕЗ  React.cloneElement сосу

	return ( //! СОХРАНЕНИЕ ПОЛЕЙ ПОСЛЕ ПЕРЕХОДА НА ДРУГУЮ СТРАНИЦУ
		<div className='flex flex-col gap-y-5 w-1/2 flex-grow [&>label]:w-1/2'>
			<h1 className='text-dark-gray font-bold text-[23px]'>Смена пароля</h1>
			<ProfileInput title='Текущий пароль' changeVisible={changeVisible} showPassword={showoldPassword} setType={setoldType} type={oldtype} placeholder='Введите текущий пароль' />
			<ProfileInput title='Новый пароль' changeVisible={changeVisible} showPassword={shownewPassword} setType={setnewType} type={newtype} placeholder='Введите новый пароль' />
			<ProfileInput title='Подтвердите пароль' changeVisible={changeVisible} showPassword={showcurPassword} setType={setcurType} type={curtype} placeholder='Подтвердите пароль' />
			<button className='transition-all duration-300 hover:bg-[#49D0FF] hover:text-white bg-black-main text-white w-1/4 py-4 rounded-md'>СОХРАНИТЬ</button>
		</div>
	)
}