import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props ={
    productDetails:any
}

const ProductInfo = ({productDetails}:Props) => {

    const router = useRouter()

    const handleProductInfo = () =>
    {
        router.push(`/product/${productDetails.id}`)
    }

  return (
    <div className='grid grid-cols-8 '>
      <div className='col-span-2 bg-gray-200 p-2' onClick={handleProductInfo}>
        <Image src={productDetails.image} className='mix-blend-multiply' width={200} height={100} alt={productDetails.title}/>
      </div>
      <div className='col-span-6 bg-white p-4 flex flex-col justify-between'>
        <h1 className='font-bold text-xl'>{productDetails.title}</h1>
        <p><span className='text-xs'>$</span><span className='text-black font-bold text-xl'>{productDetails.price}</span></p>
      </div>
    </div>
  )
}

export default ProductInfo