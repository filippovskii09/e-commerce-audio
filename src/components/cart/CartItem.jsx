"use client";
import Image from "next/image"
import CartCounter from "./CartCounter"
import DeleteCartItem from "./DeleteCartItem"
import { motion } from "framer-motion";

const CartItem = ({ cartItem }) => {

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<motion.div className="flex gap-4" variants={itemVariants}>
			<div className="w-[87px] h-[87px] relative">
				<Image src={cartItem.image} alt={cartItem.name} fill/>
			</div>
			<div className="flex flex-col justify-between w-full">
				<div>
					<h5 className="text-sm">{cartItem.name}</h5>
	        <p className="text-xs font-bold">
	          {cartItem.price.toLocaleString("uk-UA", {
	            style: "currency",
	            currency: "UAH",
	          })}
	        </p>
				</div>
				<div className="flex justify-between gap-2">
					<CartCounter quantity={cartItem.quantity} id={cartItem.id}/>
					<DeleteCartItem id={cartItem.id} />
				</div>
			</div>
		</motion.div>
	)
}

export default CartItem