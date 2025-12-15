import { Link } from "react-router-dom"
import  {useGetAllProductsQuery} from "../rtk Query/index.js"



function Shop (){
         const {data ,error, isLoading}  =               useGetAllProductsQuery("productsData")

                                 // this is the name passed for catching data again with name, no link to reducerPath

           console.log("data-->",data) 
           console.log("isLoading-->",isLoading) 
           console.log("error-->",error) 

    return (
        <>
        <h1>Shop</h1> 
        <Link to  = {"/"}>Home</Link>
        <ul>
        {

          data && data.map((v, i) => {
            return <li key = {v.id}>{v.title}</li>
          })
        }
        </ul>
        </>
    )
}

export default Shop;