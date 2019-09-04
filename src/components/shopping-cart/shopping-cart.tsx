import React from "react";
// import IconButton from "@material-ui/core/IconButton";
// import Badge from "@material-ui/core/Badge";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import Menu from "@material-ui/core/Menu";
// import { MenuItem } from "@material-ui/core";

// type IState = {
//   productCount: number;
//   anchorEl: HTMLElement | null;
// };

// type IProps = {};

// export default class ShoppingCart extends React.Component<IProps, IState> {
//   constructor(prop: IProps) {
//     super(prop);
//     this.state = {
//       productCount: 0,
//       anchorEl: null
//     };

//     this.handleCartOpen = this.handleCartOpen.bind(this);
//     this.handleMenuClose = this.handleMenuClose.bind(this);
//   }

//   isMenuOpen = Boolean(this.state.anchorEl);
//   menuId = "primary-search-account-menu";

//   handleMenuClose() {
//     this.setState({
//       ...this.state,
//       anchorEl: null
//     });
//   }

//   handleCartOpen(event: React.MouseEvent<HTMLElement>) {
//     debugger;
//     this.setState({
//       ...this.state,
//       anchorEl: event.currentTarget
//     });
//   }

//   //   renderMenu() {
//   //     return (
//   //       <Menu
//   //         anchorEl={this.state.anchorEl}
//   //         anchorOrigin={{ vertical: "top", horizontal: "right" }}
//   //         keepMounted
//   //         transformOrigin={{
//   //           vertical: "top",
//   //           horizontal: "right"
//   //         }}
//   //         open={this.isMenuOpen}
//   //         onClose={this.handleMenuClose.bind(this)}
//   //       >
//   //         <MenuItem onClick={this.handleMenuClose.bind(this)}>Profile</MenuItem>
//   //         <MenuItem onClick={this.handleMenuClose.bind(this)}>
//   //           My account
//   //         </MenuItem>
//   //       </Menu>
//   //     );
//   // }

//   render() {
//     return (
//       <div>
//         <IconButton
//           aria-label="show 4 new mails"
//           //aria-controls={menuId}
//           aria-haspopup="true"
//           onClick={this.handleCartOpen.bind(this)}
//           color="inherit"
//         >
//           <Badge badgeContent={10} color="secondary">
//             <ShoppingCartIcon />
//           </Badge>
//         </IconButton>
//         {/* {this.renderMenu} */}
//       </div>
//     );
//   }
// }
