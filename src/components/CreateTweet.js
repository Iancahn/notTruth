import React, { useState } from 'react';

const CreateTweet = () => {
    //State
    const [textInput, setTextInput] = useState("");
    //Functions
    const userInputHandler = (e) => {
        setTextInput(e.target.value);
    }
    return (
        <div>
            <form>
                <textarea value={textInput} onChange={userInputHandler} cols="50" rows="5">
                </textarea>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default CreateTweet;