import React, {useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expense from './components/Expenses/Expense';
import ExpensesFilter from './components/NewExpense/ExpensesFilter';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
    id: 'e2',
    title: 'New TV', 
    amount: 799.49,
    date: new Date(2021, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App(props) {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
    // console.log('in App.js');
    console.log(expense);
  }
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "lets get started" ),
  //   React.createElement(Expense, {items: expenses})
  // );
  return (
    <div className='App'>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense items={expenses}/>
    </div>
  );
}

export default App;
