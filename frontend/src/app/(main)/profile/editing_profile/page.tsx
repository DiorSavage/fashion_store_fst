'use client'

import { useAppSelector } from '@/app/store/hooks'
import ProfileInput from '../_components/ProfileInput'
import { Image } from 'antd'

export default function EditingProfile() {

	const userData = useAppSelector(state => state.UserSlice)
	console.log(userData)

	return (
		<div className='flex flex-col flex-grow gap-y-8'>
			<h1 className='text-dark-gray font-bold text-[23px]'>Редактирование профиля</h1>
			<div className='flex flex-col gap-y-4'>
				<Image className='rounded-full bg-[70%]' src={userData.photo ? userData.photo : "/profile.svg"} preview={false} width={150}  />
			</div>
			<form className='grid grid-cols-2 w-full gap-8 h-max'>
				<ProfileInput title='Ваше имя' type={"text"} placeholder='Введите ваше имя' />
				<ProfileInput title='Ваша фамилия' type={"text"} placeholder='Введите вашу фамилию' />
				<ProfileInput title='Email' type={"text"} placeholder='example@gmail.com' />
				<ProfileInput title='Номер телефона' type={"text"} placeholder='+7 (___) ___-__-__' />
				<button className='transition-all duration-300 hover:bg-[#49D0FF] hover:text-white bg-black-main text-white w-2/4 py-4 rounded-md'>СОХРАНИТЬ</button>
			</form>
		</div>
	)
}