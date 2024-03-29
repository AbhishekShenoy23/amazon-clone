"use client"
import React from 'react'
import Image from 'next/image'
import AddToCartContainer from './AddToCartContainer'
import { useAppDispatch } from '@/lib/hooks/redux'
import { addToCart } from '@/redux/cartSlice'

const SindgleProduct = ({prod}:any) => {
  const dispatch = useAppDispatch()
   
  return (
    <div className='grid grid-cols-12 gap-2'>
        <div className='col-span-3'>
          <Image src={prod?.image}  className=' mix-blend-multiply' alt={prod?.title} width={200} height={200} />
        </div>
       
        <div className='col-span-6  bg-white p-4 flex flex-col justify-between'>
        <h1 className='font-bold text-xl'>{prod?.title}</h1>
        <p><span className='text-xs'>$</span><span className='text-black font-bold text-xl'>{prod?.price}</span></p>
     
        </div>
        <div className='col-span-3 border-2 p-2 flex flex-col justify-between'>
           <div><p><span className='text-xs mr-1'>$</span>{prod?.price}</p> </div>
           <div className='flex flex-col'>
              <button className='bg-yellow-300 text-black mt-1' onClick={()=>dispatch(addToCart(prod))}>Add To Cart</button>
             <button className='bg-yellow-800 text-black mt-1'>Buy Now</button>
           </div>
        </div>
    </div>
  )
}

export default SindgleProduct