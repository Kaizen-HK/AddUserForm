import React, { useState } from "react";
import Card from "../UI/Card";
import './AddUser.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
function AddUser (props)
{
    const [enteredUserName, setEnternedUserName]=useState('');
    const [enteredAge, setEnteredAge] = useState(0);
    const [isValid, setIsValid] =  useState(true);
    const [error, setError] = useState();
    const AddUserHandler =(event)=>{
    event.preventDefault();
    if(enteredUserName.trim().length === 0 || enteredAge<1)
    {
     setIsValid(false);
     setError(
        {
         title : "Invalid Input", 
         message : "Please enter a valid Name and Age (non-empty values)."
        }
     )
     return;
    }
    console.log(enteredAge, enteredUserName);
    props.userHandler(enteredUserName, enteredAge);
    setEnteredAge('');
    setEnternedUserName('');
    }
    const userNameHandler=(event)=>{
        setEnternedUserName(event.target.value);
    }
    const ageHandler=(event)=>{
        setEnteredAge(event.target.value);
    }
    const errorHandler =() =>{
        setError(null);
    }
return(
    <>
    {error && <ErrorModal title ={error.title} message = {error.message} onConfirm={errorHandler}/>}
    <Card className="input">
    <form onSubmit={AddUserHandler} >
        <label htmlFor="userName" >UserName</label>
        <input type ="text" id="userName" onChange={userNameHandler} value ={enteredUserName}/>
        <label htmlFor="age">Age(Years)</label>
        <input type="number" id= "age" onChange={ageHandler} value ={enteredAge}/>
        <Button type="submit" >Add User</Button>
    </form>
    </Card>
    </>
)
}
export default AddUser;