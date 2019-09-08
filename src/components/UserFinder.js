import React, { Component } from "react";
import SearchBar from "./SearchBar";
import UserCard from "./UserCard";
import { userData, repoData } from "./mockData";
import HomeMessage from "./HomeMessage";
import Loader from "./Loader";


class UserFinder extends Component {
  state = {
    data: "",
    isSearching: false
  };

  searchUser = username => {
    // this.setState({ data: userData });
    this.setState({ isSearching: true });
    fetch(`https://api.github.com/users/${username}`)
      .then(resp => resp.json())
      .then(resJson => this.setState({ data: resJson, isSearching: false }));
  };

  render() {
    return (
      <>
        <SearchBar handleSubmit={this.searchUser} />
        {!this.state.data && !this.state.isSearching && (
          <HomeMessage />
        )}
        {this.state.isSearching && <Loader bar />}
        {this.state.data !== "" && !this.state.isSearching && (
          <UserCard data={this.state.data} />
        )}
      </>
    );
  }
}

export default UserFinder;
