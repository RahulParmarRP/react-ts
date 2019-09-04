import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ListItemText from "@material-ui/core/ListItemText";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles
} from "@material-ui/core/styles";

const drawerDesktopViewMinWidth = 240;

const drawerStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerDesktopViewMinWidth
    }
  })
);

var classes = drawerStyles();

const drawer = (
  <div>
    <div className={classes.toolbar} />
    <List>
      {["Products", "Categories", "Cart", "Contact", "About"].map(
        (text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        )
      )}
    </List>
  </div>
);

export default drawer;