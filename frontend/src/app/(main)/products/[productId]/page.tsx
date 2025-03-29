"use client"

import Loading from '@/app/_components/Loading'
import NotFound from '@/app/not-found'
import { useGetProductsQuery } from '@/app/store/api/products.api'
import { MainResponsive } from '@/constants/main.constant'
import { IProduct } from '@/types/products.type'
import { Carousel as AntCarousel } from 'antd'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import CarouselCard from '../../_components/ProductCard'
import SizeBlock from '../../_components/sizeBlock'
import DetailsBlock from './_components/DetailsBlock'

const Product = () => { //! НЕ НУЖНЫ ДВА ГЕТ ЗАПРОСА, ПОЭТОМУ ПРОСТО ЗАБИРАЮ ВСЕ ТОВАРЫ, ОНИ НУЖНЫ ДЛЯ КАРУСЕЛЬКИ СНИЗУ
	
	const id = useParams().productId as string
	const router = useRouter()
	const [productData, setProductData] = useState<IProduct>()
	const [sizes, setSizes] = useState<string[]>(productData ? [productData.sizes[0]] : [])
	const { data: productsData, isSuccess, isLoading, isError } = useGetProductsQuery({ end: -1, category: '' })
	useEffect(() => {
		productsData && setProductData(productsData.filter((product) => product.id === Number(id))[0])
	}, [productsData])
	const [sum, setSum] = useState<number>(0)

	const toggleSize = (size: string) => {
		if (sizes.includes(size)) {
			setSizes(sizes.filter(el => el !== size))
		} else {
			setSizes([...sizes, size])
		}
	}
	useEffect(() => {
		productData && setSum(productData.price.filter((el, index) => sizes.includes(productData.sizes[index])).reduce((a, b) => a + b, 0))
	}, [sizes, productData])
	console.log(productData?.imgs?.length)
	return (
		<>
		{isSuccess && productData ? (
			<section className='flex flex-col gap-y-8'>
				<div className='flex gap-x-4 items-center text-sm my-3 text-[#0000008e]'>
					<span>Главная</span>
					<span className='text-xs font-extrabold'> {">"} </span>
					<span>Каталог товаров</span>
					<span className='text-xs font-extrabold'> {">"} </span>
					<span>{productData.category}</span>
					<span className='text-xs font-extrabold'> {">"} </span>
					<span className='text-black font-semibold'>{productData.title}</span>
				</div>
				<div className='flex py-12 justify-between w-full'>
					{productData.imgs?.length !== 0 ? (
						<AntCarousel dots autoplay arrows={false}>
							<div>asdf</div>
							<div>asdf</div>
							<div>asdf</div>
						</AntCarousel>
					) : (
						<>
							<div className='w-[40%] flex gap-x-4 items-start'>
								<img src={`http://localhost:4444/uploads/${productData.mainimg}`} className='w-full' />
								<button className='w-[30px] h-[30px]'>
									<img className='transition-all duration-300 hover:opacity-55' src='/notfav.png'></img>
								</button>
							</div>
							<div className='flex flex-col gap-y-8 w-[55%]'>
								<h1 className='text-6xl font-bold w-3/4'>
									{productData.title}
								</h1>
								<span className='text-xs'>РАЗМЕРЫ</span>
								<div className='grid grid-cols-5 w-5/6 gap-y-5'>
									{productData.sizes.map((size, index) => {
										return (
											<SizeBlock key={index} fav={sizes.includes(size)} toggleSize={toggleSize} size={size} price={productData.price[index]} />
										)
									})}
								</div>
								<div className='w-[80%] flex justify-between items-center'>
									<div className='flex flex-col gap-y-2 items-start'>
										<span className='text-xl font-normal tracking-wider text-[#626262]'>{sum}$</span>
										<span className='flex gap-x-1'>Размеры: {sizes.length === 0 ? (<p className='opacity-50 text-base'>Не выбрано</p>) : sizes.join(', ')}</span>
									</div>
									<button disabled={sizes.length === 0} className={`transition-all duration-300 ${sizes.length !== 0 ? "hover:bg-[#49D0FF] hover:text-white bg-black" : "bg-[#03030365]"} h-3/4 px-8 text-xs font-extrabold pt-1 rounded-md text-white`}>Добавить в корзину</button>
								</div>
							</div>
						</>
					)}
				</div>
				<DetailsBlock product={productData} />
				<div className='w-full flex flex-col gap-y-6 mt-3'>
					<h1 className='font-extrabold text-[31px]'>Интересные предложения</h1>
					<Carousel
						responsive={MainResponsive}
						swipeable={false}
						draggable={true}
						showDots={true}
						// autoPlay={this.props.deviceType !== "mobile" ? true : false}
						removeArrowOnDeviceType={["tablet", "mobile"]}
					>
						{productsData.filter((product) => product.category === productData.category && product.id !== Number(id)).map(item => {
							return (
								<CarouselCard key={item.id} link={item.id} title={item.title} image={item.mainimg} price={item.price	[0]} />
							)
						})}
					</Carousel>
				</div>
			</section>
		) : isLoading ? <Loading /> : isError ? <NotFound /> : null}
		</>
	)
}

export default Product