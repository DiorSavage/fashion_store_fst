'use client'

import { AddProductInputs } from '@/constants/admin.constant'
import { INewProduct } from '@/types/products.type'
import { Image } from 'antd'
import { useRef, useState } from 'react'
import InputComp from '../_components/InputComp'
import { useCreateProductMutation, useUploadPhotoMutation } from '@/app/store/api/products.api'

export default function AddProduct() {

	let initialState = {
		article: "",
		brand: "",
		category: "",
		color: "",
		collaboration: "",
		description: "",
		discount: 0,
		title: "",
		model: "",
		price: "",
		sizes: "",
		mainimg: "",
	}
	const refImage = useRef<HTMLInputElement | null>(null)
	const [productData, setProductData] = useState<INewProduct>(initialState)
	const [createProduct] = useCreateProductMutation()
	const [uploadPhoto] = useUploadPhotoMutation()

	//! ARTICLE САМОМУ ЧЕРЕЗ РАНДОМ
	const setPhoto = () => {
		if (refImage.current) {
			refImage.current.click()
		}
	}

	const sendDataProduct = (e: React.FormEvent) => {
		e.preventDefault()
		
		let newArticle = Math.floor(Math.random() * (29999999 - 10000000) + 10000000)
		let sizes = productData.sizes.split(',').map(el => el.trim())
		let price = productData.price.split(',').map(el => Number(el.trim()))
		let color = productData.color.split(',').map(el => el.trim())

		if (refImage.current) {
			if (refImage.current.files) {
				const formDataMain = new FormData()
				formDataMain.append('image', refImage.current.files[0])
				uploadPhoto(formDataMain).then(res => {
					res.data && createProduct({
						...productData,
						color,
						sizes,
						price,
						mainimg: res.data.url,
						article: newArticle.toString()
					}).then(() => setProductData(initialState))
				})
			}
		}
	}

	return (
		<div className='flex flex-col lg:flex-row items-center lg:items-start gap-y-4 w-full mt-3 justify-between gap-x-12'>
			<div className='flex flex-col gap-y-4 w-1/3 items-center'>
				<Image className='rounded-xl' width={250} src={"/void_basket.png"} preview={false} />
				<input ref={refImage} className='hidden' type="file" accept='image/*' />
				<button onClick={setPhoto} className='transition-all duration-300 px-12 py-2 rounded-2xl bg-[#49D0FF] text-white hover:text-[#49D0FF] hover:bg-white'>Добавить изображение</button>
			</div>
			<form onSubmit={(e) => sendDataProduct(e)} className='grid grid-cols-1 lg:grid-cols-2 gap-4 flex-grow'>
				{AddProductInputs.map(({ help, title, name, placeholder }) => {
					return (
						<InputComp help={help} title={title} name={name} placeholder={placeholder} setState={setProductData} state={productData} key={title} />
					)
				})}
				<button type='submit' className='transition-all lg:col-span-2 my-3 lg:w-1/2 lg:ml-[25%] duration-300 py-3 rounded-2xl bg-[#49D0FF] text-white hover:text-[#49D0FF] hover:bg-white'>Отправить</button>
			</form>
		</div>
	)
}
