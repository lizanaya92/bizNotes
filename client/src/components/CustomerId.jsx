import React from 'react';

const CustomerId = (props) => {
  console.log("here are the props:", props.customer)
  if(props.customer.length === 0) {
    return (
      <h5>Whoops! Looks like that customer is not in the system. Please try again using a different phone number.</h5>
    )
  } else {
  return (
   <div>
     <div><h5>First Name: {props.customer[0].firstname}</h5> <h5> Last Name: {props.customer[0].lastname}</h5></div>
     <h5>Customer ID: {props.customer[0].customerid}</h5>
   </div>
  )
  }
}

export default CustomerId; 