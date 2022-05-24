import React, { useState } from "react";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  //State
  const [name, setName] = useState("Ian");
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);
  const message = "Hello";

  return (
    <div className="App">
      <CreateTweet textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets} />
      <TweetList name={name} tweets={tweets} />
    </div>
  );
}

export default App;
