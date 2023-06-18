exports.id = 273;
exports.ids = [273];
exports.modules = {

/***/ 8065:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "UploadModal_wrapper__GY7jI",
	"modalButtons": "UploadModal_modalButtons__f_0ST",
	"title": "UploadModal_title__jDk1z",
	"modalTitle": "UploadModal_modalTitle__r9ZyW",
	"inputField": "UploadModal_inputField___gsI0",
	"inputTitle": "UploadModal_inputTitle__q5RjC",
	"inputContainer": "UploadModal_inputContainer__4jSUr",
	"input": "UploadModal_input__h6jcP",
	"button": "UploadModal_button__NqlGh",
	"createButton": "UploadModal_createButton__4tqic",
	"cancelButton": "UploadModal_cancelButton__42aYJ"
};


/***/ }),

/***/ 4891:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_AlbumsContainer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./context/context.js
var context = __webpack_require__(4268);
// EXTERNAL MODULE: ./data/songs copy.js
var songs_copy = __webpack_require__(2054);
// EXTERNAL MODULE: external "react-icons/cg"
var cg_ = __webpack_require__(7865);
;// CONCATENATED MODULE: ./components/Album.js





const styles = {
    albumContainer: `flex flex-col justify-between max-w-sm rounded overflow-hidden shadow-lg m-4 `,
    albumImage: `h-max`,
    albumTitle: `text-2xl font-bold`,
    albumArtist: `text-xl`,
    albumDetails: `flex justify-between p-4`,
    albumDate: `flex flex-row items-center spacing-4`
};
const Album = (props)=>{
    const { setCurrentAlbum , setAlbumsShown  } = (0,external_react_.useContext)(context/* SpotifyContext */.s);
    const setAlbum = ()=>{
        setCurrentAlbum(props.albumId);
        setAlbumsShown(false);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: styles.albumContainer,
        onClick: setAlbum,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: songs_copy/* appAlbums */.y[props.albumId - 1].songs[0].cover,
                alt: props.albumName,
                className: styles.albumImage
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: styles.albumDetails,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: styles.albumTitle,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: props.albumName
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: styles.albumArtist,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: props.artist
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: styles.albumDate,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(cg_.CgCalendarDates, {}),
                                    props.release
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: styles.albumDate,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(cg_.CgSandClock, {}),
                                    props.duration
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_Album = (Album);

;// CONCATENATED MODULE: ./components/AlbumsContainer.js



const AlbumsContainer = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex justify-center flex-wrap mb-32",
        children: songs_copy/* appAlbums.map */.y.map((album)=>{
            return(/*#__PURE__*/ jsx_runtime_.jsx(components_Album, {
                albumId: album.albumId,
                albumName: album.albumName,
                artist: album.artiste,
                release: album.releaseDate,
                duration: album.albumDuration,
                songs: album.songs
            }, album.index));
        })
    }));
};
/* harmony default export */ const components_AlbumsContainer = (AlbumsContainer);


/***/ }),

/***/ 2664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/UploadButton.js


const styles = {
    uploadButton: `bg-green-500 mr-10 px-3 py-1.5 cursor-pointer 
  rounded-full hover:scale-95 transition`
};
const UploadButton = ({ setShowUploadMusic  })=>{
    const uploadClicked = ()=>{
        setShowUploadMusic(true);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: styles.uploadButton,
            onClick: uploadClicked,
            children: "M\xfczik Y\xfckle"
        })
    }));
};
/* harmony default export */ const components_UploadButton = (UploadButton);

// EXTERNAL MODULE: ./context/context.js
var context = __webpack_require__(4268);
// EXTERNAL MODULE: ./data/songs copy.js
var songs_copy = __webpack_require__(2054);
// EXTERNAL MODULE: external "react-icons/ri"
var ri_ = __webpack_require__(8098);
;// CONCATENATED MODULE: ./components/Header.js








const Header_styles = {
    header: `max-w-7xl m-auto p-3`,
    headerWrapper: `flex items-center justify-between`,
    arrowButton: `bg-black mr-2 w-10 h-10 flex justify-center items-center 
  jusitfy-center rounded-full bg-opacity-50 cursor-pointer
  hover:bg-opacity-75`,
    headerRight: `flex`,
    profile: `flex items-center bg-black rounded-full p-1 px-3
  bg-opacity-50 cursor-pointer hover:bg-opacity-75`,
    profileAvatarContainer: `w-7 h-7 rounded-full -ml-2 mr-3
  flex items-center`,
    iconContainer: `ml-10`,
    title: `text-6xl font-extrabold`,
    playlistTextContent: `flex items-end justify-center mt-10`,
    controlsContainer: `flex justify-center items-center mt-10`,
    playButton: `bg-green-500 w-16 h-16 flex justify-center items-center
  rounded-full cursor-pointer`
};
const Header = ({ setShowUploadMusic , headerCover , demo , PK , timer  })=>{
    const { currentSong , listCount , setListCount , albumDuration , playingPage , likedSongs , setLikedSongs , currentPage , setCurrentPage , Pages , currentAlbum , setCurrentAlbum , play  } = (0,external_react_.useContext)(context/* SpotifyContext */.s);
    const { 0: title , 1: setTitle  } = (0,external_react_.useState)(' ');
    (0,external_react_.useEffect)(()=>{
        setTitle(' ');
        document.getElementById('likeCheck').checked = false;
        document.getElementById('blank-heart').className = '';
        document.getElementById('filled-heart').className = 'hidden';
        console.log(currentSong.isLiked && (songs_copy/* appAlbums */.y[currentAlbum - 1].albumName === currentSong.album || currentPage === Pages.LikedSongs) + ' aa');
        if (currentSong.isLiked && (songs_copy/* appAlbums */.y[currentAlbum - 1].albumName === currentSong.album || currentPage === Pages.LikedSongs)) {
            document.getElementById('likeCheck').checked = true;
            document.getElementById('blank-heart').className = 'hidden';
            document.getElementById('filled-heart').className = '';
            if (currentPage === Pages.LikedSongs || currentPage === Pages.Playing && playingPage === Pages.LikedSongs) {
                setTitle(currentSong.title);
            }
        }
        if ((currentPage === Pages.Home || currentPage === Pages.Playing) && playingPage === Pages.Home && songs_copy/* appAlbums */.y[currentAlbum - 1].albumName === currentSong.album) {
            setTitle(currentSong.title);
        } else if (currentPage === Pages.MyPlaylist && playingPage === Pages.MyPlaylist || currentPage === Pages.Playing && playingPage === Pages.MyPlaylist && !(songs_copy/* appAlbums */.y[currentAlbum - 1].albumName == currentSong.album)) {
            setTitle(currentSong.title);
            console.log(songs_copy/* appAlbums */.y[currentAlbum - 1].albumName === currentSong.album);
        }
        if (currentPage === Pages.MyPlaylist || currentPage === Pages.Playing && playingPage === Pages.MyPlaylist) {
            document.getElementById('blank-heart').className = 'hidden';
            document.getElementById('filled-heart').className = 'hidden';
        }
        console.log(playingPage);
    }, [
        currentSong,
        currentPage
    ]);
    const like = ()=>{
        var check = document.getElementById('likeCheck');
        if (check.checked == true) {
            console.log('checked');
            document.getElementById('blank-heart').className += ' hidden';
            document.getElementById('filled-heart').className = '';
            currentSong.isLiked = true;
        } else {
            console.log('unchecked');
            document.getElementById('blank-heart').className = '';
            document.getElementById('filled-heart').className += 'hidden';
            currentSong.isLiked = false;
            console.log(likedSongs);
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        classname: Header_styles.header,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: Header_styles.headerWrapper,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: Header_styles.headerRight,
                        children: [
                            !demo ? /*#__PURE__*/ jsx_runtime_.jsx(components_UploadButton, {
                                setShowUploadMusic: setShowUploadMusic
                            }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `bg-green-500 mr-10 px-3 py-1.5 cursor-pointer 
            rounded-full hover:scale-95 transition`,
                                children: timer < 60 ? 'Trial Expires in: ' + (60 - timer) : 'Trial Expires in: ' + 0
                            }),
                            !demo ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: Header_styles.profile,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: Header_styles.profileAvatarContainer,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            src: "/assets/avatar.jpg",
                                            width: 20,
                                            height: 20,
                                            alt: "avatar",
                                            className: "rounded-full"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: PK
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: Header_styles.profile,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: Header_styles.profileAvatarContainer,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            src: "/assets/avatar.jpg",
                                            width: 20,
                                            height: 20,
                                            alt: "avatar",
                                            className: "rounded-full"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "User PK"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: Header_styles.playlistTextContent,
                children: [
                    (currentPage === Pages.Home || currentPage === Pages.Playing && playingPage === Pages.Home) && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: headerCover,
                        width: 300,
                        height: 300,
                        alt: "artist",
                        id: "album-image"
                    }),
                    (currentPage === Pages.MyPlaylist || currentPage === Pages.Playing && playingPage === Pages.MyPlaylist) && /*#__PURE__*/ jsx_runtime_.jsx(ri_.RiUploadCloud2Line, {
                        size: 300,
                        color: "white"
                    }),
                    (currentPage === Pages.LikedSongs || currentPage === Pages.Playing && playingPage === Pages.LikedSongs) && /*#__PURE__*/ jsx_runtime_.jsx(ri_.RiHeartAddLine, {
                        size: 300,
                        color: "white"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "ml-5",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                children: currentPage === Pages.Playing && playingPage === Pages.Home && songs_copy/* appAlbums */.y[songs_copy/* appAlbums.findIndex */.y.findIndex((val)=>val.albumName === currentSong.album
                                )].albumName
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                children: currentPage === Pages.Home && songs_copy/* appAlbums */.y[currentAlbum - 1].albumName
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: Header_styles.title,
                                children: title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center mt-5",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: Header_styles.profileAvatarContainer,
                                        children: [
                                            currentPage === Pages.Home && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: songs_copy/* appAlbums */.y[currentAlbum - 1].songs[0].artistCover,
                                                width: 20,
                                                height: 20,
                                                alt: "artist",
                                                className: "rounded-full"
                                            }),
                                            currentPage === Pages.Playing && !playingPage === Pages.MyPlaylist && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: currentSong.artistCover,
                                                width: 20,
                                                height: 20,
                                                alt: "artist",
                                                className: "rounded-full"
                                            }),
                                            currentPage === Pages.MyPlaylist && '',
                                            currentPage === Pages.LikedSongs && ''
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: "text-bold",
                                            children: [
                                                currentPage === Pages.Home && songs_copy/* appAlbums */.y[currentAlbum - 1].artiste + ' • ' + songs_copy/* appAlbums */.y[currentAlbum - 1].releaseDate + ' • ' + listCount + ' Songs • ' + albumDuration + ' dk',
                                                currentPage === Pages.Playing && !(playingPage === Pages.MyPlaylist || playingPage === Pages.LikedSongs) && songs_copy/* appAlbums */.y[songs_copy/* appAlbums.findIndex */.y.findIndex((val)=>val.albumName === currentSong.album
                                                )].artiste + ' • ' + songs_copy/* appAlbums */.y[songs_copy/* appAlbums.findIndex */.y.findIndex((val)=>val.albumName === currentSong.album
                                                )].releaseDate + ' • ' + listCount + ' Songs • ' + albumDuration + ' dk',
                                                (currentPage === Pages.MyPlaylist || currentPage === Pages.Playing && playingPage === Pages.MyPlaylist) && 'Y\xfcklediğim M\xfczikler: ' + ' ' + listCount + ' Songs',
                                                (currentPage === Pages.LikedSongs || currentPage === Pages.Playing && playingPage === Pages.LikedSongs) && 'Favori M\xfcziklerim: ' + ' ' + listCount + ' Songs• ' + albumDuration + ' dk'
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: Header_styles.controlsContainer,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: Header_styles.playButton,
                        id: "play",
                        onClick: play,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: "/assets/play.svg",
                            width: 30,
                            height: 30,
                            alt: "play"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: Header_styles.iconContainer,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "checkbox",
                                id: "likeCheck",
                                onClick: like,
                                className: "hidden"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                htmlFor: "likeCheck",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "hidden",
                                        id: "filled-heart",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            src: "/assets/heart.svg",
                                            width: 30,
                                            height: 30,
                                            alt: "play"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "",
                                        id: "blank-heart",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            src: "/assets/blank-heart.svg",
                                            width: 30,
                                            height: 30,
                                            alt: "play"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_Header = (Header);


/***/ }),

/***/ 841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TableRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4861);
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4268);




const styles = {
    tableWrapper: `max-w-7xl m-auto p-3 mt-5 mb-40`,
    table: `w-full text-left`,
    tableHeader: `border-b border-gray-100/20 pb-5 opacity-50`
};
const Playlist = ({ songs  })=>{
    const { setListCount , setAlbumDuration  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_3__/* .SpotifyContext */ .s);
    var count = 0;
    var minutes = 0;
    var seconds = 0;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: styles.tableWrapper,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
            className: styles.table,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                    className: styles.tableHeader,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                className: "pb-3",
                                children: "#"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                className: "pb-3",
                                children: "Başlık"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                className: "pb-3",
                                children: "Oynatılan"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                className: "pb-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "assets/time.svg",
                                    alt: "time"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                    className: "mb-6 block"
                }),
                songs.map((song)=>{
                    count++;
                    setListCount(count);
                    minutes = minutes + parseInt(song.songLength.slice(0, 1));
                    seconds = seconds + parseInt(song.songLength.slice(2, song.songLength.length));
                    setAlbumDuration(minutes + parseInt(seconds / 60));
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TableRow__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        song: song
                    }, song.id));
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Playlist);


/***/ }),

/***/ 6350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TableRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4861);
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4268);




const styles = {
    tableWrapper: `max-w-7xl m-auto p-3 mt-5 mb-40`,
    table: `w-full text-left`,
    tableHeader: `border-b border-gray-100/20 pb-5 opacity-50`
};
const LikedPlaylist = ({ albums  })=>{
    const { setListCount , likedSongs , setAlbumDuration  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_3__/* .SpotifyContext */ .s);
    var songArr = [];
    var count = 0;
    var minutes = 0;
    var seconds = 0;
    setListCount(0);
    setAlbumDuration(0);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: styles.tableWrapper,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
            className: styles.table,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                    className: styles.tableHeader,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                className: "pb-3",
                                children: "#"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                className: "pb-3",
                                children: "Başlık"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                className: "pb-3",
                                children: "Oynatılan"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                className: "pb-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "assets/time.svg",
                                    alt: "time"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                    className: "mb-6 block"
                }),
                albums.map((album)=>{
                    album.songs.map((song)=>{
                        if (song.isLiked === true) {
                            songArr.push(song);
                        }
                    });
                }),
                songArr.map((e)=>{
                    count++;
                    setListCount(count);
                    minutes = minutes + parseInt(e.songLength.slice(0, 1));
                    seconds = seconds + parseInt(e.songLength.slice(2, e.songLength.length));
                    setAlbumDuration(minutes + parseInt(seconds / 60));
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TableRow__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        song: e
                    }, e.id));
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LikedPlaylist);


/***/ }),

/***/ 6461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_PlayerControls)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./public/assets/next.svg
/* harmony default export */ const next = ({"src":"/_next/static/media/next.3d952b2c.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./public/assets/previous.svg
/* harmony default export */ const previous = ({"src":"/_next/static/media/previous.57b2ce8f.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./public/assets/speaker.svg
/* harmony default export */ const speaker = ({"src":"/_next/static/media/speaker.e7ad6de4.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./public/assets/repeat.svg
/* harmony default export */ const repeat = ({"src":"/_next/static/media/repeat.08425447.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./public/assets/shuffle.svg
/* harmony default export */ const shuffle = ({"src":"/_next/static/media/shuffle.f164b52a.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./public/assets/playRounded.svg
/* harmony default export */ const playRounded = ({"src":"/_next/static/media/playRounded.d8f40cba.svg","height":48,"width":48});
;// CONCATENATED MODULE: ./public/assets/pause.svg
/* harmony default export */ const assets_pause = ({"src":"/_next/static/media/pause.cd7806ae.svg","height":24,"width":24});
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./context/context.js
var context = __webpack_require__(4268);
// EXTERNAL MODULE: external "react-icons/ri"
var ri_ = __webpack_require__(8098);
;// CONCATENATED MODULE: ./components/PlayerControls.js













const styles = {
    mainControl: ` fixed bottom-0 left-0 py-3 p-5 pr-10 w-screen 
    bg-[#242424] z-40 flex item-center justify-between`,
    flexCenter: `flex items-center`,
    controlIcon: `mr-5 cursor-pointer hover:opacity-100 opacity-50`,
    controlIconsContainer: `flex items-center justify-center mb-2`,
    playIcon: `mr-5 w-10 cursor-pointer hover:opacity-50`,
    pauseIconStyle: `mt-3 w-10 h-10 cursor-pointer hover:opacity-50`,
    coverPhoto: `object-cover`
};
const PlayerControls = ()=>{
    const { currentSong , volume , onVolumeChange , timestamp , progress , playNext , playPrevious , isPaused , play , pause , onProgressChange , duration , currentPage , Pages , playingPage ,  } = (0,external_react_.useContext)(context/* SpotifyContext */.s);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: styles.mainControl,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex max-w-xs",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mr-3",
                        style: {
                            minHeight: '80px',
                            minWidth: '80px'
                        },
                        children: currentSong.cover ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: currentSong.cover,
                            height: "80px",
                            width: "80px",
                            alt: "song-cover"
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(ri_.RiUploadCloud2Line, {
                            size: 80,
                            color: "white"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-60",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: currentSong.title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "opacity-50 flex flex-wrap",
                                children: currentSong.artiste
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: styles.controlIconsContainer,
                        children: [
                            !(currentPage === Pages.MyPlaylist || currentPage === Pages.Playing && playingPage === Pages.MyPlaylist) && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                onClick: playPrevious,
                                className: styles.controlIcon,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                    src: previous,
                                    alt: "prev"
                                })
                            }),
                            isPaused ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: styles.playIcon,
                                onClick: play,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                    src: playRounded,
                                    alt: "play"
                                })
                            }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: styles.pauseIconStyle,
                                onClick: pause,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                    src: assets_pause,
                                    alt: "pause"
                                })
                            }),
                            !(currentPage === Pages.MyPlaylist || currentPage === Pages.Playing && playingPage === Pages.MyPlaylist) && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                onClick: playNext,
                                className: styles.controlIcon,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                    src: next,
                                    alt: "next"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: styles.flexCenter,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                children: timestamp
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                value: progress,
                                type: "range",
                                onChange: (e)=>onProgressChange(e)
                                ,
                                className: styles.range
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                children: duration != 'NaN:0NaN' && duration
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: styles.flexCenter,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: speaker,
                        alt: "speaker"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        value: volume,
                        onChange: (e)=>onVolumeChange(e)
                        ,
                        type: "range",
                        id: "volume-range"
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_PlayerControls = (PlayerControls);


/***/ }),

/***/ 2691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TableRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4861);
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4268);




const styles = {
    tableWrapper: `max-w-7xl m-auto p-3 mt-5 mb-40`,
    table: `w-full text-left`,
    tableHeader: `border-b border-gray-100/20 pb-5 opacity-50`
};
const Playlist = ({ songs  })=>{
    const { setListCount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_3__/* .SpotifyContext */ .s);
    var count = 0;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: styles.tableWrapper,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
            className: styles.table,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                    className: "mb-6 block"
                }),
                songs.map((song)=>{
                    count++;
                    setListCount(count);
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TableRow__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        song: song.account
                    }, song.id));
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Playlist);


/***/ }),

/***/ 4861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4268);



const styles = {
    th: `cursor-pointer p-4`,
    tb: `hover:opacity-50 cursor-pointer `
};
const TableRow = ({ song  })=>{
    const { 0: style , 1: setStyle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { playOnSelect , duration , currentSong  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_2__/* .SpotifyContext */ .s);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (currentSong === song) {
            setStyle('rounded bg-gradient-to-r from-green-300/30 to-green-700/30');
        } else {
            setStyle('');
        }
    }, [
        currentSong
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
        className: styles.tb + style,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
            onClick: ()=>playOnSelect(song)
            ,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: styles.th + ` rounded-l-md`,
                    children: Number.isInteger(song.index) && song.index + 1
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: styles.th,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "font bold",
                                children: song.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "opacity-50",
                                children: song.artiste
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: styles.th,
                    children: song.plays && Intl.NumberFormat().format(song.plays)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                    className: styles.th + ` rounded-r-md`,
                    children: song.songLength
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableRow);


/***/ }),

/***/ 6489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_UploadModal_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8065);
/* harmony import */ var _styles_UploadModal_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_UploadModal_module_css__WEBPACK_IMPORTED_MODULE_1__);


// const styles ={
//     title:``,
//     Wrapper:``,
//     inputField:``,
//     inputTitle:``,
//     inputContainer:``,
//     input:``,
//     createButton:``,
//     button:``,
// }
const UploadModal = ({ description: title , musicURL , setTitle , setMusicURL , setShowUploadMusic , newMusic ,  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_UploadModal_module_css__WEBPACK_IMPORTED_MODULE_1___default().wrapper),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_UploadModal_module_css__WEBPACK_IMPORTED_MODULE_1___default().modalTitle),
                children: "M\xfczik Y\xfckleme"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_UploadModal_module_css__WEBPACK_IMPORTED_MODULE_1___default().inputField),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_UploadModal_module_css__WEBPACK_IMPORTED_MODULE_1___default().inputTitle),
                        children: "Başlık"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_UploadModal_module_css__WEBPACK_IMPORTED_MODULE_1___default().inputContainer),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            className: (_styles_UploadModal_module_css__WEBPACK_IMPORTED_MODULE_1___default().input),
                            type: "text",
                            value: title,
                            onChange: (e)=>setTitle(e.target.value)
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_UploadModal_module_css__WEBPACK_IMPORTED_MODULE_1___default().inputField),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_UploadModal_module_css__WEBPACK_IMPORTED_MODULE_1___default().inputTitle),
                        children: "M\xfczik URL'i"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_UploadModal_module_css__WEBPACK_IMPORTED_MODULE_1___default().inputContainer),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            className: (_styles_UploadModal_module_css__WEBPACK_IMPORTED_MODULE_1___default().input),
                            type: "text",
                            value: musicURL,
                            onChange: (e)=>setMusicURL(e.target.value)
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_UploadModal_module_css__WEBPACK_IMPORTED_MODULE_1___default().modalButtons),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>setShowUploadMusic(false)
                        ,
                        className: (_styles_UploadModal_module_css__WEBPACK_IMPORTED_MODULE_1___default().cancelButton),
                        children: "İptal"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: newMusic,
                        className: `${(_styles_UploadModal_module_css__WEBPACK_IMPORTED_MODULE_1___default().button)}
            ${(_styles_UploadModal_module_css__WEBPACK_IMPORTED_MODULE_1___default().createButton)}`,
                        children: "Yeni M\xfczik Y\xfckle"
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadModal);


/***/ }),

/***/ 9405:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./data/activities.js
const activities_activities = [
    {
        index: 1,
        title: 'Enter Sandman',
        subTitle: 'Metallica',
        avatar: 'https://i.scdn.co/image/ab6761610000e5eb8101d13bdd630b0889acd2fd'
    },
    {
        index: 2,
        title: "Drop it Like it's Hot",
        subTitle: 'Snoop Dogg',
        avatar: 'https://resources.tidal.com/images/3e29689c/351e/4832/9c33/45619c5e46dc/750x750.jpg'
    },
    {
        index: 3,
        title: 'goosebumps',
        subTitle: 'Travis Scott',
        avatar: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRhR6m3xIp4gsabf58BUMxlt9KKOe2IDsBFJZIZ5BjkXpOjS_YY'
    }, 
];

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/activityCard.js


const activityCard_ActivityCard = ({ title , subTitle , avatar  })=>{
    return(/*#__PURE__*/ _jsxs("div", {
        className: styles.activityCard,
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: styles.profileAvatarContainer,
                children: /*#__PURE__*/ _jsx(Image, {
                    alt: "",
                    src: avatar,
                    className: styles.avatar,
                    width: 50,
                    height: 50
                })
            }),
            /*#__PURE__*/ _jsxs("div", {
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        children: title
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "opacity-60",
                        children: subTitle
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const activityCard = ((/* unused pure expression or super */ null && (activityCard_ActivityCard)));
const styles = {
    profileAvatarContainer: `w-14 h-14 rounded-full -ml-2 mr-3`,
    activityCard: `flex mb-6 cursor-pointer hover:opacity-50`,
    avatar: `rounded-full object-cover`
};

;// CONCATENATED MODULE: ./components/activity.js



const activity_styles = {
    activity: `bg-black w-96 h-screen p-5 py-10 text-white`,
    title: `flex items-center justify-between mb-10`,
    profileAvatarContainer: `w-14 h-14 rounded-full -ml-2 mr-3`,
    activityCard: `flex mb-6`
};
const Activity = ()=>{
    return(/*#__PURE__*/ _jsxs("div", {
        className: activity_styles.activity,
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: activity_styles.title,
                children: [
                    "Friend Activity",
                    /*#__PURE__*/ _jsx("img", {
                        src: "assets/friend.svg",
                        alt: ""
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "mb-10",
                children: activities.map((activity, index)=>{
                    return(/*#__PURE__*/ _jsx(ActivityCard, {
                        avatar: activity.avatar,
                        title: activity.title,
                        subTitle: activity.subTitle
                    }, index));
                })
            })
        ]
    }));
};
/* harmony default export */ const activity = ((/* unused pure expression or super */ null && (Activity)));


/***/ }),

/***/ 5613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ nav)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./context/context.js
var context = __webpack_require__(4268);
;// CONCATENATED MODULE: ./components/navLink.js



const styles = {
    navLink: `flex item-center mb-5 cursor-pointer hover:text-[#fff] text-[#b3b3b3]`,
    navLinkText: `ml-5`
};
const NavLink = ({ title , icon  })=>{
    const { setCurrentPage , setAlbumsShown  } = (0,external_react_.useContext)(context/* SpotifyContext */.s);
    const handleList = ()=>{
        if (title === 'Anasayfa') {
            setCurrentPage(0);
            setAlbumsShown(true);
        } else if (title === 'Oynatılan') {
            setCurrentPage(1);
            setAlbumsShown(false);
        } else if (title === 'Y\xfcklemelerim') {
            setCurrentPage(2);
            setAlbumsShown(false);
        } else if (title === 'Liked Songs') {
            setCurrentPage(3);
            setAlbumsShown(false);
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: styles.navLink,
        onClick: handleList,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                alt: "",
                src: icon,
                width: 20,
                height: 20
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: styles.navLinkText,
                children: title
            })
        ]
    }));
};
/* harmony default export */ const navLink = (NavLink);

;// CONCATENATED MODULE: ./components/NavRow.js



const NavRow_styles = {
    th: `cursor-pointer p-4 flex flex-col items-start`,
    tb: `hover:opacity-50 cursor-pointer flex justify-between`
};
const NavRow = ({ song  })=>{
    const { 0: style , 1: setStyle  } = (0,external_react_.useState)('');
    const { playOnSelect , duration , currentSong  } = (0,external_react_.useContext)(context/* SpotifyContext */.s);
    (0,external_react_.useEffect)(()=>{
        if (currentSong === song) {
            setStyle(' rounded bg-gradient-to-r from-green-300/30 to-green-700/30');
        } else {
            setStyle('');
        }
    }, [
        currentSong
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx("tbody", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
            className: NavRow_styles.tb + style,
            onClick: ()=>playOnSelect(song)
            ,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("th", {
                    className: NavRow_styles.th,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "font bold",
                            children: song.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "opacity-50",
                            children: song.artiste
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                    className: NavRow_styles.th,
                    children: Intl.NumberFormat().format(song.plays)
                })
            ]
        })
    }));
};
/* harmony default export */ const components_NavRow = (NavRow);

;// CONCATENATED MODULE: ./components/nav.js





const nav_styles = {
    nav: `bg-black w-96 p-5 py-10 `,
    link: `hover:text-[#fff]`,
    playlistName: `text-[#b3b3b3] cursor-default text-sm hover:text-[#fff]`
};
const Nav = ({ demo  })=>{
    const { descSongs , currentSong ,  } = (0,external_react_.useContext)(context/* SpotifyContext */.s);
    descSongs.sort((a, b)=>{
        return b.plays - a.plays;
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: nav_styles.nav,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mb-10",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(navLink, {
                        icon: "assets/home.svg",
                        title: "Anasayfa",
                        className: nav_styles.link
                    }),
                    !(JSON.stringify(currentSong) == '{}') && /*#__PURE__*/ jsx_runtime_.jsx(navLink, {
                        icon: "assets/playlist.svg",
                        title: "Oynatılan",
                        className: nav_styles.link
                    }),
                    !demo && /*#__PURE__*/ jsx_runtime_.jsx(navLink, {
                        icon: "assets/playlist.svg",
                        title: "Y\xfcklemelerim",
                        className: nav_styles.link
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mb-5 border-b border-gray-100/10",
                children: /*#__PURE__*/ jsx_runtime_.jsx(navLink, {
                    icon: "assets/heart.svg",
                    title: "Liked Songs",
                    className: nav_styles.link
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-5 leading-8 flex flex-col gap-[10px]",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-xl font-bold text-center",
                        children: " 🔥🔥🔥 TOP 5 🔥🔥🔥 "
                    }),
                    descSongs.slice(0, 5).map((song)=>{
                        return(/*#__PURE__*/ jsx_runtime_.jsx(components_NavRow, {
                            song: song
                        }, song.id));
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const nav = (Nav);


/***/ }),

/***/ 6709:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1057);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1247);
/* harmony import */ var _utils_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2792);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4364);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_spl_token__WEBPACK_IMPORTED_MODULE_0__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__, _utils_utils__WEBPACK_IMPORTED_MODULE_3__]);
([_solana_spl_token__WEBPACK_IMPORTED_MODULE_0__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__, _utils_utils__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const anchor = __webpack_require__(1024);
const utf8 = anchor.utils.bytes.utf8;
const { web3 , BN  } = anchor;
const { SystemProgram  } = web3;
const defaultAccounts = {
    tokenProgram: _solana_spl_token__WEBPACK_IMPORTED_MODULE_0__.TOKEN_PROGRAM_ID,
    clock: anchor.web3.SYSVAR_CLOCK_PUBKEY,
    systemProgram: SystemProgram.programId
};
const useProgram = (musicURL, title, setTitle, setMusicURL, setShowUploadMusic)=>{
    const wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.useWallet)();
    const connection = new anchor.web3.Connection(_utils_const__WEBPACK_IMPORTED_MODULE_2__/* .SOLANA_HOST */ .VH);
    const program = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__/* .getProgramInstance */ .q)(connection, wallet);
    const getSongs = async ()=>{
        console.log("fetching songs");
        const songs = await program.account.musicAccount.all();
        console.log(songs);
        return songs;
    };
    const newMusic = async ()=>{
        const randomKey = anchor.web3.Keypair.generate().publicKey;
        let [music_pda] = await anchor.web3.PublicKey.findProgramAddress([
            utf8.encode('music'),
            randomKey.toBuffer()
        ], program.programId);
        console.log(musicURL);
        const tx = await program.rpc.createMusic(title, musicURL, {
            accounts: {
                music: music_pda,
                randomkey: randomKey,
                authority: wallet.publicKey,
                ...defaultAccounts
            }
        });
        console.log(tx);
        setTitle('');
        setMusicURL('');
        setShowUploadMusic(false);
    };
    return {
        newMusic,
        getSongs
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useProgram);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5273:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5613);
/* harmony import */ var _components_activity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9405);
/* harmony import */ var _components_UploadModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6489);
/* harmony import */ var _components_Playlist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2691);
/* harmony import */ var _components_PlayerControls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6461);
/* harmony import */ var _components_LibaryPlaylist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(841);
/* harmony import */ var _components_LikedPlaylist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6350);
/* harmony import */ var _components_AlbumsContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4891);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2664);
/* harmony import */ var _hooks_useProgram__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6709);
/* harmony import */ var _data_songs_copy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2054);
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4268);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useProgram__WEBPACK_IMPORTED_MODULE_11__]);
_hooks_useProgram__WEBPACK_IMPORTED_MODULE_11__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];















const HomePage = ({ PK  })=>{
    const { currentPage , setCurrentPage , Pages , setAlbumDuration , albumsShown , currentSong , currentAlbum , playingPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_13__/* .SpotifyContext */ .s);
    const { 0: showUploadMusic , 1: setShowUploadMusic  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: title , 1: setTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(' ');
    const { 0: musicURL , 1: setMusicURL  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(' ');
    const { newMusic , getSongs  } = (0,_hooks_useProgram__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(musicURL, title, setTitle, setMusicURL, setShowUploadMusic);
    const { 0: songs1 , 1: setSongs  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getSongs().then((songs)=>{
            setSongs(songs);
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (currentPage === 1) {
            setAlbumDuration(null);
        }
    }, [
        currentPage
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.log(playingPage);
    }, [
        currentSong
    ]);
    const handleRefresh = ()=>{
        getSongs().then((songs)=>{
            setSongs(songs);
        });
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_nav__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full",
                children: [
                    !albumsShown ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            currentPage === Pages.Playing && playingPage === Pages.Home && !(currentSong.album === _data_songs_copy__WEBPACK_IMPORTED_MODULE_12__/* .appAlbums */ .y[currentAlbum - 1].albumName) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                setShowUploadMusic: setShowUploadMusic,
                                headerCover: _data_songs_copy__WEBPACK_IMPORTED_MODULE_12__/* .appAlbums */ .y[_data_songs_copy__WEBPACK_IMPORTED_MODULE_12__/* .appAlbums.findIndex */ .y.findIndex((val)=>val.albumName === currentSong.album
                                )].songs[0].cover
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                setShowUploadMusic: setShowUploadMusic,
                                headerCover: _data_songs_copy__WEBPACK_IMPORTED_MODULE_12__/* .appAlbums */ .y[currentAlbum - 1].songs[0].cover,
                                PK: PK
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: (currentPage === Pages.MyPlaylist || currentPage === Pages.Playing && playingPage === Pages.MyPlaylist) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "pl-10",
                                    onClick: handleRefresh,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_14__.IoRefreshCircleOutline, {
                                        style: {
                                            height: '30px',
                                            width: '30px'
                                        }
                                    })
                                })
                            }),
                            currentPage === Pages.Home && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LibaryPlaylist__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                songs: _data_songs_copy__WEBPACK_IMPORTED_MODULE_12__/* .appAlbums */ .y[currentAlbum - 1].songs
                            }),
                            currentPage === Pages.Playing && playingPage === Pages.Home && currentSong.album === _data_songs_copy__WEBPACK_IMPORTED_MODULE_12__/* .appAlbums */ .y[currentAlbum - 1].albumName && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LibaryPlaylist__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                songs: _data_songs_copy__WEBPACK_IMPORTED_MODULE_12__/* .appAlbums */ .y[currentAlbum - 1].songs
                            }),
                            currentPage === Pages.Playing && playingPage === Pages.Home && !(currentSong.album === _data_songs_copy__WEBPACK_IMPORTED_MODULE_12__/* .appAlbums */ .y[currentAlbum - 1].albumName) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LibaryPlaylist__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                songs: _data_songs_copy__WEBPACK_IMPORTED_MODULE_12__/* .appAlbums */ .y[_data_songs_copy__WEBPACK_IMPORTED_MODULE_12__/* .appAlbums.findIndex */ .y.findIndex((val)=>val.albumName === currentSong.album
                                )].songs
                            }),
                            currentPage === Pages.Playing && playingPage === Pages.MyPlaylist && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Playlist__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                songs: songs1
                            }),
                            currentPage === Pages.Playing && playingPage === Pages.LikedSongs && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LikedPlaylist__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                albums: _data_songs_copy__WEBPACK_IMPORTED_MODULE_12__/* .appAlbums */ .y
                            }),
                            currentPage === Pages.MyPlaylist && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Playlist__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                songs: songs1
                            }),
                            currentPage === Pages.LikedSongs && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LikedPlaylist__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                albums: _data_songs_copy__WEBPACK_IMPORTED_MODULE_12__/* .appAlbums */ .y
                            })
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AlbumsContainer__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                    !(JSON.stringify(currentSong) == '{}') && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PlayerControls__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    showUploadMusic && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UploadModal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        title: title,
                        setTitle: setTitle,
                        setShowUploadMusic: setShowUploadMusic,
                        musicURL: musicURL,
                        setMusicURL: setMusicURL,
                        newMusic: newMusic
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Rn": () => (/* binding */ PROGRAM_ID),
  "wI": () => (/* binding */ PROGRAM_IDL),
  "VH": () => (/* binding */ SOLANA_HOST)
});

// EXTERNAL MODULE: external "@solana/web3.js"
var web3_js_ = __webpack_require__(7831);
;// CONCATENATED MODULE: ./utils/programs.json
const programs_namespaceObject = JSON.parse('{"version":"0.1.0","name":"spotify_clone","instructions":[{"name":"acceptPayment","accounts":[{"name":"payerWallet","isMut":true,"isSigner":false},{"name":"receiver","isMut":true,"isSigner":false},{"name":"authority","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false},{"name":"clock","isMut":false,"isSigner":false}],"args":[]},{"name":"createMusic","accounts":[{"name":"music","isMut":true,"isSigner":false},{"name":"randomkey","isMut":true,"isSigner":false},{"name":"authority","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false},{"name":"clock","isMut":false,"isSigner":false}],"args":[{"name":"title","type":"string"},{"name":"musicUrl","type":"string"}]}],"accounts":[{"name":"PayerAccount","type":{"kind":"struct","fields":[{"name":"wallet","type":"publicKey"}]}},{"name":"MusicAccount","type":{"kind":"struct","fields":[{"name":"authority","type":"publicKey"},{"name":"title","type":"string"},{"name":"musicUrl","type":"string"}]}}]}');
;// CONCATENATED MODULE: ./utils/const.js


const SOLANA_HOST = "https://cold-red-gadget.solana-devnet.discover.quiknode.pro/fef425b0ce09868c660059fa5c7baa92cb24af81/";
const PROGRAM_ID = new web3_js_.PublicKey("7eRM9wcZuhe2MvRb1m96QMXYPscpcMQnjpMz5f5jneWF");
const PROGRAM_IDL = programs_namespaceObject // https://beta.solpg.io/643dde7467edfe0f00106a27
 // old program: J1tRHFCugdEsJWcoAQY3HovauntyDXqtSWxKnDfETVLT
;


/***/ }),

/***/ 4364:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ getProgramInstance)
/* harmony export */ });
/* harmony import */ var _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1024);
/* harmony import */ var _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3364);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2792);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__]);
_solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function getProgramInstance(connection, wallet) {
    if (!wallet.publicKey) throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletNotConnectedError;
    const provider = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.Provider(connection, wallet, _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.Provider.defaultOptions());
    const idl = _const__WEBPACK_IMPORTED_MODULE_2__/* .PROGRAM_IDL */ .wI;
    const programId = _const__WEBPACK_IMPORTED_MODULE_2__/* .PROGRAM_ID */ .Rn;
    const program = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__.Program(idl, programId, provider);
    return program;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;