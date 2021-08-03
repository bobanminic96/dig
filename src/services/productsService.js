import API from "../config/api/api";
import AsyncStorage from '@react-native-community/async-storage';

const COMMENTS_STORAGE_KEY = '@Product_Comments_';

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

export const POST_Comment = async (data) => {
    try{
        let comments = await GET_Comments(data.productId);
        comments.push({id: Date.now().toString(),comment: data.comment});
        let commentsAsString = JSON.stringify(comments);
        await AsyncStorage.setItem(`${COMMENTS_STORAGE_KEY}${data.productId}`,commentsAsString);
        return comments;
    }catch(err){
        console.log('Error @ productsService.js: POST_Comment ->', err);
    }
}

export const GET_Comments = async (productId) => {
    try{
        const commentsAsString = await AsyncStorage.getItem(`${COMMENTS_STORAGE_KEY}${productId}`);
        let comments = [];
        if(commentsAsString !== null){
            comments = JSON.parse(commentsAsString);
        }
        return comments;
    }catch(err){
        console.log('Error @ productsService.js: GET_Comments ->', err);
    }
}