import React from 'react';

const Friend = (props) => {
  const { name, age, id, email, deleteFriend, makeEditable} = props;
  return (
    <div className="friend-container" key={id}>
      <div className="details">
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Email: <a href={email}>{email}</a></p>
      </div>
      <div className="requests">
        <button className="update" onClick={(e) => {makeEditable(id)}}>Update</button>
        <button className="delete" onClick={(e) => {deleteFriend(e, id)}}>Delete</button>
      </div>
    </div>
  )
}

export default Friend;