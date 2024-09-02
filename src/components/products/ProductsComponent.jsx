"use client";
import { motion } from "framer-motion";
import Products from "./Products";
import { useSelector } from "react-redux";
import { useState } from "react";
import ProductsFilters from "./ProductsFilters";
import ProductsFiltersButton from "./ProductsFiltersButton";
import useAuth from "@/hooks/useAuth";

const ProductsComponent = () => {
	useAuth();
  const filterCategory = useSelector((state) => state.filters.filterCategory);
  const [filtersIsOpen, setFiltersIsOpen] = useState(false);

  return (
    <div className="flex flex-col mt-7 h-full transition-all">
      <div className="flex flex-col px-5 gap-5 items-start mb-3">
        <h3 className="font-bold text-2xl">{filterCategory}</h3>
				<ProductsFiltersButton setFiltersIsOpen={setFiltersIsOpen}/>
      </div>
      {!filtersIsOpen ? (
        <motion.section
          className="flex flex-col flex-1 bg-[#F6F6F6] w-full mt-6 ml-0 pt-5 rounded-t-3xl"
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}>
          <div className="px-5">
            <Products />
          </div>
        </motion.section>
      ) : (
				<ProductsFilters setFiltersIsOpen={setFiltersIsOpen}/>
      )}
    </div>
  );
};

export default ProductsComponent;
