import React from "react";

import MyImage from "../img/myImage.jpg";

import styles from "./intro.css";

import App from "./App";

function Intro() {
  return (
    <div>
      <App />
      <h1 className={styles.intro}>Hello</h1>
      <img src={MyImage}></img>
    </div>
  );
}

export default Intro;
