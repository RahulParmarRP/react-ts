import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ProductListTable from "../../common/components/product-list-table/product-list-table";
// import {
//   makeStyles,
//   Theme,
//   createStyles,
//   fade
// } from "@material-ui/core/styles";
import Data from "../../common/interfaces/product";
import Grid from "@material-ui/core/Grid";
import ProductForm from "../../common/components/product-form/product-form";
//const drawerWidth = 240;

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       display: "flex"
//     },
//     grow: {
//       flexGrow: 1
//     },
//     drawer: {
//       [theme.breakpoints.up("sm")]: {
//         width: drawerWidth,
//         flexShrink: 0
//       }
//     },
//     appBar: {
//       marginLeft: drawerWidth,
//       [theme.breakpoints.up("sm")]: {
//         width: `calc(100% - ${drawerWidth}px)`
//       }
//     },
//     search: {
//       position: "relative",
//       borderRadius: theme.shape.borderRadius,
//       backgroundColor: fade(theme.palette.common.white, 0.15),
//       "&:hover": {
//         backgroundColor: fade(theme.palette.common.white, 0.25)
//       },
//       marginRight: theme.spacing(2),
//       marginLeft: 0,
//       width: "100%",
//       [theme.breakpoints.up("sm")]: {
//         marginLeft: theme.spacing(3),
//         width: "auto"
//       }
//     },
//     searchIcon: {
//       width: theme.spacing(7),
//       height: "100%",
//       position: "absolute",
//       pointerEvents: "none",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center"
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//       [theme.breakpoints.up("sm")]: {
//         display: "none"
//       }
//     },
//     toolbar: theme.mixins.toolbar,
//     drawerPaper: {
//       width: drawerWidth
//     },
//     content: {
//       flexGrow: 1,
//       padding: theme.spacing(3)
//     },
//     inputRoot: {
//       color: "inherit"
//     },
//     inputInput: {
//       padding: theme.spacing(1, 1, 1, 7),
//       transition: theme.transitions.create("width"),
//       width: "100%",
//       [theme.breakpoints.up("md")]: {
//         width: 200
//       }
//     },
//     sectionDesktop: {
//       display: "none",
//       [theme.breakpoints.up("md")]: {
//         display: "flex"
//       }
//     },
//     sectionMobile: {
//       display: "flex",
//       [theme.breakpoints.up("md")]: {
//         display: "none"
//       }
//     }
//   })
// );
// interface Data {
//   id: number;
//   name: string;
//   description: string;
//   image: string;
//   price: number;
// }

var productsList: Data[] = [];

class MainContent extends React.Component {
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam.
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <ProductListTable items={this.state.products} />
          </Grid>
          <Grid item xs={6}>
            <Grid container>
              <ProductForm />
            </Grid>
          </Grid>
        </Grid>
        <ProductListTable items={this.state.products} />
      </Container>
    );
  }
}

export default MainContent;
