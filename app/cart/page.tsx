"use client"
import { useAppSelector } from '@/lib/hooks/redux'
import { getCart } from '@/redux/cartSlice'
import React from 'react'
import AddToCartContainer from '../components/AddToCartContainer'
import CartItem from '../components/CartItem'

const page = () => {
    const cartList = useAppSelector(getCart)
    let totalPrice =0;
    cartList.forEach((item:any)=>{
        totalPrice += item.price*item.quantity
    })
  return (
    <div className='flex'>
    <div className='w-[75%] mx-auto mt-4'>
        <h1 className='py-2 font-bold text-2xl border-b-2 border-b-black'>Shopping Cart</h1>
    {
        cartList.map((cartListItem:any) =>{return (<>
        <div><CartItem cartData={cartListItem}/></div>
        </>)})
    }
    </div>
    <div className='[w-20%] mx-auto mt-4 py-2 fixed right-3'><p className='font-meduim text-xl'>Total Price:<span className='font-bold text-xs'>{" "}$</span>{totalPrice}</p></div>
    </div>
  )
}

export default page