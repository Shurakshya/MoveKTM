import React , { Component } from 'react';
import { connect } from 'react-redux';
import * as qs from 'query-string';

import './all.css';
import '../Home/home.css';
import  { fetchApartments } from '../Home/action';
import DetailHeader from '../Detail/components/DetailHeader';
import ApartmentDiv from '../Common/ApartmentDiv';

class AllApartments extends Component{
  constructor(props){
    super(props);
    this.state={
      search : ''
    }
  }
  componentWillMount(){
    this.props.fetchApartments();
    const query = qs.parse(this.props.location.search);
    if(query){
      this.setState({
        search : query
      })
    }
  }
  renderApartments=()=>{
    const { apartments } = this.props.home;
    if(!apartments){
      return (
        <div>Loading...</div>
      )
    }
    return apartments.map(each=>{
      return(
        <ApartmentDiv
          key={each._id}
          className={"col-sm-3"}
          image={each.image}
          price={each.price}
          name={each.name}
          address={each.address}
          apartmentType={each.apartmentType}
          id={each._id}
        />
      )
    })
  }
  renderSearchApartments=()=>{
    const { apartments} = this.props.home;
    const search =  new RegExp(this.state.search.search,'i');
    // regex
    // string.match(/hari/)
    // regex.test(string)
    const result = apartments.filter((apartment =>{
      return (
        search.test(apartment.name) ||
        search.test(apartment.address) ||
        search.test(apartment.apartmentType)
      );
    }));
    if (result.length <=0){
      return (
        <div className={"Empty-div"}>
          <h1>
           Apartment not Found with the search. Please input other keywords.
          </h1>
        </div>
      )
    } else{
      return result.map(each=>{
        return(
          <ApartmentDiv
            key={each._id}
            className={"col-sm-3"}
            image={each.image}
            price={each.price}
            name={each.name}
            address={each.address}
            apartmentType={each.apartmentType}
            id={each._id}
          />
        )
      })
    }
  }
  render(){
    return(
      <div>
        <DetailHeader/>
        {/*<div className={"allapartments-row"}>*/}
          <div className={"apartment_list_popular"}>
          <br />
          <div className={"row apartment_block"}>
            {this.state.search ? this.renderSearchApartments() : this.renderApartments()}
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps=({ home })=>{
  return{
    home
  }
}
export default connect(mapStateToProps , { fetchApartments })(AllApartments);