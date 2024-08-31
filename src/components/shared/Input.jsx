const Input = ({ type, placeholder, value, setValue, onFocus, onBlur, onChange }) => {
  const inputType = type ? type : "text";
	
  return (
    <input
      type={inputType}
      placeholder={placeholder}
			value={value}
			onFocus={onFocus}
			onBlur={onBlur}
			onChange={onChange}
      className="w-full h-11 pl-4 flex items-center text-black text-sm placeholder:text-[#BABABA] rounded-lg border border-[#BABABA] bg-white focus:border-black focus:text-black outline-[#0ACF83] transition-all ease-linear"
    />
  );
};

export default Input;
