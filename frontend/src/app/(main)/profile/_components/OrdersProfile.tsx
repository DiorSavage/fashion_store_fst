export default function OrdersProfile({ orders }: { orders: { id: number; date: string; status: string; result: number }[] }) {
	return (
		<div className='flex flex-col w-full px-8 py-7 gap-y-4 border border-[#E9EAEE] rounded-md'>
			<h1>Текущие заказы</h1>
			<div className='flex flex-col w-full text-[#333333] gap-y-3'>
				<div className='grid grid-cols-4 py-2 px-2 justify-between w-full font-bold text-base  border-b border-[#E9EAEE]'>
					<span>НОМЕР</span>
					<span>ДАТА</span>
					<span>СТАТУС</span>
					<span>ИТОГ</span>
				</div>
				{orders.map((order) => {
					return (
						<div className='grid grid-cols-4 justify-between w-full text-base font-normal tracking-wide border-b border-[#E9EAEE] py-2 px-2 border-opacity-60'>
							<>
								<span>#{order.id}</span>
								<span>{new Date(order.date).getDate()}/{new Date(order.date).getMonth()}/{new Date(order.date).getFullYear()}</span>
								<span className={`${order.status === 'В обработке' ? "text-orange-400" : order.status === 'Готов к выдаче' ? "text-green-400" : "text-red-500"}`}>{order.status}</span>
								<span className='text-[#121214] font-semibold text-[17px]'>{order.result}₽</span>
							</>
						</div>
					)
				})}
			</div>	
		</div>
	)
}