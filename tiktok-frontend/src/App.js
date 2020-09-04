import React,{useEffect, useState} from 'react';
import './App.css';
import Video from './Video.component';
import axios from './axios';

function App() {
  const[videos,setVideos] = useState([]);

useEffect(()=>{
  async function fetchPosts(){
    const response = await axios.get('/v2/posts');
    setVideos(response.data);
    return response;
  }
  fetchPosts();
},[])

  return (
    <div className="app">
      
      <div className="app__videos">
        {
          videos.map( ({url,channel,description,song,likes,shares,messages,_id}) =>
          (<Video 
              key={_id}
              url={url} 
              channel={channel} 
              description={description} 
              song={song} 
              likes={likes}  
              shares={shares} 
              messages={messages}
          />)
          )
        }
      </div>
      
    </div>
  );
}

export default App;
