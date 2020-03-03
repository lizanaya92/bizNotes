import React from 'react';

class GetCustomerID extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      phone: ''
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

  onSubmit (event) {
    event.preventDefault(); 
    const phone = this.state;
    console.log("here is the phone:", phone); 
    this.props.getCustomerByPhone(this.state.phone);

    this.clearForm();
  }

  clearForm() {
    this.setState({
      phone: ''
    })
  };

  render() {
    return(
    <form onSubmit={this.onSubmit}>
      <label> Customer Phone Number (e.g. (303)734-4509)
        <input name="phone" value={this.state.phone} onChange={this.onInputChange}/>
      </label>
      <button>Get Customer ID</button>
    </form>
    )
  }
}

export default GetCustomerID;