import { AboutBlock } from '@/constants/main.constant'
import { Image } from 'antd'

const AboutMain = () => {
	return (
		<section className='flex gap-x-[5%]  items-center text-dark-gray text-base font-normal p-4'>
			<div className='flex flex-col gap-y-4 w-[60%]'>
				<h1 className='font-extrabold text-4xl tracking-tight text-black-main'>О интернет-магазине xwear</h1>
				<p>Команда XWEAR предоставляет услугу доставки только оригинальных товаров c крупнейшего китайского маркетплейса Poizon, чтобы наши клиенты экономили более 40% на каждой покупке. </p>
				<p>Работаем без посредников, благодаря чему можем предоставлять лучшую цену. Быстрая, бесплатная доставка. </p>
				<p>Сайт, на котором можно будет удобно оформить покупку, не скачивая китайское мобильное приложение Poizon, с удобной фильтрацией огромного количества товаров, а так же с возможностью сразу увидеть окончательную цену товара.</p>
			</div>
			<div className='bg-[#f3f2f2] flex flex-col items-center px-[8%] py-[2%] gap-y-10 rounded-md w-[40%]'>
				{AboutBlock.map(block => {
					return (
						<div key={block.header} className="flex gap-x-2">
							<Image src={block.image} preview={false} width={60} />
							<div className='flex flex-col gap-y-1'>
								<h2 className='font-extrabold text-[13px] text-black-main'>{block.header}</h2>
								<p className='font-normal text-dark-gray text-sm'>{block.text}</p>
							</div>
						</div>
					)
				})}
			</div>
		</section>
	)
}

export default AboutMain