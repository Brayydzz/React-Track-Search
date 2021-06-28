import React from 'react';
import Track from './Tracks'
import '../index.css'
import Playlist from './Playlist'


function App() {
  return (
    <>
      <h1>Track Search</h1>
      <div className='grid-container'>
        <Track />
        <Playlist />
      </div>
    </>
  );
}

export default App;