import { call, put, takeEvery } from "redux-saga/effects";
import { GET_Products } from "../../services/productsService";
import { setProductsLoading } from "../reducers/loadReducer";

const BASE = 'dig/saga/products';

export const FETCH_PRODUCTS_SAGA = BASE + '/fetch';

export function* fetchProducts() {
    console.log(`productsSaga.js: saga: ${FETCH_PRODUCTS_SAGA}`);
    try{
        yield put(setProductsLoading(true));

        let data = yield call(GET_Products);
        console.log(`data`, data);

        return;
    }catch(err){
        console.log(`Error @ productsSaga.js -> saga: ${FETCH_PRODUCTS_SAGA}`, err);
    }finally{
        yield put(setProductsLoading(false));
    }

}

export function* watchFetchProducts(){
    yield takeEvery(FETCH_PRODUCTS_SAGA,fetchProducts);
}