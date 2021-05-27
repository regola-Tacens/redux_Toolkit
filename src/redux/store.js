import { configureStore } from "@reduxjs/toolkit"
import counterReducer from './counter'

// We have a file named redux/counter.js/ that exports a reducer function for the counter logic.
//  We can import that counterReducer function here, and include it when we create the store

// When we pass in an object like {counter: counterReducer}, that says that we want to have a state.counter section
//  of our Redux state object, and that we want the counterReducer function to be in charge of deciding if and how 
//  to update the state.counter section whenever an action is dispatched.

export default configureStore({
    reducer : {
       counter : counterReducer
    }
})