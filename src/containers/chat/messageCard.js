import React from 'react'
import Avatar from '../../config/avatar';
const MessageCard = (props) => {

    const { name, time, body, nameInitial, onlineStatus, ghostMessage, sender } = props.data
    const { backgroundColor, Channels } = props
    let avatar = ""
    onlineStatus ? avatar = "avatar avatar-sm avatar-online" : avatar = "avatar avatar-sm avatar-offline"
    let classes = ghostMessage ? "media ghost-message" : "media";
    classes = sender == "me" ? `${classes} my-message` : classes;
    const messageStyle = sender == "other" ? { backgroundColor: "#E5E5EA", color: "#000000" } : { backgroundColor: backgroundColor }
    // const messageStyle = { backgroundColor: "#E5E5EA", color: "#000000" } 
    return (
        <React.Fragment>
            {
                <div className={classes}>
                    {<div className={avatar} style={sender == "me" ? { marginLeft: "15px" } : { marginLeft: "0px" }}>
                        <Avatar />
                        {/* <span className="avatar-initial rounded-circle">{nameInitial}</span> */}
                        {/* <img className="avatar-initial rounded-circle" src="./assets/icons/avatars/Blue_icon.png"/> */}
                    </div>}
                    <div className="media-body" style={sender == "me" ? { display: "flex", flexDirection: "column", alignItems: "flex-end" } : {}}>
                        <div className="media-body-text" style={messageStyle}>
                            <h6>
                                { sender == "me" ? <small style={{ color : "#c7c7c7" }}>{name}</small> :
                                    <small>{name}</small>
                                }
                            </h6>
                            <p data-toggle="tooltip" title={time} >{body}</p>
                        </div>
                    </div>
                </div>


            }
        </React.Fragment>
    )
}

export default MessageCard