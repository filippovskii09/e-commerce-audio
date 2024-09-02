"use client";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import Link from "next/link";
import { listVariants } from "@/animations/animationVariants";
import { motion } from "framer-motion";
import useGetAllProducts from "@/hooks/useGetAllProducts";
import useWindowDimensions from "@/hooks/useWindowDimensions";

const FeaturedProducts = () => {
  const { isLoading, products } = useSelector((state) => state.products);
  const filterCategory = useSelector((state) => state.filters.filterCategory);
  const handleGetAllProducts = useGetAllProducts();
  const windowDimensions = useWindowDimensions();

  useEffect(() => {
    handleGetAllProducts(filterCategory);
  }, []);

  if (isLoading)
    return <div className="text-2xl font-semibold">Loading...</div>;

  if (products.lenght === 0)
    return <div className="text-2xl font-semibold">No one items...</div>;

  return (
    <div>
      <div className="flex justify-between my-5">
        <h5>Featured Products</h5>
        <Link href="/products" className="text-sm text-[#7F7F7F]">
          See All
        </Link>
      </div>
      <motion.div
        className="flex gap-4 flex-wrap justify-between pb-5 lg:justify-start w-full"
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0 }}
        variants={listVariants}>
        {windowDimensions.width <= 1024
          ? !isLoading &&
            products &&
            products
              .slice(0, 2)
              .map((product) => <Product key={product.id} product={product} />)
          : !isLoading &&
            products &&
            products
              .slice(0, 3)
              .map((product) => <Product key={product.id} product={product} />)}
      </motion.div>
    </div>
  );
};

export default FeaturedProducts;
