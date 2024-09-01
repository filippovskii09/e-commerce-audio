"use client";
import { createContext, useState } from 'react';

export const SearchContext = createContext(false);

const SearchProvider = ({ children }) => {
	const [searchActive, setSearchActive] = useState(false);
	const [searchInput, setSearchInput] = useState("");
	return (
		<SearchContext.Provider value={{setSearchActive, searchActive, searchInput, setSearchInput}}>{children}</SearchContext.Provider>
	)
}

export default SearchProvider;