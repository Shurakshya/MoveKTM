import React, {Component} from 'react';
import {connect} from 'react-redux'
import { fetchApartmentByCategory } from './action';

import price from '../images/shape2.png';
import './apartmentList.css';
import DetailHeader from '../Detail/components/DetailHeader';
import SortApartment from './components/SortApartment';
import ApartmentByCategory from './components/ApartmentByCategory';

class ApartmentLists extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const category = this.props.match.params.apartmentType;
    this.props.fetchApartmentByCategory(category);
  }

  render(){
    console.log("this.props" , this.props);
    const { apartmentLists ,apartmentListsError } = this.props.category;
    const {history} = this.props;
    return(
      <div>
        <DetailHeader/>
        <SortApartment />
        <ApartmentByCategory apartmentLists={apartmentLists} price={price} history={history}/>
      </div>
    )
  }
}

const mapStateToProps = ({category})=>{
  return {
    category
  }
};

export default connect(mapStateToProps, { fetchApartmentByCategory })(ApartmentLists);

