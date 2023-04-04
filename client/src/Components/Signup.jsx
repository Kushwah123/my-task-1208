import {Dialog, Box, TextField, Typography, Button,styled} from "@mui/material"; 
import axios from 'axios';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
 

const LoginButton = styled(Button)`
text-transform: none;
background: #FB641B;
color: #fff;
height: 48px;
border-radius: 2px;
`
const Wrapper = styled(Box)`
width: 500px;
margin-left: 350px;
display: flex;
flex-direction: column;
padding:25px 35px;
flex: 1;
& > div, & > Button, p {
 margin-top: 8px;
}
`

// const signupIntitialvalue = {
//    firstname: "",
//    lastname: "",
//    username: "",
//    email: "",
//    password: "",
//    phone: ""
//   }
 const Signup = () => {
         


let navigate = useNavigate();
// const [signup, setSignup] = useState(signupIntitialvalue)
// const toggleSignup = ()=> {
//    toggleAccount(accountIntitialvalue.signup)
// }

// const onInputChange = (e)=> {

// setSignup({...signup, [e.target.name]: e.target.value});  
          
// }
// const signupUser = async () => {
// await authenticatessignup(signup);
// if(!Response) return;
// hendleclose();
// setAccount(signup.firstname);
// }
const [user, setUser] = useState({
 name: "",
 username: "",
 email: "",  
 mob: "",
 password: ""
});

const { name, username, email, mob, password } = user;
const onInputChange = e => {
 setUser({ ...user, [e.target.name]: e.target.value });
 
};

const onSubmit = async e => {
 console.log(user)
 e.preventDefault();
 const result = await axios.post("http://localhost:4000", user);
 navigate("/");
};
 
 return ( 
 <Wrapper>
    <TextField variant="standard" onChange={e => onInputChange(e)} value ={name} name ='name'  label="Enter Your Name" />
    <TextField variant="standard" onChange={e => onInputChange(e)} value = {username} name ='username' label="Enter User Name" />
    <TextField variant="standard" onChange={e => onInputChange(e)} value = {email} name ='email' label="Enter Email" />
    <TextField variant="standard" onChange={e => onInputChange(e)} value = {password} name ='password' label="Enter Password" />
    <TextField variant="standard" onChange={e => onInputChange(e)} value = {mob} name ='mob' label="Enter Phone" />
    <LoginButton onClick={onSubmit}>Signup</LoginButton>
  </Wrapper> 
)
}

export default Signup;