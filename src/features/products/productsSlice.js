import { getProductDetail } from "./thunks/getProductDetailThunk";
import { getAllProducts } from "./thunks/getProductsThunk";

const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
	products: [],
	detailProduct: null,
	isLoading: false,
	error: null
}

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
			.addCase(getProductDetail.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getProductDetail.fulfilled, (state, action) => {
				state.isLoading = false;
				state.detailProduct = action.payload;
			})
			.addCase(getProductDetail.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	}
})

export const productsReducer = productsSlice.reducer;