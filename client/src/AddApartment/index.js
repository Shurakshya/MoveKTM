import React, { Component} from 'react';
import {connect} from 'react-redux';
import { addApartment } from "./action";

import './addApartment.css'
import  Form from "./components/Form";

class AddApartment extends Component{
  componentWillReceiveProps(){

  }

  submitApartmentData=(data)=>{
    console.log("action dispatchinf from add apratment" , data );
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

const mapStateToProps=(state)=>{
  return{

  }
}

export default connect(null, { addApartment })(AddApartment);