import { headerLink } from '@/constants/header.constant'
import Link from 'next/link'

const MenuMobile = () => {
	return (
		<section id='menuMobile' className='text-white hidden flex-col gap-y-10 bg-opacity-95 rounded-br-xl absolute left-0 top-[100px] z-10 w-2/5 h-[80vh] px-11 py-16 bg-black-main'>
			{headerLink.map(item => {
				return (
					<Link key={item.title} className="font-bold text-sm" href={item.link}>{item.title}</Link>
				)
			})}
		</section>
	)
}

export default MenuMobile