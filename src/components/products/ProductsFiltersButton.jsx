import { FilterIcon } from "@/icons/FilterIcon"

const ProductsFiltersButton = ({ setFiltersIsOpen }) => {
	return (
		<button
			onClick={() => setFiltersIsOpen(true)}
			className="py-2 px-4 rounded-xl text-sm flex items-center gap-2 border border-[#BABABA]">
			<FilterIcon />
			Filter
		</button>	
	)
}

export default ProductsFiltersButton