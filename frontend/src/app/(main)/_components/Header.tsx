"use client"

import Link from 'next/link'
import { headerIcons, headerLink } from '@/constants/header.constant'
import { useEffect, useState } from 'react'
import { useAppSelector } from '@/app/store/hooks'

const Header = () => {

	useEffect(() => {
		const [first, second] = [document.getElementById('burger')?.querySelectorAll('div')[0] as HTMLDivElement, document.getElementById('burger')?.querySelectorAll('div')[1] as HTMLDivElement]
		first.style.transform = second.style.transform = 'rotate(0deg)'
	}, [])

	const userData = useAppSelector(state => state.UserSlice)
	const [isSearch, setIsSearch] = useState<boolean>(false)

	//! usedebounce - ДЛЯ СТРОКИ ПОИСКА

	const burgerMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const burger = e.currentTarget as HTMLDivElement
		const menu = document.getElementById('menuMobile') as HTMLDivElement
		menu.style.display = menu.style.display === '' ? 'flex' : ''
		menu.style.zIndex = menu.style.zIndex === '' ? '40' : ''
		for (let i = 0; i < 2; i++){
			const elem = burger.children[i] as HTMLDivElement
			elem.style.backgroundColor = elem.style.backgroundColor === 'rgb(73, 208, 255)' ? '' : 'rgb(73, 208, 255)'
		}
	}

	const searchBtn = (e: React.MouseEvent) => {
		setIsSearch(!isSearch)
	}

	return (
		<header className='relative flex z-50 bg-black-main flex-row justify-center w-full items-center gap-x-8 md:gap-x-[50px] xl:gap-x-[100px] h-[100px] mb-[49px]'>
			<div id='burger' className='lg:hidden [&>div]:transition-all [&>div]:duration-300 flex flex-col gap-y-1 cursor-pointer [&>div]:hover:bg-site-blue' onClick={(e) => burgerMenu(e)}>
				<div className='h-[2px] w-[16px] bg-white'></div>
				<div className='h-[2px] w-[16px] bg-white'></div>
			</div>
			<Link href={headerIcons[0].link} className="block lg:hidden transition-all duration-150 hover:scale-105 hover:opacity-65">
				<img className='w-[18px]' src={headerIcons[0].icon} alt={headerIcons[0].alt} />
			</Link>
			<Link href={'/'}>
				<img className='w-[60px] lg:w-[84px] h-[27px] lg:h-[35px]' src='/xwear.png' alt='xwera logo'></img>
			</Link>
			<input id="searchInput" className={`transition-all duration-150 w-[40%] py-4 px-6 rounded-full bg-transparent border border-[#FFFFFF1C] outline-none focus-visible:border-[#c0c0c0] text-white ${isSearch ? "block" : "hidden"}`} type="text" placeholder="Поиск по каталогу товаров" />
			<div id="header_links" className={`transition-all duration-150 hidden ${!isSearch && "lg:flex"} w-[40%] items-center gap-x-4 xl:gap-x-12`}>
				{headerLink.map(item => {
					return (
						<Link className='transition-all duration-150 hover:text-[#49D0FF] text-white font-medium lg:font-semibold text-[10px] lg:text-sm' key={item.title} href={item.link}>
							{item.title}
						</Link>
					)
				})}
			</div>
			<div className="flex items-center gap-x-2 lg:gap-x-8">
				<button onClick={(e: React.MouseEvent) => searchBtn(e)} className={`transition-all duration-150 hidden lg:block hover:scale-105 hover:opacity-65`}>
					<img className='w-[18px]' src={isSearch ? "/krestik_header.svg" : "/search.png"} alt="" />
				</button>
				{headerIcons.slice(0, 2).map((item, index) => {
					if (item.link !== '/auth') {
						return (
							<Link className={`transition-all duration-150 ${index === 0 ? "hidden lg:block" : ""} hover:scale-105 hover:opacity-65`} key={item.icon} href={item.link}>
								<img className='w-[18px]' src={item.icon} alt={item.alt} />
							</Link>
						)
					} else {
						// item.link = userData.email ? { pathname: "/profile", query: { id: userData.id } } : '/auth'
						item.link = userData.email ? "/profile/main" : '/auth'
						return (
							<Link className={`transition-all duration-150 ${index === 0 ? "hidden lg:block" : ""} hover:scale-105 hover:opacity-65`} key={item.icon} href={item.link}>
								<img className='w-[18px]' src={item.icon} alt={item.alt} />
							</Link>
						)
					}
				})}
				<div className="flex items-center gap-x-3 text-[#8C8F96] font-bold text-[13px]">
					<Link className='transition-all duration-150 hover:scale-105 hover:opacity-65' key={headerIcons[2].icon} href={headerIcons[2].link}>
						<img className='w-[18px]' src={headerIcons[2].icon} alt={headerIcons[2].alt} />
					</Link>
					<span className='hidden lg:block select-none'>11899 ₽</span>
					<div className='hidden lg:flex bg-site-blue rounded-full size-[20px] items-center justify-center text-white font-bold text-xs'>
						7
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header