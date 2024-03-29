import React from 'react'
import ProductInfo from './Product'

type Props =
{
    filteredProducts:[]
}

const SearchList = ({filteredProducts}:Props) => {
  return (
    <div className='mt-2 grid grid-cols-1 gap-8'>
     {
        filteredProducts.map((product:any)=>{return(
        <div className=''>
           <ProductInfo productDetails={product}/> 
        </div>)})
     }

    </div>
  )
}

export default SearchList