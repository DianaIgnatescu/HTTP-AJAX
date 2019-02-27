import React from 'react';

const FriendForm = () => {
  return(
    <div className="form-container">
      <h2>Add a New Friend</h2>
      <form className="friends-form">
        <input placeholder="Name..."></input>
        <input placeholder="Age..."></input>
        <input placeholder="Email..."></input>
        <button>Add Friend</button>
      </form>
    </div>
  );
}

export default FriendForm;