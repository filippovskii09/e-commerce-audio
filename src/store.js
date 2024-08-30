import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { authReducer } from './features/auth/authSlice';
import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './features/products/productsSlice';
import { cartReducer } from './features/cart/cartSlice';
import filtersReducer from './features/filters/filtersSlice';

const rootReducer = {
	auth: authReducer,
	products: productsReducer,
	cart: cartReducer,
	filters: filtersReducer,
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  	},
		serializableCheck: false,
	}),
});

export const persistor = persistStore(store);
