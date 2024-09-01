import { MinusIcon } from "@/icons/MinusIcon";
import { PlusIcon } from "@/icons/PlusIcon";

const CartCounter = ({ quantity = 1 }) => {
  return (
    <div className="flex w-[115px] items-center gap-5">
      <button className="w-5 h-5 rounded-md border border-[#BABABA] flex items-center justify-center">
        <MinusIcon />
      </button>
      <span className="w2/3 mx-0 text-center">{quantity}</span>
      <button className="w-5 h-5 rounded-md border border-[#BABABA] flex items-center justify-center">
        <PlusIcon />
      </button>
    </div>
  );
};

export default CartCounter;
