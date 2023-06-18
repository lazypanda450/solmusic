"use strict";
exports.id = 268;
exports.ids = [268];
exports.modules = {

/***/ 4268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ SpotifyContext),
/* harmony export */   "p": () => (/* binding */ SpotifyProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_songs_copy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2054);



const SpotifyContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const SpotifyProvider = ({ children  })=>{
    const { 0: currentSong , 1: setCurrentSong  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: isPlaying , 1: setIsPlaying  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: isPaused , 1: setIsPaused  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: progress , 1: setProgress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: volume , 1: setVolume  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: timestamp , 1: setTimestamp  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: duration , 1: setDuration  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: listCount , 1: setListCount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: albumDuration , 1: setAlbumDuration  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('null');
    const { 0: albumsShown , 1: setAlbumsShown  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: currentAlbum , 1: setCurrentAlbum  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(3);
    const { 0: playingPage , 1: setPlayingPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: descSongs1 , 1: setDescSongs  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: isTimedOut , 1: setIsTimedOut  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: currentPage , 1: setCurrentPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const Pages = {
        Home: 0,
        Playing: 1,
        MyPlaylist: 2,
        LikedSongs: 3
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        _data_songs_copy__WEBPACK_IMPORTED_MODULE_2__/* .appAlbums.forEach */ .y.forEach((album)=>{
            album.songs.forEach((song)=>{
                setDescSongs((descSongs)=>[
                        ...descSongs,
                        song
                    ]
                );
            });
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isPlaying) {
            let audio = document.querySelector('#audio-element');
            audio.addEventListener("timeupdate", function() {
                setTimestamp(secondsToMinSec(audio.currentTime));
                setDuration(secondsToMinSec(audio.duration));
            }, false);
        }
    }, [
        isPlaying
    ]);
    const pause = ()=>{
        setIsPaused(true);
        document.querySelector('#audio-element').pause();
    };
    const play = ()=>{
        document.querySelector('#audio-element').play();
        setIsPaused(false);
    };
    const playOnSelect = (song)=>{
        try {
            document.querySelector('#audio-element').src = song.musicUrl;
            document.querySelector('#audio-element').play();
            setCurrentSong(song);
            setIsPaused(false);
            setIsPlaying(true);
            if (currentPage === Pages.Home) {
                setPlayingPage(0);
            } else if (currentPage === Pages.Playing) {} else if (currentPage === Pages.MyPlaylist) {
                setPlayingPage(2);
            } else if (currentPage === Pages.LikedSongs) {
                setPlayingPage(3);
            }
        } catch (e) {
            console.log(e.message);
        }
    };
    const secondsToMinSec = (value)=>{
        const minute = Math.round(value / 60);
        let second = Math.round(value % 60);
        second = second >= 10 ? second : '0' + second;
        return minute + ':' + second;
    };
    const updateProgress = (e)=>{
        const _progress = e.target.currentTime / e.target.duration;
        setProgress(_progress.toFixed(2) * 100);
    };
    const updateVolume = (e)=>{
        try {
            setVolume(e.target.value);
            document.querySelector('#audio-element').volume = e.target.value;
        } catch (e1) {
            console.log(e1);
        }
    };
    const onProgressChange = (e)=>{
        const _progress = e.target.value / 100;
        document.querySelector('#audio-element').currentTime = _progress * document.querySelector('#audio-element').duration;
    };
    const onVolumeChange = (e)=>{
        const _volume = e.target.value / 100;
        document.querySelector('#audio-element').volume = _volume;
    };
    const playNext = ()=>{
        playOnSelect(_data_songs_copy__WEBPACK_IMPORTED_MODULE_2__/* .appAlbums */ .y[_data_songs_copy__WEBPACK_IMPORTED_MODULE_2__/* .appAlbums.findIndex */ .y.findIndex((val)=>val.albumName === currentSong.album
        )].songs[currentSong.index + 1]);
    };
    const playPrevious = ()=>{
        playOnSelect(_data_songs_copy__WEBPACK_IMPORTED_MODULE_2__/* .appAlbums */ .y[_data_songs_copy__WEBPACK_IMPORTED_MODULE_2__/* .appAlbums.findIndex */ .y.findIndex((val)=>val.albumName === currentSong.album
        )].songs[currentSong.index - 1]);
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SpotifyContext.Provider, {
        value: {
            isPlaying,
            setIsPlaying,
            isPaused,
            setIsPaused,
            currentSong,
            setCurrentSong,
            currentPage,
            setCurrentPage,
            listCount,
            setListCount,
            albumDuration,
            setAlbumDuration,
            albumsShown,
            setAlbumsShown,
            currentAlbum,
            setCurrentAlbum,
            isTimedOut,
            setIsTimedOut,
            volume,
            updateVolume,
            progress,
            updateProgress,
            play,
            pause,
            playNext,
            playPrevious,
            playOnSelect,
            onProgressChange,
            onVolumeChange,
            timestamp,
            duration,
            Pages,
            playingPage,
            descSongs: descSongs1
        },
        children: children
    }));
};


/***/ }),

/***/ 2054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ appAlbums)
/* harmony export */ });
const appAlbums = [
    {
        albumId: 1,
        albumName: 'Yarım Kalan EP',
        artiste: 'Hidra',
        releaseDate: '2017',
        songs: [
            {
                id: 1,
                index: 0,
                title: 'Var',
                artiste: 'Hidra,FerzanBeats',
                artistCover: '/assets/artists/hidra.png',
                plays: 150707,
                songLength: '4:09',
                album: 'Yarım Kalan EP',
                cover: '/assets/covers/yarim-kalan-ep.png',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1683546850/music/Hidra/Yar%C4%B1m%20Kalan%20EP/a3oba8uqldlitwmsswo3.mp3',
                isLiked: false
            },
            {
                id: 2,
                index: 1,
                title: 'Nabız',
                artiste: 'Hidra,FerzanBeats',
                artistCover: '/assets/artists/hidra.png',
                plays: 24258191,
                songLength: '4:19',
                album: 'Yarım Kalan EP',
                cover: '/assets/covers/yarim-kalan-ep.png',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1683578585/music/Hidra/Yar%C4%B1m%20Kalan%20EP/lcz38ltblppteyrwzfvg.mp3',
                isLiked: false
            },
            {
                id: 3,
                index: 2,
                title: 'Uzağa Gidelim',
                artiste: 'Hidra,FerzanBeats',
                artistCover: '/assets/artists/hidra.png',
                plays: 114644,
                songLength: '3:42',
                album: 'Yarım Kalan EP',
                cover: '/assets/covers/yarim-kalan-ep.png',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1683579394/music/Hidra/Yar%C4%B1m%20Kalan%20EP/azzofbonlbrplfnykx0o.mp3',
                isLiked: false
            },
            {
                id: 4,
                index: 3,
                title: 'Kırmızı Kalp',
                artiste: 'Hidra,FerzanBeats,A-pooh',
                artistCover: '/assets/artists/hidra.png',
                plays: 152946,
                songLength: '4:02',
                album: 'Yarım Kalan EP',
                cover: '/assets/covers/yarim-kalan-ep.png',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1683579567/music/Hidra/Yar%C4%B1m%20Kalan%20EP/irzf4yhqnv1qds4jgckl.mp3',
                isLiked: false
            },
            {
                id: 5,
                index: 4,
                title: 'Kudurtan Şehir',
                artiste: 'Hidra,FerzanBeats',
                artistCover: '/assets/artists/hidra.png',
                plays: 146847,
                songLength: '4:08',
                album: 'Yarım Kalan EP',
                cover: '/assets/covers/yarim-kalan-ep.png',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1683580730/music/Hidra/Yar%C4%B1m%20Kalan%20EP/jfkmk6ipizmkylz5smjr.mp3',
                isLiked: false
            },
            {
                id: 6,
                index: 5,
                title: 'Cehennem',
                artiste: 'Hidra,FerzanBeats',
                artistCover: '/assets/artists/hidra.png',
                plays: 43841,
                songLength: '3:21',
                album: 'Yarım Kalan EP',
                cover: '/assets/covers/yarim-kalan-ep.png',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1683580847/music/Hidra/Yar%C4%B1m%20Kalan%20EP/mgojkxnwdlnbbdk5df8z.mp3',
                isLiked: false
            },
            {
                id: 7,
                index: 6,
                title: 'Bye Bye',
                artiste: 'Hidra,FerzanBeats',
                artistCover: '/assets/artists/hidra.png',
                plays: 47418,
                songLength: '2:01',
                album: 'Yarım Kalan EP',
                cover: '/assets/covers/yarim-kalan-ep.png',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1683581038/music/Hidra/Yar%C4%B1m%20Kalan%20EP/emqy7yo2hfkrtydgnjss.mp3',
                isLiked: false
            }, 
        ],
        albumDuration: '12 dk'
    },
    {
        albumId: 2,
        albumName: 'Renkler ve Islıklar',
        artiste: 'Efkan Şeşen',
        releaseDate: '2008',
        songs: [
            {
                id: 8,
                index: 0,
                title: 'Bintis Selebiya',
                artiste: 'Efkan Şeşen',
                artistCover: '/assets/artists/efkansesen.png',
                plays: 67892,
                songLength: '2:30',
                album: 'Renkler ve Islıklar',
                cover: '/assets/covers/colors-and-whistles.png',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1686381221/music/Efkan%20%C5%9Ee%C5%9Fen/Renkler%20ve%20Isl%C4%B1klar/dkupoposzh7w4pzgiiz0.mp3',
                isLiked: false
            },
            {
                id: 9,
                index: 1,
                title: 'Elgajiye',
                artiste: 'Efkan Şeşen',
                artistCover: '/assets/artists/efkansesen.png',
                plays: 44412,
                songLength: '2:56',
                album: 'Renkler ve Islıklar',
                cover: '/assets/covers/colors-and-whistles.png',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1686381221/music/Efkan%20%C5%9Ee%C5%9Fen/Renkler%20ve%20Isl%C4%B1klar/dvlqknz8vqs1ggak2mno.mp3',
                isLiked: false
            },
            {
                id: 10,
                index: 2,
                title: 'Allam Alam',
                artiste: 'Efkan Şeşen',
                artistCover: '/assets/artists/efkansesen.png',
                plays: 41675,
                songLength: '2:18',
                album: 'Renkler ve Islıklar',
                cover: '/assets/covers/colors-and-whistles.png',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1686381222/music/Efkan%20%C5%9Ee%C5%9Fen/Renkler%20ve%20Isl%C4%B1klar/iorj0qpsooupoy6dgkmc.mp3',
                isLiked: false
            },
            {
                id: 11,
                index: 3,
                title: 'Sarı Gelin',
                artiste: 'Efkan Şeşen',
                artistCover: '/assets/artists/efkansesen.png',
                plays: 338991,
                songLength: '4:36',
                album: 'Renkler ve Islıklar',
                cover: '/assets/covers/colors-and-whistles.png',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1686381221/music/Efkan%20%C5%9Ee%C5%9Fen/Renkler%20ve%20Isl%C4%B1klar/hptqyttogtufptabsxyk.mp3',
                isLiked: false
            },
            {
                id: 12,
                index: 4,
                title: 'Mohevis Kalo',
                artiste: 'Efkan Şeşen',
                artistCover: '/assets/artists/efkansesen.png',
                plays: 122156,
                songLength: '2:29',
                album: 'Renkler ve Islıklar',
                cover: '/assets/covers/colors-and-whistles.png',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1686381220/music/Efkan%20%C5%9Ee%C5%9Fen/Renkler%20ve%20Isl%C4%B1klar/vpoiidhalvbc0auxskz4.mp3',
                isLiked: false
            },
            {
                id: 13,
                index: 5,
                title: 'Pavane',
                artiste: 'Efkan Şeşen',
                artistCover: '/assets/artists/efkansesen.png',
                plays: 153956,
                songLength: '3:38',
                album: 'Renkler ve Islıklar',
                cover: '/assets/covers/colors-and-whistles.png',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1686381222/music/Efkan%20%C5%9Ee%C5%9Fen/Renkler%20ve%20Isl%C4%B1klar/iovufftiuniq5ba5yvds.mp3',
                isLiked: false
            },
            {
                id: 14,
                index: 6,
                title: 'Polyushka Polye',
                artiste: 'Efkan Şeşen',
                artistCover: '/assets/artists/efkansesen.png',
                plays: 1765545,
                songLength: '3:31',
                album: 'Renkler ve Islıklar',
                cover: '/assets/covers/colors-and-whistles.png',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1686381223/music/Efkan%20%C5%9Ee%C5%9Fen/Renkler%20ve%20Isl%C4%B1klar/h4d6kkdjkrwyn2ex2kyr.mp3',
                isLiked: false
            },
            {
                id: 15,
                index: 7,
                title: 'Londonderry Air',
                artiste: 'Efkan Şeşen',
                artistCover: '/assets/artists/efkansesen.png',
                plays: 40037,
                songLength: '2:37',
                album: 'Renkler ve Islıklar',
                cover: '/assets/covers/colors-and-whistles.png',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1686381222/music/Efkan%20%C5%9Ee%C5%9Fen/Renkler%20ve%20Isl%C4%B1klar/jmgvpjvrdqryztwmfmx4.mp3',
                isLiked: false
            },
            {
                id: 16,
                index: 8,
                title: 'Macedionan Medley',
                artiste: 'Efkan Şeşen',
                artistCover: '/assets/artists/efkansesen.png',
                plays: 29723,
                songLength: '3:29',
                album: 'Renkler ve Islıklar',
                cover: '/assets/covers/colors-and-whistles.png',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1686381224/music/Efkan%20%C5%9Ee%C5%9Fen/Renkler%20ve%20Isl%C4%B1klar/rbaluvawzecdlrucmvfe.mp3',
                isLiked: false
            },
            {
                id: 17,
                index: 9,
                title: 'Hungarian Dance',
                artiste: 'Efkan Şeşen',
                artistCover: '/assets/artists/efkansesen.png',
                plays: 33873,
                songLength: '3:39',
                album: 'Renkler ve Islıklar',
                cover: '/assets/covers/colors-and-whistles.png',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1686381223/music/Efkan%20%C5%9Ee%C5%9Fen/Renkler%20ve%20Isl%C4%B1klar/pjrd6hmgvvyeq9bdt1jz.mp3',
                isLiked: false
            },
            {
                id: 18,
                index: 10,
                title: '\xc7arşambayı Sel Aldı',
                artiste: 'Efkan Şeşen',
                artistCover: '/assets/artists/efkansesen.png',
                plays: 98002,
                songLength: '4:11',
                album: 'Renkler ve Islıklar',
                cover: '/assets/covers/colors-and-whistles.png',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1686381227/music/Efkan%20%C5%9Ee%C5%9Fen/Renkler%20ve%20Isl%C4%B1klar/jdxlbuges8cktjswq34b.mp3',
                isLiked: false
            },
            {
                id: 19,
                index: 11,
                title: 'Qundo Calienta El Sol',
                artiste: 'Efkan Şeşen',
                artistCover: '/assets/artists/efkansesen.png',
                plays: 76632,
                songLength: '1:51',
                album: 'Renkler ve Islıklar',
                cover: '/assets/covers/colors-and-whistles.png',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1686381224/music/Efkan%20%C5%9Ee%C5%9Fen/Renkler%20ve%20Isl%C4%B1klar/bame5wwzwc9ojjphawr4.mp3',
                isLiked: false
            },
            {
                id: 20,
                index: 12,
                title: 'Cilveloy Nanayda',
                artiste: 'Efkan Şeşen',
                artistCover: '/assets/artists/efkansesen.png',
                plays: 167221,
                songLength: '2:30',
                album: 'Renkler ve Islıklar',
                cover: '/assets/covers/colors-and-whistles.png',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1686381225/music/Efkan%20%C5%9Ee%C5%9Fen/Renkler%20ve%20Isl%C4%B1klar/l9azpm7pvbakjjiq5djw.mp3',
                isLiked: false
            },
            {
                id: 21,
                index: 13,
                title: 'Katakofti',
                artiste: 'Efkan Şeşen',
                artistCover: '/assets/artists/efkansesen.png',
                plays: 178989,
                songLength: '2:49',
                album: 'Renkler ve Islıklar',
                cover: '/assets/covers/colors-and-whistles.png',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1686381225/music/Efkan%20%C5%9Ee%C5%9Fen/Renkler%20ve%20Isl%C4%B1klar/os8ox30azsltvovgvsgc.mp3',
                isLiked: false
            },
            {
                id: 22,
                index: 14,
                title: 'Dillirga',
                artiste: 'Efkan Şeşen',
                artistCover: '/assets/artists/efkansesen.png',
                plays: 108680,
                songLength: '2:01',
                album: 'Renkler ve Islıklar',
                cover: '/assets/covers/colors-and-whistles.png',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1686381224/music/Efkan%20%C5%9Ee%C5%9Fen/Renkler%20ve%20Isl%C4%B1klar/boclj2kpmdcqlpallro0.mp3',
                isLiked: false
            },
            {
                id: 23,
                index: 15,
                title: 'Bella Ciao',
                artiste: 'Efkan Şeşen',
                artistCover: '/assets/artists/efkansesen.png',
                plays: 2213653,
                songLength: '2:09',
                album: 'Renkler ve Islıklar',
                cover: '/assets/covers/colors-and-whistles.png',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1686381225/music/Efkan%20%C5%9Ee%C5%9Fen/Renkler%20ve%20Isl%C4%B1klar/phobvvitippytpw0tge6.mp3',
                isLiked: false
            },
            {
                id: 24,
                index: 16,
                title: "D\xfcnya'nın G\xf6zyaşları",
                artiste: 'Efkan Şeşen',
                artistCover: '/assets/artists/efkansesen.png',
                plays: 57180,
                songLength: '2:06',
                album: 'Renkler ve Islıklar',
                cover: '/assets/covers/colors-and-whistles.png',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1686381225/music/Efkan%20%C5%9Ee%C5%9Fen/Renkler%20ve%20Isl%C4%B1klar/cpgjamstgnein7kmaaz6.mp3',
                isLiked: false
            },
            {
                id: 25,
                index: 17,
                title: 'Yara Mina Bedewe',
                artiste: 'Efkan Şeşen',
                artistCover: '/assets/artists/efkansesen.png',
                plays: 64345,
                songLength: '2:51',
                album: 'Renkler ve Islıklar',
                cover: '/assets/covers/colors-and-whistles.png',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1686381226/music/Efkan%20%C5%9Ee%C5%9Fen/Renkler%20ve%20Isl%C4%B1klar/rqeupb9crvixsyexqiu7.mp3',
                isLiked: false
            }, 
        ],
        albumDuration: '21 dk'
    },
    {
        albumId: 3,
        albumName: 'İnandığın Masallar',
        artiste: 'Pinhani',
        releaseDate: '2006',
        songs: [
            {
                id: 26,
                index: 0,
                title: "İstanbul'da",
                artiste: 'Pinhani',
                artistCover: '/assets/artists/pinhani.jpg',
                plays: 64345,
                songLength: '4:36',
                album: 'İnandığın Masallar',
                cover: '/assets/covers/inandigin-masallar.png',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1686385928/music/Pinhani/%C4%B0nand%C4%B1%C4%9F%C4%B1n%20Masallar/w1dllpf6oytlnkuwheky.mp3',
                isLiked: false
            },
            {
                id: 27,
                index: 1,
                title: "Seni Bana Anlatırlar",
                artiste: 'Pinhani',
                artistCover: '/assets/artists/pinhani.jpg',
                plays: 64345,
                songLength: '4:25',
                album: 'İnandığın Masallar',
                cover: '/assets/covers/inandigin-masallar.png',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1686385927/music/Pinhani/%C4%B0nand%C4%B1%C4%9F%C4%B1n%20Masallar/ij8rnxjwwprmnzebgswa.mp3',
                isLiked: false
            },
            {
                id: 28,
                index: 2,
                title: "Hele Bi Gel",
                artiste: 'Pinhani',
                artistCover: '/assets/artists/pinhani.jpg',
                plays: 64345,
                songLength: '3:51',
                album: 'İnandığın Masallar',
                cover: '/assets/covers/inandigin-masallar.png',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1686385923/music/Pinhani/%C4%B0nand%C4%B1%C4%9F%C4%B1n%20Masallar/vbcqnx33ez3jda1i6sfh.mp3',
                isLiked: false
            },
            {
                id: 29,
                index: 3,
                title: "Beni Al",
                artiste: 'Pinhani',
                artistCover: '/assets/artists/pinhani.jpg',
                plays: 64345,
                songLength: '3:36',
                album: 'İnandığın Masallar',
                cover: '/assets/covers/inandigin-masallar.png',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1686385922/music/Pinhani/%C4%B0nand%C4%B1%C4%9F%C4%B1n%20Masallar/oalscb5jrt98nrccalqp.mp3',
                isLiked: false
            },
            {
                id: 30,
                index: 4,
                title: "D\xf6n Bak D\xfcnyaya",
                artiste: 'Pinhani',
                artistCover: '/assets/artists/pinhani.jpg',
                plays: 64345,
                songLength: '6:33',
                album: 'İnandığın Masallar',
                cover: '/assets/covers/inandigin-masallar.png',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1686385928/music/Pinhani/%C4%B0nand%C4%B1%C4%9F%C4%B1n%20Masallar/ea8ypbfprnk1vj200ss0.mp3',
                isLiked: false
            },
            {
                id: 31,
                index: 5,
                title: "Ben Nasıl B\xfcy\xfck Adam Olucam",
                artiste: 'Pinhani',
                artistCover: '/assets/artists/pinhani.jpg',
                plays: 64345,
                songLength: '4:27',
                album: 'İnandığın Masallar',
                cover: '/assets/covers/inandigin-masallar.png',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1686385922/music/Pinhani/%C4%B0nand%C4%B1%C4%9F%C4%B1n%20Masallar/whflunjclvkimlxzfjpg.mp3',
                isLiked: false
            },
            {
                id: 32,
                index: 6,
                title: "Haftanın Sonu",
                artiste: 'Pinhani',
                artistCover: '/assets/artists/pinhani.jpg',
                plays: 64345,
                songLength: '3:29',
                album: 'İnandığın Masallar',
                cover: '/assets/covers/inandigin-masallar.png',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1686385922/music/Pinhani/%C4%B0nand%C4%B1%C4%9F%C4%B1n%20Masallar/ntwfs2uafnqctmbglsvs.mp3',
                isLiked: false
            },
            {
                id: 33,
                index: 7,
                title: "Unutuldular",
                artiste: 'Pinhani',
                artistCover: '/assets/artists/pinhani.jpg',
                plays: 64345,
                songLength: '4:39',
                album: 'İnandığın Masallar',
                cover: '/assets/covers/inandigin-masallar.png',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1686385923/music/Pinhani/%C4%B0nand%C4%B1%C4%9F%C4%B1n%20Masallar/cojs31eomdg5dstxxwqm.mp3',
                isLiked: false
            },
            {
                id: 34,
                index: 8,
                title: "Yıldızlar",
                artiste: 'Pinhani',
                artistCover: '/assets/artists/pinhani.jpg',
                plays: 64345,
                songLength: '4:15',
                album: 'İnandığın Masallar',
                cover: '/assets/covers/inandigin-masallar.png',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1686385927/music/Pinhani/%C4%B0nand%C4%B1%C4%9F%C4%B1n%20Masallar/j49vl6a1kyna1n0vxgfn.mp3',
                isLiked: false
            },
            {
                id: 35,
                index: 9,
                title: "G\xf6zler Anlatır",
                artiste: 'Pinhani',
                artistCover: '/assets/artists/pinhani.jpg',
                plays: 64345,
                songLength: '4:25',
                album: 'İnandığın Masallar',
                cover: '/assets/covers/inandigin-masallar.png',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1686385926/music/Pinhani/%C4%B0nand%C4%B1%C4%9F%C4%B1n%20Masallar/qt3pfizniggu6qcl1hzr.mp3',
                isLiked: false
            }, 
        ],
        albumDuration: '33 dk'
    },
    {
        albumId: 4,
        albumName: 'Sen Ağlama',
        artiste: 'Sezen Aksu',
        releaseDate: '1984',
        songs: [
            {
                id: 36,
                index: 0,
                title: "Sen Ağlama",
                artiste: 'Sezen Aksu',
                artistCover: '/assets/artists/sezen.jpg',
                plays: 64345,
                songLength: '5:46',
                album: 'Sen Ağlama',
                cover: '/assets/covers/sen-aglama.jpg',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1686387111/music/Sezen%20Aksu/Sen%20A%C4%9Flama/teopntx83caldgjv0bxd.mp3',
                isLiked: false
            },
            {
                id: 37,
                index: 1,
                title: "Haydi Gel Benimle Ol",
                artiste: 'Sezen Aksu',
                artistCover: '/assets/artists/sezen.jpg',
                plays: 64345,
                songLength: '4:31',
                album: 'Sen Ağlama',
                cover: '/assets/covers/sen-aglama.jpg',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1686387102/music/Sezen%20Aksu/Sen%20A%C4%9Flama/px6dkgl2d0pcbtwcxlrf.mp3',
                isLiked: false
            },
            {
                id: 38,
                index: 2,
                title: "Geri D\xf6n",
                artiste: 'Sezen Aksu',
                artistCover: '/assets/artists/sezen.jpg',
                plays: 64345,
                songLength: '4:19',
                album: 'Sen Ağlama',
                cover: '/assets/covers/sen-aglama.jpg',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1686387107/music/Sezen%20Aksu/Sen%20A%C4%9Flama/b4augazd2zcxxceud7dj.mp3',
                isLiked: false
            },
            {
                id: 39,
                index: 3,
                title: "Yeter",
                artiste: 'Sezen Aksu',
                artistCover: '/assets/artists/sezen.jpg',
                plays: 64345,
                songLength: '3:17',
                album: 'Sen Ağlama',
                cover: '/assets/covers/sen-aglama.jpg',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1686387101/music/Sezen%20Aksu/Sen%20A%C4%9Flama/peci3txzz0qltemamseq.mp3',
                isLiked: false
            },
            {
                id: 40,
                index: 4,
                title: "Bu Gece",
                artiste: 'Sezen Aksu',
                artistCover: '/assets/artists/sezen.jpg',
                plays: 6445,
                songLength: '2:58',
                album: 'Sen Ağlama',
                cover: '/assets/covers/sen-aglama.jpg',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1686387104/music/Sezen%20Aksu/Sen%20A%C4%9Flama/qfb1xh2shh9s6mdmxsb6.mp3',
                isLiked: false
            },
            {
                id: 41,
                index: 5,
                title: "Dağlar Dağlar",
                artiste: 'Sezen Aksu',
                artistCover: '/assets/artists/sezen.jpg',
                plays: 64345,
                songLength: '3:12',
                album: 'Sen Ağlama',
                cover: '/assets/covers/sen-aglama.jpg',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1686387102/music/Sezen%20Aksu/Sen%20A%C4%9Flama/zswdpkpyhhjxgtn8mtho.mp3',
                isLiked: false
            },
            {
                id: 42,
                index: 6,
                title: "\xc7ocuklar Gibi",
                artiste: 'Sezen Aksu',
                artistCover: '/assets/artists/sezen.jpg',
                plays: 64345,
                songLength: '4:16',
                album: 'Sen Ağlama',
                cover: '/assets/covers/sen-aglama.jpg',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1686387109/music/Sezen%20Aksu/Sen%20A%C4%9Flama/a8k4wduynckmly8wovkp.mp3',
                isLiked: false
            },
            {
                id: 43,
                index: 7,
                title: "T\xfckeneceğiz",
                artiste: 'Sezen Aksu',
                artistCover: '/assets/artists/sezen.jpg',
                plays: 64345,
                songLength: '4:19',
                album: 'Sen Ağlama',
                cover: '/assets/covers/sen-aglama.jpg',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1686387107/music/Sezen%20Aksu/Sen%20A%C4%9Flama/dvuthn8kprzlqfier3rv.mp3',
                isLiked: false
            },
            {
                id: 44,
                index: 8,
                title: "Bir Başka Aşk",
                artiste: 'Sezen Aksu',
                artistCover: '/assets/artists/sezen.jpg',
                plays: 64345,
                songLength: '3:42',
                album: 'Sen Ağlama',
                cover: '/assets/covers/sen-aglama.jpg',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1686387111/music/Sezen%20Aksu/Sen%20A%C4%9Flama/kfbtaf0ebkc0ulwqqk6k.mp3',
                isLiked: false
            },
            {
                id: 45,
                index: 9,
                title: "Bindokuzy\xfczkırk",
                artiste: 'Sezen Aksu',
                artistCover: '/assets/artists/sezen.jpg',
                plays: 64345,
                songLength: '3:03',
                album: 'Sen Ağlama',
                cover: '/assets/covers/sen-aglama.jpg',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1686387110/music/Sezen%20Aksu/Sen%20A%C4%9Flama/z3tqp96ciadvpvajewdu.mp3',
                isLiked: false
            }, 
        ],
        albumDuration: '44 dk'
    },
    {
        albumId: 5,
        albumName: 'Yolla - Pop Orient Mix',
        artiste: 'Tarkan',
        releaseDate: '2018',
        songs: [
            {
                id: 46,
                index: 0,
                title: "Yolla",
                artiste: 'Tarkan',
                artistCover: '/assets/artists/tarkan.jpg',
                plays: 64345,
                songLength: '4:45',
                album: 'Yolla - Pop Orient Mix',
                artiste: 'Sezen Aksu',
                cover: '/assets/covers/yolla-pop-mix.png',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1686388314/music/Tarkan/Yolla%20-%20Pop%20Orient%20Mix/gfmsf9f38aj8dtevzvw6.mp3',
                isLiked: false
            }, 
        ],
        albumDuration: '5 dk'
    },
    {
        albumId: 6,
        albumName: 'Martılar',
        artiste: 'Edis',
        artistCover: '/assets/artists/edis.jpg',
        releaseDate: '2021',
        songs: [
            {
                id: 47,
                index: 0,
                title: "Martılar",
                artiste: 'Edis',
                plays: 64.345,
                songLength: '2:46',
                album: 'Martılar',
                cover: '/assets/covers/martilar.png',
                musicUrl: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1686388581/music/Edis/Mart%C4%B1lar/d3dhud12ycv5fkgxciom.mp3',
                isLiked: false
            }, 
        ],
        albumDuration: '3 dk'
    }, 
];


/***/ })

};
;