import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

import priceImage from '../images/shape2.png';

const ApartmentDiv = (props) =>{
  const {className,image,price,name,address,apartmentType,id} = props;
  const redirectToPage=(id)=>{
    props.history.push(`/apartments/${id}`);
  }
  return(
    <div className={className}>
      <div className="apartment_block_each">
        <img className={"apartment_image"} src={image} />
        <div className={"price-show"}>
          <img src={priceImage} />
          <p>€ {price}</p>
        </div>
      </div>
      <div className={"apartment_detail"}>
        <h4>{name}</h4>
        <h6>{address}</h6>
        <p>{apartmentType}</p>
        <button type="button" className="btn-lg visit-button" onClick={()=>redirectToPage(id)}>
          View Detail</button>
      </div>
    </div>
  )
}
ApartmentDiv.propTypes={
  className : PropTypes.string,
  image : PropTypes.string.isRequired,
  price : PropTypes.number.isRequired,
  name : PropTypes.string.isRequired,
  address : PropTypes.string.isRequired,
  apartmentType : PropTypes.string.isRequired,
  id : PropTypes.string.isRequired
}
export default withRouter(ApartmentDiv);