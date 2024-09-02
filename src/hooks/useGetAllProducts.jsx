"use client";
import { getAllProducts } from "@/features/products/thunks/getProductsThunk";
import { useDispatch } from "react-redux";

const useGetAllProducts = () => {
	const dispatch = useDispatch();
	const handleGetAllProducts = (category) => dispatch(getAllProducts(category));

	return handleGetAllProducts
}

export default useGetAllProducts