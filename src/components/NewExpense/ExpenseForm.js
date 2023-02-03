import React, {useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
   const [enteredTitle, setEnterTitle] =  useState('');
   const [enteredAmount, setEnterAmount] = useState('');
   const [enteredDate, setEnterDate] = useState('');

// const [userInput, setUserInput] = useState({
//         eneteredTitle: '',
//         eneteredAmount: '',
//         eneteredDate: '',

// })


   const titleChangeHandler = (event) => {
        setEnterTitle(event.target.value);   
        // setUserInput({
        //     ...userInput,
        //     eneteredTitle: event.target.value
        // })

        // setUserInput(() => {
        //     return {...prevState, eneteredTitle: event.target.value}
        // });

   }

   const amountChangeHandler = (event) => {
        setEnterAmount(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     eneteredAmount: event.target.value,
        // })
    }


    const dateChangeHandler = (event) =>{
        setEnterDate(event.target.value);


        // setUserInput({
        //     ...userInput,
        //     eneteredDate: event.target.value,
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setEnterTitle('');
        setEnterAmount('');
        setEnterDate('');
    }




  return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01"  value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max = "2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
                <div className="new-xepense__action">
                <button  type="submit">Add Expenses</button>
                </div>
            </div>    
        </form>
  )
}

export default ExpenseForm
