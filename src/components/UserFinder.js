import React, { Component } from "react";
import SearchBar from "./SearchBar";
import UserCard from "./UserCard";

class UserFinder extends Component {
  state = {
    data: "",
    isSearching: false
  };
  searchUser = username => {
    console.log("search user called");
    this.setState({ isSearching: true });
    fetch(`https://api.github.com/users/${username}`)
      .then(resp => resp.json())
      .then(resJson => this.setState({ data: resJson, isSearching: false }));
  };
  render() {
    return (
      <>
        <SearchBar handleSubmit={this.searchUser} />

        {!this.state.data && !this.state.isSearching &&
          <div className="container center">
            <i className="material-icons large">recent_actors</i>
            <h1 style={{margin:0}}>Welcome</h1>
            <h4 style={{margin:0}}>to Git Finder</h4>
            <p>Enter a username to search and start exploring!</p>
          </div>
        }
        {this.state.isSearching && (
          <div class="progress">
            <div class="indeterminate"></div>
          </div>
        )}
        {this.state.data !== "" && !this.state.isSearching && (
          <UserCard data={this.state.data} />
        )}
      </>
    );
  }
}

export default UserFinder;
