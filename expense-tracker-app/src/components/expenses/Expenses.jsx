import React, { useState } from "react";
import Card from "../card/Card";
import "./Expenses.css";
import ExpensesFilter from "../expenses-filter/ExpensesFilter";
import ExpensesList from "../expenses-list/ExpensesList";
import ExpensesChart from "../expenses-chart/ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    // <li>
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
    // </li>
  );
};

export default Expenses;
