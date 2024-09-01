"use client";
import { sectionVariants } from '@/animations/animationVariants';
import { SearchContext } from '@/providers/SearchProvider';
import { AnimatePresence, motion } from 'framer-motion'
import { useContext } from 'react';
import { useSelector } from 'react-redux';

const HomeGreatingSection = () => {
	const user = useSelector((state) => state.auth.user);
	const { searchActive, searchInput } = useContext(SearchContext);

	return (
		<AnimatePresence>
		<motion.section 
			className={`mb-6 ${searchActive || searchInput ? "hidden" : ""}`}
			variants={sectionVariants}
			initial="visible"
			animate="visible"
			exit="hidden"
		>
			<p className="mb-1">Hi, {user?.email}</p>
			<h2 className="text-2xl font-bold">What are you looking for today?</h2>
		</motion.section>
	</AnimatePresence>	)
}

export default HomeGreatingSection;