import React , { Component } from 'react';
import {connect} from 'react-redux';
import EachApartment from './components/EachApartment';
import {fetchSingleApartment} from "./action";

class Detail extends Component{
  componentDidMout(){
    console.log(this.props);
  }
  render(){
    return (
      <div>
        <EachApartment />
      </div>
    )
  }
}

const mapStateToProps=({apartmentList})=>{
  return{
    apartmentList
  }

}

export default connect(mapStateToProps , {fetchSingleApartment})(Detail);