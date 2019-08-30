import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      margin: theme.spacing(2)
    },
    iconHover: {
      margin: theme.spacing(2),
      "&:hover": {
        color: red[800]
      }
    }
  })
);
export default function RemoveProductButton() {
  const classes = useStyles();

  return (
    <Icon className={classes.icon} color="primary">
      remove_circle
    </Icon>
  );
}
