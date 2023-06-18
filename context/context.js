import { createContext, useState, useEffect } from "react";
import { appAlbums } from "../data/songs copy";

export const SpotifyContext = createContext()

export const SpotifyProvider = ({ children })  => {
    const [currentSong, setCurrentSong] = useState({})
    const [isPlaying, setIsPlaying] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const [progress, setProgress] = useState(false)
    const [volume, setVolume] = useState(false)
    const [timestamp, setTimestamp] = useState(false)
    const [duration, setDuration] = useState(false)
    const [listCount, setListCount] = useState(0)
    const [albumDuration, setAlbumDuration] = useState('null')
    const [albumsShown, setAlbumsShown] = useState(true)
    const [currentAlbum, setCurrentAlbum] = useState(3)
    const [playingPage, setPlayingPage] = useState(0)
    const [descSongs,setDescSongs] = useState([])
    const [isTimedOut, setIsTimedOut] = useState(true)
    
    const [currentPage,setCurrentPage] = useState(0)
    const Pages= {
        Home:0,
        Playing:1,
        MyPlaylist:2,
        LikedSongs:3
    }

    useEffect(() => {
        appAlbums.forEach(album=>{
        album.songs.forEach(song=>{
            setDescSongs(descSongs=>[...descSongs, song])
            })
        })
    }, [])

    useEffect(() => {
        if (isPlaying) {
          let audio = document.querySelector('#audio-element')
          audio.addEventListener("timeupdate", function () {
            setTimestamp(secondsToMinSec(audio.currentTime))
            setDuration(secondsToMinSec(audio.duration))
          }, false)
        }
      }, [isPlaying])

    const pause = () =>{
        setIsPaused(true)
        document.querySelector('#audio-element').pause()
    }
    const play = () =>{
        document.querySelector('#audio-element').play()
        setIsPaused(false)
    }

    const playOnSelect = (song)  =>{
        try{ 
            document.querySelector('#audio-element').src = song.musicUrl
            document.querySelector('#audio-element').play()
            setCurrentSong(song)
            setIsPaused(false)
            setIsPlaying(true)
            if(currentPage===Pages.Home){
                setPlayingPage(0)
            }else if(currentPage===Pages.Playing){

            }else if(currentPage===Pages.MyPlaylist){
                setPlayingPage(2)
            }else if(currentPage===Pages.LikedSongs){
                setPlayingPage(3)
            }
        }catch(e){
            console.log(e.message)
        }
    }

    const secondsToMinSec = (value) =>{
        const minute = Math.round(value/60)
        let second = Math.round(value%60)

        second = second >= 10 ? second : '0' + second;
        return minute + ':' + second
    }

    const updateProgress = e => {
        const _progress  = e.target.currentTime/ e.target.duration
        setProgress(_progress.toFixed(2)*100)
    }

    const updateVolume = e =>{
        try {
            setVolume(e.target.value)
            document.querySelector('#audio-element').volume = e.target.value
        } catch (e) {
            console.log(e)
        }
    }

    const onProgressChange = (e) =>{
        const _progress= e.target.value/100
        document.querySelector('#audio-element').currentTime = _progress* document.querySelector('#audio-element').duration
    }
    const onVolumeChange = (e) =>{
        const _volume = e.target.value/100
        document.querySelector('#audio-element').volume = _volume
    }

    const playNext = () =>{
        playOnSelect(appAlbums[appAlbums.findIndex(val=>val.albumName===currentSong.album)].songs[currentSong.index+1])
    }
    const playPrevious = () =>{
        playOnSelect(appAlbums[appAlbums.findIndex(val=>val.albumName===currentSong.album)].songs[currentSong.index-1])
    }

    return <SpotifyContext.Provider
    value={{
        isPlaying, setIsPlaying,
        isPaused, setIsPaused,
        currentSong, setCurrentSong,
        currentPage,setCurrentPage,
        listCount,setListCount,
        albumDuration,setAlbumDuration,
        albumsShown,setAlbumsShown,
        currentAlbum,setCurrentAlbum,
        isTimedOut, setIsTimedOut,
        volume,updateVolume,
        progress,updateProgress, 
        play, pause,
        playNext,
        playPrevious,
        playOnSelect,
        onProgressChange,
        onVolumeChange,
        timestamp,
        duration,
        Pages,
        playingPage,
        descSongs,
    }}
    >{children}</SpotifyContext.Provider>
}