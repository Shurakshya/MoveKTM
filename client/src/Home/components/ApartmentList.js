import React from 'react';
import {withRouter} from 'react-router';

const ApartmentList =({apartmentList,history, price})=>{
  const redirectToPage=(id)=>{
    history.push(`/apartments/${id}`);
  }

  const renderApartments = ()=>{
    return apartmentList.map(each=>{
      console.log(each);
      const staticImage = "http://markinternational.info/data/out/592/224126936-home-images.jpg";
      return(
          <div className={"col-sm-3"} key={each._id} onClick={()=>redirectToPage(each._id)}>
            <div className="apartment_block_each">
              <img className={"apartment_image"} src={each.image || staticImage} />
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