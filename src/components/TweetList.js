import React from 'react';
// Import Components
import Tweet from "./Tweet";

const TweetList = ({ name, tweets }) => {
    return (
        <div className="tweet-list">
            <Tweet name={name} message={tweets} />
            <Tweet name={name} message={tweets} />
            <Tweet name={name} message={tweets} />
        </div>
    )
}

export default TweetList;