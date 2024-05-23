import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import PlylistNavbar from './PlylistNavbar';
import MidPlylist from './MidPlylist';
import Style from '../CSS/Home.module.css';
import HomeARPM from './HomeARPM';
import InstallApp from './InstallApp';
export default function Plylist({ playlistitems , onPlayPause ,handleInstallClick , handleprofileClick, handleBellIconClick}) {
  return (
    <div className=' py-2 '>
      <Card style={{ backgroundColor: '#121212', border: 'none' }}>
      <PlylistNavbar handleInstallClick={handleInstallClick} handleprofileClick={handleprofileClick} handleBellIconClick={handleBellIconClick} />
    
        <div className={`mt-2  ${Style.bg}`}>
        <HomeARPM items={playlistitems} onPlayPause={onPlayPause} />
              {/* <MidPlylist  items={playlistitems} onPlay = {onPlayPause}  /> */}
        </div>
      </Card>
    </div>
  );
}
