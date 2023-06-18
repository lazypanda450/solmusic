import React, { useContext } from 'react'
import { SpotifyContext } from '../context/context'
import { appAlbums } from '../data/songs copy'
import {CgCalendarDates,CgSandClock} from 'react-icons/cg'

const styles = {
  albumContainer:`flex flex-col justify-between max-w-sm rounded overflow-hidden shadow-lg m-4 `,
  albumImage:`h-max`,
  albumTitle:`text-2xl font-bold`,
  albumArtist:`text-xl`,
  albumDetails:`flex justify-between p-4`,
  albumDate:`flex flex-row items-center spacing-4`

}

const Album = (props) => {
  const {setCurrentAlbum, setAlbumsShown }= useContext(SpotifyContext)
  const setAlbum=()=>{
    setCurrentAlbum(props.albumId)
    setAlbumsShown(false)
  }
  return (
    <div className={styles.albumContainer}
    onClick={setAlbum}>
      <img src={appAlbums[props.albumId-1].songs[0].cover} alt={props.albumName} className={styles.albumImage} />
      <div className={styles.albumDetails}>
        <div>
          <div className={styles.albumTitle}>
            <p>{props.albumName}</p>
          </div>
          <div className={styles.albumArtist}>
            <p>{props.artist}</p>
          </div>
        </div>
        <div>
          <div className={styles.albumDate}>
            <CgCalendarDates/>
            {props.release}
          </div>
          <div className={styles.albumDate}>
            <CgSandClock/>
            {props.duration}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Album
