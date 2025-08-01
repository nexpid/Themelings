// app/modules/media_viewer/native/components/MediaModalYoutube.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = function HTML(arg1) {
        var3 = _closure1_slot8;
        var2 = undefined;
        var1 = arg1;
        var4 = var3.bind(var2)(var1);
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = '\n<html>\n  <head>\n    <meta name="viewport" content="initial-scale=1">\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n        background-color: #000;\n      }\n    </style>\n    <script>';
        var1 = '</script>\n  </head>\n  <body>\n    <div id="player"></div>\n  </body>\n</html>\n';
        var1 = var3.bind(var2)(var4, var1);
        return var1;
    };
    var _closure1_slot7 = var4;
    var4 = function getJavascriptFromVideoID(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.start;
            var3 = null;
            var2 = var3 == var2;
            var9 = '';
            var8 = var9;
            if(var2) { _fun0001_ip = 58; continue _fun0001 }
 24:
            var6 = var1.start;
            var2 = global;
            var2 = var2.HermesInternal;
            var5 = var2.concat;
            var4 = "'start': ";
            var2 = ',';
            var8 = var5.bind(var4)(var6, var2);
 58:
            var2 = var1.clip;
            var2 = var3 == var2;
            var7 = var9;
            if(var2) { _fun0001_ip = 111; continue _fun0001 }
 74:
            var6 = var1.clip;
            var2 = global;
            var2 = var2.HermesInternal;
            var5 = var2.concat;
            var4 = "'clip': '";
            var2 = "',";
            var7 = var5.bind(var4)(var6, var2);
 111:
            var2 = var1.clipt;
            var2 = var3 == var2;
            if(var2) { _fun0001_ip = 161; continue _fun0001 }
 124:
            var5 = var1.clipt;
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = "'clipt': '";
            var2 = "',";
            var9 = var4.bind(var3)(var5, var2);
 161:
            var17 = var1.videoId;
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var18 = '\nconst tag = document.createElement(\'script\');\ntag.setAttribute(\'src\', "https://www.youtube.com/iframe_api");\ndocument.head.appendChild(tag);\n\nfunction onYouTubeIframeAPIReady() {\n  window.player = new YT.Player(\'player\', {\n    height:     \'100%\',\n    width:      \'100%\',\n    videoId:    \'';
            var16 = "',\n    playerVars: {\n      'playsinline': 1,\n      'fs': 0,\n      ";
            var2 = '\n      ';
            var10 = "\n    },\n    events: {\n      'onReady': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onReady', value: window.player.getPlayerState()})\n        );\n      },\n      'onError': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onError', value: e.data})\n        );\n      },\n      'onStateChange': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onStateChange', value: e.data})\n        );\n      }\n    }\n  });\n}\n";
            var15 = var9;
            var14 = var2;
            var13 = var7;
            var12 = var2;
            var11 = var8;
            var1 = var18[var5](var17, var16, var15, var14, var13, var12, var11, var10, var9);
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var20 = var5.visible;
            var _closure2_slot0 = var20;
            var12 = var5.style;
            var4 = var5.source;
            var3 = {'visible': 0, 'style': 0, 'source': 0};
            var1 = null;
            var24 = var3;
            var23 = null;
            var2 = silentSetPrototypeOf(var24, var23);
            var7 = 0;
            var24 = {};
            var23 = var5;
            var22 = var3;
            var3 = copyDataProperties(var24, var23, var22);
            var17 = _closure1_slot4;
            var11 = var17.useState;
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var14 = 4;
            var10 = var6[var14];
            var5 = undefined;
            var10 = var8.bind(var5)(var10);
            var10 = var10.PlayerState;
            var10 = var10.UNREADY;
            var10 = var11.bind(var17)(var10);
            var16 = _closure1_slot3;
            var15 = 2;
            var10 = var16.bind(var5)(var10, var15);
            var11 = var10[var7];
            var _closure2_slot1 = var11;
            var13 = 1;
            var10 = var10[var13];
            var _closure2_slot2 = var10;
            var10 = var17.useState;
            var10 = var10.bind(var17)(var5);
            var10 = var16.bind(var5)(var10, var15);
            var7 = var10[var7];
            var10 = var10[var13];
            var _closure2_slot3 = var10;
            var13 = _closure1_slot1;
            var10 = 5;
            var15 = var6[var10];
            var15 = var13.bind(var5)(var15);
            var18 = var15.bind(var5)(var11);
            var _closure2_slot4 = var18;
            var10 = var6[var10];
            var10 = var13.bind(var5)(var10);
            var19 = var10.bind(var5)(var20);
            var _closure2_slot5 = var19;
            var10 = var17.useRef;
            var13 = var10.bind(var17)(var1);
            var _closure2_slot6 = var13;
            var16 = var17.useEffect;
            var15 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 6;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot5;
                var3 = var2.MESSAGE_EMBEDS_ACTION_COMPLETED;
                var2 = {'platform': 'youtube', 'action': 'attempted'};
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var10 = new Array(0);
            var10 = var16.bind(var17)(var15, var10);
            var16 = var17.useCallback;
            var15 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = global;
                    var3 = var1.JSON;
                    var2 = var3.parse;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    var3 = var1.type;
                    var2 = var1.value;
                    var1 = 'onReady';
                    if(!(var1 !== var3)) { _fun0003_ip = 527; continue _fun0003 }
 43:
                    var1 = 'onError';
                    if(!(var1 !== var3)) { _fun0003_ip = 297; continue _fun0003 }
 54:
                    var1 = 'onStateChange';
                    if(!(var1 === var3)) { _fun0003_ip = 625; continue _fun0003 }
 65:
                    var1 = {};
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var7 = 4;
                    var8 = var3[var7];
                    var4 = undefined;
                    var8 = var6.bind(var4)(var8);
                    var8 = var8.PlayerState;
                    var8 = var8.UNSTARTED;
                    var1['-1'] = var8;
                    var8 = var3[var7];
                    var8 = var6.bind(var4)(var8);
                    var8 = var8.PlayerState;
                    var8 = var8.ENDED;
                    var1[0] = var8;
                    var8 = var3[var7];
                    var8 = var6.bind(var4)(var8);
                    var8 = var8.PlayerState;
                    var8 = var8.PLAYING;
                    var1[1] = var8;
                    var8 = var3[var7];
                    var8 = var6.bind(var4)(var8);
                    var8 = var8.PlayerState;
                    var8 = var8.PAUSED;
                    var1[2] = var8;
                    var8 = var3[var7];
                    var8 = var6.bind(var4)(var8);
                    var8 = var8.PlayerState;
                    var8 = var8.BUFFERING;
                    var1[3] = var8;
                    var3 = var3[var7];
                    var3 = var6.bind(var4)(var3);
                    var3 = var3.PlayerState;
                    var3 = var3.VIDEO_CUED;
                    var1[5] = var3;
                    var3 = var1[var2];
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0003_ip = 274; continue _fun0003 }
 247:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var7];
                    var5 = var6.bind(var4)(var5);
                    var5 = var5.PlayerState;
                    var1 = var3 in var5;
 274:
                    if(!var1) { _fun0003_ip = 625; continue _fun0003 }
 280:
                    var1 = _closure2_slot2;
                    var1 = var1.bind(var4)(var3);
                    _fun0003_ip = 625; continue _fun0003;
 297:
                    var4 = 'number';
                    var1 = typeof var2;
                    var3 = var2;
                    if(!(var4 === var1)) { _fun0003_ip = 320; continue _fun0003 }
 311:
                    var1 = var2.toString;
                    var3 = var1.bind(var2)();
 320:
                    var1 = '2';
                    if(!(var1 !== var3)) { _fun0003_ip = 404; continue _fun0003 }
 330:
                    var1 = '5';
                    if(!(var1 !== var3)) { _fun0003_ip = 396; continue _fun0003 }
 340:
                    var1 = '100';
                    if(!(var1 !== var3)) { _fun0003_ip = 388; continue _fun0003 }
 350:
                    var4 = 'embed_not_allowed';
                    var1 = '101';
                    var6 = var4;
                    if(!(var1 !== var3)) { _fun0003_ip = 410; continue _fun0003 }
 369:
                    var1 = '150';
                    var6 = var4;
                    if(!(var1 !== var3)) { _fun0003_ip = 410; continue _fun0003 }
 382:
                    var6 = 'unknown';
                    _fun0003_ip = 410; continue _fun0003;
 388:
                    var6 = 'video_not_found';
                    _fun0003_ip = 410; continue _fun0003;
 396:
                    var6 = 'html5_error';
                    _fun0003_ip = 410; continue _fun0003;
 404:
                    var6 = 'invalid_parameter';
 410:
                    var8 = _closure2_slot2;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 4;
                    var4 = var7[var4];
                    var5 = undefined;
                    var4 = var9.bind(var5)(var4);
                    var4 = var4.PlayerState;
                    var4 = var4.ERRORED;
                    var4 = var8.bind(var5)(var4);
                    var3 = _closure2_slot3;
                    var3 = var3.bind(var5)(var6);
                    var4 = _closure1_slot1;
                    var3 = 6;
                    var3 = var7[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.track;
                    var1 = _closure1_slot5;
                    var3 = var1.MESSAGE_EMBEDS_ACTION_COMPLETED;
                    var1 = {'platform': 'youtube', 'error': null, 'action': 'errored'};
                    var1['error'] = var6;
                    var1 = var4.bind(var5)(var3, var1);
                    _fun0003_ip = 625; continue _fun0003;
 527:
                    var3 = _closure2_slot2;
                    var1 = '-1';
                    if(!(var1 !== var2)) { _fun0003_ip = 581; continue _fun0003 }
 542:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var2);
                    var1 = var1.PlayerState;
                    var2 = var1.READY;
                    _fun0003_ip = 618; continue _fun0003;
 581:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 4;
                    var4 = var4[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
                    var1 = var1.PlayerState;
                    var2 = var1.ERRORED;
 618:
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 625:
                    var1 = undefined;
                    return var1;
                }
            };
            var10 = new Array(0);
            var10 = var16.bind(var17)(var15, var10);
            var16 = var17.useEffect;
            var15 = new Array(5);
            var15[0] = var13;
            var15[1] = var20;
            var15[2] = var19;
            var15[3] = var18;
            var15[4] = var11;
            var9 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot6;
                    var3 = var2.current;
                    var2 = null;
                    var2 = var2 != var3;
                    if(!var2) { _fun0004_ip = 66; continue _fun0004 }
 21:
                    var4 = _closure2_slot1;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 4;
                    var5 = var5[var3];
                    var3 = undefined;
                    var3 = var6.bind(var3)(var5);
                    var3 = var3.PlayerState;
                    var3 = var3.UNREADY;
                    var2 = var4 !== var3;
 66:
                    if(!var2) { _fun0004_ip = 287; continue _fun0004 }
 72:
                    var2 = _closure2_slot0;
                    if(!var2) { _fun0004_ip = 124; continue _fun0004 }
 79:
                    var4 = _closure2_slot4;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 4;
                    var5 = var5[var3];
                    var3 = undefined;
                    var3 = var6.bind(var3)(var5);
                    var3 = var3.PlayerState;
                    var3 = var3.UNREADY;
                    var2 = var4 === var3;
 124:
                    if(!var2) { _fun0004_ip = 172; continue _fun0004 }
 127:
                    var4 = _closure2_slot1;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 4;
                    var5 = var5[var3];
                    var3 = undefined;
                    var3 = var6.bind(var3)(var5);
                    var3 = var3.PlayerState;
                    var3 = var3.READY;
                    var2 = var4 === var3;
 172:
                    if(!var2) { _fun0004_ip = 201; continue _fun0004 }
 175:
                    var2 = _closure2_slot6;
                    var4 = var2.current;
                    var3 = var4.injectJavaScript;
                    var2 = 'window.player.playVideo();  true;';
                    var2 = var3.bind(var4)(var2);
 201:
                    var2 = _closure2_slot0;
                    if(!var2) { _fun0004_ip = 215; continue _fun0004 }
 208:
                    var3 = _closure2_slot5;
                    var2 = !var3;
 215:
                    if(!var2) { _fun0004_ip = 244; continue _fun0004 }
 218:
                    var2 = _closure2_slot6;
                    var4 = var2.current;
                    var3 = var4.injectJavaScript;
                    var2 = 'window.player.playVideo();  true;';
                    var2 = var3.bind(var4)(var2);
 244:
                    var2 = _closure2_slot0;
                    var2 = !var2;
                    if(!var2) { _fun0004_ip = 258; continue _fun0004 }
 254:
                    var2 = _closure2_slot5;
 258:
                    if(!var2) { _fun0004_ip = 287; continue _fun0004 }
 261:
                    var1 = _closure2_slot6;
                    var3 = var1.current;
                    var2 = var3.injectJavaScript;
                    var1 = 'window.player.pauseVideo(); true;';
                    var1 = var2.bind(var3)(var1);
 287:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = var16.bind(var17)(var9, var15);
            var15 = 7;
            var6 = var6[var15];
            var9 = var8.bind(var5)(var6);
            var8 = var9.getYoutubeVideoIdFromURI;
            var6 = var4.uri;
            var6 = var8.bind(var9)(var6);
            if(!(var1 == var6)) { _fun0002_ip = 385; continue _fun0002 }
 351:
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var15];
            var9 = var9.bind(var5)(var8);
            var8 = var9.getYoutubeClipVideoIdFromURI;
            var4 = var4.uri;
            var6 = var8.bind(var9)(var4);
 385:
            if(!(var1 != var6)) { _fun0002_ip = 654; continue _fun0002 }
 392:
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var14];
            var4 = var8.bind(var5)(var4);
            var4 = var4.PlayerState;
            var4 = var4.ERRORED;
            if(!(var11 === var4)) { _fun0002_ip = 438; continue _fun0002 }
 425:
            var4 = 'embed_not_allowed';
            if(!(var4 !== var7)) { _fun0002_ip = 609; continue _fun0002 }
 438:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 9;
            var4 = var8[var4];
            var7 = var7.bind(var5)(var4);
            var4 = var7.isAndroid;
            var4 = var4.bind(var7)();
            if(var4) { _fun0002_ip = 474; continue _fun0002 }
 470:
            var9 = {};
            _fun0002_ip = 488; continue _fun0002;
 474:
            var9 = {'nestedScrollEnabled': true, 'overScrollMode': 'never', 'domStorageEnabled': true, 'mixedContentMode': 'compatibility'};
 488:
            var8 = _closure1_slot6;
            var7 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var14];
            var7 = var7.bind(var5)(var4);
            var4 = {};
            var4['ref'] = var13;
            var4['style'] = var12;
            var12 = {};
            var13 = _closure1_slot7;
            var13 = var13.bind(var5)(var6);
            var12['html'] = var13;
            var4['source'] = var12;
            var12 = 'https://www.youtube.com/embed';
            var4['baseURL'] = var12;
            var4['playerState'] = var11;
            var4['onDataReceived'] = var10;
            var10 = true;
            var4['javaScriptEnabled'] = var10;
            var4['javaScriptCanOpenWindowsAutomatically'] = var10;
            var24 = var4;
            var23 = var9;
            var9 = copyDataProperties(var24, var23);
            var24 = var4;
            var23 = var3;
            var3 = copyDataProperties(var24, var23);
            var3 = var6.videoId;
            var3 = var8.bind(var5)(var7, var4, var3);
            return var3;
 609:
            var4 = _closure1_slot6;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 8;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var6 = var6.videoId;
            var2['videoId'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 654:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_viewer/native/components/MediaModalYoutube.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();