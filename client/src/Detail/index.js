import React , { Component } from 'react';
import {connect} from 'react-redux';
import {fetchSingleApartment} from "./action";

import './detail.css'
import DetailHeader from "./components/DetailHeader";
import EachApartment from './components/EachApartment';

class Detail extends Component{
  componentDidMount(){
    const id = this.props.match.params.apartmentId;
    this.props.fetchSingleApartment(id);
  }

  render(){
    console.log( "detail props enenen",this.props.detail);
    const { apartment } = this.props.detail;
    return (
      <div>
        <DetailHeader/>
        <EachApartment singleApartment= { apartment } />
      </div>
    )
  }
}

const mapStateToProps=({detail})=>{
  return{
    detail
  }

}

export default connect(mapStateToProps , {fetchSingleApartment})(Detail);