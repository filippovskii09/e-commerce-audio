"use client";
import { decrementQuantity, incrementQuantity } from "@/features/cart/cartSlice";
import { MinusIcon } from "@/icons/MinusIcon";
import { PlusIcon } from "@/icons/PlusIcon";
import { useDispatch } from "react-redux";

const CartCounter = ({ quantity, id }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity(id));
  };
	
  return (
    <div className="flex w-[115px] items-center gap-5">
      <button onClick={handleDecrement} className="w-5 h-5 rounded-md border border-[#BABABA] flex items-center justify-center">
        <MinusIcon />
      </button>
      <span className="w2/3 mx-0 text-center">{quantity}</span>
      <button onClick={handleIncrement} className="w-5 h-5 rounded-md border border-[#BABABA] flex items-center justify-center">
        <PlusIcon />
      </button>
    </div>
  );
};

export default CartCounter;
