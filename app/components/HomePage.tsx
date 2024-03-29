"use client"
import { useSupabase } from '@/lib/hooks/useSupabase'
import Image from 'next/image'
import React,{useEffect} from 'react'
import Link from "next/link"

const HomePage = () => {
    const {categoryData,getCategoriesData} = useSupabase()

 useEffect(()=>{getCategoriesData()},[])

 

  return (
    <div>
      {Object.keys(categoryData).map((category) =>(<div className='flex flex-col gap-2 w-[70%] mx-auto mt-4'>
        <h1 className=''>{category}</h1>
        <ul className='  flex gap-2 p-8'>
          {
           categoryData[category].map((cat:any)=>(
           <Link href={`/product/${cat.id}`}><li className='flex flex-col border-2 h-full w-full'>
            <Image  className='flex-1 max-w-full max-h-full  object-fill mix-blend-multiply' src={cat.image} alt={cat.title} width={200} height={200} />
           <p className='text-xs underline'>{cat.title}</p>
           </li></Link>)) 
          }
        </ul>
      
      </div>))}
    </div>
  )
}

export default HomePage