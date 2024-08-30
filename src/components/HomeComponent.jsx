"use client";
import { useSelector } from "react-redux";
import Input from "./shared/Input";
import Products from "./products/Products";
import Filters from "./filters/Filters";
import { useRef, useState } from "react";

const HomeComponent = () => {
	const user = useSelector((state) => state.auth.user);
	const [searchActive, setSearchActive] = useState(false);
	const ref = useRef(null);

	return (
		<div className="flex flex-col mt-7 h-full">
			<div className="px-5">
				<section className="mb-6">
					<p className="mb-1">Hi, {user?.email}</p>
					<h2 className="text-2xl font-bold">What are you looking for today?</h2>
				</section>
				<Input type="search" placeholder="Search headphone"/>
			</div>
			<section className="flex flex-col flex-1 bg-[#F6F6F6] w-full mt-6 ml-0 rounded-t-3xl">
				<div className="px-5 overflow-x-hidden">
					<Filters/>
					<Products/>
				</div>
			</section>
		</div>
	)
}

export default HomeComponent