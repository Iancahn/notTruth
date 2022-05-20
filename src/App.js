import React from "react";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  //Adding some variables
  const name = "Ian the awesome";
  const message = "This is the actual tweet content"

  return (
    <div className="App">
      <CreateTweet />
      <TweetList />
    </div>
  );
}

export default App;
