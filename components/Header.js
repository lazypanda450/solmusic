import Image from 'next/image'
import UploadButton from './UploadButton'
import { useContext, useEffect, useState } from 'react'
import { SpotifyContext } from '../context/context'
import { appAlbums } from '../data/songs copy'
import {RiUploadCloud2Line} from 'react-icons/ri'
import {RiHeartAddLine} from 'react-icons/ri'

const styles = {
  header:`max-w-7xl m-auto p-3`,
  headerWrapper:`flex items-center justify-between`,
  arrowButton:`bg-black mr-2 w-10 h-10 flex justify-center items-center 
  jusitfy-center rounded-full bg-opacity-50 cursor-pointer
  hover:bg-opacity-75`,
  headerRight:`flex`,
  profile:`flex items-center bg-black rounded-full p-1 px-3
  bg-opacity-50 cursor-pointer hover:bg-opacity-75`,
  profileAvatarContainer:`w-7 h-7 rounded-full -ml-2 mr-3
  flex items-center`,
  iconContainer:`ml-10`,
  title:`text-6xl font-extrabold`,
  playlistTextContent:`flex items-end justify-center mt-10`,
  controlsContainer:`flex justify-center items-center mt-10`,
  playButton:`bg-green-500 w-16 h-16 flex justify-center items-center
  rounded-full cursor-pointer`,

}

const Header = ({ setShowUploadMusic,headerCover, demo, PK, timer }) =>{


  const { currentSong, listCount, setListCount, albumDuration, playingPage,
    likedSongs, setLikedSongs,currentPage, setCurrentPage, Pages, currentAlbum, setCurrentAlbum, play } = useContext(SpotifyContext)
    const [title, setTitle] = useState(' ')
  useEffect(() => {
    setTitle(' ')
    document.getElementById('likeCheck').checked= false;
    document.getElementById('blank-heart').className = ''
    document.getElementById('filled-heart').className = 'hidden'
    console.log(currentSong.isLiked&&(appAlbums[currentAlbum-1].albumName===currentSong.album||currentPage===Pages.LikedSongs) + ' aa')
      if(currentSong.isLiked&&(appAlbums[currentAlbum-1].albumName===currentSong.album||currentPage===Pages.LikedSongs)){
        document.getElementById('likeCheck').checked= true;
        document.getElementById('blank-heart').className = 'hidden'
        document.getElementById('filled-heart').className = ''
        if(currentPage===Pages.LikedSongs||currentPage===Pages.Playing && playingPage===Pages.LikedSongs){
          setTitle(currentSong.title)
        }
      }
    if((currentPage===Pages.Home||currentPage===Pages.Playing) && (playingPage===Pages.Home&& appAlbums[currentAlbum-1].albumName===currentSong.album)){
      setTitle(currentSong.title)
    }else if(currentPage===Pages.MyPlaylist&& playingPage===Pages.MyPlaylist||currentPage===Pages.Playing && playingPage===Pages.MyPlaylist && !(appAlbums[currentAlbum-1].albumName==currentSong.album)){
      setTitle(currentSong.title)
      console.log(appAlbums[currentAlbum-1].albumName===currentSong.album)
    }
    
    if(currentPage===Pages.MyPlaylist||currentPage===Pages.Playing&&playingPage===Pages.MyPlaylist){
      document.getElementById('blank-heart').className = 'hidden'
      document.getElementById('filled-heart').className = 'hidden'
    }
    console.log(playingPage)
  }, [currentSong, currentPage]) 

  const like = ()=>{
    var check = document.getElementById('likeCheck')

    if(check.checked == true){
      console.log('checked')
      document.getElementById('blank-heart').className += ' hidden'
      document.getElementById('filled-heart').className = ''
      currentSong.isLiked = true
    }else{
      console.log('unchecked')
      document.getElementById('blank-heart').className = ''
      document.getElementById('filled-heart').className += 'hidden'
      currentSong.isLiked = false
      console.log(likedSongs)
    }
  }
  
  return (
    <div classname={styles.header}>
      <div className={styles.headerWrapper}>
        <div>
        </div>
        <div className={styles.headerRight}>
            {!demo?
            <UploadButton 
            setShowUploadMusic={setShowUploadMusic}
            />
            :
            <div className={`bg-green-500 mr-10 px-3 py-1.5 cursor-pointer 
            rounded-full hover:scale-95 transition`}>
              {timer<60?'Trial Expires in: ' + (60-timer):'Trial Expires in: ' + 0}
            </div>
            }
        
          {!demo?<div className={styles.profile}>
            <div className={styles.profileAvatarContainer}>
            <Image
                src="/assets/avatar.jpg"
                width={20}
                height={20}
                alt='avatar'
                className='rounded-full'
              />
            </div>
            <p>{PK}</p>
          </div>:
          <div className={styles.profile}>
          <div className={styles.profileAvatarContainer}>
          <Image
              src="/assets/avatar.jpg"
              width={20}
              height={20}
              alt='avatar'
              className='rounded-full'
            />
          </div>
          <p>User PK</p>
          </div>
          }
        </div>
      </div>
      <div className={styles.playlistTextContent}>
        {(currentPage===Pages.Home||currentPage===Pages.Playing && playingPage===Pages.Home)&&
        <img
          src={headerCover}
          width={300}
          height={300}
          alt="artist"
          id='album-image'
        />}
        {(currentPage===Pages.MyPlaylist||currentPage===Pages.Playing && playingPage===Pages.MyPlaylist)&&  
        <RiUploadCloud2Line
          size={300}
          color='white'
        /> }
        {(currentPage===Pages.LikedSongs||currentPage===Pages.Playing && playingPage===Pages.LikedSongs)&&
        <RiHeartAddLine
          size={300}
          color='white'
        /> }
          <div className='ml-5'>
          <>{currentPage===Pages.Playing && playingPage===Pages.Home && appAlbums[appAlbums.findIndex(val=>val.albumName===currentSong.album)].albumName}</>
          <>{currentPage===Pages.Home && appAlbums[currentAlbum-1].albumName}</>
          <div className={styles.title}>{title}
          </div>
          <div className='flex items-center mt-5'>
            <div className={styles.profileAvatarContainer}>
              {currentPage===Pages.Home && <img
                src={appAlbums[currentAlbum-1].songs[0].artistCover}
                width={20}
                height={20}
                alt="artist"
                className='rounded-full'
              />}
              {currentPage===Pages.Playing&&!playingPage===Pages.MyPlaylist && <img
                src={currentSong.artistCover}
                width={20}
                height={20}
                alt="artist"
                className='rounded-full'
              />}
              {(currentPage===Pages.MyPlaylist)&&''}
              {(currentPage===Pages.LikedSongs)&&''}
            </div>
            <p>
              <span
              className='text-bold'>
                {(currentPage===Pages.Home)&& appAlbums[currentAlbum-1].artiste +' • ' + appAlbums[currentAlbum-1].releaseDate +' • ' + listCount + ' Songs • ' + albumDuration+ ' dk' }
                {(currentPage===Pages.Playing&&!(playingPage===Pages.MyPlaylist||playingPage===Pages.LikedSongs))&& appAlbums[appAlbums.findIndex(val=>val.albumName===currentSong.album)].artiste +' • ' + appAlbums[appAlbums.findIndex(val=>val.albumName===currentSong.album)].releaseDate +' • ' + listCount + ' Songs • ' + albumDuration+ ' dk' }
                {(currentPage===Pages.MyPlaylist||currentPage===Pages.Playing && playingPage===Pages.MyPlaylist)&&  'My Uploads: '+' '+ listCount + ' Songs' }
                {(currentPage===Pages.LikedSongs||currentPage===Pages.Playing && playingPage===Pages.LikedSongs) &&  'My Favorites: '+' '+ listCount + ' Songs• ' + albumDuration+ ' dk'  }
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.controlsContainer}>
        <div className={styles.playButton} id='play' onClick={play}>
          <Image
          src='/assets/play.svg'
          width={30}
          height={30}
          alt='play'
          />
        </div>
        <div className={styles.iconContainer}>
          <input type="checkbox" id='likeCheck' 
          onClick={like}
          className='hidden'/> 
          <label htmlFor="likeCheck">
          <div className='hidden' id='filled-heart'>
            <Image
            src='/assets/heart.svg'
            width={30}
            height={30}
            alt='play'
            />
          </div>         
          <div className='' id='blank-heart'>
            <Image
            src='/assets/blank-heart.svg'
            width={30}
            height={30}
            alt='play'
            />
          </div>  
          </label>         
        </div>
      </div>
    </div>
  )
}

export default Header