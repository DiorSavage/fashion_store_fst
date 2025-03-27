import { Image } from 'antd'

const Loading = () => {
	return (
		<div className='flex w-full items-center justify-center h-screen flex-col gap-y-6'>
			<Image src='/loading.gif' preview={false} alt='loading' width={300} />
			<h1 className='font-extrabold text-7xl tracking-tighter text-site-blue'>Loading...</h1>
		</div>
	)
}

export default Loading