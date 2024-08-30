import { uniqueCategories } from "@/utils/getUniqueCategories";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	filterCategory: uniqueCategories.length > 0 ? uniqueCategories[0] : "Headphones",
};

export const filtersSlice = createSlice({
	name: "filters",
	initialState,
	reducers: {
		changeFilter: (state, action) => {
			state.filterCategory = action.payload;
		},
	}
});

export const { changeFilter } = filtersSlice.actions;

const filtersReducer = filtersSlice.reducer;

export default filtersReducer;