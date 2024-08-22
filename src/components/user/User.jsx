"use client";
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const User = () => {
	const user = useSelector((state) => state.auth.user);
	useEffect(() => {
		console.log(user);
	}, [user])

	return (
		<div>
			Hello, {user.email}
		</div>
	)
}

export default User