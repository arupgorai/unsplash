import { all } from 'redux-saga/effects';

import imagesSaga from './imagesSaga';
import statsSaga from './statsSaga';
import statsReducer from '../reducers/statsReducer';

function* rootSaga() {
    yield all([
        imagesSaga(),
        statsSaga()
    ]);
}

export default rootSaga;