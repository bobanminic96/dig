import { call, put, takeEvery } from "redux-saga/effects";
import { GET_Comments, GET_Products, POST_Comment } from "../../services/productsService";
import { setCommentsLoading, setProductsLoading } from "../reducers/loadReducer";
import { addCommentsToReducer, addProductsToReducer } from "../reducers/productsReducer";
import * as NavigationService from '../../navigation/config/navigationService';
import { PRODUCT_SCREEN } from "../../navigation/navConstants";

const BASE = 'dig/saga/products';

export const FETCH_PRODUCTS_SAGA = BASE + '/fetch';
export const ADD_PRODUCT_COMMENT_SAGA = BASE + '/comment';
export const FETCH_PRODUCT_COMMENTS_SAGA = BASE + '/comments';

export function* fetchProducts() {
    console.log(`productsSaga.js: saga: ${FETCH_PRODUCTS_SAGA}`);
    try{
        yield put(setProductsLoading(true));
        let data = yield call(GET_Products);
        yield put(addProductsToReducer(data));
        return;
    }catch(err){
        console.log(`Error @ productsSaga.js -> saga: ${FETCH_PRODUCTS_SAGA}`, err);
    }finally{
        yield put(setProductsLoading(false));
    }
}

export function* addProductComment({data}){
    console.log(`productsSaga.js: saga: ${ADD_PRODUCT_COMMENT_SAGA} for product:`, data.productId);
    try{
        yield put(setCommentsLoading(true));
        let comments = yield call(POST_Comment,data);
        yield put(addCommentsToReducer(comments));
        NavigationService.navigate(PRODUCT_SCREEN);
        return;
    }catch(err){
        console.log(`Error @ productsSaga.js -> saga: ${ADD_PRODUCT_COMMENT_SAGA}`, err);
    }finally{
        yield put(setCommentsLoading(false));
    }
}

export function* fetchProductComments({productId}){
    console.log(`productsSaga.js: saga: ${FETCH_PRODUCT_COMMENTS_SAGA} for product:`, productId);
    try{
        yield put(setCommentsLoading(true));
        let comments = yield call(GET_Comments,productId);
        yield put(addCommentsToReducer(comments));
        return;
    }catch(err){
        console.log(`Error @ productsSaga.js -> saga: ${FETCH_PRODUCT_COMMENTS_SAGA}`, err);
    }finally{
        yield put(setCommentsLoading(false));
    }
}

export function* watchFetchProducts(){
    yield takeEvery(FETCH_PRODUCTS_SAGA,fetchProducts);
}

export function* watchAddProductComment(){
    yield takeEvery(ADD_PRODUCT_COMMENT_SAGA,addProductComment);
}

export function* watchFetchProductComments(){
    yield takeEvery(FETCH_PRODUCT_COMMENTS_SAGA,fetchProductComments);
}