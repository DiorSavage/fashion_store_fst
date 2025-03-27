"use client"

import { Image } from 'antd'
import Link from 'next/link'
import React from 'react'

const ProductCard = ({ image, title, price, link }: { image: string; title: string; price: number; link: number }) => {
	return (
		<Link href={`/products/${link}`} className='transition-all duration-300 rounded-lg p-3 flex flex-col gap-y-1 h-full justify-between hover:shadow-md'>
			<div className="flex items-center justify-end w-[90%]">
				<Image className='transition-all duration-300 hover:scale-105 fill-black cursor-pointer' src="/favourites_prod.svg" preview={false} width={18} />
			</div>
			<div className='flex items-center justify-center'>
				<Image src={`http://localhost:4444${image}`} preview={false} width={document.body.clientWidth < 500 ? 160 : 318} />
			</div>
			<div className='flex flex-col gap-y-1'>
				<h1 className='font-bold text-sm md:text-[19px] text-black'>{title}</h1>
				<p className='font-normal text-xl text-[#3C3C3C]'><span className='font-normal text-sm'>от </span>{price}</p>
			</div>
		</Link>
	)
}

export default ProductCard