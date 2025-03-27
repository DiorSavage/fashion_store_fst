import { DeliveryConstants } from '@/constants/products.constant'

export default function () {
	return (
		<div className='flex flex-col gap-y-5 [&>p]:text-[#303030] [&>p]:text-base [&>p]:font-semibold'>
			<h2 className='text-[#121214] font-semibold text-[21px]'>Доставка</h2>
			<p>Kоманда XWEAR предоставляет услугу доставки только оригинальных товаров c крупнейшего китайского маркетплейса Poizon, чтобы наши клиенты экономили более 40% на каждой покупке. Мы ценим вас, поэтому постоянно работаем над логистикой,чтобы ускорить время доставки заказов!</p>
			<p>Все заказы отправляются из-за границы с возможностью доставки в любой город России, перед отправкой товар всегда проходит проверку на подлиность.</p>
			<p>Доставляем вещи из-за границы за 12-16 дней до России, включая день оплаты, с возможностью самовывоза из города Екатеринбург. В другие города отправляем СДЭКом.</p>
			<p>СДЭК оплачивается при получении. Цена доставки зависит от города вашего проживания, в среднем это 350 ₽.</p>
			<div className='my-1 flex flex-col gap-y-4'>
				<h2 className='text-black font-bold text-xl'>В личном кабинете вы сможете отслеживать статус заказа:</h2>
				<div className='grid grid-cols-3 gap-10'>
					{DeliveryConstants.map((item) => {
						return (
							<div key={item.header} className='flex flex-col gap-y-2'>
								<div className='size-12 flex items-center justify-center rounded-full border border-[#EDEEF1]'><img src="/galochka.png" /></div>
								<h3 className='text-dark-gray font-extrabold text-lg'>{item.header}</h3>
								<p className='text-[#686B71] text-base font-normal'>{item.text}</p>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}