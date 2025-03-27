import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { ProductsApi } from './api/products.api'
import UserSlice from './slices/user.slice'
import { UserApi } from './api/user.api'
import { OrdersApi } from './api/orders.api';

const reducers = combineReducers({
	[ProductsApi.reducerPath]: ProductsApi.reducer,
	[UserApi.reducerPath]: UserApi.reducer,
	[OrdersApi.reducerPath]: OrdersApi.reducer,
	UserSlice: UserSlice.reducer,
})

export const store = configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ProductsApi.middleware).concat(UserApi.middleware).concat(OrdersApi.middleware)
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']