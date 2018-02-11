import React from 'react';

const LoginForm = (props) =>{
  return(
    <div className="container login_form">
      <br />
      <h1>Login Here</h1>
      <br />
      <form className="form-horizontal" >
        <div className="form-group">
            <input type="email" className="form-control input-lg" id="email" placeholder="Enter email" name="email" />
        </div>
        <div className="form-group">
            <input type="password" className="form-control input-lg" id="pwd" placeholder="Enter password" name="pwd"/>
        </div>
        <div className="form-group">
            <button type="submit" className="btn btn-primary btn-lg">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;