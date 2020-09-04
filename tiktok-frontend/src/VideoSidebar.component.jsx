import React, { useState } from 'react';
import './VideoSidebar.styles.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


function VideoSidebar({likes,shares,messages}) {
    const [liked,setLiked] = useState(false);

    return (
        <div className="videosidebar">

            <div className="videosidebar__button">
                {
                    liked ? <FavoriteIcon onClick={()=>setLiked(false)} fontSize="large"/> : 
                    <FavoriteBorderIcon fontSize="large" onClick={()=>setLiked(true)}/>
                }
                
                <p>{liked ? likes+1 : likes }</p>
            </div>

            <div className="videosidebar__button">
                <MessageIcon fontSize="large"/>
                <p>{messages}</p>
            </div>

            <div className="videosidebar__button">
                <ShareIcon fontSize="large"/>
                <p>{shares}</p>
            </div>

        </div>
    )
}

export default VideoSidebar
