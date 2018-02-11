import React from 'react';
import {withRouter} from 'react-router';

const ApartmentList =({apartmentList,history})=>{
  const redirectToPage=(id)=>{
    history.push(`/apartments/${id}`);
  }
  const renderApartments = ()=>{
    return apartmentList.map(each=>{
        return(
          <div className={"col-sm-3"} key={each._id} onClick={()=>redirectToPage(each._id)}>
            <div className="apartment_block_each">
              <div>
                <img className={"apartment_image"} src={"http://markinternational.info/data/out/592/224126936-home-images.jpg"} />
              </div>
              <div className={"apartment_detail"}>
                <h2>{each.name}</h2>
                <p>{each.price}</p>
              </div>
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
      {/*<div className={'row apartment_block'}>*/}
        {/*<br />*/}
        {/*<h1>Most popular Apartments</h1>*/}
        {/*<br />*/}
        {/*{renderApartments()}*/}
      {/*</div>*/}
    </div>
  )
}

export default withRouter(ApartmentList);