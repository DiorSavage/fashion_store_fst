import { adminLinks } from '@/constants/admin.constant'
import Link from 'next/link'

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<section className='flex flex-col items-center mx-auto my-6 gap-y-3 w-full min-h-[70vh]'>
			<div className='grid grid-cols-2 w-full lg:flex justify-between gap-y-3 gap-x-4 items-center'>
				{adminLinks.map((item) => {
					return (
						<Link href={`/admin/${item.link}`} className='w-full lg:w-1/4 select-none text-xs lg:text-lg text-center rounded-full font-bold py-3 bg-blue-500 text-white transition-all duration-300 hover:bg-[#f5f4f4] hover:text-blue-500' key={item.title}>{item.title}</Link>
					)
				})}
			</div>
			{children}
		</section>
	)
}