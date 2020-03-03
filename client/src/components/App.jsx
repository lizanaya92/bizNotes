import React from 'react';
import PostCustomerForm from './PostCustomerForm.jsx';
import GetCustomerForm from './GetCustomerForm.jsx';
import DeleteCustomerForm from './DeleteCustomerForm.jsx'; 
import GetCustomerID from './GetCustomerID.jsx'; 
import UpdateCustomer from './UpdateCustomer.jsx'; 
import DisplayForm from './DisplayForm.jsx'; 

class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      customer: [{firstname: ''}], 
      customerId: [{firstname: ''}],
      containerDisplay: ''
    }
    this.addNewCustomer = this.addNewCustomer.bind(this);
    this.getCustomer = this.getCustomer.bind(this);  
    this.deleteCustomer = this.deleteCustomer.bind(this);
    this.getCustomerByPhone = this.getCustomerByPhone.bind(this); 
    this.updateCustomer = this.updateCustomer.bind(this); 
    this.switchDisplayPostCustomer = this.switchDisplayPostCustomer.bind(this); 
    this.switchDisplayGetCustomerID = this.switchDisplayGetCustomerID.bind(this); 
    this.switchDisplayGetCustomer = this.switchDisplayGetCustomer.bind(this); 
    this.switchDisplayUpdateCustomer = this.switchDisplayUpdateCustomer.bind(this); 
    this.switchDisplayDeleteCustomerID = this.switchDisplayDeleteCustomerID.bind(this); 
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
        response.json()
      })
    .catch((err) => {
      if (err) {
        console.log("Encounterd error in updateCustomer: ", err);
      }
    })
  }

  switchDisplayPostCustomer() {
    this.setState(
      {containerDisplay: 'PostCustomer'}
      )
  }

  switchDisplayGetCustomerID() {
    this.setState(
      {containerDisplay: 'GetCustomerID'}
      )
  }

  switchDisplayGetCustomer() {
    this.setState(
      {containerDisplay: 'GetCustomer'}
      )
  }

  switchDisplayUpdateCustomer() {
    this.setState(
      {containerDisplay: 'UpdateCustomer'}
      )
  }

  switchDisplayDeleteCustomerID() {
    this.setState(
      {containerDisplay: 'DeleteCustomerID'}
      )
  }

  render() {
    return(
      <div>
      <h1>Welcome to bizNotes!</h1>
      <h2>Built For The Bezt Entrepreneurz</h2>
      <h2>I would like to:</h2>
      <button name='PostCustomer' onClick={this.switchDisplayPostCustomer}>Add New Customer</button>
      <button name='GetCustomerID' onClick={this.switchDisplayGetCustomerID}>Get Customer ID</button>
      <button name='GetCustomer' onClick={this.switchDisplayGetCustomer}>Get Customer Information</button>
      <button name='UpdateCustomer' onClick={this.switchDisplayUpdateCustomer}>Update Customer Profile</button>
      <button name='DeleteCustomerID' onClick={this.switchDisplayDeleteCustomerID}>Delete Customer</button>
      <DisplayForm 
        customer={this.state.customer}
        customerId={this.state.customerId}
        containerDisplay={this.state.containerDisplay}
        addNewCustomer={this.addNewCustomer}
        getCustomerByPhone={this.getCustomerByPhone}
        getCustomer={this.getCustomer}
        updateCustomer={this.updateCustomer}
        deleteCustomer={this.deleteCustomer}
       />
      </div>
    )
  }
}

export default App;