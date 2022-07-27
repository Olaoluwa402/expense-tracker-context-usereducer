import React,{useState, useEffect} from "react";
import { v4 as uuidv4 } from "uuid";

// const initialState = {
//     transactions: [
//         {id:uuidv4(), text:'salary', amount:500},
//         {id:uuidv4(), text:'Shopping', amount:-200},
//         {id:uuidv4(), text:'Cooking', amount:-140}]
// }

const GlobalContext = React.createContext()

const Provider = ({children}) =>{
    const [transactions, setTransactions] = useState([])


    //  useEffect(()=> {
    //     setTransactions(initialState.transactions)
    //  }, [])

     const addTransaction = (data)=>{

        console.log('called')
           setTransactions([...transactions, data])
     }
    return (
        <GlobalContext.Provider value={{transactions:transactions, setTransactions, addTransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}

export {Provider, GlobalContext}