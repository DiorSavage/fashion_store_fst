'use client'

import { productsSizes } from '@/constants/products.constant'
import { IFilters } from '../[category]/page'

export default function SizesFilters({ setFilters, sizeState }: { setFilters: React.Dispatch<React.SetStateAction<IFilters>>; sizeState: number[] }) {

	const setSize = (size: number) => {
		setFilters((prev) => {
			return {
				...prev,
				sizes: sizeState.includes(size) ? prev.sizes.filter(item => item !== size) : [...prev.sizes, size]
			}
		})
	}
	
	return (
		<div className='flex flex-col px-6 justify-center py-3 gap-y-5 border w-full border-[#E6E7EB]'>
			<h1 className='text-black-main text-[13px] font-black'>РАЗМЕРЫ (EU)</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3'>
				{productsSizes.map((size) => {
					return (
						<button onClick={() => setSize(size)} key={size} className={`transition-all duration-300 hover:bg-site-blue hover:text-white hover:border-none flex items-center justify-center py-2 ${sizeState.includes(size) ? "bg-site-blue text-white" : "text-black border"} font-semibold text-[13px]`}>{size}</button>
					)
				})}
			</div>
		</div>
	)
}