"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const useAuth = () => {
	const user = useSelector((state) => state.auth.user)
  const router = useRouter();

	useEffect(() => {
		router.push("/")
		if (user === null) {
      router.replace('/signin');
    }
	}, [router])
}

export default useAuth