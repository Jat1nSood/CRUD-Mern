

import { styled, FormControl, FormGroup, Input, InputLabel, Typography, Button } from '@mui/material'
import {React, useState} from 'react'
import { addUser } from '../services/api'
import {useNavigate} from 'react-router-dom'

const Container = styled(FormGroup)`
    width : 50%;
    
    margin : auto;
    margin-top : 120px;

`;

const Heading = styled(Typography)`
    margin-right : auto;
    margin-bottom : 20px;
`;

const InputFeild = styled(Input)`
    margin-bottom : 17px;
`;

const Btn = styled(Button)`
    width : 20%;
    margin : auto;
    margin-top: 20px;
    border-radius : 19px;
`;


const defaultValue = {
    name : "",
    username : '',
    email : '',
    phone : ''
}

export default function AddUser() {


    const navigate = useNavigate();
    const[user, setUser] = useState(defaultValue);

    const onValueChange = (e) =>{
        setUser({...user, [e.target.name] : e.target.value});
        
    }

    const addUserDetails = async() =>{
        await addUser(user);
        navigate('/all')
    }


  return (
    <div>
      <Container>
        <Heading variant='h4'>Add User</Heading>

        <FormControl>
            <InputLabel>Name</InputLabel>
            <InputFeild onChange={(e) => onValueChange(e)} name='name' />
        </FormControl>
        
        
        <FormControl>
            <InputLabel>UserName</InputLabel>
            <InputFeild onChange={(e) => onValueChange(e)} name='username' />
        </FormControl>

        <FormControl>
            <InputLabel>Email</InputLabel>
            <InputFeild onChange={(e) => onValueChange(e)} name='email'/>
        </FormControl>

        <FormControl>
            <InputLabel>Phone</InputLabel>
            <InputFeild onChange={(e) => onValueChange(e)} name='phone' />
        </FormControl>

        <FormControl>
            <Btn variant='contained' onClick={() => addUserDetails()}>Submit</Btn>
        </FormControl>
      </Container>
    </div>
  )
}
