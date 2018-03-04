import React from 'react';

const Footer =(props)=>{
  return (
    <div className={"row footer-row"}>
      <div className="container-fluid contact" id="contact">
        <h1>Contact
          <span className="logo">Me </span>
        </h1>
        <div className="row contact-row">
          <div className="col-sm-6">
            <div className="form_message">
            </div>
            <form>
              <input placeholder="Name" type="text" id="name" required="" className="validate" />
                <input placeholder="Email" type="email" id="email" required="" className="validate" />
                  <input placeholder="Feedback" type="text" id="comment" required="" className="validate" />
                    <button>Submit Feedback</button>
            </form>
          </div>
          <div className="col-sm-6">
            <div className="well">
              <h3> Connect with ME </h3><hr />
              <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/shurakshya.kharel" target="_blank">
                <span className="fa fa-facebook">
                </span>
              </a>
              <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/shurakshya/" target="_blank">
                <span className="fa fa-instagram">
                </span>
              </a>
              <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/shurakshya-kharel-81188ba6/" target="_blank">
                <span className="fa fa-linkedin">
                </span>
              </a>
              <br/><br/>
              <span className="sm_head">
                                Address: <br/>
                            </span>
              Kirstinharju 3D 065, <br/>
              Espoo, Finland<br/>
              <a className="logo" id="map">View on Google Map </a>
              <br/>
              <span className="sm_head">
                Telephone:<br/>
              </span>
              0456655616 <br/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;