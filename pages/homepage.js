import { useEffect, useState, useContext } from 'react'
import Nav from '../components/nav'
import Activity from '../components/activity'
import UploadModal from '../components/UploadModal'
import Playlist from '../components/Playlist'
import PlayerControls from '../components/PlayerControls'
import LibaryPlaylist from '../components/LibaryPlaylist'
import LikedPlaylist from '../components/LikedPlaylist'
import AlbumsContainer from '../components/AlbumsContainer'
import Header from '../components/Header'
import useProgram from '../hooks/useProgram'

import { appAlbums } from '../data/songs copy'
import { SpotifyContext } from '../context/context'
import { IoRefreshCircleOutline } from 'react-icons/io5'



const HomePage = ({PK}) => {
  const { currentPage, setCurrentPage, Pages, setAlbumDuration,
  albumsShown, currentSong, currentAlbum, playingPage } = useContext(SpotifyContext)

  const [showUploadMusic, setShowUploadMusic] = useState(false)
  const [title, setTitle] = useState(' ')
  const [musicURL, setMusicURL] = useState(' ')  
  const { newMusic, getSongs} = useProgram(
    musicURL,
    title,
    setTitle,
    setMusicURL,
    setShowUploadMusic,
  )
  const [songs, setSongs] = useState([])

  useEffect(() => {
    getSongs().then(songs => {
      setSongs(songs)
    })
  }, [])

  useEffect(() => {
    if(currentPage===1){
      setAlbumDuration(null)
    }
  }, [currentPage])

  useEffect(() => {
  console.log(playingPage)
  }, [currentSong])
  
  const handleRefresh = () => {
      getSongs().then(songs => {
        setSongs(songs)
      })
  }

  return (
    <div className='flex'>
      <Nav/>
      <div className='w-full'>
        {!albumsShown?
        <div>
          {
          (currentPage===Pages.Playing)&&(playingPage===Pages.Home&&!(currentSong.album===appAlbums[currentAlbum-1].albumName))?<Header 
          setShowUploadMusic={setShowUploadMusic}
          headerCover={appAlbums[appAlbums.findIndex(val=>val.albumName===currentSong.album)].songs[0].cover}
          />:<Header setShowUploadMusic={setShowUploadMusic}
          headerCover={appAlbums[currentAlbum-1].songs[0].cover}
          PK={PK}/>}
          <div>
          {(currentPage===Pages.MyPlaylist||currentPage===Pages.Playing&&playingPage===Pages.MyPlaylist)&&<button 
          className='pl-10' 
          onClick={handleRefresh}>
            <IoRefreshCircleOutline style={{height:'30px',width:'30px'}}/>
          </button>}
          </div>
          {(currentPage===Pages.Home)&& <LibaryPlaylist songs={appAlbums[currentAlbum-1].songs}/>}
          {(currentPage===Pages.Playing)&&(playingPage===Pages.Home&&currentSong.album===appAlbums[currentAlbum-1].albumName)&&<LibaryPlaylist songs={appAlbums[currentAlbum-1].songs}/>}
          {(currentPage===Pages.Playing)&&(playingPage===Pages.Home&&!(currentSong.album===appAlbums[currentAlbum-1].albumName))&&<LibaryPlaylist songs={appAlbums[appAlbums.findIndex(val=>val.albumName===currentSong.album)].songs}/>}
          {(currentPage===Pages.Playing)&&(playingPage===Pages.MyPlaylist)&&<Playlist songs={songs}/>}
          {(currentPage===Pages.Playing)&&(playingPage===Pages.LikedSongs)&&<LikedPlaylist albums={appAlbums}/>}
          {(currentPage===Pages.MyPlaylist)&& <Playlist songs={songs}/>}
          {(currentPage===Pages.LikedSongs)&& <LikedPlaylist albums={appAlbums}/>}
        </div>:<AlbumsContainer/>}
        {!(JSON.stringify(currentSong)=='{}')&& <PlayerControls/>}
        {showUploadMusic && <UploadModal
        title={title}
        setTitle={setTitle}
        setShowUploadMusic={setShowUploadMusic}
        musicURL={musicURL}
        setMusicURL={setMusicURL}
        newMusic={newMusic}
        />}      
      </div>
      
      {/* <Activity /> */}
   
    </div>
  )
}

export default HomePage
