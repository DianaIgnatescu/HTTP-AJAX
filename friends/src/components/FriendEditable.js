import React from 'react';

const FriendEditable = (props) => {
  const { name, age, id, email, updateFriend, makeUneditable, handleUpdateChange } = props;
  return (
    <div className="friend-container" key={id}>
          <div className="details">
            <label>Name:</label><input 
              name="name"
              type="text" 
              placeholder={name}
              onChange={handleUpdateChange} 
            />
            <label>Age:</label><input 
              name="age"
              type="number"  
              placeholder={age}
              onChange={handleUpdateChange} 
            />
            <label>Email:</label><input 
              name="email"
              type="email"
              placeholder={email}
              onChange={handleUpdateChange} 
            />
          </div>
          <div className="requests">
            <button className="cancel" onClick={(e) => makeUneditable(id)}>Cancel</button>
            <button className="save" onClick={(e) => { updateFriend(e, id); makeUneditable(id); }}>Save</button>
          </div>
        </div>
  )
}

export default FriendEditable;