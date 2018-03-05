import React, { Component } from 'react';
import _ from 'lodash';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: {},
    };
  }
  submitRegisterData = (e) => {
    e.preventDefault();
    const data = {
      firstname: this.firstname.value,
      lastname: this.lastname.value,
      email: this.email.value,
      password: this.password.value,
      phone: this.phone.value,
      streetAddress: this.streetAddress.value,
      city: this.city.value,
      country: this.country.value
    };
    /* validate form */
    this.validateForm(data);
    console.log("error message fro",this.state.error);
    _.size(this.state.error) <= 0 ? this.props.onSubmit(data) : null;
  }
  validateForm = (data) => {
    const { firstname, lastname, password, email, phone, streetAddress, city, country } = data;
    const error = {};
    if (!firstname) {
      error.firstname = 'firstname is required!';
    }
    if (!lastname) {
      error.lastname = 'lastname is required!';
    }
    if (!password || password.length < 6 ) {
      error.password = 'password length must be at least 6 characters!';
    }
    if (!email) {
      error.email = 'email is required!';
    }
    if (!phone) {
      error.phone = 'Phone number is required!';
    }
    if (!streetAddress) {
      error.streetAddress = 'streetAddress is required!';
    }
    if (!city) {
      error.city = 'city is required!';
    }
    if (!country) {
      error.country = 'country is required!';
    }
    this.setState({
      error,
    });
  }
  render() {
    const {error} = this.props;
    return (
      <div className="container register_form">
        <h1>REGISTER HERE</h1>
        <br />
        {
          error
            ? <div className="alert alert-danger">
              <strong>Error!</strong> { error }
            </div>
            : null
        }
        <form className="form-horizontal" onSubmit={this.submitRegisterData}>
          <div className="form-group">
            <input
              type="firstname"
              ref={firstname => (this.firstname = firstname)}
              className="form-control input-lg"
              id="firstname"
              placeholder="Enter firstname"
              name="firstname"
            />
            <span style={{ color: 'red' }}>
              {this.state.error.firstname || ''}
            </span>
          </div>
          <div className="form-group">
            <input
              type="lastname"
              ref={lastname => (this.lastname = lastname)}
              className="form-control input-lg"
              id="lastname"
              placeholder="Enter lastname"
              name="lastname"
            />
            <span style={{ color: 'red' }}>
              {this.state.error.lastname || ''}
            </span>
          </div>
          <div className="form-group">
            <input
              type="email"
              ref={email => (this.email = email)}
              className="form-control input-lg"
              id="email"
              placeholder="Enter email"
              name="email"
            />
            <span style={{ color: 'red' }}>{this.state.error.email || ''}</span>
          </div>
          <div className="form-group">
            <input
              type="password"
              ref={password => (this.password = password)}
              className="form-control input-lg"
              id="pwd"
              placeholder="Enter password"
              name="pwd"
            />
            <span style={{ color: 'red' }}>
              {this.state.error.password || ''}
            </span>
          </div>
          <div className="form-group">
            <input
              type="phone"
              ref={phone => (this.phone = phone)}
              className="form-control input-lg"
              id="phone"
              placeholder="Enter phone"
              name="phone"
            />
            <span style={{ color: 'red' }}>{this.state.error.phone || ''}</span>
          </div>
          <div className="form-group">
            <input
              type="streetAddress"
              ref={streetAddress => (this.streetAddress = streetAddress)}
              className="form-control input-lg"
              id="streetAddress"
              placeholder="Enter streetAddress"
              name="streetAddress"
            />
            <span style={{ color: 'red' }}>
              {this.state.error.streetAddress || ''}
            </span>
          </div>
          <div className="form-group">
            <input
              type="city"
              ref={city => (this.city = city)}
              className="form-control input-lg"
              id="city"
              placeholder="Enter city"
              name="city"
            />
            <span style={{ color: 'red' }}>{this.state.error.city || ''}</span>
          </div>
          <div className="form-group">
            <input
              type="country"
              ref={country => (this.country = country)}
              className="form-control input-lg"
              id="country"
              placeholder="Enter country"
              name="country"
            />
            <span style={{ color: 'red' }}>
              {this.state.error.country || ''}
            </span>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default RegisterForm;
