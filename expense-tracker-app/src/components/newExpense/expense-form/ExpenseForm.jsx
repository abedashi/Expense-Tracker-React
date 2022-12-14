import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [state, setState] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  //   const [enteredTitle, setEnteredTitle] = useState("");
  //   const [enteredAmount, setEnteredAmount] = useState("");
  //   const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
    // setState({
    //   ...state,
    //   enteredTitle: event.target.value,
    // });
    setState((state) => {
      return { ...state, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value);
    // setState({
    //   ...state,
    //   enteredAmount: event.target.value,
    // });
    setState((state) => {
      return { ...state, enteredAmount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);
    // setState({
    //   ...state,
    //   enteredDate: event.target.value,
    // });
    setState((state) => {
      return { ...state, enteredDate: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: state.enteredTitle,
      amount: state.enteredAmount,
      date: new Date(state.enteredDate),
    };
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setState((state) => {
      return { ...state, enteredTitle: "", enteredAmount: "", enteredDate: "" };
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={state.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={state.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={state.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
