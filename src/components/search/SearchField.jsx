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
      <Input
        type="search"
        placeholder="Search headphone"
        onFocus={() => setSearchActive(true)}
        onBlur={() => setSearchActive(false)}
        setValue={setSearchInput}
        value={searchInput}
        onChange={onChange}
      />
    </motion.div>
  );
};

export default SearchField;
