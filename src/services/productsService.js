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

export const POST_Comment = async ({data}) => {
    console.log(`POST_Comment: data`, data);
    try{


        return;
    }catch(err){
        console.log('Error @ productsService.js: POST_Comment ->', err);
    }
}

export const GET_Comments = async ({productId}) => {
    try{

    }catch(err){
        console.log('Error @ productsService.js: GET_Comments ->', err);
    }
}