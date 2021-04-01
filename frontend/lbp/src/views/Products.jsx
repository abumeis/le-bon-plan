import React from "react";
// import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Produitcard from "../components/Produitcard";

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/products")
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          products: response,
        });
        console.log(response);
        console.log(this.state.products, "state");
      });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.products.map((product) => {
            return (
              <Produitcard
                productPicture={product.productPicture}
                name={product.name}
                Description={product.Description}
                price={product.price}
              ></Produitcard>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Products;
