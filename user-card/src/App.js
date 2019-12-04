import React from 'react';
import axios from 'axios';
import './App.css';

import UserCard from './components/UserCard';
class App extends React.Component {
  state = {
    user: []
  }

  componentDidMount() {

    axios.get('https://api.github.com/users/arianashackelford')
    .then(response => {
      console.log(response)
      this.setState({ user: response.data });
    });

  }
  render(){
    return (
      <div className="App">
      <h1>Github User Cards</h1>
      <UserCard user={user}/>
      </div>
    );
  }
}

export default App;
