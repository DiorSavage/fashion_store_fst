"use client"

import Loading from '@/app/_components/Loading'
import { useGetOrdersQuery } from '@/app/store/api/orders.api'
import { statusTranslate } from '@/constants/orders.constant'
import { Orders } from '@/constants/profile.constant'
import Link from 'next/link'

export default function MyOrders() {

	const { data: OrdersData, isLoading, isSuccess, isError } = useGetOrdersQuery()
	const filteredOrders = OrdersData && OrdersData.filter(order => !["canceled", "delivered"].includes(order.status))
	if (isLoading) {
		return (
			<Loading />
		)
	}
	console.log(filteredOrders)
	if (isSuccess && !isError && filteredOrders) {
		return (
			<div className='flex flex-col flex-grow gap-y-6'>
				<h1 className='text-[#303030] font-bold text-[23px]'>Мои заказы</h1>
				{filteredOrders.length !== 0 ?
				filteredOrders.map(data => {
					return (
						<div key={data.id} className='flex flex-col gap-y-2 items-center'>
							<div className='w-full flex flex-col  border bordre-[#E9EAEE] px-8 py-6 gap-y-6'>
								<div className='flex justify-between w-full items-center'>
									<div className='flex flex-col gap-y-3'>
										<h2 className='text-[#121214] font-bold text-lg'>Заказ #{data.id}</h2>
										<p className='text-[#646464] text-base font-normal'>Был оформлен <span className='w-max font-semibold text-base text-[#141414]'>{new Date(data.created_at).getDate()}/{new Date(data.created_at).getMonth() + 1}/{new Date(data.created_at).getFullYear()}</span> - статус заказа
												<span className={`inline border ml-2 border-[#e9e9e9]  text-[#33f01a] font-semibold text-lg text-center px-3 py-2`}>{statusTranslate[data.status]}</span>
										</p>
									</div>
								<Link href='/' className='transition-all duration-200 hover:text-site-blue  text-black underline underline-offset-8 font-extrabold text-sm'>Вернуться к каталогу</Link>
								</div>
								<div className='flex flex-col w-full gap-y-4'>
									<div className='grid grid-cols-3 border-b px-2 border-[#EBEBEB] text-[#333333] border-opacity-60 text-base font-bold py-1'>
										<span>ТОВАРЫ</span>
										<span className='text-center'>КОЛИЧЕСТВО</span>
										<span className='text-right'>ИТОГО</span>
									</div>
									{data.orders.map(order => {
										return (
											<div key={order.product_title} className='grid grid-cols-3 border-b px-2 border-[#EBEBEB] text-[#333333] border-opacity-60 text-base font-normal py-4'>
												<span>{order.product_title}</span>
												<span className='text-center font-bold'>{order.quantity}</span>
												<span className='text-right font-bold'>{order.price_per_unit}</span>
											</div>
										)
									})}
									{Orders.map((rowName) => {
										return (
											<div key={rowName} className={`grid grid-cols-2 px-2 ${rowName !== 'Итого' ? "border-b border-[#EBEBEB] border-opacity-60" : ""} text-[#333333] text-${rowName === 'Итого' ? '[19px]' : 'base'} font-bold py-4`}>
												<span>{rowName}</span>
												<span className='text-right'>{data.total_price}</span>
											</div>
										)
									})}
								</div>
						</div>
				</div>
					)
				}) : <div className='text-2xl rounded-md shadow-lg items-center gap-y-6 w-full py-5 px-5 flex flex-col'>
						<h1 className='text-center'>You have no any active orders</h1>
						<Link href="/" className='transition-all flex items-center justify-center h-12 w-1/3 rounded-md duration-200 text-white bg-site-blue hover:shadow-md hover:bg-white hover:text-site-blue'>Go shopping</Link>
					</div>}
				
				
			</div>
		)
	}
}

//? добавление товаров в заказ ( пример ) 
// {
// 	"total_price": 10000,
// 	"delivery_address": "г. Москва, ул. Ленина, д. 10",
// 	"products": [
// 			{
// 					"id": 4,
// 					"quantity": 1,
// 					"price": 13000,
// 					"size": 42,
// 					"color": "синий"
// 			},
// 			{
// 					"id": 6,
// 					"quantity": 2,
// 					"price": 25000,
// 					"size": 43,
// 					"color": "красный"
// 			}
// 	]
// }