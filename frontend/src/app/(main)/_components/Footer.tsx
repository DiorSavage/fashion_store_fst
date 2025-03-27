
import { info, socialLinks } from '@/constants/footer.constant'
import { Image } from 'antd'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer className='flex items-start py-11 justify-around px-12 bg-black-main w-full h-[371px]'>
			{["catalog", "information"].map(name => {
				return (
					<div key={name} className='flex flex-col gap-y-[9px]'>
						<h1 className='font-extrabold text-white text-[15px]'>{name === 'catalog' ? 'КАТАЛОГ' : 'ИНФОРМАЦИЯ'}</h1>
						{info[name as keyof object].map(item => {
							return (
								<Link className='transition-all duration-150 hover:text-site-blue text-white font-normal text-[15px]' key={item.title} href={item.link}>{item.title}</Link>
							)
						})}
						<Link className='transition-all duration-300 hover:scale-110 mt-4' href={`/${name}`}>
							<Image src={`/${name}_footer.png`} alt='arrow' preview={false} />
						</Link>
					</div>
				)
			})}
			<div className='flex flex-col gap-y-[9px]'>
				<h1 className='text-white font-extrabold text-[15px]'>КОНТАКТЫ</h1>
				<Link href={'/'} className='underline transition-all duration-150 hover:text-site-blue text-[#DCDCE0] font-normal text-[15px]'>info@xwear.info</Link>
				<p className='font-semibold text-base text-white'>+7 993 608 38 85</p>
				{socialLinks.map(item => {
					return (
						<div className='flex flex-col gap-y-1 mt-1' key={item.title}>
							<h3 className='font-extrabold text-xs text-white'>{item.title}</h3>
							<div className='flex gap-x-2'>
								{item.links.map(link => {
									return (
										<Image src={link} key={link} preview={false}/>
									)
								})}
							</div>
						</div>
					)
				})}
			</div>
			<div className='flex flex-col gap-y-2 w-1/6'>
				<h1 className='font-extrabold text-white text-[15px]'>ПОДПИСКА НА НОВОСТИ</h1>
				<p className='text-[#DCDCE0] text-[15px] font-normal'>Будьте в курсе скидок и новостей</p>
				<div className='flex justify-between items-center w-full font-normal text-[13px] text-white'>
					<span>Ваш email</span>
					<button className='transition-all duration-300 hover:bg-black-main hover:text-white rounded-full bg-white flex items-center justify-center size-[29px] text-base text-black'>{">"}</button>
				</div>
				<div className='w-full h-[1px] bg-white'></div>
				<p className='font-normal text-xs text-white text-[11px] opacity-40'>Подписываясь на рассылку вы соглашатесь с обработкой персональных данных</p>
				<div className='flex flex-col gap-y-[2px] text-xs text-[#707076]'>
					<Link className='underline' href={'/'}>Политика конфиденциальности</Link>
					<Link className='underline' href={'/'}>Пользовательское соглашение</Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer