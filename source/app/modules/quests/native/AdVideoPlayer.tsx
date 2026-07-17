// app/modules/quests/native/AdVideoPlayer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var8;
    var1 = function getSafeAreaInsetOrPadding(arg1, arg2) {
        var5 = arg2;
        var1 = global;
        var4 = var1.Math;
        var3 = var4.max;
        var1 = arg1;
        var2 = var1[var5];
        var1 = _closure1_slot13;
        var1 = var1[var5];
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot25 = var1;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var13 = 0;
    var4 = var8[var13];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var5 = var8[var4];
    var4 = metroImportAll;
    var9 = var4.bind(var1)(var5);
    var _closure1_slot4 = var9;
    var4 = 2;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var5 = var4.View;
    var _closure1_slot5 = var5;
    var17 = var4.StyleSheet;
    var5 = var4.Pressable;
    var _closure1_slot6 = var5;
    var4 = var4.ActivityIndicator;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var8[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var5 = var4.AppStates;
    var _closure1_slot9 = var5;
    var4 = var4.ComponentActions;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var5 = var4.jsx;
    var _closure1_slot11 = var5;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = {};
    var11 = 6;
    var5 = var8[var11];
    var5 = var12.bind(var1)(var5);
    var5 = var5.space;
    var5 = var5.PX_16;
    var4['left'] = var5;
    var5 = var8[var11];
    var5 = var12.bind(var1)(var5);
    var5 = var5.space;
    var5 = var5.PX_16;
    var4['right'] = var5;
    var5 = var8[var11];
    var5 = var12.bind(var1)(var5);
    var5 = var5.space;
    var5 = var5.PX_16;
    var4['top'] = var5;
    var5 = var8[var11];
    var5 = var12.bind(var1)(var5);
    var5 = var5.space;
    var5 = var5.PX_16;
    var4['bottom'] = var5;
    var _closure1_slot13 = var4;
    var5 = var9.memo;
    var4 = 7;
    var4 = var8[var4];
    var4 = var12.bind(var1)(var4);
    var4 = var5.bind(var9)(var4);
    var _closure1_slot14 = var4;
    var4 = {};
    var5 = 'function hasVideoEnded_AdVideoPlayerTsx1(currentTime,videoDuration){return currentTime>=videoDuration-1;}';
    var4['code'] = var5;
    var _closure1_slot15 = var4;
    var4 = function() {
        var1 = function hasVideoEnded(arg1, arg2) {
            var2 = arg2;
            var1 = 1;
            var2 = var2 - var1;
            var1 = arg1;
            var1 = var1 >= var2;
            return var1;
        };
        var2 = {};
        var1['__closure'] = var2;
        var2 = 8992945176371.0;
        var1['__workletHash'] = var2;
        var2 = _closure1_slot15;
        var1['__initData'] = var2;
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot16 = var4;
    var4 = {};
    var5 = 'function canSeekForward_AdVideoPlayerTsx2(currentTime,maxTimestamp,videoDuration,allowUnrestrictedSeeking){const{hasVideoEnded}=this.__closure;return!hasVideoEnded(currentTime,videoDuration)&&(allowUnrestrictedSeeking||currentTime<=maxTimestamp-1);}';
    var4['code'] = var5;
    var _closure1_slot17 = var4;
    var4 = function() {
        var1 = function canSeekForward(arg1, arg2, arg3, arg4) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var4 = arg1;
                var2 = arg4;
                var5 = _closure1_slot16;
                var3 = undefined;
                var1 = arg3;
                var1 = var5.bind(var3)(var4, var1);
                var1 = !var1;
                if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var5 = arg2;
                var3 = 1;
                var3 = var5 - var3;
                var2 = var4 <= var3;
case 4:
                var1 = var2;
case 2:
                return var1;
            }
        };
        var3 = {};
        var4 = _closure1_slot16;
        var3['hasVideoEnded'] = var4;
        var1['__closure'] = var3;
        var3 = 14098132092693.0;
        var1['__workletHash'] = var3;
        var2 = _closure1_slot17;
        var1['__initData'] = var2;
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot18 = var4;
    var4 = 8;
    var4 = var8[var4];
    var6 = var7.bind(var1)(var4);
    var5 = var6.createStyles;
    var4 = {};
    var10 = {};
    var22 = var17.absoluteFillObject;
    var23 = var10;
    var14 = copyDataProperties(var23, var22);
    var4['container'] = var10;
    var10 = {};
    var22 = var17.absoluteFillObject;
    var23 = var10;
    var14 = copyDataProperties(var23, var22);
    var14 = var8[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOWEST;
    var18 = 'backgroundColor';
    var10[17] = var14;
    var15 = 'center';
    var16 = 'justifyContent';
    var10[15] = var15;
    var14 = 'alignItems';
    var10[13] = var15;
    var4['loadingContainer'] = var10;
    var10 = {};
    var19 = 'absolute';
    var10['position'] = var19;
    var4['bufferingSpinner'] = var10;
    var10 = {};
    var22 = var17.absoluteFillObject;
    var23 = var10;
    var19 = copyDataProperties(var23, var22);
    var10[15] = var15;
    var10[13] = var15;
    var4['bufferingSpinnerCentered'] = var10;
    var10 = {'height': '100%', 'width': '100%'};
    var4['video'] = var10;
    var10 = {'position': 'relative', 'height': '100%', 'width': '100%'};
    var4['videoContainer'] = var10;
    var10 = {};
    var22 = var17.absoluteFillObject;
    var23 = var10;
    var17 = copyDataProperties(var23, var22);
    var17 = 9;
    var17 = var8[var17];
    var19 = var12.bind(var1)(var17);
    var17 = var8[var11];
    var17 = var12.bind(var1)(var17);
    var17 = var17.unsafe_rawColors;
    var17 = var17.BLACK;
    var20 = var19.bind(var1)(var17);
    var19 = var20.alpha;
    var17 = 0.5;
    var19 = var19.bind(var20)(var17);
    var17 = var19.hex;
    var17 = var17.bind(var19)();
    var10[17] = var17;
    var10[15] = var15;
    var10[13] = var15;
    var15 = 'column';
    var14 = 'flexDirection';
    var10[13] = var15;
    var4['controls'] = var10;
    var10 = {'flexDirection': 'row', 'justifyContent': 'flex-end', 'padding': null, 'position': 'absolute', 'left': 0, 'right': 0};
    var14 = var8[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_8;
    var10['padding'] = var14;
    var4['controlsTopBottom'] = var10;
    var10 = {'justifyContent': 'center', 'alignItems': 'center', 'flexGrow': 1, 'flexDirection': 'row', 'gap': null, 'pointerEvents': 'box-none'};
    var14 = var8[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_24;
    var10['gap'] = var14;
    var4['controlsMiddle'] = var10;
    var10 = {};
    var10['top'] = var13;
    var4['controlsTop'] = var10;
    var10 = {};
    var10['bottom'] = var13;
    var4['controlsBottom'] = var10;
    var10 = {'position': 'absolute', 'bottom': 0, 'right': 0, 'left': 0, 'justifyContent': 'flex-end', 'height': null, 'overflow': 'hidden'};
    var13 = var8[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_16;
    var10['height'] = var13;
    var4['progressContainer'] = var10;
    var10 = {'height': 1, 'backgroundColor': null, 'shadowOffset': null, 'shadowRadius': 6, 'shadowOpacity': 1, 'elevation': 5};
    var13 = var8[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.WHITE;
    var10['backgroundColor'] = var13;
    var13 = {'width': 0, 'height': 0};
    var10['shadowOffset'] = var13;
    var13 = var8[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.WHITE;
    var10['shadowColor'] = var13;
    var4['progress'] = var10;
    var10 = {};
    var13 = var8[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_DEFAULT;
    var10['color'] = var13;
    var4['icon'] = var10;
    var10 = {};
    var13 = var8[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_SUBTLE;
    var10['color'] = var13;
    var4['iconDisabled'] = var10;
    var10 = {};
    var11 = var8[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.space;
    var11 = var11.PX_8;
    var10['padding'] = var11;
    var4['controlButton'] = var10;
    var4 = var5.bind(var6)(var4);
    var _closure1_slot19 = var4;
    var5 = {};
    var4 = 'paused';
    var5['PAUSED'] = var4;
    var4 = 'playing';
    var5['PLAYING'] = var4;
    var4 = 'ended';
    var5['ENDED'] = var4;
    var4 = 'loading';
    var5['LOADING'] = var4;
    var4 = 'errored';
    var5['ERRORED'] = var4;
    var _closure1_slot20 = var5;
    var4 = {};
    var6 = 'USER_INTERACTION';
    var4['USER_INTERACTION'] = var6;
    var6 = 'SYSTEM_INITIATED';
    var4['SYSTEM_INITIATED'] = var6;
    var6 = 'IMPERATIVE_API';
    var4['IMPERATIVE_API'] = var6;
    var _closure1_slot21 = var4;
    var6 = {};
    var10 = 'function shouldShowControls_AdVideoPlayerTsx3(){const{hasLoaded,hideControls,showControls,playerState,PlayerState,isVideoEnded}=this.__closure;return hasLoaded&&!hideControls&&(showControls.get()||playerState===PlayerState.PAUSED||playerState===PlayerState.ENDED||playerState===PlayerState.ERRORED||isVideoEnded);}';
    var6['code'] = var10;
    var _closure1_slot22 = var6;
    var6 = {};
    var10 = "function AdVideoPlayerTsx4(){const{shouldShowControls,withSpring,SUBTLE_SPRING}=this.__closure;const show=shouldShowControls();return{opacity:withSpring(show?1:0,SUBTLE_SPRING),pointerEvents:show?'auto':'none'};}";
    var6['code'] = var10;
    var _closure1_slot23 = var6;
    var6 = {};
    var10 = 'function AdVideoPlayerTsx5(){const{withTiming,progressSharedValue,timingFast}=this.__closure;return{width:withTiming(progressSharedValue.get()*100+"%",timingFast,\'animate-always\')};}';
    var6['code'] = var10;
    var _closure1_slot24 = var6;
    var6 = var9.memo;
    var2 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var13 = arg1;
            var57 = var13.source;
            var55 = var13.initialProgress;
            var _closure2_slot0 = var55;
            var14 = var13.contentDuration;
            var4 = undefined;
            if(!(var14 === var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var14 = 0;
case 6:
            var54 = var13.allowUnrestrictedSeeking;
            if(!(var54 === var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var54 = false;
case 8:
            var _closure2_slot1 = var54;
            var53 = var13.disableResumeOnLoad;
            if(!(var53 === var4)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var53 = false;
case 10:
            var _closure2_slot2 = var53;
            var6 = var13.style;
            var29 = var13.isFullscreen;
            var3 = var13.externallyPaused;
            var43 = var13.contentInsets;
            var41 = var13.captionsEnabled;
            if(!(var41 === var4)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var41 = false;
case 12:
            var39 = var13.onToggleCaptions;
            var38 = var13.onOpenTranscript;
            var24 = var13.onToggleFullscreen;
            var21 = var13.renderCaptions;
            var7 = var13.onLoadStart;
            var _closure2_slot3 = var7;
            var12 = var13.onLoad;
            var _closure2_slot4 = var12;
            var37 = var13.onReadyForDisplay;
            var _closure2_slot5 = var37;
            var27 = var13.onProgress;
            var _closure2_slot6 = var27;
            var23 = var13.onSeek;
            var _closure2_slot7 = var23;
            var2 = var13.onBuffer;
            var5 = var13.onError;
            var _closure2_slot8 = var5;
            var11 = var13.onEnd;
            var _closure2_slot9 = var11;
            var8 = var13.onPlayerStateChange;
            var _closure2_slot10 = var8;
            var34 = var13.onPausePlayback;
            var _closure2_slot11 = var34;
            var31 = var13.onResumePlayback;
            var _closure2_slot12 = var31;
            var46 = var13.onVideoTracks;
            var45 = var13.onVideoLayout;
            var10 = var13.videoRef;
            var40 = var13.bufferingSpinnerPlacement;
            if(!(var40 === var4)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var40 = 'top-left';
case 14:
            var28 = var13.showCaptionsButton;
            if(!(var28 === var4)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var28 = false;
case 16:
            var26 = var13.showTranscriptButton;
            if(!(var26 === var4)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var26 = false;
case 18:
            var18 = var13.showFullscreenButton;
            if(!(var18 === var4)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var18 = false;
case 20:
            var9 = var13.showProgress;
            if(!(var9 === var4)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var9 = false;
case 22:
            var25 = var13.showSkipButtons;
            if(!(var25 === var4)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var25 = true;
case 24:
            var15 = var13.hideControls;
            if(!(var15 === var4)) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var15 = false;
case 26:
            var _closure2_slot13 = var15;
            var61 = var13.httpEngine;
            var60 = var13.automaticallyWaitsToMinimizeStalling;
            var58 = var13.repeat;
            if(!(var58 === var4)) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var58 = false;
case 28:
            var _closure2_slot14 = var58;
            var62 = var13.ref;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var _closure2_slot17 = var4;
            var _closure2_slot18 = var4;
            var _closure2_slot19 = var4;
            var _closure2_slot20 = var4;
            var _closure2_slot21 = var4;
            var _closure2_slot22 = var4;
            var _closure2_slot23 = var4;
            var _closure2_slot24 = var4;
            var _closure2_slot25 = var4;
            var _closure2_slot26 = var4;
            var _closure2_slot27 = var4;
            var _closure2_slot28 = var4;
            var _closure2_slot29 = var4;
            var _closure2_slot30 = var4;
            var _closure2_slot31 = var4;
            var _closure2_slot32 = var4;
            var _closure2_slot33 = var4;
            var _closure2_slot34 = var4;
            var _closure2_slot35 = var4;
            var _closure2_slot36 = var4;
            var _closure2_slot37 = var4;
            var _closure2_slot38 = var4;
            var _closure2_slot39 = var4;
            var _closure2_slot40 = var4;
            var15 = _closure1_slot19;
            var15 = var15.bind(var4)();
            var17 = _closure1_slot4;
            var16 = var17.useRef;
            var42 = null;
            var59 = var16.bind(var17)(var42);
            if(!(var42 != var10)) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var59 = var10;
case 30:
            _closure2_slot15 = var59;
            var17 = _closure1_slot4;
            var10 = var17.useState;
            var10 = var10.bind(var17)(var14);
            var16 = _closure1_slot3;
            var52 = 2;
            var10 = var16.bind(var4)(var10, var52);
            var32 = 0;
            var30 = var10[var32];
            _closure2_slot16 = var30;
            var51 = 1;
            var10 = var10[var51];
            _closure2_slot17 = var10;
            var14 = var17.useState;
            var10 = {};
            var66 = var10;
            var65 = var55;
            var19 = copyDataProperties(var66, var65);
            var10 = var14.bind(var17)(var10);
            var10 = var16.bind(var4)(var10, var52);
            var19 = var10[var32];
            _closure2_slot18 = var19;
            var10 = var10[var51];
            _closure2_slot19 = var10;
            var14 = var17.useState;
            var10 = _closure1_slot20;
            var10 = var10.LOADING;
            var10 = var14.bind(var17)(var10);
            var10 = var16.bind(var4)(var10, var52);
            var36 = var10[var32];
            _closure2_slot20 = var36;
            var10 = var10[var51];
            _closure2_slot21 = var10;
            var10 = var17.useState;
            var14 = false;
            var10 = var10.bind(var17)(var14);
            var10 = var16.bind(var4)(var10, var52);
            var35 = var10[var32];
            _closure2_slot22 = var35;
            var10 = var10[var51];
            _closure2_slot23 = var10;
            var10 = var17.useRef;
            var10 = var10.bind(var17)(var42);
            _closure2_slot24 = var10;
            var10 = var17.useRef;
            var10 = var10.bind(var17)(var32);
            _closure2_slot25 = var10;
            var16 = var17.useCallback;
            var10 = new Array(1);
            var10[0] = var8;
            var8 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = arg1;
                    var4 = _closure2_slot21;
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var5 = _closure2_slot10;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                    var2 = _closure2_slot10;
                    var2 = var2.bind(var1)(var3);
case 32:
                    return var1;
                }
            };
            var22 = var16.bind(var17)(var8, var10);
            _closure2_slot26 = var22;
            if(!var35) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var8 = _closure1_slot20;
            var8 = var8.ENDED;
            var35 = var36 === var8;
case 34:
            if(!var35) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var16 = _closure1_slot16;
            var10 = var19.timestampSec;
            var8 = var19.duration;
            var35 = var16.bind(var4)(var10, var8);
case 36:
            _closure2_slot27 = var35;
            var48 = _closure1_slot0;
            var56 = _closure1_slot2;
            var17 = 10;
            var8 = var56[var17];
            var10 = var48.bind(var4)(var8);
            var8 = var10.useSharedValue;
            var50 = var8.bind(var10)(var14);
            _closure2_slot28 = var50;
            var8 = function() {
                var1 = function shouldShowControls() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var1 = _closure2_slot22;
                        if(!var1) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                        var2 = _closure2_slot13;
                        var1 = !var2;
case 38:
                        if(!var1) { _fun0004_ip = 40; continue _fun0004 }
case 41:
                        var4 = _closure2_slot28;
                        var2 = var4.get;
                        var2 = var2.bind(var4)();
                        if(var2) { _fun0004_ip = 42; continue _fun0004 }
case 32:
                        var5 = _closure2_slot20;
                        var4 = _closure1_slot20;
                        var4 = var4.PAUSED;
                        var2 = var5 === var4;
case 42:
                        if(var2) { _fun0004_ip = 43; continue _fun0004 }
case 11:
                        var5 = _closure2_slot20;
                        var4 = _closure1_slot20;
                        var4 = var4.ENDED;
                        var2 = var5 === var4;
case 43:
                        if(var2) { _fun0004_ip = 44; continue _fun0004 }
case 45:
                        var5 = _closure2_slot20;
                        var4 = _closure1_slot20;
                        var4 = var4.ERRORED;
                        var2 = var5 === var4;
case 44:
                        if(var2) { _fun0004_ip = 46; continue _fun0004 }
case 47:
                        var2 = _closure2_slot27;
case 46:
                        var1 = var2;
case 40:
                        return var1;
                    }
                };
                var3 = {};
                var2 = _closure2_slot22;
                var3['hasLoaded'] = var2;
                var2 = _closure2_slot13;
                var3['hideControls'] = var2;
                var2 = _closure2_slot28;
                var3['showControls'] = var2;
                var2 = _closure2_slot20;
                var3['playerState'] = var2;
                var5 = _closure1_slot20;
                var3['PlayerState'] = var5;
                var4 = _closure2_slot27;
                var3['isVideoEnded'] = var4;
                var1['__closure'] = var3;
                var3 = 8094403036162.0;
                var1['__workletHash'] = var3;
                var2 = _closure1_slot22;
                var1['__initData'] = var2;
                return var1;
            };
            var8 = var8.bind(var4)();
            _closure2_slot29 = var8;
            var10 = var56[var17];
            var20 = var48.bind(var4)(var10);
            var16 = var20.useAnimatedStyle;
            var10 = function Se() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot29;
                    var8 = undefined;
                    var3 = var1.bind(var8)();
                    var1 = {};
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 11;
                    var4 = var6[var4];
                    var6 = var5.bind(var8)(var4);
                    var5 = var6.withSpring;
                    var4 = 0;
                    if(!var3) { _fun0005_ip = 48; continue _fun0005 }
case 49:
                    var4 = 1;
case 48:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 12;
                    var2 = var9[var2];
                    var2 = var7.bind(var8)(var2);
                    var2 = var2.SUBTLE_SPRING;
                    var2 = var5.bind(var6)(var4, var2);
                    var1['opacity'] = var2;
                    var2 = 'none';
                    if(!var3) { _fun0005_ip = 50; continue _fun0005 }
case 51:
                    var2 = 'auto';
case 50:
                    var1['pointerEvents'] = var2;
                    return var1;
                }
            };
            var33 = {};
            var33['shouldShowControls'] = var8;
            var44 = 11;
            var44 = var56[var44];
            var44 = var48.bind(var4)(var44);
            var44 = var44.withSpring;
            var33['withSpring'] = var44;
            var44 = 12;
            var44 = var56[var44];
            var44 = var48.bind(var4)(var44);
            var44 = var44.SUBTLE_SPRING;
            var33['SUBTLE_SPRING'] = var44;
            var10['__closure'] = var33;
            var33 = 311315682972.0;
            var10['__workletHash'] = var33;
            var33 = _closure1_slot23;
            var10['__initData'] = var33;
            var20 = var16.bind(var20)(var10);
            var8 = var8.bind(var4)();
            var10 = var56[var17];
            var16 = var48.bind(var4)(var10);
            var10 = var16.useSharedValue;
            var49 = var10.bind(var16)(var32);
            _closure2_slot30 = var49;
            var10 = var56[var17];
            var33 = var48.bind(var4)(var10);
            var16 = var33.useAnimatedStyle;
            var10 = function he() {
                var1 = {};
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 13;
                var2 = var8[var2];
                var4 = undefined;
                var6 = var7.bind(var4)(var2);
                var5 = var6.withTiming;
                var3 = _closure2_slot30;
                var2 = var3.get;
                var3 = var2.bind(var3)();
                var2 = 100;
                var3 = var2 * var3;
                var2 = 14;
                var2 = var8[var2];
                var2 = var7.bind(var4)(var2);
                var4 = var2.timingFast;
                var2 = '%';
                var3 = var3 + var2;
                var2 = 'animate-always';
                var2 = var5.bind(var6)(var3, var4, var2);
                var1['width'] = var2;
                return var1;
            };
            var44 = {};
            var47 = 13;
            var47 = var56[var47];
            var47 = var48.bind(var4)(var47);
            var47 = var47.withTiming;
            var44['withTiming'] = var47;
            var44['progressSharedValue'] = var49;
            var47 = 14;
            var47 = var56[var47];
            var47 = var48.bind(var4)(var47);
            var47 = var47.timingFast;
            var44['timingFast'] = var47;
            var10['__closure'] = var44;
            var44 = 11793601648786.0;
            var10['__workletHash'] = var44;
            var44 = _closure1_slot24;
            var10['__initData'] = var44;
            var16 = var16.bind(var33)(var10);
            var44 = _closure1_slot4;
            var33 = var44.useRef;
            var10 = -1;
            var10 = var33.bind(var44)(var10);
            _closure2_slot31 = var10;
            var47 = var44.useCallback;
            var33 = new Array(1);
            var33[0] = var50;
            var10 = function(arg1) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var1 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var11 = 0;
                        var4 = copyRestArgs(var11);
                        var1 = global;
                        var7 = var1.clearTimeout;
                        var3 = _closure2_slot31;
                        var6 = var3.current;
                        var3 = undefined;
                        var6 = var7.bind(var3)(var6);
                        var8 = _closure2_slot28;
                        var7 = var8.set;
                        var6 = true;
                        var6 = var7.bind(var8)(var6);
                        var2 = _closure2_slot31;
                        var7 = var1.setTimeout;
                        var6 = function() {
                            var3 = _closure2_slot28;
                            var2 = var3.set;
                            var1 = false;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        var1 = 2000;
                        var1 = var7.bind(var3)(var6, var1);
                        var2['current'] = var1;
                        var6 = _closure3_slot0;
                        var2 = null;
                        if(!(var2 == var6)) { _fun0006_ip = 12; continue _fun0006 }
case 13:
                        return var3;
case 12:
                        var2 = _closure3_slot0;
                        var1 = new Array(0);
                        var11 = var1;
                        var10 = var4;
                        var9 = 0;
                        var4 = arraySpread(var11, var10, var9);
                        var11 = var2;
                        var10 = var1;
                        var9 = undefined;
                        var1 = apply(var11, var10, var9);
                        return var1;
                    }
                };
                return var1;
            };
            var33 = var47.bind(var44)(var10, var33);
            var48 = var44.useCallback;
            var47 = function(arg1, arg2) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var1 = arg2;
                var _closure3_slot1 = var1;
                var3 = _closure2_slot19;
                var1 = undefined;
                var2 = function(arg1) {
                    var1 = global;
                    var6 = var1.Math;
                    var5 = var6.max;
                    var2 = arg1;
                    var3 = var2.maxTimestampSec;
                    var7 = var1.Math;
                    var1 = var7.floor;
                    var4 = _closure3_slot0;
                    var1 = var1.bind(var7)(var4);
                    var3 = var5.bind(var6)(var3, var1);
                    var1 = {};
                    var1['timestampSec'] = var4;
                    var1['maxTimestampSec'] = var3;
                    var2 = _closure3_slot1;
                    var1['duration'] = var2;
                    return var1;
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var10 = new Array(0);
            var48 = var48.bind(var44)(var47, var10);
            _closure2_slot32 = var48;
            var10 = var44.useState;
            var47 = var10.bind(var44)(var14);
            var10 = _closure1_slot3;
            var47 = var10.bind(var4)(var47, var52);
            var10 = var47[var32];
            var47 = var47[var51];
            _closure2_slot33 = var47;
            var51 = var44.useCallback;
            var47 = new Array(1);
            var47[0] = var37;
            var37 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot5;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0007_ip = 52; continue _fun0007 }
case 53:
                    var3 = _closure2_slot5;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
case 52:
                    var3 = _closure2_slot33;
                    var1 = undefined;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var47 = var51.bind(var44)(var37, var47);
            var52 = var44.useCallback;
            var51 = new Array(4);
            var51[0] = var54;
            var37 = var19.duration;
            var51[1] = var37;
            var37 = var19.maxTimestampSec;
            var51[2] = var37;
            var51[3] = var59;
            var37 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot15;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0008_ip = 54; continue _fun0008 }
case 55:
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot18;
                    if(var3) { _fun0008_ip = 56; continue _fun0008 }
case 7:
                    var7 = var2.maxTimestampSec;
                    _fun0008_ip = 57; continue _fun0008;
case 56:
                    var7 = var2.duration;
case 57:
                    var2 = global;
                    var5 = var2.Math;
                    var4 = var5.max;
                    var6 = var2.Math;
                    var3 = var6.min;
                    var2 = arg1;
                    var3 = var3.bind(var6)(var2, var7);
                    var2 = 0;
                    var2 = var4.bind(var5)(var2, var3);
                    var4 = _closure2_slot25;
                    var5 = var4.current;
                    var3 = 1;
                    var5 = var5 + var3;
                    var3 = 100;
                    var3 = var5 % var3;
                    var4['current'] = var3;
                    var3 = _closure2_slot15;
                    var5 = var3.current;
                    var4 = var5.seek;
                    var3 = _closure2_slot25;
                    var6 = var3.current;
                    var3 = 0.0001;
                    var3 = var3 * var6;
                    var3 = var2 + var3;
                    var3 = var4.bind(var5)(var3);
                    var1 = _closure2_slot24;
                    var1['current'] = var2;
case 54:
                    var1 = undefined;
                    return var1;
                }
            };
            var51 = var52.bind(var44)(var37, var51);
            _closure2_slot34 = var51;
            var56 = var44.useImperativeHandle;
            var52 = new Array(5);
            var52[0] = var51;
            var52[1] = var36;
            var52[2] = var22;
            var52[3] = var31;
            var52[4] = var34;
            var37 = function() {
                var1 = {};
                var3 = function seekToStart() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var4 = _closure2_slot20;
                        var3 = _closure1_slot20;
                        var3 = var3.ERRORED;
                        if(!(var4 !== var3)) { _fun0009_ip = 58; continue _fun0009 }
case 59:
                        var5 = _closure2_slot34;
                        var3 = undefined;
                        var4 = 0;
                        var4 = var5.bind(var3)(var4);
                        var5 = _closure2_slot20;
                        var4 = _closure1_slot20;
                        var4 = var4.ENDED;
                        if(!(var5 === var4)) { _fun0009_ip = 58; continue _fun0009 }
case 60:
                        var5 = _closure2_slot26;
                        var4 = _closure1_slot20;
                        var4 = var4.PLAYING;
                        var4 = var5.bind(var3)(var4);
                        var5 = _closure2_slot12;
                        var4 = null;
                        if(!(var4 != var5)) { _fun0009_ip = 58; continue _fun0009 }
case 45:
                        var2 = _closure2_slot12;
                        var1 = _closure1_slot21;
                        var1 = var1.IMPERATIVE_API;
                        var1 = var2.bind(var3)(var1);
case 58:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['seekToStart'] = var3;
                var3 = function play() {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var4 = _closure2_slot20;
                        var3 = _closure1_slot20;
                        var3 = var3.PAUSED;
                        if(!(var4 === var3)) { _fun0010_ip = 61; continue _fun0010 }
case 59:
                        var5 = _closure2_slot26;
                        var3 = _closure1_slot20;
                        var4 = var3.PLAYING;
                        var3 = undefined;
                        var4 = var5.bind(var3)(var4);
                        var5 = _closure2_slot12;
                        var4 = null;
                        if(!(var4 != var5)) { _fun0010_ip = 61; continue _fun0010 }
case 60:
                        var2 = _closure2_slot12;
                        var1 = _closure1_slot21;
                        var1 = var1.IMPERATIVE_API;
                        var1 = var2.bind(var3)(var1);
case 61:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['play'] = var3;
                var2 = function pause() {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var4 = _closure2_slot20;
                        var3 = _closure1_slot20;
                        var3 = var3.PLAYING;
                        if(!(var4 === var3)) { _fun0011_ip = 61; continue _fun0011 }
case 59:
                        var5 = _closure2_slot26;
                        var3 = _closure1_slot20;
                        var4 = var3.PAUSED;
                        var3 = undefined;
                        var4 = var5.bind(var3)(var4);
                        var5 = _closure2_slot11;
                        var4 = null;
                        if(!(var4 != var5)) { _fun0011_ip = 61; continue _fun0011 }
case 60:
                        var2 = _closure2_slot11;
                        var1 = _closure1_slot21;
                        var1 = var1.IMPERATIVE_API;
                        var1 = var2.bind(var3)(var1);
case 61:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['pause'] = var2;
                return var1;
            };
            var37 = var56.bind(var44)(var62, var37, var52);
            var52 = var44.useCallback;
            var37 = new Array(6);
            var37[0] = var59;
            var55 = var55.timestampSec;
            var37[1] = var55;
            var37[2] = var53;
            var37[3] = var22;
            var37[4] = var12;
            var37[5] = var51;
            var12 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = arg1;
                    var8 = var3.duration;
                    var4 = _closure2_slot17;
                    var1 = undefined;
                    var4 = var4.bind(var1)(var8);
                    var5 = _closure2_slot23;
                    var4 = true;
                    var4 = var5.bind(var1)(var4);
                    var4 = _closure2_slot15;
                    var4 = var4.current;
                    var5 = null;
                    if(!(var5 != var4)) { _fun0012_ip = 62; continue _fun0012 }
case 49:
                    var4 = _closure2_slot0;
                    var7 = var4.timestampSec;
                    var4 = _closure2_slot2;
                    var4 = !var4;
                    if(!var4) { _fun0012_ip = 63; continue _fun0012 }
case 64:
                    var6 = 5;
                    var4 = var7 > var6;
case 63:
                    if(!var4) { _fun0012_ip = 65; continue _fun0012 }
case 66:
                    var6 = 3;
                    var6 = var8 - var6;
                    var4 = var7 < var6;
case 65:
                    if(!var4) { _fun0012_ip = 47; continue _fun0012 }
case 67:
                    var6 = _closure2_slot34;
                    var4 = 1;
                    var4 = var7 - var4;
                    var4 = var6.bind(var1)(var4);
case 47:
                    var6 = _closure2_slot26;
                    var4 = _closure1_slot20;
                    var4 = var4.PLAYING;
                    var4 = var6.bind(var1)(var4);
                    var4 = _closure2_slot4;
                    if(!(var5 != var4)) { _fun0012_ip = 62; continue _fun0012 }
case 68:
                    var2 = _closure2_slot4;
                    var2 = var2.bind(var1)(var3);
case 62:
                    return var1;
                }
            };
            var53 = var52.bind(var44)(var12, var37);
            var52 = var44.useCallback;
            var37 = new Array(6);
            var37[0] = var36;
            var37[1] = var34;
            var37[2] = var31;
            var37[3] = var35;
            var37[4] = var22;
            var37[5] = var51;
            var12 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var2 = arguments[0];
                    var1 = undefined;
                    if(!(var2 === var1)) { _fun0013_ip = 69; continue _fun0013 }
case 70:
                    var2 = {};
case 69:
                    var4 = var2.shouldRestartVideo;
                    if(!(var4 === var1)) { _fun0013_ip = 52; continue _fun0013 }
case 55:
                    var4 = true;
case 52:
                    var6 = _closure2_slot20;
                    var5 = _closure1_slot20;
                    var5 = var5.ERRORED;
                    if(!(var6 !== var5)) { _fun0013_ip = 71; continue _fun0013 }
case 2:
                    var5 = _closure2_slot27;
                    if(!var5) { _fun0013_ip = 72; continue _fun0013 }
case 42:
                    if(var4) { _fun0013_ip = 71; continue _fun0013 }
case 72:
                    var5 = _closure2_slot20;
                    var4 = _closure1_slot20;
                    var4 = var4.PAUSED;
                    if(!(var5 !== var4)) { _fun0013_ip = 54; continue _fun0013 }
case 43:
                    var5 = _closure2_slot20;
                    var4 = _closure1_slot20;
                    var4 = var4.LOADING;
                    if(!(var5 !== var4)) { _fun0013_ip = 54; continue _fun0013 }
case 13:
                    var5 = _closure2_slot20;
                    var4 = _closure1_slot20;
                    var4 = var4.PLAYING;
                    if(!(var5 === var4)) { _fun0013_ip = 73; continue _fun0013 }
case 74:
                    var5 = _closure2_slot26;
                    var4 = _closure1_slot20;
                    var4 = var4.PAUSED;
                    var4 = var5.bind(var1)(var4);
                    var5 = _closure2_slot11;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0013_ip = 73; continue _fun0013 }
case 75:
                    var5 = _closure2_slot11;
                    var4 = _closure1_slot21;
                    var4 = var4.USER_INTERACTION;
                    var4 = var5.bind(var1)(var4);
                    _fun0013_ip = 73; continue _fun0013;
case 54:
                    var5 = _closure2_slot26;
                    var4 = _closure1_slot20;
                    var4 = var4.PLAYING;
                    var4 = var5.bind(var1)(var4);
                    var5 = _closure2_slot12;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0013_ip = 73; continue _fun0013 }
case 76:
                    var5 = _closure2_slot12;
                    var4 = _closure1_slot21;
                    var4 = var4.USER_INTERACTION;
                    var4 = var5.bind(var1)(var4);
                    _fun0013_ip = 73; continue _fun0013;
case 71:
                    var5 = _closure2_slot34;
                    var4 = 0;
                    var4 = var5.bind(var1)(var4);
                    var5 = _closure2_slot26;
                    var4 = _closure1_slot20;
                    var4 = var4.PLAYING;
                    var4 = var5.bind(var1)(var4);
                    var5 = _closure2_slot12;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0013_ip = 73; continue _fun0013 }
case 77:
                    var3 = _closure2_slot12;
                    var2 = _closure1_slot21;
                    var2 = var2.USER_INTERACTION;
                    var2 = var3.bind(var1)(var2);
case 73:
                    return var1;
                }
            };
            var12 = var52.bind(var44)(var12, var37);
            _closure2_slot35 = var12;
            var55 = var44.useCallback;
            var52 = new Array(1);
            var52[0] = var12;
            var37 = function() {
                var2 = _closure2_slot35;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            var37 = var55.bind(var44)(var37, var52);
            var52 = var44.useRef;
            var52 = var52.bind(var44)(var14);
            _closure2_slot36 = var52;
            var55 = var44.useCallback;
            var52 = new Array(3);
            var52[0] = var36;
            var52[1] = var22;
            var52[2] = var34;
            var34 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var3 = _closure2_slot36;
                    var1 = false;
                    var3['current'] = var1;
                    var4 = _closure2_slot20;
                    var3 = _closure1_slot20;
                    var3 = var3.PLAYING;
                    if(!(var4 === var3)) { _fun0014_ip = 50; continue _fun0014 }
case 32:
                    var4 = _closure2_slot36;
                    var3 = true;
                    var4['current'] = var3;
                    var5 = _closure2_slot26;
                    var3 = _closure1_slot20;
                    var4 = var3.PAUSED;
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var5 = _closure2_slot11;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0014_ip = 50; continue _fun0014 }
case 78:
                    var2 = _closure2_slot11;
                    var1 = _closure1_slot21;
                    var1 = var1.SYSTEM_INITIATED;
                    var1 = var2.bind(var3)(var1);
case 50:
                    var1 = undefined;
                    return var1;
                }
            };
            var55 = var55.bind(var44)(var34, var52);
            _closure2_slot37 = var55;
            var52 = var44.useCallback;
            var34 = new Array(3);
            var34[0] = var36;
            var34[1] = var22;
            var34[2] = var31;
            var31 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var1 = _closure2_slot36;
                    var1 = var1.current;
                    if(!var1) { _fun0015_ip = 50; continue _fun0015 }
case 79:
                    var3 = _closure2_slot36;
                    var1 = false;
                    var3['current'] = var1;
                    var4 = _closure2_slot20;
                    var3 = _closure1_slot20;
                    var3 = var3.ERRORED;
                    if(!(var4 !== var3)) { _fun0015_ip = 50; continue _fun0015 }
case 49:
                    var5 = _closure2_slot26;
                    var3 = _closure1_slot20;
                    var4 = var3.PLAYING;
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var5 = _closure2_slot12;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0015_ip = 50; continue _fun0015 }
case 78:
                    var2 = _closure2_slot12;
                    var1 = _closure1_slot21;
                    var1 = var1.SYSTEM_INITIATED;
                    var1 = var2.bind(var3)(var1);
case 50:
                    var1 = undefined;
                    return var1;
                }
            };
            var31 = var52.bind(var44)(var31, var34);
            _closure2_slot38 = var31;
            var52 = var44.useEffect;
            var34 = new Array(2);
            var34[0] = var55;
            var34[1] = var31;
            var31 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 15;
                var2 = var6[var3];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var10 = var2.ComponentDispatch;
                var9 = var10.subscribe;
                var2 = _closure1_slot10;
                var8 = var2.QUEST_GAME_LINK_OPENED;
                var7 = _closure2_slot37;
                var7 = var9.bind(var10)(var8, var7);
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var4 = var3.ComponentDispatch;
                var3 = var4.subscribe;
                var2 = var2.QUEST_APP_STORE_OVERLAY_FINISHED;
                var1 = _closure2_slot38;
                var1 = var3.bind(var4)(var2, var1);
                var1 = function() {
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 15;
                    var3 = var6[var4];
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var10 = var3.ComponentDispatch;
                    var9 = var10.unsubscribe;
                    var3 = _closure1_slot10;
                    var8 = var3.QUEST_GAME_LINK_OPENED;
                    var7 = _closure2_slot37;
                    var7 = var9.bind(var10)(var8, var7);
                    var4 = var6[var4];
                    var4 = var5.bind(var1)(var4);
                    var5 = var4.ComponentDispatch;
                    var4 = var5.unsubscribe;
                    var3 = var3.QUEST_APP_STORE_OVERLAY_FINISHED;
                    var2 = _closure2_slot38;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                return var1;
            };
            var31 = var52.bind(var44)(var31, var34);
            var34 = var44.useCallback;
            var31 = new Array(2);
            var31[0] = var50;
            var31[1] = var12;
            var12 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var3 = _closure2_slot28;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0016_ip = 80; continue _fun0016 }
case 81:
                    var4 = _closure2_slot28;
                    var3 = var4.set;
                    var2 = false;
                    var2 = var3.bind(var4)(var2);
case 80:
                    var3 = _closure2_slot35;
                    var2 = {};
                    var1 = false;
                    var2['shouldRestartVideo'] = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var12 = var34.bind(var44)(var12, var31);
            var34 = var44.useCallback;
            var31 = new Array(5);
            var31[0] = var30;
            var31[1] = var49;
            var31[2] = var23;
            var31[3] = var48;
            var31[4] = var59;
            var23 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var3 = arg1;
                    var2 = _closure2_slot15;
                    var2 = var2.current;
                    var4 = null;
                    if(!(var4 != var2)) { _fun0017_ip = 82; continue _fun0017 }
case 55:
                    var2 = _closure2_slot24;
                    var2['current'] = var4;
                    var5 = _closure2_slot16;
                    var2 = 0;
                    if(!(var5 > var2)) { _fun0017_ip = 83; continue _fun0017 }
case 84:
                    var6 = _closure2_slot30;
                    var5 = var6.set;
                    var7 = var3.currentTime;
                    var2 = _closure2_slot16;
                    var2 = var7 / var2;
                    var2 = var5.bind(var6)(var2);
                    var7 = _closure2_slot32;
                    var6 = var3.currentTime;
                    var5 = _closure2_slot16;
                    var2 = undefined;
                    var2 = var7.bind(var2)(var6, var5);
case 83:
                    var2 = _closure2_slot7;
                    if(!(var4 != var2)) { _fun0017_ip = 82; continue _fun0017 }
case 13:
                    var2 = _closure2_slot7;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
case 82:
                    var1 = undefined;
                    return var1;
                }
            };
            var52 = var34.bind(var44)(var23, var31);
            var23 = _closure1_slot20;
            var23 = var23.ERRORED;
            var34 = var36 === var23;
            if(var34) { _fun0002_ip = 85; continue _fun0002 }
case 86:
            var50 = _closure1_slot18;
            var66 = var19.timestampSec;
            var65 = var19.maxTimestampSec;
            var64 = var19.duration;
            var67 = undefined;
            var63 = var54;
            var23 = var67[var50](var66, var65, var64, var63, var62);
            var34 = !var23;
case 85:
            _closure2_slot39 = var34;
            var23 = _closure1_slot4;
            var50 = var23.useCallback;
            var44 = new Array(4);
            var44[0] = var51;
            var44[1] = var30;
            var44[2] = var49;
            var44[3] = var34;
            var31 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var2 = _closure2_slot39;
                    if(var2) { _fun0018_ip = 87; continue _fun0018 }
case 39:
                    var2 = _closure2_slot24;
                    var2 = var2.current;
                    var3 = null;
                    if(!(var3 == var2)) { _fun0018_ip = 8; continue _fun0018 }
case 88:
                    var4 = _closure2_slot30;
                    var3 = var4.get;
                    var4 = var3.bind(var4)();
                    var3 = _closure2_slot16;
                    var2 = var4 * var3;
case 8:
                    var3 = _closure2_slot34;
                    var1 = 10;
                    var2 = var2 + var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 87:
                    var1 = undefined;
                    return var1;
                }
            };
            var31 = var50.bind(var23)(var31, var44);
            var50 = var23.useCallback;
            var44 = new Array(5);
            var44[0] = var51;
            var44[1] = var30;
            var44[2] = var49;
            var44[3] = var36;
            var44[4] = var22;
            var30 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var1 = _closure2_slot24;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0019_ip = 89; continue _fun0019 }
case 90:
                    var4 = _closure2_slot30;
                    var1 = var4.get;
                    var4 = var1.bind(var4)();
                    var1 = _closure2_slot16;
                    var2 = var4 * var1;
case 89:
                    var4 = _closure2_slot34;
                    var1 = 10;
                    var2 = var2 - var1;
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var5 = _closure2_slot20;
                    var4 = _closure1_slot20;
                    var4 = var4.ENDED;
                    if(!(var5 === var4)) { _fun0019_ip = 91; continue _fun0019 }
case 66:
                    var3 = _closure2_slot26;
                    var2 = _closure1_slot20;
                    var2 = var2.PLAYING;
                    var2 = var3.bind(var1)(var2);
case 91:
                    return var1;
                }
            };
            var30 = var50.bind(var23)(var30, var44);
            var30 = var33.bind(var4)(var30);
            var31 = var33.bind(var4)(var31);
            var44 = var23.useCallback;
            var33 = new Array(3);
            var33[0] = var49;
            var33[1] = var48;
            var33[2] = var27;
            var27 = function(arg1) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var5 = arg1;
                    var1 = var5.seekableDuration;
                    var4 = 0;
                    if(!(var4 !== var1)) { _fun0020_ip = 92; continue _fun0020 }
case 79:
                    var2 = var5.currentTime;
                    var1 = var5.seekableDuration;
                    var4 = var2 / var1;
case 92:
                    var7 = _closure2_slot32;
                    var6 = var5.currentTime;
                    var3 = var5.seekableDuration;
                    var1 = undefined;
                    var3 = var7.bind(var1)(var6, var3);
                    var6 = _closure2_slot30;
                    var3 = var6.set;
                    var3 = var3.bind(var6)(var4);
                    var6 = _closure2_slot6;
                    var3 = null;
                    if(!(var3 != var6)) { _fun0020_ip = 74; continue _fun0020 }
case 93:
                    var3 = _closure2_slot6;
                    var2 = {};
                    var6 = var5.currentTime;
                    var2['currentTime'] = var6;
                    var5 = var5.seekableDuration;
                    var2['seekableDuration'] = var5;
                    var2['progress'] = var4;
                    var2 = var3.bind(var1)(var2);
case 74:
                    return var1;
                }
            };
            var51 = var44.bind(var23)(var27, var33);
            var33 = var23.useCallback;
            var27 = new Array(3);
            var27[0] = var22;
            var27[1] = var11;
            var27[2] = var58;
            var11 = function() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var2 = _closure2_slot14;
                    if(var2) { _fun0021_ip = 6; continue _fun0021 }
case 39:
                    var4 = _closure2_slot26;
                    var2 = _closure1_slot20;
                    var3 = var2.ENDED;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
case 6:
                    var3 = _closure2_slot9;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0021_ip = 94; continue _fun0021 }
case 9:
                    var2 = _closure2_slot9;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 94:
                    var1 = undefined;
                    return var1;
                }
            };
            var49 = var33.bind(var23)(var11, var27);
            var27 = var23.useCallback;
            var11 = new Array(2);
            var11[0] = var22;
            var11[1] = var7;
            var7 = function() {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var4 = _closure2_slot26;
                    var1 = _closure1_slot20;
                    var3 = var1.LOADING;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure2_slot3;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0022_ip = 57; continue _fun0022 }
case 95:
                    var2 = _closure2_slot3;
                    var2 = var2.bind(var1)();
case 57:
                    return var1;
                }
            };
            var50 = var27.bind(var23)(var7, var11);
            var11 = var23.useCallback;
            var7 = new Array(2);
            var7[0] = var22;
            var7[1] = var5;
            var5 = function(arg1) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var4 = _closure2_slot26;
                    var1 = _closure1_slot20;
                    var3 = var1.ERRORED;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure2_slot8;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0023_ip = 96; continue _fun0023 }
case 95:
                    var3 = _closure2_slot8;
                    var2 = arg1;
                    var2 = var3.bind(var1)(var2);
case 96:
                    return var1;
                }
            };
            var48 = var11.bind(var23)(var5, var7);
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 16;
            var5 = var11[var5];
            var22 = var7.bind(var4)(var5);
            var11 = var22.useStateFromStores;
            var5 = _closure1_slot8;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var11.bind(var22)(var7, var5);
            var5 = _closure1_slot9;
            var5 = var5.ACTIVE;
            var5 = var7 === var5;
            var22 = var23.useLayoutEffect;
            var11 = new Array(1);
            var11[0] = var59;
            var7 = function() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 17;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.isAndroid;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0024_ip = 97; continue _fun0024 }
case 56:
                    return var2;
case 97:
                    var2 = _closure2_slot15;
                    var2 = var2.current;
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0: // try_start_0
                            var3 = _closure3_slot0;
                            var5 = null;
                            var3 = var5 == var3;
                            var2 = var3;
                            if(var3) { _fun0025_ip = 5; continue _fun0025 }
case 81:
                            var3 = _closure3_slot0;
                            var3 = var3.setNativeProps;
                            var2 = var5 == var3;
case 5:
                            if(var2) { _fun0025_ip = 98; continue _fun0025 }
case 32:
                            var3 = _closure3_slot0;
                            var2 = var3.setNativeProps;
                            var1 = {'paused': true, 'repeat': false};
                            var4 = {};
                            var4['uri'] = var5;
                            var1['src'] = var4;
                            var1 = var2.bind(var3)(var1);
case 98: // try_end0
                            _fun0025_ip = 99; continue _fun0025;
case 66: // catch_target0
                            CatchBlockStart(arg_register=2);
                            var4 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 18;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var4.bind(var1)(var2);
                            var1 = var2.captureException;
                            var1 = var1.bind(var2)(var3);
case 99:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    return var1;
                }
            };
            var7 = var22.bind(var23)(var7, var11);
            var33 = !var5;
            if(!var5) { _fun0002_ip = 100; continue _fun0002 }
case 101:
            var5 = _closure1_slot20;
            var5 = var5.PAUSED;
            var33 = var36 === var5;
case 100:
            if(var33) { _fun0002_ip = 102; continue _fun0002 }
case 103:
            var5 = _closure1_slot20;
            var5 = var5.LOADING;
            var33 = var36 === var5;
case 102:
            if(var33) { _fun0002_ip = 104; continue _fun0002 }
case 105:
            var33 = var3;
case 104:
            var3 = {};
            var3['onBuffer'] = var2;
            var2 = function useBufferingState(arg1) {
                var2 = arg1;
                var6 = var2.onBuffer;
                var _closure3_slot0 = var6;
                var5 = _closure1_slot4;
                var3 = var5.useRef;
                var4 = false;
                var3 = var3.bind(var5)(var4);
                var _closure3_slot1 = var3;
                var3 = var5.useState;
                var7 = var3.bind(var5)(var4);
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = 2;
                var4 = var4.bind(var3)(var7, var2);
                var2 = 0;
                var3 = var4[var2];
                var2 = 1;
                var2 = var4[var2];
                var _closure3_slot2 = var2;
                var4 = var5.useCallback;
                var2 = new Array(1);
                var2[0] = var6;
                var1 = function(arg1) {
                    _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                        var3 = arg1;
                        var4 = _closure3_slot2;
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var4 = _closure3_slot1;
                        var4 = var4.current;
                        if(!(var3 !== var4)) { _fun0026_ip = 106; continue _fun0026 }
case 3:
                        var4 = _closure3_slot1;
                        var4['current'] = var3;
                        var5 = _closure3_slot0;
                        var4 = null;
                        if(!(var4 != var5)) { _fun0026_ip = 106; continue _fun0026 }
case 2:
                        var2 = _closure3_slot0;
                        var2 = var2.bind(var1)(var3);
case 106:
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var1, var2);
                var1 = {};
                var1['isBuffering'] = var3;
                var1['toggleBuffering'] = var2;
                return var1;
            };
            var2 = var2.bind(var4)(var3);
            var11 = var2.isBuffering;
            var7 = var2.toggleBuffering;
            _closure2_slot40 = var7;
            var5 = _closure1_slot4;
            var22 = var5.useCallback;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var36;
            var2 = function(arg1) {
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.isBuffering;
                    if(!var1) { _fun0027_ip = 107; continue _fun0027 }
case 108:
                    var5 = _closure2_slot20;
                    var4 = _closure1_slot20;
                    var4 = var4.LOADING;
                    if(!(var5 !== var4)) { _fun0027_ip = 109; continue _fun0027 }
case 32:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 17;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.isIOS;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0027_ip = 107; continue _fun0027 }
case 109:
                    var4 = _closure2_slot40;
                    var3 = undefined;
                    var2 = true;
                    var2 = var4.bind(var3)(var2);
                    _fun0027_ip = 44; continue _fun0027;
case 107:
                    if(var1) { _fun0027_ip = 44; continue _fun0027 }
case 65:
                    var3 = _closure2_slot40;
                    var2 = undefined;
                    var1 = false;
                    var1 = var3.bind(var2)(var1);
case 44:
                    var1 = undefined;
                    return var1;
                }
            };
            var56 = var22.bind(var5)(var2, var3);
            var22 = var5.useCallback;
            var3 = new Array(1);
            var3[0] = var7;
            var2 = function() {
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isIOS;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0028_ip = 110; continue _fun0028 }
case 111:
                    var3 = _closure2_slot40;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
case 110:
                    return var1;
                }
            };
            var55 = var22.bind(var5)(var2, var3);
            var3 = var5.useCallback;
            var2 = new Array(1);
            var2[0] = var7;
            var1 = function() {
                _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isIOS;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0029_ip = 110; continue _fun0029 }
case 111:
                    var3 = _closure2_slot40;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
case 110:
                    return var1;
                }
            };
            var54 = var3.bind(var5)(var1, var2);
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 19;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var5 = var1.bind(var4)();
            var23 = var29;
            if(!var23) { _fun0002_ip = 112; continue _fun0002 }
case 113:
            var23 = var42 != var5;
case 112:
            if(!var23) { _fun0002_ip = 114; continue _fun0002 }
case 115:
            var1 = {};
            var3 = _closure1_slot25;
            var2 = 'right';
            var2 = var3.bind(var4)(var5, var2);
            var1['paddingRight'] = var2;
            var2 = 'left';
            var2 = var3.bind(var4)(var5, var2);
            var1['paddingLeft'] = var2;
            var23 = var1;
case 114:
            var3 = _closure1_slot11;
            var2 = _closure1_slot5;
            var1 = {};
            var7 = var15.container;
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['style'] = var5;
            var1['accessible'] = var14;
            var7 = _closure1_slot12;
            var6 = _closure1_slot6;
            var5 = {};
            var27 = var15.videoContainer;
            var22 = new Array(1);
            var22[0] = var27;
            var5['style'] = var22;
            var5['onPress'] = var12;
            var8 = !var8;
            var5['accessible'] = var8;
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var27 = 20;
            var8 = var8[var27];
            var8 = var12.bind(var4)(var8);
            var22 = var8.intl;
            var12 = var22.string;
            var44 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var27];
            var8 = var44.bind(var4)(var8);
            var44 = var8.t;
            if(var33) { _fun0002_ip = 116; continue _fun0002 }
case 117:
            var8 = var44.fTMEUi;
            _fun0002_ip = 118; continue _fun0002;
case 116:
            var8 = var44.R3aFPe;
case 118:
            var8 = var12.bind(var22)(var8);
            var5['accessibilityLabel'] = var8;
            var8 = _closure1_slot20;
            var8 = var8.ERRORED;
            var12 = var36 !== var8;
            if(!var12) { _fun0002_ip = 119; continue _fun0002 }
case 120:
            var44 = _closure1_slot11;
            var22 = _closure1_slot14;
            var8 = {'mixWithOthers': 'inherit', 'httpEngine': null, 'automaticallyWaitsToMinimizeStalling': null, 'ref': null, 'accessible': false, 'importantForAccessibility': 'no-hide-descendants', 'accessibilityRole': 'none'};
            var8['httpEngine'] = var61;
            var8['automaticallyWaitsToMinimizeStalling'] = var60;
            var8['ref'] = var59;
            var59 = var15.video;
            var8['style'] = var59;
            var8['paused'] = var33;
            var8['repeat'] = var58;
            var8['source'] = var57;
            var8['onBuffer'] = var56;
            var8['onPlaybackStalled'] = var55;
            var8['onPlaybackResume'] = var54;
            var8['onLoad'] = var53;
            var8['onSeek'] = var52;
            var8['onProgress'] = var51;
            var8['onLoadStart'] = var50;
            var8['onEnd'] = var49;
            var8['onError'] = var48;
            var8['onReadyForDisplay'] = var47;
            var8['onVideoTracks'] = var46;
            var8['onLayout'] = var45;
            var45 = 'contain';
            var8['resizeMode'] = var45;
            var12 = var44.bind(var4)(var22, var8);
case 119:
            var8 = new Array(6);
            var8[0] = var12;
            var22 = var42 == var21;
            var12 = undefined;
            if(var22) { _fun0002_ip = 121; continue _fun0002 }
case 122:
            var19 = var19.timestampSec;
            var12 = var21.bind(var4)(var19);
case 121:
            var8[1] = var12;
            if(!var11) { _fun0002_ip = 123; continue _fun0002 }
case 124:
            var21 = _closure1_slot11;
            var19 = _closure1_slot7;
            var12 = {};
            var22 = true;
            var12['animating'] = var22;
            var44 = var15.bufferingSpinner;
            var22 = new Array(2);
            var22[0] = var44;
            if(var29) { _fun0002_ip = 125; continue _fun0002 }
case 126:
            var29 = 'center';
            if(!(var29 !== var40)) { _fun0002_ip = 125; continue _fun0002 }
case 127:
            var29 = {};
            var40 = var42 == var43;
            var44 = undefined;
            if(var40) { _fun0002_ip = 128; continue _fun0002 }
case 129:
            var44 = var43.top;
case 128:
            var45 = var42 != var44;
            var40 = 0;
            if(!var45) { _fun0002_ip = 130; continue _fun0002 }
case 131:
            var40 = var44;
case 130:
            var29['top'] = var40;
            var44 = var42 == var43;
            var40 = undefined;
            if(var44) { _fun0002_ip = 132; continue _fun0002 }
case 133:
            var40 = var43.left;
case 132:
            var42 = var42 != var40;
            var32 = 0;
            if(!var42) { _fun0002_ip = 134; continue _fun0002 }
case 135:
            var32 = var40;
case 134:
            var29['left'] = var32;
            _fun0002_ip = 136; continue _fun0002;
case 125:
            var29 = var15.bufferingSpinnerCentered;
case 136:
            var22[1] = var29;
            var12['style'] = var22;
            var29 = _closure1_slot1;
            var32 = _closure1_slot2;
            var22 = 6;
            var22 = var32[var22];
            var22 = var29.bind(var4)(var22);
            var22 = var22.unsafe_rawColors;
            var22 = var22.WHITE;
            var12['color'] = var22;
            var11 = var21.bind(var4)(var19, var12);
case 123:
            var8[2] = var11;
            var10 = !var10;
            if(!var10) { _fun0002_ip = 137; continue _fun0002 }
case 138:
            var19 = _closure1_slot11;
            var12 = _closure1_slot5;
            var11 = {};
            var21 = var15.loadingContainer;
            var11['style'] = var21;
            var22 = _closure1_slot7;
            var21 = {};
            var29 = true;
            var21['animating'] = var29;
            var21 = var19.bind(var4)(var22, var21);
            var11['children'] = var21;
            var10 = var19.bind(var4)(var12, var11);
case 137:
            var8[3] = var10;
            var12 = _closure1_slot12;
            var11 = _closure1_slot1;
            var10 = _closure1_slot2;
            var10 = var10[var17];
            var10 = var11.bind(var4)(var10);
            var11 = var10.View;
            var10 = {};
            var21 = var15.controls;
            var19 = new Array(2);
            var19[0] = var21;
            var19[1] = var20;
            var10['style'] = var19;
            var10['accessible'] = var14;
            var19 = var28;
            if(var28) { _fun0002_ip = 139; continue _fun0002 }
case 140:
            var19 = var26;
case 139:
            if(!var19) { _fun0002_ip = 141; continue _fun0002 }
case 142:
            var21 = _closure1_slot12;
            var20 = _closure1_slot5;
            var14 = {};
            var29 = var15.controlsTopBottom;
            var22 = new Array(3);
            var22[0] = var29;
            var29 = var15.controlsTop;
            var22[1] = var29;
            var22[2] = var23;
            var14['style'] = var22;
            if(!var28) { _fun0002_ip = 143; continue _fun0002 }
case 144:
            var32 = _closure1_slot11;
            var40 = _closure1_slot0;
            var42 = _closure1_slot2;
            var22 = 21;
            var22 = var42[var22];
            var22 = var40.bind(var4)(var22);
            var29 = var22.PressableOpacity;
            var22 = {};
            var43 = 'button';
            var22['accessibilityRole'] = var43;
            var43 = var42[var27];
            var43 = var40.bind(var4)(var43);
            var45 = var43.intl;
            var44 = var45.string;
            var43 = var42[var27];
            var43 = var40.bind(var4)(var43);
            var43 = var43.t;
            var43 = var43.bDSZO1;
            var43 = var44.bind(var45)(var43);
            var22['accessibilityLabel'] = var43;
            var22['onPress'] = var39;
            var39 = var15.controlButton;
            var22['style'] = var39;
            var39 = 22;
            var39 = var42[var39];
            var39 = var40.bind(var4)(var39);
            var40 = var39.ClosedCaptionsOutlineIcon;
            var39 = {};
            if(var41) { _fun0002_ip = 145; continue _fun0002 }
case 146:
            var41 = var15.iconDisabled;
            var41 = var41.color;
            _fun0002_ip = 147; continue _fun0002;
case 145:
            var42 = var15.icon;
            var41 = var42.color;
case 147:
            var39['color'] = var41;
            var39 = var32.bind(var4)(var40, var39);
            var22['children'] = var39;
            var28 = var32.bind(var4)(var29, var22);
case 143:
            var22 = new Array(2);
            var22[0] = var28;
            if(!var26) { _fun0002_ip = 148; continue _fun0002 }
case 149:
            var32 = _closure1_slot11;
            var39 = _closure1_slot0;
            var40 = _closure1_slot2;
            var28 = 21;
            var28 = var40[var28];
            var28 = var39.bind(var4)(var28);
            var29 = var28.PressableOpacity;
            var28 = {};
            var41 = 'button';
            var28['accessibilityRole'] = var41;
            var41 = var40[var27];
            var41 = var39.bind(var4)(var41);
            var43 = var41.intl;
            var42 = var43.string;
            var41 = var40[var27];
            var41 = var39.bind(var4)(var41);
            var41 = var41.t;
            var41 = var41.KCzjTi;
            var41 = var42.bind(var43)(var41);
            var28['accessibilityLabel'] = var41;
            var28['onPress'] = var38;
            var38 = var15.controlButton;
            var28['style'] = var38;
            var38 = 23;
            var38 = var40[var38];
            var38 = var39.bind(var4)(var38);
            var39 = var38.TranscriptOutlineIcon;
            var38 = {};
            var40 = var15.iconDisabled;
            var40 = var40.color;
            var38['color'] = var40;
            var38 = var32.bind(var4)(var39, var38);
            var28['children'] = var38;
            var26 = var32.bind(var4)(var29, var28);
case 148:
            var22[1] = var26;
            var14['children'] = var22;
            var19 = var21.bind(var4)(var20, var14);
case 141:
            var14 = new Array(3);
            var14[0] = var19;
            var21 = _closure1_slot12;
            var20 = _closure1_slot5;
            var19 = {};
            var22 = var15.controlsMiddle;
            var19['style'] = var22;
            var26 = var25;
            if(!var25) { _fun0002_ip = 150; continue _fun0002 }
case 151:
            var29 = _closure1_slot11;
            var32 = _closure1_slot0;
            var38 = _closure1_slot2;
            var22 = 24;
            var22 = var38[var22];
            var22 = var32.bind(var4)(var22);
            var28 = var22.VideoQuestPlayerControlButton;
            var22 = {};
            var39 = _closure1_slot20;
            var39 = var39.ERRORED;
            var39 = var36 === var39;
            var22['disabled'] = var39;
            var39 = 'button';
            var22['accessibilityRole'] = var39;
            var39 = var38[var27];
            var39 = var32.bind(var4)(var39);
            var41 = var39.intl;
            var40 = var41.string;
            var39 = var38[var27];
            var39 = var32.bind(var4)(var39);
            var39 = var39.t;
            var39 = var39.r9s3Uv;
            var39 = var40.bind(var41)(var39);
            var22['accessibilityLabel'] = var39;
            var22['onPress'] = var30;
            var30 = 25;
            var30 = var38[var30];
            var30 = var32.bind(var4)(var30);
            var32 = var30.SkipBackwardIcon;
            var30 = {'color': null, 'width': 16, 'height': 16};
            var38 = var15.icon;
            var38 = var38.color;
            var30['color'] = var38;
            var30 = var29.bind(var4)(var32, var30);
            var22['children'] = var30;
            var26 = var29.bind(var4)(var28, var22);
case 150:
            var22 = new Array(3);
            var22[0] = var26;
            var32 = _closure1_slot11;
            var39 = _closure1_slot0;
            var38 = _closure1_slot2;
            var26 = 24;
            var28 = var38[var26];
            var28 = var39.bind(var4)(var28);
            var30 = var28.VideoQuestPlayerControlButton;
            var29 = {};
            var28 = 'button';
            var29['accessibilityRole'] = var28;
            var38 = var38[var27];
            var38 = var39.bind(var4)(var38);
            var40 = var38.intl;
            var39 = var40.string;
            if(var35) { _fun0002_ip = 152; continue _fun0002 }
case 153:
            var38 = _closure1_slot20;
            var38 = var38.ERRORED;
            if(!(var36 !== var38)) { _fun0002_ip = 152; continue _fun0002 }
case 154:
            var41 = _closure1_slot0;
            var38 = _closure1_slot2;
            var38 = var38[var27];
            var38 = var41.bind(var4)(var38);
            var41 = var38.t;
            if(var33) { _fun0002_ip = 155; continue _fun0002 }
case 156:
            var38 = var41.fTMEUi;
            _fun0002_ip = 157; continue _fun0002;
case 155:
            var38 = var41.R3aFPe;
case 157:
            _fun0002_ip = 158; continue _fun0002;
case 152:
            var42 = _closure1_slot0;
            var41 = _closure1_slot2;
            var41 = var41[var27];
            var41 = var42.bind(var4)(var41);
            var41 = var41.t;
            var38 = var41.K0e7M9;
case 158:
            var38 = var39.bind(var40)(var38);
            var29['accessibilityLabel'] = var38;
            var29['onPress'] = var37;
            if(var35) { _fun0002_ip = 159; continue _fun0002 }
case 160:
            var35 = _closure1_slot20;
            var35 = var35.ERRORED;
            if(!(var36 !== var35)) { _fun0002_ip = 159; continue _fun0002 }
case 161:
            var36 = _closure1_slot11;
            var37 = _closure1_slot0;
            var38 = _closure1_slot2;
            if(var33) { _fun0002_ip = 162; continue _fun0002 }
case 163:
            var33 = 28;
            var33 = var38[var33];
            var33 = var37.bind(var4)(var33);
            var35 = var33.PauseIcon;
            _fun0002_ip = 164; continue _fun0002;
case 162:
            var33 = 27;
            var33 = var38[var33];
            var33 = var37.bind(var4)(var33);
            var35 = var33.PlayIcon;
case 164:
            var33 = {};
            var37 = 'lg';
            var33['size'] = var37;
            var33 = var36.bind(var4)(var35, var33);
            _fun0002_ip = 165; continue _fun0002;
case 159:
            var37 = _closure1_slot11;
            var36 = _closure1_slot0;
            var38 = _closure1_slot2;
            var35 = 26;
            var35 = var38[var35];
            var35 = var36.bind(var4)(var35);
            var36 = var35.RetryIcon;
            var35 = {};
            var38 = 'lg';
            var35['size'] = var38;
            var33 = var37.bind(var4)(var36, var35);
case 165:
            var29['children'] = var33;
            var29 = var32.bind(var4)(var30, var29);
            var22[1] = var29;
            if(!var25) { _fun0002_ip = 166; continue _fun0002 }
case 167:
            var30 = _closure1_slot11;
            var32 = _closure1_slot0;
            var33 = _closure1_slot2;
            var26 = var33[var26];
            var26 = var32.bind(var4)(var26);
            var29 = var26.VideoQuestPlayerControlButton;
            var26 = {};
            var26['disabled'] = var34;
            var26['accessibilityRole'] = var28;
            var34 = var33[var27];
            var34 = var32.bind(var4)(var34);
            var36 = var34.intl;
            var35 = var36.string;
            var34 = var33[var27];
            var34 = var32.bind(var4)(var34);
            var34 = var34.t;
            var34 = var34.zWDcNP;
            var34 = var35.bind(var36)(var34);
            var26['accessibilityLabel'] = var34;
            var26['onPress'] = var31;
            var31 = 29;
            var31 = var33[var31];
            var31 = var32.bind(var4)(var31);
            var32 = var31.SkipForwardIcon;
            var31 = {'color': null, 'width': 16, 'height': 16};
            var33 = var15.icon;
            var33 = var33.color;
            var31['color'] = var33;
            var31 = var30.bind(var4)(var32, var31);
            var26['children'] = var31;
            var25 = var30.bind(var4)(var29, var26);
case 166:
            var22[2] = var25;
            var19['children'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            var14[1] = var19;
            if(!var18) { _fun0002_ip = 168; continue _fun0002 }
case 169:
            var21 = _closure1_slot11;
            var20 = _closure1_slot5;
            var19 = {};
            var25 = var15.controlsTopBottom;
            var22 = new Array(3);
            var22[0] = var25;
            var25 = var15.controlsBottom;
            var22[1] = var25;
            var22[2] = var23;
            var19['style'] = var22;
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var22 = 21;
            var22 = var26[var22];
            var22 = var25.bind(var4)(var22);
            var23 = var22.PressableOpacity;
            var22 = {};
            var22['accessibilityRole'] = var28;
            var28 = var26[var27];
            var28 = var25.bind(var4)(var28);
            var29 = var28.intl;
            var28 = var29.string;
            var27 = var26[var27];
            var27 = var25.bind(var4)(var27);
            var27 = var27.t;
            var27 = var27.vKZT5t;
            var27 = var28.bind(var29)(var27);
            var22['accessibilityLabel'] = var27;
            var22['onPress'] = var24;
            var24 = var15.controlButton;
            var22['style'] = var24;
            var24 = 30;
            var24 = var26[var24];
            var24 = var25.bind(var4)(var24);
            var25 = var24.FullscreenEnterIcon;
            var24 = {};
            var24 = var21.bind(var4)(var25, var24);
            var22['children'] = var24;
            var22 = var21.bind(var4)(var23, var22);
            var19['children'] = var22;
            var18 = var21.bind(var4)(var20, var19);
case 168:
            var14[2] = var18;
            var10['children'] = var14;
            var10 = var12.bind(var4)(var11, var10);
            var8[4] = var10;
            if(!var9) { _fun0002_ip = 170; continue _fun0002 }
case 171:
            var12 = _closure1_slot11;
            var11 = _closure1_slot5;
            var10 = {};
            var14 = var15.progressContainer;
            var10['style'] = var14;
            var14 = _closure1_slot1;
            var13 = _closure1_slot2;
            var13 = var13[var17];
            var13 = var14.bind(var4)(var13);
            var14 = var13.View;
            var13 = {};
            var17 = var15.progress;
            var15 = new Array(2);
            var15[0] = var17;
            var15[1] = var16;
            var13['style'] = var15;
            var13 = var12.bind(var4)(var14, var13);
            var10['children'] = var13;
            var9 = var12.bind(var4)(var11, var10);
case 170:
            var8[5] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var6.bind(var9)(var2);
    var6 = 31;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/quests/native/AdVideoPlayer.tsx';
    var6 = var7.bind(var8)(var6);
    var3['PlayerState'] = var5;
    var3['PlaybackTriggerSource'] = var4;
    var3['AdVideoPlayer'] = var2;
    return var1;
})();