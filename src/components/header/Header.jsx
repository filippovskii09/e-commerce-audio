"use client";
import { LeftArrow } from "@/icons/LeftArrow";
import { LogoIcon } from "@/icons/LogoIcon"
import { MenuIcon } from "@/icons/MenuIcon"
import { MenuContext } from "@/providers/MenuProvider";
import { SearchContext } from "@/providers/SearchProvider";
import { useContext } from "react";
import { motion } from 'framer-motion';
import { menuVariants } from "@/animations/animationVariants";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/features/auth/thunks/logoutUserThunk";

const Header = () => {
	const { searchActive, setSearchActive, searchInput, setSearchInput } = useContext(SearchContext);
	const { isOpenMenu, setIsOpenMenu } = useContext(MenuContext);
	const router = useRouter();
	const dispatch = useDispatch();
	const resetSearch = () => {
		setSearchInput("");
		setSearchActive(false)
	}

	const handleLogout = () => {
		router.push("/signin");
		dispatch(logoutUser());
		setIsOpenMenu(false);
	}

	return (
		<>
			<header>
				<div className="px-5 flex items-center justify-between py-3">
					{searchActive || searchInput ? <button onClick={resetSearch}><LeftArrow/></button> : <button onClick={() => setIsOpenMenu(!isOpenMenu)}><MenuIcon/></button>}
					<LogoIcon/>
				</div>
			</header>
			<motion.div
				className="fixed pt-3 w-full h-full z-40 left-0 top-0 flex flex-col justify-between bg-white"
				variants={menuVariants}
				initial="initial"
				animate={isOpenMenu ? "active" : "initial"}
				exit="initial"
			>
				<div className="px-5">
					<button onClick={() => setIsOpenMenu(false)}><LeftArrow/></button>
				</div>
				<ul className="flex flex-col">
					<li>
						<button className="w-full h-full text-left py-4 px-6 border-t border-b" onClick={handleLogout}>Logout</button>
					</li>
				</ul>
			</motion.div>
		</>
	)
}

export default Header