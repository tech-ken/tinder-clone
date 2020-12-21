import React from 'react';
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
<<<<<<< HEAD
import IconButton from "@material-ui/core/IconButton";
=======
>>>>>>> origin/master

function Header(){
    return(
        //BEM
<<<<<<< HEAD
        <div className="header">
            <IconButton>
            <PersonIcon className='header_icon' fontsize='large'/>
            </IconButton>
            <img
            className="header_logo"
            src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt="tinder logo"
            />
            <IconButton>
            <ForumIcon className='header_icon' fontsize='large' />
            </IconButton>
=======
        <div className="header_logo">
            <PersonIcon />
            <img
            className="header"
            src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt="tinder logo"
            />
            <ForumIcon />
>>>>>>> origin/master
        </div>
    );
}

export default Header;