import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IMutationProduct, IProduct } from '@/types/products.type';

interface IData {
	success: boolean;
	products: IProduct[]
}

interface IDataProduct {
	success: boolean;
	product: IProduct
}

interface IErrorResponse {
	success: boolean;
	product: null,
	message: string
}

export const ProductsApi = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:4444/",
		credentials: 'include',
		headers: {
			'Authorization': `Bearer ${window.localStorage.getItem('fashtoken') ? localStorage.getItem('fashtoken') : ''}`
		},
	}),
	tagTypes: ['Product'],
	endpoints: (builder) => ({
		getProducts: builder.query<IProduct[], { end: number; category: string }>({
			query: ({ end, category="" }: { end: number; category: string }) => {
				if (end !== -1) {
					return {
						url: '/products',
						params: {
							start: end - 20,
							end,
							category
						}
					}
				} else {
					return {
						url: '/products'
					}
				}
			},
			transformResponse: (response: IData) => {
				return response.products
			},
			transformErrorResponse: (response: IErrorResponse) => { // типы поменять
				const newResponse: IErrorResponse = {
					success: false,
					product: null,
					message: response.message
				}
				return newResponse
			},
			providesTags: ["Product"]
		}),
		getProduct: builder.query<IProduct, number>({
			query: (id: number) => {
				return {
					url: `product/${id}`,
					params: {
						productId: id
					},
				}
			},
			transformResponse: (response: IDataProduct) => {
				return response.product
			},
			transformErrorResponse: (response: IErrorResponse) => {
				const newResponse: IErrorResponse = {
					success: false,
					product: null,
					message: response.message
				}
				return newResponse
			},
			providesTags: () => 
			[{
				type: "Product"
			}]
		}),
		createProduct: builder.mutation<IProduct, IMutationProduct>({
			query: (product: IMutationProduct) => {
				return {
					method: 'POST',
					url: "/product/create",
					body: product,
				}
			},
			invalidatesTags: ["Product"],
			transformResponse: (response: IDataProduct) => {
				return response.product
			},
			transformErrorResponse: (response: IErrorResponse) => {
				const newResponse: IErrorResponse = {
					success: false,
					message: response.message,
					product: null
				}
				return newResponse
			}
		}),
		uploadPhoto: builder.mutation<{ url: string }, FormData>({
			query: (photo: FormData) => {
				return {
					method: 'POST',
					url: "upload/product",
					body: photo,
				}
			}
		})
	})
})

export const { useGetProductsQuery, useGetProductQuery, useCreateProductMutation, useUploadPhotoMutation } = ProductsApi