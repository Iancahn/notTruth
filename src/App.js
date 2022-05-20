import React from "react";
import Tweet from "./components/Tweet";
import CreateTweet from "./components/CreateTweet";

function App() {
  return (
    <div className="App">
      <CreateTweet />
      <Tweet />
    </div>
  );
}

export default App;
