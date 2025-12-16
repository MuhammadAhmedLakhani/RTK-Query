



import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: () => `products`,
    }),


    //post querry
    addProducts: build.mutation({

      query: (data) => ({
        url: `products`,
        method: 'POST',
        body: data,
      }),
    })




  }),




})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsQuery , useAddProductsMutation } = productsApi