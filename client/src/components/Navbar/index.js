import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';



export default (props) => (
  <Menu widths={5}>
    { props.isLoggedIn ? null : <Menu.Item as={Link} to='/' content='Sign Up'/> }
    <Menu.Item as={Link} content='Chat' to='/chat'/>
    { props.isLoggedIn ? <Menu.Item as={Link} to='/signout' content='Sign Out'/> : <Menu.Item as={Link} to='/signin' content='Sign In'/>}
  </Menu>
);
