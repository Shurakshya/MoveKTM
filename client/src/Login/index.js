import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loginUser } from './action';
import Form from './components/Form';
import './loginStyle.css';

class Login extends Component{
  componentWillReceiveProps(newProps){
    const {token} = newProps.login;
    if(newProps.login.loginSuccess && token){
      /* save it to localstorage */
      localStorage.setItem('token',token)
      this.props.history.push('/');
    }
  }

  submitLogin=(data)=>{
    /* action dispatch */
    console.log("action dispatcing ", data);
    this.props.loginUser(data);
  }
  render(){
    const {loginError} = this.props.login;
    return(
      <div className={"login text-center"}>
        <div className={"form_wrapper"}>
        <br />
        <Form  onSubmit={this.submitLogin} error={loginError}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps=({login})=>{
  return{
    login
  }
}

export default connect(mapStateToProps, { loginUser })(Login);