import React from 'react';

class PostCustomerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      address: '', 
      phoneNumber: '', 
      emailAddress: '', 
      customerPersonalDetails: '', 
      customerProductDetails: '',
      lastInteraction: '', 
      lastInteractionDetails: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);
  };

  onInputChange(event) {
    const key = event.target.name;
    const value = event.target.value;

    this.setState({
      [key]: value
    })
  };

  onSubmit () {
    const newCustomer = this.state;

    this.props.addNewCustomer(newCustomer);

    this.clearForm();
  }

  clearForm() {
    this.setState({
      firstName: '',
      lastName: '',
      address: '', 
      phoneNumber: '', 
      emailAddress: '', 
      customerPersonalDetails: '', 
      customerProductDetails: '',
      lastInteraction: '', 
      lastInteractionDetails: ''
    })
  };

  render() {
    return(
    <form onSubmit={this.onSubmit}>
      <label> First Name
        <input name="firstName" value={this.state.firstName} onChange={this.onInputChange}/>
      </label>
      <label> Last Name
        <input name="lastName" value={this.state.lastName} onChange={this.onInputChange}/>
      </label>
      <label> Address
        <input name="address" value={this.state.address} onChange={this.onInputChange}/>
      </label>
      <label> Phone Number
        <input name="phoneNumber" value={this.state.phoneNumber}
        onChange={this.onInputChange}/>
      </label>
      <label> Email
        <input name="emailAddress" value={this.state.emailAddress} onChange={this.onInputChange}/>
      </label>
      <label> Customer Personal Details
        <input name="customerPersonalDetails" value={this.state.customerPersonalDetails} onChange={this.onInputChange}/>
      </label>
      <label> Customer Product Details
        <input name="customerProductDetails" value={this.state.customerProductDetails} onChange={this.onInputChange}/>
      </label>
      <label> Last Interaction Date (e.g. 2020-01-30)
        <input name="lastInteraction" value={this.state.lastInteraction} onChange={this.onInputChange}/>
      </label>
      <label> Last Interaction Notes
        <input name="lastInteractionDetails" value={this.state.lastInteractionDetails} onChange={this.onInputChange}/>
      </label>
      <button>Add New Customer</button>
    </form>
    )
  }
}

export default PostCustomerForm;