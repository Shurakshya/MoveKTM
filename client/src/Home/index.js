import React, { Component } from 'react';
import {connect} from 'react-redux';
import  {fetchApartments} from './action';
import './home.css';
import img1 from '../images/prop_icon1.png';
import img2 from '../images/prop_icon2.png';
import img3 from '../images/prop_icon3.png';
import img4 from '../images/prop_icon4.png';
import price from '../images/shape2.png';


import Header from './components/Header';
import ApartmentList from './components/ApartmentList';
import Categories from "./components/Categories";
import Footer from "./components/footer";

class App extends Component {
  componentDidMount(){
    /* dispatch action */
    this.props.fetchApartments();
  }

  render() {
    const { apartments } = this.props.home;
    return (
      <div>
        <Header />
        <Categories img1={img1} img2={img2} img3={img3} img4={img4} />
        <ApartmentList apartmentList={ apartments } price={price}/>
        {/*<Footer/>*/}
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
