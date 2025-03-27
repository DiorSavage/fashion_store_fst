"use client"

import { MainResponsive } from '@/constants/main.constant'
import { IProduct } from '@/types/products.type'
import Link from 'next/link'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ProductCard from './ProductCard'

const CarouselHome = ({ header, elements, link }: { header: string; elements: IProduct[]; link: string; category: string }) => {
	return (
		<section className='flex flex-col gap-y-8 py-8'>
			<div className="flex justify-between items-center w-full">
				<h1 className='font-extrabold text-black-main text-[31px]'>{header}</h1>
				<Link className='transition-all duration-150 hover:text-site-blue hover:opacity-80 text-black underline underline-offset-8 font-bold text-sm' href={link}>Больше товаров</Link>
			</div>
			<Carousel
				responsive={MainResponsive}
				swipeable={false}
				draggable={true}
				showDots={true}
				className='py-2'
				// autoPlay={this.props.deviceType !== "mobile" ? true : false}
				removeArrowOnDeviceType={["tablet", "mobile"]}
			>
				{elements.map(item => {
					return (
						<ProductCard key={item.id} link={item.id} title={item.title} image={item.mainimg} price={item.price[0]} />
					)
				})}
			</Carousel>
		</section>
	)
}

export default CarouselHome