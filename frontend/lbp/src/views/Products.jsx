import React from "react";
// import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Produitcard from "../components/Produitcard";
import { Link } from "react-router-dom";

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3002/products`)
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
              <Link to={`/product/${product._id}`}>
                <Produitcard
                  productPicture={product.productPicture}
                  name={product.name}
                  Description={product.Description}
                  price={product.price}
                ></Produitcard>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Products;
