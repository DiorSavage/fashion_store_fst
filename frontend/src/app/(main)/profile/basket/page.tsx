"use client"

import { useAppSelector } from '@/app/store/hooks'
import BasketCard from '../_components/BasketCard'

const BasketPage = () => {
	const userData = useAppSelector(state => state.UserSlice)
	return (
		<section className='flex flex-col gap-y-5 flex-grow'>
			<h1 className='text-[#303030] font-bold text-[23px]'>Ваша корзина</h1>
			{userData.loading ? <div>...Loading</div> : !userData.loading && userData.basket.length > 0 ? (
				<div className='flex flex-col gap-y-6'>
					{userData.basket.map((prod, index) => {
						return (
							<BasketCard key={index} productData={prod} />
						)
					})}
				</div>
			) : <div>Error</div>}
			<button className='w-full h-12 transition-all rounded-md duration-200 bg-site-blue text-white hover:bg-white hover:text-site-blue'>Оформить заказ</button>
		</section>
	);
}

export default BasketPage