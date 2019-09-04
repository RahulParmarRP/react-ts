import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
//import ProductListTable from "../../common/components/product-list-table/product-list-table";
// import {
//   makeStyles,
//   Theme,
//   createStyles,
//   fade
// } from "@material-ui/core/styles";
import Data from "../../common/interfaces/product";
import ProductCard from "../../common/components/product-card/product-card";
import Grid from "@material-ui/core/Grid";
// import ProductForm from "../../common/components/product-form/product-form";
// import { Switch } from "react-router-dom";
// import { Router, Route, Link } from "react-router-dom";

// Product Service
import { getAllProducts } from "../../services/productService";
export function addedProductList() {}

var productsList: Data[] = [];

class Products extends React.Component {
  state = {
    error: null,
    // isLoaded: false,
    products: productsList,
    addedToCartProducts: productsList
  };

  async componentDidMount() {
    // getAllProducts().then(response =>
    //   console.log("from direct call in component", response)
    // );
    debugger;
    const products = await getAllProducts();
    // debugger;
    // setTimeout(() => {
    //       this.setState({ ...this.state, products: products });
    // }, 5000);

    this.setState({ ...this.state, products: products });
    // fetch("http://jsonplaceholder.typicode.com/users")
    // fetch("https://localhost:44305/api/products", { mode: "no-cors" })
    // fetch("https://localhost:44305/api/products/")
    //   .then(response => response.json())
    //   .then(
    //     result => {
    //       ;
    //       this.setState({
    //         isLoaded: true,
    //         products: result
    //       });
    //       console.log("from prduct.tsx set state componentDidMount", result);
    //       ;
    //     },
    //     error => {
    //       this.setState({
    //         isLoaded: true,
    //         error
    //       });
    //     }
    //   );
  }
  handleAddProductToCart = (addedProduct: Data) => {
    const addedToCartProducts = [
      ...this.state.addedToCartProducts,
      addedProduct
    ];
    this.setState({
      // addedToCartProducts: [...this.state.addedToCartProducts, addedProduct]
      addedToCartProducts
    });
  };

  render() {
    debugger;
    // used alias for object destructurization
    // const { products } = this.state.products;
    const { products } = this.state;

    return (
      <Container>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam.
        </Typography>
        <Grid container spacing={3}>
          {products.map(product => {
            return (
              <Grid item key={product.id.toString()}>
                <ProductCard
                  product={product}
                  addProductToCart={this.handleAddProductToCart}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    );
  }
}

export default Products;
