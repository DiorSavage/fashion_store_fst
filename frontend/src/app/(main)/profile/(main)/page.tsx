"use client"

import Loading from '@/app/_components/Loading'
import { useGetOrdersQuery } from '@/app/store/api/orders.api'
import { useAppSelector } from '@/app/store/hooks'
import { Blocks } from '@/constants/profile.constant'
import BlockAbout from '../_components/BlockAbout'
import OrdersProfile from '../_components/OrdersProfile'

export default function ProfilePage() {
	const userData = useAppSelector(state => state.UserSlice)
	const { data, isLoading, isSuccess, isError } = useGetOrdersQuery()

	if (isSuccess && !isError) {
		return (
			<div className='flex flex-col gap-y-9 flex-grow'>
					{userData.firstname ? <h2 className='font-semibold text-2xl'>Приветствуем, {userData.firstname}</h2> : <h2 className='font-semibold text-2xl'>Добро пожаловать</h2>}
					<div className='grid grid-cols-3 gap-8'>
						{Blocks.map((item, index) => {
							return (
								<BlockAbout image={item.image} link={item.link} title={item.title} key={index} />
							)
						})}
					</div>
					{data.length > 0 && (
						<OrdersProfile orders={data} />
					)}
			</div>
		)
	} else if (isLoading) {
		return (
			<Loading />
		)
	} else {
		return (
			<div>poshel naxyu otsuda eblan</div>
		)
	}
}