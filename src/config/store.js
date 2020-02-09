// import { createStore, applyMiddleware, compose } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

export default function configureStore() {
 return createStore(
  rootReducer,
   applyMiddleware(thunk)
 );
}

// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunk.withExtraArgument()),
//   ));

// export default store;


// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers/rootReducer';


// export default function configureStore(initialState={}) {
//  return createStore(
//    rootReducer,
//    initialState,
//    applyMiddleware(thunk)
//  );
// }