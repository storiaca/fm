import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators,
} from "redux";

const initialState = {
  users: [
    { id: 1, name: "Steve" },
    { id: 2, name: "Eric" },
  ],
  tasks: [
    {
      title: "File the TPS reports",
    },
    {
      title: "Order more energy drinks",
    },
  ],
};

const ADD_USER = "ADD_USER";
const ADD_TASK = "ADD_TASK";

const addTask = (title) => ({ type: ADD_TASK, payload: title });
const addUser = (name) => ({ type: ADD_USER, payload: name });

const reducer = (state = initialState, action) => {
  if (action.type === ADD_USER) {
    return {
      ...state,
      users: [...state.useres, action.payload],
    };
  }

  if (action.type === ADD_TASK) {
    return {
      ...state,
      taska: [...state.tasks, action.payload],
    };
  }
};
