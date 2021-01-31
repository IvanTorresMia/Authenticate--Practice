import React from "react";
import Terminal from "../Components/displays/Terminal";
import CardList from "../Components/Cards/CardList";

const Home = () => {
  return (
    <div className="page" style={{ textAlign: "center" }}>
      <p className="page-title">Simple OAuth with Node.js</p>
      <p style={{ fontSize: 20 }}>
        Passoport.js container support for over{" "}
        <span style={{ color: "var(--primary-red)" }}>500</span>
        Get started today with just a usename and password for apps like
        facebook, instagram, and Google.
      </p>
      <Terminal userData={"passport.authenticate('facebook')"} selected="All" />
      <p style={{ fontSize: 28}}>
        Popular Strategies
      </p>
      <CardList />
      <div style={{ marginBotton: 20}} />
    </div>
  );
};

export default Home;
