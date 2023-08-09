import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
    const saveExpenseDataHandler =  (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setIsEditing(false)
        // console.log(expenseData)
    }
    const [isEditing, setIsEditing] = useState(false)
    const handlerAddExpense=()=>{
        setIsEditing(true)
    }
    const stopEditingHandler=()=> {
        setIsEditing(false)
    }
    return (
        <div className="new-expense">
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
            {!isEditing && <button onClick={handlerAddExpense}>Add New Expense</button>}
        </div>
    )

}
export default NewExpense