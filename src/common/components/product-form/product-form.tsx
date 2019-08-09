import React from "react";
import TextField from "@material-ui/core/TextField";
// import PropTypes from "prop-types";
// import { Theme } from "@material-ui/core";
// import { withStyles, WithStyles, createStyles } from "@material-ui/styles";
import "./product-form.css";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import Paper from "@material-ui/core/Paper";
import Data from "../../interfaces/product";
// const styles = (theme:Theme) => ({
//   root: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 100,
//     padding: '0 30px',
//   },
// });
// const styles = {
//   root: {
//     background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//     border: 0,
//     borderRadius: 3,
//     boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
//     color: "white",
//     height: 48,
//     padding: "0 30px"
//   },
//   container: {
//     display: "flex",
//     flexWrap: "wrap"
//   }
// };

// interface styleProps{
//     classes:  typeof styles
// }

class ProductForm extends React.Component<{}, Data> {
  constructor(prop: Readonly<{}>) {
    super(prop);
    this.state = {
      id: 0,
      image: "",
      name: "",
      description: "",
      price: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  // static propTypes: { classes: PropTypes.Validator<object> };

  handleInputChange(event: any) {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  }

  onSubmit(event: any) {

    // fetch("https://localhost:44305/api/products/", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   },

    //   //make sure to serialize your JSON body
    //   body: JSON.stringify(this.state)
    // })
    //   .then(response => response.json())
    //   .then(result => {}, error => {});

    fetch("https://localhost:44305/api/products/", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(this.state)
    })
      .then(response => response.json())
      .then(
        result => {
          debugger;
          console.log("success");
        },
        error => {
          console.log(error);
        }
      );

    //   axios({
    //     method: "post",
    //     url: "myurl",
    //     data: this.state,
    //     config: { headers: { "Content-Type": "multipart/form-data" } }
    //   })
    //     .then(function(response) {
    //       //handle success
    //       console.log(response);
    //     })
    //     .catch(function(response) {
    //       //handle error
    //       console.log(response);
    //     });

  }

  render() {
    return (
      <Paper style={{ padding: 5, margin: 20 }}>
        <form className="container" autoComplete="off" onSubmit={this.onSubmit}>
          <TextField
            id="standard-full-width"
            label="Product Name"
            style={{ margin: 8 }}
            name="name"
            // placeholder="Product Name"
            // helperText="Full width!"
            fullWidth
            margin="normal"
            onChange={this.handleInputChange}
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            id="standard-full-width"
            style={{ margin: 8 }}
            label="Price"
            fullWidth
            name="price"
            margin="normal"
            onChange={this.handleInputChange}
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            id="standard-multiline-static"
            label="Description"
            multiline
            rows="4"
            name="description"
            onChange={this.handleInputChange}
            fullWidth
            style={{ margin: 8 }}
            margin="normal"
          />
          <div>
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={{ margin: 8 }}
              type="submit"
            >
              <SaveIcon
              // className={clsx(classes.leftIcon, classes.iconSmall)}
              />
              Save
            </Button>
          </div>
        </form>
      </Paper>
    );
  }
}
//export default withStyles(styles)(HigherOrderComponent);
export default ProductForm;
