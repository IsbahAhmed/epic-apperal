import { PRODUCTS_FETCHED, REQUEST_FETCH_PRODUCTS, REQUEST_FETCH_SINGLE_PRODUCT, SINGLE_PRODUCT_FETCHED } from "./productContants";

const fetchProducts = (queryParams)=>({
    type: REQUEST_FETCH_PRODUCTS,
    payload:{
        queryParams
    }
})


const productsFetched = (payload)=>{
    
    return {
        type:PRODUCTS_FETCHED,
        payload
    }
}
const fetchSingleProduct = (id,queryParams)=>({
    type:REQUEST_FETCH_SINGLE_PRODUCT,
    payload:{id,queryParams}
})
const singleProductFetched = ({data})=>{

    return {
        type:SINGLE_PRODUCT_FETCHED,
        payload:{
            data:data
        }
    }
}
export {fetchProducts,productsFetched,fetchSingleProduct,singleProductFetched}