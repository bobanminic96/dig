import { call, put, takeEvery } from "redux-saga/effects";
import { GET_Products } from "../../services/productsService";
import { setCommentsLoading, setProductsLoading } from "../reducers/loadReducer";
import { addProductsToReducer } from "../reducers/productsReducer";

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

export function* addProductComment({productId,comment}){
    console.log(`productsSaga.js: saga: ${ADD_PRODUCT_COMMENT_SAGA}`);
    try{
        yield put(setCommentsLoading(true));

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