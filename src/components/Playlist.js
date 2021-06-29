import Card from './Card'

const Playlist = ({playlist, removeFromPlaylist}) => {
    return (
        <div className='playlist'>
            {playlist.map((track) => (
                <Card key={track.key} removeFromPlaylist={removeFromPlaylist} track={track}/>
            ))}
        </div>
    )
}
export default Playlist
