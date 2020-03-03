import React from 'react';
import PostCustomerForm from './PostCustomerForm.jsx';
import GetCustomerForm from './GetCustomerForm.jsx';
import CustomerInfo from './CustomerInfo.jsx';
import DeleteCustomerForm from './DeleteCustomerForm.jsx'; 
import GetCustomerID from './GetCustomerID.jsx'; 
import CustomerId from './CustomerId.jsx';
import UpdateCustomer from './UpdateCustomer.jsx'; 

class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      customer: [{firstname: ''}], 
      customerId: [{firstname: ''}]
    }
    this.addNewCustomer = this.addNewCustomer.bind(this);
    this.getCustomer = this.getCustomer.bind(this);  
    this.deleteCustomer = this.deleteCustomer.bind(this);
    this.getCustomerByPhone = this.getCustomerByPhone.bind(this); 
    this.updateCustomer = this.updateCustomer.bind(this); 
  }; 

  addNewCustomer(newCustomer) {

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCustomer)
    };

    fetch('http://localhost:3007/api/addCustomer', options)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log("Here is the data from post function:", data);
      // this.getAllGroceries();
    })
    .catch((err) => {
      if (err) {
        console.log("Encounterd error in addNewCustomer: ", err);
      }
    })
  };

  getCustomer(id) {
    fetch(`http://localhost:3007/api/getCustomer/${id}`)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log("this is data:", data)
      this.setState({
        customer: data.results.rows
      })
    })
    .catch((err) => {
      if (err) {
        console.log("Encounterd error in getCustomer: ", err);
      }
    })
  }

  deleteCustomer(id) {
    fetch(`http://localhost:3007/api/deleteCustomer/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      console.log("removed")
    })
    .catch((err) => {
      if (err) {
        console.log("Encounterd error in deleteCustomer: ", err);
      }
    })
  }

  getCustomerByPhone(phone) {
    fetch(`http://localhost:3007/api/getCustomerID/${phone}`)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log("this is data:", data)
      this.setState({
        customerId: data.results.rows
      })
    })
    .catch((err) => {
      if (err) {
        console.log("Encounterd error in getCustomerByPhone: ", err);
      }
    })
  }

  updateCustomer(id, dropDownOption, string) {
    console.log("Here are the parameters:", id, dropDownOption, string)
    fetch(`http://localhost:3007/api/updateCustomer/${id}&${dropDownOption}&${string}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PATCH',                                                              
      body: JSON.stringify( { dropDownOption: string } ) 
    })
    .then(
      (response) => {
        console.log("First then")
        response.json()
      }
      )
    .catch((err) => {
      if (err) {
        console.log("Encounterd error in updateCustomer: ", err);
      }
    })
  }

  render() {
    return(
      <div>
      <h1>Welcome to bizNotes!</h1>
      <h2>I would like to:</h2>
      <h3>Add New Customer</h3>
      <PostCustomerForm addNewCustomer={this.addNewCustomer}/>
      <h3>Get Customer ID</h3>
      <GetCustomerID getCustomerByPhone={this.getCustomerByPhone}/>
      <CustomerId customer={this.state.customerId}/>
      <h3>Get Customer Information</h3>
      <GetCustomerForm getCustomer={this.getCustomer}/>
      <CustomerInfo customer={this.state.customer}/>
      <h3>Update Customer Profile</h3>
      <UpdateCustomer updateCustomer={this.updateCustomer}/>
      <h3>Delete Customer Profile</h3>
      <p>*Warning!* After you press the "Delete Customer Profile" button, the customer's profile will be permenently deleted. There is no going back!</p>
      <DeleteCustomerForm deleteCustomer={this.deleteCustomer}/>
      </div>
    )
  }
}

export default App;