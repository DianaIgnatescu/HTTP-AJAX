import React from 'react';

const FriendForm = (props) => {
  return(
    <div className="form-container">
      <h2>Add a New Friend</h2>
      <form className="friends-form" onSubmit={props.addNewFriend}>
        <input
          name="name"
          type="text" 
          placeholder="Name..."
          onChange={props.handleChange}
        />
        <input
          name="age"
          type="text"  
          placeholder="Age..."
          onChange={props.handleChange}
        />
        <input 
          name="email"
          type="text" 
          placeholder="Email..."
          onChange={props.handleChange}
        />
        <button onClick={() => props.addNewFriend}>Add Friend</button>
      </form>
    </div>
  );
}

export default FriendForm;