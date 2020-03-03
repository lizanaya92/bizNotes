import React from 'react';

const CustomerInfo = (props) => {

  if(props.customer.length === 0) {
    return (
      <h5>Whoops! Looks like that customer is not in the system. Please try again using a different customer ID.</h5>
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
      <p>Phone Number: </p><h5>{props.customer[0].phonenumber}</h5> 
      </div>
      <div className='flex'>
      <p>Email address: </p><h5>{props.customer[0].emailaddress}</h5>
      </div>
      <div className='flex'>
      <p>About {props.customer[0].firstname}: </p><h5>{props.customer[0].customerpersonaldetails}</h5>
      </div>
      <div className='flex'>
      <p>Customer in interested in: </p><h5>{props.customer[0].customerproductdetails}</h5>
      </div>
      <div className='flex'>
      <p>We last met on: </p><h5>{props.customer[0].lastinteraction}</h5>
      </div>
      <div className='flex'>
      <p>Last time we met we discussed: </p><h5>{props.customer[0].lastinteractiondetails}</h5>
      </div>
    </div>
  )
  }
}

export default CustomerInfo; 