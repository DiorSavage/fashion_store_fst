import { brandsConstants } from '@/constants/products.constant'
import { IFilters } from '../[category]/page'

export default function BrandsFilters({  setFilters, brandState, category }: { setFilters: React.Dispatch<React.SetStateAction<IFilters>>; brandState: string[]; category: string }) {

	const setBrand = (brand: string) => {
		setFilters(prev => {
			return {
				...prev,
				brands: brandState.includes(brand) ? brandState.filter(item => item !== brand) : [...brandState, brand]
			}
		})
	}

	return (
		<div className='flex flex-col pl-6 justify-center py-5 gap-y-5 max-h-[366px] border w-full border-[#E6E7EB]'>
			<h1 className='text-black-main font-black text-base mb-1'>БРЕНДЫ</h1>
			<div className='w-full gap-y-8 max-h-[64%] overflow-y-scroll'>
				{brandsConstants[category as keyof object].values.map((brand) => {
					return (
						<label htmlFor={brand.value} key={brand.title} className='flex items-center gap-x-2 select-none'>
							<input onClick={() => setBrand(brand.value)} className='absolute -z-10 opacity-0 size-5 select-none' id={brand.value} type='checkbox' />
							<span className={`transition-all duration-300 before:transition-all before:duration-300 text-[#20282F] ${brandState.includes(brand.value) ? "font-bold" : "font-normal"} text-[13px] before:content-[""] before:inline-block before:border before:border-[#d5d6d6] before:cursor-pointer before:rounded-sm before:w-5 before:h-5 before:mr-3 ${brandState.includes(brand.value) ? "before:bg-site-blue before:border-[#49D0FF] before:bg-[url('/galochka-white.png')] before:bg-center before:bg-cover" : ""}`}>{brand.title}</span>
						</label>
					)
				})}
			</div>
		</div>
	)
}