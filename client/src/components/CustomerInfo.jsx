import React from 'react';

const CustomerInfo = (props) => {
  console.log("here are the props:", props.customer)
  if(props.customer.length === 0) {
    return (
      <h5>Whoops! Looks like that customer is not in the system. Please try again using a different customer ID.</h5>
    )
  } else {
  return (
   <div>
     <div><h4>First Name: {props.customer[0].firstname}</h4> <h4> Last Name: {props.customer[0].lastname}</h4></div>
     <h5>Phone Number: {props.customer[0].phonenumber}</h5> <h5>Email address: {props.customer[0].emailaddress}</h5>
     <h5>About {props.customer[0].firstname}: {props.customer[0].customerpersonaldetails}</h5>
     <h5>Customer in interested in: {props.customer[0].customerproductdetails}</h5>
     <h5>We last met on: {props.customer[0].lastinteraction}</h5>
     <h5>Last time we met we discussed: {props.customer[0].lastinteractiondetails}</h5>
   </div>
  )
  }
}

export default CustomerInfo; 