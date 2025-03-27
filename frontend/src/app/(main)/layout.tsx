"use client"

import { useEffect } from 'react'
import MenuMobile from '../_components/MenuMobile'
import { useCheckAuthQuery } from '../store/api/user.api'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import UserSlice from '../store/slices/user.slice'
import Footer from './_components/Footer'
import Header from './_components/Header'

export default function MainLayout({ children }: { children: React.ReactNode }) {

	const { data, isLoading, isSuccess, isError, error } = useCheckAuthQuery()
	const userData = useAppSelector(state => state.UserSlice)
	const userDispatch = useAppDispatch()

	useEffect(() => {
		if (isSuccess && data && !isError) {
			userDispatch(UserSlice.actions.setUser(data))
		}
		else if (isError) {
			userDispatch(UserSlice.actions.setUser({
				...userData, 
				status: "unauthorized",
				loading: false
			}))
		}
	}, [isLoading])

	return (
		<>
			<MenuMobile />
			<Header />
			<main className='relative z-20 mx-auto w-[95%] xl:w-4/5 gap-y-12'>
				{children}
			</main>
			<Footer />
		</>
	)
}