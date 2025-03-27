"use client"

import Loading from '@/app/_components/Loading'
import { useGetProductsQuery } from '@/app/store/api/products.api'
import type { IProduct } from '@/types/products.type'
import AboutMain from '../_components/AboutMain'
import CalculatorComp from '../_components/CalculatorComp'
import CarouselBlog from '../_components/CarouselBlog'
import CarouselHome from '../_components/CarouselHome'
import Greeting from '../_components/Greeting'

const Home = () => {
	const { data, isSuccess, isError } = useGetProductsQuery({ end: -1, category: "" })
	console.log(data)
	return (
		<>
			{isSuccess && data ? 
				<>
					<Greeting />
					{[["Обувь", "shoes"], ["Одежда", "clothes"], ["Аксессуары", "accessories"]].map(category => {
						const products: IProduct[] = data.filter(el => el.category === category[0])
						return (
							<CarouselHome key={category[0]} category={category[0]} header={category[0]} link={`/${category[1]}`} elements={products} />
						)
					})}
					<CalculatorComp />
					<AboutMain />
					<CarouselBlog />
				</>
			: isError ? <div>error</div> : <Loading /> }
		</>
	)
}

export default Home