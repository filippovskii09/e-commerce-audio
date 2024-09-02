import { getProductsByName } from "./thunks/getProductsByName";
import { getAllProducts } from "./thunks/getProductsThunk";

const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
	products: [],
	detailProduct: null,
	isLoading: false,
	error: null
};

const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getAllProducts.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getAllProducts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.products = action.payload;
			})
			.addCase(getAllProducts.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(getProductsByName.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getProductsByName.fulfilled, (state, action) => {
				state.products = action.payload
				state.isLoading = false;
			})
			.addCase(getProductsByName.rejected, (state, action) => {
				state.products = action.payload;
				state.isLoading = false;
			});
	}
})

export const productsReducer = productsSlice.reducer;