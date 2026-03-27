// app/modules/media_viewer/native/components/MediaModalWebVideoFile.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var8 = var7[var5];
    var5 = metroImportAll;
    var8 = var5.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot5 = var5;
    var5 = var4.window;
    var5 = var5.GLOBAL_ENV;
    var9 = var5.WEBAPP_ENDPOINT;
    var4 = var4.HermesInternal;
    var5 = var4.concat;
    var4 = 'https:';
    var4 = var5.bind(var4)(var9);
    var _closure1_slot6 = var4;
    var4 = function HTML(arg1) {
        var1 = global;
        var4 = var1.JSON;
        var3 = var4.stringify;
        var2 = arg1;
        var5 = var3.bind(var4)(var2);
        var2 = var1.HermesInternal;
        var4 = var2.concat;
        var3 = "\nfunction onReady() {\n  const player = window.player = document.createElement('video');\n  player.controls = false;\n  player.autoplay = false;\n  player.playsInline = true;\n  player.disablePictureInPicture = true;\n  const addEvent = (name, func) => {\n    player.addEventListener(name, (e) => {\n      window.ReactNativeWebView.postMessage(\n        JSON.stringify({type: name, value: func ? func() : undefined})\n      );\n    });\n  };\n  addEvent('error', () => player.error);\n  addEvent('canplay');\n  addEvent('ended');\n  addEvent('pause');\n  addEvent('play');\n  addEvent('stalled');\n  addEvent('durationchange', () => player.duration);\n  addEvent('timeupdate', () => player.currentTime);\n  addEvent('progress', () => {\n    const ranges = player.buffered;\n    let total = 0;\n    for (let i = 0; i < ranges.length; i++) {\n      total += (ranges.end(i) - ranges.start(i));\n    }\n    return total;\n  });\n  player.src = ";
        var2 = ";\n  document.body.appendChild(player);\n  player.load();\n  window.ReactNativeWebView.postMessage(JSON.stringify({type: 'loaded'}));\n}\nwindow.addEventListener('load', onReady);\n";
        var4 = var4.bind(var3)(var5, var2);
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = '\n<html>\n  <head>\n    <meta name="viewport" content="initial-scale=1">\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n        inset: 0;\n        width: 100%;\n        height: 100%;\n        background-color: #000;\n        object-fit: contain;\n      }\n    </style>\n    <script>';
        var1 = '</script>\n  </head>\n  <body>\n  </body>\n</html>\n';
        var1 = var3.bind(var2)(var4, var1);
        return var1;
    };
    var _closure1_slot7 = var4;
    var5 = var8.memo;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var18 = var8.visible;
            var _closure2_slot0 = var18;
            var10 = var8.style;
            var1 = var8.source;
            var4 = var8.controls;
            var _closure2_slot1 = var4;
            var6 = {'visible': 0, 'style': 0, 'source': 0, 'controls': 0};
            var2 = null;
            var22 = var6;
            var21 = null;
            var5 = silentSetPrototypeOf(var22, var21);
            var7 = 0;
            var22 = {};
            var21 = var8;
            var20 = var6;
            var6 = copyDataProperties(var22, var21, var20);
            var5 = undefined;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var14 = _closure1_slot4;
            var11 = var14.useState;
            var15 = _closure1_slot0;
            var12 = _closure1_slot2;
            var13 = 3;
            var8 = var12[var13];
            var8 = var15.bind(var5)(var8);
            var8 = var8.PlayerState;
            var8 = var8.UNREADY;
            var14 = var11.bind(var14)(var8);
            var11 = _closure1_slot3;
            var8 = 2;
            var11 = var11.bind(var5)(var14, var8);
            var8 = var11[var7];
            var _closure2_slot2 = var8;
            var7 = 1;
            var7 = var11[var7];
            var _closure2_slot3 = var7;
            var11 = _closure1_slot1;
            var7 = 4;
            var14 = var12[var7];
            var14 = var11.bind(var5)(var14);
            var16 = var14.bind(var5)(var8);
            var _closure2_slot4 = var16;
            var7 = var12[var7];
            var7 = var11.bind(var5)(var7);
            var17 = var7.bind(var5)(var18);
            var _closure2_slot5 = var17;
            var7 = var2 == var4;
            var12 = undefined;
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var4.props;
            var11 = var2 == var7;
            var12 = undefined;
            if(var11) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var12 = var7.ref;
case 2:
            _closure2_slot6 = var12;
            var11 = _closure1_slot4;
            var15 = var11.useEffect;
            var14 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var4 = var2.MediaViewerAnalytics;
                var3 = var4.trackMessageEmbedsActionCompleted;
                var2 = {'platform': 'file', 'action': 'attempted'};
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var7 = new Array(0);
            var7 = var15.bind(var11)(var14, var7);
            var7 = var11.useCallback;
            var14 = var2 == var4;
            var2 = undefined;
            if(var14) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var2 = var4.props;
case 5:
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
case 7: // try_start_0
                    var2 = global;
                    var3 = var2.JSON;
                    var2 = var3.parse;
                    var1 = var2.bind(var3)(var1);
case 8: // try_end0
                    _fun0002_ip = 9; continue _fun0002;
case 10: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var1 = {};
case 9:
                    var2 = var1.type;
                    var3 = var1.value;
                    var1 = 'loaded';
                    if(!(var1 !== var2)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var1 = 'canplay';
                    if(!(var1 !== var2)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var1 = 'error';
                    if(!(var1 !== var2)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var1 = 'ended';
                    if(!(var1 !== var2)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var1 = 'play';
                    if(!(var1 !== var2)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var1 = 'pause';
                    if(!(var1 !== var2)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                    var1 = 'stalled';
                    if(!(var1 !== var2)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                    var1 = 'durationchange';
                    if(!(var1 !== var2)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                    var1 = 'progress';
                    if(!(var1 !== var2)) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                    var1 = 'timeupdate';
                    if(!(var1 === var2)) { _fun0002_ip = 29; continue _fun0002 }
case 30:
                    var5 = null;
                    if(!(var5 != var3)) { _fun0002_ip = 29; continue _fun0002 }
case 31:
                    var1 = _closure2_slot1;
                    var1 = var5 == var1;
                    var2 = undefined;
                    if(var1) { _fun0002_ip = 32; continue _fun0002 }
case 33:
                    var4 = _closure2_slot1;
                    var4 = var4.props;
                    var1 = var5 == var4;
                    var2 = var4;
case 32:
                    if(var1) { _fun0002_ip = 34; continue _fun0002 }
case 35:
                    var4 = var2.onCurrentSecond;
                    var1 = var5 == var4;
case 34:
                    if(var1) { _fun0002_ip = 29; continue _fun0002 }
case 3:
                    var1 = var2.onCurrentSecond;
                    var1 = var1.bind(var2)(var3);
                    _fun0002_ip = 29; continue _fun0002;
case 27:
                    var5 = null;
                    if(!(var5 != var3)) { _fun0002_ip = 29; continue _fun0002 }
case 36:
                    var1 = _closure2_slot1;
                    var1 = var5 == var1;
                    var2 = undefined;
                    if(var1) { _fun0002_ip = 37; continue _fun0002 }
case 38:
                    var4 = _closure2_slot1;
                    var4 = var4.props;
                    var1 = var5 == var4;
                    var2 = var4;
case 37:
                    if(var1) { _fun0002_ip = 39; continue _fun0002 }
case 40:
                    var4 = var2.onDownloadProgress;
                    var1 = var5 == var4;
case 39:
                    if(var1) { _fun0002_ip = 29; continue _fun0002 }
case 41:
                    var1 = var2.onDownloadProgress;
                    var1 = var1.bind(var2)(var3);
                    _fun0002_ip = 29; continue _fun0002;
case 25:
                    var5 = null;
                    if(!(var5 != var3)) { _fun0002_ip = 29; continue _fun0002 }
case 42:
                    var1 = _closure2_slot1;
                    var1 = var5 == var1;
                    var2 = undefined;
                    if(var1) { _fun0002_ip = 43; continue _fun0002 }
case 44:
                    var4 = _closure2_slot1;
                    var4 = var4.props;
                    var1 = var5 == var4;
                    var2 = var4;
case 43:
                    if(var1) { _fun0002_ip = 45; continue _fun0002 }
case 46:
                    var4 = var2.onDuration;
                    var1 = var5 == var4;
case 45:
                    if(var1) { _fun0002_ip = 29; continue _fun0002 }
case 47:
                    var1 = var2.onDuration;
                    var1 = var1.bind(var2)(var3);
                    _fun0002_ip = 29; continue _fun0002;
case 23:
                    var2 = _closure2_slot1;
                    var6 = null;
                    var2 = var6 == var2;
                    var3 = undefined;
                    var5 = undefined;
                    if(var2) { _fun0002_ip = 48; continue _fun0002 }
case 49:
                    var4 = _closure2_slot1;
                    var4 = var4.props;
                    var2 = var6 == var4;
                    var5 = var4;
case 48:
                    if(var2) { _fun0002_ip = 50; continue _fun0002 }
case 51:
                    var4 = var5.onPlayerStateChange;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 3;
                    var2 = var7[var2];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.PlayerState;
                    var2 = var2.BUFFERING;
                    var2 = var4.bind(var5)(var2);
case 50:
                    var2 = _closure2_slot3;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 3;
                    var1 = var5[var1];
                    var1 = var4.bind(var3)(var1);
                    var1 = var1.PlayerState;
                    var1 = var1.BUFFERING;
                    var1 = var2.bind(var3)(var1);
                    _fun0002_ip = 29; continue _fun0002;
case 21:
                    var2 = _closure2_slot1;
                    var6 = null;
                    var2 = var6 == var2;
                    var3 = undefined;
                    var5 = undefined;
                    if(var2) { _fun0002_ip = 52; continue _fun0002 }
case 53:
                    var4 = _closure2_slot1;
                    var4 = var4.props;
                    var2 = var6 == var4;
                    var5 = var4;
case 52:
                    if(var2) { _fun0002_ip = 54; continue _fun0002 }
case 55:
                    var4 = var5.onPlayerStateChange;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 3;
                    var2 = var7[var2];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.PlayerState;
                    var2 = var2.PAUSED;
                    var2 = var4.bind(var5)(var2);
case 54:
                    var2 = _closure2_slot3;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 3;
                    var1 = var5[var1];
                    var1 = var4.bind(var3)(var1);
                    var1 = var1.PlayerState;
                    var1 = var1.PAUSED;
                    var1 = var2.bind(var3)(var1);
                    _fun0002_ip = 29; continue _fun0002;
case 19:
                    var2 = _closure2_slot1;
                    var6 = null;
                    var2 = var6 == var2;
                    var3 = undefined;
                    var5 = undefined;
                    if(var2) { _fun0002_ip = 56; continue _fun0002 }
case 57:
                    var4 = _closure2_slot1;
                    var4 = var4.props;
                    var2 = var6 == var4;
                    var5 = var4;
case 56:
                    if(var2) { _fun0002_ip = 58; continue _fun0002 }
case 59:
                    var4 = var5.onPlayerStateChange;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 3;
                    var2 = var7[var2];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.PlayerState;
                    var2 = var2.PLAYING;
                    var2 = var4.bind(var5)(var2);
case 58:
                    var2 = _closure2_slot3;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 3;
                    var1 = var5[var1];
                    var1 = var4.bind(var3)(var1);
                    var1 = var1.PlayerState;
                    var1 = var1.PLAYING;
                    var1 = var2.bind(var3)(var1);
                    _fun0002_ip = 29; continue _fun0002;
case 17:
                    var2 = _closure2_slot1;
                    var6 = null;
                    var2 = var6 == var2;
                    var3 = undefined;
                    var5 = undefined;
                    if(var2) { _fun0002_ip = 60; continue _fun0002 }
case 61:
                    var4 = _closure2_slot1;
                    var4 = var4.props;
                    var2 = var6 == var4;
                    var5 = var4;
case 60:
                    if(var2) { _fun0002_ip = 62; continue _fun0002 }
case 63:
                    var4 = var5.onPlayerStateChange;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 3;
                    var2 = var7[var2];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.PlayerState;
                    var2 = var2.ENDED;
                    var2 = var4.bind(var5)(var2);
case 62:
                    var2 = _closure2_slot3;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 3;
                    var1 = var5[var1];
                    var1 = var4.bind(var3)(var1);
                    var1 = var1.PlayerState;
                    var1 = var1.ENDED;
                    var1 = var2.bind(var3)(var1);
                    _fun0002_ip = 29; continue _fun0002;
case 15:
                    var5 = _closure2_slot3;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 3;
                    var1 = var4[var1];
                    var2 = undefined;
                    var1 = var3.bind(var2)(var1);
                    var1 = var1.PlayerState;
                    var1 = var1.ERRORED;
                    var1 = var5.bind(var2)(var1);
                    var1 = 5;
                    var1 = var4[var1];
                    var1 = var3.bind(var2)(var1);
                    var3 = var1.MediaViewerAnalytics;
                    var2 = var3.trackMessageEmbedsActionCompleted;
                    var1 = {'platform': 'file', 'action': 'errored', 'error': 'unknown'};
                    var1 = var2.bind(var3)(var1);
                    _fun0002_ip = 29; continue _fun0002;
case 13:
                    var2 = _closure2_slot1;
                    var6 = null;
                    var2 = var6 == var2;
                    var3 = undefined;
                    var5 = undefined;
                    if(var2) { _fun0002_ip = 64; continue _fun0002 }
case 65:
                    var4 = _closure2_slot1;
                    var4 = var4.props;
                    var2 = var6 == var4;
                    var5 = var4;
case 64:
                    if(var2) { _fun0002_ip = 66; continue _fun0002 }
case 67:
                    var4 = var5.onPlayerStateChange;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 3;
                    var2 = var7[var2];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.PlayerState;
                    var2 = var2.VIDEO_CUED;
                    var2 = var4.bind(var5)(var2);
case 66:
                    var2 = _closure2_slot3;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 3;
                    var1 = var5[var1];
                    var1 = var4.bind(var3)(var1);
                    var1 = var1.PlayerState;
                    var1 = var1.VIDEO_CUED;
                    var1 = var2.bind(var3)(var1);
                    _fun0002_ip = 29; continue _fun0002;
case 11:
                    var3 = _closure2_slot3;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 3;
                    var1 = var2[var1];
                    var2 = undefined;
                    var1 = var4.bind(var2)(var1);
                    var1 = var1.PlayerState;
                    var1 = var1.READY;
                    var1 = var3.bind(var2)(var1);
case 29:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var7.bind(var11)(var2, var4);
            var11 = _closure1_slot0;
            var2 = _closure1_slot2;
            var4 = 6;
            var4 = var2[var4];
            var14 = var11.bind(var5)(var4);
            var11 = var14.useMediaPlayerMutedStore;
            var4 = function(arg1) {
                var1 = arg1;
                var1 = var1.isMuted;
                return var1;
            };
            var15 = var11.bind(var14)(var4);
            _closure2_slot7 = var15;
            var14 = _closure1_slot4;
            var11 = var14.useEffect;
            var4 = new Array(6);
            var4[0] = var12;
            var4[1] = var18;
            var4[2] = var17;
            var4[3] = var16;
            var4[4] = var8;
            var4[5] = var15;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot6;
                    var4 = null;
                    var5 = var4 == var1;
                    var1 = undefined;
                    var3 = undefined;
                    if(var5) { _fun0003_ip = 68; continue _fun0003 }
case 69:
                    var5 = _closure2_slot6;
                    var3 = var5.current;
case 68:
                    var3 = var4 != var3;
                    if(!var3) { _fun0003_ip = 70; continue _fun0003 }
case 71:
                    var5 = _closure2_slot2;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 3;
                    var4 = var7[var4];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.PlayerState;
                    var4 = var4.UNREADY;
                    var3 = var5 !== var4;
case 70:
                    if(!var3) { _fun0003_ip = 72; continue _fun0003 }
case 73:
                    var3 = _closure2_slot6;
                    var5 = var3.current;
                    var4 = var5.injectJavaScript;
                    var3 = global;
                    var8 = var3.JSON;
                    var7 = var8.stringify;
                    var6 = _closure2_slot7;
                    var8 = var7.bind(var8)(var6);
                    var3 = var3.HermesInternal;
                    var7 = var3.concat;
                    var6 = 'window.player.muted = ';
                    var3 = '; true;';
                    var3 = var7.bind(var6)(var8, var3);
                    var3 = var4.bind(var5)(var3);
                    var3 = _closure2_slot0;
                    if(!var3) { _fun0003_ip = 34; continue _fun0003 }
case 74:
                    var5 = _closure2_slot4;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 3;
                    var4 = var7[var4];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.PlayerState;
                    var4 = var4.UNREADY;
                    var3 = var5 === var4;
case 34:
                    if(!var3) { _fun0003_ip = 75; continue _fun0003 }
case 76:
                    var5 = _closure2_slot2;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 3;
                    var4 = var7[var4];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.PlayerState;
                    var4 = var4.READY;
                    var3 = var5 === var4;
case 75:
                    if(!var3) { _fun0003_ip = 77; continue _fun0003 }
case 78:
                    var3 = _closure2_slot6;
                    var5 = var3.current;
                    var4 = var5.injectJavaScript;
                    var3 = 'window.player.play();  true;';
                    var3 = var4.bind(var5)(var3);
case 77:
                    var3 = _closure2_slot0;
                    if(!var3) { _fun0003_ip = 79; continue _fun0003 }
case 41:
                    var4 = _closure2_slot5;
                    var3 = !var4;
case 79:
                    if(!var3) { _fun0003_ip = 80; continue _fun0003 }
case 81:
                    var3 = _closure2_slot6;
                    var5 = var3.current;
                    var4 = var5.injectJavaScript;
                    var3 = 'window.player.play();  true;';
                    var3 = var4.bind(var5)(var3);
case 80:
                    var3 = _closure2_slot0;
                    var3 = !var3;
                    if(!var3) { _fun0003_ip = 82; continue _fun0003 }
case 83:
                    var3 = _closure2_slot5;
case 82:
                    if(!var3) { _fun0003_ip = 72; continue _fun0003 }
case 84:
                    var2 = _closure2_slot6;
                    var4 = var2.current;
                    var3 = var4.injectJavaScript;
                    var2 = 'window.player.pause(); true;';
                    var2 = var3.bind(var4)(var2);
case 72:
                    return var1;
                }
            };
            var3 = var11.bind(var14)(var3, var4);
            var4 = _closure1_slot7;
            var3 = var1.uri;
            var11 = var4.bind(var5)(var3);
            var4 = _closure1_slot5;
            var3 = _closure1_slot1;
            var2 = var2[var13];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['ref'] = var12;
            var2['style'] = var10;
            var10 = {};
            var10['html'] = var11;
            var9 = _closure1_slot6;
            var10['baseUrl'] = var9;
            var2['source'] = var10;
            var2['baseURL'] = var9;
            var2['playerState'] = var8;
            var2['onDataReceived'] = var7;
            var7 = true;
            var2['javaScriptEnabled'] = var7;
            var2['javaScriptCanOpenWindowsAutomatically'] = var7;
            var22 = var2;
            var21 = var6;
            var6 = copyDataProperties(var22, var21);
            var1 = var1.uri;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/media_viewer/native/components/MediaModalWebVideoFile.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function createWebFileVideoControls() {
        var2 = _closure1_slot4;
        var1 = var2.createRef;
        var4 = var1.bind(var2)();
        var _closure2_slot3 = var4;
        var1 = 0;
        var _closure2_slot4 = var1;
        var _closure2_slot5 = var1;
        var _closure2_slot6 = var1;
        var1 = function updateProgress() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = _closure2_slot5;
                var2 = 0;
                if(!(var3 > var2)) { _fun0004_ip = 85; continue _fun0004 }
case 86:
                var3 = _closure2_slot2;
                var2 = null;
                if(!(var2 != var3)) { _fun0004_ip = 85; continue _fun0004 }
case 87:
                var3 = _closure2_slot2;
                var2 = _closure2_slot6;
                var1 = _closure2_slot5;
                var2 = var2 / var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
case 85:
                var1 = undefined;
                return var1;
            }
        };
        var _closure2_slot7 = var1;
        var1 = {};
        var2 = function seek(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = _closure2_slot3;
                var3 = var1.current;
                var1 = null;
                if(!(var1 != var3)) { _fun0005_ip = 88; continue _fun0005 }
case 89:
                var2 = var3.injectJavaScript;
                var1 = global;
                var6 = var1.JSON;
                var5 = var6.stringify;
                var4 = arg1;
                var6 = var5.bind(var6)(var4);
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var4 = 'window.player.currentTime = ';
                var1 = '; true;';
                var1 = var5.bind(var4)(var6, var1);
                var1 = var2.bind(var3)(var1);
case 88:
                var1 = undefined;
                return var1;
            }
        };
        var1['seek'] = var2;
        var2 = function pause(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = _closure2_slot3;
                var3 = var1.current;
                var1 = null;
                if(!(var1 != var3)) { _fun0006_ip = 90; continue _fun0006 }
case 89:
                var2 = var3.injectJavaScript;
                var6 = 'play';
                var1 = arg1;
                if(!var1) { _fun0006_ip = 91; continue _fun0006 }
case 92:
                var6 = 'pause';
case 91:
                var1 = global;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var4 = 'window.player.';
                var1 = '(); true;';
                var1 = var5.bind(var4)(var6, var1);
                var1 = var2.bind(var3)(var1);
case 90:
                var1 = undefined;
                return var1;
            }
        };
        var1['pause'] = var2;
        var2 = function useSubscribe(arg1, arg2, arg3) {
            var1 = arg1;
            var _closure2_slot0 = var1;
            var1 = arg2;
            var _closure2_slot1 = var1;
            var1 = arg3;
            var _closure2_slot2 = var1;
            var4 = _closure1_slot4;
            var3 = var4.useLayoutEffect;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0007_ip = 93; continue _fun0007 }
case 86:
                    var4 = _closure2_slot0;
                    var3 = _closure2_slot4;
                    var2 = _closure2_slot5;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
case 93:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = new Array(0);
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var1['useSubscribe'] = var2;
        var2 = {};
        var2['ref'] = var4;
        var4 = function onPlayerStateChange(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var5 = arg1;
                var3 = _closure2_slot1;
                var2 = null;
                if(!(var2 != var3)) { _fun0008_ip = 94; continue _fun0008 }
case 95:
                var3 = _closure2_slot1;
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var7 = 3;
                var1 = var1[var7];
                var2 = undefined;
                var1 = var6.bind(var2)(var1);
                var1 = var1.PlayerState;
                var1 = var1.PAUSED;
                var1 = var5 === var1;
                if(var1) { _fun0008_ip = 96; continue _fun0008 }
case 97:
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var4 = var6.bind(var2)(var4);
                var4 = var4.PlayerState;
                var4 = var4.ENDED;
                var1 = var5 === var4;
case 96:
                var1 = var3.bind(var2)(var1);
case 94:
                var1 = undefined;
                return var1;
            }
        };
        var2['onPlayerStateChange'] = var4;
        var4 = function onCurrentSecond(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = arg1;
                _closure2_slot4 = var2;
                var3 = _closure2_slot0;
                var2 = null;
                if(!(var2 != var3)) { _fun0009_ip = 98; continue _fun0009 }
case 69:
                var4 = _closure2_slot0;
                var3 = _closure2_slot4;
                var2 = _closure2_slot5;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
case 98:
                var1 = undefined;
                return var1;
            }
        };
        var2['onCurrentSecond'] = var4;
        var4 = function onDuration(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = arg1;
                _closure2_slot5 = var2;
                var3 = _closure2_slot0;
                var2 = null;
                if(!(var2 != var3)) { _fun0010_ip = 98; continue _fun0010 }
case 69:
                var5 = _closure2_slot0;
                var4 = _closure2_slot4;
                var3 = _closure2_slot5;
                var2 = undefined;
                var2 = var5.bind(var2)(var4, var3);
case 98:
                var2 = _closure2_slot7;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            }
        };
        var2['onDuration'] = var4;
        var3 = function onDownloadProgress(arg1) {
            var2 = arg1;
            _closure2_slot6 = var2;
            var2 = _closure2_slot7;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        };
        var2['onDownloadProgress'] = var3;
        var1['props'] = var2;
        return var1;
    };
    var3['createWebFileVideoControls'] = var2;
    return var1;
})();