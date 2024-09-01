"use client";
import useProduct from "@/hooks/useProduct";
import { useParams } from "next/navigation";

const Details = () => {
	const params = useParams();
	const { product, loading, error } = useProduct(params.productId);
	if(loading) return <div className='text-2xl font-semibold'>Loading...</div>
	
	return (
		<div>
			hq
		</div>
	)
}

export default Details