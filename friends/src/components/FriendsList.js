import React from 'react';

const FriendsList = (props) => {
  return(
    <div className="friends-list-container">
      <h1>List of Friends</h1>
      {props.friends.map(friend => {
      return (
        <div className="friend">
          <p>Name: {friend.name}</p>
          <p>Age: {friend.age}</p>
          <p>Email: <a href="#">{friend.email}</a></p>
        </div>
      )
    })}
    </div>
    
  )
}

export default FriendsList;