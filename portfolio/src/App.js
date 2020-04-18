import React from "react";
import "./App.css";
import Introduction from "./components/Introduction/Introduction";
import Timeline from "./components/Timeline/Timeline";
import Navigator from "./components/Navigator/Navigator";

function App() {
  return (
    <div>
      <Navigator />
      <Introduction />
      <Timeline />
    </div>
  );
}

export default App;
