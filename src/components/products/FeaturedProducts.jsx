"use client";
import { getAllProducts } from '@/features/products/thunks/getProductsThunk';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';
import Link from 'next/link';
import { uploadProducts } from '@/utils/uploadProducts';

const FeaturedProducts = () => {
	const { isLoading, products } = useSelector(state => state.products);
	const filterCategory = useSelector((state) => state.filters.filterCategory);
	const dispatch = useDispatch();
	
	useEffect(() => {
		dispatch(getAllProducts(filterCategory));
	}, [])

	if(isLoading) return <div className='text-2xl font-semibold'>Loading...</div>

	if(products.lenght === 0) return <div className='text-2xl font-semibold'>No one items...</div>

	return (
		<div>
			<div className='flex justify-between my-5'>
				<h5>Featured Products</h5>
				<Link href="/products" className='text-sm text-[#7F7F7F]'>See All</Link>
			</div>
			<div className='flex gap-4 flex-wrap justify-between pb-5'>
				{!isLoading && products && products.slice(0, 2).map(product => (
					<Product key={product.id} product={product}/>
				))}
			</div>
			{/* <button onClick={uploadProducts}>Upload products to db</button> */}
		</div>
	)
}

export default FeaturedProducts