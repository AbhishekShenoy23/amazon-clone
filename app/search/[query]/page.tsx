"use client"
import SearchList from '@/app/components/SearchList'
import { useSupabase } from '@/lib/hooks/useSupabase'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

const page = () => {
    const {query} =useParams()
    const {filteredProducts,getFilteredProducts,getProductsFromSupabase,products} = useSupabase()
    useEffect(()=>{getFilteredProducts(query)},[])
   // useEffect(()=>{getProductsFromSupabase()},[])    
    console.log(filteredProducts)
  return (
    <div className='w-[60%] mx-auto mt-4'>
      <h1 className='border-b-2 border-black p-2'> Results  for search <span className='font-bold'>{query} : {filteredProducts.length}</span></h1>
    <SearchList filteredProducts={filteredProducts}/>
    </div>
  )
}

export default page