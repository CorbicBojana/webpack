import React, { useState, useEffect } from "react";

import Result from "./Result";
import Keypad from "./Keypad";

import styles from "./app.css";

function App() {
  const [result, setResult] = useState("");
  const [disabledButton, setDisabledButton] = useState(false);
  const [disabledBracket, setDisabledBracket] = useState(false);
  const [operators, setOperators] = useState(["+", "-", "x", "÷"]);

  const handleClick = button => {
    // regex matches string with more than 1 math sign
    //const regex = /(\d+)(\.?)(\d*)([*/]?)([+-]?)/g;
    const tmpResult = result + button;
    //const regexResult = tmpResult.match(regex) && tmpResult.match(regex).join("");
    //console.log({ tmpResult }, result.replace(regex, regexResult),regex.test(tmpResult));

    //console.log({ regexResult });

    if (button === "=") {
      calculate();
    } else if (button === "C") {
      reset();
    } else if (button === "CE") {
      backspace();
    } else {
      //console.log(result.replace(regex, regexResult) + button);
      //if (!regex.test(tmpResult)) setResult(tmpResult);
      setResult(tmpResult);
    }
  };

  const reset = () => {
    setResult("");
  };

  const backspace = () => {
    const newResult = result.slice(0, -1);
    setResult(newResult);
  };

  const calculate = () => {
    try {
      setResult((eval(result) || "") + "");
    } catch (error) {
      setResult(error);
    }
  };

  useEffect(() => {
    const lastCharacter = result.slice(-1);

    const isOperator = operators.findIndex(
      element => element === lastCharacter
    );

    if (isOperator === 0) {
      console.log(isOperator === 0);
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }

    let openBracket = result.split("").filter(value => {
      return value === "(";
    }).length;

    let closedBracket = result.split("").filter(value => {
      return value === ")";
    }).length;

    if (openBracket <= closedBracket) {
      setDisabledBracket(true);
    } else {
      setDisabledBracket(false);
    }
  }, [result]);

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Result result={result} />
        <Keypad
          handleClick={handleClick}
          disabledButton={disabledButton}
          disabledBracket={disabledBracket}
        />
      </div>
    </div>
  );
}

export default App;
