import React, {useState} from 'react';
import Tracks from './Tracks'
import '../index.css'
import Playlist from './Playlist'


function App() {
  const [playlist, setPlaylist] = useState([])

  const addToPlaylist = (e, track) => {
    e.preventDefault()
    const copyData = playlist.slice()
    copyData.push(track)
    setPlaylist(copyData)
  }

  const removeFromPlaylist = (e, track) => {
    e.preventDefault()
    const copyData = playlist.filter(element => element !== track )
    setPlaylist(copyData)
  }

  return (
    <>
      <h1>Track Search</h1>
      <div className='grid-container'>
        <Tracks addToPlaylist={addToPlaylist} />
        <Playlist removeFromPlaylist={removeFromPlaylist} playlist={playlist} />
      </div>
    </>
  );
}

export default App;