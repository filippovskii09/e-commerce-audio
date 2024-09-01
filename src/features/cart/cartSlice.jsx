const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
	cart: [],
	cartTotal: 0
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addProductToCard: (state, action) => {
			const existingProduct = state.cart.find(item => item.id === action.payload.id);

			if(existingProduct) {
				existingProduct.quantity += 1;
			} else {
				state.cart.push({ ...action.payload, quantity: 1 });
			}
		},
		removeProductFromCart: (state, action) => {
			state.cart = state.cart.filter(items => items.id !== action.payload);
		},
		resetCart: (state) => {
			state.cart = []
		},
		incrementQuantity: (state, action) => {
      const product = state.cart.find(item => item.id === action.payload);
      if (product && product.quantity < 11) {
        product.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const product = state.cart.find(item => item.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
		calculateTotal: (state) => {
      state.cartTotal = state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }
	},
});

export const { addProductToCard, removeProductFromCart, resetCart, incrementQuantity, decrementQuantity, calculateTotal } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;