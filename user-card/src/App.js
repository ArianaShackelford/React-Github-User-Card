import React from 'react';
import axios from 'axios';
import './App.css';

import UserCard from './components/UserCard';
import FollowerList from './components/FollowersList';
class App extends React.Component {
  state = {
    user: [],
    followers: []
  }

  componentDidMount() {

    axios.get('https://api.github.com/users/arianashackelford')
    .then(response => {
      console.log(response)
      this.setState({ user: response.data });
    });

    axios.get('https://api.github.com/users/arianashackelford/followers')
    .then(response => {
      console.log(response)
      this.setState({ followers: response.data });
    });

  }
  render(){
    return (
      <div className="App">
      <h1>Github User Cards</h1>
      <UserCard user={this.state.user}/>
      <FollowerList followers={this.state.followers}/>
      </div>
    );
  }
}

export default App;
