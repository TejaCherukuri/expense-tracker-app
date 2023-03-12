import React, {useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

  const DUMMY_EXPENSES = [
    {
        id: Math.random().toString(),
        title: "Mobile",
        amount: "300",
        date: new Date(2022, 10, 12)
    },
    {
        id: Math.random().toString(),
        title: "Laptop",
        amount: "800",
        date: new Date(2023, 3, 10)
    },
    {
        id: Math.random().toString(),
        title: "Car",
        amount: "1300",
        date: new Date(2023, 1, 1)
    }
]
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const NewExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => {
        return [newExpense, ...prevExpenses]
    });
  }

  return (
    <div>
      <NewExpense onNewExpense = {NewExpenseHandler}/>
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
