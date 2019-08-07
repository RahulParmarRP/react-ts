import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";


interface contacts  {
    username: string;
}

// class ProfileInfoCard extends React.Component {
// // const ProfileInfoCard = ({ contacts }) => {
//   return (
//     <div>
//       <Card>
//         <CardContent>
//           <Typography>sjfdkksfdsdf</Typography>
//         </CardContent>
//       </Card>
//     </div>
//   )
// };

//export default ProfileInfoCard;
// const Contacts = ({ contacts }) => {
//   return (
//     <div>
//       <center>
//         <h1>Contact List</h1>
//       </center>
//       {contacts.map(contact => (
//         <div class="card">
//           <div class="card-body">
//             <h5 class="card-title">{contact.name}</h5>
//             <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
//             <p class="card-text">{contact.company.catchPhrase}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Contacts;
