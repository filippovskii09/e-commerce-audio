"use client";
import { LeftArrow } from "@/icons/LeftArrow";
import { LogoIcon } from "@/icons/LogoIcon";
import { MenuIcon } from "@/icons/MenuIcon";
import { SearchContext } from "@/providers/SearchProvider";
import { useContext, useState } from "react";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  const { searchActive, setSearchActive, searchInput, setSearchInput } =
    useContext(SearchContext);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const resetSearch = () => {
    setSearchInput("");
    setSearchActive(false);
  };

  return (
    <>
      <header>
        <div className="px-5 flex items-center justify-between py-3">
          {searchActive || searchInput ? (
            <button onClick={resetSearch}>
              <LeftArrow />
            </button>
          ) : (
            <button onClick={() => setIsOpenMenu(!isOpenMenu)}>
              <MenuIcon />
            </button>
          )}
          <LogoIcon />
        </div>
      </header>
      <HeaderMenu isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
    </>
  );
};

export default Header;
