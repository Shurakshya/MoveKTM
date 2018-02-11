import React from 'react';

const EachApartment=({ singleApartment })=>{
  return (
    <div className={"well"}>
      <h3> {singleApartment.name}</h3>
      <h3> {singleApartment.apartmentType}</h3>
      <h3> {singleApartment.price}</h3>
      <h3> {singleApartment.address}</h3>
    </div>
  )

}

export default EachApartment;