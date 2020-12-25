import { Avatar } from "@material-ui/core";
import React,{useState} from "react";
import "./ChatScreen.css"

function ChatScreen(){
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Hitomi',
            image: 'https://www.i-sedai.com/pet/column/image/D0107_1.jpg',
            message: '今なしてる？',
        },
        {
            name: 'Hitomi',
            image: 'https://www.i-sedai.com/pet/column/image/D0107_1.jpg',
            message: '今日会えないかな？',
        },
        {
            message: '年末なのに上司に仕事押し付けられて残業中なんだ👿 ',
        },
        {
        message: 'ちょっと遅くなっちゃいそうだけど、10時に六本木とかどうかな？',
        },
    ]);

    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, {message: input}]);
        setInput('');
    };

return(
    <div className="chatscreen">
        <p className="chatScreen_timestamp">YOU MATCHED WITH Aya ON 12/24/2020</p>
        {messages.map( (message) => (
            message.name?(
                <div className="chatScreen_message">
                <Avatar
                className="chatScreen_image"
                alt= {message.name}
                src={message.image}
                />
                <p className="chatScreen_text">{message.message}</p>
            </div>
            ) : (
                <div className="chatScreen_message">
                <p className="chatScreen_textUser">{message.message}</p>
                </div>
            )
        ))}
        <div>
            <form className="chatScreen_input">
                <input
                value = {input}
                onChange = {(e) => setInput(e.target.value)}
                 className="chatScreen_inputField"
                 placeholder="Type a message..."
                 type="text" 
                 />
                <button onClick={handleSend} type="submit" className="chatScreen_inputButton">SEND</button>
            </form>
        </div>
    </div>
);

}
export default ChatScreen;