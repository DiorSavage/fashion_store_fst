import { useLogoutMutation } from '@/app/store/api/user.api'
import { Image } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { MouseEvent } from 'react'

export default function BlockAbout({ image, link, title }: { image: string; link: string; title: string }) {

	const [logout] = useLogoutMutation()
	const router = useRouter()

	const logoutHandler = () => {
		logout().then(() => {
			router.push('/')
		})
	}

	if (link === "/logout") {
		return (
			<button onClick={logoutHandler} className='min-h-[133px] transition-all duration-300 border border-[#F6F6F6] hover:border-[#49D0FF] text-[#303030] flex items-center flex-col justify-center gap-y-4'>
				<Image preview={false} src={image} />
				<span className='font-semibold text-[17px]'>{title}</span>
			</button>
		)
	}
	return (
		<Link href={link} className='min-h-[133px] transition-all duration-300 border border-[#F6F6F6] hover:border-[#49D0FF] text-[#303030] flex items-center flex-col justify-center gap-y-4'>
			<Image preview={false} src={image} />
			<span className='font-semibold text-[17px]'>{title}</span>
		</Link>
	)
}