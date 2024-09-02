"use client";
import { logoutUser } from '@/features/auth/thunks/logoutUserThunk';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

const Logout = ({ setIsOpenMenu }) => {
	const router = useRouter();
	const dispatch = useDispatch();

	const handleLogout = () => {
		router.push("/signin");
		dispatch(logoutUser());
		setIsOpenMenu(false);
	}

	return (
		<button className="w-full h-full text-left py-4 px-6 border-t" onClick={handleLogout}>Logout</button>
	)
}

export default Logout