import React, { useState, useRef } from "react";

const MusicPlayer = ({ audioFile }) => {
  const [isReady, setIsReady] = useState(false);
  const audioRef = useRef(null);

  const handleCanPlay = () => {
    setIsReady(true);
  };
  console.log(audioFile)
  return (
    <div>
      <audio
        src={audioFile.src}
        controls={true}
        ref={audioRef}
        onCanPlay={handleCanPlay}
      />
      {isReady ? (
        <p>Ready to play!</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MusicPlayer;
