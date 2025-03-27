"use client"

import { greetingIcons } from '@/constants/header.constant'
import { Carousel, Image } from 'antd'
import Link from 'next/link'

const Greeting = () => {
	return (
		<section className='w-full flex flex-col justify-center'>
			<div className='absolute xl:top-[1%] left-[10%] z-10 flex flex-col gap-y-2 sm:py-4 lg:py-0 lg:gap-y-1 xl:gap-y-5 text-black max-w-[50%] sm:max-w-[40%] md:max-w-[33%]'>
				<h1 className='font-black text-[20px] xl:-tracking-tighter md:text-[35px] lg:text-[51px] text-[#171819]'>Широкий ассортимент Одежды</h1>
				<p className='leading-[19px] font-normal text-xs md:text-sm lg:text-[19px] text-[#121214]'>Одежда от известные брендов у нас в каталоге. Только качественные вещи.</p>
				<Link href='/products' className='flex justify-center items-center w-3/4 md:w-2/3 rounded-[5px] lg:h-[56px] bg-black-main text-white font-extrabold text-[10px] lg:text-[12px] xl:text-[14px] transition-all duration-300 hover:bg-white hover:text-black-main'>ПЕРЕЙТИ В КАТАЛОГ</Link>
			</div>
			<Carousel autoplay arrows dots={false}>
				{greetingIcons.map(item => {
					return (
						<Image src={document.body.clientWidth < 450 ? item.mob_image : item.image} key={item.image} alt='greeting' preview={false}/>
					)
				})}
			</Carousel>
		</section>
	)
}

export default Greeting