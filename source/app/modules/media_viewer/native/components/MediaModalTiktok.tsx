// app/modules/media_viewer/native/components/MediaModalTiktok.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = function getReadablePlayerError(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = '1';
            if(!(var1 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = '2';
            if(!(var1 !== var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = '3';
            if(!(var1 !== var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = '4';
            if(!(var1 !== var2)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = 'UNKNOWN';
            return var1;
case 8:
            var1 = 'MEDIA_ERR_SRC_NOT_SUPPORTED';
            return var1;
case 6:
            var1 = 'MEDIA_ERR_DECODE';
            return var1;
case 4:
            var1 = 'MEDIA_ERR_NETWORK';
            return var1;
case 2:
            var1 = 'MEDIA_ERR_ABORTED';
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function postMessage(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = global;
            var4 = var1.JSON;
            var3 = var4.stringify;
            var2 = {};
            var5 = true;
            var2['x-tiktok-player'] = var5;
            var7 = arg2;
            var8 = var2;
            var5 = copyDataProperties(var8, var7);
            var6 = var3.bind(var4)(var2);
            var2 = arg1;
            var3 = var2.current;
            var2 = null;
            if(!(var2 != var3)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var2 = var3.injectJavaScript;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var4 = '\n    window.postMessage(';
            var1 = ", '*')\n  ";
            var1 = var5.bind(var4)(var6, var1);
            var1 = var2.bind(var3)(var1);
case 10:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var5 = var7[var4];
    var4 = metroImportAll;
    var8 = var4.bind(var1)(var5);
    var _closure1_slot4 = var8;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = {'controls': 0, 'enable_music_info': 0, 'enable_timestamp': 0, 'utm_source': 'discord.gg'};
    var _closure1_slot7 = var4;
    var4 = {};
    var5 = 4;
    var9 = var7[var5];
    var9 = var6.bind(var1)(var9);
    var9 = var9.PlayerState;
    var9 = var9.UNSTARTED;
    var4['-1'] = var9;
    var9 = var7[var5];
    var9 = var6.bind(var1)(var9);
    var9 = var9.PlayerState;
    var9 = var9.ENDED;
    var4[0] = var9;
    var9 = var7[var5];
    var9 = var6.bind(var1)(var9);
    var9 = var9.PlayerState;
    var9 = var9.PLAYING;
    var4[1] = var9;
    var9 = var7[var5];
    var9 = var6.bind(var1)(var9);
    var9 = var9.PlayerState;
    var9 = var9.PAUSED;
    var4[2] = var9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.PlayerState;
    var5 = var5.BUFFERING;
    var4[3] = var5;
    var _closure1_slot8 = var4;
    var5 = var8.memo;
    var4 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg1;
            var18 = var5.visible;
            var _closure2_slot0 = var18;
            var8 = var5.style;
            var9 = var5.source;
            var _closure2_slot1 = var9;
            var7 = var5.controls;
            var _closure2_slot2 = var7;
            var4 = {'visible': 0, 'style': 0, 'source': 0, 'controls': 0};
            var1 = null;
            var22 = var4;
            var21 = null;
            var2 = silentSetPrototypeOf(var22, var21);
            var6 = 0;
            var22 = {};
            var21 = var5;
            var20 = var4;
            var5 = copyDataProperties(var22, var21, var20);
            var4 = undefined;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var14 = _closure1_slot4;
            var11 = var14.useState;
            var15 = _closure1_slot0;
            var13 = _closure1_slot2;
            var12 = 4;
            var10 = var13[var12];
            var10 = var15.bind(var4)(var10);
            var10 = var10.PlayerState;
            var10 = var10.UNREADY;
            var14 = var11.bind(var14)(var10);
            var11 = _closure1_slot3;
            var10 = 2;
            var11 = var11.bind(var4)(var14, var10);
            var6 = var11[var6];
            var _closure2_slot3 = var6;
            var10 = 1;
            var10 = var11[var10];
            var _closure2_slot4 = var10;
            var11 = _closure1_slot1;
            var10 = 5;
            var14 = var13[var10];
            var14 = var11.bind(var4)(var14);
            var16 = var14.bind(var4)(var6);
            var _closure2_slot5 = var16;
            var10 = var13[var10];
            var10 = var11.bind(var4)(var10);
            var17 = var10.bind(var4)(var18);
            var _closure2_slot6 = var17;
            var10 = var1 == var7;
            var11 = undefined;
            if(var10) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var10 = var7.props;
            var13 = var1 == var10;
            var11 = undefined;
            if(var13) { _fun0003_ip = 12; continue _fun0003 }
case 14:
            var11 = var10.ref;
case 12:
            _closure2_slot7 = var11;
            var13 = _closure1_slot4;
            var10 = var13.useCallback;
            var14 = var1 == var7;
            var1 = undefined;
            if(var14) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var1 = var7.props;
case 15:
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = global;
                    var3 = var1.JSON;
                    var2 = var3.parse;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    var3 = var1.type;
                    var2 = 'onPlayerReady';
                    if(!(var2 !== var3)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var2 = 'onStateChange';
                    if(!(var2 !== var3)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var2 = 'onError';
                    if(!(var2 !== var3)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var2 = 'onCurrentTime';
                    if(!(var2 !== var3)) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                    var2 = 'onMute';
                    if(!(var2 === var3)) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 7;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.setMuted;
                    var2 = var1.value;
                    var2 = var3.bind(var4)(var2);
                    _fun0004_ip = 25; continue _fun0004;
case 23:
                    var2 = _closure2_slot2;
                    var5 = null;
                    var2 = var5 == var2;
                    var7 = undefined;
                    if(var2) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                    var6 = _closure2_slot2;
                    var6 = var6.props;
                    var2 = var5 == var6;
                    var7 = var6;
case 27:
                    if(var2) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                    var6 = var7.onCurrentSecond;
                    var2 = var5 == var6;
case 29:
                    if(var2) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                    var6 = var7.onCurrentSecond;
                    var2 = var1.value;
                    var2 = var2.currentTime;
                    var2 = var6.bind(var7)(var2);
case 31:
                    var2 = _closure2_slot2;
                    var2 = var5 == var2;
                    var4 = undefined;
                    if(var2) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                    var3 = _closure2_slot2;
                    var3 = var3.props;
                    var2 = var5 == var3;
                    var4 = var3;
case 33:
                    if(var2) { _fun0004_ip = 35; continue _fun0004 }
case 36:
                    var3 = var4.onDuration;
                    var2 = var5 == var3;
case 35:
                    if(var2) { _fun0004_ip = 25; continue _fun0004 }
case 37:
                    var3 = var4.onDuration;
                    var2 = var1.value;
                    var2 = var2.duration;
                    var2 = var3.bind(var4)(var2);
                    _fun0004_ip = 25; continue _fun0004;
case 21:
                    var3 = _closure2_slot4;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 4;
                    var2 = var4[var2];
                    var8 = undefined;
                    var2 = var5.bind(var8)(var2);
                    var2 = var2.PlayerState;
                    var2 = var2.ERRORED;
                    var2 = var3.bind(var8)(var2);
                    var3 = _closure1_slot1;
                    var2 = 6;
                    var2 = var4[var2];
                    var5 = var3.bind(var8)(var2);
                    var4 = var5.track;
                    var2 = _closure1_slot5;
                    var3 = var2.MESSAGE_EMBEDS_ACTION_COMPLETED;
                    var2 = {'platform': 'tiktok', 'error': null, 'action': 'errored'};
                    var7 = _closure1_slot9;
                    var6 = var1.value;
                    var6 = var7.bind(var8)(var6);
                    var2['error'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    _fun0004_ip = 25; continue _fun0004;
case 19:
                    var2 = _closure1_slot8;
                    var1 = var1.value;
                    var3 = var2[var1];
                    var7 = null;
                    if(!(var7 != var3)) { _fun0004_ip = 25; continue _fun0004 }
case 38:
                    var2 = _closure2_slot2;
                    var4 = var7 == var2;
                    var2 = undefined;
                    var5 = undefined;
                    if(var4) { _fun0004_ip = 39; continue _fun0004 }
case 40:
                    var6 = _closure2_slot2;
                    var6 = var6.props;
                    var4 = var7 == var6;
                    var5 = var6;
case 39:
                    if(var4) { _fun0004_ip = 41; continue _fun0004 }
case 42:
                    var4 = var5.onPlayerStateChange;
                    var4 = var4.bind(var5)(var3);
case 41:
                    var1 = _closure2_slot4;
                    var1 = var1.bind(var2)(var3);
                    _fun0004_ip = 25; continue _fun0004;
case 17:
                    var3 = _closure2_slot4;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 4;
                    var1 = var2[var1];
                    var2 = undefined;
                    var1 = var4.bind(var2)(var1);
                    var1 = var1.PlayerState;
                    var1 = var1.READY;
                    var1 = var3.bind(var2)(var1);
case 25:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var10.bind(var13)(var1, var7);
            var13 = _closure1_slot0;
            var1 = _closure1_slot2;
            var10 = 8;
            var10 = var1[var10];
            var14 = var13.bind(var4)(var10);
            var13 = var14.useMediaPlayerMutedStore;
            var10 = function(arg1) {
                var1 = arg1;
                var1 = var1.isMuted;
                return var1;
            };
            var10 = var13.bind(var14)(var10);
            _closure2_slot8 = var10;
            var14 = _closure1_slot4;
            var15 = var14.useEffect;
            var13 = new Array(6);
            var13[0] = var11;
            var13[1] = var18;
            var13[2] = var17;
            var13[3] = var16;
            var13[4] = var6;
            var13[5] = var10;
            var10 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot7;
                    var3 = null;
                    var4 = var3 == var1;
                    var1 = undefined;
                    var2 = undefined;
                    if(var4) { _fun0005_ip = 43; continue _fun0005 }
case 44:
                    var4 = _closure2_slot7;
                    var2 = var4.current;
case 43:
                    var2 = var3 != var2;
                    if(!var2) { _fun0005_ip = 45; continue _fun0005 }
case 46:
                    var4 = _closure2_slot3;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 4;
                    var3 = var7[var3];
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.PlayerState;
                    var3 = var3.UNREADY;
                    var2 = var4 !== var3;
case 45:
                    if(!var2) { _fun0005_ip = 47; continue _fun0005 }
case 26:
                    var2 = _closure2_slot0;
                    if(!var2) { _fun0005_ip = 48; continue _fun0005 }
case 49:
                    var4 = _closure2_slot5;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 4;
                    var3 = var7[var3];
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.PlayerState;
                    var3 = var3.UNREADY;
                    var2 = var4 === var3;
case 48:
                    if(!var2) { _fun0005_ip = 32; continue _fun0005 }
case 50:
                    var4 = _closure2_slot3;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 4;
                    var3 = var7[var3];
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.PlayerState;
                    var3 = var3.READY;
                    var2 = var4 === var3;
case 32:
                    if(!var2) { _fun0005_ip = 51; continue _fun0005 }
case 52:
                    var4 = _closure1_slot10;
                    var3 = _closure2_slot7;
                    var2 = {};
                    var6 = 'play';
                    var2['type'] = var6;
                    var2 = var4.bind(var1)(var3, var2);
case 51:
                    var2 = _closure2_slot0;
                    if(!var2) { _fun0005_ip = 53; continue _fun0005 }
case 54:
                    var3 = _closure2_slot6;
                    var2 = !var3;
case 53:
                    if(!var2) { _fun0005_ip = 55; continue _fun0005 }
case 56:
                    var4 = _closure1_slot10;
                    var3 = _closure2_slot7;
                    var2 = {};
                    var6 = 'play';
                    var2['type'] = var6;
                    var2 = var4.bind(var1)(var3, var2);
case 55:
                    var2 = _closure2_slot0;
                    var2 = !var2;
                    if(!var2) { _fun0005_ip = 57; continue _fun0005 }
case 58:
                    var2 = _closure2_slot6;
case 57:
                    if(!var2) { _fun0005_ip = 59; continue _fun0005 }
case 60:
                    var4 = _closure1_slot10;
                    var3 = _closure2_slot7;
                    var2 = {};
                    var6 = 'pause';
                    var2['type'] = var6;
                    var2 = var4.bind(var1)(var3, var2);
case 59:
                    var4 = _closure2_slot3;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 4;
                    var3 = var7[var3];
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.PlayerState;
                    var3 = var3.ENDED;
                    if(!(var4 === var3)) { _fun0005_ip = 61; continue _fun0005 }
case 62:
                    var6 = _closure1_slot10;
                    var4 = _closure2_slot7;
                    var3 = {'type': 'seekTo', 'value': 0};
                    var3 = var6.bind(var1)(var4, var3);
                    var4 = _closure2_slot7;
                    var3 = {};
                    var7 = 'play';
                    var3['type'] = var7;
                    var3 = var6.bind(var1)(var4, var3);
case 61:
                    var4 = _closure1_slot10;
                    var3 = _closure2_slot7;
                    var2 = {};
                    var6 = _closure2_slot8;
                    var5 = 'unMute';
                    if(!var6) { _fun0005_ip = 63; continue _fun0005 }
case 64:
                    var5 = 'mute';
case 63:
                    var2['type'] = var5;
                    var2 = var4.bind(var1)(var3, var2);
case 47:
                    return var1;
                }
            };
            var10 = var15.bind(var14)(var10, var13);
            var15 = var14.useEffect;
            var13 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 6;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot5;
                var3 = var2.MESSAGE_EMBEDS_ACTION_COMPLETED;
                var2 = {'platform': 'tiktok', 'action': 'attempted'};
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var10 = new Array(0);
            var10 = var15.bind(var14)(var13, var10);
            var13 = var14.useMemo;
            var15 = var9.uri;
            var10 = new Array(1);
            var10[0] = var15;
            var3 = function() {
                var3 = global;
                var5 = var3.URL;
                var2 = _closure2_slot1;
                var6 = var2.uri;
                var4 = var5.prototype;
                var4 = Object.create(var4, {constructor: {value: var5}});
                var7 = var4;
                var2 = new var7[var5](var6, var5);
                var2 = var2 instanceof Object ? var2 : var4;
                var _closure3_slot0 = var2;
                var5 = var3.Object;
                var4 = var5.entries;
                var3 = _closure1_slot7;
                var4 = var4.bind(var5)(var3);
                var3 = var4.forEach;
                var1 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var4 = arg1;
                        var2 = var4[Symbol.iterator];
                        var4 = var2().next;
                        var6 = var4().value;
                        var3 = var2;
                        var1 = undefined;
                        var3 = var3 === var1;
                        var5 = undefined;
                        if(var3) { _fun0006_ip = 65; continue _fun0006 }
case 66:
                        var5 = var6;
case 65:
                        var6 = undefined;
                        if(var3) { _fun0006_ip = 6; continue _fun0006 }
case 67:
                        var7 = var4().value;
                        var4 = var2;
                        var4 = var4 === var1;
                        var6 = undefined;
                        var3 = var4;
                        if(var4) { _fun0006_ip = 6; continue _fun0006 }
case 20:
                        var6 = var7;
                        var3 = var4;
case 6:
                        if(var3) { _fun0006_ip = 68; continue _fun0006 }
case 69:
                        var2.return();
case 68:
                        var2 = _closure3_slot0;
                        var4 = var2.searchParams;
                        var3 = var4.append;
                        var2 = var6.toString;
                        var2 = var2.bind(var6)();
                        var2 = var3.bind(var4)(var5, var2);
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1);
                var1 = var2.toString;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var13.bind(var14)(var3, var10);
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var1 = var1[var12];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['ref'] = var11;
            var1['style'] = var8;
            var8 = {};
            var22 = var8;
            var21 = var9;
            var9 = copyDataProperties(var22, var21);
            var9 = 'uri';
            var8[var9] = var10;
            var1['source'] = var8;
            var8 = 'https://www.tiktok.com/player/v1/';
            var1['baseURL'] = var8;
            var8 = '\n  window.addEventListener(\'message\', function(event) {\n    if (!event.data["x-tiktok-player"]) {\n      return;\n    }\n    window.ReactNativeWebView.postMessage(JSON.stringify(event.data));\n  }, true);\n';
            var1['injectedJavaScript'] = var8;
            var1['onDataReceived'] = var7;
            var1['playerState'] = var6;
            var22 = var1;
            var21 = var5;
            var5 = copyDataProperties(var22, var21);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/media_viewer/native/components/MediaModalTiktok.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function createTiktokVideoControls() {
        var2 = _closure1_slot4;
        var1 = var2.createRef;
        var4 = var1.bind(var2)();
        var _closure2_slot2 = var4;
        var1 = 0;
        var _closure2_slot3 = var1;
        var _closure2_slot4 = var1;
        var1 = false;
        var _closure2_slot5 = var1;
        var1 = {};
        var2 = function seek(arg1) {
            var4 = _closure1_slot10;
            var3 = _closure2_slot2;
            var2 = {};
            var1 = 'seekTo';
            var2['type'] = var1;
            var1 = arg1;
            var2['value'] = var1;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1['seek'] = var2;
        var2 = function pause(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var5 = arg1;
                var2 = _closure2_slot5;
                if(!(var2 !== var5)) { _fun0007_ip = 11; continue _fun0007 }
case 70:
                var4 = _closure1_slot10;
                var3 = _closure2_slot2;
                var2 = {};
                _closure2_slot5 = var5;
                var1 = 'play';
                if(!var5) { _fun0007_ip = 71; continue _fun0007 }
case 72:
                var1 = 'pause';
case 71:
                var2['type'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
case 11:
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
            var4 = _closure1_slot4;
            var3 = var4.useLayoutEffect;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0008_ip = 7; continue _fun0008 }
case 3:
                    var6 = _closure2_slot0;
                    var5 = _closure2_slot3;
                    var4 = _closure2_slot4;
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5, var4);
case 7:
                    var2 = _closure2_slot1;
                    if(!(var3 != var2)) { _fun0008_ip = 73; continue _fun0008 }
case 74:
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot5;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 73:
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
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var5 = arg1;
                var3 = _closure2_slot1;
                var2 = null;
                if(!(var2 != var3)) { _fun0009_ip = 75; continue _fun0009 }
case 76:
                var3 = _closure2_slot1;
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var7 = 4;
                var1 = var1[var7];
                var2 = undefined;
                var1 = var6.bind(var2)(var1);
                var1 = var1.PlayerState;
                var1 = var1.PAUSED;
                var1 = var5 === var1;
                if(var1) { _fun0009_ip = 77; continue _fun0009 }
case 78:
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var4 = var6.bind(var2)(var4);
                var4 = var4.PlayerState;
                var4 = var4.ENDED;
                var1 = var5 === var4;
case 77:
                var1 = var3.bind(var2)(var1);
case 75:
                var1 = undefined;
                return var1;
            }
        };
        var2['onPlayerStateChange'] = var4;
        var4 = function onCurrentSecond(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = arg1;
                _closure2_slot3 = var2;
                var3 = _closure2_slot0;
                var2 = null;
                if(!(var2 != var3)) { _fun0010_ip = 18; continue _fun0010 }
case 44:
                var4 = _closure2_slot0;
                var3 = _closure2_slot3;
                var2 = _closure2_slot4;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
case 18:
                var1 = undefined;
                return var1;
            }
        };
        var2['onCurrentSecond'] = var4;
        var3 = function onDuration(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var2 = arg1;
                _closure2_slot4 = var2;
                var3 = _closure2_slot0;
                var2 = null;
                if(!(var2 != var3)) { _fun0011_ip = 18; continue _fun0011 }
case 44:
                var4 = _closure2_slot0;
                var3 = _closure2_slot3;
                var2 = _closure2_slot4;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
case 18:
                var1 = undefined;
                return var1;
            }
        };
        var2['onDuration'] = var3;
        var1['props'] = var2;
        return var1;
    };
    var3['createTiktokVideoControls'] = var2;
    return var1;
})();