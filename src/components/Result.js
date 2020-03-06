import React from "react";

import styles from "./app.css";

function Results(props) {
  const { result } = props;

  return <div className={styles.result}>{result}</div>;
}

export default Results;
