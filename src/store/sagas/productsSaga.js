import { call, put, takeEvery } from "redux-saga/effects";
import { setProductsLoading } from "../reducers/loadReducer";

const BASE = 'dig/saga/products';

export const FETCH_PRODUCTS_SAGA = BASE + '/fetch';

export function* fetchProducts() {
    console.log(`productsSaga.js: saga: ${FETCH_PRODUCTS_SAGA}`);
    try{

        yield put(setProductsLoading(true));

        return 'heyy';

    }catch(err){
        console.log(`Error @ productsSaga.js -> saga: ${FETCH_PRODUCTS_SAGA}`, err);
    }finally{

    }

}

export function* watchFetchProducts(){
    yield takeEvery(FETCH_PRODUCTS_SAGA,fetchProducts);
}