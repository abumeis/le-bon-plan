import React from "react";

class Produitcard extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img
            class=" img-fluid"
            src={this.props.productPicture}
            alt={this.props.name}
          />
          <h4>{this.props.name}</h4>
          <h4>{this.props.price}</h4>
          <p>{this.props.Description}</p>
        </div>
      </div>
    );
  }
}

export default Produitcard;
