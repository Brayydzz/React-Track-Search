import Button from "./Button"




const Card = ({track, func}) => {
    return (
        <div className='card-container'>
            <p>{track.title}</p>
            <img className='cover-art' src={track.images.coverart} alt="" />
            <button onClick={event => func(event, track)}>Add</button>
            {/* <Button func={addToPlaylist}label='Add'/> */}
        </div>
        
    )
}

export default Card