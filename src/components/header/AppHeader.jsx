"use client";
import { resetCart } from "@/features/cart/cartSlice";
import { LeftArrow } from "@/icons/LeftArrow"
import { ShoppingCartIcon } from "@/icons/ShoppingCartIcon"
import { TrashIcon } from "@/icons/TrashIcon";
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useDispatch } from "react-redux";

const AppHeader = () => {
  const pathname = usePathname();
	const router = useRouter();
	const dispatch = useDispatch();
	const isCartPage = pathname === "/cart";
	
	return (
		<header className="flex items-center justify-between px-5 py-4">
			<button onClick={() => router.back()}><LeftArrow/></button>
			{!isCartPage && <Link href="/cart"><ShoppingCartIcon/></Link>}
			{isCartPage && <button onClick={() => dispatch(resetCart())}><TrashIcon/></button>}
		</header>	
	)
}

export default AppHeader