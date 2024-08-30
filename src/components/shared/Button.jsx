const Button = ({ text, type, loading }) => {
	const buttonType = type ? type : "button";

	return (
		<button className='font-bold rounded-lg bg-[#0ACF83] h-11 w-full text-white' type={buttonType} disabled={loading}>{loading ? "Loading..." : text}</button>
	)
}

export default Button