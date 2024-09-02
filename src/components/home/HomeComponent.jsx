"use client";
import { motion } from "framer-motion"
import SearchField from "../search/SearchField";
import HomeGreatingSection from "./HomeGreatingSection";
import HomeContentSection from "./HomeContentSection";
import useAuth from "@/hooks/useAuth";

const HomeComponent = () => {
	useAuth();
	return (
		<motion.div 
			className="flex flex-col mt-7 h-full transition-all"
			initial={{ opacity: 0, y: 20 }} 
			animate={{ opacity: 1, y: 0 }} 
			exit={{ opacity: 0, y: -20 }} 
			transition={{ duration: 0.6 }}
		>
			<div 
				className="px-5"
			>
				<HomeGreatingSection/>
				<SearchField/>
			</div>
			<HomeContentSection/>
		</motion.div>
	)
}

export default HomeComponent