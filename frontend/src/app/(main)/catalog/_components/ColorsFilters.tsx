'use client'

import { colorsConstants } from '@/constants/products.constant'
import { IFilters } from '../[category]/page'

export default function ColorsFilters({ colorsState, setFilters }: { colorsState: string[]; setFilters: React.Dispatch<React.SetStateAction<IFilters>> }) {

	const setColor = (color: string) => {
		setFilters((prev) => {
			return {
				...prev,
				colors: colorsState.includes(color) ? prev.colors.filter(item => item !== color) : [...prev.colors, color]
			}
		})
	}
	
	return (
		<div className='flex flex-col px-6 justify-center py-3 gap-y-5 border w-full border-[#E6E7EB]'>
			<h1 className='text-black-main text-[13px] font-black'>ЦВЕТ</h1>
			<div className='grid grid-cols-2 xl:grid-cols-3 gap-3'>
				{Object.keys(colorsConstants).map((color) => {
					return (
						<button onClick={() => setColor(color)} key={color} className='flex flex-col items-center gap-y-1'>
							<div className={`rounded-full size-7 bg-[#${colorsConstants[color as keyof object].slice(1)}]`}></div>
							<span className='text-[#20282F] text-xs font-normal'>{color.slice(0, 1).toUpperCase() + color.slice(1)}</span>
						</button>
					)
				})}
			</div>
		</div>
	)
}