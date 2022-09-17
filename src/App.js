import React, { useState } from 'react';
import AddUser from './Component/User/AddUser';
import UserList from './Component/User/UserList';


function App() {
  const [users, setUsers] = useState([]);
  const userHandler=(enteredUserName,enteredAge )=>{
    setUsers((prevState)=>{
      return[...prevState, {userName: enteredUserName, age : enteredAge, id : Math.random.toString()}]
    })
  }
  console.log(users);
  return (
    <div>
    <AddUser userHandler ={userHandler}/>
    <UserList users ={users}/>
    </div>
  );
}

export default App;
