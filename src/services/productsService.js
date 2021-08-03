import API from "../config/api/api";

const ENDPOINTS = {
    PRODUCTS: '/products'
}

export const GET_Products = async () => {
    try{
        let response = await API.get(ENDPOINTS.PRODUCTS);
        let data = response.data;

        return data;
    }catch(err){
        console.log('Error @ productsService.js: GET_Products ->', err);
    }
}