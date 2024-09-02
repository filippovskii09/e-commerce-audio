"use client";
import { CloseIcon } from "@/icons/CloseIcon";
import { motion } from "framer-motion";
import Filters from "../filters/Filters";
import Input from "../shared/Input";

const ProductsFilters = ({ setFiltersIsOpen }) => {
  return (
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
      <button className="text-white rounded-xl bg-[#0ACF83] py-4 w-full" onClick={() => {setFiltersIsOpen(false)}}>
        Apply Filter
      </button>
    </motion.div>
  );
};

export default ProductsFilters;
