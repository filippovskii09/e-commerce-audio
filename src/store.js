import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { authReducer } from './features/auth/authSlice';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = {
	auth: authReducer,
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
