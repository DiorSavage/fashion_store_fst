"use client"

import { useGetProductsQuery } from '@/app/store/api/products.api'
import { useAppSelector } from '@/app/store/hooks'
import { filtersNames, pageNames, productsCategories } from '@/constants/products.constant'
import { useParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import CategoriesFilters from '../_components/CategoriesFilters'
import SizesFilters from '../_components/SizesFilters'
import BrandsFilters from '../_components/BrandsFilters'
import ModelsFilters from '../_components/ModelsFilters'
import ColorsFilters from '../_components/ColorsFilters'
import Loading from '@/app/_components/Loading'
import ProductCard from '../../_components/ProductCard'
import { IProduct } from '@/types/products.type'


export interface IFilters {
	categories: string[];
	colors: string[];
	sizes: number[];
	brands: string[];
	models: string[];
}

//? МОДЕЛИ ПОДБИРАЮТСЯ В ЗАВИСИМОСТИ ОТ БРЕНДОВ

const Products = () => {

	const pageName = useParams().category as string
	const categories = productsCategories[pageNames[pageName]].categories
	const { data: ProductsData, isSuccess, isError, isLoading } = useGetProductsQuery({ end: 20, category: pageNames[pageName] }) //? category закинуть query параметром
	
	const [productsLimit, setProductsLimit] = useState<{ start: number; end: number }>({
		start: 0,
		end: 20
	})
	const [filters, setFilters] = useState<IFilters>({
		categories: [],
		colors: [],
		sizes: [],
		brands: [],
		models: []
	})

	const dropFilters = () => {
		setFilters({
			categories: [],
			colors: [],
			sizes: [],
			brands: [],
			models: []
		})
	}

	function filterProducts() {
		let newProducts: IProduct[] = ProductsData ? ProductsData : []
		for (let filter of filtersNames) {
			if (filter[0] !== "page" && !["colors", "sizes"].includes(filter[0]) && filters[filter[0] as keyof object].length !== 0) {
				newProducts = newProducts.filter((product) => {
					if (filters[filter[0] as keyof object].includes(product[filter[1] as keyof object])) return product
				})
			} else if (["colors", "sizes",].includes(filter[0]) && filters[filter[0] as keyof object].length !== 0) {
				newProducts = newProducts.filter(product => {
					for (let i of filters[filter[0] as keyof object]) {
						if (product[filter[1] as keyof object].indexOf(i.toString()) !== -1) return true
					}
					return false
				})
			}
		}
		return newProducts
	}

	const filteredProducts = useMemo(() => {
		if (!ProductsData) return [] 
		return filterProducts()
	}, [ProductsData, filters])

	const [price, setPrice] = useState<number[]>([])
	const userData = useAppSelector(state => state.UserSlice)
	const tovars = ProductsData && ProductsData.length.toString().slice(ProductsData.length.toString().length - 1) //? знаю, что название гавно

	return (
		<>
			{filteredProducts ? (
				<section className='flex w-full justify-between gap-x-6 my-6'>
					<aside className='flex flex-col gap-y-8 w-[20%]'>
						<CategoriesFilters categories={categories} setFilters={setFilters} catState={filters.categories} />
						<SizesFilters setFilters={setFilters} sizeState={filters.sizes} />
						<BrandsFilters setFilters={setFilters} brandState={filters.brands} category={pageName} />
						<ModelsFilters brandState={filters.brands} setFilters={setFilters} modelState={filters.models} />
						<ColorsFilters colorsState={filters.colors} setFilters={setFilters} />
						<button onClick={dropFilters} className='transition-all duration-300 hover:bg-site-blue hover:text-white border flex items-center justify-center border-[#E6E7EB] w-full text-xs font-extrabold h-12 rounded-md uppercase'><span className='text-[19px] mr-3'>&#215;</span>Сбросить все фильтры</button>
					</aside>
					<section className='flex flex-col gap-y-3 flex-grow'>
						<div className='flex justify-between w-full items-center'>
							<div className='flex flex-col gap-y-2'>
								<h1 className='text-black-main font-black text-[31px]'>{pageNames[pageName]}</h1>
								<span className='text-light-gray font-semibold text-[13px]'>{filteredProducts.length} товар{tovars && '056789'.includes(tovars) ? 'ов' : tovars === '1' ? "" : "а"}</span>
							</div>
							<span className='text-[#6D6D6D] font-semibold text-[13px]'>Сортировать по 
								<span className='transitio-all duration-300 hover:text-site-blue text-black cursor-pointer ml-2'>популярности</span>
							</span>
						</div>
						<div className='grid grid-cols-2 gap-1 xl:grid-cols-3'>
							{filteredProducts.map((product) => {
								return (
									<ProductCard image={product.mainimg} key={product.id} title={product.title} price={product.price[0]} link={product.id} />
								)
							})}
						</div>
					</section>
			</section>
			) : isError ? null : isLoading ? <Loading /> : null}
		</>
	)
}

export default Products