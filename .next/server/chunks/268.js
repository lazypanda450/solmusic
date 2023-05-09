"use strict";
exports.id = 268;
exports.ids = [268];
exports.modules = {

/***/ 268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ SpotifyContext),
/* harmony export */   "p": () => (/* binding */ SpotifyProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_songs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(459);




// import {next} from "next/types";
const SpotifyContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const SpotifyProvider = ({ children  })=>{
    const { 0: currentSong , 1: setCurrentSong  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: isPlaying , 1: setIsPlaying  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: isPaused , 1: setIsPaused  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: progress , 1: setProgress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: volume , 1: setVolume  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: timestamp , 1: setTimestamp  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: duration , 1: setDuration  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
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
    const playNext = (songs1)=>{
        const id = songs1.findIndex((value)=>value === currentSong
        );
        console.log(id);
        if (songs1.length === id + 1) {
            playOnSelect(songs1[0]);
            setCurrentSong(songs1[0]);
            return;
        } else {
            const nextSong = songs1[id + 1];
            playOnSelect(nextSong);
        }
    };
    const playPrevious = (songs2)=>{
        const id = songs2.findIndex((value)=>value === currentSong
        );
        if (id === 0) {
            playOnSelect(songs2[songs2.length - 1]);
            setCurrentSong(songs2[songs2.length - 1]);
            return;
        } else {
            const prevSong = songs2[id - 1];
            playOnSelect(prevSong);
        }
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SpotifyContext.Provider, {
        value: {
            isPlaying,
            setIsPlaying,
            isPaused,
            setIsPaused,
            currentSong,
            setCurrentSong,
            play,
            pause,
            updateProgress,
            progress,
            playOnSelect,
            onProgressChange,
            onVolumeChange,
            playNext,
            playPrevious,
            timestamp,
            updateVolume,
            volume,
            duration
        },
        children: children
    }));
};


/***/ }),

/***/ 459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export songs */
const songs = [
    {
        index: 1,
        title: 'Var',
        artiste: 'Hidra,FerzanBeats',
        plays: '150.707',
        songLength: '4:09',
        album: 'Yarım Kalan EP',
        cover: '../public/assets/yarim-kalan-ep.png',
        link: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1683546850/music/Hidra/Yar%C4%B1m%20Kalan%20EP/a3oba8uqldlitwmsswo3.mp3'
    },
    {
        index: 2,
        title: 'Nabız',
        artiste: 'Hidra,FerzanBeats,Şehinşah,Massaka,No1,Melek Mosso',
        plays: '24.258.191',
        songLength: '4:19',
        album: 'Yarım Kalan EP',
        cover: '../public/assets/yarim-kalan-ep.png',
        link: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1683578585/music/Hidra/Yar%C4%B1m%20Kalan%20EP/lcz38ltblppteyrwzfvg.mp3'
    },
    {
        index: 3,
        title: 'Uzağa Gidelim',
        artiste: 'Hidra,FerzanBeats',
        plays: '114.644',
        songLength: '3:42',
        album: 'Yarım Kalan EP',
        cover: '../public/assets/yarim-kalan-ep.png',
        link: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1683579394/music/Hidra/Yar%C4%B1m%20Kalan%20EP/azzofbonlbrplfnykx0o.mp3'
    },
    {
        index: 4,
        title: 'Kırmızı Kalp',
        artiste: 'Hidra,FerzanBeats,A-pooh',
        plays: '152.946',
        songLength: '4:02',
        album: 'Yarım Kalan EP',
        cover: '../public/assets/yarim-kalan-ep.png',
        link: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1683579567/music/Hidra/Yar%C4%B1m%20Kalan%20EP/irzf4yhqnv1qds4jgckl.mp3'
    },
    {
        index: 5,
        title: 'Kudurtan Şehir',
        artiste: 'Hidra,FerzanBeats',
        plays: '146.847',
        songLength: '4:08',
        album: 'Yarım Kalan EP',
        cover: '../public/assets/yarim-kalan-ep.png',
        link: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1683580730/music/Hidra/Yar%C4%B1m%20Kalan%20EP/jfkmk6ipizmkylz5smjr.mp3'
    },
    {
        index: 6,
        title: 'Cehennem',
        artiste: 'Hidra,FerzanBeats',
        plays: '43.841',
        songLength: '3:21',
        album: 'Yarım Kalan EP',
        cover: '../public/assets/yarim-kalan-ep.png',
        link: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1683580847/music/Hidra/Yar%C4%B1m%20Kalan%20EP/mgojkxnwdlnbbdk5df8z.mp3'
    },
    {
        index: 7,
        title: 'Bye Bye',
        artiste: 'Hidra,FerzanBeats',
        plays: '47.418',
        songLength: '2:01',
        album: 'Yarım Kalan EP',
        cover: '../public/assets/yarim-kalan-ep.png',
        link: 'https://res.cloudinary.com/dubyoc7bz/video/upload/v1683581038/music/Hidra/Yar%C4%B1m%20Kalan%20EP/emqy7yo2hfkrtydgnjss.mp3'
    }, 
];


/***/ })

};
;