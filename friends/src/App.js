import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => this.setState({ friends: response.data }))
      .catch(err => console.log(err));
  }

  render() {
    const { friends } = this.state;
    return (
      <div className="friends-wrapper">
        <FriendsList friends={friends} />
      </div>
    );
  }
}

export default App;
