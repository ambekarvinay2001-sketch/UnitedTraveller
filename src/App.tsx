import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import HotDeals from './components/HotDeals';
import BestTimeToBook from './components/BestTimeToBook';
import PopularDestinations from './components/PopularDestinations';
import Features from './components/Features';
import AppDownload from './components/AppDownload';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SearchBar />
      <HotDeals />
      <BestTimeToBook />
      <PopularDestinations />
      <Features />
      <AppDownload />
      <Footer />
    </div>
  );
}

export default App;
