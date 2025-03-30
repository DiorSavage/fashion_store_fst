"use client"

import { useDeleteFromBasketMutation, useUpdateBasketMutation, useUpdateBasketQuery } from '@/app/store/api/user.api'
import { IBasket } from '@/types/user.type'
import { InputNumber } from 'antd'
import type { InputNumberProps } from 'antd';

const BasketCard = ({ productData }: { productData: IBasket }) => {

	const [deleteFromBasket] = useDeleteFromBasketMutation()
	const [updateBasketQuantity] = useUpdateBasketMutation()
	const removeProduct = () => {
		deleteFromBasket(productData.basket_id).then(res => console.log("Delete product"))
	}
	const updateQuantity: InputNumberProps['onChange'] = (value) => {
		updateBasketQuantity({
			...productData,
			quantity: Number(value)
		})
	}

	return (
		<div className='transition-all duration-300 h-full hover:scale-[1.01] flex w-full flex-col gap-y-4 xl:flex-row items-center justify-between px-2 py-2 rounded-md shadow-md'>
			<img src={`http://localhost:4444/uploads/${productData.product_image}`} alt={productData.product_image} />
			<div className='flex flex-col justify-between h-1/6'>
				<span className='font-semibold text-lg'>{productData.product_title}</span>
				<span className='font-semibold text-lg'>{productData.product_description}</span>
				<span className='font-bold text-lg'>{productData.product_price}$</span>
			</div>
			<div className='flex xl:flex-col justify-between w-1/2 xl:w-min h-1/4'>
				<InputNumber onChange={updateQuantity} min={1} max={productData.max_quantity} defaultValue={productData.quantity} />
				<button onClick={removeProduct} className='px-2 py-2 rounded-md transition-all duration-200 hover:text-red-500 hover:bg-white text-white bg-red-500'>Удалить</button>
			</div>
		</div>
	);
}

export default BasketCard