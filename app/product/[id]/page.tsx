"use client"
import React,{useEffect} from 'react'
import { useParams } from 'next/navigation'
import { useSupabase } from '@/lib/hooks/useSupabase'
import SindgleProduct from '@/app/components/SindgleProduct'

const page = () => {
    const {id} = useParams()
    const {product,getSingleProduct} = useSupabase()
    useEffect(()=>{getSingleProduct(id)},[])
    
     return (
    <div className='w-[85%] mx-auto mt-4'>
      <SindgleProduct prod={product}/>
    </div>
  )
}

export default page