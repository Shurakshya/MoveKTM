import React , {Component} from 'react';

class ApartmentByCategory extends Component{

  redirectToPage=(id)=>{
    this.props.history.push(`/apartments/${id}`);
  }
  renderApartments=()=>{
    const { apartmentLists, price } = this.props;
    if(!apartmentLists){
      return (
        <div>Loading...</div>
      )
    }
    return apartmentLists.map(each=>{
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
            <button type="button" className="btn-lg visit-button" onClick={()=>this.redirectToPage(each._id)}>
              View Detail</button>
          </div>
        </div>
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