'use client'

import Loading from '@/app/_components/Loading'
import { useAppSelector } from '@/app/store/hooks'
import { profilePage } from '@/constants/profile.constant'
import { Image } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function ProfileLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	const userData = useAppSelector(state => state.UserSlice)
	const router = useRouter()

	// const changeVisible = (showPassword: React.RefObject<HTMLInputElement>, setType: React.Dispatch<React.SetStateAction<string>>) => {
	// 	if (showPassword.current) {
	// 		showPassword.current.checked = !showPassword.current.checked
	// 		setType(showPassword.current.checked ? 'text' : 'password')
	// 	}
	// }

	if (userData.email) {
		return (
			<section className='flex flex-col gap-y-11 my-4'>
				<h1 className='text-black-main font-black text-[31px]'>ЛИЧНЫЙ КАБИНЕТ</h1>
				<div className='w-full flex justify-between gap-x-8'>
					<div className='flex items-start gap-y-8 px-10 py-10 flex-col border border-[#E9EAEE] rounded-md w-max'>
						{profilePage.map((item, index ) => {
							if (item.title === 'Админ' && userData.role !== 'admin') {
								return
							}
							return (
							<Link href={`${item.link === '/admin' ? "/admin" : `/profile${item.link}`}`} key={index} className={`flex gap-x-3 transition-all duration-300 hover:text-site-blue hover:opacity-60 ${item.title === 'Админ' && "mt-auto"}`}>
								<Image width={19} src={item.image} preview={false} />
								<span>{item.title}</span>
							</Link>
							)
						})}
					</div>
					{children}
					{/* {
						React.cloneElement(children, {
							changeVisible: changeVisible,
						})
					} */}
				</div>
			</section>
		)
	} else if (userData.loading) {
		return <Loading />
	} else if (!userData.loading && userData.status === "unauthorized") {
		router.push("/auth")
	}
}