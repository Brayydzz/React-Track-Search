const Card = ({track, addToPlaylist, isPlaylist, removeFromPlaylist}) => {
    return (
        <div className='card-container'>
            <p>{track.title}</p>
            <img className='cover-art' src={track.images.coverart} alt="" />
            {isPlaylist ? <button onClick={event => addToPlaylist(event, track)}>Add</button> : <button onClick={event => removeFromPlaylist(event, track)}>Remove</button>}
            
        </div>
        
    )
}

export default Card