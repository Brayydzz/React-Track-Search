const Tracks = () => {
    const getTracks = () => {
        fetch("https://shazam.p.rapidapi.com/search?term=kiss%20the%20rain&locale=en-US&offset=0&limit=5", {
            headers:{
            "x-rapidapi-key": "f15011cc6emsh1c53b4a4ae25c69p1c46bfjsnebe408509220",
            "x-rapidapi-host": "shazam.p.rapidapi.com",
            "Accept": "application/json"
            }
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
        }

    return (
        <div>
            <button onClick={getTracks}>Get Tracks!</button>
        </div>
    )
}

export default Tracks
