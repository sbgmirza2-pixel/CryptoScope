import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-900 to-indigo-500 p-6 text-center rounded-b-lg shadow-md">
      <h1 className="text-white text-3xl font-bold">CryptoPulse</h1>
      <p className="text-purple-200 mt-1">Live Crypto Price Tracker</p>
    </header>
  );
};

export default Header;