import React , {Component} from 'react';

import ApartmentDiv from '../../Common/ApartmentDiv';

class ApartmentByCategory extends Component{
  constructor(props){
    super(props);
  }
  renderApartments=()=>{
    const { apartmentLists } = this.props;
    if(!apartmentLists){
      return (
        <div>Loading...</div>
      )
    }
    return apartmentLists.map(each=>{
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
  render(){
    return(
      <div className={"apartment_list_popular"}>
        <br />
        <div className={"row apartment_block"}>
          {this.renderApartments()}
        </div>
      </div>
    )
  }
}
export default ApartmentByCategory;