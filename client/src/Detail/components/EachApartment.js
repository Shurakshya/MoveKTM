import React from 'react';
import Comment from './Comment';

const EachApartment = ({singleApartment}) => {
  if (!singleApartment.name) {
    return <p>...loading</p>
  }
  return (
    <div>
      <div className={"row image-row"}>
        <img src={singleApartment.image}/>
      </div>
      <div className={"row detail-text-row"}>
        <hr/>
        <ul className={"text-detail"}>
          <li><span className={"glyphicon glyphicon-home"}>
            </span>{singleApartment.name}</li>
          <li><span className={"glyphicon glyphicon-tag"}>
            </span>{singleApartment.apartmentType}</li>
          <li><span className={"glyphicon glyphicon-euro"}>
            </span>{singleApartment.price}</li>
        </ul>
        <hr/>
        <div className={"detail-text-well"}>
          <h4><span className={"heading"}> Apartment Address :</span> {singleApartment.name}</h4>
          <h4><span className={"heading"}> Details :</span> {singleApartment.description[0].detail}</h4>
          <h4><span className={"heading"}> Facility :</span> {singleApartment.description[0].facility}</h4>
          <h4><span className={"heading"}> Special Features :</span> {singleApartment.description[0].specialFeatures}
          </h4>
          <h4><span className={"heading"}> Construction Year :</span> {singleApartment.description[0].constructionYear}
          </h4>
          <hr/>
        </div>
      </div>
      <div className="heading-row">
        <h1>Reviews</h1>
      </div>
      {singleApartment.comments.length > 0
        ?
        (
          <Comment apartmentProps={singleApartment}/>
        ) : <div> No Reviews.</div>
      }
    </div>
  )
}
export default EachApartment;