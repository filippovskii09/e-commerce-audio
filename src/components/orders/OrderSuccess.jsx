import { SuccessIcon } from '@/icons/SuccessIcon'
import Link from 'next/link'
import React from 'react'

const OrderSuccess = () => {
	return (
		<div className='p-6 w-full h-full text-center flex flex-col justify-center items-center gap-4'>
			<div className='mx-auto text-center w-24 h-24'><SuccessIcon/></div>
			<h3 className='text-2xl font-bold text-[#0ACF83]'>Order Success</h3>
			<Link href="/">Back home</Link>
		</div>
	)
}

export default OrderSuccess