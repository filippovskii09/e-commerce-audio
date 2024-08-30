"use client";
import { useSelector } from 'react-redux'
import CartItem from './CartItem';

const CartList = () => {
	const cart = useSelector(state => state.cart.cart);
	
	if(cart.length === 0) return <div className='text-xl font-semibold'>No one item in cart</div>;
		
	return (
		<div>
			{cart.map(cartItem => (
				<CartItem cartItem={cartItem} key={cartItem.id}/>
			))}
		</div>
	)
}

export default CartList