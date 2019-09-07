import React from 'react';

const UserCard = (props) => {
  return (
    <div className="card blue-grey darken-2">
      <div className="card-content white-text">
        <div className="row">
          <div className="col m3">
            <img className="rounded" width="100%" src={props.data.avatar_url} alt="avatar"/>
          </div>
          <div className="col m9">
            <span className="card-title">{props.data.login}</span>
            <p>{props.data.bio}</p>
            <span className="badge blue white-text">{props.data.public_repos} Public Repos</span>
            <div className="card-action">
              <a href={props.data.html_url}>SEE ON GITHUB</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
 
export default UserCard;