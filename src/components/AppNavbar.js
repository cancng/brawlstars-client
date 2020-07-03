import React from 'react';
import { Dropdown, Icon, Navbar } from 'react-materialize';
import { NavLink } from 'react-router-dom';

const AppNavbar = () => {
  return (
    <div>
      <Navbar
        id='mobile-nav'
        menuIcon={<Icon>menu</Icon>}
        centerChildren
        brand={
          <NavLink to='/' className='brand-logo'>
            <Icon>star</Icon> Brawler
          </NavLink>
        }
        alignLinks='right'
        options={{
          draggable: true,
          edge: 'left',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true,
        }}
        className='blue-grey'
      >
        {/*<NavItem href='clubs'>Search Club</NavItem>*/}
        <NavLink to='clubs'>Search Club</NavLink>
        <Dropdown
          id="ranking_dropdown"
          options={{
            alignment: 'left',
            autoTrigger: true,
            closeOnClick: true,
            constrainWidth: true,
            container: null,
            coverTrigger: true,
            hover: false,
            inDuration: 150,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 250
          }}
          trigger={<a href="#!">Rankings{' '}<Icon right>arrow_drop_down</Icon></a>}
        >
          <NavLink to='bestplayers'>Players</NavLink>
          <NavLink to='bestclubs'>Clubs</NavLink>
        </Dropdown>
        {/*<NavItem href='components'>Components</NavItem>*/}
      </Navbar>
    </div>
  );
};

export default AppNavbar;
