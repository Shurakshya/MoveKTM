import React, { Component} from 'react';
import {connect} from 'react-redux';

import { addApartment } from "./action";
import './addApartment.css'
import  Form from "./components/Form";

class AddApartment extends Component{
  submitApartmentData=(data)=>{
    this.props.addApartment(data);
  }
  render(){
    return (
      <div className={"add_apartment text-center"}>
        <div className={"form_wrapper"}>
          <br />
          <Form onSubmit={this.submitApartmentData}  />
        </div>
      </div>
    )
  }
}
export default connect(null, { addApartment })(AddApartment);