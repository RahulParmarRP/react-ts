import React from "react";
import { MenuItem, InputBase } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";

type Props = {};
type State = {
  anchorEl: null | HTMLElement;
};

const menuId = "primary-search-account-menu";
class CartMenu extends React.Component<{}, State> {
  State = {
    anchorEl: null
  };

  isMenuOpen = Boolean(this.state.anchorEl);

  handleMenuClose() {}

  render() {
    return (
      <Menu
        anchorEl={this.state.anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={this.isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );
  }
}

// const renderMenu = (
//   <Menu
//     anchorEl={anchorEl}
//     anchorOrigin={{ vertical: "top", horizontal: "right" }}
//     id={menuId}
//     keepMounted
//     transformOrigin={{ vertical: "top", horizontal: "right" }}
//     open={isMenuOpen}
//     onClose={handleMenuClose}
//   >
//     <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//     <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//   </Menu>
// );
