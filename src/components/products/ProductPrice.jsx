const ProductPrice = ({ price }) => {
	return (
		<p className="text-xs font-bold">
		{price.toLocaleString("uk-UA", {
			style: "currency",
			currency: "UAH",
		})}
	</p>	)
}

export default ProductPrice