import React from 'react';

const CustomerId = (props) => {

  if(props.customer.length === 0) {
    return (
      <h5>Whoops! Looks like that customer is not in the system. Please try again using a different phone number.</h5>
    )
  } else {
  return (
    <div className='customer-info'>
      <div className='flex'>
        <p>First Name: </p><h5>{props.customer[0].firstname}</h5>
      </div>
      <div className='flex'>
        <p>Last Name: </p><h5>{props.customer[0].lastname}</h5>
      </div>
      <div className='flex'>
        <p>Customer ID: </p><h5>{props.customer[0].customerid}</h5>
      </div>
    </div>
  )
  }
}

export default CustomerId; 