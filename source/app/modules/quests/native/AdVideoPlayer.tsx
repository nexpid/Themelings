// app/modules/quests/native/AdVideoPlayer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
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
    var _closure1_slot23 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var13 = 0;
    var4 = var7[var13];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var5 = var7[var4];
    var4 = metroImportAll;
    var8 = var4.bind(var1)(var5);
    var _closure1_slot4 = var8;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.View;
    var _closure1_slot5 = var5;
    var17 = var4.StyleSheet;
    var5 = var4.Pressable;
    var _closure1_slot6 = var5;
    var4 = var4.ActivityIndicator;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.AppStates;
    var _closure1_slot9 = var5;
    var4 = var4.ComponentActions;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.jsx;
    var _closure1_slot11 = var5;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = {};
    var11 = 6;
    var5 = var7[var11];
    var5 = var12.bind(var1)(var5);
    var5 = var5.spacing;
    var5 = var5.PX_16;
    var4['left'] = var5;
    var5 = var7[var11];
    var5 = var12.bind(var1)(var5);
    var5 = var5.spacing;
    var5 = var5.PX_16;
    var4['right'] = var5;
    var5 = var7[var11];
    var5 = var12.bind(var1)(var5);
    var5 = var5.spacing;
    var5 = var5.PX_16;
    var4['top'] = var5;
    var5 = var7[var11];
    var5 = var12.bind(var1)(var5);
    var5 = var5.spacing;
    var5 = var5.PX_16;
    var4['bottom'] = var5;
    var _closure1_slot13 = var4;
    var5 = var8.memo;
    var4 = 7;
    var4 = var7[var4];
    var4 = var12.bind(var1)(var4);
    var4 = var5.bind(var8)(var4);
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
    var10 = var4.bind(var1)();
    var _closure1_slot16 = var10;
    var5 = {};
    var4 = 'function AdVideoPlayerTsx2(currentTime,maxTimestamp,videoDuration,allowUnrestrictedSeeking){const{hasVideoEnded}=this.__closure;return!hasVideoEnded(currentTime,videoDuration)&&(allowUnrestrictedSeeking||currentTime<=maxTimestamp-1);}';
    var5['code'] = var4;
    var4 = function _(arg1, arg2, arg3, arg4) {
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
    var9 = {};
    var9['hasVideoEnded'] = var10;
    var4['__closure'] = var9;
    var9 = 16693292055973.0;
    var4['__workletHash'] = var9;
    var4['__initData'] = var5;
    var _closure1_slot17 = var4;
    var4 = 8;
    var4 = var7[var4];
    var9 = var6.bind(var1)(var4);
    var5 = var9.createStyles;
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
    var14 = var7[var11];
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
    var17 = var7[var17];
    var19 = var12.bind(var1)(var17);
    var17 = var7[var11];
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
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var10['padding'] = var14;
    var4['controlsTopBottom'] = var10;
    var10 = {'justifyContent': 'center', 'alignItems': 'center', 'flexGrow': 1, 'flexDirection': 'row', 'gap': null, 'pointerEvents': 'box-none'};
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
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
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10['height'] = var13;
    var4['progressContainer'] = var10;
    var10 = {'height': 1, 'backgroundColor': null, 'shadowOffset': null, 'shadowRadius': 6, 'shadowOpacity': 1, 'elevation': 5};
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.WHITE;
    var10['backgroundColor'] = var13;
    var13 = {'width': 0, 'height': 0};
    var10['shadowOffset'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.WHITE;
    var10['shadowColor'] = var13;
    var4['progress'] = var10;
    var10 = {};
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_DEFAULT;
    var10['color'] = var13;
    var4['icon'] = var10;
    var10 = {};
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_SUBTLE;
    var10['color'] = var13;
    var4['iconDisabled'] = var10;
    var10 = {};
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var10['padding'] = var11;
    var4['controlButton'] = var10;
    var4 = var5.bind(var9)(var4);
    var _closure1_slot18 = var4;
    var4 = {};
    var5 = 'paused';
    var4['PAUSED'] = var5;
    var5 = 'playing';
    var4['PLAYING'] = var5;
    var5 = 'ended';
    var4['ENDED'] = var5;
    var5 = 'loading';
    var4['LOADING'] = var5;
    var5 = 'errored';
    var4['ERRORED'] = var5;
    var _closure1_slot19 = var4;
    var5 = {};
    var9 = 'function AdVideoPlayerTsx3(){const{hasLoaded,showControls,playerState,PlayerState,isVideoEnded,externallyPaused}=this.__closure;return hasLoaded&&(showControls.get()||playerState===PlayerState.PAUSED||playerState===PlayerState.ENDED||playerState===PlayerState.ERRORED||isVideoEnded||externallyPaused);}';
    var5['code'] = var9;
    var _closure1_slot20 = var5;
    var5 = {};
    var9 = "function AdVideoPlayerTsx4(){const{shouldShowControls,withSpring,SUBTLE_SPRING}=this.__closure;const show=shouldShowControls();return{opacity:withSpring(show?1:0,SUBTLE_SPRING),pointerEvents:show?'auto':'none'};}";
    var5['code'] = var9;
    var _closure1_slot21 = var5;
    var5 = {};
    var9 = 'function AdVideoPlayerTsx5(){const{withTiming,progressSharedValue,timingFast}=this.__closure;return{width:withTiming(progressSharedValue.get()*100+"%",timingFast,\'animate-always\')};}';
    var5['code'] = var9;
    var _closure1_slot22 = var5;
    var5 = var8.memo;
    var2 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var9 = arg1;
            var56 = var9.source;
            var54 = var9.initialProgress;
            var _closure2_slot0 = var54;
            var14 = var9.contentDuration;
            var4 = undefined;
            if(!(var14 === var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var14 = 0;
case 6:
            var53 = var9.allowUnrestrictedSeeking;
            if(!(var53 === var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var53 = false;
case 8:
            var _closure2_slot1 = var53;
            var52 = var9.disableResumeOnLoad;
            if(!(var52 === var4)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var52 = false;
case 10:
            var _closure2_slot2 = var52;
            var6 = var9.style;
            var28 = var9.isFullscreen;
            var3 = var9.externallyPaused;
            var _closure2_slot3 = var3;
            var42 = var9.contentInsets;
            var40 = var9.captionsEnabled;
            if(!(var40 === var4)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var40 = false;
case 12:
            var38 = var9.onToggleCaptions;
            var37 = var9.onOpenTranscript;
            var24 = var9.onToggleFullscreen;
            var21 = var9.renderCaptions;
            var7 = var9.onLoadStart;
            var _closure2_slot4 = var7;
            var12 = var9.onLoad;
            var _closure2_slot5 = var12;
            var36 = var9.onReadyForDisplay;
            var _closure2_slot6 = var36;
            var27 = var9.onProgress;
            var _closure2_slot7 = var27;
            var30 = var9.onSeek;
            var _closure2_slot8 = var30;
            var2 = var9.onBuffer;
            var5 = var9.onError;
            var _closure2_slot9 = var5;
            var11 = var9.onEnd;
            var _closure2_slot10 = var11;
            var8 = var9.onPlayerStateChange;
            var _closure2_slot11 = var8;
            var43 = var9.onPausePlayback;
            var _closure2_slot12 = var43;
            var33 = var9.onResumePlayback;
            var _closure2_slot13 = var33;
            var45 = var9.onVideoTracks;
            var44 = var9.onVideoLayout;
            var10 = var9.videoRef;
            var39 = var9.bufferingSpinnerPlacement;
            if(!(var39 === var4)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var39 = 'top-left';
case 14:
            var26 = var9.showCaptionsButton;
            if(!(var26 === var4)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var26 = false;
case 16:
            var25 = var9.showTranscriptButton;
            if(!(var25 === var4)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var25 = false;
case 18:
            var18 = var9.showFullscreenButton;
            if(!(var18 === var4)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var18 = false;
case 20:
            var9 = var9.showProgress;
            if(!(var9 === var4)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var9 = false;
case 22:
            var _closure2_slot14 = var4;
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
            var15 = _closure1_slot18;
            var15 = var15.bind(var4)();
            var17 = _closure1_slot4;
            var16 = var17.useRef;
            var41 = null;
            var57 = var16.bind(var17)(var41);
            if(!(var41 != var10)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var57 = var10;
case 24:
            _closure2_slot14 = var57;
            var20 = _closure1_slot4;
            var10 = var20.useState;
            var10 = var10.bind(var20)(var14);
            var16 = _closure1_slot3;
            var55 = 2;
            var10 = var16.bind(var4)(var10, var55);
            var31 = 0;
            var29 = var10[var31];
            _closure2_slot15 = var29;
            var51 = 1;
            var10 = var10[var51];
            _closure2_slot16 = var10;
            var14 = var20.useState;
            var10 = {};
            var62 = var10;
            var61 = var54;
            var17 = copyDataProperties(var62, var61);
            var10 = var14.bind(var20)(var10);
            var10 = var16.bind(var4)(var10, var55);
            var19 = var10[var31];
            _closure2_slot17 = var19;
            var10 = var10[var51];
            _closure2_slot18 = var10;
            var14 = var20.useState;
            var10 = _closure1_slot19;
            var10 = var10.LOADING;
            var10 = var14.bind(var20)(var10);
            var10 = var16.bind(var4)(var10, var55);
            var35 = var10[var31];
            _closure2_slot19 = var35;
            var10 = var10[var51];
            _closure2_slot20 = var10;
            var10 = var20.useState;
            var14 = false;
            var10 = var10.bind(var20)(var14);
            var10 = var16.bind(var4)(var10, var55);
            var16 = var10[var31];
            _closure2_slot21 = var16;
            var10 = var10[var51];
            _closure2_slot22 = var10;
            var17 = var20.useCallback;
            var10 = new Array(1);
            var10[0] = var8;
            var8 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = arg1;
                    var4 = _closure2_slot20;
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var5 = _closure2_slot11;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                    var2 = _closure2_slot11;
                    var2 = var2.bind(var1)(var3);
case 26:
                    return var1;
                }
            };
            var22 = var17.bind(var20)(var8, var10);
            _closure2_slot23 = var22;
            var34 = var16;
            if(!var34) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var8 = _closure1_slot19;
            var8 = var8.ENDED;
            var34 = var35 === var8;
case 28:
            if(!var34) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var17 = _closure1_slot16;
            var10 = var19.timestampSec;
            var8 = var19.duration;
            var34 = var17.bind(var4)(var10, var8);
case 30:
            _closure2_slot24 = var34;
            var49 = _closure1_slot0;
            var58 = _closure1_slot2;
            var17 = 10;
            var8 = var58[var17];
            var10 = var49.bind(var4)(var8);
            var8 = var10.useSharedValue;
            var50 = var8.bind(var10)(var14);
            _closure2_slot25 = var50;
            var8 = function se() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot21;
                    if(!var1) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                    var4 = _closure2_slot25;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0004_ip = 4; continue _fun0004 }
case 34:
                    var5 = _closure2_slot19;
                    var4 = _closure1_slot19;
                    var4 = var4.PAUSED;
                    var2 = var5 === var4;
case 4:
                    if(var2) { _fun0004_ip = 35; continue _fun0004 }
case 2:
                    var5 = _closure2_slot19;
                    var4 = _closure1_slot19;
                    var4 = var4.ENDED;
                    var2 = var5 === var4;
case 35:
                    if(var2) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                    var5 = _closure2_slot19;
                    var4 = _closure1_slot19;
                    var4 = var4.ERRORED;
                    var2 = var5 === var4;
case 36:
                    if(var2) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                    var2 = _closure2_slot24;
case 38:
                    if(var2) { _fun0004_ip = 40; continue _fun0004 }
case 12:
                    var2 = _closure2_slot3;
case 40:
                    var1 = var2;
case 32:
                    return var1;
                }
            };
            var10 = {};
            var10['hasLoaded'] = var16;
            var10['showControls'] = var50;
            var10['playerState'] = var35;
            var23 = _closure1_slot19;
            var10['PlayerState'] = var23;
            var10['isVideoEnded'] = var34;
            var10['externallyPaused'] = var3;
            var8['__closure'] = var10;
            var10 = 13817906190050.0;
            var8['__workletHash'] = var10;
            var10 = _closure1_slot20;
            var8['__initData'] = var10;
            _closure2_slot26 = var8;
            var10 = var58[var17];
            var20 = var49.bind(var4)(var10);
            var16 = var20.useAnimatedStyle;
            var10 = function ae() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot26;
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
                    if(!var3) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                    var4 = 1;
case 41:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 12;
                    var2 = var9[var2];
                    var2 = var7.bind(var8)(var2);
                    var2 = var2.SUBTLE_SPRING;
                    var2 = var5.bind(var6)(var4, var2);
                    var1['opacity'] = var2;
                    var2 = 'none';
                    if(!var3) { _fun0005_ip = 39; continue _fun0005 }
case 43:
                    var2 = 'auto';
case 39:
                    var1['pointerEvents'] = var2;
                    return var1;
                }
            };
            var32 = {};
            var32['shouldShowControls'] = var8;
            var46 = 11;
            var46 = var58[var46];
            var46 = var49.bind(var4)(var46);
            var46 = var46.withSpring;
            var32['withSpring'] = var46;
            var46 = 12;
            var46 = var58[var46];
            var46 = var49.bind(var4)(var46);
            var46 = var46.SUBTLE_SPRING;
            var32['SUBTLE_SPRING'] = var46;
            var10['__closure'] = var32;
            var32 = 311315682972.0;
            var10['__workletHash'] = var32;
            var32 = _closure1_slot21;
            var10['__initData'] = var32;
            var20 = var16.bind(var20)(var10);
            var8 = var8.bind(var4)();
            var10 = var58[var17];
            var16 = var49.bind(var4)(var10);
            var10 = var16.useSharedValue;
            var48 = var10.bind(var16)(var31);
            _closure2_slot27 = var48;
            var10 = var58[var17];
            var32 = var49.bind(var4)(var10);
            var16 = var32.useAnimatedStyle;
            var10 = function le() {
                var1 = {};
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 13;
                var2 = var8[var2];
                var4 = undefined;
                var6 = var7.bind(var4)(var2);
                var5 = var6.withTiming;
                var3 = _closure2_slot27;
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
            var46 = {};
            var47 = 13;
            var47 = var58[var47];
            var47 = var49.bind(var4)(var47);
            var47 = var47.withTiming;
            var46['withTiming'] = var47;
            var46['progressSharedValue'] = var48;
            var47 = 14;
            var47 = var58[var47];
            var47 = var49.bind(var4)(var47);
            var47 = var47.timingFast;
            var46['timingFast'] = var47;
            var10['__closure'] = var46;
            var46 = 11793601648786.0;
            var10['__workletHash'] = var46;
            var46 = _closure1_slot22;
            var10['__initData'] = var46;
            var16 = var16.bind(var32)(var10);
            var49 = _closure1_slot4;
            var32 = var49.useRef;
            var10 = -1;
            var10 = var32.bind(var49)(var10);
            _closure2_slot28 = var10;
            var46 = var49.useCallback;
            var32 = new Array(1);
            var32[0] = var50;
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
                        var3 = _closure2_slot28;
                        var6 = var3.current;
                        var3 = undefined;
                        var6 = var7.bind(var3)(var6);
                        var8 = _closure2_slot25;
                        var7 = var8.set;
                        var6 = true;
                        var6 = var7.bind(var8)(var6);
                        var2 = _closure2_slot28;
                        var7 = var1.setTimeout;
                        var6 = function() {
                            var3 = _closure2_slot25;
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
                        if(!(var2 == var6)) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                        return var3;
case 44:
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
            var32 = var46.bind(var49)(var10, var32);
            var47 = var49.useCallback;
            var46 = function(arg1, arg2) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var1 = arg2;
                var _closure3_slot1 = var1;
                var3 = _closure2_slot18;
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
            var47 = var47.bind(var49)(var46, var10);
            _closure2_slot29 = var47;
            var10 = var49.useState;
            var46 = var10.bind(var49)(var14);
            var10 = _closure1_slot3;
            var46 = var10.bind(var4)(var46, var55);
            var10 = var46[var31];
            var46 = var46[var51];
            _closure2_slot30 = var46;
            var51 = var49.useCallback;
            var46 = new Array(1);
            var46[0] = var36;
            var36 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot6;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0007_ip = 46; continue _fun0007 }
case 47:
                    var3 = _closure2_slot6;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
case 46:
                    var3 = _closure2_slot30;
                    var1 = undefined;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var46 = var51.bind(var49)(var36, var46);
            var51 = var49.useCallback;
            var36 = new Array(5);
            var36[0] = var57;
            var54 = var54.timestampSec;
            var36[1] = var54;
            var36[2] = var52;
            var36[3] = var22;
            var36[4] = var12;
            var12 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = arg1;
                    var7 = var3.duration;
                    var4 = _closure2_slot16;
                    var1 = undefined;
                    var4 = var4.bind(var1)(var7);
                    var5 = _closure2_slot22;
                    var4 = true;
                    var4 = var5.bind(var1)(var4);
                    var4 = _closure2_slot14;
                    var4 = var4.current;
                    var5 = null;
                    if(!(var5 != var4)) { _fun0008_ip = 48; continue _fun0008 }
case 42:
                    var4 = _closure2_slot0;
                    var8 = var4.timestampSec;
                    var4 = _closure2_slot2;
                    var4 = !var4;
                    if(!var4) { _fun0008_ip = 49; continue _fun0008 }
case 50:
                    var6 = 5;
                    var4 = var8 > var6;
case 49:
                    if(!var4) { _fun0008_ip = 51; continue _fun0008 }
case 52:
                    var6 = 3;
                    var6 = var7 - var6;
                    var4 = var8 < var6;
case 51:
                    if(!var4) { _fun0008_ip = 53; continue _fun0008 }
case 54:
                    var4 = _closure2_slot14;
                    var7 = var4.current;
                    var6 = var7.seek;
                    var4 = 1;
                    var4 = var8 - var4;
                    var4 = var6.bind(var7)(var4);
case 53:
                    var6 = _closure2_slot23;
                    var4 = _closure1_slot19;
                    var4 = var4.PLAYING;
                    var4 = var6.bind(var1)(var4);
                    var4 = _closure2_slot5;
                    if(!(var5 != var4)) { _fun0008_ip = 48; continue _fun0008 }
case 55:
                    var2 = _closure2_slot5;
                    var2 = var2.bind(var1)(var3);
case 48:
                    return var1;
                }
            };
            var52 = var51.bind(var49)(var12, var36);
            var51 = var49.useCallback;
            var36 = new Array(6);
            var36[0] = var35;
            var36[1] = var43;
            var36[2] = var33;
            var36[3] = var34;
            var36[4] = var22;
            var36[5] = var57;
            var12 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = arguments[0];
                    var1 = undefined;
                    if(!(var2 === var1)) { _fun0009_ip = 56; continue _fun0009 }
case 57:
                    var2 = {};
case 56:
                    var4 = var2.shouldRestartVideo;
                    if(!(var4 === var1)) { _fun0009_ip = 46; continue _fun0009 }
case 58:
                    var4 = true;
case 46:
                    var6 = _closure2_slot19;
                    var5 = _closure1_slot19;
                    var5 = var5.ERRORED;
                    if(!(var6 !== var5)) { _fun0009_ip = 59; continue _fun0009 }
case 2:
                    var5 = _closure2_slot24;
                    if(!var5) { _fun0009_ip = 60; continue _fun0009 }
case 61:
                    if(var4) { _fun0009_ip = 59; continue _fun0009 }
case 60:
                    var5 = _closure2_slot19;
                    var4 = _closure1_slot19;
                    var4 = var4.PAUSED;
                    if(!(var5 !== var4)) { _fun0009_ip = 62; continue _fun0009 }
case 63:
                    var5 = _closure2_slot19;
                    var4 = _closure1_slot19;
                    var4 = var4.LOADING;
                    if(!(var5 !== var4)) { _fun0009_ip = 62; continue _fun0009 }
case 45:
                    var5 = _closure2_slot19;
                    var4 = _closure1_slot19;
                    var4 = var4.PLAYING;
                    if(!(var5 === var4)) { _fun0009_ip = 64; continue _fun0009 }
case 65:
                    var5 = _closure2_slot23;
                    var4 = _closure1_slot19;
                    var4 = var4.PAUSED;
                    var4 = var5.bind(var1)(var4);
                    var5 = _closure2_slot12;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0009_ip = 64; continue _fun0009 }
case 55:
                    var4 = _closure2_slot12;
                    var4 = var4.bind(var1)();
                    _fun0009_ip = 64; continue _fun0009;
case 62:
                    var5 = _closure2_slot23;
                    var4 = _closure1_slot19;
                    var4 = var4.PLAYING;
                    var4 = var5.bind(var1)(var4);
                    var5 = _closure2_slot13;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0009_ip = 64; continue _fun0009 }
case 66:
                    var4 = _closure2_slot13;
                    var4 = var4.bind(var1)();
                    _fun0009_ip = 64; continue _fun0009;
case 59:
                    var4 = _closure2_slot14;
                    var7 = var4.current;
                    var4 = null;
                    if(!(var4 != var7)) { _fun0009_ip = 67; continue _fun0009 }
case 68:
                    var6 = var7.seek;
                    var5 = 0;
                    var5 = var6.bind(var7)(var5);
case 67:
                    var5 = _closure2_slot23;
                    var3 = _closure1_slot19;
                    var3 = var3.PLAYING;
                    var3 = var5.bind(var1)(var3);
                    var3 = _closure2_slot13;
                    if(!(var4 != var3)) { _fun0009_ip = 64; continue _fun0009 }
case 69:
                    var2 = _closure2_slot13;
                    var2 = var2.bind(var1)();
case 64:
                    return var1;
                }
            };
            var12 = var51.bind(var49)(var12, var36);
            _closure2_slot31 = var12;
            var54 = var49.useCallback;
            var51 = new Array(1);
            var51[0] = var12;
            var36 = function() {
                var2 = _closure2_slot31;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            var36 = var54.bind(var49)(var36, var51);
            var51 = var49.useRef;
            var51 = var51.bind(var49)(var14);
            _closure2_slot32 = var51;
            var54 = var49.useCallback;
            var51 = new Array(3);
            var51[0] = var35;
            var51[1] = var22;
            var51[2] = var43;
            var43 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure2_slot32;
                    var2 = false;
                    var3['current'] = var2;
                    var4 = _closure2_slot19;
                    var3 = _closure1_slot19;
                    var3 = var3.PLAYING;
                    if(!(var4 === var3)) { _fun0010_ip = 70; continue _fun0010 }
case 26:
                    var4 = _closure2_slot32;
                    var3 = true;
                    var4['current'] = var3;
                    var4 = _closure2_slot23;
                    var2 = _closure1_slot19;
                    var3 = var2.PAUSED;
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var4 = _closure2_slot12;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0010_ip = 70; continue _fun0010 }
case 71:
                    var1 = _closure2_slot12;
                    var1 = var1.bind(var2)();
case 70:
                    var1 = undefined;
                    return var1;
                }
            };
            var54 = var54.bind(var49)(var43, var51);
            _closure2_slot33 = var54;
            var51 = var49.useCallback;
            var43 = new Array(3);
            var43[0] = var35;
            var43[1] = var22;
            var43[2] = var33;
            var33 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure2_slot32;
                    var2 = var2.current;
                    if(!var2) { _fun0011_ip = 70; continue _fun0011 }
case 72:
                    var3 = _closure2_slot32;
                    var2 = false;
                    var3['current'] = var2;
                    var4 = _closure2_slot19;
                    var3 = _closure1_slot19;
                    var3 = var3.ERRORED;
                    if(!(var4 !== var3)) { _fun0011_ip = 70; continue _fun0011 }
case 42:
                    var4 = _closure2_slot23;
                    var2 = _closure1_slot19;
                    var3 = var2.PLAYING;
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var4 = _closure2_slot13;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0011_ip = 70; continue _fun0011 }
case 71:
                    var1 = _closure2_slot13;
                    var1 = var1.bind(var2)();
case 70:
                    var1 = undefined;
                    return var1;
                }
            };
            var33 = var51.bind(var49)(var33, var43);
            _closure2_slot34 = var33;
            var51 = var49.useEffect;
            var43 = new Array(2);
            var43[0] = var54;
            var43[1] = var33;
            var33 = function() {
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
                var7 = _closure2_slot33;
                var7 = var9.bind(var10)(var8, var7);
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var4 = var3.ComponentDispatch;
                var3 = var4.subscribe;
                var2 = var2.QUEST_APP_STORE_OVERLAY_FINISHED;
                var1 = _closure2_slot34;
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
                    var7 = _closure2_slot33;
                    var7 = var9.bind(var10)(var8, var7);
                    var4 = var6[var4];
                    var4 = var5.bind(var1)(var4);
                    var5 = var4.ComponentDispatch;
                    var4 = var5.unsubscribe;
                    var3 = var3.QUEST_APP_STORE_OVERLAY_FINISHED;
                    var2 = _closure2_slot34;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                return var1;
            };
            var33 = var51.bind(var49)(var33, var43);
            var43 = var49.useCallback;
            var33 = new Array(2);
            var33[0] = var50;
            var33[1] = var12;
            var12 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = _closure2_slot25;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0012_ip = 73; continue _fun0012 }
case 74:
                    var4 = _closure2_slot25;
                    var3 = var4.set;
                    var2 = false;
                    var2 = var3.bind(var4)(var2);
case 73:
                    var3 = _closure2_slot31;
                    var2 = {};
                    var1 = false;
                    var2['shouldRestartVideo'] = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var12 = var43.bind(var49)(var12, var33);
            var50 = var49.useCallback;
            var43 = new Array(6);
            var43[0] = var53;
            var43[1] = var29;
            var43[2] = var48;
            var33 = var19.duration;
            var43[3] = var33;
            var33 = var19.maxTimestampSec;
            var43[4] = var33;
            var43[5] = var57;
            var33 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var2 = _closure2_slot14;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0013_ip = 75; continue _fun0013 }
case 58:
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot17;
                    if(var3) { _fun0013_ip = 76; continue _fun0013 }
case 7:
                    var7 = var2.maxTimestampSec;
                    _fun0013_ip = 77; continue _fun0013;
case 76:
                    var7 = var2.duration;
case 77:
                    var2 = global;
                    var5 = var2.Math;
                    var4 = var5.max;
                    var6 = var2.Math;
                    var3 = var6.min;
                    var2 = arg1;
                    var3 = var3.bind(var6)(var2, var7);
                    var2 = 0;
                    var3 = var4.bind(var5)(var2, var3);
                    var4 = _closure2_slot27;
                    var2 = var4.get;
                    var4 = var2.bind(var4)();
                    var2 = _closure2_slot15;
                    var5 = var4 * var2;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 16;
                    var4 = var4[var2];
                    var2 = undefined;
                    var4 = var6.bind(var2)(var4);
                    var2 = var4.isAndroid;
                    var2 = var2.bind(var4)();
                    if(!var2) { _fun0013_ip = 78; continue _fun0013 }
case 79:
                    var2 = _closure2_slot14;
                    var4 = var2.current;
                    var2 = var4.seek;
                    var2 = var2.bind(var4)(var5);
case 78:
                    var1 = _closure2_slot14;
                    var2 = var1.current;
                    var1 = var2.seek;
                    var1 = var1.bind(var2)(var3);
case 75:
                    var1 = undefined;
                    return var1;
                }
            };
            var50 = var50.bind(var49)(var33, var43);
            _closure2_slot35 = var50;
            var43 = var49.useCallback;
            var33 = new Array(5);
            var33[0] = var29;
            var33[1] = var48;
            var33[2] = var30;
            var33[3] = var47;
            var33[4] = var57;
            var30 = function(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var3 = arg1;
                    var2 = _closure2_slot14;
                    var2 = var2.current;
                    var4 = null;
                    if(!(var4 != var2)) { _fun0014_ip = 80; continue _fun0014 }
case 58:
                    var5 = _closure2_slot15;
                    var2 = 0;
                    if(!(var5 > var2)) { _fun0014_ip = 63; continue _fun0014 }
case 81:
                    var6 = _closure2_slot27;
                    var5 = var6.set;
                    var7 = var3.currentTime;
                    var2 = _closure2_slot15;
                    var2 = var7 / var2;
                    var2 = var5.bind(var6)(var2);
                    var7 = _closure2_slot29;
                    var6 = var3.currentTime;
                    var5 = _closure2_slot15;
                    var2 = undefined;
                    var2 = var7.bind(var2)(var6, var5);
case 63:
                    var2 = _closure2_slot8;
                    if(!(var4 != var2)) { _fun0014_ip = 80; continue _fun0014 }
case 51:
                    var2 = _closure2_slot8;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
case 80:
                    var1 = undefined;
                    return var1;
                }
            };
            var51 = var43.bind(var49)(var30, var33);
            var23 = var23.ERRORED;
            var33 = var35 === var23;
            if(var33) { _fun0002_ip = 82; continue _fun0002 }
case 83:
            var49 = _closure1_slot17;
            var62 = var19.timestampSec;
            var61 = var19.maxTimestampSec;
            var60 = var19.duration;
            var63 = undefined;
            var59 = var53;
            var23 = var63[var49](var62, var61, var60, var59, var58);
            var33 = !var23;
case 82:
            _closure2_slot36 = var33;
            var23 = _closure1_slot4;
            var49 = var23.useCallback;
            var43 = new Array(4);
            var43[0] = var50;
            var43[1] = var29;
            var43[2] = var48;
            var43[3] = var33;
            var30 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var2 = _closure2_slot36;
                    if(var2) { _fun0015_ip = 84; continue _fun0015 }
case 33:
                    var3 = _closure2_slot27;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = _closure2_slot15;
                    var2 = var3 * var2;
                    var3 = _closure2_slot35;
                    var1 = 10;
                    var2 = var2 + var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 84:
                    var1 = undefined;
                    return var1;
                }
            };
            var30 = var49.bind(var23)(var30, var43);
            var49 = var23.useCallback;
            var43 = new Array(5);
            var43[0] = var50;
            var43[1] = var29;
            var43[2] = var48;
            var43[3] = var35;
            var43[4] = var22;
            var29 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var2 = _closure2_slot27;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = _closure2_slot15;
                    var2 = var2 * var1;
                    var4 = _closure2_slot35;
                    var1 = 10;
                    var2 = var2 - var1;
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var5 = _closure2_slot19;
                    var4 = _closure1_slot19;
                    var4 = var4.ENDED;
                    if(!(var5 === var4)) { _fun0016_ip = 85; continue _fun0016 }
case 60:
                    var3 = _closure2_slot23;
                    var2 = _closure1_slot19;
                    var2 = var2.PLAYING;
                    var2 = var3.bind(var1)(var2);
case 85:
                    return var1;
                }
            };
            var29 = var49.bind(var23)(var29, var43);
            var29 = var32.bind(var4)(var29);
            var30 = var32.bind(var4)(var30);
            var43 = var23.useCallback;
            var32 = new Array(3);
            var32[0] = var48;
            var32[1] = var47;
            var32[2] = var27;
            var27 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var5 = arg1;
                    var1 = var5.seekableDuration;
                    var4 = 0;
                    if(!(var4 !== var1)) { _fun0017_ip = 81; continue _fun0017 }
case 72:
                    var2 = var5.currentTime;
                    var1 = var5.seekableDuration;
                    var4 = var2 / var1;
case 81:
                    var7 = _closure2_slot29;
                    var6 = var5.currentTime;
                    var3 = var5.seekableDuration;
                    var1 = undefined;
                    var3 = var7.bind(var1)(var6, var3);
                    var6 = _closure2_slot27;
                    var3 = var6.set;
                    var3 = var3.bind(var6)(var4);
                    var6 = _closure2_slot7;
                    var3 = null;
                    if(!(var3 != var6)) { _fun0017_ip = 65; continue _fun0017 }
case 85:
                    var3 = _closure2_slot7;
                    var2 = {};
                    var6 = var5.currentTime;
                    var2['currentTime'] = var6;
                    var5 = var5.seekableDuration;
                    var2['seekableDuration'] = var5;
                    var2['progress'] = var4;
                    var2 = var3.bind(var1)(var2);
case 65:
                    return var1;
                }
            };
            var50 = var43.bind(var23)(var27, var32);
            var32 = var23.useCallback;
            var27 = new Array(2);
            var27[0] = var22;
            var27[1] = var11;
            var11 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var4 = _closure2_slot23;
                    var1 = _closure1_slot19;
                    var3 = var1.ENDED;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure2_slot10;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0018_ip = 77; continue _fun0018 }
case 86:
                    var2 = _closure2_slot10;
                    var2 = var2.bind(var1)();
case 77:
                    return var1;
                }
            };
            var48 = var32.bind(var23)(var11, var27);
            var27 = var23.useCallback;
            var11 = new Array(2);
            var11[0] = var22;
            var11[1] = var7;
            var7 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var4 = _closure2_slot23;
                    var1 = _closure1_slot19;
                    var3 = var1.LOADING;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure2_slot4;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0019_ip = 77; continue _fun0019 }
case 86:
                    var2 = _closure2_slot4;
                    var2 = var2.bind(var1)();
case 77:
                    return var1;
                }
            };
            var49 = var27.bind(var23)(var7, var11);
            var11 = var23.useCallback;
            var7 = new Array(2);
            var7[0] = var22;
            var7[1] = var5;
            var5 = function(arg1) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var4 = _closure2_slot23;
                    var1 = _closure1_slot19;
                    var3 = var1.ERRORED;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure2_slot9;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0020_ip = 84; continue _fun0020 }
case 86:
                    var3 = _closure2_slot9;
                    var2 = arg1;
                    var2 = var3.bind(var1)(var2);
case 84:
                    return var1;
                }
            };
            var47 = var11.bind(var23)(var5, var7);
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 17;
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
            var22 = var7 === var5;
            var11 = var23.useLayoutEffect;
            var7 = new Array(1);
            var7[0] = var57;
            var5 = function() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 16;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.isAndroid;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0021_ip = 87; continue _fun0021 }
case 76:
                    return var2;
case 87:
                    var2 = _closure2_slot14;
                    var2 = var2.current;
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0: // try_start_0
                            var3 = _closure3_slot0;
                            var5 = null;
                            var3 = var5 == var3;
                            var2 = var3;
                            if(var3) { _fun0022_ip = 5; continue _fun0022 }
case 74:
                            var3 = _closure3_slot0;
                            var3 = var3.setNativeProps;
                            var2 = var5 == var3;
case 5:
                            if(var2) { _fun0022_ip = 35; continue _fun0022 }
case 26:
                            var3 = _closure3_slot0;
                            var2 = var3.setNativeProps;
                            var1 = {};
                            var4 = true;
                            var1['paused'] = var4;
                            var4 = {};
                            var4['uri'] = var5;
                            var1['src'] = var4;
                            var1 = var2.bind(var3)(var1);
case 35: // try_end0
                            _fun0022_ip = 88; continue _fun0022;
case 89: // catch_target0
                            CatchBlockStart(arg_register=2);
                            var4 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 18;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var4.bind(var1)(var2);
                            var1 = var2.captureException;
                            var1 = var1.bind(var2)(var3);
case 88:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    return var1;
                }
            };
            var5 = var11.bind(var23)(var5, var7);
            var32 = !var22;
            if(!var22) { _fun0002_ip = 90; continue _fun0002 }
case 91:
            var5 = _closure1_slot19;
            var5 = var5.PAUSED;
            var32 = var35 === var5;
case 90:
            if(var32) { _fun0002_ip = 92; continue _fun0002 }
case 93:
            var5 = _closure1_slot19;
            var5 = var5.LOADING;
            var32 = var35 === var5;
case 92:
            if(var32) { _fun0002_ip = 94; continue _fun0002 }
case 95:
            var32 = var3;
case 94:
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
                    _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                        var3 = arg1;
                        var4 = _closure3_slot2;
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var4 = _closure3_slot1;
                        var4 = var4.current;
                        if(!(var3 !== var4)) { _fun0023_ip = 96; continue _fun0023 }
case 3:
                        var4 = _closure3_slot1;
                        var4['current'] = var3;
                        var5 = _closure3_slot0;
                        var4 = null;
                        if(!(var4 != var5)) { _fun0023_ip = 96; continue _fun0023 }
case 2:
                        var2 = _closure3_slot0;
                        var2 = var2.bind(var1)(var3);
case 96:
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
            _closure2_slot37 = var7;
            var5 = _closure1_slot4;
            var23 = var5.useCallback;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var35;
            var2 = function(arg1) {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.isBuffering;
                    if(!var1) { _fun0024_ip = 97; continue _fun0024 }
case 98:
                    var5 = _closure2_slot19;
                    var4 = _closure1_slot19;
                    var4 = var4.LOADING;
                    if(!(var5 !== var4)) { _fun0024_ip = 35; continue _fun0024 }
case 26:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 16;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.isIOS;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0024_ip = 97; continue _fun0024 }
case 35:
                    var4 = _closure2_slot37;
                    var3 = undefined;
                    var2 = true;
                    var2 = var4.bind(var3)(var2);
                    _fun0024_ip = 12; continue _fun0024;
case 97:
                    if(var1) { _fun0024_ip = 12; continue _fun0024 }
case 51:
                    var3 = _closure2_slot37;
                    var2 = undefined;
                    var1 = false;
                    var1 = var3.bind(var2)(var1);
case 12:
                    var1 = undefined;
                    return var1;
                }
            };
            var55 = var23.bind(var5)(var2, var3);
            var23 = var5.useCallback;
            var3 = new Array(1);
            var3[0] = var7;
            var2 = function() {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 16;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isIOS;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0025_ip = 99; continue _fun0025 }
case 100:
                    var3 = _closure2_slot37;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
case 99:
                    return var1;
                }
            };
            var54 = var23.bind(var5)(var2, var3);
            var3 = var5.useCallback;
            var2 = new Array(1);
            var2[0] = var7;
            var1 = function() {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 16;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isIOS;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0026_ip = 99; continue _fun0026 }
case 100:
                    var3 = _closure2_slot37;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
case 99:
                    return var1;
                }
            };
            var53 = var3.bind(var5)(var1, var2);
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 19;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var5 = var1.bind(var4)();
            var23 = var28;
            if(!var23) { _fun0002_ip = 101; continue _fun0002 }
case 102:
            var23 = var41 != var5;
case 101:
            if(!var23) { _fun0002_ip = 103; continue _fun0002 }
case 104:
            var1 = {};
            var3 = _closure1_slot23;
            var2 = 'right';
            var2 = var3.bind(var4)(var5, var2);
            var1['paddingRight'] = var2;
            var2 = 'left';
            var2 = var3.bind(var4)(var5, var2);
            var1['paddingLeft'] = var2;
            var23 = var1;
case 103:
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
            var43 = var15.videoContainer;
            var27 = new Array(1);
            var27[0] = var43;
            var5['style'] = var27;
            var5['onPress'] = var12;
            var8 = !var8;
            var5['accessible'] = var8;
            var58 = _closure1_slot0;
            var8 = _closure1_slot2;
            var27 = 20;
            var12 = var8[var27];
            var12 = var58.bind(var4)(var12);
            var43 = var12.intl;
            var12 = var43.string;
            var8 = var8[var27];
            var8 = var58.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.FlNoSV;
            var8 = var12.bind(var43)(var8);
            var5['accessibilityLabel'] = var8;
            var8 = _closure1_slot19;
            var8 = var8.ERRORED;
            var12 = var35 !== var8;
            if(!var12) { _fun0002_ip = 105; continue _fun0002 }
case 106:
            var43 = _closure1_slot0;
            var58 = _closure1_slot2;
            var8 = 16;
            var8 = var58[var8];
            var43 = var43.bind(var4)(var8);
            var8 = var43.isAndroid;
            var8 = var8.bind(var43)();
            var8 = !var8;
            if(var8) { _fun0002_ip = 107; continue _fun0002 }
case 108:
            var8 = var22;
case 107:
            var12 = var8;
case 105:
            if(!var12) { _fun0002_ip = 109; continue _fun0002 }
case 110:
            var43 = _closure1_slot11;
            var22 = _closure1_slot14;
            var8 = {'mixWithOthers': 'mix', 'ref': null, 'accessible': false, 'importantForAccessibility': 'no-hide-descendants', 'accessibilityRole': 'none'};
            var8['ref'] = var57;
            var57 = var15.video;
            var8['style'] = var57;
            var8['paused'] = var32;
            var8['source'] = var56;
            var8['onBuffer'] = var55;
            var8['onPlaybackStalled'] = var54;
            var8['onPlaybackResume'] = var53;
            var8['onLoad'] = var52;
            var8['onSeek'] = var51;
            var8['onProgress'] = var50;
            var8['onLoadStart'] = var49;
            var8['onEnd'] = var48;
            var8['onError'] = var47;
            var8['onReadyForDisplay'] = var46;
            var8['onVideoTracks'] = var45;
            var8['onLayout'] = var44;
            var44 = 'contain';
            var8['resizeMode'] = var44;
            var12 = var43.bind(var4)(var22, var8);
case 109:
            var8 = new Array(6);
            var8[0] = var12;
            var22 = var41 == var21;
            var12 = undefined;
            if(var22) { _fun0002_ip = 111; continue _fun0002 }
case 112:
            var19 = var19.timestampSec;
            var12 = var21.bind(var4)(var19);
case 111:
            var8[1] = var12;
            if(!var11) { _fun0002_ip = 113; continue _fun0002 }
case 114:
            var21 = _closure1_slot11;
            var19 = _closure1_slot7;
            var12 = {};
            var22 = true;
            var12['animating'] = var22;
            var43 = var15.bufferingSpinner;
            var22 = new Array(2);
            var22[0] = var43;
            if(var28) { _fun0002_ip = 115; continue _fun0002 }
case 116:
            var28 = 'center';
            if(!(var28 !== var39)) { _fun0002_ip = 115; continue _fun0002 }
case 117:
            var28 = {};
            var39 = var41 == var42;
            var43 = undefined;
            if(var39) { _fun0002_ip = 118; continue _fun0002 }
case 119:
            var43 = var42.top;
case 118:
            var44 = var41 != var43;
            var39 = 0;
            if(!var44) { _fun0002_ip = 120; continue _fun0002 }
case 121:
            var39 = var43;
case 120:
            var28['top'] = var39;
            var43 = var41 == var42;
            var39 = undefined;
            if(var43) { _fun0002_ip = 122; continue _fun0002 }
case 123:
            var39 = var42.left;
case 122:
            var41 = var41 != var39;
            var31 = 0;
            if(!var41) { _fun0002_ip = 124; continue _fun0002 }
case 125:
            var31 = var39;
case 124:
            var28['left'] = var31;
            _fun0002_ip = 126; continue _fun0002;
case 115:
            var28 = var15.bufferingSpinnerCentered;
case 126:
            var22[1] = var28;
            var12['style'] = var22;
            var28 = _closure1_slot1;
            var31 = _closure1_slot2;
            var22 = 6;
            var22 = var31[var22];
            var22 = var28.bind(var4)(var22);
            var22 = var22.unsafe_rawColors;
            var22 = var22.WHITE;
            var12['color'] = var22;
            var11 = var21.bind(var4)(var19, var12);
case 113:
            var8[2] = var11;
            var10 = !var10;
            if(!var10) { _fun0002_ip = 127; continue _fun0002 }
case 128:
            var19 = _closure1_slot11;
            var12 = _closure1_slot5;
            var11 = {};
            var21 = var15.loadingContainer;
            var11['style'] = var21;
            var22 = _closure1_slot7;
            var21 = {};
            var28 = true;
            var21['animating'] = var28;
            var21 = var19.bind(var4)(var22, var21);
            var11['children'] = var21;
            var10 = var19.bind(var4)(var12, var11);
case 127:
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
            var19 = var26;
            if(var26) { _fun0002_ip = 129; continue _fun0002 }
case 130:
            var19 = var25;
case 129:
            if(!var19) { _fun0002_ip = 131; continue _fun0002 }
case 132:
            var21 = _closure1_slot12;
            var20 = _closure1_slot5;
            var14 = {};
            var28 = var15.controlsTopBottom;
            var22 = new Array(3);
            var22[0] = var28;
            var28 = var15.controlsTop;
            var22[1] = var28;
            var22[2] = var23;
            var14['style'] = var22;
            if(!var26) { _fun0002_ip = 133; continue _fun0002 }
case 134:
            var31 = _closure1_slot11;
            var39 = _closure1_slot0;
            var41 = _closure1_slot2;
            var22 = 21;
            var22 = var41[var22];
            var22 = var39.bind(var4)(var22);
            var28 = var22.PressableOpacity;
            var22 = {};
            var42 = 'button';
            var22['accessibilityRole'] = var42;
            var42 = var41[var27];
            var42 = var39.bind(var4)(var42);
            var44 = var42.intl;
            var43 = var44.string;
            var42 = var41[var27];
            var42 = var39.bind(var4)(var42);
            var42 = var42.t;
            var42 = var42.bDSZO1;
            var42 = var43.bind(var44)(var42);
            var22['accessibilityLabel'] = var42;
            var22['onPress'] = var38;
            var38 = var15.controlButton;
            var22['style'] = var38;
            var38 = 22;
            var38 = var41[var38];
            var38 = var39.bind(var4)(var38);
            var39 = var38.ClosedCaptionsOutlineIcon;
            var38 = {};
            if(var40) { _fun0002_ip = 135; continue _fun0002 }
case 136:
            var40 = var15.iconDisabled;
            var40 = var40.color;
            _fun0002_ip = 137; continue _fun0002;
case 135:
            var41 = var15.icon;
            var40 = var41.color;
case 137:
            var38['color'] = var40;
            var38 = var31.bind(var4)(var39, var38);
            var22['children'] = var38;
            var26 = var31.bind(var4)(var28, var22);
case 133:
            var22 = new Array(2);
            var22[0] = var26;
            if(!var25) { _fun0002_ip = 138; continue _fun0002 }
case 139:
            var31 = _closure1_slot11;
            var38 = _closure1_slot0;
            var39 = _closure1_slot2;
            var26 = 21;
            var26 = var39[var26];
            var26 = var38.bind(var4)(var26);
            var28 = var26.PressableOpacity;
            var26 = {};
            var40 = 'button';
            var26['accessibilityRole'] = var40;
            var40 = var39[var27];
            var40 = var38.bind(var4)(var40);
            var42 = var40.intl;
            var41 = var42.string;
            var40 = var39[var27];
            var40 = var38.bind(var4)(var40);
            var40 = var40.t;
            var40 = var40.KCzjTi;
            var40 = var41.bind(var42)(var40);
            var26['accessibilityLabel'] = var40;
            var26['onPress'] = var37;
            var37 = var15.controlButton;
            var26['style'] = var37;
            var37 = 23;
            var37 = var39[var37];
            var37 = var38.bind(var4)(var37);
            var38 = var37.TranscriptOutlineIcon;
            var37 = {};
            var39 = var15.iconDisabled;
            var39 = var39.color;
            var37['color'] = var39;
            var37 = var31.bind(var4)(var38, var37);
            var26['children'] = var37;
            var25 = var31.bind(var4)(var28, var26);
case 138:
            var22[1] = var25;
            var14['children'] = var22;
            var19 = var21.bind(var4)(var20, var14);
case 131:
            var14 = new Array(3);
            var14[0] = var19;
            var21 = _closure1_slot12;
            var20 = _closure1_slot5;
            var19 = {};
            var22 = var15.controlsMiddle;
            var19['style'] = var22;
            var31 = _closure1_slot11;
            var40 = _closure1_slot0;
            var37 = _closure1_slot2;
            var25 = 24;
            var22 = var37[var25];
            var22 = var40.bind(var4)(var22);
            var26 = var22.VideoQuestPlayerControlButton;
            var22 = {};
            var28 = _closure1_slot19;
            var28 = var28.ERRORED;
            var28 = var35 === var28;
            var22['disabled'] = var28;
            var28 = 'button';
            var22['accessibilityRole'] = var28;
            var38 = var37[var27];
            var38 = var40.bind(var4)(var38);
            var41 = var38.intl;
            var39 = var41.string;
            var38 = var37[var27];
            var38 = var40.bind(var4)(var38);
            var38 = var38.t;
            var38 = var38.r9s3Uv;
            var38 = var39.bind(var41)(var38);
            var22['accessibilityLabel'] = var38;
            var22['onPress'] = var29;
            var29 = 25;
            var29 = var37[var29];
            var29 = var40.bind(var4)(var29);
            var38 = var29.SkipBackwardIcon;
            var29 = {'color': null, 'width': 16, 'height': 16};
            var39 = var15.icon;
            var39 = var39.color;
            var29['color'] = var39;
            var29 = var31.bind(var4)(var38, var29);
            var22['children'] = var29;
            var26 = var31.bind(var4)(var26, var22);
            var22 = new Array(3);
            var22[0] = var26;
            var26 = var37[var25];
            var26 = var40.bind(var4)(var26);
            var29 = var26.VideoQuestPlayerControlButton;
            var26 = {};
            var26['accessibilityRole'] = var28;
            var38 = var37[var27];
            var38 = var40.bind(var4)(var38);
            var39 = var38.intl;
            var38 = var39.string;
            var37 = var37[var27];
            var37 = var40.bind(var4)(var37);
            var37 = var37.t;
            var37 = var37.RscU7I;
            var37 = var38.bind(var39)(var37);
            var26['accessibilityLabel'] = var37;
            var26['onPress'] = var36;
            if(var34) { _fun0002_ip = 140; continue _fun0002 }
case 141:
            var34 = _closure1_slot19;
            var34 = var34.ERRORED;
            if(!(var35 !== var34)) { _fun0002_ip = 140; continue _fun0002 }
case 142:
            var35 = _closure1_slot11;
            var36 = _closure1_slot0;
            var37 = _closure1_slot2;
            if(var32) { _fun0002_ip = 143; continue _fun0002 }
case 144:
            var32 = 28;
            var32 = var37[var32];
            var32 = var36.bind(var4)(var32);
            var34 = var32.PauseIcon;
            _fun0002_ip = 145; continue _fun0002;
case 143:
            var32 = 27;
            var32 = var37[var32];
            var32 = var36.bind(var4)(var32);
            var34 = var32.PlayIcon;
case 145:
            var32 = {};
            var36 = 'lg';
            var32['size'] = var36;
            var32 = var35.bind(var4)(var34, var32);
            _fun0002_ip = 146; continue _fun0002;
case 140:
            var36 = _closure1_slot11;
            var35 = _closure1_slot0;
            var37 = _closure1_slot2;
            var34 = 26;
            var34 = var37[var34];
            var34 = var35.bind(var4)(var34);
            var35 = var34.RetryIcon;
            var34 = {};
            var37 = 'lg';
            var34['size'] = var37;
            var32 = var36.bind(var4)(var35, var34);
case 146:
            var26['children'] = var32;
            var26 = var31.bind(var4)(var29, var26);
            var22[1] = var26;
            var29 = _closure1_slot11;
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var25 = var32[var25];
            var25 = var31.bind(var4)(var25);
            var26 = var25.VideoQuestPlayerControlButton;
            var25 = {};
            var25['disabled'] = var33;
            var25['accessibilityRole'] = var28;
            var33 = var32[var27];
            var33 = var31.bind(var4)(var33);
            var35 = var33.intl;
            var34 = var35.string;
            var33 = var32[var27];
            var33 = var31.bind(var4)(var33);
            var33 = var33.t;
            var33 = var33.zWDcNP;
            var33 = var34.bind(var35)(var33);
            var25['accessibilityLabel'] = var33;
            var25['onPress'] = var30;
            var30 = 29;
            var30 = var32[var30];
            var30 = var31.bind(var4)(var30);
            var31 = var30.SkipForwardIcon;
            var30 = {'color': null, 'width': 16, 'height': 16};
            var32 = var15.icon;
            var32 = var32.color;
            var30['color'] = var32;
            var30 = var29.bind(var4)(var31, var30);
            var25['children'] = var30;
            var25 = var29.bind(var4)(var26, var25);
            var22[2] = var25;
            var19['children'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            var14[1] = var19;
            if(!var18) { _fun0002_ip = 147; continue _fun0002 }
case 148:
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
case 147:
            var14[2] = var18;
            var10['children'] = var14;
            var10 = var12.bind(var4)(var11, var10);
            var8[4] = var10;
            if(!var9) { _fun0002_ip = 149; continue _fun0002 }
case 150:
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
case 149:
            var8[5] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var5.bind(var8)(var2);
    var5 = 31;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/native/AdVideoPlayer.tsx';
    var5 = var6.bind(var7)(var5);
    var3['PlayerState'] = var4;
    var3['AdVideoPlayer'] = var2;
    return var1;
})();