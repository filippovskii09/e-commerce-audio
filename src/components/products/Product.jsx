"use client";
import { addProductToCard } from "@/features/cart/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Product = ({ product }) => {
	const dispatch = useDispatch();
	const [addedToCart, setAddedToCart] = useState(false);

	const handleAddToCart = () => {
		dispatch(addProductToCard(product));
		setAddedToCart(true);
	};

	return (
    <div className="flex flex-col gap-5 p-4 bg-white rounded-2xl w-[calc(50%-1rem)]">
			<Link href={`/${product.id}`}>
	      <div className="flex items-center justify-center w-[125px] h-[125px] mx-auto relative">
	        <Image src={product.image} alt={product.name} fill />
	      </div>
			</Link>
      <div className="flex flex-col gap-1">
        <Link href={`/${product.id}`} className="text-sm">{product.name}</Link>
        <p className="text-xs font-bold">
          {product.price.toLocaleString("uk-UA", {
            style: "currency",
            currency: "UAH",
          })}
        </p>
				<button className="p-1 rounded-xl text-white font-semibold bg-[#0ACF83] text-xs mt-2" onClick={handleAddToCart}>{addedToCart ? "Added to cart" : "Add to cart"}</button>
      </div>
    </div>
  );
};

export default Product;
