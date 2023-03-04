import './Music.css';
// import React, { useState } from 'react';
// // var Spotify = require('../../spotify-web-api');
import MusicList from './MusicList/MusicList';
import ReactAudioPlayer from 'react-audio-player';


const Music = () => {
    const audioFiles = [
        { id: 1, src: "/songs/GlasnaTishina-01-GlasnaTishina.wav", title: "1. Glasna Tishina" },
        { id: 2, src: "/Songs/Glasna Tishina - 02 - Atorzija.wav", title: "2. Atorzija" },
        { id: 3, src: "/Songs/Glasna Tishina - 03 - Skupi.wav", title: "3. Skupi" },
        { id: 4, src: "/Songs/Glasna Tishina - 04 - Balinica.wav", title: "4. Balinica" },
        { id: 5, src: "/Songs/Glasna Tishina - 05 - Filka  moma.wav", title: "5. Filka moma" },
        { id: 6, src: "/Songs/Glasna Tishina - 06 - Hologram.wav", title: "6. Hologram" },
        { id: 7, src: "/Songs/Glasna Tishina - 07 - 7.wav", title: "7. 7" },
        { id: 8, src: "/Songs/Glasna Tishina - 08 - Rana.wav", title: "8. Rana" },
        { id: 9, src: "/Songs/Glasna Tishina - 09 - Komu te ostavam.wav", title: "9. Komu te ostavam" },
        { id: 10, src: "/Songs/Glasna Tishina - 10 - Ona shto sum.wav", title: "10. Ona shto sum" },
      ];
    

      return (
        <div>
          
          <MusicList audioFiles={audioFiles} />
          
          
        </div>
      );
   
  };

  
 
export default Music;


