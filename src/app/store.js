import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../features/formSlice";

const saveToLocalStorage = (state) => {
  try {
    const covertStateToString = JSON.stringify(state);
    localStorage.setItem("formState", covertStateToString);
  } catch (e) {
    console.error("Could not save state", e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const getState = localStorage.getItem("formState");
    return getState ? JSON.parse(getState) : undefined;
  } catch (e) {
    console.error("Could not load state", e);
    return undefined;
  }
};

const getState = loadFromLocalStorage() 

const store = configureStore({
  reducer: {
    form: formReducer,
  },
  getState,
});

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;
