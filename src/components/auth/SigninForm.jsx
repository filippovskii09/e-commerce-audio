"use client";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import Input from "../shared/Input";
import Button from "../shared/Button";
import { loginUser } from "@/features/auth/thunks/loginUserThunk";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SigninForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const router = useRouter();
	const { loading, error, user } = useSelector((state) => state.auth);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(loginUser({ email, password }));
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
					<Button type="submit" text="Sign in" loading={loading}/>
				</div>
			</form>
			<p className="text-sm text-white text-center mt-6">Didn’t have any account? <Link href="/signup" className="underline font-semibold text-[#0ACF83]">Sign Up here</Link></p>
		</>
	)
}

export default SigninForm