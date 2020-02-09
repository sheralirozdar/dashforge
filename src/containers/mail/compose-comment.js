import React, {useState} from 'react'
import { Input, Tooltip } from 'antd';
const { TextArea } = Input;

const ComposeComment = (props) => {
    const [emoji, changeEmoji] = useState(<img src={"./assets/icons/emojis/happy.svg"}  width="18px"/> );

    const emojis = [ "happy", "happyone", "happytwo", "happythree" , "wink", "smiling", "tongue-out","smile","surprised"]
    const onHover = () => {
        const randomEmoji = emojis[ Math.floor(Math.random() * emojis.length) ]; 
        changeEmoji( <img src={"./assets/icons/emojis/"+ randomEmoji +".svg"} width="18px" /> )
    }    

    const { value, ontextUpdate , toggleEmojis} = props

    return <div className="add-comment">
        <Input
            placeholder="Type your comment..."
            suffix={
                <Tooltip >
                    <i className="fas fa-paperclip"></i>
                    <i data-toggle="tooltip"  className="smiley" onClick={toggleEmojis} onMouseEnter={onHover}>
                        {emoji}
                    </i>
                    <i className="fas fa-arrow-up"></i>
                </Tooltip>
            }
        />
    </div>

}

export default ComposeComment