import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators,
} from "redux";

const reducer = (state = { count: 1 }) => state;

const monitorEnhancer = (createStore) => (reducer, initialState, enhancer) => {
  const monitoredReducer = (state, action) => {
    const start = performance.now();
    console.log(start);
    const newState = reducer(state, action);
    const end = performance.now();
    console.log(end);
    const diff = end - start;
    console.log(diff);
    return newState;
  };

  return createStore(monitoredReducer, initialState, enhancer);
};

const logEnhancer = (createStore) => (reducer, inititalState, enhancer) => {
  const logReducer = (state, action) => {
    console.log("old state", state, action);
    const newState = reducer(state, action);
    console.log("new state", newState, action);
    return newState;
  };
  return createStore(logReducer, inititalState, enhancer);
};

const store = createStore(reducer, compose(logEnhancer, monitorEnhancer));

store.dispatch({ type: "Hello" });
