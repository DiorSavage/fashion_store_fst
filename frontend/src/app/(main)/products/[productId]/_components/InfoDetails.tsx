import { IProduct } from '@/types/products.type'

const InfoDetails = ({ productData }: { productData: IProduct }) => {

	const colors = productData.color
	console.log(productData.color[0])

	return (
		<div className='flex flex-col gap-y-3 w-full xl:mb-24'>
			{[["Артикул", "article"], ["Категория", "category"], ["Бренд", "brand"], ["Модель", "model"], ["Цвет", "color"], ["Коллаборация", "collaboration"]].map(item => {
				return (
					<div key={item[0]} className='flex w-1/2 justify-between items-center text-[#20282F] font-semibold text-sm'>
						<p className=''>{item[0]}</p>
						{item[1] === "color" ? 
						<p className=''>asdfasdf</p> : <p className=''>{ productData[item[1] as keyof object] === 'None' ? 'Нет' : productData[item[1] as keyof object] }</p>}
					</div>
				)
			})}
		</div>
	)
}

export default InfoDetails