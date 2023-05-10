import {React, useEffect, useState} from 'react'
import styled from '@emotion/styled';
import Table from '@mui/material/Table';
import { Button } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';

import { getUsers, deleteUser} from '../services/api';
export default function AllUsers() {

  const [users, setUsers] = useState([]);


  useEffect(() =>{
    getAllUsers();
  },[]);
  
  

  const getAllUsers = async() =>{
    let response = await getUsers();
    setUsers(response.data);
    

  }

  const deleteUserDetails = async(id) =>{
    await deleteUser();
    

  }

  const Container = styled(Table)`
    margin:auto;
    margin-top:70px;
    width :70%;
    
  `;

  const Cell = styled(TableCell)`

    border  : 1px solid black;
    text-align: center;
    font-size : 18px;
    font-weight: 700;
  
  `;
  const RowCell = styled(TableCell)`

  border  : 1px solid black;
  text-align: center;
  font-size : 16px;
  font-weight: 400;
  variant : contained;

`;

const DeleteBtn = styled(Button)`

  color : red;
  outline : 1px solid red;
  font-size : 16px;
  font-weight: 900;
  margin-left : 20px;


`;

const EditBtn = styled(Button)`

 
  outline : 1px solid green;
  color : green;
  font-size : 16px;
  font-weight: 900;
  

`;

  return (
    <div>
      <Container>
        
        <TableHead>
          <TableRow>
            <Cell>ID</Cell>
            <Cell>Name</Cell>
            <Cell >UserName</Cell>
            <Cell>Phone</Cell>
            <Cell>Email</Cell>
            <Cell>Edit</Cell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {
          users.map(user =>(

            <TableRow>
              <RowCell>{user._id}</RowCell>
              <RowCell>{user.name}</RowCell>
              <RowCell>{user.username}</RowCell>
              <RowCell>{user.phone}</RowCell>
              <RowCell>{user.email}</RowCell>
              <RowCell>
                <EditBtn variant="outlined" component={Link} to={`/edit/${user._id}`}>Edit</EditBtn>
                <DeleteBtn variant="outlined" onClick={() => deleteUserDetails(user._id)}>Delete</DeleteBtn>
              </RowCell>
            </TableRow>
          ))
          }
        </TableBody>
        

      </Container>
    </div>
  )
}
