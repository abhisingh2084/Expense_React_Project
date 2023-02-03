import React from 'react'

import './ExpenseDate.css'


const ExpenseDate = (props) => {

//     const month = props.date.toLocalString();
//     const day = props.date.toLocalString(); 
    const year = props.date.getFullYear()

    return (
        
         <div className='expense-date'>
              {/* <div className='expense-date__month'>{month}</div> */}
              <div className='expense-date__year'>{year}</div>
              {/* <div className='expense-date__year'>{day}</div> */}
         </div>

    );
}

export default ExpenseDate;
