import { LogoIcon } from "@/icons/LogoIcon"
import { MenuIcon } from "@/icons/MenuIcon"

const Header = () => {
	return (
		<header>
			<div className="px-5 flex items-center justify-between py-3">
				<button><MenuIcon/></button>
				<LogoIcon/>
			</div>
		</header>
	)
}

export default Header