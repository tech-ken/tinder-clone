// import { Chat } from '@material-ui/icons';
import React from 'react';
import './Chats.css';
import Chat from "./Chat";


function Chats(){
    return <div className="chats">
        <Chat
        name="Hitomi"
        message="好きです♥"
        timestamp="40 seconds ago"
        profilePic="https://www.i-sedai.com/pet/column/image/D0107_1.jpg"
        />
        <Chat
        name="Yuka"
        message="何してるー？"
        timestamp="55 mintues ago"
        profilePic="https://arine.akamaized.net/uploads/photo/upload_photo/data/475185/xlarge_b97755d0-1cd9-4f61-9398-37f251a1729a.jpeg"
        />
        <Chat
        name="Akari"
        message="来週遊びに行こうよ"
        timestamp="2 days ago"
        profilePic="https://st2.depositphotos.com/3766681/10374/i/950/depositphotos_103744434-stock-photo-beautiful-white-samoyed-dog-running.jpg"
        />
  </div>
}

export default Chats;