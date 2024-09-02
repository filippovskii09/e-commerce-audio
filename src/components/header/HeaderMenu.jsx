"use client";
import { menuVariants } from "@/animations/animationVariants";
import { motion } from 'framer-motion';
import { LeftArrow } from "@/icons/LeftArrow";
import HeaderMenuLinks from "./HeaderMenuLinks";
import { useSelector } from "react-redux";

const HeaderMenu = ({ isOpenMenu, setIsOpenMenu }) => {
	const user = useSelector((state) => state.auth.user);
  return (
    <motion.div
      className="fixed pt-3 w-full h-full z-40 left-0 top-0 flex flex-col justify-between bg-white"
      variants={menuVariants}
      initial="initial"
      animate={isOpenMenu ? "active" : "initial"}
      exit="initial">
      <div className="px-5 flex flex-col gap-5">
        <button onClick={() => setIsOpenMenu(false)}>
          <LeftArrow />
        </button>
				<h4 className="text-2xl font-bold">{user?.email}</h4>
      </div>
			<HeaderMenuLinks setIsOpenMenu={setIsOpenMenu}/>
    </motion.div>
  );
};

export default HeaderMenu;
