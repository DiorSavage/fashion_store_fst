"use client"

import { Orders } from '@/constants/profile.constant'
import Link from 'next/link'

export default function MyOrders() {
	return (
		<div className='flex flex-col flex-grow gap-y-6'>
			<h1 className='text-[#303030] font-bold text-[23px]'>Мои заказы</h1>
			<div className='w-full flex flex-col border bordre-[#E9EAEE] px-8 py-6 gap-y-6'>
				<div className='flex justify-between w-full items-center'>
					<div className='flex flex-col gap-y-3'>
						<h2 className='text-[#121214] font-bold text-lg'>Заказ #4534</h2>
						<p className='text-[#646464] text-base font-normal'>Был оформлен <span className='w-max font-semibold text-base text-[#141414]'>{new Date().getDate()}/{new Date().getMonth()}/{new Date().getFullYear()}</span> - статус заказа
								<div className='inline border ml-2 border-[#e9e9e9] text-[#09B11B] font-semibold text-lg text-center px-3 py-2'>Отправлен</div>
						</p>
					</div>
					<Link href='/' className='transition-all duration-200 hover:text-site-blue  text-black underline underline-offset-8 font-extrabold text-sm'>Вернуться к каталогу</Link>
				</div>
				<div className='flex flex-col w-full gap-y-4'>
					<div className='grid grid-cols-2 border-b px-2 border-[#EBEBEB] text-[#333333] border-opacity-60 text-base font-bold py-1'>
						<span>ТОВАР</span>
						<span className='text-right'>ИТОГО</span>
					</div>
					<div className='grid grid-cols-2 border-b px-2 border-[#EBEBEB] text-[#333333] border-opacity-60 text-base font-normal py-4'>
						<span>Кроссовки Nike Air Max 3000</span>
						<span className='text-right'>4 699 ₽</span>
					</div>
					{Orders.map((rowName) => {
						return (
							<div key={rowName} className={`grid grid-cols-2 px-2 ${rowName !== 'Итого' ? "border-b border-[#EBEBEB] border-opacity-60" : ""} text-[#333333] text-${rowName === 'Итого' ? '[19px]' : 'base'} font-bold py-4`}>
								<span>{rowName}</span>
								<span className='text-right'>4 699 ₽</span>
							</div>
						)
					})}
				</div>
				
			</div>
		</div>
	)
}