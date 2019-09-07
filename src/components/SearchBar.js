import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    username: "",
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state.username);
  }

  render() { 
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="input-field col s12 m9 l9">
            <i class="material-icons prefix">account_circle</i>
            <input type="text" name="username" placeholder="Enter username" value={this.state.username} onChange={this.handleChange} />
          </div>
          <div className="input-field col s12 m3 l3 w-auto">
          <button className="waves-effect waves-light btn" style={{width:"100%"}}><i class="material-icons left">search</i>search</button>
          </div>
        </div>
      </form>
    );
  }
}
 
export default SearchBar;