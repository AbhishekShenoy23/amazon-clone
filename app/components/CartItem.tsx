"use client"
import React from 'react'
import Image from 'next/image'
import { useAppDispatch } from '@/lib/hooks/redux'
import { decrementQuantity, incrementQuantity,removeFromCart } from '@/redux/cartSlice'
type Props =
{
    cartData:any
}

const cartItem = ({cartData}:Props) => {
   const dispatch= useAppDispatch()
 



  return (

    <div className='grid grid-cols-12 gap-2 '>
 <div className='col-span-2'>
    <Image src={cartData?.image}  className=' mix-blend-multiply' alt={cartData?.title} width={200} height={200} />
 </div>
 <div className='col-span-6 flex flex-col justify-between'>
    <h1>{cartData?.title}</h1>
    <div>
    <p >Quantity: <span className='border-2 p-1 cursor-pointer' onClick={()=>dispatch(incrementQuantity(cartData))}>+</span> 
    <span className='border-2 p-1'>{cartData?.quantity}</span> 
    <span className='border-2  p-1 cursor-pointer' onClick={()=>dispatch(decrementQuantity(cartData))} >-</span> </p>
    </div>
   <div className=' border-b-black border-b-2'><button className='bg-transparent p-1 text-red-400 cursor-pointer ' onClick={()=>dispatch(removeFromCart(cartData?.id))}>Remove</button></div>
  
 </div>
 <div className='col-span-4'> <p>{cartData?.price}</p></div>
 
 </div>


  )
}

export default cartItem