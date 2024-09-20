import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../features/formSlice";

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("formState", serializedState);
  } catch (e) {
    console.error("Could not save state", e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("formState");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (e) {
    console.error("Could not load state", e);
    return undefined;
  }
};

const preloadedState = loadFromLocalStorage() 

const store = configureStore({
  reducer: {
    form: formReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;
