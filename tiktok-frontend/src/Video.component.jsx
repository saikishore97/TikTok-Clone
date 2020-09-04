import React, { useRef, useState } from 'react';
import './Video.styles.css';
import VideoFooter from './VideoFooter.component';
import VideoSidebar from './VideoSidebar.component';

function Video({url,channel,description,song,likes,shares,messages}) {
    const [playing,setPlaying] = useState(false);

    const videoRef = useRef(null);

    const handleVideoPress=()=>{
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        }
        else{
            videoRef.current.play();
            setPlaying(true);
        }

    }

    return (
        <div className="video">
            <video 
            loop
            className="video__player"
            ref={videoRef}
            onClick={handleVideoPress}
            src={url}
            >
            </video>

            <VideoFooter channel={channel} description={description} song={song}/>
            <VideoSidebar likes={likes} shares={shares} messages={messages}/>
            
        </div>

        
    )
}

export default Video;