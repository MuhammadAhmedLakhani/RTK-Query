import { Link } from "react-router-dom"
import { useGetAllProductsQuery } from "../rtk Query/index.js"
import { useEffect } from "react"



function Shop() {
   const {data ,error, isLoading}  =               useGetAllProductsQuery("productsData",{
    pollingInterval:2000
   })

                           // this is the name passed for catching data again with name, no link to reducerPath

     console.log("data-->",data) 
     console.log("isLoading-->",isLoading) 
     console.log("error-->",error) 

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products/")
  //     .then((res) => res.json())
  //     .then((res) => console.log("res", res))

  // }, [])


  return (
    <>
      <h1>Shop</h1> 
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