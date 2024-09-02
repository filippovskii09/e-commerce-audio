"use client";
import { addProductToCard } from "@/features/cart/cartSlice";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { itemVariants } from "@/animations/animationVariants";
import { CheckIcon } from "@/icons/CheckIcon";
import { ShoppingCartIcon } from "@/icons/ShoppingCartIcon";
import ProductPrice from "./ProductPrice";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    dispatch(addProductToCard(product));
    setAddedToCart(true);
  };

  return (
    <motion.div
      className="flex flex-col p-4 gap-3 bg-white rounded-2xl w-[calc(50%-1rem)] justify-between"
      variants={itemVariants}>
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-center w-[125px] h-[125px] mx-auto relative">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority={false}
            sizes="(max-width: 768px) 100%, (max-width: 1200px) 100%"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm">{product.name}</p>
					<ProductPrice price={product.price}/>
        </div>
      </div>
      <button
        className="p-1 rounded-xl text-white font-semibold bg-[#0ACF83] text-xs mt-2"
        onClick={handleAddToCart}>
        {addedToCart ? "Added to cart" : "Add to cart"}
      </button>
    </motion.div>
  );
};

export default Product;
