import { MinusIcon } from "@/icons/MinusIcon";
import { PlusIcon } from "@/icons/PlusIcon";

const CartCounter = ({ quantity = 1 }) => {
  return (
    <div className="flex w-[115px] items-center">
      <button className="p-5 rounded-[10px] border border-[#BABABA] w-1/4">
        <MinusIcon />
      </button>
      <span className="w-2/4">{quantity}</span>
      <button className="p-5 rounded-[10px] border border-[#BABABA] w-1/4">
        <PlusIcon />
      </button>
    </div>
  );
};

export default CartCounter;
