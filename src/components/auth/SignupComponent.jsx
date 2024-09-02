"use client";
import { useEffect, useState } from "react"
import Input from "../shared/Input";
import Button from "../shared/Button";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "@/features/auth/thunks/registerUserThunk";
import Link from "next/link";
// import { GoogleIcon } from "@/icons/GoogleIcon";
import { useRouter } from "next/navigation";

const SignupComponent = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const router = useRouter();
	const { loading, error, user } = useSelector((state) => state.auth);
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(registerUser({ email, password }));
	}

	useEffect(() => {
		if(user) router.push("/");
	}, [user])

	return (
		<>
			<form onSubmit={handleSubmit} className="auth-form">
				<div className="flex flex-col gap-5 max-w-80 mx-auto">
					<Input type="email" placeholder="Email" value={email} setValue={setEmail}/>
					<Input type="password" placeholder="Password" value={password} setValue={setPassword}/>
					{error && <p className="text-red-600 font-bold text-center text-sm">{error}</p>}
					<Button type="submit" text="Sign Up" loading={loading}/>
				</div>
			</form>
			{/* <button className="flex items-center justify-center bg-white rounded-lg h-14 w-14 mt-10 mx-auto short:mt-2"><GoogleIcon/></button> */}
			<p className="text-sm text-white text-center mt-6">If you have an account? <Link href="/signin" className="underline font-semibold text-[#0ACF83]">Sign In here</Link></p>
		</>
	)
}

export default SignupComponent