import React,{useContext} from 'react'
import { GlobalContext } from '../../useReducerContext'

const IncomeExpense = () => {
  const store = useContext(GlobalContext)
  const {transactions} = store;

  const incomeTotal = transactions.map((item) => item.amount)
    .filter((item) => item > 0)
    .reduce((acc, curr) => acc += curr, 0)

  const expenseTotal = transactions.map((item) => item.amount)
    .filter((item) => item < 0)
    .reduce((acc, curr) => acc += curr, 0) * -1

    console.log(expenseTotal)
    console.log(incomeTotal)

  return (
    <div>
      <h2>expense</h2>
       <div>
         <h4>Income</h4>
         <h5>${incomeTotal}</h5>
      </div>
       <div>
       <h4>Expense</h4>
         <h5>${expenseTotal}</h5>
       </div>
    </div>
  )
}

export default IncomeExpense