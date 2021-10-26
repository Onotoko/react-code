import { all } from 'redux-saga/effects';
import Auth from './Auth';
import API from './Api';


export default function* rootSaga(getState) {
  yield all([
    Auth(),
    API()
  ]);
}
