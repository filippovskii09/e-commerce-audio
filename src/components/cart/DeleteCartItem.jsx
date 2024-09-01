"use client";
import { removeProductFromCart } from "@/features/cart/cartSlice";
import { TrashIcon } from "@/icons/TrashIcon";
import { useDispatch } from "react-redux";

const DeleteCartItem = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(removeProductFromCart(id))} className="p-1">
      <TrashIcon />
    </button>
  );
};

export default DeleteCartItem;
