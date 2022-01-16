import React from "react";
import './NewExpenses.css'
import ExpenseForm from "./ExpenseForm";

function NewExpense({addNewExpense}){
    const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
    }
    addNewExpense(expenseData)
    
}
    return(
        <div className="new-expense">
            <ExpenseForm saveExpenseData={saveExpenseData}/>
        </div>
    )
}
export default NewExpense;