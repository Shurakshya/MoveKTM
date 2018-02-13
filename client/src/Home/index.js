import React, { Component } from 'react';
import {connect} from 'react-redux';
import  {fetchApartments} from './action';
import './home.css';

import Header from './components/Header';
import ApartmentList from './components/ApartmentList';
import Categories from "./components/Categories";

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
        <Header />
        <Categories />
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

export default connect(mapStateToProps,{ fetchApartments })(App);
