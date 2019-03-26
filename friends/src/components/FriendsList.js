import React from 'react';
import Friend from './Friend';
import FriendEditable from './FriendEditable';

const FriendsList = (props) => {
  return(
    <div className="friends-list-container">
      <h2>List of Friends</h2>
      {props.friends.map(friend => {
        if (friend.isEditable) {
          return (
            <FriendEditable
              key={friend.id}
              name={friend.name}
              age={friend.age}
              id={friend.id}
              email={friend.email}
              alias={friend.alias}
              updateFriend={props.updateFriend}
              handleUpdateChange={props.handleUpdateChange}
              makeUneditable={props.makeUneditable}
            />);
        }
        return (
          <Friend
            name={friend.name}
            age={friend.age}
            id={friend.id}
            key={friend.id}
            email={friend.email}
            alias={friend.alias}
            deleteFriend={props.deleteFriend}
            makeEditable={props.makeEditable}
          />
        );
      })}
    </div>
    
  )
}

export default FriendsList;