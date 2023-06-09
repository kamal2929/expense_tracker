import { useState } from "react";
import Expenses from "./component/expenses/expenses";
import NewExpense from "./component/new_expense/NewExpense";




function App() {
  const DUMMY_DATA = [
    {
      id: 'e1',
      title: 'Groceries',
      amount: 94.12,
      date: new Date(2021, 7, 14),
    },
    { id: 'e2', title: 'New Mobile', amount: 799.49, date: new Date(2020, 2, 12) },
    {
      id: 'e3',
      title: 'Car Repair',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New work desk',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenses,setExpenses]=useState(DUMMY_DATA)

  const onAddNewExpenseItem =(expense)=>{
   
    setExpenses((previous_expenses)=>{
      return[expense,...previous_expenses];

    })
   
  }
  return (
    <div className="App">
      <NewExpense submitAction={onAddNewExpenseItem}/>
       <Expenses expenses={expenses}/>

    </div>
    
  )
}

export default App
