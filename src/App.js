import React, { useState } from "react";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  const [name, setName] = useState("Ian");
  const message = "Hello";

  return (
    <div className="App">
      <CreateTweet />
      <TweetList name={name} message={message} />
    </div>
  );
}

export default App;
