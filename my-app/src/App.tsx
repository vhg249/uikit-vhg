import React from "react";
// import "./App.css";
import { Button } from "uikit-vhg";
import { Alert } from "uikit-vhg";
import { NavRight } from "uikit-vhg";

function App() {
  console.log(Button);

  return (
    <div className="App">
      <Button scale="md">Hello</Button>
      <Alert
        message="THis is alert"
        variant="Success"
        size="lg"
        timeToShow={1000000}
      />
      <NavRight size="lg" />
    </div>
  );
}

export default App;
