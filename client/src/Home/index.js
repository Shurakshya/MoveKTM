import React, { Component } from 'react';
import {connect} from 'react-redux';

import  { fetchApartments } from './action';
import './home.css';
import Header from './components/Header';
import PopularApartment from './components/PopularApartment';
import Categories from "./components/Categories";
import Footer from "./components/footer";

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      showErrorMessage : false
    }
  }
  componentDidMount(){
    /* dispatch action */
    this.props.fetchApartments();
  }
  displayError=()=>{
    alert("empty search!!!");
  }
  render() {
    const { apartments } = this.props.home;
    return (
      <div>
        {this.state.showErrorMessage ?
          (
            <div className="feedBack-success">
              <strong>Success!!!</strong> Thank You For Your Feedback.
            </div>
          ) : null }
        <Header />
        <Categories sendError={this.displayError} />
        <PopularApartment apartmentList={ apartments }/>
        <Footer/>
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
