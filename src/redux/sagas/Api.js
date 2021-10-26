import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import {
	USER,
    USER_LASTEST,
    USER_SEARCH,
    STATS,
    WITHDRAW,
    NEWS,
    WITHDRAW_SEARCH,
    ADD_NEWS
} from '../constants/Auth';
import {
	stats,
    getAllUser,
    getLastestUser,
    getNews,
    getWithdraw,
    addNews,
    searchUser,
    setWithdraw,
    showError
} from "../actions/API";

import APIService from 'services/APIService'

export function* getStats() {
    yield takeEvery(STATS, function* () { 
        try { 
            const data = yield call(APIService.stats); 
            if (!data.hasError) { 
                yield put(stats(data)); 
            } else { 
                yield put(showError(data.message)); 
            }
        } catch (err) { 
            yield put(showError(err)); 
        } 
    })

}

export function* getLastestUsers() {
    yield takeEvery(USER_LASTEST, function* () { 
        try { 
            const data = yield call(APIService.stats); 
            if (!data.hasError) { 
                const users = data.data | []
                yield put(getLastestUser(users)); 
            } else { 
                yield put(showError(data.message)); 
            }
        } catch (err) { 
            yield put(showError(err)); 
        } 
    })

}

export default function* rootSaga() {
  yield all([
		fork(getStats),
        fork(getLastestUsers)
  ]);
}
