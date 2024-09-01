"use client";
import Filter from './Filter';
import { useEffect } from 'react';
import { uniqueCategories } from '@/utils/getUniqueCategories';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '@/features/filters/filtersSlice';
import { getAllProducts } from '@/features/products/thunks/getProductsThunk';
import { usePathname } from 'next/navigation';

const Filters = () => {
	const pathname = usePathname();
	const filterCategory = useSelector((state) => state.filters.filterCategory);
	const dispatch = useDispatch();

	useEffect(() => {
		if (uniqueCategories.length > 0 && !filterCategory) dispatch(changeFilter(uniqueCategories[0]));
	}, [uniqueCategories]);

	const handleFilterClick = (category) => {
		dispatch(changeFilter(category));
		dispatch(getAllProducts(category));
	};
	const isProductsPage = pathname === "/products";
	return (
		<div className={`${isProductsPage ? "m-0" : "mt-8 mb-5"} gap-2.5 flex overflow-x-auto w-fit`}>
			{uniqueCategories.map(category => (
				<Filter 
					value={category} 
					key={category} 
					active={filterCategory === category}
					onClick={() => handleFilterClick(category)}
				/>
			))}
		</div>
	)
}

export default Filters