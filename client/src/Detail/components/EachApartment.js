import React from 'react';

const EachApartment=({ singleApartment })=>{
  if(!singleApartment.name){
    return <p>...loading</p>
  }
  return (
    <div className={"container-fluid detail-container-fluid"}>
      <div className={"detail-wrapper"}>
        <div className={"row image-row"}>
          <h1> PROPERTY IMAGE </h1>
          <img src={singleApartment.image} />
          <div className={"well desc-well"}>
            <h3>Construction Year : {singleApartment.description[0].constructionYear}</h3>
            <h4>Faciltiy : {singleApartment.description[0].facility}</h4>

          </div>
          <div className={"well desc-well"}>
            <h3>Details : {singleApartment.description[0].detail}</h3>
            <h4>Special Features : {singleApartment.description[0].specialFeatures}</h4>
          </div>
          {singleApartment.comments.length > 0
            ?
            (
              <div className={"well desc-well"}>
                <h3>Author : {singleApartment.comments[0].author}</h3>
                <h4> CommentText : {singleApartment.comments[0].commentText}</h4>
              </div>
            ) : null
          }

          {/*<div className={"well desc-well"}>*/}
            {/*<h3>Here contains Details</h3>*/}
          {/*</div>*/}
          {/*<div className={"well desc-well"}>*/}
            {/*<h3>Here contains Details</h3>*/}
          {/*</div>*/}
        </div>
        <div className={"row detail-text-row"}>
          <h1> PROPERTY DETAIL</h1>
          <hr/>
          <div className={"well detail-text-well"}>
            <h3> Apartment Name : {singleApartment.name}</h3>
          </div>
          <div className={"well detail-text-well"}>
            <h3> Address : {singleApartment.address}</h3>
          </div>
          <div className={"well detail-text-well"}>
            <h3> Price : € {singleApartment.price}</h3>
          </div>
          <div className={"well detail-text-well"}>
            <h3>Apartment Type : {singleApartment.apartmentType}</h3>
          </div>
          {/*<div className={"row detail-agent-row"}>*/}
            {/*<h1>Our Agents </h1>*/}
            {/*<div className={"well detail-agent-well"}>*/}
              {/*<h3> {singleApartment.name}</h3>*/}
            {/*</div>*/}
            {/*<div className={"well detail-agent-well"}>*/}
              {/*<h3> {singleApartment.address}</h3>*/}
            {/*</div>*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  )

}

export default EachApartment;