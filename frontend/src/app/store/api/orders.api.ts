import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IOrder, IOrderInfo } from '@/types/orders.type';

export const OrdersApi = createApi({
	reducerPath: "OrdersApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:4444/orders/"
	}),
	endpoints: (builder) => ({
		getOrders: builder.query<IOrderInfo[], void>({
			query: () => {
				return {
					url: '/',
					credentials: 'include',
					headers: {
						'Authorization': `Bearer ${localStorage.getItem('fashtoken') ? localStorage.getItem('fashtoken') : ''}`
					}
				}
			},
			transformResponse: (response: { success: boolean; orders: IOrder[] }) => {
				return response.orders
			}
		})
	})
})

export const { useGetOrdersQuery } = OrdersApi