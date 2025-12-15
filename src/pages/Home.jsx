import  {useGetAllProductsQuery} from "../rtk Query/index.js"



function Home (){
         const {data ,error, isLoading}  =               useGetAllProductsQuery("productsData")

                                 // this is the name passed for catching data again with name, no link to reducerPath

           console.log("data-->",data) 
           console.log("isLoading-->",isLoading) 
           console.log("error-->",error) 

    return (
        
      <ul>
        {

          data && data.map((v, i) => {
            return <li key = {v.id}>{v.title}</li>
          })
        }
        </ul>
    )
}

export default Home;