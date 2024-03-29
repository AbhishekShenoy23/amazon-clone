import { supabase } from "../supabase/products"
import {useState} from 'react'

export const useSupabase = () => {
    const [products,setProducts] = useState<any>([])
    const [filteredProducts,setFilteredProducts] = useState<any>([])
    const [product,setProduct] = useState<any>()
    const [categoryData, setCategoryData] = useState<any>({});


     const getProductsFromSupabase = async() =>{
        let {data,error} =  await supabase.from('products').select('*')
        if(data)
        {   
            setProducts(data)
    
            console.log(data)
           
        }
        if(error)
        {
            console.log(error)
        }
     }

     const getFilteredProducts = async(query:any) =>{
        let {data,error} =  await supabase.from('products').select('*')
                                            .or(`title.ilike.%${query}% ,description.ilike.%${query}%,category.ilike.%${query}%`)


        if(data)
        {   console.log("Filter",data)
            setFilteredProducts(data)
        }
        if(error)
        {
            console.log(error)
        }
    }


    const getSingleProduct  = async (id:any) =>{

        let {data,error} =  await supabase.from('products').select('*').eq('id',id)
        if(data)
        {
            console.log(data[0])
            setProduct(data[0])
        }
        if(error)
        {
            console.log(error)
        }
    }

    const getCategoriesData = async() =>
    {
       const categories = ['jewelry','electronics','clothing']

       categories.forEach( async (category) =>{
        let {data,error} = await  supabase.from('products').select('*').ilike('category',`%${category}%`)
         setCategoryData((prevData:any)=>({...prevData,[category]:data})); 
       })
    }



     return {products,
        getProductsFromSupabase,
        filteredProducts,
        getFilteredProducts,
        product,
        getSingleProduct,
        categoryData,
        getCategoriesData
    }
    
}

