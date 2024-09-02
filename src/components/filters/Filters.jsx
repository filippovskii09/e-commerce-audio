"use client";
import useFilters from '@/hooks/useFilters';
import Filter from './Filter';
import { uniqueCategories } from '@/utils/getUniqueCategories';
import { usePathname } from 'next/navigation';

const Filters = () => {
	const pathname = usePathname();
	const isProductsPage = pathname === "/products";
	const { handleFilterClick, filterCategory } = useFilters();
	
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