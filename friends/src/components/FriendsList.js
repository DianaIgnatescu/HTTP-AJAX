import React from 'react';

const FriendsList = (props) => {
  return(
    <div className="friends-list-container">
      <h2>List of Friends</h2>
      {props.friends.map(friend => {
      return (
        <div className="friend-container" key={friend.id}>
          <div className="details">
            <p>Name: {friend.name}</p>
            <p>Age: {friend.age}</p>
            <p>Email: <a href="#">{friend.email}</a></p>
          </div>
          <div className="requests">
            <button className="update">Update</button>
            <button className="delete" onClick={(e) => {props.deleteFriend(e,friend.id)}}>Delete</button>
          </div>
        </div>
      )
    })}
    </div>
    
  )
}

export default FriendsList;