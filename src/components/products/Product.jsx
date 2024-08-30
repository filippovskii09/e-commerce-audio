import Image from "next/image";
import Link from "next/link";

const Product = ({ product }) => {

	return (
    <Link
			href={`/${product.id}`}
			className="flex flex-col gap-5 p-4 bg-white rounded-2xl w-[calc(50%-1rem)]"
		>
      <div className="flex items-center justify-center w-[125px] h-[125px] mx-auto relative">
        <Image src={product.image} alt={product.name} fill />
      </div>
      <div className="flex flex-col gap-1">
        <h5 className="text-sm">{product.name}</h5>
        <p className="text-xs font-bold">
          {product.price.toLocaleString("uk-UA", {
            style: "currency",
            currency: "UAH",
          })}
        </p>
      </div>
    </Link>
  );
};

export default Product;
