const ExpenseReducer = (state, action)=> {
    console.log(action.payload, action.type)
     switch(action.type){
        case 'ADDTRANSACTION':
            return {...state, transactions: [...state.transactions, action.payload]}
        case 'DELETE':
            return {...state, transactions: state.transactions.filter((item) => item.id !== action.payload)}
        default: 
        return state
     }
}

export default  ExpenseReducer 