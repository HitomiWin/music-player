import {useState} from "react"
function Music(props) {
  const [isPlaying, setIsplaying]=useState(false)
  
  function stopAnyOtherCurrentlyPlayingAudio(event) {

    for(const audio of document.querySelectorAll('audio')) {

        if(audio !== event.currentTarget) {
            audio.pause()
        }
    }
}
  return (
    <div className="music">
      <img className="music-image" src={props.music.image} />
      <div className="container">
        <h1>{props.music.name}</h1>
        <audio controls controlsList='nodownload' className='container'
        onPlay={event =>stopAnyOtherCurrentlyPlayingAudio(event)}>
                <source src={props.music.src} ></source>
        </audio>   
      </div>
    </div>
  )
}

export default Music
