import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import { withStyles, WithStyles } from "@material-ui/styles";

//const useStyles = (theme: Theme) =>
const useStyles = createStyles({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: 8,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: 16
  }
});


type State = {
  age: string | number;
  name: string;
};

export interface IProps extends WithStyles<typeof useStyles> {}
//export interface IProps extends WithStyles<typeof styles> { }

class CategoryDropdown extends React.Component<IProps, State> {
  constructor(prop: Readonly<IProps>) {
    super(prop);
    this.state = {
      age: "",
      name: "Select Category"
    };

    this.handleChange = this.handleChange.bind(this);
  }

  // static propTypes: { classes: PropTypes.Validator<object> };

  handleChange(event: any) {
    debugger;
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
    }

  render() {
    const { age, name } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="age-native-label-placeholder">
            Category
          </InputLabel>
          <NativeSelect
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
            // input={<Input name="age" id="age-native-label-placeholder" />}
          >
            <option value="">None</option>
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </NativeSelect>

          <FormHelperText>Select category for the product</FormHelperText>
        </FormControl>
      </div>
    );
  }
}


export default withStyles(useStyles)(CategoryDropdown);
//export default withStyles(styles)(CategoryDropdown);

// const styles = (theme: Theme) => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap"
//   },
//   formControl: {
//     margin: theme.spacing(2),
//     minWidth: 120
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(8) * 2
//   }
// });
