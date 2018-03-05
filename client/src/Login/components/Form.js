import React, { Component } from 'react';
import _ from 'lodash';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: {},
    };
  }
  submitLoginData = (e) => {
    e.preventDefault();
    const data = {
      email: this.email.value,
      password: this.password.value,
    };
    /* validate form */
    this.validateForm(data);
    console.log('error message from login form ', this.state.error);
    _.size(this.state.error) <= 0 ? this.props.onSubmit(data) : null;
  }
  validateForm = (data) => {
    const { email, password } = data;
    const error = {};
    if (!password || password.length < 6) {
      error.password = 'password is incorrect';
    }
    if (!email) {
      error.email = 'email is required!';
    }
    this.setState({
      error
    });
  }
  render() {
    const { error } = this.props;
    return (
      <div className="container login_form">
        <h1>Login Here</h1>
        <br />
        {error ? (
          <div className="alert alert-danger">
            <strong>Error!</strong> {error}
          </div>
        ) : null}
        <form className="form-horizontal" onSubmit={this.submitLoginData}>
          <div className="form-group">
            <input
              type="email"
              className="form-control input-lg"
              id="email"
              placeholder="Enter email"
              name="email"
              ref={email => (this.email = email)}
            />
            <span style={{ color: 'red' }}>{this.state.error.email || ''}</span>
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control input-lg"
              id="pwd"
              placeholder="Enter password"
              name="pwd"
              ref={password => (this.password = password)}
            />
            <span style={{ color: 'red' }}>
              {this.state.error.password || ''}
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
export default LoginForm;
