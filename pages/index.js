import Login from '../components/Login'
import { useContext } from 'react'
import { SpotifyContext } from '../context/context'
import { BrowserRouter } from 'react-router-dom'

export default function Home() {
  const { updateProgress, updateVolume } = useContext(SpotifyContext)

  return (
      <div>
      <audio
        id='audio-element'
        hidden
        playsInline
        onVolumeChange={e => updateVolume(e)}
        onTimeUpdate={e => updateProgress(e)}
      />
      <Login />
      {/* temporarily render homepage before you build Login */}
    </div>
  )
}
