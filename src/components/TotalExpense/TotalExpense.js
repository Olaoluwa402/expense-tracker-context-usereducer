import React,{useContext} from 'react'
import { GlobalContext } from '../../useReducerContext'

const TotalExpense = () => {
  const store = useContext(GlobalContext)
  const {transactions} = store;

    const total = 
        transactions.map((item) => item.amount).reduce((acc, curr) => acc += curr, 0)

        const symbol = total >= 0 ? '' : '-'
  return (
    <div>
      <h3>Your Balance</h3>
       <h2>{symbol}${Math.abs(total)}</h2>
    </div>
  )
}

export default TotalExpense
