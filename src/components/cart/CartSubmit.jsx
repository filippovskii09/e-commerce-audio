"use client";
import { postOrderThunk } from '@/features/auth/thunks/postOrderThunk';
import { RightIcon } from '@/icons/RightIcon'
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux'

const CartSubmit = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { cart, cartTotal } = useSelector((state) => state.cart);
	const { user, isLoading } = useSelector((state) => state.auth);

	const handleCheckout = () => {
		console.log("click");
		
    const order = {
      products: cart,
      total: cartTotal,
    };
    dispatch(postOrderThunk({ userId: user.uid, order, email: user.email }));
		router.push("/order-success");
  };

	return (
		<button onClick={handleCheckout} className="text-white rounded-xl bg-[#0ACF83] py-4 px-8 flex items-center justify-between"><span>{isLoading ? "Loading..." : "Proceed to Checkout"}</span><RightIcon/></button>
	)
}

export default CartSubmit