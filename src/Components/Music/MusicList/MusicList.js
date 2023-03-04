import React from "react";
// import MusicPlayer from "../MusicPlayer/MusicPlayer";
import "./MusicList.css";


const MusicList = ({ audioFiles }) => {

    console.log(audioFiles);
    return (
      <div className="audio-container">
        {audioFiles.map((audioFile) => (         
          <div className="song" key={audioFile.id}>
            {/* <MusicPlayer audioFile={audioFile} /> */}
            <p className="song-name">{audioFile.title}</p>
            <audio className="song-src" src={audioFile.src} controls={true} />
          </div>
        ))}
      </div>
    );
  };
  
  export default MusicList;