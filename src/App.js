import React from 'react';
import './css/App.css';
import Heading from './components/headings/heading';
import MainPage from './components/main/maincontent';
import Footer from './components/nav/footer';

function App() {
  return (
    <div>
      <Heading />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
