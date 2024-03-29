"use client"
import React,{useState} from 'react'
import Image from 'next/image'
import amazonLogo  from '../../public/amazon-logo-2.webp'
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { useRouter } from 'next/navigation';
import { getCart } from '@/redux/cartSlice';
import { useAppSelector } from '@/lib/hooks/redux';
import Link from "next/link"


const Header = () => {
    const [query,setQuery] = useState<any>()
    const router = useRouter()
    const handleSearchBar = () =>{
        router.push(`/search/${query}`)
         
    }

    const handleCart = () =>{
        router.push('/cart')
    }
   const cart = useAppSelector(getCart)
  return (
    <div>
        <div className='top_header bg-[#131921] px-2 py-2 flex justify-between items-center'>
            <Link href='/' >
                <Image className=' ' src={amazonLogo}  width={100} height={100} alt='logo' />
            </Link>
            <div className='w-[40%] bg-white pl-2  rounded-lg flex justify-between  items-center'>
                <input className='outline-none w-[90%]  ' value={query} onChange={(e)=>{setQuery(e.target.value)}} />
                <div className='bg-yellow-400 p-2  rounded-r-lg' onClick={handleSearchBar} onKeyDown={handleSearchBar}>< CiSearch /></div>
            </div>
            <div className='flex items-center gap-4 mr-2 text-white   '>
                <div className=' border-transparent border-2 hover:border-y-yellow-200'>
                 <h1 className='text-sm font-bold'>Hello, sign in</h1>
                 <p className='text-sm'>Accounts & lists</p>
                </div>
                <div>
                    <h1 className='text-sm leading-none'>Returns</h1>< span className='text-sm'> & Orders</span>
                </div>

                <div className='flex flex-col items-start cursor-pointer' onClick={handleCart}>
                    <p className='text-white font-bold relative top-2 ml-2 text-sm'>{cart?.length}</p>
                <div className='flex items-center' >
                <IoCartOutline size={20}/>
                <p>Cart</p></div>
               </div>
               </div>
        </div>
        <div className='bottom_header bg-[#232F3E] px-2 py-1 text-white'>bottom</div>
    </div>
  )
}

export default Header