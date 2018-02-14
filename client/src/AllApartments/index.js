import React , { Component } from 'react';
import { connect } from 'react-redux';
import  {fetchApartments} from '../Home/action';
import './home.css';

class AllApartments extends Component{
  render(){
    return(
      <div>
        <div className={"col-sm-3"} key={each._id} onClick={()=>redirectToPage(each._id)}>
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
            <button type="button" className="btn-lg visit-button">
              View Detail</button>
          </div>

        </div>
      </div>
    )
  }
}

export default connect(null , { fetchApartments })(AllApartments);