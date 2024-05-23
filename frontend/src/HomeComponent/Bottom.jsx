import React, { useContext, useLayoutEffect ,useRef,useState ,useEffect } from 'react';
import Style from '../CSS/LoginHome.module.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Col, Container, Row ,Button } from 'react-bootstrap';
import {Icon} from "@iconify/react";
import {Howl, Howler} from "howler";
import audio from '../assets/music/Aam Jahe.mp3';
import { ToastContainer, toast } from 'react-toastify';
import songContext from '../contexts/songContext';
import FormRange from 'react-bootstrap/esm/FormRange';

export default function Bottom() {

  const  {currentSong,setCurrentSong,soundPlayed,setSoundPlayed , isPaused , setIsPaused } = useContext(songContext);
  console.log(currentSong);

  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const progressBarRef = useRef(null);
  const [addFavourite , setAddFavourite] = useState(false);
  const [shuffleMode , setShuffleMode] = useState(false);
  const [shuffledPlaylist , setShuffledPlaylist] =  useState();

  const handleAddFavourite = () => {
    setAddFavourite(!addFavourite)
    const message = addFavourite ? 'Added to favorites' : ' Removed from favorites';
    toast.success(message);
};
const firstUpdate = useRef(true);
useLayoutEffect(() => {
  if(firstUpdate.current){
    firstUpdate.current = false;
    return;
  }
  if(!currentSong){
    return;
  }changeSong(currentSong.src);
},[currentSong && currentSong.src , shuffleMode , shuffledPlaylist]);
 
const playSound = () => {
     if(!soundPlayed){
      return;
     }
     soundPlayed.play();
}
const changeSong = (Songsrc) => {
  if (soundPlayed) {
    soundPlayed.stop();
  }
  let sound = new Howl({
    src: [Songsrc],
    html5: true,
    onplay: () => {
      requestAnimationFrame(updateProgress);
    },
    onload: () => {
      setDuration(sound.duration());
    },
  });
  setSoundPlayed(sound);
  sound.play();
  setIsPaused(false);
};
  const pauseSound = () => {
    soundPlayed.pause();
  }
  const togglePlayPause =() =>{
    if(isPaused){
      playSound(); 
      setIsPaused(false);}
    else{
       pauseSound();
       setIsPaused(true);}
  }

  const formatTime =(time) => {
    const minutes = Math.floor(time /60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    soundPlayed.volume(newVolume);
};
useEffect(() => {
  const updateProgress = () => {
    if (soundPlayed && soundPlayed.playing() && !isPaused) {
      setCurrentTime(soundPlayed.seek());
      progressBarRef.current.style.width = `${(soundPlayed.seek() / duration) * 100}%`;
      requestAnimationFrame(updateProgress);
    }
  };

  if (soundPlayed && soundPlayed.playing() && !isPaused) {
    requestAnimationFrame(updateProgress);
  }

  return () => cancelAnimationFrame(updateProgress);
}, [soundPlayed, duration, isPaused]);

useEffect(() => {
  setCurrentTime(0);
  setDuration(0);
}, [currentSong]);

// Update progress bar width based on currentTime and duration
const progressBarWidth = (currentTime / duration) * 100 + '%';

//Functionality of repeat
const toggleRepeat = () => {
  // Check if the song is currently repeated
  if (soundPlayed.loop()) {
    // If it's repeated, disable repeat
    soundPlayed.loop(false);
    // Notify the user
    toast.info('Repeat turned off');
  } else {
    // If it's not repeated, enable repeat
    soundPlayed.loop(true);
    // Notify the user
    toast.info('Repeat turned on');
  }
};
const getCurrentSong = () => {
  return shuffleMode ? shuffledPlaylist[currentSong.index] : currentSong;
};

//ProgressBar 
const handleProgressBar = (e) => {
  const newTime = parseFloat(e.target.value) * duration;
  setCurrentTime(newTime);
  soundPlayed.seek(newTime);
  progressBarRef.current.style.width = `${(newTime / duration) * 100}%`;
};

//Functionality of shuffle 
  const handleShuffle = () => {
    setShuffleMode(!shuffleMode);
    if (!shuffleMode) {
      const shuffled = currentSong.playlist.slice().sort(() => Math.random() - 0.5);
      setCurrentSong({ ...currentSong, playlist: shuffled }); // Update current song playlist
    }
  };


  
return (
  <div >
  <div className={Style.bottom}> 
  <div className='justify-content-center d-flex  row'>
       <div className='d-flex justify-content-start col-3 '>
       {currentSong && currentSong.img_src && (
            <img src={currentSong.img_src} style={{width:'8vh'}} className='rounded mt-2 ms-2' />
          )}
       <div className='ps-4 mt-3 text-white'>
            {currentSong && (
              <>
                <div>{currentSong.title}</div>
                <div style={{fontSize:'14px',color:'#535353'}}>{currentSong.artist}</div>
              </>
            )}
          </div>

       <div className='ps-4 mt-4 text-white'>
        {currentSong  &&
        <span  
                              style={{
                                  backgroundColor:'black',
                                  border: 'none',
                                  transition: 'background-color 0.3s ease-in-out', // Smooth background color transition
                                  borderRadius: '50%', // Make the button circular
                                  overflow: 'hidden', // Hide overflow content for circular shape
                                  width: '50px', // Adjust width and height for the circular button
                                  height: '50px',
                                    }}
                                    onClick={handleAddFavourite}>
                               {addFavourite ? (
                                   <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="20"
                                       height="20"
                                       viewBox="0 0 24 24"
                                       fill="white"
                                     
                                   >
                                       <path d="M11.999 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm-11 9c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11-11-4.925-11-11z"></path>
                                       <path d="M17.999 12a1 1 0 0 1-1 1h-4v4a1 1 0 1 1-2 0v-4h-4a1 1 0 1 1 0-2h4V7a1 1 0 1 1 2 0v4h4a1 1 0 0       1 1 1z"></path>
                                   </svg>      
                               ) : (      
                                   <svg      
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="20"
                                       height="20"
                                       viewBox="0 0 24 24"
                                       fill="white"
                                       style={{
                                           transition: 'transform 0.3s ease-in-out', // Smooth transform transition for the checked icon
                                           transform: 'rotate(360deg)', // Rotate the icon 360 degrees
                                       }}
                                   >
                                       <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm16.398-2.38a1 1 0 0       0-1.414-1.413l-6.011 6.01-1.894-1.893a1 1 0 0 0-1.414 1.414l3.308 3.308 7.425-7.425z"></path>
                                   </svg>      
                               )}      </span> } </div> 
       </div>
      <div className='container col-6 d-flex justify-content-center '>
        <Container  clas >
          <Row className='mt-1'> <div className=' d-flex justify-content-center'>
           {/* controls for the playing song */}
           <Icon icon= "ph:shuffle" fontSize={20} style={{cursor:'pointer' , color:shuffleMode ?'green' : 'white'}} className='mx-2 mt-2'
            onClick={handleShuffle}
           />
           <Icon icon="ph:skip-back-fill" fontSize={20} style={{cursor:'pointer' , color:'white'}} className='mx-2 mt-2' />
           <Icon icon=
           {isPaused ? "ic:baseline-play-circle" : "ic:baseline-pause-circle" } fontSize={40} style={{cursor:'pointer' , color:'white'}} className='mx-2'
           onClick={togglePlayPause}
           />
           <Icon icon="ri:skip-forward-fill" fontSize={20} style={{cursor:'pointer' , color:'white'}} className='mx-2 mt-2' />
           <Icon icon="iconoir:repeat" fontSize={20}  style={{ cursor: 'pointer', color: soundPlayed && soundPlayed.loop()  ? 'green' : 'white' }} className='mx-2 mt-2' onClick={toggleRepeat}  />
       </div></Row>
          <Row>
            <div className='d-flex justify-content-center'>
            <span className='mx-2'>{formatTime(currentTime)}</span>
              <div className='progress-bar' >        
            {/* Progress bar */} 
            <div className="progress" style={{ width: '50vh', height: '5px', position: 'relative' }}>
              <input className="progress-bar bg-success" type='range' 
              style={{ width: progressBarWidth, height: '100%', position: 'absolute' }}
              value={currentTime} // Set the value to currentTime
              min={0}
              max={duration} // Set the max value to duration
              onChange={handleProgressBar} // Use onChange to handle user input
              
              ref={progressBarRef}
              ></input>
            </div>
{/* 
            <div>
                <input type="range" ref={progressBarRef}  className='bg-success' style={{ width: progressBarWidth, height: '100%', position: 'absolute' }} />
            </div> */}

            </div>
             <span className='mx-2'>{formatTime(duration)}</span>
            </div>
          </Row>
        </Container>


        <div className='row'>  
       </div>         
      </div>
                     {/* Volume controls */}
                     <div className='col-3 d-flex justify-content-end '>
                      <div className='mt-3'>
                        {/* Volume icon based on volume level */}
                        {volume === 0 ?
                          <svg data-encore-id="icon"  fill='white' width="20" height="20" role="presentation" aria-label="Volume off" aria-hidden="true" id="volume-icon" viewBox="0 0 16 16"><path d="M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z"></path><path d="M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"></path></svg>
                            :
                            <svg data-encore-id="icon"  fill='white' width="20" height="20" role="presentation" aria-label="Volume high" aria-hidden="true" id="volume-icon" viewBox="0 0 16 16" ><path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path><path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"></path></svg>
                        }

                        {/* Volume input range */}
                        </div>
                        <input type='range' min={0} max={1}  style={{width:'15vh'}} step='0.1' value={volume} onChange={handleVolumeChange} className=' mx-2 ' /> 
                 
                    </div>

  </div>
</div>
 {/* ToastContainer for displaying toasts */}
 <ToastContainer position="bottom-center" animation='true' autoClose={500} hideProgressBar='true' />
  </div>
);
}