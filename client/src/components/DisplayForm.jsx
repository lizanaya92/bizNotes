import React from 'react';
import PostCustomerForm from './PostCustomerForm.jsx';
import GetCustomerForm from './GetCustomerForm.jsx';
import DeleteCustomerForm from './DeleteCustomerForm.jsx'; 
import GetCustomerID from './GetCustomerID.jsx'; 
import UpdateCustomer from './UpdateCustomer.jsx'; 
import CustomerId from './CustomerId.jsx'; 
import CustomerInfo from './CustomerInfo.jsx';


const DisplayForm = (props) => {
  
  if(props.containerDisplay === '') {
    return <p>We are excited to work with you!</p>
  }

  if(props.containerDisplay === 'PostCustomer') {
   return (
    <PostCustomerForm addNewCustomer={props.addNewCustomer}/>
   )
  }

 if(props.containerDisplay === 'GetCustomerID') {
    return (
      <div>
      <GetCustomerID customerId={props.customerId} getCustomerByPhone={props.getCustomerByPhone}/>
      <CustomerId customer={props.customerId}/>
      </div>
    )
  }

  if(props.containerDisplay === 'GetCustomer') {
    return (
      <div>
      <GetCustomerForm getCustomer={props.getCustomer}/>
      <CustomerInfo customer={props.customer}/>
      </div>
    )
  }

  if(props.containerDisplay === 'UpdateCustomer') {
    return (
      <UpdateCustomer updateCustomer={props.updateCustomer}/>
    )
  }

  if(props.containerDisplay === 'DeleteCustomerID') {
    return (
      <DeleteCustomerForm deleteCustomer={props.deleteCustomer}/>
    )
  }
}

export default DisplayForm; 

