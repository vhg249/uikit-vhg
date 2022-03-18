import React from "react";
// import "./App.css";
import { Button } from "uikit-vhg";
import { Alert } from "uikit-vhg";

function App() {
  console.log(Button);

  return (
    <div className="App">
      <Button scale="md">Hello</Button>
      <div style={{ display: "flex" }}>
        <Alert message="THis is alert" variant="Success" size="lg" />

      </div>
    </div>
  );
}

export default App;
