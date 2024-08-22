"use client";
import { useState } from "react"
import Input from "../shared/Input";
import Button from "../shared/Button";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "@/features/auth/thunks/registerUserThunk";
import useRedirect from "@/hooks/useRedirect";

const SignupComponent = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const { loading, error } = useSelector((state) => state.auth);
	const redirect = useRedirect("/");

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(registerUser({ email, password }));
		if(!error) redirect();
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="flex flex-col mt-40 gap-5 max-w-80 mx-auto">
				<Input type="email" placeholder="Email" value={email} setValue={setEmail}/>
				<Input type="password" placeholder="Password" value={password} setValue={setPassword}/>
				{error && <p className="text-red-600 font-bold text-center">{error}</p>}
				<Button type="submit" text="Sign Up" loading={loading}/>
			</div>
		</form>
	)
}

export default SignupComponent