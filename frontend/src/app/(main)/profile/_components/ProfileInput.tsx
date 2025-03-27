interface IPassComp {
	changeVisible?: ((e: React.RefObject<HTMLInputElement>, setType: React.Dispatch<React.SetStateAction<string>>) => void) | null; 
	type: string; 
	placeholder: string; 
	title: string; 
	showPassword?: React.RefObject<HTMLInputElement> | null;
	setType?: React.Dispatch<React.SetStateAction<string>> | null;
}

export default function ProfileInput({ changeVisible = null, type, placeholder, title, showPassword = null, setType = null }: IPassComp) {
	return (
		<label className='bg-[#F9F9F9] h-max py-3 px-5 flex flex-col gap-y-2 text-[#3C3D44] font-semibold text-[13px]'>
			{title}
			<div className='w-full flex justify-between'>
				<input placeholder={placeholder} type={type} className='w-2/3 bg-transparent focus-visible:bg-white outline-none py-1 text-[#424347] placeholder:text-[#4243479c] placeholder:text-base' />
				{(setType !== null && showPassword && changeVisible) && (
					<>
						<input ref={showPassword} type="checkbox" className='hidden' />
						<button className='w-1/3 flex justify-end items-center' onClick={() => changeVisible(showPassword, setType)}>Показать</button>
					</>
				)}
			</div>
		</label>
	)
}