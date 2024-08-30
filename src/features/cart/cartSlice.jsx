const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
	cart: [],
}

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addProductToCard: (state, action) => {
			state.cart = [...state.cart, action.payload];
		},
		removeProductFromCart: (state, action) => {
			state.cart.filter(items => items.id !== action.payload);
		}
	},
})

export const { addProductToCard, removeProductFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;