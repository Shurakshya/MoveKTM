import React ,{Component} from 'react';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });

  };

  renderedAllComments = () => {
    const {apartmentProps} = this.props;
    if (this.state.isOpen) {
      return apartmentProps.comments;
    } else {
      return apartmentProps.comments.slice(0, 4);
    }
  };

  render() {
    const {apartmentProps} = this.props;
    return (
      <div className="well comment-well">
        {this.renderedAllComments().map(each => {
          return (
            <div className="row" key={each._id}>
              <div className="col-sm-2">
                <div className="thumbnail">
                  <img className="img-responsive" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"/>
                </div>
              </div>
              <div className="col-sm-10">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <strong>{each.author}</strong>
                    <span className="text-muted pull-right">{each.commentedOn}</span>
                  </div>
                  <div className="panel-body">
                    {each.commentText}
                  </div>
                </div>
              </div>
            </div>
          )
        })
        }
        { apartmentProps.comments.length > 4
          ?(
            <p><a onClick={this.toggle}>View {this.state.isOpen ? 'less' : 'more'} comments</a></p>
          )
          : null
        }
      </div>
    )
  }
}

export default Comment;

