// app/modules/media_viewer/native/components/MediaModalTiktok.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var5 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = function getReadablePlayerError(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = '1';
            if(!(var1 !== var2)) { _fun0001_ip = 73; continue _fun0001 }
 13:
            var1 = '2';
            if(!(var1 !== var2)) { _fun0001_ip = 65; continue _fun0001 }
 23:
            var1 = '3';
            if(!(var1 !== var2)) { _fun0001_ip = 57; continue _fun0001 }
 33:
            var1 = '4';
            if(!(var1 !== var2)) { _fun0001_ip = 49; continue _fun0001 }
 43:
            var1 = 'UNKNOWN';
            return var1;
 49:
            var1 = 'MEDIA_ERR_SRC_NOT_SUPPORTED';
            return var1;
 57:
            var1 = 'MEDIA_ERR_DECODE';
            return var1;
 65:
            var1 = 'MEDIA_ERR_NETWORK';
            return var1;
 73:
            var1 = 'MEDIA_ERR_ABORTED';
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function postMessage(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
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
            if(!(var2 != var3)) { _fun0002_ip = 94; continue _fun0002 }
 54:
            var2 = var3.injectJavaScript;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var4 = '\n    window.postMessage(';
            var1 = ", '*')\n  ";
            var1 = var5.bind(var4)(var6, var1);
            var1 = var2.bind(var3)(var1);
 94:
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
    var4 = native4;
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
 0:
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
            if(var10) { _fun0003_ip = 240; continue _fun0003 }
 221:
            var10 = var7.props;
            var13 = var1 == var10;
            var11 = undefined;
            if(var13) { _fun0003_ip = 240; continue _fun0003 }
 235:
            var11 = var10.ref;
 240:
            _closure2_slot7 = var11;
            var13 = _closure1_slot4;
            var10 = var13.useCallback;
            var14 = var1 == var7;
            var1 = undefined;
            if(var14) { _fun0003_ip = 267; continue _fun0003 }
 262:
            var1 = var7.props;
 267:
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = global;
                    var3 = var1.JSON;
                    var2 = var3.parse;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    var3 = var1.type;
                    var2 = 'onPlayerReady';
                    if(!(var2 !== var3)) { _fun0004_ip = 483; continue _fun0004 }
 40:
                    var2 = 'onStateChange';
                    if(!(var2 !== var3)) { _fun0004_ip = 402; continue _fun0004 }
 51:
                    var2 = 'onError';
                    if(!(var2 !== var3)) { _fun0004_ip = 277; continue _fun0004 }
 62:
                    var2 = 'onCurrentTime';
                    if(!(var2 !== var3)) { _fun0004_ip = 131; continue _fun0004 }
 72:
                    var2 = 'onMute';
                    if(!(var2 === var3)) { _fun0004_ip = 532; continue _fun0004 }
 85:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 7;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.setMuted;
                    var2 = var1.value;
                    var2 = var3.bind(var4)(var2);
                    _fun0004_ip = 532; continue _fun0004;
 131:
                    var2 = _closure2_slot2;
                    var5 = null;
                    var2 = var5 == var2;
                    var7 = undefined;
                    if(var2) { _fun0004_ip = 165; continue _fun0004 }
 149:
                    var6 = _closure2_slot2;
                    var6 = var6.props;
                    var2 = var5 == var6;
                    var7 = var6;
 165:
                    if(var2) { _fun0004_ip = 178; continue _fun0004 }
 168:
                    var6 = var7.onCurrentSecond;
                    var2 = var5 == var6;
 178:
                    if(var2) { _fun0004_ip = 203; continue _fun0004 }
 181:
                    var6 = var7.onCurrentSecond;
                    var2 = var1.value;
                    var2 = var2.currentTime;
                    var2 = var6.bind(var7)(var2);
 203:
                    var2 = _closure2_slot2;
                    var2 = var5 == var2;
                    var4 = undefined;
                    if(var2) { _fun0004_ip = 232; continue _fun0004 }
 216:
                    var3 = _closure2_slot2;
                    var3 = var3.props;
                    var2 = var5 == var3;
                    var4 = var3;
 232:
                    if(var2) { _fun0004_ip = 245; continue _fun0004 }
 235:
                    var3 = var4.onDuration;
                    var2 = var5 == var3;
 245:
                    if(var2) { _fun0004_ip = 532; continue _fun0004 }
 251:
                    var3 = var4.onDuration;
                    var2 = var1.value;
                    var2 = var2.duration;
                    var2 = var3.bind(var4)(var2);
                    _fun0004_ip = 532; continue _fun0004;
 277:
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
                    _fun0004_ip = 532; continue _fun0004;
 402:
                    var2 = _closure1_slot8;
                    var1 = var1.value;
                    var3 = var2[var1];
                    var7 = null;
                    if(!(var7 != var3)) { _fun0004_ip = 532; continue _fun0004 }
 424:
                    var2 = _closure2_slot2;
                    var4 = var7 == var2;
                    var2 = undefined;
                    var5 = undefined;
                    if(var4) { _fun0004_ip = 458; continue _fun0004 }
 442:
                    var6 = _closure2_slot2;
                    var6 = var6.props;
                    var4 = var7 == var6;
                    var5 = var6;
 458:
                    if(var4) { _fun0004_ip = 472; continue _fun0004 }
 461:
                    var4 = var5.onPlayerStateChange;
                    var4 = var4.bind(var5)(var3);
 472:
                    var1 = _closure2_slot4;
                    var1 = var1.bind(var2)(var3);
                    _fun0004_ip = 532; continue _fun0004;
 483:
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
 532:
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
 0:
                    var1 = _closure2_slot7;
                    var3 = null;
                    var4 = var3 == var1;
                    var1 = undefined;
                    var2 = undefined;
                    if(var4) { _fun0005_ip = 29; continue _fun0005 }
 20:
                    var4 = _closure2_slot7;
                    var2 = var4.current;
 29:
                    var2 = var3 != var2;
                    if(!var2) { _fun0005_ip = 79; continue _fun0005 }
 36:
                    var4 = _closure2_slot3;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 4;
                    var3 = var7[var3];
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.PlayerState;
                    var3 = var3.UNREADY;
                    var2 = var4 !== var3;
 79:
                    if(!var2) { _fun0005_ip = 427; continue _fun0005 }
 85:
                    var2 = _closure2_slot0;
                    if(!var2) { _fun0005_ip = 135; continue _fun0005 }
 92:
                    var4 = _closure2_slot5;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 4;
                    var3 = var7[var3];
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.PlayerState;
                    var3 = var3.UNREADY;
                    var2 = var4 === var3;
 135:
                    if(!var2) { _fun0005_ip = 181; continue _fun0005 }
 138:
                    var4 = _closure2_slot3;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 4;
                    var3 = var7[var3];
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.PlayerState;
                    var3 = var3.READY;
                    var2 = var4 === var3;
 181:
                    if(!var2) { _fun0005_ip = 211; continue _fun0005 }
 184:
                    var4 = _closure1_slot10;
                    var3 = _closure2_slot7;
                    var2 = {};
                    var6 = 'play';
                    var2['type'] = var6;
                    var2 = var4.bind(var1)(var3, var2);
 211:
                    var2 = _closure2_slot0;
                    if(!var2) { _fun0005_ip = 225; continue _fun0005 }
 218:
                    var3 = _closure2_slot6;
                    var2 = !var3;
 225:
                    if(!var2) { _fun0005_ip = 255; continue _fun0005 }
 228:
                    var4 = _closure1_slot10;
                    var3 = _closure2_slot7;
                    var2 = {};
                    var6 = 'play';
                    var2['type'] = var6;
                    var2 = var4.bind(var1)(var3, var2);
 255:
                    var2 = _closure2_slot0;
                    var2 = !var2;
                    if(!var2) { _fun0005_ip = 269; continue _fun0005 }
 265:
                    var2 = _closure2_slot6;
 269:
                    if(!var2) { _fun0005_ip = 299; continue _fun0005 }
 272:
                    var4 = _closure1_slot10;
                    var3 = _closure2_slot7;
                    var2 = {};
                    var6 = 'pause';
                    var2['type'] = var6;
                    var2 = var4.bind(var1)(var3, var2);
 299:
                    var4 = _closure2_slot3;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 4;
                    var3 = var7[var3];
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.PlayerState;
                    var3 = var3.ENDED;
                    if(!(var4 === var3)) { _fun0005_ip = 390; continue _fun0005 }
 342:
                    var6 = _closure1_slot10;
                    var4 = _closure2_slot7;
                    var3 = {'type': 'seekTo', 'value': 0};
                    var3 = var6.bind(var1)(var4, var3);
                    var4 = _closure2_slot7;
                    var3 = {};
                    var7 = 'play';
                    var3['type'] = var7;
                    var3 = var6.bind(var1)(var4, var3);
 390:
                    var4 = _closure1_slot10;
                    var3 = _closure2_slot7;
                    var2 = {};
                    var6 = _closure2_slot8;
                    var5 = 'unMute';
                    if(!var6) { _fun0005_ip = 417; continue _fun0005 }
 413:
                    var5 = 'mute';
 417:
                    var2['type'] = var5;
                    var2 = var4.bind(var1)(var3, var2);
 427:
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
 0:
                        var4 = arg1;
                        var2 = var4[Symbol.iterator];
                        var4 = var2().next;
                        var6 = var4().value;
                        var3 = var2;
                        var1 = undefined;
                        var3 = var3 === var1;
                        var5 = undefined;
                        if(var3) { _fun0006_ip = 27; continue _fun0006 }
 24:
                        var5 = var6;
 27:
                        var6 = undefined;
                        if(var3) { _fun0006_ip = 57; continue _fun0006 }
 32:
                        var7 = var4().value;
                        var4 = var2;
                        var4 = var4 === var1;
                        var6 = undefined;
                        var3 = var4;
                        if(var4) { _fun0006_ip = 57; continue _fun0006 }
 51:
                        var6 = var7;
                        var3 = var4;
 57:
                        if(var3) { _fun0006_ip = 63; continue _fun0006 }
 60:
                        var2.return();
 63:
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
 0:
                var5 = arg1;
                var2 = _closure2_slot5;
                if(!(var2 !== var5)) { _fun0007_ip = 54; continue _fun0007 }
 14:
                var4 = _closure1_slot10;
                var3 = _closure2_slot2;
                var2 = {};
                _closure2_slot5 = var5;
                var1 = 'play';
                if(!var5) { _fun0007_ip = 42; continue _fun0007 }
 38:
                var1 = 'pause';
 42:
                var2['type'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
 54:
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
 0:
                    var2 = _closure2_slot0;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0008_ip = 33; continue _fun0008 }
 13:
                    var6 = _closure2_slot0;
                    var5 = _closure2_slot3;
                    var4 = _closure2_slot4;
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5, var4);
 33:
                    var2 = _closure2_slot1;
                    if(!(var3 != var2)) { _fun0008_ip = 56; continue _fun0008 }
 41:
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot5;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 56:
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
 0:
                var5 = arg1;
                var3 = _closure2_slot1;
                var2 = null;
                if(!(var2 != var3)) { _fun0009_ip = 102; continue _fun0009 }
 16:
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
                if(var1) { _fun0009_ip = 97; continue _fun0009 }
 64:
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var4 = var6.bind(var2)(var4);
                var4 = var4.PlayerState;
                var4 = var4.ENDED;
                var1 = var5 === var4;
 97:
                var1 = var3.bind(var2)(var1);
 102:
                var1 = undefined;
                return var1;
            }
        };
        var2['onPlayerStateChange'] = var4;
        var4 = function onCurrentSecond(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var2 = arg1;
                _closure2_slot3 = var2;
                var3 = _closure2_slot0;
                var2 = null;
                if(!(var2 != var3)) { _fun0010_ip = 40; continue _fun0010 }
 20:
                var4 = _closure2_slot0;
                var3 = _closure2_slot3;
                var2 = _closure2_slot4;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
 40:
                var1 = undefined;
                return var1;
            }
        };
        var2['onCurrentSecond'] = var4;
        var3 = function onDuration(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var2 = arg1;
                _closure2_slot4 = var2;
                var3 = _closure2_slot0;
                var2 = null;
                if(!(var2 != var3)) { _fun0011_ip = 40; continue _fun0011 }
 20:
                var4 = _closure2_slot0;
                var3 = _closure2_slot3;
                var2 = _closure2_slot4;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
 40:
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