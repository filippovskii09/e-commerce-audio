"use client";
import { motion } from "framer-motion";
import Products from "./Products";
import { useSelector } from "react-redux";
import { FilterIcon } from "@/icons/FilterIcon";
import { CloseIcon } from "@/icons/CloseIcon";
import Filters from "../filters/Filters";
import Input from "../shared/Input";
import { useState } from "react";

const ProductsComponent = () => {
  const filterCategory = useSelector((state) => state.filters.filterCategory);
  const [filtersIsOpen, setFiltersIsOpen] = useState(false);

  return (
    <div className="flex flex-col mt-7 h-full transition-all">
      <div className="flex flex-col px-5 gap-5 items-start mb-3">
        <h3 className="font-bold text-2xl">{filterCategory}</h3>
        <button
          onClick={() => setFiltersIsOpen(true)}
          className="py-2 px-4 rounded-xl text-sm flex items-center gap-2 border border-[#BABABA]">
          <FilterIcon />
          Filter
        </button>
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
        <motion.div
          className="flex flex-col flex-1 gap-9 p-6 border-t rounded-t-3xl shadow-2xl"
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}>
          <div className="flex justify-between gap-1 items-center">
            <h3 className="font-bold text-2xl">Filter</h3>
            <button
              onClick={() => {
                setFiltersIsOpen(false);
              }}>
              <CloseIcon />
            </button>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="">Category</p>
            <Filters />
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="">Price Range</p>
            <div className="flex gap-4 items-center">
              <Input type="text" placeholder="Min Price" />
              <Input type="text" placeholder="Max Price" />
            </div>
          </div>
          <button className="text-white rounded-xl bg-[#0ACF83] py-4 w-full">
            Apply Filter
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default ProductsComponent;
