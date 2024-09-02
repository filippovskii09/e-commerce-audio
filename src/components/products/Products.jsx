"use client";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';
import { listVariants } from '@/animations/animationVariants';
import { motion } from "framer-motion";
import useGetAllProducts from '@/hooks/useGetAllProducts';

const Products = () => {
	const { isLoading, products } = useSelector(state => state.products);
	const filterCategory = useSelector((state) => state.filters.filterCategory);
	const handleGetAllProducts = useGetAllProducts();
	
	useEffect(() => {
		handleGetAllProducts(filterCategory);
	}, [])

	if(isLoading) return <div className='text-2xl font-semibold'>Loading...</div>

	if(products.lenght === 0) return <div className='text-2xl font-semibold'>No one items...</div>
	
	return (
		<motion.div 
			className='flex gap-4 flex-wrap justify-between pb-5'
			initial="hidden"
			animate="visible"
			exit={{ opacity: 0 }}
			variants={listVariants}
		>
			{!isLoading && products && products.map(product => (
				<Product key={product.id} product={product}/>
			))}
		</motion.div>
	)
}

export default Products