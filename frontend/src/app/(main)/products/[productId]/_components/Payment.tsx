export default function Payment() {
	return (
		<div className='flex flex-col gap-y-4 [&>p]:text-dark-gray [&>p]:text-base [&>p]:font-normal'>
			<h1 className='text-black-main text-[21px] font-semibold'>Способы оплаты</h1>
			<p>Команда XWEAR предоставляет услугу доставки только оригинальных товаров c крупнейшего китайского маркетплейса Poizon, чтобы наши клиенты экономили более 40% на каждой покупке. </p>
			<h2 className='text-black font-bold text-xl'>Мы принимаем оплату банковскими картами:</h2>
			<div className="flex gap-x-4 items-center">
				<img src="/mastercard.png" alt="mastercard" />
				<img src="/visa.png" alt="visa" />
				<img src="/mir.png" alt="mir" />
			</div>
			<p>Стоимость каждого товара окончательная. В нее входит выкуп товара на Poizon, доставка его на наш склад в Китае, доставка из Китая до склада в городе Екатеринбург, все таможенные сборы и пошлины уже включены в стоимость. </p>
			<p>Если вам нужно отправить товар по России, вы сможете выбрать адрес доставки во время оформления заказа. Доставка оплачивается отдельно при получении посылки, обычно это не более 350 рублей. </p>
		</div>
	)
}