import { createSlice } from '@reduxjs/toolkit';

// A "slice" is a collection of Redux reducer logic and actions


export const counterSlice = createSlice({

    name : 'counter', 
    initialState :{
        count : 0
    },
    reducers :{
        increment : (state) => {
            state.count +=1
        },
        decrement : (state) => {
            state.count -=1
        },
        incrementByAmount: (state, action)=> {
            state.count += action.payload
        }
    } 
})

//avec export ...counterSlice.actions, on crée les action creators qui seront apellés par dispatch ( exemple : dispatch(increment()))
export const { increment, decrement, incrementByAmount } = counterSlice.actions

//ici on exporte le reducer qui sera utilisé dans la création du store ndas le fichier store.js
export default counterSlice.reducer


//ici on exporte la valeur de count pour etre utilisé dans le useSelector
export const selectCount = state => state.counter.count






// We said earlier that reducers must always follow some special rules:

// They should only calculate the new state value based on the state and action arguments
// They are not allowed to modify the existing state. Instead, they must make immutable updates, by copying the existing state and making changes to the copied values.
// They must not do any asynchronous logic or other "side effects"