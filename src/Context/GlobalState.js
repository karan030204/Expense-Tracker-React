import React,{createContext, useReducer}  from "react";
import AppReducer from './AppReducer.js';

//Initial state
const initialState ={
    transactions :  []
}

//Create Context
export const GlobalContext = createContext(initialState);

//Provider
export const GlobalProvider =({children})=>{
    const [state,dispatach] = useReducer(AppReducer, initialState);

    //Actions
    function deleteTransaction (id) {
        dispatach({
            type : 'DELETE_TRANSACTION',
            payload :id
        });
    }

      //Actions
      function addTransaction (transaction) {
        dispatach({
            type : 'ADD_TRANSACTION',
            payload :transaction
        });
    }
    return (<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)

}
