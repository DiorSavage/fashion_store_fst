import { IFilters } from '../[category]/page'

export default function ({ categories, setFilters, catState }: { categories: string[], setFilters: React.Dispatch<React.SetStateAction<IFilters>>; catState: string[] }) {

	const setCategory = (category: string) => {
		setFilters(prev => {
			return {
				...prev,
				categories: catState.includes(category) ? prev.categories.filter(item => item !== category) :[...prev.categories, category]
			}
		})
	}

	return (
		<div className='flex flex-col px-6 justify-center py-5 gap-y-5 border w-full border-[#E6E7EB]'>
			<h1 className='text-black-main font-black text-base mb-1'>КАТЕГОРИИ</h1>
			<div className='flex flex-col gap-y-3 items-start'>
				{categories.map((cat) => {
					return (
						<button key={cat} onClick={() => setCategory(cat)} className={`transition-all duration-200 hover:text-site-blue ${catState.includes(cat) ? "text-site-blue" : "text-[#20282F]"} font-semibold text-base`}>{cat}</button>
					)
				})}
			</div>
		</div>
	)
}