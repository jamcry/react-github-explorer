import React from 'react';

const Navbar = () => {
  return(
    <nav>
      <div className="nav-wrapper teal darken-3 pd3">
        <a href="" className="brand-logo"><i className="material-icons">history</i>Git Finder</a>
        <ul className="right hide-on-med-and-down">
          <li><a href="#">Home</a></li>
          <li><a href="#">Main</a></li>
          <li><a href="#">Entry</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
