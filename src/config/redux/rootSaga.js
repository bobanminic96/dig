import { all } from 'redux-saga/effects';
import { watchAddProductComment, watchFetchProductComments, watchFetchProducts } from '../../store/sagas/productsSaga';
export default function* rootSaga() {
    yield all([
        watchFetchProducts(),
        watchAddProductComment(),
        watchFetchProductComments()
    ])
}