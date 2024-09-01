"use client";
import { useSelector } from 'react-redux'
import CartItem from './CartItem';
import { motion } from "framer-motion";
import { cartListVariants } from '@/animations/animationVariants';

const CartList = () => {
	const cart = useSelector(state => state.cart.cart);
	
	
	if(cart.length === 0) return <div className='text-xl font-semibold'>No one item in cart</div>;

	return (
		<motion.div
			initial="hidden"
			animate="visible"
			exit={{ opacity: 0 }}
			variants={cartListVariants}
			className="flex flex-col gap-9 mt-8"
		>
			{cart.map(cartItem => (
				<CartItem cartItem={cartItem} key={cartItem.id}/>
			))}
		</motion.div>
	)
}

export default CartList