import Image from "next/image"
import CartCounter from "./CartCounter"
import DeleteCartItem from "./DeleteCartItem"

const CartItem = ({ item }) => {
	
	return (
		<div className="flex gap-4">
			<div className="w-[87px] h-[87px]">
				<Image src={item.image} alt={item.name} fill/>
			</div>
			<div className="flex flex-col">
				<h5 className="text-sm">{item.name}</h5>
        <p className="text-xs font-bold">
          {item.price.toLocaleString("uk-UA", {
            style: "currency",
            currency: "UAH",
          })}
        </p>
				<div className="flex justify-between gap-2">
					<CartCounter/>
					<DeleteCartItem id={item.id}/>
				</div>
			</div>
		</div>
	)
}

export default CartItem