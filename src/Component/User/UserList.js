import React  from "react";
import Card from "../UI/Card";
import './UserList.css';
 function UserList (props){
    return(
      <Card className= "users">
       <ul>{props.users.map((user)=>{
        return <li key = {user.id}>
                {user.userName} ({user.age} Years Old)
        </li>
       })}</ul>
       </Card>
    )
 }
 export default UserList;