import React from 'react'

const AddToCartContainer = ({prod}:any) => {
  return (
    <div className='border-2 p-2'>
        <p><span>$</span>{prod?.price}</p>
    </div>
  )
}

export default AddToCartContainer