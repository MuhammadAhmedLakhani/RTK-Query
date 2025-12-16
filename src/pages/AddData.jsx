import { useAddProductsMutation } from "../rtk Query"




function PostData() {

    const [ addPost, {isLoading,isError} ] = useAddProductsMutation("productsData")

    let add = () => {
        const data =
        {
            "id": 0,
            "title": "string",
            "price": 0.1,
            "description": "string",
            "category": "string",
            "image": "http://example.com"
        }

        //calling trigger function return by hook

        addPost(data)


    }



    return (
        
        <div>
            { isLoading && <h2>Loading...</h2>}  
            <h1>Post Data</h1>
            <button onClick={add}>add</button>
        </div>

    )
}


export default PostData