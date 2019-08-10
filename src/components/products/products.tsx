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
import ProductCard from "../../common/components/profile-card/profile-card";
import Grid from "@material-ui/core/Grid";
//import PropTypes from "prop-types";
// import ProductForm from "../../common/components/product-form/product-form";
// import { Switch } from "react-router-dom";
// import { Router, Route, Link } from "react-router-dom";

var productsList: Data[] = [];

class Products extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    products: productsList
  };

  componentDidMount() {
    debugger;
    //fetch("http://jsonplaceholder.typicode.com/users")
    //fetch("https://localhost:44305/api/products", { mode: "no-cors" })
    fetch("https://localhost:44305/api/products/")
      .then(response => response.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            products: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    return (
      <Container>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam.
        </Typography>
        <Grid container spacing={3}>
          {this.state.products.map(product => {
            return (
              <Grid item key={product.id.toString()}>
                <ProductCard product={product} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    );
  }
}

export default Products;
