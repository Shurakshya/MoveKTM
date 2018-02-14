import React , { Component } from 'react';
import { connect } from 'react-redux';
import  {fetchApartments} from '../Home/action';
import '../Home/home.css';
import DetailHeader from '../Detail/components/DetailHeader';
import price from '../images/shape2.png';

class AllApartments extends Component{
  componentWillMount(){
    this.props.fetchApartments();
  }

  redirectToPage=(id)=>{
    this.props.history.push(`/apartments/${id}`);
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
        <div className={"col-sm-3"} key={each._id} >
          <div className="apartment_block_each">
            <img className={"apartment_image"} src={each.image} />
            <div className={"price-show"}>
              <img src={price} />
              <p>€ {each.price}</p>
            </div>
          </div>
          <div className={"apartment_detail"}>
            <h4>{each.name}</h4>
            <h6>{each.address}</h6>
            <p>{each.apartmentType}</p>
            <button type="button" className="btn-lg visit-button" onClick={()=>this.redirectToPage(each._id)}>
              View Detail</button>
          </div>
        </div>
      )
    })
  }
  render(){
    return(
      <div>
        <DetailHeader/>
        <div className={"apartment_list_popular"}>
          <br />
          <div className={"row apartment_block"}>
            {this.renderApartments()}
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