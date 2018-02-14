import React from 'react';
import {withRouter} from 'react-router';
import _ from 'lodash';

const ApartmentList =({apartmentList,history, price})=>{
  const redirectToPage=(id)=>{
    history.push(`/apartments/${id}`);
  }

  const renderApartments = ()=>{
    const maxApartmentList =_.takeRight(apartmentList, 4)
    return maxApartmentList.map(each=>{
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
                <button type="button" className="btn-lg visit-button" onClick={()=>redirectToPage(each._id)}>
                  View Detail</button>
              </div>

            </div>

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

export default withRouter(ApartmentList);