"use client";
import { motion } from "framer-motion";
import Input from "../shared/Input";
import { inputVariants } from "@/animations/animationVariants";
import { useDispatch } from "react-redux";
import { getProductsByName } from "@/features/products/thunks/getProductsByName";
import { useContext } from "react";
import { SearchContext } from "@/providers/SearchProvider";

const SearchField = () => {
	const { setSearchActive, setSearchInput, searchActive, searchInput } = useContext(SearchContext);
	const dispatch = useDispatch();

	const onChange = (e) => {
		const value = e.target.value;
		setSearchInput(value);
		if(value) dispatch(getProductsByName(value));
	}

  return (
    <motion.div
      variants={inputVariants}
      initial="initial"
      animate={searchActive ? "active" : "initial"}
      className="relative">
      <input
        type="search"
        placeholder="Search"
				className="w-full h-11 pl-4 flex items-center text-black placeholder:text-[#BABABA] rounded-lg border border-[#BABABA] bg-white focus:border-black focus:text-black outline-[#0ACF83] transition-all ease-linear"
				value={searchInput}
        onFocus={() => setSearchActive(true)}
        onBlur={() => setSearchActive(false)}
        onChange={onChange}
      />
    </motion.div>
  );
};

export default SearchField;
