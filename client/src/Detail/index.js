import React , { Component } from 'react';
import {connect} from 'react-redux';
import EachApartment from './components/EachApartment';
import {fetchSingleApartment} from "./action";

class Detail extends Component{
  componentDidMount(){
    const id = this.props.match.params.apartmentId;
    this.props.fetchSingleApartment(id);
  }

  render(){
    const { apartment } = this.props.detail;

    return (
      <div>
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