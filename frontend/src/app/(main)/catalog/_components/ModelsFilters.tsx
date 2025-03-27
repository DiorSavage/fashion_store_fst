import { modelsConstants } from '@/constants/products.constant'
import { IFilters } from '../[category]/page'

export default function ModelsFilters({ brandState, setFilters, modelState }: { brandState: string[]; setFilters: React.Dispatch<React.SetStateAction<IFilters>>; modelState: string[] }) {

	let models = []
	if (brandState.length) {
		for (let i = 0; i < brandState.length; i++) {
			if (Object.keys(modelsConstants).includes(brandState[i].toLowerCase())) {
				models.push(...modelsConstants[brandState[i].toLowerCase() as keyof object].values)
			}
		}
	}

	const setModel = (model: string) => {
		setFilters(prev => {
			return {
				...prev,
				models: modelState.includes(model) ? modelState.filter(item => item !== model) : [...modelState, model]
			}
		})
	}
	
	if (models.length) {
		return (
			<div className='flex flex-col pl-6 justify-center py-5 gap-y-5 max-h-[366px] border w-full border-[#E6E7EB]'>
				<h1 className='text-black-main font-black text-base mb-1'>МОДЕЛЬ</h1>
				<div className='w-full gap-y-8 max-h-[63%] overflow-y-scroll'>
					{models.map((model) => {
						return (
							<label htmlFor={model.value} key={model.title} className='flex items-center gap-x-2 select-none'>
								<input onClick={() => setModel(model.value)} className='absolute -z-10 opacity-0 size-5 select-none' id={model.value} type='checkbox' />
								<span className={`transition-all duration-300 before:transition-all before:duration-300 text-[#20282F] ${modelState.includes(model.value) ? "font-bold" : "font-normal"} text-[13px] before:content-[""] before:inline-block before:border before:border-[#d5d6d6] before:cursor-pointer before:rounded-sm before:w-5 before:h-5 before:mr-3 ${modelState.includes(model.value) ? "before:bg-site-blue before:border-[#49D0FF] before:bg-[url('/galochka-white.png')] before:bg-center before:bg-cover" : ""}`}>{model.title}</span>
							</label>
						)
					})}
				</div>
			</div>
		)
	} else {
		return (
			<div className='flex flex-col justify-center py-5 gap-y-5 max-h-[366px] border w-full border-[#E6E7EB]'>
				<h1 className='text-black-main font-black text-base ml-6 mb-1'>МОДЕЛЬ</h1>
				<div className='w-full gap-y-8 max-h-[71%] overflow-y-scroll'>
					<h3 className='text-[#20282F] font-extrabold text-base text-center'>Выберите бренд</h3>
				</div>
			</div>
		)
	}
}