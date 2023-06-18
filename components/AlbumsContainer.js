import Album from './Album'
import { appAlbums } from '../data/songs copy'

const AlbumsContainer = () => {
  return (
    <div className='flex justify-center flex-wrap mb-32'>
      {
        appAlbums.map((album)=>{
            return<Album key={album.index} 
            albumId={album.albumId}
            albumName={album.albumName} 
            artist={album.artiste} 
            release={album.releaseDate} 
            duration={album.albumDuration} 
            songs={album.songs}
            />
        })
      }
    </div>
  )
}

export default AlbumsContainer
