import React from 'react'
import './SwipeButtons.css';

import ReplayIcon from "@material-ui/icons/Replay";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { IconButton } from '@material-ui/core';

function SwipeButtons(){
return(
    <div className="swipeButtons">
        <IconButton className="swipeButtons_repeat"> 
            <ReplayIcon fontsize="large" />
        </IconButton>
        <IconButton className="swipeButtons_favorite">
            <FavoriteIcon fontsize="large" />
        </IconButton>

    </div>
)

}
export default SwipeButtons;