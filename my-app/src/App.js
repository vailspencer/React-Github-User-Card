import React from 'react';
import UserCard from './components/UserCard.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: [],
      avatar: [],
      location: [],
      bio: [],
      public_repos: []
    };
  }


componentMount() {
  fetch('https://api.github.com/users/vailspencer')
  .then(res => res.json())
  .then(userData => {
    console.log('User Data', userData);
    this.setState({name: userData.name});
    this.setState({avatar: userData.avatar_url });
    this.setState({location: userData.location })
    this.setState({bio: userData.bio})
    this.setState({public_repos: userData.public_repos })
  })
  .catch(err => console.log(err));
}

render() {
  return(
  <div>
    <UserCard 
    name = {this.state.name}
    avatar ={this.state.avatar}
    location ={this.state.location}
    bio = {this.state.bio}
    public_repos ={this.state.public_repos}
    />
  </div>
    )
  }
}



export default App;
