import React from 'react';
// Import Components
import Tweet from "./Tweet";

const TweetList = () => {
    return (
        <div className="tweet-list">
            <Tweet />
            <Tweet />
            <Tweet />
        </div>
    )
}

export default TweetList;