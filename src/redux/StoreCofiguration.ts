import createSagaMiddleware  from 'redux-saga'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './RootReducer';
import rootSaga from './RootSaga';

const sagaMiddleWare =createSagaMiddleware();
const store= createStore(rootReducer,applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);

store.subscribe(() => console.log('Update State' , store.getState()));
export default store;