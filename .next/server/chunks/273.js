exports.id = 273;
exports.ids = [273];
exports.modules = {

/***/ 65:
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

/***/ 664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
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
var context = __webpack_require__(268);
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
    playlistTextContent: `flex items-end mt-10`,
    controlsContainer: `flex justify-center items-center mt-10`,
    playButton: `bg-green-500 w-16 h-16 flex justify-center items-center
  rounded-full cursor-pointer`
};
const Header = ({ setShowUploadMusic  })=>{
    const { currentSong  } = (0,external_react_.useContext)(context/* SpotifyContext */.s);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        classname: Header_styles.header,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: Header_styles.headerWrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: Header_styles.arrowButton,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                    src: "/assets/chevronLeft.svg",
                                    width: 20,
                                    height: 20,
                                    alt: "left"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: Header_styles.arrowButton,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                    src: "/assets/chevronRight.svg",
                                    width: 20,
                                    height: 20,
                                    alt: "right"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: Header_styles.headerRight,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(components_UploadButton, {
                                setShowUploadMusic: setShowUploadMusic
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
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
                                        children: "Muhammed Ekici"
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
                    /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: "/assets/yarim-kalan-ep.png",
                        width: 300,
                        height: 300
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "ml-5",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                children: "Album"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: Header_styles.title,
                                children: currentSong.title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center mt-5",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: Header_styles.profileAvatarContainer,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            src: "/assets/hidra.png",
                                            width: 20,
                                            height: 20,
                                            alt: "artist",
                                            className: "rounded-full"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-bold",
                                            children: "Hidra • 2023 • 7 Songs • 24 dk"
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
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: "/assets/play.svg",
                            width: 30,
                            height: 30,
                            alt: "play"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: Header_styles.iconContainer,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: "/assets/heart.svg",
                            width: 30,
                            height: 30,
                            alt: "heart"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: Header_styles.iconContainer,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: "/assets/download.svg",
                            width: 30,
                            height: 30,
                            alt: "download"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: Header_styles.iconContainer,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: "/assets/more.svg",
                            width: 30,
                            height: 30,
                            alt: "more"
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_Header = (Header);


/***/ }),

/***/ 461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_PlayerControls)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
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
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./context/context.js
var context = __webpack_require__(268);
// EXTERNAL MODULE: ./data/songs.js
var songs = __webpack_require__(459);
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
const PlayerControls = ({ songs: songs1  })=>{
    console.log(songs1);
    const { currentSong , isPlaying , volume , onVolumeChange , timestamp , progress , playNext , playPrevious , isPaused , play , pause , onProgressChange , duration  } = (0,external_react_.useContext)(context/* SpotifyContext */.s);
    //  if(!isPlaying) return null
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
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: "/assets/yarim-kalan-ep.png",
                            height: "80px",
                            width: "80px",
                            alt: "song-cover"
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
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: styles.controlIcon,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                    src: shuffle
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                onClick: (e)=>playPrevious(songs1)
                                ,
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
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                onClick: (e)=>playNext(songs1)
                                ,
                                className: styles.controlIcon,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                    src: next,
                                    alt: "next"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: styles.controlIcon,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                    src: repeat,
                                    alt: "repeat"
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

/***/ 194:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Playlist)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./context/context.js
var context = __webpack_require__(268);
;// CONCATENATED MODULE: ./components/TableRow.js



const styles = {
    th: `pb-5 hover:opacity-50 cursor-pointer`
};
const TableRow = ({ song  })=>{
    console.log(song);
    const { playOnSelect , duration  } = (0,external_react_.useContext)(context/* SpotifyContext */.s);
    return(/*#__PURE__*/ jsx_runtime_.jsx("tbody", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
            onClick: ()=>playOnSelect(song)
            ,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                    className: styles.th,
                    children: song.index
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                    className: styles.th,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
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
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                    className: styles.th,
                    children: song.plays
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                    className: styles.th,
                    children: song.songLength
                })
            ]
        })
    }));
};
/* harmony default export */ const components_TableRow = (TableRow);

;// CONCATENATED MODULE: ./components/Playlist.js



const Playlist_styles = {
    tableWrapper: `max-w-7xl m-auto p-3 mt-5 mb-40`,
    table: `w-full text-left`,
    tableHeader: `border-b border-gray-100/20 pb-5 opacity-50`
};
const Playlist = ({ songs  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: Playlist_styles.tableWrapper,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
            className: Playlist_styles.table,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                    className: Playlist_styles.tableHeader,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                className: "pb-3",
                                children: "#"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                className: "pb-3",
                                children: "Başlık"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                className: "pb-3",
                                children: "Oynatılan"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                className: "pb-3",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "assets/time.svg",
                                    alt: "time"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                    className: "mb-6 block"
                }),
                songs.map((song)=>{
                    return(/*#__PURE__*/ jsx_runtime_.jsx(components_TableRow, {
                        song: song.account
                    }, song.id));
                })
            ]
        })
    }));
};
/* harmony default export */ const components_Playlist = (Playlist);


/***/ }),

/***/ 489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_UploadModal_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65);
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

/***/ 405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ activity)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./data/activities.js
const activities = [
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
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: ./components/activityCard.js


const ActivityCard = ({ title , subTitle , avatar  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: styles.activityCard,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: styles.profileAvatarContainer,
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    alt: "",
                    src: avatar,
                    className: styles.avatar,
                    width: 50,
                    height: 50
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "opacity-60",
                        children: subTitle
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const activityCard = (ActivityCard);
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
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: activity_styles.activity,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: activity_styles.title,
                children: [
                    "Friend Activity",
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "assets/friend.svg",
                        alt: ""
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mb-10",
                children: activities.map((activity, index)=>{
                    return(/*#__PURE__*/ jsx_runtime_.jsx(activityCard, {
                        avatar: activity.avatar,
                        title: activity.title,
                        subTitle: activity.subTitle
                    }, index));
                })
            })
        ]
    }));
};
/* harmony default export */ const activity = (Activity);


/***/ }),

/***/ 412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ nav)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/navLink.js

const styles = {
    navLink: `flex item-center mb-5 cursor-pointer hover:text-[#fff] text-[#b3b3b3]`,
    navLinkText: `ml-5`
};
const NavLink = ({ title , icon  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: styles.navLink,
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

;// CONCATENATED MODULE: ./components/nav.js


const nav_styles = {
    nav: `bg-black h-screen w-96 p-5 py-10 `,
    link: `hover:text-[#fff]`,
    playlistName: `text-[#b3b3b3] cursor-default text-sm hover:text-[#fff]`
};
const Nav = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: nav_styles.nav,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mb-10",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(navLink, {
                        icon: "assets/home.svg",
                        title: "Home",
                        className: nav_styles.link
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(navLink, {
                        icon: "assets/search.svg",
                        title: "Search",
                        className: nav_styles.link
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(navLink, {
                        icon: "assets/playlist.svg",
                        title: "Your library",
                        className: nav_styles.link
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mb-5 border-b border-gray-100/10",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(navLink, {
                        icon: "assets/add.svg",
                        title: "Create Playlist",
                        className: nav_styles.link
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(navLink, {
                        icon: "assets/heart.svg",
                        title: "Liked Songs",
                        className: nav_styles.link
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-5 leading-8 flex flex-col gap-[10px]",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-sm",
                        children: "GHOST SONGS"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: nav_styles.playlistName,
                        children: "CarPlay Vol.2"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: nav_styles.playlistName,
                        children: "Country Dump"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: nav_styles.playlistName,
                        children: "Energy Booster: Country"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: nav_styles.playlistName,
                        children: "Funky"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: nav_styles.playlistName,
                        children: "Coaching 🔥"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: nav_styles.playlistName,
                        children: "Country"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: nav_styles.playlistName,
                        children: "Your Top Songs 2019"
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const nav = (Nav);


/***/ }),

/***/ 709:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(247);
/* harmony import */ var _utils_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(792);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(364);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_spl_token__WEBPACK_IMPORTED_MODULE_0__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__, _utils_utils__WEBPACK_IMPORTED_MODULE_3__]);
([_solana_spl_token__WEBPACK_IMPORTED_MODULE_0__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__, _utils_utils__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const anchor = __webpack_require__(24);
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

/***/ 273:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(412);
/* harmony import */ var _components_activity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(405);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(664);
/* harmony import */ var _hooks_useProgram__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(709);
/* harmony import */ var _components_UploadModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(489);
/* harmony import */ var _components_Playlist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(194);
/* harmony import */ var _data_songs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(459);
/* harmony import */ var _components_PlayerControls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(461);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useProgram__WEBPACK_IMPORTED_MODULE_5__]);
_hooks_useProgram__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const HomePage = ()=>{
    const { 0: showUploadMusic , 1: setShowUploadMusic  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: title , 1: setTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(' ');
    const { 0: musicURL , 1: setMusicURL  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(' ');
    // const [songs, setSongs] = useState([])
    const { newMusic , getSongs  } = (0,_hooks_useProgram__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(musicURL, title, setTitle, setMusicURL, setShowUploadMusic);
    const { 0: songs1 , 1: setSongs  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        getSongs().then((songs2)=>{
            setSongs(songs2);
        });
    }, []);
    const handleRefresh = ()=>{
        getSongs().then((songs3)=>{
            setSongs(songs3);
        });
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_nav__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        setShowUploadMusic: setShowUploadMusic
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "pl-10",
                            onClick: handleRefresh,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_10__.IoRefreshCircleOutline, {
                                style: {
                                    height: '30px',
                                    width: '30px'
                                }
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Playlist__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        songs: songs1
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PlayerControls__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        songs: songs1
                    }),
                    showUploadMusic && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UploadModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        title: title,
                        setTitle: setTitle,
                        setShowUploadMusic: setShowUploadMusic,
                        musicURL: musicURL,
                        setMusicURL: setMusicURL,
                        newMusic: newMusic
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_activity__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Rn": () => (/* binding */ PROGRAM_ID),
  "wI": () => (/* binding */ PROGRAM_IDL),
  "VH": () => (/* binding */ SOLANA_HOST)
});

// EXTERNAL MODULE: external "@solana/web3.js"
var web3_js_ = __webpack_require__(831);
;// CONCATENATED MODULE: ./utils/programs.json
const programs_namespaceObject = JSON.parse('{"version":"0.1.0","name":"spotify_clone","instructions":[{"name":"acceptPayment","accounts":[{"name":"payerWallet","isMut":true,"isSigner":false},{"name":"receiver","isMut":true,"isSigner":false},{"name":"authority","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false},{"name":"clock","isMut":false,"isSigner":false}],"args":[]},{"name":"createMusic","accounts":[{"name":"music","isMut":true,"isSigner":false},{"name":"randomkey","isMut":true,"isSigner":false},{"name":"authority","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false},{"name":"tokenProgram","isMut":false,"isSigner":false},{"name":"clock","isMut":false,"isSigner":false}],"args":[{"name":"title","type":"string"},{"name":"musicUrl","type":"string"}]}],"accounts":[{"name":"PayerAccount","type":{"kind":"struct","fields":[{"name":"wallet","type":"publicKey"}]}},{"name":"MusicAccount","type":{"kind":"struct","fields":[{"name":"authority","type":"publicKey"},{"name":"title","type":"string"},{"name":"musicUrl","type":"string"}]}}]}');
;// CONCATENATED MODULE: ./utils/const.js


const SOLANA_HOST = "https://cold-red-gadget.solana-devnet.discover.quiknode.pro/fef425b0ce09868c660059fa5c7baa92cb24af81/";
const PROGRAM_ID = new web3_js_.PublicKey("7eRM9wcZuhe2MvRb1m96QMXYPscpcMQnjpMz5f5jneWF");
const PROGRAM_IDL = programs_namespaceObject // https://beta.solpg.io/643dde7467edfe0f00106a27
 // old program: J1tRHFCugdEsJWcoAQY3HovauntyDXqtSWxKnDfETVLT
;


/***/ }),

/***/ 364:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ getProgramInstance)
/* harmony export */ });
/* harmony import */ var _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(214);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(792);
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