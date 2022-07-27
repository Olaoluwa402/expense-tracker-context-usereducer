import React,{useContext, useState} from 'react'
import { GlobalContext } from '../../useReducerContext'
import { v4 as uuidv4 } from "uuid";

const NewTransaction = () => {
  const {addTransaction} = useContext(GlobalContext)
  const [state, setState] = useState({
    id: '',
    text:'',
    amount:''
  })

  const changeHandler = (e)=> {
    const {name, value} = e.target;
    setState({
      ...state,
      [name]:value
    })
}

  const submitHandler = (e)=> {
      e.preventDefault()
      const data = {
        id:uuidv4(),
        text:state.text,
        amount: +state.amount
      }

      console.log(data)
      if(!state.text || !state.amount) return 

      addTransaction(data)
      

  }
  return (
    <div>
        <h2>Add transaction</h2>
        <form onSubmit={submitHandler}>
            <input 
              type="text" 
              name='text' 
              placeholder='enter text'
              value={state.text}
              onChange={changeHandler}
              />
            <input 
            type="number" 
            name='amount' 
            placeholder='enter amount'
            value={state.amount}
            onChange={changeHandler}
            />
            <button type='submit'>Add Transaction</button>
        </form>
      </div>
  )
}

export default NewTransaction