import React from 'react'
import Header from '../components/Header/Header'
import TotalExpense from '../components/TotalExpense/TotalExpense'
import IncomeExpense from '../components/IncomeExpense/IncomeExpense'
import NewTransaction from '../components/NewTransaction/NewTransaction'
import History from '../components/History/Transactions'
const ExpenseScreen = ()=> {
  return (
    <div className='container'>
        <Header>Expense Tracker</Header>
        <main>
            <TotalExpense />
            <IncomeExpense />
            <History />
            <NewTransaction/>
        </main>
    </div>
  )
}

export default ExpenseScreen