import React,{useState, useEffect, useReducer} from "react";
import { v4 as uuidv4 } from "uuid";
import ExpenseReducer from "./ExpenseReducer";

const initialState = {
    transactions: [
        {id:uuidv4(), text:'salary', amount:500},
        {id:uuidv4(), text:'Shopping', amount:-200},
        {id:uuidv4(), text:'Cooking', amount:-140}]
}

const GlobalContext = React.createContext()

const Provider = ({children}) =>{
    const [state, dispatch] = useReducer(ExpenseReducer, initialState)

    console.log(state)
    // const [transactions, setTransactions] = useState([])


     //Actions

     const deleteTransaction = (id) => {
        console.log(id)
         dispatch({
            type:'DELETE',
            payload:id
         })
     }
     const addTransaction = (data)=>{
        dispatch({
            type:'ADDTRANSACTION',
            payload:data
         })
     }
    return (
        <GlobalContext.Provider value={{...state, deleteTransaction,  addTransaction }}>
            {children}
        </GlobalContext.Provider>
    )
}

export {Provider, GlobalContext}