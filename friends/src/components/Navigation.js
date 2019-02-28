import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigation-wrapper">
      <Link to="/">Home</Link>
      <Link to="/add-friend">Add Friend</Link>
    </div>
  )
}

export default Navigation;