"use client"

import { useGetOrdersQuery } from '@/app/store/api/orders.api'
import { statusTranslate } from '@/constants/orders.constant'
import { MouseEvent, useState } from 'react'

const HistoryPage = () => {

	const { data, isLoading, isSuccess, isError } = useGetOrdersQuery()
	const [targetPage, setTargetPage] = useState<number>(1)
	const nigger = [1,2,3,4,5,6,7,8,9]

	if (isSuccess && !isError) {
		return (
			<section className='flex flex-col flex-grow gap-y-6'>
				<h1 className='text-[#303030] font-bold text-[23px]'>История заказов</h1>
				<div className='flex flex-col items-center justify-center py-3 border shadow-md rounded-md'>
					<div className='grid grid-cols-4 w-[90%] [&>span]:text-center [&>span]:font-bold [&>span]:text-sm border-b py-3 px-1'>
						<span>Номер</span><span>Дата</span><span>Статус</span><span>Итог</span>
					</div>
					{data.slice(targetPage-1, targetPage+3).map((order, index) => {
						return (
							<div className={`grid grid-cols-4 w-[90%] [&>span]:text-center  [&>span]:text-sm border-b py-6 px-1 ${index % 2 == 0 && "bg-[#FBFBFB]"}`}>
								<span className='font-bold'>#{order.id}</span>
								<span>{new Date(order.created_at).getDate()}/{new Date(order.created_at).getMonth() + 1}/{new Date(order.created_at).getFullYear()}</span>
								<span className={`${order.status === "canceled" ? "text-[#ec1818]" : "text-[#33f01a]"}`}>{statusTranslate[order.status]}</span>
								<span>{order.total_price}</span>
							</div>
						)
					})}
				</div>
				{data.length > 2 && (
					<div className='flex items-center'>
						<button onClick={() => setTargetPage(targetPage - 4)} disabled={targetPage === 1} className='transition-all mr-2 duration-150 disabled:opacity-40 hover:bg-slate-200 size-6 rounded-full'>{"<"}</button>
						<button onClick={(e: MouseEvent<HTMLButtonElement>) => setTargetPage(Number(e.target.innerText))} className={`size-12 transition-all duration-200 ${targetPage % 3 !== 1 ? "hover:bg-site-blue hover:text-white" : "bg-site-blue text-white hover:bg-white hover:text-site-blue"} rounded-md`}>{targetPage}</button>
						<button onClick={(e: MouseEvent<HTMLButtonElement>) => setTargetPage(Number(e.target.innerText))} className={`size-12 transition-all duration-200 ${targetPage % 3 !== 2 ? "hover:bg-site-blue hover:text-white" : "bg-site-blue text-white hover:bg-white hover:text-site-blue"} rounded-md`}>{targetPage + 1}</button>
						<button onClick={(e: MouseEvent<HTMLButtonElement>) => setTargetPage(Number(e.target.innerText))} className={`size-12 transition-all duration-200 ${targetPage % 3 !== 0 ? "hover:bg-site-blue hover:text-white" : "bg-site-blue text-white hover:bg-white hover:text-site-blue"} rounded-md`}>{targetPage + 2}</button>
						<button onClick={() => setTargetPage(targetPage + 4)} disabled={targetPage === data.length} className='transition-all duration-150 ml-2 disabled:opacity-40 hover:bg-slate-200 size-6 rounded-full'>{">"}</button>
					</div>
				)}
			</section>
		);
	}
}

export default HistoryPage