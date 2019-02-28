import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import Navigation from './components/Navigation';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      friendFormData: {
        name: "",
        age: "",
        email: "",
        id: this.getNextId(),
      },
      updateFriendFormData: {
        name: "",
        age: "",
        email: "",
        id: 0,
      }
    };
  }

  componentDidMount() {
    this.getFriends();
  }

  handleChange = (e) => {
    this.setState({
      friendFormData: {
        ...this.state.friendFormData,
        [e.target.name]: e.target.value,
      }
    });
  };

  handleUpdateChange = (e) => {
    this.setState({
      updateFriendFormData: {
        ...this.state.updateFriendFormData,
        [e.target.name]: e.target.value,
      }
    });
  };

  getNextId = () => String(Date.now());

  getFriends() {
    axios.get('http://localhost:5000/friends')
    .then(response => {
      const friends = response.data.map(friend => ({
        id: friend.id,
        name: friend.name,
        age: friend.age,
        email: friend.email,
        isEditable: false,
      }));
      this.setState({ friends });
  })
    .catch(err => console.log(err));
  }

  makeEditable = (id) => {
    const index = this.state.friends.findIndex(friend => friend.id === id);
    const newFriends = [...this.state.friends];
    newFriends.forEach(friend => friend.isEditable = false);
    newFriends[index].isEditable = true;
    this.setState({ friends: [...newFriends], updateFriendFormData: newFriends[index] });
  }

  makeUneditable = (id) => {
    const index = this.state.friends.findIndex(friend => friend.id === id);
    const newFriends = [...this.state.friends];
    newFriends[index].isEditable = false;
    this.setState({ friends: [...newFriends], updateFriendFormData: { name: '', age: '', email: '', id: 0 }});
  } 

  resetForm = () => {
    this.setState({
      friendFormData: {
        name: "",
        age: "",
        email: "",
        id: this.getNextId(),
      }});
  };

  addNewFriend = () => {
    const { name, age, email } = this.state.friendFormData;
    if (name.length > 0 && age.length > 0 && email.length > 0) {
      axios.post('http://localhost:5000/friends', this.state.friendFormData)
        .then((response) => {
          this.getFriends();
          this.resetForm();
        })
        .catch(err => console.log(err));
    } else {
      alert('Input field must not be empty!');
    }
      
    
  };

  deleteFriend = (e, friendId) => {
    e.preventDefault();
    axios.delete(`http://localhost:5000/friends/${friendId}`)
      .then(response => {
        this.resetForm();
        this.getFriends();
      })
      .catch(err => console.log(err));
  }
  
  updateFriend = (e, friendId) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/friends/${friendId}`, this.state.updateFriendFormData)
      .then(response => {
        this.getFriends();
      })
      .catch(err => console.log(err));
  };

  render() {
    const { friends } = this.state;
    return (
      <div className="friends-wrapper">

        <Route path="/" render={(props) => <Navigation {...props} />} />
        <Route exact path="/add-friend" render={(props) => 
          <FriendForm
            {...props}
            handleChange={this.handleChange}
            addNewFriend={this.addNewFriend}
          />} 
        />
        <Route exact path="/home" render={(props) => 
          <FriendsList
          {...props}
          friends={friends}
          key={this.state.friends.id}
          handleUpdateChange={this.handleUpdateChange}
          updateFriend={this.updateFriend}
          deleteFriend={this.deleteFriend}
          makeEditable={this.makeEditable}
          makeUneditable={this.makeUneditable}
          />}
        />

        {/* <FriendForm
          handleChange={this.handleChange}
          addNewFriend={this.addNewFriend}
        /> */}
        {/* <FriendsList
          friends={friends}
          key={this.state.friends.id}
          handleUpdateChange={this.handleUpdateChange}
          updateFriend={this.updateFriend}
          deleteFriend={this.deleteFriend}
          makeEditable={this.makeEditable}
          makeUneditable={this.makeUneditable}
        />  */}
      </div>
    );
  }
}

export default App;
