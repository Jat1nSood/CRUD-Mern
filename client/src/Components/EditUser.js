import { styled, FormControl, FormGroup, Input, InputLabel, Typography, Button } from '@mui/material'
import {React, useEffect, useState} from 'react'
import { getUser,  editUser } from '../services/api'
import {useNavigate, useParams} from 'react-router-dom'
import { rootShouldForwardProp } from '@mui/material/styles/styled';

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
    username : "",
    email : "",
    phone : "",
}

export default function EditUser() {



    const[user, setUser] = useState(defaultValue);


    
    const navigate = useNavigate();
    
    const {id} = useParams();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() =>{
        const response  = await getUser(id);
        console.log(response.data)
        setUser(response.data);
    }

    

    const onValueChange = (e) =>{
        setUser({...user, [e.target.name] : e.target.value});
        
    }

    const editUserDetails = async() =>{
        await editUser(user, id);
        navigate('/all')
    }

    


  return (
    <div>
      <Container>
        <Heading variant='h4'>Edit User</Heading>

        <FormControl>
            <InputLabel>Name</InputLabel>
            <InputFeild onChange={(e) => onValueChange(e)} name='name'  />
        </FormControl>
        
        
        <FormControl>
            <InputLabel>UserName</InputLabel>
            <InputFeild onChange={(e) => onValueChange(e)} name='username'  />
        </FormControl>

        <FormControl>
            <InputLabel>Email</InputLabel>
            <InputFeild onChange={(e) => onValueChange(e)} name='email' />
        </FormControl>

        <FormControl>
            <InputLabel>Phone</InputLabel>
            <InputFeild onChange={(e) => onValueChange(e)} name='phone'  />
        </FormControl>

        <FormControl>
            <Btn variant='contained' onClick={() => editUserDetails()}>Update</Btn>
        </FormControl>
      </Container>
    </div>
  )
}