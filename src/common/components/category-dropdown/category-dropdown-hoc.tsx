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
  id: number;
  name: string;
  isDataFetched: boolean;
  categoryList: Array<Category>;
};


interface IProps extends WithStyles<typeof useStyles> {
  onCategoryChange: (event: any) => void;
}

interface Category {
  id: number;
  name: string;
  description: string;
}

class CategoryDropdown extends React.Component<IProps, State> {
  constructor(prop: IProps) {
    super(prop);
    this.state = {
      id: 0,
      name: "Select Category",
      isDataFetched: false,
      categoryList: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: any) {
    

    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
    event.target.name = "catgoryId";
    this.props.onCategoryChange(event);
  }

  componentDidMount() {
    fetch("https://localhost:44305/api/categories/")
      .then(response => response.json())
      .then(
        result => {
          this.setState({
            isDataFetched: true,
            categoryList: result
          });
        },
        error => {}
      );
  }

  render() {
    const { id, name, categoryList } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl
          //className={classes.formControl}
          fullWidth
        >
          <InputLabel shrink htmlFor="age-native-label-placeholder">
            Category
          </InputLabel>
          <NativeSelect
            name="id"
            value={id}
            onChange={this.handleChange}
            // input={<Input name="age" id="age-native-label-placeholder" />}
          >
            <option value="">None</option>
            if(isDataFetched)
            {categoryList.map(category => {
              return (
                <option key={category.id.toString()} value={category.id}>
                  {category.name}
                </option>
              );
            })}
          </NativeSelect>
          <FormHelperText>Select category for the product</FormHelperText>
        </FormControl>
      </div>
    );
  }
}

export default withStyles(useStyles)(CategoryDropdown);

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
