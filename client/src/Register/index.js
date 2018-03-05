import React, {Component} from 'react';
import {connect} from 'react-redux';

import Form from './components/Form';
import './registerStyle.css';
import { registerUser } from './action';

class Register extends Component{
  componentWillReceiveProps(newProps){
    const {registerSuccess,registerError} = this.props.register;
    if(newProps.register.registerSuccess){
      this.props.history.push('/login');
    }
  }
  submitRegister=(data)=>{
    /* action dispatch */
    this.props.registerUser(data);
  }
  render(){
    const {registerError} = this.props.register;
    return(
      <div className={"register text-center"}>
        <div className={"form_wrapper"}>
        <Form onSubmit={this.submitRegister} error={registerError} />
        </div>
      </div>
    )
  }
}
const mapStateToProps=({register})=>{
  return{
    register
  }
}
export default connect(mapStateToProps, { registerUser })(Register);