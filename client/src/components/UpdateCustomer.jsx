import React from 'react'; 

class UpdateCustomer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      id: '', 
      dropDownOptions: '', 
      editString: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);
  };

  onDropdownChange(event) {
    event.preventDefault(); 
    this.setState({
      dropDownOptions: event.target
    })
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
    this.props.updateCustomer(this.state.id, this.state.dropDownOptions, this.state.editString);

    this.clearForm();
  }

  clearForm() {
    this.setState({
      id: '', 
      dropDownOptions: '', 
      editString: ''
    })
  };


  render() {
    return(
    <form className='update-custid__form' onSubmit={this.onSubmit}>
      <div className='customer-info'>
      <label> Customer ID:
        <input name="id" value={this.state.id} onChange={this.onInputChange}/>
      </label>
      </div>
      <div className='customer-info'>
      <label htmlFor="editFields">Choose a field to edit:&nbsp;</label>
      <select id="editField" name="dropDownOptions" value={this.state.dropDownOptions} onChange={this.onInputChange}>
        <option value="select">Select One</option>
        <option value="firstname">First Name</option>
        <option value="lastname">Last Name</option>
        <option value="address">Address</option>
        <option value="phonenumber">Phone Number  (e.g. (303)734-4509)</option>
        <option value="emailaddress">Email Address</option>
        <option value="customerpersonaldetails">Customer Personal Details</option>
        <option value="customerproductdetails">Customer Product Details</option>
        <option value="lastinteraction">Last Interaction Date (e.g. 2020-01-30)</option>
        <option value="lastinteractiondetails">Last Interaction Notes</option>
      </select>
      </div>
      <div className='dropdown-menu'>
      <label> Edit to be made:
        <input name="editString" value={this.state.editString} onChange={this.onInputChange}/>
      </label>
      </div>
      <button>Update Customer Information</button>
    </form>
    )
  }
}

export default UpdateCustomer; 