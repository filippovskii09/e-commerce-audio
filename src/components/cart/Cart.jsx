"use client";
import { useSelector } from "react-redux"
import CartList from "./CartList"
import { motion } from "framer-motion";
import { RightIcon } from "@/icons/RightIcon";

const Cart = () => {
	const { cartTotal, cart} = useSelector((state) => state.cart);
	
	return (
		<div className="px-5 pb-40">
			<CartList/>
			<motion.div 
				className="flex flex-col gap-6 fixed left-0 bottom-0 py-6 w-full px-5 bg-white shadow-2xl"
				initial={{ opacity: 0, y: "-70%" }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
			>
				<div 
					className="flex items-center justify-between"
				>
					<p>Total {cart.length} Items</p>
					<p className="font-bold">{cartTotal.toLocaleString("uk-UA", {
	            style: "currency",
	            currency: "UAH",
	          })}
					</p>
				</div>
				<button className="text-white rounded-xl bg-[#0ACF83] py-4 px-8 flex items-center justify-between"><span>Proceed to Checkout</span><RightIcon/></button>
			</motion.div>
		</div>
	)
}

export default Cart