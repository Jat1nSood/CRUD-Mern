import React from 'react'
import {AppBar, Toolbar, styled} from '@mui/material'
import { NavLink } from 'react-router-dom';

export default function Navbar() {

const Header = styled(AppBar)`
    background : #111111;

`;

const Tabs = styled(NavLink)`
    font-size : 20px;
    margin-right : 20px;
    color : inherit;
    text-decoration : none;
`;

  return (
    <Header position='static'>
        <Toolbar>
            <Tabs to={'/'}>Admin.com</Tabs>
            <Tabs to={'/all'}>All Users</Tabs>
            <Tabs to={'/add'}>Add User</Tabs>
        </Toolbar>

    </Header>
  )
}
