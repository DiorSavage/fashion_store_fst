import { Image } from 'antd'
import Link from 'next/link'

const BlogComp = ({ link, header, text, image, date }: { link: string, header: string, text: string, image: string, date: string }) => {
	return (
		<div className='flex flex-col gap-y-1 mx-2'>
			<Image src={image} preview={false} />
			<h1 className='font-bold text-[23px] text-black-main'>{header}</h1>
			<p className='text-dark-gray font-normal text-[15px]'>{text}</p>
			<div className='flex items-center justify-between w-full'>
				<Link href={link} className='underline underline-offset-4 font-extrabold text-sm text-black transition-all duration-300 hover:text-site-blue'>Узнать подробнее</Link>
				<span className='text-[11px] font-normal text-light-gray'>{date}</span>
			</div>
		</div>
	)
}

export default BlogComp