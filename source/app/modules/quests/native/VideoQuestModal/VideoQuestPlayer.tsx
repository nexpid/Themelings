// app/modules/quests/native/VideoQuestModal/VideoQuestPlayer.tsx
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
        var1 = _closure1_slot15;
        var1 = var1[var5];
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot25 = var1;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.QuestsExperimentLocations;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.AppStates;
    var _closure1_slot11 = var5;
    var4 = var4.ComponentActions;
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.jsx;
    var _closure1_slot13 = var5;
    var4 = var4.jsxs;
    var _closure1_slot14 = var4;
    var4 = {};
    var11 = 8;
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
    var _closure1_slot15 = var4;
    var5 = var8.memo;
    var4 = 9;
    var4 = var7[var4];
    var4 = var12.bind(var1)(var4);
    var4 = var5.bind(var8)(var4);
    var _closure1_slot16 = var4;
    var4 = {};
    var5 = 'function hasVideoEnded_VideoQuestPlayerTsx1(currentTime,videoDuration){return currentTime>=videoDuration-1;}';
    var4['code'] = var5;
    var _closure1_slot17 = var4;
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
        var2 = 3281537893520.0;
        var1['__workletHash'] = var2;
        var2 = _closure1_slot17;
        var1['__initData'] = var2;
        return var1;
    };
    var10 = var4.bind(var1)();
    var _closure1_slot18 = var10;
    var5 = {};
    var4 = 'function VideoQuestPlayerTsx2(currentTime,maxTimestamp,videoDuration,isQuestCompleted){const{hasVideoEnded}=this.__closure;return!hasVideoEnded(currentTime,videoDuration)&&(isQuestCompleted||currentTime<=maxTimestamp-1);}';
    var5['code'] = var4;
    var4 = function _(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var2 = arg4;
            var5 = _closure1_slot18;
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
    var9 = 6684695599942.0;
    var4['__workletHash'] = var9;
    var4['__initData'] = var5;
    var _closure1_slot19 = var4;
    var4 = 10;
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
    var17 = 11;
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
    var10 = {'height': 1, 'backgroundColor': null, 'shadowOffset': null, 'shadowRadius': 6, 'shadowOpacity': 1, 'elevation': 5, 'shadowColor': '#FFFFFF'};
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.WHITE;
    var10['backgroundColor'] = var13;
    var13 = {'width': 0, 'height': 0};
    var10['shadowOffset'] = var13;
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
    var _closure1_slot20 = var4;
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
    var _closure1_slot21 = var4;
    var5 = {};
    var9 = 'function VideoQuestPlayerTsx3(){const{hasLoaded,showControls,playerState,PlayerState,isVideoEnded,externallyPaused}=this.__closure;return hasLoaded&&(showControls.get()||playerState===PlayerState.PAUSED||playerState===PlayerState.ENDED||playerState===PlayerState.ERRORED||isVideoEnded||externallyPaused);}';
    var5['code'] = var9;
    var _closure1_slot22 = var5;
    var5 = {};
    var9 = "function VideoQuestPlayerTsx4(){const{shouldShowControls,withSpring,SUBTLE_SPRING}=this.__closure;const show=shouldShowControls();return{opacity:withSpring(show?1:0,SUBTLE_SPRING),pointerEvents:show?'auto':'none'};}";
    var5['code'] = var9;
    var _closure1_slot23 = var5;
    var5 = {};
    var9 = 'function VideoQuestPlayerTsx5(){const{withTiming,progress,timingFast}=this.__closure;return{width:withTiming(progress.get()*100+"%",timingFast,\'animate-always\')};}';
    var5['code'] = var9;
    var _closure1_slot24 = var5;
    var5 = var8.memo;
    var2 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var7 = var1.style;
            var13 = var1.onLoad;
            var _closure2_slot0 = var13;
            var21 = var1.onEnd;
            var _closure2_slot1 = var21;
            var25 = var1.onToggleFullscreen;
            var _closure2_slot2 = var25;
            var15 = var1.orientation;
            var _closure2_slot3 = var15;
            var41 = var1.contentInsets;
            var38 = var1.handleToggleCaptions;
            var37 = var1.handleOpenTranscript;
            var29 = var1.isFullscreen;
            var4 = var1.externallyPaused;
            var _closure2_slot4 = var4;
            var40 = var1.captionsEnabled;
            var5 = undefined;
            if(!(var40 === var5)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var40 = false;
case 6:
            var12 = var1.sourceQuestContent;
            var26 = var1.hasCaptionAsset;
            if(!(var26 === var5)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var26 = true;
case 8:
            var23 = var1.hasTranscriptAsset;
            if(!(var23 === var5)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var23 = true;
case 10:
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var _closure2_slot12 = var5;
            var _closure2_slot13 = var5;
            var _closure2_slot14 = var5;
            var _closure2_slot15 = var5;
            var _closure2_slot16 = var5;
            var _closure2_slot17 = var5;
            var _closure2_slot18 = var5;
            var _closure2_slot19 = var5;
            var _closure2_slot20 = var5;
            var _closure2_slot21 = var5;
            var _closure2_slot22 = var5;
            var _closure2_slot23 = var5;
            var _closure2_slot24 = var5;
            var _closure2_slot25 = var5;
            var _closure2_slot26 = var5;
            var _closure2_slot27 = var5;
            var _closure2_slot28 = var5;
            var _closure2_slot29 = var5;
            var _closure2_slot30 = var5;
            var _closure2_slot31 = var5;
            var _closure2_slot32 = var5;
            var _closure2_slot33 = var5;
            var _closure2_slot34 = var5;
            var _closure2_slot35 = var5;
            var _closure2_slot36 = var5;
            var _closure2_slot37 = var5;
            var _closure2_slot38 = var5;
            var _closure2_slot39 = var5;
            var _closure2_slot40 = var5;
            var _closure2_slot41 = var5;
            var _closure2_slot42 = var5;
            var _closure2_slot43 = var5;
            var _closure2_slot44 = var5;
            var _closure2_slot45 = var5;
            var _closure2_slot46 = var5;
            var _closure2_slot47 = var5;
            var _closure2_slot48 = var5;
            var _closure2_slot49 = var5;
            var _closure2_slot50 = var5;
            var1 = _closure1_slot20;
            var16 = var1.bind(var5)();
            var6 = _closure1_slot4;
            var3 = var6.useRef;
            var1 = null;
            var55 = var3.bind(var6)(var1);
            _closure2_slot5 = var55;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 12;
            var3 = var8[var3];
            var9 = var6.bind(var5)(var3);
            var3 = var9.useVideoQuestModalContext;
            var3 = var3.bind(var9)();
            var39 = var3.quest;
            _closure2_slot6 = var39;
            var24 = var3.videoSessionId;
            var3 = 13;
            var3 = var8[var3];
            var6 = var6.bind(var5)(var3);
            var3 = var6.useQuestTaskDetails;
            var48 = var3.bind(var6)(var39);
            _closure2_slot7 = var48;
            var6 = var39.userStatus;
            var8 = var1 == var6;
            var3 = undefined;
            if(var8) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var3 = var6.completedAt;
case 12:
            var52 = var1 != var3;
            _closure2_slot8 = var52;
            var10 = _closure1_slot4;
            var8 = var10.useMemo;
            var6 = new Array(1);
            var6[0] = var39;
            var3 = function() {
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 14;
                var3 = var7[var1];
                var6 = undefined;
                var5 = var2.bind(var6)(var3);
                var4 = var5.getQuestAsset;
                var3 = _closure2_slot6;
                var1 = var7[var1];
                var1 = var2.bind(var6)(var1);
                var1 = var1.QuestAssetType;
                var10 = var1.VIDEO_PLAYER_VIDEO;
                var8 = true;
                var12 = var5;
                var11 = var3;
                var9 = undefined;
                var1 = var12[var4](var11, var10, var9, var8, var7);
                return var1;
            };
            var8 = var8.bind(var10)(var3, var6);
            _closure2_slot9 = var8;
            var9 = var10.useMemo;
            var6 = new Array(1);
            var6[0] = var39;
            var3 = function() {
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 14;
                var3 = var7[var1];
                var6 = undefined;
                var5 = var2.bind(var6)(var3);
                var4 = var5.getQuestAsset;
                var3 = _closure2_slot6;
                var1 = var7[var1];
                var1 = var2.bind(var6)(var1);
                var1 = var1.QuestAssetType;
                var10 = var1.VIDEO_PLAYER_VIDEO_HLS;
                var8 = true;
                var12 = var5;
                var11 = var3;
                var9 = undefined;
                var1 = var12[var4](var11, var10, var9, var8, var7);
                return var1;
            };
            var28 = var9.bind(var10)(var3, var6);
            _closure2_slot10 = var28;
            var6 = var1 == var28;
            var3 = undefined;
            if(var6) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var3 = var28.url;
case 14:
            if(!(var1 == var3)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 14;
            var3 = var9[var3];
            var3 = var6.bind(var5)(var3);
            var3 = var3.QuestAssetType;
            var19 = var3.VIDEO_PLAYER_VIDEO;
            _fun0002_ip = 18; continue _fun0002;
case 16:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 14;
            var3 = var9[var3];
            var3 = var6.bind(var5)(var3);
            var3 = var3.QuestAssetType;
            var19 = var3.VIDEO_PLAYER_VIDEO_HLS;
case 18:
            var11 = _closure1_slot4;
            var6 = var11.useState;
            var3 = var48.targetSeconds;
            var3 = var6.bind(var11)(var3);
            var6 = _closure1_slot3;
            var51 = 2;
            var3 = var6.bind(var5)(var3, var51);
            var31 = 0;
            var45 = var3[var31];
            _closure2_slot11 = var45;
            var49 = 1;
            var3 = var3[var49];
            _closure2_slot12 = var3;
            var58 = var48.targetSeconds;
            _closure2_slot13 = var58;
            var10 = _closure1_slot9;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.setVideoProgress;
                return var1;
            };
            var47 = var10.bind(var5)(var3);
            _closure2_slot14 = var47;
            var9 = _closure1_slot0;
            var17 = _closure1_slot2;
            var3 = 15;
            var3 = var17[var3];
            var3 = var9.bind(var5)(var3);
            var9 = var3.shallow;
            var3 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.videoProgress;
                    var1 = _closure2_slot6;
                    var1 = var1.id;
                    var1 = var2[var1];
                    var2 = null;
                    if(!(var2 == var1)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var2 = {};
                    var4 = _closure2_slot7;
                    var4 = var4.progressSeconds;
                    var2['timestampSec'] = var4;
                    var4 = _closure2_slot11;
                    var2['duration'] = var4;
                    var3 = _closure2_slot7;
                    var3 = var3.progressSeconds;
                    var2['maxTimestampSec'] = var3;
                    var1 = var2;
case 19:
                    return var1;
                }
            };
            var22 = var10.bind(var5)(var3, var9);
            _closure2_slot15 = var22;
            var9 = var11.useState;
            var3 = _closure1_slot21;
            var3 = var3.LOADING;
            var3 = var9.bind(var11)(var3);
            var3 = var6.bind(var5)(var3, var51);
            var35 = var3[var31];
            _closure2_slot16 = var35;
            var3 = var3[var49];
            _closure2_slot17 = var3;
            var3 = var11.useRef;
            var10 = false;
            var3 = var3.bind(var11)(var10);
            _closure2_slot18 = var3;
            var3 = var11.useState;
            var3 = var3.bind(var11)(var10);
            var3 = var6.bind(var5)(var3, var51);
            var9 = var3[var31];
            _closure2_slot19 = var9;
            var3 = var3[var49];
            _closure2_slot20 = var3;
            var6 = var11.useRef;
            var3 = var48.progressSeconds;
            var3 = var6.bind(var11)(var3);
            _closure2_slot21 = var3;
            var34 = var9;
            if(!var34) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var3 = _closure1_slot21;
            var3 = var3.ENDED;
            var34 = var35 === var3;
case 21:
            if(!var34) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var11 = _closure1_slot18;
            var6 = var22.timestampSec;
            var3 = var22.duration;
            var34 = var11.bind(var5)(var6, var3);
case 23:
            _closure2_slot22 = var34;
            var32 = _closure1_slot0;
            var27 = _closure1_slot2;
            var18 = 16;
            var3 = var27[var18];
            var6 = var32.bind(var5)(var3);
            var3 = var6.useSharedValue;
            var33 = var3.bind(var6)(var10);
            _closure2_slot23 = var33;
            var3 = function W() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot19;
                    if(!var1) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                    var4 = _closure2_slot23;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0004_ip = 4; continue _fun0004 }
case 27:
                    var5 = _closure2_slot16;
                    var4 = _closure1_slot21;
                    var4 = var4.PAUSED;
                    var2 = var5 === var4;
case 4:
                    if(var2) { _fun0004_ip = 28; continue _fun0004 }
case 2:
                    var5 = _closure2_slot16;
                    var4 = _closure1_slot21;
                    var4 = var4.ENDED;
                    var2 = var5 === var4;
case 28:
                    if(var2) { _fun0004_ip = 29; continue _fun0004 }
case 19:
                    var5 = _closure2_slot16;
                    var4 = _closure1_slot21;
                    var4 = var4.ERRORED;
                    var2 = var5 === var4;
case 29:
                    if(var2) { _fun0004_ip = 30; continue _fun0004 }
case 6:
                    var2 = _closure2_slot22;
case 30:
                    if(var2) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                    var2 = _closure2_slot4;
case 31:
                    var1 = var2;
case 25:
                    return var1;
                }
            };
            var6 = {};
            var6['hasLoaded'] = var9;
            var6['showControls'] = var33;
            var6['playerState'] = var35;
            var9 = _closure1_slot21;
            var6['PlayerState'] = var9;
            var6['isVideoEnded'] = var34;
            var6['externallyPaused'] = var4;
            var3['__closure'] = var6;
            var6 = 9198261161185.0;
            var3['__workletHash'] = var6;
            var6 = _closure1_slot22;
            var3['__initData'] = var6;
            _closure2_slot24 = var3;
            var6 = var27[var18];
            var11 = var32.bind(var5)(var6);
            var9 = var11.useAnimatedStyle;
            var6 = function K() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot24;
                    var8 = undefined;
                    var3 = var1.bind(var8)();
                    var1 = {};
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 17;
                    var4 = var6[var4];
                    var6 = var5.bind(var8)(var4);
                    var5 = var6.withSpring;
                    var4 = 0;
                    if(!var3) { _fun0005_ip = 33; continue _fun0005 }
case 34:
                    var4 = 1;
case 33:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 18;
                    var2 = var9[var2];
                    var2 = var7.bind(var8)(var2);
                    var2 = var2.SUBTLE_SPRING;
                    var2 = var5.bind(var6)(var4, var2);
                    var1['opacity'] = var2;
                    var2 = 'none';
                    if(!var3) { _fun0005_ip = 6; continue _fun0005 }
case 35:
                    var2 = 'auto';
case 6:
                    var1['pointerEvents'] = var2;
                    return var1;
                }
            };
            var17 = {};
            var17['shouldShowControls'] = var3;
            var20 = 17;
            var20 = var27[var20];
            var20 = var32.bind(var5)(var20);
            var20 = var20.withSpring;
            var17['withSpring'] = var20;
            var20 = 18;
            var20 = var27[var20];
            var20 = var32.bind(var5)(var20);
            var20 = var20.SUBTLE_SPRING;
            var17['SUBTLE_SPRING'] = var20;
            var6['__closure'] = var17;
            var17 = 6174625876255.0;
            var6['__workletHash'] = var17;
            var17 = _closure1_slot23;
            var6['__initData'] = var17;
            var20 = var9.bind(var11)(var6);
            var9 = var3.bind(var5)();
            var3 = var27[var18];
            var6 = var32.bind(var5)(var3);
            var3 = var6.useSharedValue;
            var53 = var3.bind(var6)(var31);
            _closure2_slot25 = var53;
            var3 = var27[var18];
            var11 = var32.bind(var5)(var3);
            var6 = var11.useAnimatedStyle;
            var3 = function Z() {
                var1 = {};
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 19;
                var2 = var8[var2];
                var4 = undefined;
                var6 = var7.bind(var4)(var2);
                var5 = var6.withTiming;
                var3 = _closure2_slot25;
                var2 = var3.get;
                var3 = var2.bind(var3)();
                var2 = 100;
                var3 = var2 * var3;
                var2 = 20;
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
            var17 = {};
            var30 = 19;
            var30 = var27[var30];
            var30 = var32.bind(var5)(var30);
            var30 = var30.withTiming;
            var17['withTiming'] = var30;
            var17['progress'] = var53;
            var30 = 20;
            var30 = var27[var30];
            var30 = var32.bind(var5)(var30);
            var30 = var30.timingFast;
            var17['timingFast'] = var30;
            var3['__closure'] = var17;
            var17 = 4647711667921.0;
            var3['__workletHash'] = var17;
            var17 = _closure1_slot24;
            var3['__initData'] = var17;
            var17 = var6.bind(var11)(var3);
            var11 = _closure1_slot4;
            var6 = var11.useRef;
            var3 = -1;
            var3 = var6.bind(var11)(var3);
            _closure2_slot26 = var3;
            var30 = var11.useCallback;
            var6 = new Array(1);
            var6[0] = var33;
            var3 = function(arg1) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var1 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var11 = 0;
                        var4 = copyRestArgs(var11);
                        var1 = global;
                        var7 = var1.clearTimeout;
                        var3 = _closure2_slot26;
                        var6 = var3.current;
                        var3 = undefined;
                        var6 = var7.bind(var3)(var6);
                        var8 = _closure2_slot23;
                        var7 = var8.set;
                        var6 = true;
                        var6 = var7.bind(var8)(var6);
                        var2 = _closure2_slot26;
                        var7 = var1.setTimeout;
                        var6 = function() {
                            var3 = _closure2_slot23;
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
                        if(!(var2 == var6)) { _fun0006_ip = 36; continue _fun0006 }
case 37:
                        return var3;
case 36:
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
            var42 = var30.bind(var11)(var3, var6);
            var6 = _closure1_slot1;
            var3 = 21;
            var3 = var27[var3];
            var6 = var6.bind(var5)(var3);
            var3 = {};
            var3['duration'] = var45;
            var3['isQuestCompleted'] = var52;
            var3['playerState'] = var35;
            var27 = var39.id;
            var3['questId'] = var27;
            var3['videoSessionId'] = var24;
            var3['videoAssetId'] = var19;
            var3['sourceQuestContent'] = var12;
            var3 = var6.bind(var5)(var3);
            var6 = var3.handleBufferAnalytics;
            var43 = var3.handleEndAnalytics;
            _closure2_slot27 = var43;
            var12 = var3.handleErrorAnalytics;
            _closure2_slot28 = var12;
            var50 = var3.handleLoadAnalytics;
            _closure2_slot29 = var50;
            var19 = var3.handleLoadStartAnalytics;
            _closure2_slot30 = var19;
            var30 = var3.handlePausePlaybackAnalytics;
            _closure2_slot31 = var30;
            var32 = var3.handleProgressAnalytics;
            _closure2_slot32 = var32;
            var36 = var3.handleReadyForDisplayAnalytics;
            _closure2_slot33 = var36;
            var27 = var3.handleResumePlaybackAnalytics;
            _closure2_slot34 = var27;
            var24 = var3.handleSeekAnalytics;
            _closure2_slot35 = var24;
            var3 = var11.useRef;
            var3 = var3.bind(var11)(var1);
            _closure2_slot36 = var3;
            var60 = var39.id;
            _closure2_slot37 = var60;
            var11 = var39.config;
            var11 = var11.messages;
            var59 = var11.gameTitle;
            _closure2_slot38 = var59;
            var11 = var1 == var28;
            var57 = undefined;
            if(var11) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var57 = var28.url;
case 38:
            if(!(var1 == var57)) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var44 = var1 == var8;
            var11 = undefined;
            if(var44) { _fun0002_ip = 42; continue _fun0002 }
case 43:
            var11 = var8.url;
case 42:
            var57 = var11;
case 40:
            _closure2_slot39 = var57;
            var44 = _closure1_slot0;
            var46 = _closure1_slot2;
            var11 = 22;
            var11 = var46[var11];
            var46 = var44.bind(var5)(var11);
            var44 = var46.getDefaultWatchVideoTask;
            var11 = var39.config;
            var11 = var44.bind(var46)(var11);
            var44 = var1 == var11;
            var56 = undefined;
            if(var44) { _fun0002_ip = 44; continue _fun0002 }
case 45:
            var11 = var11.messages;
            var56 = var11.videoTitle;
case 44:
            _closure2_slot40 = var56;
            var44 = var1 == var28;
            var11 = undefined;
            if(var44) { _fun0002_ip = 46; continue _fun0002 }
case 47:
            var11 = var28.url;
case 46:
            var44 = var1 != var11;
            var11 = 'mp4';
            if(!var44) { _fun0002_ip = 48; continue _fun0002 }
case 49:
            var11 = 'hls';
case 48:
            _closure2_slot41 = var11;
            var46 = _closure1_slot4;
            var54 = var46.useEffect;
            var44 = new Array(6);
            var44[0] = var60;
            var44[1] = var59;
            var44[2] = var58;
            var44[3] = var57;
            var44[4] = var56;
            var44[5] = var11;
            var11 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot5;
                    var2 = var2.current;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0007_ip = 30; continue _fun0007 }
case 50:
                    var2 = _closure2_slot39;
                    if(!(var3 != var2)) { _fun0007_ip = 30; continue _fun0007 }
case 27:
                    var2 = _closure2_slot39;
                    var3 = var2.length;
                    var2 = 0;
                    if(!(var2 !== var3)) { _fun0007_ip = 30; continue _fun0007 }
case 51:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var7 = 23;
                    var3 = var3[var7];
                    var6 = undefined;
                    var5 = var4.bind(var6)(var3);
                    var4 = var5.getVideoQoEMetricsConfig;
                    var3 = {};
                    var8 = _closure1_slot10;
                    var8 = var8.VIDEO_MODAL_MOBILE;
                    var3['location'] = var8;
                    var3 = var4.bind(var5)(var3);
                    var3 = var3.externalAnalyticsEnabled;
                    if(var3) { _fun0007_ip = 52; continue _fun0007 }
case 30:
                    var3 = undefined;
                    return var3;
case 52:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var3 = 24;
                    var3 = var2[var3];
                    var5 = var4.bind(var6)(var3);
                    var3 = var5.getConstants;
                    var3 = var3.bind(var5)();
                    var5 = {};
                    var8 = _closure2_slot5;
                    var8 = var8.current;
                    var5['videoRef'] = var8;
                    var8 = 'quests';
                    var5['feature'] = var8;
                    var9 = var3.Version;
                    var5['appVersion'] = var9;
                    var3 = var3.ReleaseChannel;
                    var5['releaseChannel'] = var3;
                    var3 = {};
                    var9 = _closure2_slot39;
                    var3['contentId'] = var9;
                    var9 = _closure2_slot41;
                    var3['videoStreamType'] = var9;
                    var3['contentType'] = var8;
                    var9 = _closure2_slot13;
                    var8 = 1000;
                    var8 = var8 * var9;
                    var3['durationMs'] = var8;
                    var8 = _closure2_slot40;
                    var3['title'] = var8;
                    var8 = _closure2_slot37;
                    var3['questId'] = var8;
                    var8 = _closure2_slot38;
                    var3['gameName'] = var8;
                    var5['contentMetadata'] = var3;
                    var3 = _closure2_slot36;
                    var2 = var2[var7];
                    var2 = var4.bind(var6)(var2);
                    var2 = var2.MobileMuxWrapper;
                    var4 = var2.prototype;
                    var4 = Object.create(var4, {constructor: {value: var2}});
                    var11 = var4;
                    var10 = var5;
                    var2 = new var11[var2](var10, var9);
                    var2 = var2 instanceof Object ? var2 : var4;
                    var3['current'] = var2;
                    var1 = _closure2_slot36;
                    var2 = var1.current;
                    var1 = var2.initialize;
                    var1 = var1.bind(var2)();
                    var1 = function() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var2 = _closure2_slot36;
                            var3 = var2.current;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0008_ip = 53; continue _fun0008 }
case 50:
                            var3 = _closure2_slot36;
                            var5 = var3.current;
                            var4 = var5.onProgress;
                            var3 = _closure2_slot21;
                            var3 = var3.current;
                            var3 = var4.bind(var5)(var3);
                            var3 = _closure2_slot36;
                            var4 = var3.current;
                            var3 = var4.destroy;
                            var3 = var3.bind(var4)();
                            var1 = _closure2_slot36;
                            var1['current'] = var2;
case 53:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    return var1;
                }
            };
            var11 = var54.bind(var46)(var11, var44);
            var11 = var46.useState;
            var44 = var11.bind(var46)(var10);
            var11 = _closure1_slot3;
            var44 = var11.bind(var5)(var44, var51);
            var11 = var44[var31];
            var44 = var44[var49];
            _closure2_slot42 = var44;
            var49 = var46.useCallback;
            var44 = new Array(1);
            var44[0] = var36;
            var36 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure2_slot33;
                    var1 = undefined;
                    var3 = var3.bind(var1)();
                    var3 = _closure2_slot36;
                    var4 = var3.current;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0009_ip = 54; continue _fun0009 }
case 55:
                    var3 = var4.onReadyForDisplay;
                    var3 = var3.bind(var4)();
case 54:
                    var3 = _closure2_slot42;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var44 = var49.bind(var46)(var36, var44);
            var49 = var46.useCallback;
            var36 = new Array(4);
            var36[0] = var52;
            var51 = var22.timestampSec;
            var36[1] = var51;
            var36[2] = var50;
            var36[3] = var13;
            var13 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = arg1;
                    var7 = var3.duration;
                    var9 = var3.videoTracks;
                    var8 = var3.trackId;
                    var4 = var3.naturalSize;
                    var5 = _closure2_slot12;
                    var1 = undefined;
                    var5 = var5.bind(var1)(var7);
                    var6 = _closure2_slot20;
                    var5 = true;
                    var5 = var6.bind(var1)(var5);
                    var5 = _closure2_slot29;
                    var5 = var5.bind(var1)();
                    var5 = _closure2_slot36;
                    var10 = var5.current;
                    var5 = null;
                    if(!(var5 != var10)) { _fun0010_ip = 56; continue _fun0010 }
case 19:
                    var6 = var10.onLoad;
                    var6 = var6.bind(var10)(var7);
case 56:
                    if(!(var5 != var4)) { _fun0010_ip = 57; continue _fun0010 }
case 58:
                    var6 = _closure2_slot36;
                    var11 = var6.current;
                    if(!(var5 != var11)) { _fun0010_ip = 57; continue _fun0010 }
case 30:
                    var10 = var11.updateVideoSourceDimensions;
                    var6 = var4.width;
                    var4 = var4.height;
                    var4 = var10.bind(var11)(var6, var4);
case 57:
                    var4 = var5 != var9;
                    if(!var4) { _fun0010_ip = 59; continue _fun0010 }
case 60:
                    var10 = var9.length;
                    var6 = 0;
                    var4 = var10 > var6;
case 59:
                    if(!var4) { _fun0010_ip = 61; continue _fun0010 }
case 62:
                    var4 = var5 != var8;
case 61:
                    if(!var4) { _fun0010_ip = 63; continue _fun0010 }
case 64:
                    var10 = var8.length;
                    var6 = 0;
                    var4 = var10 > var6;
case 63:
                    if(!var4) { _fun0010_ip = 65; continue _fun0010 }
case 66:
                    var4 = _closure2_slot36;
                    var6 = var4.current;
                    if(!(var5 != var6)) { _fun0010_ip = 65; continue _fun0010 }
case 67:
                    var4 = var6.onVideoTrackChange;
                    var4 = var4.bind(var6)(var8, var9);
case 65:
                    var4 = _closure2_slot5;
                    var4 = var4.current;
                    if(!(var5 != var4)) { _fun0010_ip = 68; continue _fun0010 }
case 69:
                    var4 = _closure2_slot15;
                    var8 = var4.timestampSec;
                    var6 = _closure2_slot8;
                    var4 = !var6;
                    if(var6) { _fun0010_ip = 70; continue _fun0010 }
case 71:
                    var6 = 5;
                    var4 = var8 > var6;
case 70:
                    if(!var4) { _fun0010_ip = 72; continue _fun0010 }
case 73:
                    var6 = 3;
                    var6 = var7 - var6;
                    var4 = var8 < var6;
case 72:
                    if(!var4) { _fun0010_ip = 74; continue _fun0010 }
case 75:
                    var4 = _closure2_slot5;
                    var7 = var4.current;
                    var6 = var7.seek;
                    var4 = 1;
                    var4 = var8 - var4;
                    var4 = var6.bind(var7)(var4);
case 74:
                    var6 = _closure2_slot17;
                    var4 = _closure1_slot21;
                    var4 = var4.PLAYING;
                    var4 = var6.bind(var1)(var4);
                    var4 = _closure2_slot0;
                    if(!(var5 != var4)) { _fun0010_ip = 68; continue _fun0010 }
case 76:
                    var2 = _closure2_slot0;
                    var2 = var2.bind(var1)(var3);
case 68:
                    return var1;
                }
            };
            var50 = var49.bind(var46)(var13, var36);
            var49 = var46.useCallback;
            var36 = new Array(4);
            var36[0] = var35;
            var36[1] = var30;
            var36[2] = var27;
            var36[3] = var34;
            var13 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = arguments[0];
                    var1 = undefined;
                    if(!(var2 === var1)) { _fun0011_ip = 77; continue _fun0011 }
case 78:
                    var2 = {};
case 77:
                    var2 = var2.shouldRestartVideo;
                    if(!(var2 === var1)) { _fun0011_ip = 79; continue _fun0011 }
case 80:
                    var2 = true;
case 79:
                    var6 = _closure2_slot16;
                    var5 = _closure1_slot21;
                    var5 = var5.ERRORED;
                    if(!(var6 !== var5)) { _fun0011_ip = 73; continue _fun0011 }
case 2:
                    var5 = _closure2_slot22;
                    if(!var5) { _fun0011_ip = 81; continue _fun0011 }
case 82:
                    if(var2) { _fun0011_ip = 73; continue _fun0011 }
case 81:
                    var5 = _closure2_slot16;
                    var2 = _closure1_slot21;
                    var2 = var2.PAUSED;
                    if(!(var5 !== var2)) { _fun0011_ip = 83; continue _fun0011 }
case 84:
                    var5 = _closure2_slot16;
                    var2 = _closure1_slot21;
                    var2 = var2.LOADING;
                    if(!(var5 !== var2)) { _fun0011_ip = 83; continue _fun0011 }
case 37:
                    var5 = _closure2_slot16;
                    var2 = _closure1_slot21;
                    var2 = var2.PLAYING;
                    if(!(var5 === var2)) { _fun0011_ip = 85; continue _fun0011 }
case 86:
                    var5 = _closure2_slot17;
                    var2 = _closure1_slot21;
                    var2 = var2.PAUSED;
                    var2 = var5.bind(var1)(var2);
                    var2 = _closure2_slot31;
                    var2 = var2.bind(var1)();
                    var2 = _closure2_slot36;
                    var5 = var2.current;
                    var2 = null;
                    if(!(var2 != var5)) { _fun0011_ip = 85; continue _fun0011 }
case 87:
                    var2 = var5.onPause;
                    var2 = var2.bind(var5)();
                    _fun0011_ip = 85; continue _fun0011;
case 83:
                    var5 = _closure2_slot17;
                    var2 = _closure1_slot21;
                    var2 = var2.PLAYING;
                    var2 = var5.bind(var1)(var2);
                    var2 = _closure2_slot34;
                    var2 = var2.bind(var1)();
                    var2 = _closure2_slot36;
                    var5 = var2.current;
                    var2 = null;
                    if(!(var2 != var5)) { _fun0011_ip = 85; continue _fun0011 }
case 88:
                    var2 = var5.onPlay;
                    var2 = var2.bind(var5)();
                    _fun0011_ip = 85; continue _fun0011;
case 73:
                    var2 = _closure2_slot5;
                    var7 = var2.current;
                    var2 = null;
                    if(!(var2 != var7)) { _fun0011_ip = 89; continue _fun0011 }
case 90:
                    var6 = var7.seek;
                    var5 = 0;
                    var5 = var6.bind(var7)(var5);
case 89:
                    var5 = _closure2_slot17;
                    var4 = _closure1_slot21;
                    var4 = var4.PLAYING;
                    var4 = var5.bind(var1)(var4);
                    var4 = _closure2_slot34;
                    var4 = var4.bind(var1)();
                    var3 = _closure2_slot36;
                    var3 = var3.current;
                    if(!(var2 != var3)) { _fun0011_ip = 85; continue _fun0011 }
case 91:
                    var2 = var3.onPlay;
                    var2 = var2.bind(var3)();
case 85:
                    return var1;
                }
            };
            var13 = var49.bind(var46)(var13, var36);
            _closure2_slot43 = var13;
            var51 = var46.useCallback;
            var49 = new Array(1);
            var49[0] = var13;
            var36 = function() {
                var2 = _closure2_slot43;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            var36 = var51.bind(var46)(var36, var49);
            var51 = var46.useCallback;
            var49 = new Array(2);
            var49[0] = var35;
            var49[1] = var30;
            var30 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = _closure2_slot18;
                    var2 = false;
                    var3['current'] = var2;
                    var4 = _closure2_slot16;
                    var3 = _closure1_slot21;
                    var3 = var3.PLAYING;
                    if(!(var4 === var3)) { _fun0012_ip = 30; continue _fun0012 }
case 92:
                    var4 = _closure2_slot18;
                    var3 = true;
                    var4['current'] = var3;
                    var4 = _closure2_slot17;
                    var2 = _closure1_slot21;
                    var2 = var2.PAUSED;
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var2 = _closure2_slot31;
                    var2 = var2.bind(var3)();
                    var1 = _closure2_slot36;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0012_ip = 30; continue _fun0012 }
case 93:
                    var1 = var2.onPause;
                    var1 = var1.bind(var2)();
case 30:
                    var1 = undefined;
                    return var1;
                }
            };
            var51 = var51.bind(var46)(var30, var49);
            _closure2_slot44 = var51;
            var49 = var46.useCallback;
            var30 = new Array(2);
            var30[0] = var35;
            var30[1] = var27;
            var27 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var2 = _closure2_slot18;
                    var2 = var2.current;
                    if(!var2) { _fun0013_ip = 30; continue _fun0013 }
case 94:
                    var3 = _closure2_slot18;
                    var2 = false;
                    var3['current'] = var2;
                    var4 = _closure2_slot16;
                    var3 = _closure1_slot21;
                    var3 = var3.ERRORED;
                    if(!(var4 !== var3)) { _fun0013_ip = 30; continue _fun0013 }
case 34:
                    var4 = _closure2_slot17;
                    var2 = _closure1_slot21;
                    var2 = var2.PLAYING;
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var2 = _closure2_slot34;
                    var2 = var2.bind(var3)();
                    var1 = _closure2_slot36;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0013_ip = 30; continue _fun0013 }
case 93:
                    var1 = var2.onPlay;
                    var1 = var1.bind(var2)();
case 30:
                    var1 = undefined;
                    return var1;
                }
            };
            var27 = var49.bind(var46)(var27, var30);
            _closure2_slot45 = var27;
            var49 = var46.useEffect;
            var30 = new Array(2);
            var30[0] = var51;
            var30[1] = var27;
            var27 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 25;
                var2 = var6[var3];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var10 = var2.ComponentDispatch;
                var9 = var10.subscribe;
                var2 = _closure1_slot12;
                var8 = var2.QUEST_GAME_LINK_OPENED;
                var7 = _closure2_slot44;
                var7 = var9.bind(var10)(var8, var7);
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var4 = var3.ComponentDispatch;
                var3 = var4.subscribe;
                var2 = var2.QUEST_APP_STORE_OVERLAY_FINISHED;
                var1 = _closure2_slot45;
                var1 = var3.bind(var4)(var2, var1);
                var1 = function() {
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 25;
                    var3 = var6[var4];
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var10 = var3.ComponentDispatch;
                    var9 = var10.unsubscribe;
                    var3 = _closure1_slot12;
                    var8 = var3.QUEST_GAME_LINK_OPENED;
                    var7 = _closure2_slot44;
                    var7 = var9.bind(var10)(var8, var7);
                    var4 = var6[var4];
                    var4 = var5.bind(var1)(var4);
                    var5 = var4.ComponentDispatch;
                    var4 = var5.unsubscribe;
                    var3 = var3.QUEST_APP_STORE_OVERLAY_FINISHED;
                    var2 = _closure2_slot45;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                return var1;
            };
            var27 = var49.bind(var46)(var27, var30);
            var30 = var46.useCallback;
            var27 = new Array(2);
            var27[0] = var25;
            var27[1] = var15;
            var25 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0014_ip = 95; continue _fun0014 }
case 96:
                    var3 = _closure2_slot2;
                    var2 = {};
                    var1 = _closure2_slot3;
                    var2['orientation'] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 95:
                    var1 = undefined;
                    return var1;
                }
            };
            var25 = var30.bind(var46)(var25, var27);
            var30 = var46.useCallback;
            var27 = new Array(2);
            var27[0] = var33;
            var27[1] = var13;
            var13 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var3 = _closure2_slot23;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0015_ip = 95; continue _fun0015 }
case 97:
                    var4 = _closure2_slot23;
                    var3 = var4.set;
                    var2 = false;
                    var2 = var3.bind(var4)(var2);
case 95:
                    var3 = _closure2_slot43;
                    var2 = {};
                    var1 = false;
                    var2['shouldRestartVideo'] = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var13 = var30.bind(var46)(var13, var27);
            var33 = var46.useCallback;
            var30 = new Array(3);
            var30[0] = var45;
            var30[1] = var53;
            var27 = var22.maxTimestampSec;
            var30[2] = var27;
            var27 = function(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var2 = _closure2_slot5;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0016_ip = 98; continue _fun0016 }
case 80:
                    var2 = global;
                    var5 = var2.Math;
                    var4 = var5.max;
                    var7 = var2.Math;
                    var6 = var7.min;
                    var2 = _closure2_slot15;
                    var3 = var2.maxTimestampSec;
                    var2 = arg1;
                    var3 = var6.bind(var7)(var2, var3);
                    var2 = 0;
                    var3 = var4.bind(var5)(var2, var3);
                    var4 = _closure2_slot25;
                    var2 = var4.get;
                    var4 = var2.bind(var4)();
                    var2 = _closure2_slot11;
                    var5 = var4 * var2;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 26;
                    var4 = var4[var2];
                    var2 = undefined;
                    var4 = var6.bind(var2)(var4);
                    var2 = var4.isAndroid;
                    var2 = var2.bind(var4)();
                    if(!var2) { _fun0016_ip = 99; continue _fun0016 }
case 60:
                    var2 = _closure2_slot5;
                    var4 = var2.current;
                    var2 = var4.seek;
                    var2 = var2.bind(var4)(var5);
case 99:
                    var1 = _closure2_slot5;
                    var2 = var1.current;
                    var1 = var2.seek;
                    var1 = var1.bind(var2)(var3);
case 98:
                    var1 = undefined;
                    return var1;
                }
            };
            var27 = var33.bind(var46)(var27, var30);
            _closure2_slot46 = var27;
            var33 = var46.useCallback;
            var30 = new Array(5);
            var30[0] = var45;
            var30[1] = var53;
            var30[2] = var24;
            var24 = var39.id;
            var30[3] = var24;
            var30[4] = var47;
            var24 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var3 = arg1;
                    var1 = _closure2_slot5;
                    var4 = var1.current;
                    var1 = null;
                    if(!(var1 != var4)) { _fun0017_ip = 100; continue _fun0017 }
case 101:
                    var5 = _closure2_slot21;
                    var4 = var3.currentTime;
                    var5['current'] = var4;
                    var5 = _closure2_slot11;
                    var4 = 0;
                    if(!(var5 > var4)) { _fun0017_ip = 102; continue _fun0017 }
case 2:
                    var6 = _closure2_slot25;
                    var5 = var6.set;
                    var7 = var3.currentTime;
                    var4 = _closure2_slot11;
                    var4 = var7 / var4;
                    var4 = var5.bind(var6)(var4);
                    var8 = _closure2_slot14;
                    var4 = _closure2_slot6;
                    var7 = var4.id;
                    var6 = var3.currentTime;
                    var5 = _closure2_slot11;
                    var4 = undefined;
                    var4 = var8.bind(var4)(var7, var6, var5);
case 102:
                    var5 = _closure2_slot35;
                    var4 = undefined;
                    var4 = var5.bind(var4)();
                    var4 = _closure2_slot36;
                    var5 = var4.current;
                    if(!(var1 != var5)) { _fun0017_ip = 103; continue _fun0017 }
case 104:
                    var4 = var5.updatePlayheadTime;
                    var3 = var3.currentTime;
                    var3 = var4.bind(var5)(var3);
case 103:
                    var2 = _closure2_slot36;
                    var2 = var2.current;
                    if(!(var1 != var2)) { _fun0017_ip = 100; continue _fun0017 }
case 63:
                    var1 = var2.onSeek;
                    var1 = var1.bind(var2)();
case 100:
                    var1 = undefined;
                    return var1;
                }
            };
            var49 = var33.bind(var46)(var24, var30);
            var24 = _closure1_slot21;
            var24 = var24.ERRORED;
            var33 = var35 === var24;
            if(var33) { _fun0002_ip = 105; continue _fun0002 }
case 106:
            var51 = _closure1_slot19;
            var64 = var22.timestampSec;
            var63 = var22.maxTimestampSec;
            var62 = var22.duration;
            var65 = undefined;
            var61 = var52;
            var24 = var65[var51](var64, var63, var62, var61, var60);
            var33 = !var24;
case 105:
            _closure2_slot47 = var33;
            var24 = _closure1_slot4;
            var51 = var24.useCallback;
            var46 = new Array(4);
            var46[0] = var27;
            var46[1] = var45;
            var46[2] = var53;
            var46[3] = var33;
            var30 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var2 = _closure2_slot47;
                    if(var2) { _fun0018_ip = 107; continue _fun0018 }
case 26:
                    var3 = _closure2_slot25;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = _closure2_slot11;
                    var2 = var3 * var2;
                    var3 = _closure2_slot46;
                    var1 = 10;
                    var2 = var2 + var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 107:
                    var1 = undefined;
                    return var1;
                }
            };
            var30 = var51.bind(var24)(var30, var46);
            var51 = var24.useCallback;
            var46 = new Array(4);
            var46[0] = var27;
            var46[1] = var45;
            var46[2] = var53;
            var46[3] = var35;
            var27 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var2 = _closure2_slot25;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = _closure2_slot11;
                    var2 = var2 * var1;
                    var4 = _closure2_slot46;
                    var1 = 10;
                    var2 = var2 - var1;
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var5 = _closure2_slot16;
                    var4 = _closure1_slot21;
                    var4 = var4.ENDED;
                    if(!(var5 === var4)) { _fun0019_ip = 108; continue _fun0019 }
case 81:
                    var3 = _closure2_slot17;
                    var2 = _closure1_slot21;
                    var2 = var2.PLAYING;
                    var2 = var3.bind(var1)(var2);
case 108:
                    return var1;
                }
            };
            var27 = var51.bind(var24)(var27, var46);
            var27 = var42.bind(var5)(var27);
            var30 = var42.bind(var5)(var30);
            var42 = var24.useRef;
            var52 = var42.bind(var24)(var31);
            _closure2_slot48 = var52;
            var42 = var24.useRef;
            var51 = var42.bind(var24)(var31);
            _closure2_slot49 = var51;
            var46 = var24.useCallback;
            var42 = new Array(7);
            var42[0] = var53;
            var42[1] = var39;
            var42[2] = var52;
            var42[3] = var51;
            var48 = var48.taskType;
            var42[4] = var48;
            var42[5] = var47;
            var42[6] = var32;
            var32 = function(arg1) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.seekableDuration;
                    var6 = 0;
                    if(!(var6 !== var1)) { _fun0020_ip = 20; continue _fun0020 }
case 94:
                    var3 = var2.currentTime;
                    var1 = var2.seekableDuration;
                    var6 = var3 / var1;
case 20:
                    var4 = _closure2_slot21;
                    var1 = var2.currentTime;
                    var4['current'] = var1;
                    var4 = var2.currentTime;
                    var1 = _closure2_slot48;
                    var1 = var1.current;
                    if(!(var4 >= var1)) { _fun0020_ip = 109; continue _fun0020 }
case 110:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 27;
                    var1 = var5[var1];
                    var7 = undefined;
                    var8 = var4.bind(var7)(var1);
                    var5 = var8.sendVideoProgress;
                    var4 = _closure2_slot6;
                    var1 = var2.currentTime;
                    var1 = var5.bind(var8)(var4, var1);
                    var5 = _closure2_slot32;
                    var4 = var2.seekableDuration;
                    var1 = var2.currentTime;
                    var1 = var5.bind(var7)(var6, var4, var1);
                    var4 = _closure2_slot48;
                    var5 = var2.currentTime;
                    var1 = 6;
                    var5 = var5 + var1;
                    var1 = global;
                    var7 = var1.Math;
                    var1 = var7.random;
                    var7 = var1.bind(var7)();
                    var1 = 2;
                    var1 = var1 * var7;
                    var1 = var5 + var1;
                    var4['current'] = var1;
case 109:
                    var4 = var2.currentTime;
                    var1 = _closure2_slot49;
                    var1 = var1.current;
                    if(!(var4 >= var1)) { _fun0020_ip = 111; continue _fun0020 }
case 112:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 28;
                    var4 = var4[var1];
                    var1 = undefined;
                    var8 = var5.bind(var1)(var4);
                    var7 = var8.updateOptimisticProgress;
                    var1 = _closure2_slot6;
                    var5 = var1.id;
                    var1 = _closure2_slot7;
                    var4 = var1.taskType;
                    var1 = var2.currentTime;
                    var1 = var7.bind(var8)(var5, var4, var1);
                    var4 = _closure2_slot49;
                    var5 = var2.currentTime;
                    var1 = 1;
                    var1 = var5 + var1;
                    var4['current'] = var1;
case 111:
                    var8 = _closure2_slot14;
                    var1 = _closure2_slot6;
                    var7 = var1.id;
                    var5 = var2.currentTime;
                    var4 = var2.seekableDuration;
                    var1 = undefined;
                    var4 = var8.bind(var1)(var7, var5, var4);
                    var5 = _closure2_slot25;
                    var4 = var5.set;
                    var4 = var4.bind(var5)(var6);
                    var3 = _closure2_slot36;
                    var4 = var3.current;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0020_ip = 113; continue _fun0020 }
case 114:
                    var3 = var4.onProgress;
                    var2 = var2.currentTime;
                    var2 = var3.bind(var4)(var2);
case 113:
                    return var1;
                }
            };
            var48 = var46.bind(var24)(var32, var42);
            var42 = var24.useCallback;
            var32 = new Array(4);
            var32[0] = var45;
            var32[1] = var39;
            var32[2] = var43;
            var32[3] = var21;
            var21 = function() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 27;
                    var2 = var2[var1];
                    var1 = undefined;
                    var7 = var4.bind(var1)(var2);
                    var6 = var7.sendVideoProgress;
                    var5 = _closure2_slot6;
                    var4 = _closure2_slot11;
                    var4 = var6.bind(var7)(var5, var4);
                    var4 = _closure2_slot27;
                    var4 = var4.bind(var1)();
                    var4 = _closure2_slot17;
                    var3 = _closure1_slot21;
                    var3 = var3.ENDED;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot36;
                    var6 = var3.current;
                    var4 = null;
                    if(!(var4 != var6)) { _fun0021_ip = 32; continue _fun0021 }
case 115:
                    var5 = var6.onProgress;
                    var3 = _closure2_slot11;
                    var3 = var5.bind(var6)(var3);
case 32:
                    var3 = _closure2_slot36;
                    var5 = var3.current;
                    if(!(var4 != var5)) { _fun0021_ip = 10; continue _fun0021 }
case 116:
                    var3 = var5.onEnd;
                    var3 = var3.bind(var5)();
case 10:
                    var3 = _closure2_slot1;
                    if(!(var4 != var3)) { _fun0021_ip = 117; continue _fun0021 }
case 118:
                    var2 = _closure2_slot1;
                    var2 = var2.bind(var1)();
case 117:
                    return var1;
                }
            };
            var46 = var42.bind(var24)(var21, var32);
            var32 = var24.useCallback;
            var21 = new Array(1);
            var21[0] = var19;
            var19 = function() {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var4 = _closure2_slot17;
                    var1 = _closure1_slot21;
                    var2 = var1.LOADING;
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var2 = _closure2_slot30;
                    var2 = var2.bind(var1)();
                    var2 = _closure2_slot36;
                    var5 = var2.current;
                    var2 = null;
                    if(!(var2 != var5)) { _fun0022_ip = 119; continue _fun0022 }
case 2:
                    var4 = var5.onLoadStart;
                    var4 = var4.bind(var5)();
case 119:
                    var3 = _closure2_slot36;
                    var3 = var3.current;
                    if(!(var2 != var3)) { _fun0022_ip = 120; continue _fun0022 }
case 121:
                    var2 = var3.onPlay;
                    var2 = var2.bind(var3)();
case 120:
                    return var1;
                }
            };
            var47 = var32.bind(var24)(var19, var21);
            var21 = var24.useCallback;
            var19 = new Array(1);
            var19[0] = var12;
            var12 = function(arg1) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var4 = arg1;
                    var5 = _closure2_slot17;
                    var1 = _closure1_slot21;
                    var3 = var1.ERRORED;
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var3 = _closure2_slot28;
                    var3 = var3.bind(var1)(var4);
                    var2 = _closure2_slot36;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0023_ip = 122; continue _fun0023 }
case 123:
                    var2 = var3.onError;
                    var2 = var2.bind(var3)(var4);
case 122:
                    return var1;
                }
            };
            var45 = var21.bind(var24)(var12, var19);
            var21 = var24.useCallback;
            var19 = function(arg1) {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var1 = arg1;
                    var2 = null;
                    var3 = var2 != var1;
                    if(!var3) { _fun0024_ip = 124; continue _fun0024 }
case 125:
                    var4 = var1.videoTracks;
                    var3 = var2 != var4;
case 124:
                    if(!var3) { _fun0024_ip = 126; continue _fun0024 }
case 127:
                    var4 = var1.videoTracks;
                    var5 = var4.length;
                    var4 = 0;
                    var3 = var5 > var4;
case 126:
                    if(!var3) { _fun0024_ip = 128; continue _fun0024 }
case 129:
                    var4 = var1.selectedVideoTrackId;
                    var3 = var2 != var4;
case 128:
                    if(!var3) { _fun0024_ip = 130; continue _fun0024 }
case 131:
                    var4 = var1.selectedVideoTrackId;
                    var5 = var4.length;
                    var4 = 0;
                    var3 = var5 > var4;
case 130:
                    if(!var3) { _fun0024_ip = 116; continue _fun0024 }
case 132:
                    var3 = _closure2_slot36;
                    var4 = var3.current;
                    if(!(var2 != var4)) { _fun0024_ip = 116; continue _fun0024 }
case 35:
                    var3 = var4.onVideoTrackChange;
                    var2 = var1.selectedVideoTrackId;
                    var1 = var1.videoTracks;
                    var1 = var3.bind(var4)(var2, var1);
case 116:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = new Array(0);
            var43 = var21.bind(var24)(var19, var12);
            var21 = var24.useCallback;
            var19 = function(arg1) {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var3 = arg1;
                    var2 = null;
                    var5 = var2 == var3;
                    var1 = undefined;
                    var4 = undefined;
                    if(var5) { _fun0025_ip = 133; continue _fun0025 }
case 134:
                    var5 = var3.nativeEvent;
                    var6 = var2 == var5;
                    var4 = undefined;
                    if(var6) { _fun0025_ip = 133; continue _fun0025 }
case 20:
                    var4 = var5.layout;
case 133:
                    if(!(var2 != var4)) { _fun0025_ip = 36; continue _fun0025 }
case 51:
                    var3 = var3.nativeEvent;
                    var3 = var3.layout;
                    var5 = var3.width;
                    var4 = var3.height;
                    var3 = 0;
                    if(!(var5 > var3)) { _fun0025_ip = 36; continue _fun0025 }
case 135:
                    if(!(var4 > var3)) { _fun0025_ip = 36; continue _fun0025 }
case 121:
                    var3 = _closure2_slot36;
                    var3 = var3.current;
                    if(!(var2 != var3)) { _fun0025_ip = 36; continue _fun0025 }
case 58:
                    var2 = var3.updateVideoDimensions;
                    var2 = var2.bind(var3)(var5, var4);
case 36:
                    return var1;
                }
            };
            var12 = new Array(0);
            var42 = var21.bind(var24)(var19, var12);
            var19 = _closure1_slot0;
            var21 = _closure1_slot2;
            var12 = 29;
            var12 = var21[var12];
            var32 = var19.bind(var5)(var12);
            var21 = var32.useStateFromStores;
            var12 = _closure1_slot8;
            var19 = new Array(1);
            var19[0] = var12;
            var12 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                return var1;
            };
            var19 = var21.bind(var32)(var19, var12);
            var12 = _closure1_slot11;
            var12 = var12.ACTIVE;
            var19 = var19 === var12;
            var21 = var24.useMemo;
            var12 = new Array(2);
            var12[0] = var28;
            var12[1] = var8;
            var8 = function() {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    var1 = _closure2_slot9;
                    var5 = null;
                    var2 = var5 == var1;
                    var1 = null;
                    if(var2) { _fun0026_ip = 136; continue _fun0026 }
case 50:
                    var2 = {};
                    var3 = _closure2_slot10;
                    var6 = var5 == var3;
                    var3 = undefined;
                    if(var6) { _fun0026_ip = 126; continue _fun0026 }
case 5:
                    var6 = _closure2_slot10;
                    var3 = var6.url;
case 126:
                    if(!(var5 == var3)) { _fun0026_ip = 128; continue _fun0026 }
case 137:
                    var4 = _closure2_slot9;
                    var3 = var4.url;
case 128:
                    var2['uri'] = var3;
                    var1 = var2;
case 136:
                    return var1;
                }
            };
            var54 = var21.bind(var24)(var8, var12);
            var21 = var24.useLayoutEffect;
            var12 = function() {
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 26;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.isAndroid;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0027_ip = 126; continue _fun0027 }
case 138:
                    return var2;
case 126:
                    var2 = _closure2_slot5;
                    var2 = var2.current;
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0: // try_start_0
                            var3 = _closure3_slot0;
                            var5 = null;
                            var3 = var5 == var3;
                            var2 = var3;
                            if(var3) { _fun0028_ip = 5; continue _fun0028 }
case 97:
                            var3 = _closure3_slot0;
                            var3 = var3.setNativeProps;
                            var2 = var5 == var3;
case 5:
                            if(var2) { _fun0028_ip = 28; continue _fun0028 }
case 92:
                            var3 = _closure3_slot0;
                            var2 = var3.setNativeProps;
                            var1 = {};
                            var4 = true;
                            var1['paused'] = var4;
                            var4 = {};
                            var4['uri'] = var5;
                            var1['src'] = var4;
                            var1 = var2.bind(var3)(var1);
case 28: // try_end0
                            _fun0028_ip = 139; continue _fun0028;
case 121: // catch_target0
                            CatchBlockStart(arg_register=2);
                            var4 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 30;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var4.bind(var1)(var2);
                            var1 = var2.captureException;
                            var1 = var1.bind(var2)(var3);
case 139:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    return var1;
                }
            };
            var8 = new Array(0);
            var8 = var21.bind(var24)(var12, var8);
            var32 = !var19;
            if(!var19) { _fun0002_ip = 140; continue _fun0002 }
case 141:
            var8 = _closure1_slot21;
            var8 = var8.PAUSED;
            var32 = var35 === var8;
case 140:
            if(var32) { _fun0002_ip = 142; continue _fun0002 }
case 143:
            var8 = _closure1_slot21;
            var8 = var8.LOADING;
            var32 = var35 === var8;
case 142:
            if(var32) { _fun0002_ip = 144; continue _fun0002 }
case 145:
            var32 = var4;
case 144:
            var4 = {};
            var4['handleBufferAnalytics'] = var6;
            var4['videoQoETracker'] = var3;
            var3 = function useBufferingState(arg1) {
                var2 = arg1;
                var7 = var2.handleBufferAnalytics;
                var _closure3_slot0 = var7;
                var6 = var2.videoQoETracker;
                var _closure3_slot1 = var6;
                var5 = _closure1_slot4;
                var3 = var5.useRef;
                var4 = false;
                var3 = var3.bind(var5)(var4);
                var _closure3_slot2 = var3;
                var3 = var5.useState;
                var8 = var3.bind(var5)(var4);
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = 2;
                var4 = var4.bind(var3)(var8, var2);
                var2 = 0;
                var3 = var4[var2];
                var2 = 1;
                var2 = var4[var2];
                var _closure3_slot3 = var2;
                var4 = var5.useCallback;
                var2 = new Array(2);
                var2[0] = var7;
                var2[1] = var6;
                var1 = function(arg1) {
                    _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                        var4 = arg1;
                        var3 = _closure3_slot3;
                        var1 = undefined;
                        var3 = var3.bind(var1)(var4);
                        var3 = _closure3_slot2;
                        var3 = var3.current;
                        if(!(var4 !== var3)) { _fun0029_ip = 130; continue _fun0029 }
case 3:
                        var3 = _closure3_slot2;
                        var3['current'] = var4;
                        var3 = _closure3_slot0;
                        var3 = var3.bind(var1)(var4);
                        var2 = _closure3_slot1;
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0029_ip = 130; continue _fun0029 }
case 146:
                        var2 = var3.onBuffer;
                        var2 = var2.bind(var3)(var4);
case 130:
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var1, var2);
                var1 = {};
                var1['isBuffering'] = var3;
                var1['toggleBuffering'] = var2;
                return var1;
            };
            var3 = var3.bind(var5)(var4);
            var12 = var3.isBuffering;
            var8 = var3.toggleBuffering;
            _closure2_slot50 = var8;
            var6 = _closure1_slot4;
            var21 = var6.useCallback;
            var4 = new Array(2);
            var4[0] = var8;
            var4[1] = var35;
            var3 = function(arg1) {
                _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.isBuffering;
                    if(!var1) { _fun0030_ip = 147; continue _fun0030 }
case 125:
                    var5 = _closure2_slot16;
                    var4 = _closure1_slot21;
                    var4 = var4.LOADING;
                    if(!(var5 !== var4)) { _fun0030_ip = 28; continue _fun0030 }
case 92:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 26;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.isIOS;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0030_ip = 147; continue _fun0030 }
case 28:
                    var4 = _closure2_slot50;
                    var3 = undefined;
                    var2 = true;
                    var2 = var4.bind(var3)(var2);
                    _fun0030_ip = 32; continue _fun0030;
case 147:
                    if(var1) { _fun0030_ip = 32; continue _fun0030 }
case 58:
                    var3 = _closure2_slot50;
                    var2 = undefined;
                    var1 = false;
                    var1 = var3.bind(var2)(var1);
case 32:
                    var1 = undefined;
                    return var1;
                }
            };
            var53 = var21.bind(var6)(var3, var4);
            var21 = var6.useCallback;
            var4 = new Array(1);
            var4[0] = var8;
            var3 = function() {
                _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 26;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isIOS;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0031_ip = 148; continue _fun0031 }
case 54:
                    var3 = _closure2_slot50;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
case 148:
                    return var1;
                }
            };
            var52 = var21.bind(var6)(var3, var4);
            var4 = var6.useCallback;
            var3 = new Array(1);
            var3[0] = var8;
            var2 = function() {
                _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 26;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isIOS;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0032_ip = 148; continue _fun0032 }
case 54:
                    var3 = _closure2_slot50;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
case 148:
                    return var1;
                }
            };
            var51 = var4.bind(var6)(var2, var3);
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 31;
            var2 = var4[var2];
            var2 = var3.bind(var5)(var2);
            var6 = var2.bind(var5)();
            if(!(var1 != var54)) { _fun0002_ip = 149; continue _fun0002 }
case 150:
            var24 = var29;
            if(!var24) { _fun0002_ip = 151; continue _fun0002 }
case 152:
            var24 = var1 != var6;
case 151:
            if(!var24) { _fun0002_ip = 153; continue _fun0002 }
case 154:
            var2 = {};
            var4 = _closure1_slot25;
            var3 = 'right';
            var3 = var4.bind(var5)(var6, var3);
            var2['paddingRight'] = var3;
            var3 = 'left';
            var3 = var4.bind(var5)(var6, var3);
            var2['paddingLeft'] = var3;
            var24 = var2;
case 153:
            var4 = _closure1_slot13;
            var3 = _closure1_slot5;
            var2 = {};
            var8 = var16.container;
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var2['style'] = var6;
            var2['accessible'] = var10;
            var8 = _closure1_slot14;
            var7 = _closure1_slot6;
            var6 = {};
            var28 = var16.videoContainer;
            var21 = new Array(1);
            var21[0] = var28;
            var6['style'] = var21;
            var6['onPress'] = var13;
            var9 = !var9;
            var6['accessible'] = var9;
            var56 = _closure1_slot0;
            var9 = _closure1_slot2;
            var28 = 32;
            var13 = var9[var28];
            var13 = var56.bind(var5)(var13);
            var21 = var13.intl;
            var13 = var21.string;
            var9 = var9[var28];
            var9 = var56.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.FlNoSV;
            var9 = var13.bind(var21)(var9);
            var6['accessibilityLabel'] = var9;
            var9 = _closure1_slot21;
            var9 = var9.ERRORED;
            var13 = var35 !== var9;
            if(!var13) { _fun0002_ip = 155; continue _fun0002 }
case 156:
            var21 = _closure1_slot0;
            var56 = _closure1_slot2;
            var9 = 26;
            var9 = var56[var9];
            var21 = var21.bind(var5)(var9);
            var9 = var21.isAndroid;
            var9 = var9.bind(var21)();
            var9 = !var9;
            if(var9) { _fun0002_ip = 157; continue _fun0002 }
case 158:
            var9 = var19;
case 157:
            var13 = var9;
case 155:
            if(!var13) { _fun0002_ip = 159; continue _fun0002 }
case 160:
            var21 = _closure1_slot13;
            var19 = _closure1_slot16;
            var9 = {'mixWithOthers': 'inherit', 'ref': null, 'accessible': false, 'importantForAccessibility': 'no-hide-descendants', 'accessibilityRole': 'none'};
            var9['ref'] = var55;
            var55 = var16.video;
            var9['style'] = var55;
            var9['paused'] = var32;
            var9['source'] = var54;
            var9['onBuffer'] = var53;
            var9['onPlaybackStalled'] = var52;
            var9['onPlaybackResume'] = var51;
            var9['onLoad'] = var50;
            var9['onSeek'] = var49;
            var9['onProgress'] = var48;
            var9['onLoadStart'] = var47;
            var9['onEnd'] = var46;
            var9['onError'] = var45;
            var9['onReadyForDisplay'] = var44;
            var9['onVideoTracks'] = var43;
            var9['onLayout'] = var42;
            var42 = 'contain';
            var9['resizeMode'] = var42;
            var13 = var21.bind(var5)(var19, var9);
case 159:
            var9 = new Array(6);
            var9[0] = var13;
            var21 = _closure1_slot13;
            var19 = _closure1_slot0;
            var42 = _closure1_slot2;
            var13 = 33;
            var13 = var42[var13];
            var13 = var19.bind(var5)(var13);
            var19 = var13.VideoQuestCaptions;
            var13 = {};
            var13['quest'] = var39;
            var22 = var22.timestampSec;
            var13['currentTime'] = var22;
            var13['visible'] = var40;
            var22 = {};
            var39 = var1 == var41;
            var42 = undefined;
            if(var39) { _fun0002_ip = 161; continue _fun0002 }
case 162:
            var42 = var41.top;
case 161:
            var43 = var1 != var42;
            var39 = 0;
            if(!var43) { _fun0002_ip = 163; continue _fun0002 }
case 164:
            var39 = var42;
case 163:
            var22['top'] = var39;
            var39 = var1 == var41;
            var42 = undefined;
            if(var39) { _fun0002_ip = 165; continue _fun0002 }
case 166:
            var42 = var41.bottom;
case 165:
            var43 = var1 != var42;
            var39 = 0;
            if(!var43) { _fun0002_ip = 167; continue _fun0002 }
case 168:
            var39 = var42;
case 167:
            var22['bottom'] = var39;
            var39 = var1 == var41;
            var42 = undefined;
            if(var39) { _fun0002_ip = 169; continue _fun0002 }
case 170:
            var42 = var41.left;
case 169:
            var43 = var1 != var42;
            var39 = 0;
            if(!var43) { _fun0002_ip = 171; continue _fun0002 }
case 172:
            var39 = var42;
case 171:
            var22['left'] = var39;
            var39 = var1 == var41;
            var42 = undefined;
            if(var39) { _fun0002_ip = 173; continue _fun0002 }
case 174:
            var42 = var41.right;
case 173:
            var43 = var1 != var42;
            var39 = 0;
            if(!var43) { _fun0002_ip = 175; continue _fun0002 }
case 176:
            var39 = var42;
case 175:
            var22['right'] = var39;
            var13['style'] = var22;
            var13 = var21.bind(var5)(var19, var13);
            var9[1] = var13;
            if(!var12) { _fun0002_ip = 177; continue _fun0002 }
case 178:
            var21 = _closure1_slot13;
            var19 = _closure1_slot7;
            var13 = {};
            var22 = true;
            var13['animating'] = var22;
            var39 = var16.bufferingSpinner;
            var22 = new Array(2);
            var22[0] = var39;
            if(var29) { _fun0002_ip = 179; continue _fun0002 }
case 180:
            var29 = 'landscape';
            if(!(var29 !== var15)) { _fun0002_ip = 179; continue _fun0002 }
case 181:
            var29 = {};
            var39 = var1 == var41;
            var42 = undefined;
            if(var39) { _fun0002_ip = 182; continue _fun0002 }
case 183:
            var42 = var41.top;
case 182:
            var43 = var1 != var42;
            var39 = 0;
            if(!var43) { _fun0002_ip = 184; continue _fun0002 }
case 185:
            var39 = var42;
case 184:
            var29['top'] = var39;
            var42 = var1 == var41;
            var39 = undefined;
            if(var42) { _fun0002_ip = 186; continue _fun0002 }
case 187:
            var39 = var41.left;
case 186:
            var41 = var1 != var39;
            var31 = 0;
            if(!var41) { _fun0002_ip = 188; continue _fun0002 }
case 189:
            var31 = var39;
case 188:
            var29['left'] = var31;
            _fun0002_ip = 190; continue _fun0002;
case 179:
            var29 = var16.bufferingSpinnerCentered;
case 190:
            var22[1] = var29;
            var13['style'] = var22;
            var29 = _closure1_slot1;
            var31 = _closure1_slot2;
            var22 = 8;
            var22 = var31[var22];
            var22 = var29.bind(var5)(var22);
            var22 = var22.unsafe_rawColors;
            var22 = var22.WHITE;
            var13['color'] = var22;
            var12 = var21.bind(var5)(var19, var13);
case 177:
            var9[2] = var12;
            var11 = !var11;
            if(!var11) { _fun0002_ip = 191; continue _fun0002 }
case 192:
            var19 = _closure1_slot13;
            var13 = _closure1_slot5;
            var12 = {};
            var21 = var16.loadingContainer;
            var12['style'] = var21;
            var22 = _closure1_slot7;
            var21 = {};
            var29 = true;
            var21['animating'] = var29;
            var21 = var19.bind(var5)(var22, var21);
            var12['children'] = var21;
            var11 = var19.bind(var5)(var13, var12);
case 191:
            var9[3] = var11;
            var13 = _closure1_slot14;
            var12 = _closure1_slot1;
            var11 = _closure1_slot2;
            var11 = var11[var18];
            var11 = var12.bind(var5)(var11);
            var12 = var11.View;
            var11 = {};
            var21 = var16.controls;
            var19 = new Array(2);
            var19[0] = var21;
            var19[1] = var20;
            var11['style'] = var19;
            var11['accessible'] = var10;
            var10 = 'landscape';
            var10 = var10 === var15;
            var19 = var10;
            if(!var10) { _fun0002_ip = 193; continue _fun0002 }
case 194:
            var21 = _closure1_slot14;
            var20 = _closure1_slot5;
            var15 = {};
            var29 = var16.controlsTopBottom;
            var22 = new Array(3);
            var22[0] = var29;
            var29 = var16.controlsTop;
            var22[1] = var29;
            var22[2] = var24;
            var15['style'] = var22;
            if(!var26) { _fun0002_ip = 195; continue _fun0002 }
case 196:
            var31 = _closure1_slot13;
            var39 = _closure1_slot0;
            var41 = _closure1_slot2;
            var22 = 34;
            var22 = var41[var22];
            var22 = var39.bind(var5)(var22);
            var29 = var22.PressableOpacity;
            var22 = {};
            var42 = 'button';
            var22['accessibilityRole'] = var42;
            var42 = var41[var28];
            var42 = var39.bind(var5)(var42);
            var44 = var42.intl;
            var43 = var44.string;
            var42 = var41[var28];
            var42 = var39.bind(var5)(var42);
            var42 = var42.t;
            var42 = var42.bDSZO1;
            var42 = var43.bind(var44)(var42);
            var22['accessibilityLabel'] = var42;
            var22['onPress'] = var38;
            var38 = var16.controlButton;
            var22['style'] = var38;
            var38 = 35;
            var38 = var41[var38];
            var38 = var39.bind(var5)(var38);
            var39 = var38.ClosedCaptionsOutlineIcon;
            var38 = {};
            if(var40) { _fun0002_ip = 197; continue _fun0002 }
case 198:
            var40 = var16.iconDisabled;
            var40 = var40.color;
            _fun0002_ip = 199; continue _fun0002;
case 197:
            var41 = var16.icon;
            var40 = var41.color;
case 199:
            var38['color'] = var40;
            var38 = var31.bind(var5)(var39, var38);
            var22['children'] = var38;
            var26 = var31.bind(var5)(var29, var22);
case 195:
            var22 = new Array(2);
            var22[0] = var26;
            if(!var23) { _fun0002_ip = 200; continue _fun0002 }
case 201:
            var31 = _closure1_slot13;
            var38 = _closure1_slot0;
            var39 = _closure1_slot2;
            var26 = 34;
            var26 = var39[var26];
            var26 = var38.bind(var5)(var26);
            var29 = var26.PressableOpacity;
            var26 = {};
            var40 = 'button';
            var26['accessibilityRole'] = var40;
            var40 = var39[var28];
            var40 = var38.bind(var5)(var40);
            var42 = var40.intl;
            var41 = var42.string;
            var40 = var39[var28];
            var40 = var38.bind(var5)(var40);
            var40 = var40.t;
            var40 = var40.KCzjTi;
            var40 = var41.bind(var42)(var40);
            var26['accessibilityLabel'] = var40;
            var26['onPress'] = var37;
            var37 = var16.controlButton;
            var26['style'] = var37;
            var37 = 36;
            var37 = var39[var37];
            var37 = var38.bind(var5)(var37);
            var38 = var37.TranscriptOutlineIcon;
            var37 = {};
            var39 = var16.iconDisabled;
            var39 = var39.color;
            var37['color'] = var39;
            var37 = var31.bind(var5)(var38, var37);
            var26['children'] = var37;
            var23 = var31.bind(var5)(var29, var26);
case 200:
            var22[1] = var23;
            var15['children'] = var22;
            var19 = var21.bind(var5)(var20, var15);
case 193:
            var15 = new Array(3);
            var15[0] = var19;
            var21 = _closure1_slot14;
            var20 = _closure1_slot5;
            var19 = {};
            var22 = var16.controlsMiddle;
            var19['style'] = var22;
            var31 = _closure1_slot13;
            var40 = _closure1_slot0;
            var37 = _closure1_slot2;
            var23 = 37;
            var22 = var37[var23];
            var22 = var40.bind(var5)(var22);
            var26 = var22.VideoQuestPlayerControlButton;
            var22 = {};
            var29 = _closure1_slot21;
            var29 = var29.ERRORED;
            var29 = var35 === var29;
            var22['disabled'] = var29;
            var29 = 'button';
            var22['accessibilityRole'] = var29;
            var38 = var37[var28];
            var38 = var40.bind(var5)(var38);
            var41 = var38.intl;
            var39 = var41.string;
            var38 = var37[var28];
            var38 = var40.bind(var5)(var38);
            var38 = var38.t;
            var38 = var38.r9s3Uv;
            var38 = var39.bind(var41)(var38);
            var22['accessibilityLabel'] = var38;
            var22['onPress'] = var27;
            var27 = 38;
            var27 = var37[var27];
            var27 = var40.bind(var5)(var27);
            var38 = var27.SkipBackwardIcon;
            var27 = {'color': null, 'width': 16, 'height': 16};
            var39 = var16.icon;
            var39 = var39.color;
            var27['color'] = var39;
            var27 = var31.bind(var5)(var38, var27);
            var22['children'] = var27;
            var26 = var31.bind(var5)(var26, var22);
            var22 = new Array(3);
            var22[0] = var26;
            var26 = var37[var23];
            var26 = var40.bind(var5)(var26);
            var27 = var26.VideoQuestPlayerControlButton;
            var26 = {};
            var26['accessibilityRole'] = var29;
            var38 = var37[var28];
            var38 = var40.bind(var5)(var38);
            var39 = var38.intl;
            var38 = var39.string;
            var37 = var37[var28];
            var37 = var40.bind(var5)(var37);
            var37 = var37.t;
            var37 = var37.RscU7I;
            var37 = var38.bind(var39)(var37);
            var26['accessibilityLabel'] = var37;
            var26['onPress'] = var36;
            if(var34) { _fun0002_ip = 202; continue _fun0002 }
case 203:
            var34 = _closure1_slot21;
            var34 = var34.ERRORED;
            if(!(var35 !== var34)) { _fun0002_ip = 202; continue _fun0002 }
case 204:
            var35 = _closure1_slot13;
            var36 = _closure1_slot0;
            var37 = _closure1_slot2;
            if(var32) { _fun0002_ip = 205; continue _fun0002 }
case 206:
            var32 = 41;
            var32 = var37[var32];
            var32 = var36.bind(var5)(var32);
            var34 = var32.PauseIcon;
            _fun0002_ip = 207; continue _fun0002;
case 205:
            var32 = 40;
            var32 = var37[var32];
            var32 = var36.bind(var5)(var32);
            var34 = var32.PlayIcon;
case 207:
            var32 = {};
            var36 = 'lg';
            var32['size'] = var36;
            var32 = var35.bind(var5)(var34, var32);
            _fun0002_ip = 208; continue _fun0002;
case 202:
            var36 = _closure1_slot13;
            var35 = _closure1_slot0;
            var37 = _closure1_slot2;
            var34 = 39;
            var34 = var37[var34];
            var34 = var35.bind(var5)(var34);
            var35 = var34.RetryIcon;
            var34 = {};
            var37 = 'lg';
            var34['size'] = var37;
            var32 = var36.bind(var5)(var35, var34);
case 208:
            var26['children'] = var32;
            var26 = var31.bind(var5)(var27, var26);
            var22[1] = var26;
            var27 = _closure1_slot13;
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var23 = var32[var23];
            var23 = var31.bind(var5)(var23);
            var26 = var23.VideoQuestPlayerControlButton;
            var23 = {};
            var23['disabled'] = var33;
            var23['accessibilityRole'] = var29;
            var33 = var32[var28];
            var33 = var31.bind(var5)(var33);
            var35 = var33.intl;
            var34 = var35.string;
            var33 = var32[var28];
            var33 = var31.bind(var5)(var33);
            var33 = var33.t;
            var33 = var33.zWDcNP;
            var33 = var34.bind(var35)(var33);
            var23['accessibilityLabel'] = var33;
            var23['onPress'] = var30;
            var30 = 42;
            var30 = var32[var30];
            var30 = var31.bind(var5)(var30);
            var31 = var30.SkipForwardIcon;
            var30 = {'color': null, 'width': 16, 'height': 16};
            var32 = var16.icon;
            var32 = var32.color;
            var30['color'] = var32;
            var30 = var27.bind(var5)(var31, var30);
            var23['children'] = var30;
            var23 = var27.bind(var5)(var26, var23);
            var22[2] = var23;
            var19['children'] = var22;
            var19 = var21.bind(var5)(var20, var19);
            var15[1] = var19;
            var19 = var10;
            if(!var10) { _fun0002_ip = 209; continue _fun0002 }
case 210:
            var22 = _closure1_slot13;
            var21 = _closure1_slot5;
            var20 = {};
            var26 = var16.controlsTopBottom;
            var23 = new Array(3);
            var23[0] = var26;
            var26 = var16.controlsBottom;
            var23[1] = var26;
            var23[2] = var24;
            var20['style'] = var23;
            var26 = _closure1_slot0;
            var27 = _closure1_slot2;
            var23 = 34;
            var23 = var27[var23];
            var23 = var26.bind(var5)(var23);
            var24 = var23.PressableOpacity;
            var23 = {};
            var23['accessibilityRole'] = var29;
            var29 = var27[var28];
            var29 = var26.bind(var5)(var29);
            var30 = var29.intl;
            var29 = var30.string;
            var28 = var27[var28];
            var28 = var26.bind(var5)(var28);
            var28 = var28.t;
            var28 = var28.vKZT5t;
            var28 = var29.bind(var30)(var28);
            var23['accessibilityLabel'] = var28;
            var23['onPress'] = var25;
            var25 = var16.controlButton;
            var23['style'] = var25;
            var25 = 43;
            var25 = var27[var25];
            var25 = var26.bind(var5)(var25);
            var26 = var25.FullscreenEnterIcon;
            var25 = {};
            var25 = var22.bind(var5)(var26, var25);
            var23['children'] = var25;
            var23 = var22.bind(var5)(var24, var23);
            var20['children'] = var23;
            var19 = var22.bind(var5)(var21, var20);
case 209:
            var15[2] = var19;
            var11['children'] = var15;
            var11 = var13.bind(var5)(var12, var11);
            var9[4] = var11;
            if(!var10) { _fun0002_ip = 211; continue _fun0002 }
case 212:
            var13 = _closure1_slot13;
            var12 = _closure1_slot5;
            var11 = {};
            var15 = var16.progressContainer;
            var11['style'] = var15;
            var15 = _closure1_slot1;
            var14 = _closure1_slot2;
            var14 = var14[var18];
            var14 = var15.bind(var5)(var14);
            var15 = var14.View;
            var14 = {};
            var18 = var16.progress;
            var16 = new Array(2);
            var16[0] = var18;
            var16[1] = var17;
            var14['style'] = var16;
            var14 = var13.bind(var5)(var15, var14);
            var11['children'] = var14;
            var10 = var13.bind(var5)(var12, var11);
case 211:
            var9[5] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 149:
            return var1;
        }
    };
    var2 = var5.bind(var8)(var2);
    var5 = 44;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/native/VideoQuestModal/VideoQuestPlayer.tsx';
    var5 = var6.bind(var7)(var5);
    var3['PlayerState'] = var4;
    var3['VideoQuestPlayer'] = var2;
    return var1;
})();