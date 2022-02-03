import "./App.css";
import { useState, useCallback } from "react";
import Button from "./components/ButtonComponent";

function App() {
  const [showParagraph, setShowParagraph] = useState(true);
  const [enableToggle, setEnableToggle] = useState(false);

  const enableToggleHandler = useCallback(() => {
    setEnableToggle(true);
  }, []);

  // Using the following function, paragraph should be toggled if enableToggle is true.
  //However since toggleShowParagraph function forms a closure, the value of 'enableToggle' set to false.
  //Since useCallback hook does not have any dependencies, toggleShowParagraph function will not be recreated
  //and 'enableToggle' will remain false in toggleShowParagraph

  // const toggleShowParagraph = useCallback(() => {
  //   if (enableToggle) setShowParagraph((prevState) => !prevState);
  // }, []);

  //the following function has enableToggle as a dependency, hence it will work correctly

  const toggleShowParagraph = useCallback(() => {
    if (enableToggle) setShowParagraph((prevState) => !prevState);
  }, [enableToggle]);

  return (
    <div>
      <h1>Closure Demo</h1>
      <Button onClick={enableToggleHandler}>Enable Toggle</Button>
      <p>{showParagraph ? "Hello World" : ""}</p>
      <Button onClick={toggleShowParagraph}>Toggle Show Paragraph</Button>
    </div>
  );
}

export default App;
