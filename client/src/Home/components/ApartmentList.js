import React from 'react';
import {withRouter} from 'react-router';

const ApartmentList =({apartmentList,history, price})=>{
  const redirectToPage=(id)=>{
    history.push(`/apartments/${id}`);
  }

  const renderApartments = ()=>{
    return apartmentList.map(each=>{
      console.log(each);
        return(
          <div className={"col-sm-3"} key={each._id} onClick={()=>redirectToPage(each._id)}>
            <div className="apartment_block_each">
              <img className={"apartment_image"} src={"http://markinternational.info/data/out/592/224126936-home-images.jpg"} />
              <div className={"price-show"}>
                <img src={price} />
                <p>€{each.price}</p>
              </div>
            </div>
              <div className={"apartment_detail"}>
                <h4>{each.name}</h4>
                <h6>{each.address}</h6>
                <p>{each.apartmentType}</p>
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