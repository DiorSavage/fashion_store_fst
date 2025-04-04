import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError, RootState } from '@reduxjs/toolkit/query/react';
import { IBasket, IGetUser, ILoginReponse } from '@/types/user.type'

//? Чекнуть 
// prepareHeaders: headers => {
// 	const accessToken = localStorage.getItem('access_token')
// 	if (accessToken) headers.set('authorization', `Bearer ${accessToken}`)
// 	return headers
// }

export const UserApi = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({
		'baseUrl': 'http://localhost:4444/auth/',
		// headers: {
		// 	'Authorization': `Bearer ${localStorage.getItem('fashtoken') || ''}`
		// },
		prepareHeaders: headers => {
			if (typeof window !== undefined) {
				const accessToken = localStorage.getItem('fashtoken')
				if (accessToken) headers.set('authorization', `Bearer ${accessToken}`)
				return headers
			}
		}
	}),	
	tagTypes: ['User'],
	endpoints: (builder) => ({
		getUser: builder.query<IGetUser['user'], void>({
			query: () => {
				return {
					url: 'me',
					credentials: 'include',
				}
			},
			providesTags: ["User"],
			transformResponse: (response: IGetUser) => {
				return response.user
			}
		}),
		loginUser: builder.mutation<ILoginReponse, { email: string, password: string }>({
			query: (data) => {
				return {
					method: 'POST',
					url: 'login',
					body: data,
					credentials: 'include' //! тоже для куков, чтобы приходили в клиент и сохранялись
				}
			},
			invalidatesTags: ['User'],
			transformResponse: (response: { accessToken: string, refreshToken: string, userData: ILoginReponse }) => {
				localStorage.setItem('fashtoken', response.accessToken)
				// headers().set('Authorization', `Bearer ${response.accessToken}`)
				const newResponse = {
					refreshToken: response.refreshToken,
					userData: response.userData
				}
				return newResponse
			}
		}),
		checkAuth: builder.query<ILoginReponse, void>({
			query: () => {
				return {
					url: 'refresh',
					credentials: 'include',
				}
			},
			providesTags: ["User"],
			transformResponse: (response) => {
				console.log(response)
				return response
			},
			transformErrorResponse: (response: { status: number; message: string }) => {
				return {
					status: response.status,
					message: response.message
				}
			},
			transformResponse: (response: {accessToken: string; refreshToken: string; user: ILoginReponse }) => {
				localStorage.setItem('fashtoken', response.accessToken)
				return response.user
			}
		}),
		updateBasket: builder.mutation<IBasket, IBasket>({
			query: (body) => {
				return {
					url: "update-basket",
					credentials: 'include',
					body: body,
					method: "put"
				}
			},
			invalidatesTags: ["User"]
		}),
		deleteFromBasket: builder.mutation<void, number>({
			query: (basket_id: number) => {
				return {
					url: `remove-from-basket/${basket_id}`,
					credentials: "include",
					method: "delete"
				}
			},
			invalidatesTags: ["User"]
		}),
		register: builder.mutation({
			query: (data) => {
				return {
					method: 'POST',
					url: 'registration',
					body: data,
					credentials: 'include'
				}
			},
			invalidatesTags: ["User"],
			transformResponse: (response) => {
				localStorage.setItem('fashtoken', response.accessToken)
				// headers().set('Authorization', `Bearer ${response.accessToken}`)
				const newResponse = {
					refreshToken: response.refreshToken,
					userData: response.userData
				}
				return newResponse
			}
		}),
		logout: builder.mutation({
			query: () => {
				return {
					method: 'POST',
					url: 'logout',
					credentials: 'include',
					body: {ok :"nigger"}
				}
			},
			transformResponse: (response: { success: boolean; token: string }) => {
				window.localStorage.removeItem('fashtoken')
				return {
					success: response.success
				}
			}
		})
	})
})

export const { useGetUserQuery, useLoginUserMutation, useCheckAuthQuery, useRegisterMutation, useLogoutMutation, useUpdateBasketMutation, useDeleteFromBasketMutation } = UserApi