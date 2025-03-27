import Link from 'next/link'

const NotFound = () => {
	return (
		<div className='flex flex-col gap-y-6 w-full h-full items-center justify-center'>
			<img className='w-1/3' src='not-found.jpg'></img>
			<Link href='/' className='w-1/5 rounded-full font-bold py-3 text-center bg-blue-500 text-white transition-all duration-300 hover:bg-[#f5f4f4] hover:text-blue-500'>To Home Page</Link>
		</div>
	)
}

export default NotFound