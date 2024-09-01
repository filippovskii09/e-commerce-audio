"use client";
import { motion } from "framer-motion";
import Filters from "../filters/Filters";
import Products from "../products/Products";
import { useContext } from "react";
import { SearchContext } from "@/providers/SearchProvider";

const HomeContentSection = () => {
  const { searchActive, searchInput } = useContext(SearchContext);

  return (
    <section className="flex flex-col flex-1 bg-[#F6F6F6] w-full mt-6 ml-0 rounded-t-3xl">
      <div className={`px-5 overflow-x-hidden`}>
        {!searchActive && !searchInput ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}>
            <Filters />
            <Products />
          </motion.div>
        ) : (
          <div className="py-5 text-xl font-medium">
            {searchInput ? <Products /> : "Start enter text for searching..."}
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeContentSection;
