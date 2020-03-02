import React from 'react';

class DeleteCustomerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  onInputChange(event) {
    const key = event.target.name;
    const value = event.target.value;

    this.setState({
      [key]: value
    })
  };

  onSubmit (event) {
    event.preventDefault(); 
    const id = this.state;
    console.log("here is the customer:", id); 
    this.props.deleteCustomer(this.state.id);

    this.clearForm();
  }

  clearForm() {
    this.setState({
      id: ''
    })
  };

  render() {
    return(
    <form onSubmit={this.onSubmit}>
      <label> Customer ID
        <input name="id" value={this.state.id} onChange={this.onInputChange}/>
      </label>
      <button>Delete Customer Profile</button>
    </form>
    )
  }
}; 

export default DeleteCustomerForm;

