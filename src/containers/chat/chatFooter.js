import React, { useState, useEffect } from 'react'
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom'
import { Mentions } from 'antd';
import Avatar from '../../config/avatar';

const ChatFooter = (props) => {

    const [emoji, changeEmoji] = useState(<img src={"./assets/icons/emojis/happy.svg"}  /> );

    const emojis = [ "happy", "happyone", "happytwo", "happythree" , "wink", "smiling", "tongue-out","smile","surprised"]
    const onHover = () => {
        const randomEmoji = emojis[ Math.floor(Math.random() * emojis.length) ]; 
        changeEmoji( <img src={"./assets/icons/emojis/"+ randomEmoji +".svg"}  /> )
    }    

    const { textAreaHeight, onKeyPressed, onKeyUp, toggleMode, onChange, onSelect, ghostMode, value, toggleEmojis, toggleAttachment } = props
    const { Option } = Mentions;
    let classes = ghostMode ? "ghost-mode" : "normal-mode"
    return (
        <div onKeyDown={onKeyPressed} onKeyUp={onKeyUp} className="chat-content-footer" style={{ backgroundColor: ghostMode && "#333333" }}>
            <Link onClick={toggleMode} data-toggle="tooltip" title={ghostMode ? "Group Mode" : "Ghost Mode"} className="chat-plus mr" style={{ width: "100px" }}><img src={ghostMode ? "./assets/group.svg" : "./assets/ghost.svg"} width='20px' /></Link >
            {/* {!ghostMode ? <textarea style={{ resize: 'none', height: '0px' }} type="text" className="form-control align-self-center bd-0" placeholder="Message" ></textarea> : */}
            <Mentions
                style={{ width: '100%' , height: textAreaHeight + "px" }}
                onChange={onChange}
                onSelect={onSelect}
                className={"form-control align-self-center bd-0 " + classes}
                placeholder="Message"
                value={value}
            >
                <Option value="Ameer Khan">
                    <div className="avatar avatar-sm avatar-online">
                       <Avatar />
                    </div>
                    <span>Ameer Khan</span>
                </Option>
            </Mentions>
            {/* } */}
            <nav>
                <div data-toggle="tooltip"  onClick={toggleAttachment}><FeatherIcon icon="paperclip"></FeatherIcon></div>
                <div data-toggle="tooltip" ><FeatherIcon icon="gift"></FeatherIcon></div>
                <div data-toggle="tooltip" className="smiley" onClick={toggleEmojis} onMouseEnter={onHover} >
                    {emoji}
                </div>
            </nav>
        </div>
    )
}

export default ChatFooter