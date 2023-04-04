import {Dialog, Box, TextField, Typography, Button,styled} from "@mui/material"; 
import axios from "axios";
import { useState } from "react";
import { useNavigate} from "react-router-dom";



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
margin-top: 120px;
display: flex;
flex-direction: column;
padding:25px 35px;
flex: 1;
& > div, & > Button, p {
 margin-top: 25px;
}
`

 
 const Login = () => {
         

let navigate = useNavigate();
const [user, setUser] = useState({
 email: "",  
 password: ""
});

const {  email,  password } = user;
const onInputChange = e => {
 setUser({ ...user, [e.target.name]: e.target.value });
 
};

const onSubmit = async e => {
 
 e.preventDefault();
const result = await axios.post("http://localhost:4000/login", user);
console.log(user)
console.log(result.data)
if(result.data === email) {
  navigate("/Dashboard");
}else{
    alert('invalide email and password')
}

};
 
 return ( 
 <Wrapper>
  <TextField variant="standard" onChange={e => onInputChange(e)} value={email}name ='email' label="Enter Your Email" />
  <TextField variant="standard" onChange={e => onInputChange(e)} value={password} name ='password' label="Enter User Password" />
                  
                   <LoginButton 
                   onClick={onSubmit}
                   >Login</LoginButton>
  </Wrapper> 
)
}

export default Login;