import {useContext, useState} from "react"
import MusicHeader from '../components/MusicHeader'
import Music from '../components/Music'
import { MusicsContext } from "../contexts/MusicsContext"

function MusicPlayer() {
  const {musics} =useContext(MusicsContext)

  return (
    <div className="music-player">
      <MusicHeader />
      {musics.map((music,i)=>(
        <Music music={music} key={i} />
      ))}
    </div>
  )
}

export default MusicPlayer
