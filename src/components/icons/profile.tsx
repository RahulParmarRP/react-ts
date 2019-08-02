import React from "react";
//import ReactDOM from "react-dom";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ReactDOM from "react-dom";

class  IconProfile extends React.Component {
  // constructor(parameters) {

  // }

  render() {
    return (
      <div>
        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </div>
    );
  }
}

export default IconProfile;


function renderMyProfile() {
ReactDOM.render(<IconProfile />, document.getElementById("profile-icon"));    
}