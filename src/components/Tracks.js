import React, {useState, useEffect} from "react"
import Card from './Card'

const Tracks = ({addToPlaylist}) => {
    const [tracks, setTracks] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        
    }, [tracks])

    const getTracks = async () => {
        await fetch(`https://shazam.p.rapidapi.com/search?term=${search}&locale=en-US&offset=0&limit=5`, {
            headers:{
            "x-rapidapi-key": "52f48bf9a3msh235e6d8c177e71ep184430jsn39cc922fa87f",
            "x-rapidapi-host": "shazam.p.rapidapi.com",
            "Accept": "application/json"
            }
        })
        .then(resp => resp.json())
        .then(data => setTracks(data.tracks.hits))
        }

    const btnGetTracks = (e) => {
        e.preventDefault()
        getTracks()
    }


    return (
        <div className='track-container'>
            <form  className='form' onSubmit={btnGetTracks}>
                <input type="text" onChange={(e) => {
                    setSearch(e.target.value)}}/>
                <button onClick={btnGetTracks}>Get Tracks!</button>
            </form>
            
            {tracks.length > 0 ?
            <div className='track-list'>
                {tracks.map((track) => (<Card addToPlaylist={addToPlaylist} key={track.track.key} track={track.track} isPlaylist={true}></Card>))}
            </div> 
            :
            <p>No tracks loaded</p>
            }            
        </div>
    )
}

export default Tracks
