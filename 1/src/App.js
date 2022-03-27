import { useEffect, useRef, useCallback, useState } from "react";
import Button from "./Button";
import Title from "./Title";
/**
 * you should use useRef, useCallback, memo, useState.
 * don't remove console logs,
 * check console before and after your chnages
 */
function App() {
  console.log("App is rendering...");
  useEffect(() => console.log("== App rendered =="));

  let [value1, setvalue1] = useState();
  let [value2, setvalue2] = useState();
  const input1 = useRef(null);
  const input2 = useRef(null);

  /**
   * create two states called value1 and value 2
   */

  /**
   * create ref for each input (ref1, ref2) and pass them to input elements
   */

  const changeValue1 = () => {
    setvalue1(input1.current.value);

    /**
     * get value of input from ref and set first state
     */
  };

  const memoizedChangeValue1 = useCallback(() => {
    changeValue1();
  }, []);

  const changeValue2 = () => {
    setvalue2(input2.current.value);
    /**
     * get value of input from ref and set second state
     */
  };

  const memoizedChangeValue2 = useCallback(() => {
    changeValue2();
  }, []);

  return (
    <div className="App">
      <div className="value-1">
        first value:{value1 && <Title>{value1}</Title>}
        <br />
        change first value:
        <input ref={input1} />
        <Button onClick={memoizedChangeValue1}> change </Button>
      </div>
      <div className="value-2">
        second value: {value2 && <Title>{value2}</Title>}
        <br />
        change second value:
        <input ref={input2} />
        <Button onClick={memoizedChangeValue2}> change </Button>
      </div>
    </div>
  );
}

export default App;
