import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="home-page-container">
        <h1>FAVOUR Digital</h1>
        <p id="yes"> FAVOUR Digital is a hybrid of a data-led digital marketing and a product development company. Services at ADE includes mobile, search, design, marketing, social, web, and technology. </p>
        <Link to="/users">Go to Users page</Link>
      </div>
    </>
  );
}

export default App;