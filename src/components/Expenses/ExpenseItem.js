import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem({title,amount,date}){
    const [titl,setTitle] = useState(title);
    const changeTitle = () => {
        setTitle('updated')
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={date}/>
            <div className='expense-item__description'>
                <h2>{titl}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
            <button onClick={changeTitle}>Change the title</button>
        </Card>
    );
};

export default ExpenseItem;