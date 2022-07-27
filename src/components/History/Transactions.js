import React,{useContext} from 'react'
import { GlobalContext } from '../../useReducerContext'
import Transaction from './Transaction'


const History = () => {
  const store = useContext(GlobalContext)

  console.log(store)
  const {transactions} = store;

  return (
    <div>
      <h3>History</h3>
      <ul>
      {transactions && transactions.length > 0 
        ? transactions.map((transaction)=> (<Transaction key={transaction.id} transaction= {transaction} />)) 
        : (<li><h3>No Transactions yet</h3></li>)}
      </ul>
      
      </div>
  )
}

export default History