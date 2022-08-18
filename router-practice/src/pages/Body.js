// import Nav from "../components/Nav";
// import Footer from "../components/Footer";
// import "./App.font.css";
import React from 'react';

function Body({ children }) {
  return (
    <>
      {/* <Nav className={styles.nav} /> */}
      <div>{children}</div>
      {/* <Footer className={styles.footer} /> */}
    </>
  );
}

export default Body;
