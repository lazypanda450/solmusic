"use strict";
exports.id = 104;
exports.ids = [104];
exports.modules = {

/***/ 7520:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8847);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1247);
/* harmony import */ var _Payment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5532);
/* harmony import */ var _pages_demopage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__, _Payment__WEBPACK_IMPORTED_MODULE_4__, _pages_demopage__WEBPACK_IMPORTED_MODULE_5__]);
([_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__, _Payment__WEBPACK_IMPORTED_MODULE_4__, _pages_demopage__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const styles = {
    loginPage: `w-screen h-screen bg-white flex justify-center`,
    text: `text-2xl text-black p-10`
};
function Login() {
    const { 0: demo , 1: setDemo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.useWallet)();
    if (demo) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_demopage__WEBPACK_IMPORTED_MODULE_5__["default"], {
        isPaid: 'demo'
    }));
    if (wallet.connected) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Payment__WEBPACK_IMPORTED_MODULE_4__/* .Payment */ .F, {}));
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: styles.loginPage,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                class: "p-8 min-h-screen flex flex-col justify-center relative overflow-hidden sm:py-12",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    class: "max-w-7xl mx-auto",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        class: "relative group",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                class: "absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                class: "relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `flex flex-col items-center m-16`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: styles.text,
                                            children: "L\xfctfen Giriş Yapınız"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__.WalletMultiButton, {})
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                class: "p-8 min-h-screen flex flex-col justify-center relative overflow-hidden sm:py-12",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    class: "max-w-7xl mx-auto",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        class: "relative group",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                class: "absolute -inset-1 bg-gradient-to-r from-green-600 to-green-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                class: "relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `flex flex-col items-center m-16`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: styles.text,
                                            children: "Or Try Limited Trial"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "button",
                                            class: "m-1 focus:outline-none text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded text-base px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",
                                            onClick: ()=>setDemo(true)
                                            ,
                                            children: "FREE DEMO"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5532:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ Payment)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4364);
/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1057);
/* harmony import */ var _utils_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2792);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1247);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _pages_homepage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5273);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_utils__WEBPACK_IMPORTED_MODULE_2__, _solana_spl_token__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__, _pages_homepage__WEBPACK_IMPORTED_MODULE_7__]);
([_utils_utils__WEBPACK_IMPORTED_MODULE_2__, _solana_spl_token__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__, _pages_homepage__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const anchor = __webpack_require__(1024);
const { web3  } = anchor;
const { SystemProgram  } = web3;
const utf8 = anchor.utils.bytes.utf8;
const defaultAccounts = {
    tokenProgram: _solana_spl_token__WEBPACK_IMPORTED_MODULE_3__.TOKEN_PROGRAM_ID,
    clock: anchor.web3.SYSVAR_CLOCK_PUBKEY,
    systemProgram: SystemProgram.programId
};
const styles = {
    main: `w-screen h-screen bg-white text-black flex flex-col items-center`,
    text: `w-64 text-center text-xl p-4 m-4 font-bold`,
    buttons: `text-white`,
    button: `bg-[#22c55e] p-4 m-4 font-bold rounded-md hover:bg-[#18a34c]`,
    isConnectedButton: `flex flex-col items-end w-full pb-32`,
    payment: `flex  flex-col items-center justify-center h-full`,
    disconnect: `bg-[#eb4034] p-2 mr-6 font-bold text-sm rounded-md hover:bg-[#ba1a1a] text-gray-200`
};
const Payment = ()=>{
    const wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.useWallet)();
    const connection = new anchor.web3.Connection(_utils_const__WEBPACK_IMPORTED_MODULE_4__/* .SOLANA_HOST */ .VH);
    const program = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__/* .getProgramInstance */ .q)(connection, wallet);
    const { 0: payers , 1: setPayers  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: isPaid , 1: setIsPaid  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (wallet.connected) getAllWallets();
    }, [
        wallet.connected,
        isPaid
    ]);
    const PK = JSON.stringify(wallet.publicKey).replace('"', '').replace('"', '');
    let first = PK.substring(0, 5);
    let last = PK.substring(PK.length - 4, PK.length);
    const short = first + `...` + last;
    const { 0: status , 1: setStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("\xd6demeyi Doğrula");
    const getAllWallets = async ()=>{
        const payerList = await program.account.payerAccount.all();
        setPayers(payerList);
        console.log("getallwalletsworking");
        payerList.forEach((payer)=>{
            if (payer.account.wallet.toBase58() == wallet.publicKey.toBase58()) {
                setIsPaid(true);
            }
        });
        console.log(isPaid);
        payers.forEach((e)=>console.log(JSON.stringify(e.account))
        );
    };
    const onEvent = async ()=>{
        let myInterval = setInterval(()=>getAllWallets()
        , 500);
        setStatus("Doğrulanıyor...");
        setTimeout(()=>clearInterval(myInterval)
        , 9000);
        setTimeout(()=>setStatus("Doğrulama Başarısız.")
        , 9500);
        setTimeout(()=>setStatus("\xd6demeyi Doğrula")
        , 10000);
    };
    const payClicked = async ()=>{
        let [payerSigner] = await anchor.web3.PublicKey.findProgramAddress([
            utf8.encode('payer'),
            wallet.publicKey.toBuffer()
        ], program.programId);
        let payerInfo;
        try {
            payerInfo = await program.account.payerAccount.fetch(payerSigner);
        } catch (e) {
            try {
                await program.rpc.acceptPayment({
                    accounts: {
                        payerWallet: payerSigner,
                        receiver: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_6__.PublicKey('Gdrc22r4dgMuw7jP7pnZMzFFDXTZikDx8obDt1iUdaVH'),
                        authority: wallet.publicKey,
                        ...defaultAccounts
                    }
                });
                alert('Transaction başarılı.');
            } catch (e) {
                alert(e.message);
            }
        }
    };
    const disconnectWallet = async ()=>{
        wallet.disconnect();
    };
    if (isPaid) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_homepage__WEBPACK_IMPORTED_MODULE_7__["default"], {
        PK: short
    }));
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: styles.main,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: styles.isConnectedButton,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: styles.button,
                        children: wallet.connected ? short : `Bağlanılan Cüzdan Yok`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: styles.disconnect,
                        onClick: disconnectWallet,
                        children: "Bağlantıyı Kes"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: styles.payment,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: styles.text,
                        children: "L\xfctfen \xd6deme Yapınız"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: styles.buttons,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: styles.button,
                                onClick: payClicked,
                                children: "0.1 Sol \xd6de"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: styles.button,
                                onClick: onEvent,
                                children: status
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 26:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7520);
/* harmony import */ var _hooks_useProgram__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6709);
/* harmony import */ var _data_songs_copy__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2054);
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4268);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Login__WEBPACK_IMPORTED_MODULE_11__, _hooks_useProgram__WEBPACK_IMPORTED_MODULE_12__]);
([_components_Login__WEBPACK_IMPORTED_MODULE_11__, _hooks_useProgram__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const DemoPage = ({ isPaid  })=>{
    const { currentPage , setCurrentPage , Pages , setAlbumDuration , albumsShown , currentSong , currentAlbum , playingPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_14__/* .SpotifyContext */ .s);
    const { 0: timer , 1: setTimer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    setTimeout(()=>{
        setTimer(timer + 1);
    }, 1000);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (timer === 60) {
            console.log('a');
        }
    }, [
        timer
    ]);
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
    if (timer < 60) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_nav__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    demo: true
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full",
                    children: [
                        !albumsShown ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                currentPage === Pages.Playing && playingPage === Pages.Home && !(currentSong.album === _data_songs_copy__WEBPACK_IMPORTED_MODULE_13__/* .appAlbums */ .y[currentAlbum - 1].albumName) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    setShowUploadMusic: '',
                                    headerCover: _data_songs_copy__WEBPACK_IMPORTED_MODULE_13__/* .appAlbums */ .y[_data_songs_copy__WEBPACK_IMPORTED_MODULE_13__/* .appAlbums.findIndex */ .y.findIndex((val)=>val.albumName === currentSong.album
                                    )].songs[0].cover
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    setShowUploadMusic: '',
                                    headerCover: _data_songs_copy__WEBPACK_IMPORTED_MODULE_13__/* .appAlbums */ .y[currentAlbum - 1].songs[0].cover,
                                    demo: true,
                                    timer: timer
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: (currentPage === Pages.MyPlaylist || currentPage === Pages.Playing && playingPage === Pages.MyPlaylist) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "pl-10",
                                        onClick: handleRefresh,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_15__.IoRefreshCircleOutline, {
                                            style: {
                                                height: '30px',
                                                width: '30px'
                                            }
                                        })
                                    })
                                }),
                                currentPage === Pages.Home && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LibaryPlaylist__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    songs: _data_songs_copy__WEBPACK_IMPORTED_MODULE_13__/* .appAlbums */ .y[currentAlbum - 1].songs
                                }),
                                currentPage === Pages.Playing && playingPage === Pages.Home && currentSong.album === _data_songs_copy__WEBPACK_IMPORTED_MODULE_13__/* .appAlbums */ .y[currentAlbum - 1].albumName && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LibaryPlaylist__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    songs: _data_songs_copy__WEBPACK_IMPORTED_MODULE_13__/* .appAlbums */ .y[currentAlbum - 1].songs
                                }),
                                currentPage === Pages.Playing && playingPage === Pages.Home && !(currentSong.album === _data_songs_copy__WEBPACK_IMPORTED_MODULE_13__/* .appAlbums */ .y[currentAlbum - 1].albumName) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LibaryPlaylist__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    songs: _data_songs_copy__WEBPACK_IMPORTED_MODULE_13__/* .appAlbums */ .y[_data_songs_copy__WEBPACK_IMPORTED_MODULE_13__/* .appAlbums.findIndex */ .y.findIndex((val)=>val.albumName === currentSong.album
                                    )].songs
                                }),
                                currentPage === Pages.Playing && playingPage === Pages.LikedSongs && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LikedPlaylist__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    albums: _data_songs_copy__WEBPACK_IMPORTED_MODULE_13__/* .appAlbums */ .y
                                }),
                                currentPage === Pages.LikedSongs && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LikedPlaylist__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    albums: _data_songs_copy__WEBPACK_IMPORTED_MODULE_13__/* .appAlbums */ .y
                                })
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AlbumsContainer__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                        !(JSON.stringify(currentSong) == '{}') && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PlayerControls__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                    ]
                })
            ]
        }));
    } else return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Login__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DemoPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;