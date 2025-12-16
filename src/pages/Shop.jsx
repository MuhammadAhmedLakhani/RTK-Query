import { Link } from "react-router-dom"
import { useGetAllProductsQuery } from "../rtk Query/index.js"
import { useEffect, useState } from "react"



function Shop() {

    const [skip,setSkip]  = useState(true);

   const {data ,error, isLoading , status}  =               useGetAllProductsQuery("productsData",{
    skip:skip
    
   })

                           // this is the name passed for catching data again with name, no link to reducerPath

     console.log("data-->",data) 
     console.log("isLoading-->",isLoading) 
     console.log("error-->",error) 
     console.log("status-->",status) 

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products/")
  //     .then((res) => res.json())
  //     .then((res) => console.log("res", res))

  // }, [])


  return (
    <>
      <h1>Shop</h1> 
      <button onClick={()=>setSkip(false)}>Fetch</button>
        <Link to  = {"/"}>Home</Link>

{ 
      <ul>
        {

          data && data.map((v, i) => {
            return <li key={v.id}>{v.title}</li>
          })
        }
      </ul> }
    </>
  )
}

export default Shop;