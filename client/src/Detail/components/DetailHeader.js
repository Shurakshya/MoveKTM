import React from 'react';

const DetailHeader =(props)=>{
  return(
    <div>
      <div className={"container-fluid detail-header"}>
      </div>
      <div className={"row image-bg-row"}>
      </div>
      <ul className="breadcrumb">
        <li><a href="#">Home</a></li>
        <li><a className="active">Detail</a></li>
      </ul>
    </div>
  )

}

export default DetailHeader;