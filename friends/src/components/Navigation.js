import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigation-wrapper">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/add-friend">Add Friend</NavLink>
    </div>
  )
}

export default Navigation;