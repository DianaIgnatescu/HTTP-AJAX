import React from 'react';

const clearForm = (target) => {
  target.childNodes.forEach((child) => {
    if (child.value) {
      child.value = '';
    }
  });
};

const handleSubmit = (event, addNewFriend) => {
  event.preventDefault();
  addNewFriend();
  clearForm(event.target.parentNode);
};

const FriendForm = (props) => {
  return(
    <div className="form-container">
      <h2>Add a New Friend</h2>
      <form className="friends-form">
        <input
          name="name"
          type="text"
          placeholder="Name..."
          onChange={props.handleChange}
        />
        <input
          name="age"
          type="number"  
          placeholder="Age..."
          onChange={props.handleChange}
        />
        <input 
          name="email"
          type="email" 
          placeholder="Email..."
          onChange={props.handleChange}
        />
        <input 
          name="alias"
          type="text" 
          placeholder="Alias..."
          onChange={props.handleChange}
        />

        <button
          onClick={(event) => handleSubmit(event, props.addNewFriend)}
          className="add">
          Add Friend
        </button>
      </form>
    </div>
  );
}

export default FriendForm;