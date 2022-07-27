import React,{useContext} from 'react'
import { GlobalContext } from '../../useReducerContext'

const Transaction = ({transaction}) => {

  const store = useContext(GlobalContext)
  const {deleteTransaction} = store;
  console.log(transaction)
  return ( 
    <li>
      <div>
        <h2>trans</h2>
          <h6>{transaction.text}</h6>
          <h6>{transaction.amount}</h6>
          <span style={{cursor:'pointer'}} onClick={()=> deleteTransaction(transaction.id) }>X</span>
      </div>
    </li>
  )
}

export default Transaction