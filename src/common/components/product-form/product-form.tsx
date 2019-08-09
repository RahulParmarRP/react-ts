import React, { CSSProperties } from "react";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import { Theme } from "@material-ui/core";
import { withStyles, WithStyles, createStyles } from "@material-ui/styles";
import "./product-form.css";

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

class ProductForm extends React.Component {
  // static propTypes: { classes: PropTypes.Validator<object> };

  render() {
    return (
      <form className="container" autoComplete="off">
        <TextField
          id="standard-full-width"
          label="Product Name"
          style={{ margin: 8 }}
          // placeholder="Product Name"
          // helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          label="Price"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          id="standard-multiline-static"
          label="Description"
          multiline
          rows="4"
          fullWidth
          style={{ margin: 8 }}
          margin="normal"
        />
      </form>
    );
  }
}
//export default withStyles(styles)(HigherOrderComponent);
export default ProductForm;
