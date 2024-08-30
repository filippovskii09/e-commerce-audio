const Filter = ({ active, value, onClick }) => {
	return (
		<button className={`${active ? "text-white bg-[#0ACF83]" : "bg-transparent text-[#7F7F7F]"} px-4 py-0.5 rounded-[30px] text-sm`} onClick={onClick}>
			{value}
		</button>
	)
}

export default Filter