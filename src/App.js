import React from 'react';
import UserFinder from './components/UserFinder';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <div className="container">
          <UserFinder />
        </div>
        <a
          style={{position:"absolute", right:"5%", bottom:"10%" }}
          className="pulse btn-floating btn-large waves-effect waves-light pink lighten-1"
          href="https://github.com/jamcry/react-github-user-finder"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="material-icons">favorite</i>
        </a>
      </main>
      <Footer />
    </div>
  );
}

export default App;
