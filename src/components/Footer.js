import React from "react";

const Footer = () => {
  return (
    <footer class="page-footer teal darken-2">
      <div className="container hide-on-med-and-down">
        <div className="row">
          This app uses free GitHub API for retrieving the user data. We don't
          use cookies, so you don't have to accept anything! Also there isn't a
          privacy policy or something like that.
        </div>
      </div>
      <div class="footer-copyright teal darken-4">
        <div class="container">
          Developed by JamCry © 2019
          <a class="grey-text text-lighten-4 right" href="https://cemkiray.com" target="_blank" rel="noopener noreferrer">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
