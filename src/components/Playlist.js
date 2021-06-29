import Card from './Card'

const Playlist = ({playlist}) => {
    return (
        <div className='playlist'>
            {playlist.map((track) => (
                // track.key
                <Card func={removeFromPlaylist} track={track}/>
            ))}
        </div>
    )
}
export default Playlist
