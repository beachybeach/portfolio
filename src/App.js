import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Resume from './components/Resume';

const App = () => {
  const [currentPage, handlePageChange] = useState("About");

  const displayPage = () => {
    switch (currentPage) {
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  }
  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
        {displayPage()}

      </main>
      <Footer />
    </div>
  );
}

export default App;

/* const App = () => {
  return (
    <div>
      <Nav />
      <main>
        <About />
        <Portfolio />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
} */