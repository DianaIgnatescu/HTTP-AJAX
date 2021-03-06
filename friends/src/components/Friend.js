import React from 'react';

const Friend = (props) => {
  const { name, age, id, email, alias, deleteFriend, makeEditable} = props;
  return (
    <div className="friend-container" key={id}>
      <div className="details">
        <p><span>Name:</span>{name}</p>
        <p><span>Age:</span>{age}</p>
        <p><span>Email:</span><a href={email}>{email}</a></p>
        <p><span>Alias:</span>{alias}</p>
      </div>
      <div className="requests">
        <button className="update" onClick={(e) => {makeEditable(id)}}>Update</button>
        <button className="delete" onClick={(e) => {deleteFriend(e, id)}}>Delete</button>
      </div>
    </div>
  )
}

export default Friend;