"use client";
import { motion } from "framer-motion";
import Filters from "../filters/Filters";
import { useContext } from "react";
import { SearchContext } from "@/providers/SearchProvider";
import FeaturedProducts from "../products/FeaturedProducts";

const HomeContentSection = () => {
  const { searchActive, searchInput } = useContext(SearchContext);

  return (
    <motion.section 
			className="flex flex-col flex-1 bg-[#F6F6F6] w-full mt-6 ml-0 rounded-t-3xl"
			initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
		>
      <div className={`px-5 overflow-x-hidden`}>
        {!searchActive && !searchInput ? (
          <>
            <Filters />
            <FeaturedProducts />
          </>
        ) : (
          <div className="py-5 text-xl font-medium">
            {searchInput ? <FeaturedProducts /> : "Start enter text for searching..."}
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default HomeContentSection;
