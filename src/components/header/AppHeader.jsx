"use client";
import { LeftArrow } from "@/icons/LeftArrow"
import { ShoppingCartIcon } from "@/icons/ShoppingCartIcon"
import { TrashIcon } from "@/icons/TrashIcon";
import Link from "next/link"
import { useParams, usePathname, useRouter } from "next/navigation"

const AppHeader = () => {
  const pathname = usePathname();
	const router = useRouter();

	const isCartPage = pathname === "/cart";
	return (
		<header className="flex items-center justify-between px-5 py-4">
			<button onClick={() => router.back()}><LeftArrow/></button>
			{!isCartPage && <Link href="/cart"><ShoppingCartIcon/></Link>}
			{isCartPage && <button><TrashIcon/></button>}
		</header>	
	)
}

export default AppHeader