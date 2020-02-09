import React, { useState } from 'react';
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';

const Emojis = () => {

    const onEmojiClick = (event, emojiObject) => {
        console.log("emoji selected ", event ,emojiObject)
    }

    return (
        <div>
            <Picker onEmojiClick={onEmojiClick} skinTone={SKIN_TONE_MEDIUM_DARK}/>
        </div>
    );
};


export default Emojis