import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
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

  getNextId = () => String(Date.now());

  getFriends() {
    axios.get('http://localhost:5000/friends')
    .then(response => {
      this.setState({ friends: response.data });
  })
    .catch(err => console.log(err));
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

  addNewFriend = (e) => {
    e.preventDefault();
    console.log(this.state.friendFormData);
    axios.post('http://localhost:5000/friends', this.state.friendFormData)
      .then((response) => {
        this.setState({ friends: response.data });
        this.resetForm();
      })
      .catch(err => console.log(err));
  };

  deleteFriend = (e, friendId) => {
    e.preventDefault();
    axios.delete(`http://localhost:5000/friends/${friendId}`)
      .then(response => {
        this.resetForm();
        this.setState({ friends: response.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { friends } = this.state;
    return (
      <div className="friends-wrapper">
        <FriendForm handleChange={this.handleChange} addNewFriend={this.addNewFriend} />
        <FriendsList friends={friends} deleteFriend={this.deleteFriend} />
      </div>
    );
  }
}

export default App;
