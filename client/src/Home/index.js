import React, { Component } from 'react';
import {connect} from 'react-redux';
import Navigation from './components/Navigation';
import ApartmentList from './components/ApartmentList';
import  {fetchApartments} from './action';

import './home.css';

class App extends Component {
  componentDidMount(){
    /* dispatch action */
    this.props.fetchApartments();
  }

  render() {
    const { apartments } = this.props.home;
    console.log(apartments);
    return (
      <div>
        <Navigation />
        <ApartmentList apartmentList={ apartments }/>
      </div>
    );
  }
}
const mapStateToProps =(state) =>{
  return{
    home : state.home
  }
}

export default connect(mapStateToProps,{fetchApartments})(App);
