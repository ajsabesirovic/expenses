import React,{useState} from "react";
import './ExpenseForm.css'

function ExpenseForm(){
    // const [userInput,setUserInput] = useState({
    //     enteredTitle : '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })
    // const titleChanger = (event) => {
    //     setUserInput((previousState) => {
    //         return {...previousState, enteredAmount : event.target.value}
    
    //     })
    // }
    
    const [enteredTitle,setEnteredTitle] = useState('')
    const [enteredAmount,setEnteredAmount] = useState('')
    const [enteredDate,setEnteredDate] = useState('')


    const titleChanger = (e) =>{
        setEnteredTitle(e.target.value)
    }
    const amountChanger = (e) =>{
        setEnteredAmount(e.target.value)
    }
    const dateChanger = (e) =>{
        setEnteredDate(e.target.value)
    }

    return (
        <form>
            <div className="new-expense__controls">

            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' onChange={titleChanger}></input>
            </div>

            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' onChange={amountChanger}></input>
            </div>

            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChanger}></input>
            </div>

            </div>
            <div className="new-expense__actions">
            <button type="submit">Add expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;