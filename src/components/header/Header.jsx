"use client";
import { LeftArrow } from "@/icons/LeftArrow";
import { LogoIcon } from "@/icons/LogoIcon"
import { MenuIcon } from "@/icons/MenuIcon"
import { SearchContext } from "@/providers/SearchProvider";
import { useContext } from "react";

const Header = () => {
	const { searchActive, setSearchActive, searchInput, setSearchInput } = useContext(SearchContext);

	const resetSearch = () => {
		setSearchInput("");
		setSearchActive(false)
	}
	
	return (
		<header>
			<div className="px-5 flex items-center justify-between py-3">
				{searchActive || searchInput ? <button onClick={resetSearch}><LeftArrow/></button> : <button><MenuIcon/></button>}
				<LogoIcon/>
			</div>
		</header>
	)
}

export default Header