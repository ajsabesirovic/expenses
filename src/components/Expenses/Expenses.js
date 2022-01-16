import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  // const show = () =>
  // {
  //   expenses.filter((val) => {
  //     if(val===res){
  //     return <Expenses></Expenses>
  //       }    })
  // }

  let exContent = <p>No expenses found</p>;
  if (filteredExpenses.length > 0) {
    exContent = filteredExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {exContent}
      </Card>
    </div>
  );
};

export default Expenses;
