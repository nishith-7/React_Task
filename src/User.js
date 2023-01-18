import React from "react";
import users from "./userData.json"

function User(props) {
        const temp = users.filter(user => {
                return user.index === Number(props.index);
              });
return(
<div className="container">
        <div className="row">
        <strong> Name: </strong>
        {temp[0].name}
        <br></br>
        <br></br>
        <strong>Company: </strong>
        {temp[0].company}
        <br></br>
        <br></br>
       
        <strong>Email: </strong>
        {temp[0].email}
        <br></br>
        <br></br>
       
        <strong>More Info: </strong>
        {temp[0].about}
        
        </div>
</div>
)
}

export default User;