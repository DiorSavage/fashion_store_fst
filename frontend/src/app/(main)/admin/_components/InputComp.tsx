import { INewProduct } from '@/types/products.type'

interface IInputComp {
	placeholder: string;
	title: string;
	state: INewProduct;
	help: string;
	setState: React.Dispatch<React.SetStateAction<INewProduct>>;
	name: string;
}

export default function ({ placeholder, title, state, setState, help, name }: IInputComp) {

	return (
		<div className='flex flex-col gap-y-2 p-3 bg-[#00000011] rounded-xl'>
			<label className='flex flex-col gap-y-1 font-semibold'>
				{title}
				<input className='bg-[#F9F9F9] w-3/4 pl-2 py-2' name={name} onChange={(e) => setState({
					...state,
					[e.target.name]: e.target.value
				})} placeholder={placeholder}></input>
			</label>
			<p className='text-xs text-[#000000a8]'><span className='text-red-500 text-sm mr-1'>*</span> {help}</p>
		</div>
	)
}