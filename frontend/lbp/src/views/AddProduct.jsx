import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      name: "",
      price: "",
      Description: "",
      productPicture: "",
    };
  }

  onChangeName = (e) => {
    this.setState({ name: e.target.value });
  };
  onChangePrice = (e) => {
    this.setState({ price: e.target.value });
  };
  onChangeDescription = (e) => {
    this.setState({ Description: e.target.value });
  };

  onChangeProductPicture = (e) => {
    this.setState({ productPicture: e.target.value });
  };

  AddProduct = () => {
    fetch("http://localhost:8000/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
        price: this.state.price,
        Description: this.state.Description,
        productPicture: this.state.productPicture,
      }),
    })
      .then((response) => {
        this.props.history.push("/products");

        return response.json();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <form className="form-horizontal">
          <fieldset>
            <div className="form-group">
              <label className="col-md-4 control-label" for="product_id">
                PRODUCT NAME
              </label>
              <div className="col-md-4">
                <input
                  name="product name"
                  placeholder="product name"
                  className="form-control input-md"
                  required=""
                  type="text"
                  value={this.state.name}
                  onChange={this.onChangeName}
                />
              </div>
            </div>
          </fieldset>
        </form>
        <form className="form-horizontal">
          <fieldset>
            <div className="form-group">
              <label className="col-md-4 control-label">PRICE</label>
              <div className="col-md-4">
                <input
                  name="product_id"
                  placeholder="price"
                  className="form-control input-md"
                  required=""
                  type="text"
                  value={this.state.price}
                  onChange={this.onChangePrice}
                />
              </div>
            </div>
          </fieldset>
        </form>
        <div className="form-group">
          <label className="col-md-4 control-label">PRODUCT DESCRIPTION</label>
          <div className="col-md-4">
            <input
              className="form-control"
              name="product_description"
              value={this.state.Description}
              onChange={this.onChangeDescription}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-md-4 control-label" for="filebutton">
            PRODUCT IMAGE
          </label>
          <div className="col-md-4">
            <input
              name="product image"
              className="input-file"
              type="file"
              value={this.state.productPicture}
              onChange={this.onChangeProductPicture}
            />
          </div>
        </div>
        <button
          style={{ width: "100px" }}
          className="btn btn-primary"
          onClick={this.AddProduct}
        >
          add
        </button>
      </div>
    );
  }
}

export default withRouter(AddProduct);
