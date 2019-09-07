import React, { Component } from 'react';
import SearchBar from './SearchBar';
import UserCard from './UserCard';

class UserFinder extends Component {
  state = {
    data: "",
    isSearching: false,
  }
  searchUser = (username) => {
    console.log("search user called")
    this.setState({ isSearching: true });
    fetch(`https://api.github.com/users/${username}`)
      .then(resp => resp.json())
      .then(resJson => this.setState({data: resJson, isSearching: false}));
  }
  render() { 
    return (
      <>
        <SearchBar handleSubmit={this.searchUser} />

        { this.state.isSearching &&   <div class="progress">
      <div class="indeterminate"></div>
  </div>}
        { this.state.data !== "" && !this.state.isSearching && 
        <UserCard data={this.state.data} />
        }
      </>
    );
  }
}
 
export default UserFinder;