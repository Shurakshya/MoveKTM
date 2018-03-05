import React from 'react';
import {withRouter} from 'react-router';
import _ from 'lodash';
import ApartmentDiv from '../../Common/ApartmentDiv';

const PopularApartment =({apartmentList})=>{
  const renderApartments = ()=>{
    const maxApartmentList =_.takeRight(apartmentList, 4);
    return maxApartmentList.map(each=>{
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
  if(!apartmentList){
    return <p>loading...</p>;
  }
  return(
    <div className={"apartment_list_popular"}>
      <br />
      <h1>Most popular Apartments</h1>
      <br />
      <div className={"row apartment_block"}>
        {renderApartments()}
      </div>
    </div>
  )
}

export default withRouter(PopularApartment);