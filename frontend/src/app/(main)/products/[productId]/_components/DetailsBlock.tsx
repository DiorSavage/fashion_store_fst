"use client"

import { useState } from 'react'
import InfoDetails from './InfoDetails'
import { IProduct } from '@/types/products.type'
import Delivery from './Delivery'
import Payment from './Payment'

const DetailsBlock = ({ product }: { product: IProduct }) => {

	const [choosen, setChoosen] = useState<number>(0)
	const components = [<InfoDetails productData={product} />, <Delivery />, <Payment />]

	return (
		<section className='flex flex-col gap-y-8 w-2/3'>
			<div className='py-3 w-1/2 flex justify-between items-center'>
				{['Детали', "Доставка", "Оплата"].map((item, index) => {
					return (
						<button key={index} className={`transition-all duration-300 text-[#20282F] ${index === choosen ? "opacity-100" : "opacity-40"} ${index === choosen && "border-b-2 border-spacing-10 px-1 border-blue-500"} font-semibold text-lg`} data-active={index === choosen} id='index' onClick={() => setChoosen(index)}>{item}</button>
					)
				})}
			</div>
			<div className='w-full flex'>
				{components[choosen]}
			</div>
			<div></div>
		</section>
	)
}

export default DetailsBlock