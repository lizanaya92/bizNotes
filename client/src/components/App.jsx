import React from 'react';
import PostCustomerForm from './PostCustomerForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      costumer: []
    }
    this.addNewCustomer = this.addNewCustomer.bind(this); 
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

  render() {
    return(
      <div>
      <h1>Welcome to bizNotes!</h1>
      <h2>I would like to:</h2>
      <PostCustomerForm addNewCustomer={this.addNewCustomer}/>
      </div>
    )
  }
}

export default App;