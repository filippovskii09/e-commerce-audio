import Link from "next/link";
import Logout from "../auth/Logout";

const HeaderMenuLinks = ({ setIsOpenMenu }) => {
  return (
    <ul className="flex flex-col">
			<li>
        <Link
          href="/orders"
          className="w-full h-full text-left py-4 px-6 border-t block">
          Orders
        </Link>
      </li>
      <li>
        <Link
          href="/cart"
          className="w-full h-full text-left py-4 px-6 border-t block">
          Cart
        </Link>
      </li>
      <li>
        <Logout setIsOpenMenu={setIsOpenMenu} />
      </li>
    </ul>
  );
};

export default HeaderMenuLinks;
