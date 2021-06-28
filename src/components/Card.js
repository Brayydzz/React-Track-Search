import Button from "./Button"

const Card = ({track}) => {
    return (
        <div className='card-container'>
            <p>{track.title}</p>
            <img className='cover-art' src={track.images.coverart} alt="" />
            <Button label='Add'/>
        </div>
        
    )
}

export default Card