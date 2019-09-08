import React from "react";

const UserCard = props => {
  return (
    <>
      {props.data.message ? (
        <div className="card-panel red darken-1 valign-wrapper" style={{padding:"1rem"}}>
          <div className="row" style={{margin:0}}>
            <div className="col valign-wrapper">
              <span className="white-text">
                <i className="material-icons medium">warning</i>
              </span>
            </div>
            <div className="col white-text valign-wrapper">
              <p style={{fontSize:"1.3rem"}}>We couldn't find a user with that username.</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="card blue-grey darken-2">
          <div className="card-content white-text">
            <div className="row">
              <div className="col m3">
                <img
                  className="rounded"
                  width="100%"
                  src={props.data.avatar_url}
                  alt="avatar"
                />
              </div>
              <div className="col m9">
                <span className="card-title">{props.data.login}</span>
                <p>{props.data.bio}</p>
                <span className="badge blue white-text">
                  {props.data.public_repos} Public Repos
                </span>
                <div className="card-action">
                  <a href={props.data.html_url}>SEE ON GITHUB</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserCard;
