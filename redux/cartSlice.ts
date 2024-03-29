import { createSlice } from "@reduxjs/toolkit";
import {RootState} from "./index"

type Props ={
    cart:any
}

const  initialState:Props = {
    cart:[]
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    //multiple actions
    addToCart:(state,action)=>{
        let isPresent= state.cart.find((item:any)=>{return item.id==action.payload.id })
        if(isPresent)
        {
          state.cart = state.cart.map((item:any)=>{
            if((item.id==action.payload.id))
            {
              return {...item,quantity:item.quantity+1}
            }
            else
            {
              return item
            }
          })
        }
        else
        {
          state.cart.push({...action.payload,quantity:1})
          
        }
    },
    incrementQuantity:(state,action)=>{
      state.cart= state.cart.map((item:any)=>{
      if(item.id === action.payload.id)
      { 
        return {...item,quantity:item.quantity+1}
      }
      else
      {
        return item
      }
    }
    )},
    removeFromCart:(state,action)=>{
      console.log(action.payload)
     state.cart = state.cart.filter((c:any)=>c.id != action.payload)
    },


    decrementQuantity:(state,action)=>{
      state.cart= state.cart.map((item:any)=>{
      if(item.id === action.payload.id && item.quantity >1)
      {

       return {...item,quantity:item.quantity-1}
      }
      else
      {
        return item
      }
      })
    }
  }
})


export const {addToCart,incrementQuantity,decrementQuantity,removeFromCart} = cartSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const getCart = (state: RootState) => state.cart.cart
export default cartSlice.reducer