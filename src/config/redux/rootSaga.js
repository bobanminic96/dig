import { all } from 'redux-saga/effects';
import { watchFetchProducts } from '../../store/sagas/productsSaga';
export default function* rootSaga() {
    yield all([
        watchFetchProducts()
    ])
}