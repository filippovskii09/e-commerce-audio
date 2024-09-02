"use client";
import { changeFilter } from '@/features/filters/filtersSlice';
import { getAllProducts } from '@/features/products/thunks/getProductsThunk';
import { uniqueCategories } from '@/utils/getUniqueCategories';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useGetAllProducts from './useGetAllProducts';

const useFilters = () => {
	const filterCategory = useSelector((state) => state.filters.filterCategory);
	const dispatch = useDispatch();
	const handleGetAllProducts = useGetAllProducts();
	useEffect(() => {
		if (uniqueCategories.length > 0 && !filterCategory) dispatch(changeFilter(uniqueCategories[0]));
	}, [uniqueCategories]);

	const handleFilterClick = (category) => {
		dispatch(changeFilter(category));
		handleGetAllProducts(category);
	};

	return { handleFilterClick, filterCategory};
}

export default useFilters