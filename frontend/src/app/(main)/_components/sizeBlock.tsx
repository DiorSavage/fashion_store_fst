const SizeBlock = ({ size, fav, price, toggleSize }: { size: string; fav: boolean; price: number; toggleSize: (size: string) => void }) => {
	console.log(size)
	return (
		<button onClick={() => toggleSize(size)} className={`transition-all duration-300 hover:bg-[#49D0FF] hover:text-white flex flex-col gap-y-1 gap-x-2 border border-[#EFEFEF] items-center justify-center w-max px-6 py-1 rounded-md ${fav && "bg-[#49D0FF] text-white"}`}>
			<p className='font-semibold text-sm'>{size}</p>
			<p className='font-normal text-sm'>{price}$</p>
		</button>
	)
}

export default SizeBlock