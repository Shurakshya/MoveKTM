import React, {Component} from 'react';
import Form from './components/Form';
import Header from '../Common/Navigation';
import './registerStyle.css';

class Login extends Component{
  render(){
    return(
      <div className={"login text-center"}>
        <div className={"form_wrapper"}>
        <Header />
        <br />
        <Form />
        </div>
      </div>
    )
  }
}

export default Login;