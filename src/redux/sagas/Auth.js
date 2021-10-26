import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import {
	AUTH_TOKEN,
	SIGNIN,
	SIGNOUT,
} from '../constants/Auth';
import {
	showAuthMessage,
    signOutSuccess,
	authenticated
} from "../actions/Auth";

import JwtAuthService from 'services/JwtAuthService'

export function* signInWithFBEmail() {
  yield takeEvery(SIGNIN, function* ({payload}) { 
        try { 
            
            const user = yield call(JwtAuthService.login, payload); 
            if (user.data && user.data.token) { 
                localStorage.setItem(AUTH_TOKEN, user.data.token); 
                yield put(authenticated(user.data)); 
            } else { 
                yield put(showAuthMessage(user.data ? user.data : 'Wrong email or password')); 
            } 
        } catch (err) { 
            yield put(showAuthMessage(err)); 
        } 
    }); 
}

export function* signOut() {
  yield takeEvery(SIGNOUT, function* () {
		try {
			localStorage.removeItem(AUTH_TOKEN);
            yield put(signOutSuccess("Admin"));
		} catch (err) {
			yield put(showAuthMessage(err));
		}
	});
}


export default function* rootSaga() {
  yield all([
		fork(signInWithFBEmail),
		fork(signOut)
  ]);
}
