// app/modules/quests/native/VideoQuestModal/VideoQuestPlayer.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var12 = native3;
    var3 = native6;
    var7 = native7;
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
        var1 = _closure1_slot14;
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
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var5 = var7[var4];
    var4 = native4;
    var8 = var4.bind(var1)(var5);
    var _closure1_slot4 = var8;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.View;
    var _closure1_slot5 = var5;
    var16 = var4.StyleSheet;
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
    var5 = var4.AppStates;
    var _closure1_slot10 = var5;
    var4 = var4.ComponentActions;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.jsx;
    var _closure1_slot12 = var5;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = {};
    var11 = 7;
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
    var _closure1_slot14 = var4;
    var5 = var8.memo;
    var4 = 8;
    var4 = var7[var4];
    var4 = var12.bind(var1)(var4);
    var4 = var5.bind(var8)(var4);
    var _closure1_slot15 = var4;
    var4 = {};
    var5 = 'function hasVideoEnded_VideoQuestPlayerTsx1(currentTime,videoDuration){return currentTime>=videoDuration-1;}';
    var4['code'] = var5;
    var _closure1_slot16 = var4;
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
        var2 = _closure1_slot16;
        var1['__initData'] = var2;
        return var1;
    };
    var10 = var4.bind(var1)();
    var _closure1_slot17 = var10;
    var5 = {};
    var4 = 'function VideoQuestPlayerTsx2(currentTime,maxTimestamp,videoDuration,isQuestCompleted){const{hasVideoEnded}=this.__closure;return!hasVideoEnded(currentTime,videoDuration)&&(isQuestCompleted||currentTime<=maxTimestamp-1);}';
    var5['code'] = var4;
    var4 = function D(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var2 = arg4;
            var5 = _closure1_slot17;
            var3 = undefined;
            var1 = arg3;
            var1 = var5.bind(var3)(var4, var1);
            var1 = !var1;
            if(!var1) { _fun0001_ip = 50; continue _fun0001 }
 30:
            if(var2) { _fun0001_ip = 47; continue _fun0001 }
 33:
            var5 = arg2;
            var3 = 1;
            var3 = var5 - var3;
            var2 = var4 <= var3;
 47:
            var1 = var2;
 50:
            return var1;
        }
    };
    var9 = {};
    var9['hasVideoEnded'] = var10;
    var4['__closure'] = var9;
    var9 = 6684695599942.0;
    var4['__workletHash'] = var9;
    var4['__initData'] = var5;
    var _closure1_slot18 = var4;
    var4 = 9;
    var4 = var7[var4];
    var9 = var6.bind(var1)(var4);
    var5 = var9.createStyles;
    var4 = {};
    var10 = {};
    var21 = var16.absoluteFillObject;
    var22 = var10;
    var13 = copyDataProperties(var22, var21);
    var4['container'] = var10;
    var10 = {};
    var21 = var16.absoluteFillObject;
    var22 = var10;
    var13 = copyDataProperties(var22, var21);
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_BASE_TERTIARY;
    var17 = 'backgroundColor';
    var10[var17] = var13;
    var14 = 'center';
    var15 = 'justifyContent';
    var10[var15] = var14;
    var13 = 'alignItems';
    var10[var13] = var14;
    var4['loadingContainer'] = var10;
    var10 = {};
    var18 = 'absolute';
    var10['position'] = var18;
    var4['bufferingSpinner'] = var10;
    var10 = {};
    var21 = var16.absoluteFillObject;
    var22 = var10;
    var18 = copyDataProperties(var22, var21);
    var10[var15] = var14;
    var10[var13] = var14;
    var4['bufferingSpinnerFullscreen'] = var10;
    var10 = {'height': '100%', 'width': '100%'};
    var4['video'] = var10;
    var10 = {'position': 'relative', 'height': '100%', 'width': '100%'};
    var4['videoContainer'] = var10;
    var10 = {};
    var21 = var16.absoluteFillObject;
    var22 = var10;
    var16 = copyDataProperties(var22, var21);
    var16 = 10;
    var16 = var7[var16];
    var18 = var12.bind(var1)(var16);
    var16 = var7[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.BLACK_500;
    var19 = var18.bind(var1)(var16);
    var18 = var19.alpha;
    var16 = 0.5;
    var18 = var18.bind(var19)(var16);
    var16 = var18.hex;
    var16 = var16.bind(var18)();
    var10[var17] = var16;
    var10[var15] = var14;
    var10[var13] = var14;
    var14 = 'column';
    var13 = 'flexDirection';
    var10[var13] = var14;
    var4['controls'] = var10;
    var10 = {'flexGrow': 0, 'flexShring': 1, 'flexDirection': 'row', 'justifyContent': 'flex-end', 'width': '100%'};
    var13 = 'flex-end';
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var10['padding'] = var14;
    var4['controlsTopBottom'] = var10;
    var10 = {'justifyContent': 'center', 'alignItems': 'center', 'flexGrow': 1, 'flexDirection': 'row'};
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_24;
    var10['gap'] = var14;
    var4['controlsMiddle'] = var10;
    var10 = {};
    var10['alignSelf'] = var13;
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
    var13 = var13.TEXT_NORMAL;
    var10['color'] = var13;
    var4['icon'] = var10;
    var10 = {};
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_SECONDARY;
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
    var _closure1_slot19 = var4;
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
    var _closure1_slot20 = var4;
    var5 = {};
    var9 = "function VideoQuestPlayerTsx3(){const{hasLoaded,showControls,playerState,PlayerState,isVideoEnded,externallyPaused,withSpring,SUBTLE_SPRING}=this.__closure;const show=hasLoaded&&(showControls.get()||playerState===PlayerState.PAUSED||playerState===PlayerState.ENDED||playerState===PlayerState.ERRORED||isVideoEnded||externallyPaused);return{opacity:withSpring(show?1:0,SUBTLE_SPRING),pointerEvents:show?'auto':'none'};}";
    var5['code'] = var9;
    var _closure1_slot21 = var5;
    var5 = {};
    var9 = 'function VideoQuestPlayerTsx4(){const{withTiming,progress,timingFast}=this.__closure;return{width:withTiming(progress.get()*100+"%",timingFast,\'animate-always\')};}';
    var5['code'] = var9;
    var _closure1_slot22 = var5;
    var5 = var8.memo;
    var2 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var7 = var1.style;
            var33 = var1.onLoad;
            var _closure2_slot0 = var33;
            var21 = var1.onEnd;
            var _closure2_slot1 = var21;
            var25 = var1.onToggleFullscreen;
            var _closure2_slot2 = var25;
            var15 = var1.orientation;
            var _closure2_slot3 = var15;
            var38 = var1.contentInsets;
            var37 = var1.handleToggleCaptions;
            var31 = var1.handleOpenTranscript;
            var23 = var1.isFullscreen;
            var3 = var1.externallyPaused;
            var _closure2_slot4 = var3;
            var40 = var1.captionsEnabled;
            var5 = undefined;
            if(!(var40 === var5)) { _fun0002_ip = 98; continue _fun0002 }
 96:
            var40 = false;
 98:
            var9 = var1.sourceQuestContent;
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
            var1 = _closure1_slot19;
            var16 = var1.bind(var5)();
            var6 = _closure1_slot4;
            var4 = var6.useRef;
            var1 = null;
            var49 = var4.bind(var6)(var1);
            _closure2_slot5 = var49;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 11;
            var4 = var8[var4];
            var10 = var6.bind(var5)(var4);
            var4 = var10.useVideoQuestModalContext;
            var4 = var4.bind(var10)();
            var29 = var4.quest;
            _closure2_slot6 = var29;
            var19 = var4.videoSessionId;
            var4 = 12;
            var4 = var8[var4];
            var6 = var6.bind(var5)(var4);
            var4 = var6.useQuestTaskDetails;
            var48 = var4.bind(var6)(var29);
            _closure2_slot7 = var48;
            var6 = var29.userStatus;
            var8 = var1 == var6;
            var4 = undefined;
            if(var8) { _fun0002_ip = 373; continue _fun0002 }
 367:
            var4 = var6.completedAt;
 373:
            var51 = var1 != var4;
            _closure2_slot8 = var51;
            var10 = _closure1_slot4;
            var8 = var10.useMemo;
            var6 = new Array(1);
            var6[0] = var29;
            var4 = function() {
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 13;
                var2 = var9[var1];
                var7 = undefined;
                var6 = var8.bind(var7)(var2);
                var5 = var6.resolveVideoQuestAsset;
                var4 = _closure2_slot6;
                var2 = 14;
                var2 = var9[var2];
                var2 = var8.bind(var7)(var2);
                var2 = var2.FirstPartyQuestTaskTypes;
                var12 = var2.WATCH_VIDEO_ON_MOBILE;
                var2 = var9[var1];
                var2 = var8.bind(var7)(var2);
                var2 = var2.VideoVariant;
                var11 = var2.VIDEO;
                var1 = var9[var1];
                var1 = var8.bind(var7)(var1);
                var1 = var1.VideoAssetProperty;
                var10 = var1.VIDEO;
                var14 = var6;
                var13 = var4;
                var1 = var14[var5](var13, var12, var11, var10, var9);
                return var1;
            };
            var12 = var8.bind(var10)(var4, var6);
            _closure2_slot9 = var12;
            var8 = var10.useMemo;
            var6 = new Array(1);
            var6[0] = var29;
            var4 = function() {
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 13;
                var2 = var9[var1];
                var7 = undefined;
                var6 = var8.bind(var7)(var2);
                var5 = var6.resolveVideoQuestAsset;
                var4 = _closure2_slot6;
                var2 = 14;
                var2 = var9[var2];
                var2 = var8.bind(var7)(var2);
                var2 = var2.FirstPartyQuestTaskTypes;
                var12 = var2.WATCH_VIDEO_ON_MOBILE;
                var2 = var9[var1];
                var2 = var8.bind(var7)(var2);
                var2 = var2.VideoVariant;
                var11 = var2.VIDEO_HLS;
                var1 = var9[var1];
                var1 = var8.bind(var7)(var1);
                var1 = var1.VideoAssetProperty;
                var10 = var1.VIDEO;
                var14 = var6;
                var13 = var4;
                var1 = var14[var5](var13, var12, var11, var10, var9);
                return var1;
            };
            var28 = var8.bind(var10)(var4, var6);
            _closure2_slot10 = var28;
            var6 = var1 == var28;
            var4 = undefined;
            if(var6) { _fun0002_ip = 459; continue _fun0002 }
 454:
            var4 = var28.url;
 459:
            if(!(var1 == var4)) { _fun0002_ip = 497; continue _fun0002 }
 463:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 13;
            var4 = var8[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.VideoQuestAssetId;
            var11 = var4.VIDEO_PLAYER_VIDEO;
            _fun0002_ip = 529; continue _fun0002;
 497:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 13;
            var4 = var8[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.VideoQuestAssetId;
            var11 = var4.VIDEO_PLAYER_VIDEO_HLS;
 529:
            var17 = _closure1_slot4;
            var6 = var17.useState;
            var4 = var48.targetSeconds;
            var4 = var6.bind(var17)(var4);
            var8 = _closure1_slot3;
            var13 = 2;
            var6 = var8.bind(var5)(var4, var13);
            var26 = 0;
            var43 = var6[var26];
            _closure2_slot11 = var43;
            var4 = 1;
            var6 = var6[var4];
            _closure2_slot12 = var6;
            var18 = _closure1_slot9;
            var6 = function(arg1) {
                var1 = arg1;
                var1 = var1.setVideoProgress;
                return var1;
            };
            var47 = var18.bind(var5)(var6);
            _closure2_slot13 = var47;
            var10 = _closure1_slot0;
            var20 = _closure1_slot2;
            var6 = 15;
            var6 = var20[var6];
            var6 = var10.bind(var5)(var6);
            var10 = var6.shallow;
            var6 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.videoProgress;
                    var1 = _closure2_slot6;
                    var1 = var1.id;
                    var1 = var2[var1];
                    var2 = null;
                    if(!(var2 == var1)) { _fun0003_ip = 59; continue _fun0003 }
 31:
                    var2 = {};
                    var4 = _closure2_slot7;
                    var4 = var4.progressSeconds;
                    var2['timestampSec'] = var4;
                    var3 = _closure2_slot11;
                    var2['duration'] = var3;
                    var1 = var2;
 59:
                    return var1;
                }
            };
            var22 = var18.bind(var5)(var6, var10);
            _closure2_slot14 = var22;
            var10 = var17.useState;
            var6 = _closure1_slot20;
            var6 = var6.LOADING;
            var6 = var10.bind(var17)(var6);
            var6 = var8.bind(var5)(var6, var13);
            var35 = var6[var26];
            _closure2_slot15 = var35;
            var6 = var6[var4];
            _closure2_slot16 = var6;
            var6 = var17.useState;
            var10 = false;
            var6 = var6.bind(var17)(var10);
            var6 = var8.bind(var5)(var6, var13);
            var24 = var6[var26];
            _closure2_slot17 = var24;
            var6 = var6[var4];
            _closure2_slot18 = var6;
            var34 = var24;
            if(!var34) { _fun0002_ip = 742; continue _fun0002 }
 728:
            var6 = _closure1_slot20;
            var6 = var6.ENDED;
            var34 = var35 === var6;
 742:
            if(!var34) { _fun0002_ip = 766; continue _fun0002 }
 745:
            var17 = _closure1_slot17;
            var8 = var22.timestampSec;
            var6 = var22.duration;
            var34 = var17.bind(var5)(var8, var6);
 766:
            _closure2_slot19 = var34;
            var36 = _closure1_slot0;
            var27 = _closure1_slot2;
            var18 = 16;
            var6 = var27[var18];
            var8 = var36.bind(var5)(var6);
            var6 = var8.useSharedValue;
            var44 = var6.bind(var8)(var10);
            _closure2_slot20 = var44;
            var6 = var27[var18];
            var17 = var36.bind(var5)(var6);
            var8 = var17.useAnimatedStyle;
            var6 = function Y() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot17;
                    if(!var3) { _fun0004_ip = 112; continue _fun0004 }
 10:
                    var4 = _closure2_slot20;
                    var1 = var4.get;
                    var1 = var1.bind(var4)();
                    if(var1) { _fun0004_ip = 47; continue _fun0004 }
 26:
                    var5 = _closure2_slot15;
                    var4 = _closure1_slot20;
                    var4 = var4.PAUSED;
                    var1 = var5 === var4;
 47:
                    if(var1) { _fun0004_ip = 71; continue _fun0004 }
 50:
                    var5 = _closure2_slot15;
                    var4 = _closure1_slot20;
                    var4 = var4.ENDED;
                    var1 = var5 === var4;
 71:
                    if(var1) { _fun0004_ip = 95; continue _fun0004 }
 74:
                    var5 = _closure2_slot15;
                    var4 = _closure1_slot20;
                    var4 = var4.ERRORED;
                    var1 = var5 === var4;
 95:
                    if(var1) { _fun0004_ip = 102; continue _fun0004 }
 98:
                    var1 = _closure2_slot19;
 102:
                    if(var1) { _fun0004_ip = 109; continue _fun0004 }
 105:
                    var1 = _closure2_slot4;
 109:
                    var3 = var1;
 112:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 17;
                    var4 = var6[var4];
                    var8 = undefined;
                    var6 = var5.bind(var8)(var4);
                    var5 = var6.withSpring;
                    var4 = 0;
                    if(!var3) { _fun0004_ip = 152; continue _fun0004 }
 149:
                    var4 = 1;
 152:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 18;
                    var2 = var9[var2];
                    var2 = var7.bind(var8)(var2);
                    var2 = var2.SUBTLE_SPRING;
                    var2 = var5.bind(var6)(var4, var2);
                    var1['opacity'] = var2;
                    var2 = 'none';
                    if(!var3) { _fun0004_ip = 199; continue _fun0004 }
 195:
                    var2 = 'auto';
 199:
                    var1['pointerEvents'] = var2;
                    return var1;
                }
            };
            var20 = {};
            var20['hasLoaded'] = var24;
            var20['showControls'] = var44;
            var20['playerState'] = var35;
            var24 = _closure1_slot20;
            var20['PlayerState'] = var24;
            var20['isVideoEnded'] = var34;
            var20['externallyPaused'] = var3;
            var30 = 17;
            var30 = var27[var30];
            var30 = var36.bind(var5)(var30);
            var30 = var30.withSpring;
            var20['withSpring'] = var30;
            var30 = 18;
            var30 = var27[var30];
            var30 = var36.bind(var5)(var30);
            var30 = var30.SUBTLE_SPRING;
            var20['SUBTLE_SPRING'] = var30;
            var6['__closure'] = var20;
            var20 = 4466097445215.0;
            var6['__workletHash'] = var20;
            var20 = _closure1_slot21;
            var6['__initData'] = var20;
            var20 = var8.bind(var17)(var6);
            var6 = var27[var18];
            var8 = var36.bind(var5)(var6);
            var6 = var8.useSharedValue;
            var52 = var6.bind(var8)(var26);
            _closure2_slot21 = var52;
            var6 = var27[var18];
            var17 = var36.bind(var5)(var6);
            var8 = var17.useAnimatedStyle;
            var6 = function H() {
                var1 = {};
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 19;
                var2 = var8[var2];
                var4 = undefined;
                var6 = var7.bind(var4)(var2);
                var5 = var6.withTiming;
                var3 = _closure2_slot21;
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
            var30 = {};
            var32 = 19;
            var32 = var27[var32];
            var32 = var36.bind(var5)(var32);
            var32 = var32.withTiming;
            var30['withTiming'] = var32;
            var30['progress'] = var52;
            var32 = 20;
            var32 = var27[var32];
            var32 = var36.bind(var5)(var32);
            var32 = var32.timingFast;
            var30['timingFast'] = var32;
            var6['__closure'] = var30;
            var30 = 13895400048400.0;
            var6['__workletHash'] = var30;
            var30 = _closure1_slot22;
            var6['__initData'] = var30;
            var17 = var8.bind(var17)(var6);
            var45 = _closure1_slot4;
            var8 = var45.useRef;
            var6 = -1;
            var6 = var8.bind(var45)(var6);
            _closure2_slot22 = var6;
            var30 = var45.useCallback;
            var8 = new Array(1);
            var8[0] = var44;
            var6 = function(arg1) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var1 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var11 = 0;
                        var4 = copyRestArgs(var11);
                        var1 = global;
                        var7 = var1.clearTimeout;
                        var3 = _closure2_slot22;
                        var6 = var3.current;
                        var3 = undefined;
                        var6 = var7.bind(var3)(var6);
                        var8 = _closure2_slot20;
                        var7 = var8.set;
                        var6 = true;
                        var6 = var7.bind(var8)(var6);
                        var2 = _closure2_slot22;
                        var7 = var1.setTimeout;
                        var6 = function() {
                            var3 = _closure2_slot20;
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
                        if(!(var2 == var6)) { _fun0005_ip = 101; continue _fun0005 }
 99:
                        return var3;
 101:
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
            var41 = var30.bind(var45)(var6, var8);
            var8 = _closure1_slot1;
            var6 = 21;
            var6 = var27[var6];
            var8 = var8.bind(var5)(var6);
            var6 = {};
            var6['duration'] = var43;
            var6['isQuestCompleted'] = var51;
            var6['playerState'] = var35;
            var27 = var29.id;
            var6['questId'] = var27;
            var6['videoSessionId'] = var19;
            var6['videoAssetId'] = var11;
            var6['sourceQuestContent'] = var9;
            var11 = var8.bind(var5)(var6);
            var8 = var11.handleBufferAnalytics;
            _closure2_slot23 = var8;
            var42 = var11.handleEndAnalytics;
            _closure2_slot24 = var42;
            var6 = var11.handleErrorAnalytics;
            _closure2_slot25 = var6;
            var50 = var11.handleLoadAnalytics;
            _closure2_slot26 = var50;
            var19 = var11.handleLoadStartAnalytics;
            _closure2_slot27 = var19;
            var27 = var11.handlePausePlaybackAnalytics;
            _closure2_slot28 = var27;
            var32 = var11.handleProgressAnalytics;
            _closure2_slot29 = var32;
            var36 = var11.handleReadyForDisplayAnalytics;
            _closure2_slot30 = var36;
            var9 = var11.handleResumePlaybackAnalytics;
            _closure2_slot31 = var9;
            var30 = var11.handleSeekAnalytics;
            _closure2_slot32 = var30;
            var11 = var45.useState;
            var39 = var11.bind(var45)(var10);
            var11 = _closure1_slot3;
            var39 = var11.bind(var5)(var39, var13);
            var11 = var39[var26];
            var39 = var39[var4];
            _closure2_slot33 = var39;
            var46 = var45.useCallback;
            var39 = new Array(1);
            var39[0] = var36;
            var36 = function() {
                var3 = _closure2_slot30;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var3 = _closure2_slot33;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var39 = var46.bind(var45)(var36, var39);
            var46 = var45.useCallback;
            var36 = new Array(4);
            var36[0] = var51;
            var53 = var22.timestampSec;
            var36[1] = var53;
            var36[2] = var50;
            var36[3] = var33;
            var33 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = arg1;
                    var7 = var3.duration;
                    var4 = _closure2_slot12;
                    var1 = undefined;
                    var4 = var4.bind(var1)(var7);
                    var5 = _closure2_slot18;
                    var4 = true;
                    var4 = var5.bind(var1)(var4);
                    var4 = _closure2_slot26;
                    var4 = var4.bind(var1)();
                    var4 = _closure2_slot5;
                    var4 = var4.current;
                    var5 = null;
                    if(!(var5 != var4)) { _fun0006_ip = 156; continue _fun0006 }
 56:
                    var4 = _closure2_slot14;
                    var8 = var4.timestampSec;
                    var6 = _closure2_slot8;
                    var4 = !var6;
                    if(var6) { _fun0006_ip = 87; continue _fun0006 }
 76:
                    var6 = 3;
                    var6 = var7 - var6;
                    var4 = var8 < var6;
 87:
                    if(!var4) { _fun0006_ip = 117; continue _fun0006 }
 90:
                    var4 = _closure2_slot5;
                    var7 = var4.current;
                    var6 = var7.seek;
                    var4 = 1;
                    var4 = var8 - var4;
                    var4 = var6.bind(var7)(var4);
 117:
                    var6 = _closure2_slot16;
                    var4 = _closure1_slot20;
                    var4 = var4.PLAYING;
                    var4 = var6.bind(var1)(var4);
                    var4 = _closure2_slot0;
                    if(!(var5 != var4)) { _fun0006_ip = 156; continue _fun0006 }
 147:
                    var2 = _closure2_slot0;
                    var2 = var2.bind(var1)(var3);
 156:
                    return var1;
                }
            };
            var46 = var46.bind(var45)(var33, var36);
            var36 = var45.useCallback;
            var33 = new Array(4);
            var33[0] = var35;
            var33[1] = var27;
            var33[2] = var9;
            var33[3] = var34;
            var9 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = arguments[0];
                    var1 = undefined;
                    if(!(var2 === var1)) { _fun0007_ip = 11; continue _fun0007 }
 9:
                    var2 = {};
 11:
                    var4 = var2.shouldRestartVideo;
                    if(!(var4 === var1)) { _fun0007_ip = 23; continue _fun0007 }
 21:
                    var4 = true;
 23:
                    var6 = _closure2_slot15;
                    var5 = _closure1_slot20;
                    var5 = var5.ERRORED;
                    if(!(var6 !== var5)) { _fun0007_ip = 172; continue _fun0007 }
 50:
                    var5 = _closure2_slot19;
                    if(!var5) { _fun0007_ip = 60; continue _fun0007 }
 57:
                    if(var4) { _fun0007_ip = 172; continue _fun0007 }
 60:
                    var5 = _closure2_slot15;
                    var4 = _closure1_slot20;
                    var4 = var4.PAUSED;
                    if(!(var5 !== var4)) { _fun0007_ip = 143; continue _fun0007 }
 78:
                    var5 = _closure2_slot15;
                    var4 = _closure1_slot20;
                    var4 = var4.LOADING;
                    if(!(var5 !== var4)) { _fun0007_ip = 143; continue _fun0007 }
 96:
                    var5 = _closure2_slot15;
                    var4 = _closure1_slot20;
                    var4 = var4.PLAYING;
                    if(!(var5 === var4)) { _fun0007_ip = 227; continue _fun0007 }
 114:
                    var5 = _closure2_slot16;
                    var4 = _closure1_slot20;
                    var4 = var4.PAUSED;
                    var4 = var5.bind(var1)(var4);
                    var4 = _closure2_slot28;
                    var4 = var4.bind(var1)();
                    _fun0007_ip = 227; continue _fun0007;
 143:
                    var5 = _closure2_slot16;
                    var4 = _closure1_slot20;
                    var4 = var4.PLAYING;
                    var4 = var5.bind(var1)(var4);
                    var4 = _closure2_slot31;
                    var4 = var4.bind(var1)();
                    _fun0007_ip = 227; continue _fun0007;
 172:
                    var4 = _closure2_slot5;
                    var6 = var4.current;
                    var4 = null;
                    if(!(var4 != var6)) { _fun0007_ip = 200; continue _fun0007 }
 187:
                    var5 = var6.seek;
                    var4 = 0;
                    var4 = var5.bind(var6)(var4);
 200:
                    var4 = _closure2_slot16;
                    var3 = _closure1_slot20;
                    var3 = var3.PLAYING;
                    var3 = var4.bind(var1)(var3);
                    var2 = _closure2_slot31;
                    var2 = var2.bind(var1)();
 227:
                    return var1;
                }
            };
            var9 = var36.bind(var45)(var9, var33);
            _closure2_slot34 = var9;
            var50 = var45.useCallback;
            var36 = new Array(1);
            var36[0] = var9;
            var33 = function() {
                var2 = _closure2_slot34;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            var36 = var50.bind(var45)(var33, var36);
            var50 = var45.useCallback;
            var33 = new Array(2);
            var33[0] = var35;
            var33[1] = var27;
            var27 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var4 = _closure2_slot15;
                    var3 = _closure1_slot20;
                    var3 = var3.PLAYING;
                    if(!(var4 === var3)) { _fun0008_ip = 53; continue _fun0008 }
 24:
                    var4 = _closure2_slot16;
                    var2 = _closure1_slot20;
                    var3 = var2.PAUSED;
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var1 = _closure2_slot28;
                    var1 = var1.bind(var2)();
 53:
                    var1 = undefined;
                    return var1;
                }
            };
            var27 = var50.bind(var45)(var27, var33);
            _closure2_slot35 = var27;
            var50 = var45.useEffect;
            var33 = new Array(1);
            var33[0] = var27;
            var27 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 22;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var4 = var2.ComponentDispatch;
                var3 = var4.subscribe;
                var1 = _closure1_slot11;
                var2 = var1.QUEST_GAME_LINK_OPENED;
                var1 = _closure2_slot35;
                var1 = var3.bind(var4)(var2, var1);
                var1 = function() {
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 22;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var5 = var3.ComponentDispatch;
                    var4 = var5.unsubscribe;
                    var2 = _closure1_slot11;
                    var3 = var2.QUEST_GAME_LINK_OPENED;
                    var2 = _closure2_slot35;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                return var1;
            };
            var27 = var50.bind(var45)(var27, var33);
            var33 = var45.useCallback;
            var27 = new Array(2);
            var27[0] = var25;
            var27[1] = var15;
            var25 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0009_ip = 35; continue _fun0009 }
 13:
                    var3 = _closure2_slot2;
                    var2 = {};
                    var1 = _closure2_slot3;
                    var2['orientation'] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 35:
                    var1 = undefined;
                    return var1;
                }
            };
            var25 = var33.bind(var45)(var25, var27);
            var33 = var45.useCallback;
            var27 = new Array(2);
            var27[0] = var44;
            var27[1] = var9;
            var9 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var3 = _closure2_slot20;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0010_ip = 35; continue _fun0010 }
 19:
                    var4 = _closure2_slot20;
                    var3 = var4.set;
                    var2 = false;
                    var2 = var3.bind(var4)(var2);
 35:
                    var3 = _closure2_slot34;
                    var2 = {};
                    var1 = false;
                    var2['shouldRestartVideo'] = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var9 = var33.bind(var45)(var9, var27);
            var44 = var45.useCallback;
            var33 = new Array(3);
            var33[0] = var43;
            var33[1] = var52;
            var27 = var22.maxTimestampSec;
            var33[2] = var27;
            var27 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var2 = _closure2_slot5;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0011_ip = 170; continue _fun0011 }
 21:
                    var2 = global;
                    var5 = var2.Math;
                    var4 = var5.max;
                    var7 = var2.Math;
                    var6 = var7.min;
                    var2 = _closure2_slot14;
                    var3 = var2.maxTimestampSec;
                    var2 = arg1;
                    var3 = var6.bind(var7)(var2, var3);
                    var2 = 0;
                    var3 = var4.bind(var5)(var2, var3);
                    var4 = _closure2_slot21;
                    var2 = var4.get;
                    var4 = var2.bind(var4)();
                    var2 = _closure2_slot11;
                    var5 = var4 * var2;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 23;
                    var4 = var4[var2];
                    var2 = undefined;
                    var4 = var6.bind(var2)(var4);
                    var2 = var4.isAndroid;
                    var2 = var2.bind(var4)();
                    if(!var2) { _fun0011_ip = 150; continue _fun0011 }
 130:
                    var2 = _closure2_slot5;
                    var4 = var2.current;
                    var2 = var4.seek;
                    var2 = var2.bind(var4)(var5);
 150:
                    var1 = _closure2_slot5;
                    var2 = var1.current;
                    var1 = var2.seek;
                    var1 = var1.bind(var2)(var3);
 170:
                    var1 = undefined;
                    return var1;
                }
            };
            var27 = var44.bind(var45)(var27, var33);
            _closure2_slot36 = var27;
            var44 = var45.useCallback;
            var33 = new Array(5);
            var33[0] = var43;
            var33[1] = var52;
            var33[2] = var30;
            var30 = var29.id;
            var33[3] = var30;
            var33[4] = var47;
            var30 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var2 = arg1;
                    var3 = _closure2_slot5;
                    var4 = var3.current;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0012_ip = 101; continue _fun0012 }
 21:
                    var4 = _closure2_slot11;
                    var3 = 0;
                    if(!(var4 > var3)) { _fun0012_ip = 91; continue _fun0012 }
 31:
                    var5 = _closure2_slot21;
                    var4 = var5.set;
                    var6 = var2.currentTime;
                    var3 = _closure2_slot11;
                    var3 = var6 / var3;
                    var3 = var4.bind(var5)(var3);
                    var6 = _closure2_slot13;
                    var3 = _closure2_slot6;
                    var5 = var3.id;
                    var4 = var2.currentTime;
                    var3 = _closure2_slot11;
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5, var4, var3);
 91:
                    var2 = _closure2_slot32;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 101:
                    var1 = undefined;
                    return var1;
                }
            };
            var45 = var44.bind(var45)(var30, var33);
            var24 = var24.ERRORED;
            var33 = var35 === var24;
            if(var33) { _fun0002_ip = 1717; continue _fun0002 }
 1684:
            var50 = _closure1_slot18;
            var57 = var22.timestampSec;
            var56 = var22.maxTimestampSec;
            var55 = var22.duration;
            var58 = undefined;
            var54 = var51;
            var24 = var58[var50](var57, var56, var55, var54, var53);
            var33 = !var24;
 1717:
            _closure2_slot37 = var33;
            var24 = _closure1_slot4;
            var50 = var24.useCallback;
            var44 = new Array(4);
            var44[0] = var27;
            var44[1] = var43;
            var44[2] = var52;
            var44[3] = var33;
            var30 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var2 = _closure2_slot37;
                    if(var2) { _fun0013_ip = 49; continue _fun0013 }
 10:
                    var3 = _closure2_slot21;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = _closure2_slot11;
                    var2 = var3 * var2;
                    var3 = _closure2_slot36;
                    var1 = 10;
                    var2 = var2 + var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 49:
                    var1 = undefined;
                    return var1;
                }
            };
            var30 = var50.bind(var24)(var30, var44);
            var50 = var24.useCallback;
            var44 = new Array(4);
            var44[0] = var27;
            var44[1] = var43;
            var44[2] = var52;
            var44[3] = var35;
            var27 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var2 = _closure2_slot21;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = _closure2_slot11;
                    var2 = var2 * var1;
                    var4 = _closure2_slot36;
                    var1 = 10;
                    var2 = var2 - var1;
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var5 = _closure2_slot15;
                    var4 = _closure1_slot20;
                    var4 = var4.ENDED;
                    if(!(var5 === var4)) { _fun0014_ip = 82; continue _fun0014 }
 63:
                    var3 = _closure2_slot16;
                    var2 = _closure1_slot20;
                    var2 = var2.PLAYING;
                    var2 = var3.bind(var1)(var2);
 82:
                    return var1;
                }
            };
            var27 = var50.bind(var24)(var27, var44);
            var27 = var41.bind(var5)(var27);
            var30 = var41.bind(var5)(var30);
            var41 = var24.useRef;
            var51 = var41.bind(var24)(var26);
            _closure2_slot38 = var51;
            var41 = var24.useRef;
            var50 = var41.bind(var24)(var26);
            _closure2_slot39 = var50;
            var44 = var24.useCallback;
            var41 = new Array(7);
            var41[0] = var52;
            var41[1] = var29;
            var41[2] = var51;
            var41[3] = var50;
            var48 = var48.taskType;
            var41[4] = var48;
            var41[5] = var47;
            var41[6] = var32;
            var32 = function(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.seekableDuration;
                    var4 = 0;
                    if(!(var4 !== var2)) { _fun0015_ip = 31; continue _fun0015 }
 15:
                    var3 = var1.currentTime;
                    var2 = var1.seekableDuration;
                    var4 = var3 / var2;
 31:
                    var5 = var1.currentTime;
                    var3 = _closure2_slot38;
                    var3 = var3.current;
                    if(!(var5 >= var3)) { _fun0015_ip = 178; continue _fun0015 }
 56:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 24;
                    var3 = var6[var3];
                    var7 = undefined;
                    var8 = var5.bind(var7)(var3);
                    var6 = var8.sendVideoProgress;
                    var5 = _closure2_slot6;
                    var3 = var1.currentTime;
                    var3 = var6.bind(var8)(var5, var3);
                    var6 = _closure2_slot29;
                    var5 = var1.seekableDuration;
                    var3 = var1.currentTime;
                    var3 = var6.bind(var7)(var4, var5, var3);
                    var5 = _closure2_slot38;
                    var6 = var1.currentTime;
                    var3 = 6;
                    var6 = var6 + var3;
                    var3 = global;
                    var7 = var3.Math;
                    var3 = var7.random;
                    var7 = var3.bind(var7)();
                    var3 = 2;
                    var3 = var3 * var7;
                    var3 = var6 + var3;
                    var5['current'] = var3;
 178:
                    var5 = var1.currentTime;
                    var3 = _closure2_slot39;
                    var3 = var3.current;
                    if(!(var5 >= var3)) { _fun0015_ip = 283; continue _fun0015 }
 197:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 25;
                    var5 = var5[var3];
                    var3 = undefined;
                    var8 = var6.bind(var3)(var5);
                    var7 = var8.updateOptimisticProgress;
                    var3 = _closure2_slot6;
                    var6 = var3.id;
                    var3 = _closure2_slot7;
                    var5 = var3.taskType;
                    var3 = var1.currentTime;
                    var3 = var7.bind(var8)(var6, var5, var3);
                    var5 = _closure2_slot39;
                    var6 = var1.currentTime;
                    var3 = 1;
                    var3 = var6 + var3;
                    var5['current'] = var3;
 283:
                    var7 = _closure2_slot13;
                    var3 = _closure2_slot6;
                    var6 = var3.id;
                    var5 = var1.currentTime;
                    var3 = var1.seekableDuration;
                    var1 = undefined;
                    var3 = var7.bind(var1)(var6, var5, var3);
                    var3 = _closure2_slot21;
                    var2 = var3.set;
                    var2 = var2.bind(var3)(var4);
                    return var1;
                }
            };
            var44 = var44.bind(var24)(var32, var41);
            var41 = var24.useCallback;
            var32 = new Array(4);
            var32[0] = var43;
            var32[1] = var29;
            var32[2] = var42;
            var32[3] = var21;
            var21 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 24;
                    var2 = var2[var1];
                    var1 = undefined;
                    var7 = var4.bind(var1)(var2);
                    var6 = var7.sendVideoProgress;
                    var5 = _closure2_slot6;
                    var4 = _closure2_slot11;
                    var4 = var6.bind(var7)(var5, var4);
                    var4 = _closure2_slot24;
                    var4 = var4.bind(var1)();
                    var4 = _closure2_slot16;
                    var3 = _closure1_slot20;
                    var3 = var3.ENDED;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0016_ip = 93; continue _fun0016 }
 85:
                    var2 = _closure2_slot1;
                    var2 = var2.bind(var1)();
 93:
                    return var1;
                }
            };
            var42 = var41.bind(var24)(var21, var32);
            var32 = var24.useCallback;
            var21 = new Array(1);
            var21[0] = var19;
            var19 = function() {
                var4 = _closure2_slot16;
                var1 = _closure1_slot20;
                var3 = var1.LOADING;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var2 = _closure2_slot27;
                var2 = var2.bind(var1)();
                return var1;
            };
            var43 = var32.bind(var24)(var19, var21);
            var21 = var24.useCallback;
            var19 = new Array(1);
            var19[0] = var6;
            var6 = function(arg1) {
                var4 = _closure2_slot16;
                var1 = _closure1_slot20;
                var3 = var1.ERRORED;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot25;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var41 = var21.bind(var24)(var6, var19);
            var19 = _closure1_slot0;
            var21 = _closure1_slot2;
            var6 = 26;
            var6 = var21[var6];
            var32 = var19.bind(var5)(var6);
            var21 = var32.useStateFromStores;
            var6 = _closure1_slot8;
            var19 = new Array(1);
            var19[0] = var6;
            var6 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                return var1;
            };
            var19 = var21.bind(var32)(var19, var6);
            var6 = _closure1_slot10;
            var6 = var6.ACTIVE;
            var6 = var19 === var6;
            var21 = var24.useMemo;
            var19 = new Array(2);
            var19[0] = var28;
            var19[1] = var12;
            var12 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var1 = _closure2_slot9;
                    var5 = null;
                    var2 = var5 == var1;
                    var1 = null;
                    if(var2) { _fun0017_ip = 63; continue _fun0017 }
 18:
                    var2 = {};
                    var3 = _closure2_slot10;
                    var6 = var5 == var3;
                    var3 = undefined;
                    if(var6) { _fun0017_ip = 42; continue _fun0017 }
 33:
                    var6 = _closure2_slot10;
                    var3 = var6.url;
 42:
                    if(!(var5 == var3)) { _fun0017_ip = 55; continue _fun0017 }
 46:
                    var4 = _closure2_slot9;
                    var3 = var4.url;
 55:
                    var2['uri'] = var3;
                    var1 = var2;
 63:
                    return var1;
                }
            };
            var48 = var21.bind(var24)(var12, var19);
            var21 = var24.useLayoutEffect;
            var19 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 23;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.isAndroid;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0018_ip = 41; continue _fun0018 }
 39:
                    return var2;
 41:
                    var2 = _closure2_slot5;
                    var2 = var2.current;
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                            var2 = _closure3_slot0;
                            var5 = null;
                            var2 = var5 == var2;
                            if(var2) { _fun0019_ip = 30; continue _fun0019 }
 16:
                            var3 = _closure3_slot0;
                            var3 = var3.setNativeProps;
                            var2 = var5 == var3;
 30:
                            if(var2) { _fun0019_ip = 69; continue _fun0019 }
 33:
                            var3 = _closure3_slot0;
                            var2 = var3.setNativeProps;
                            var1 = {};
                            var4 = true;
                            var1['paused'] = var4;
                            var4 = {};
                            var4['uri'] = var5;
                            var1['src'] = var4;
                            var1 = var2.bind(var3)(var1);
 69:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    return var1;
                }
            };
            var12 = new Array(0);
            var12 = var21.bind(var24)(var19, var12);
            var32 = !var6;
            if(!var6) { _fun0002_ip = 2122; continue _fun0002 }
 2108:
            var6 = _closure1_slot20;
            var6 = var6.PAUSED;
            var32 = var35 === var6;
 2122:
            if(var32) { _fun0002_ip = 2139; continue _fun0002 }
 2125:
            var6 = _closure1_slot20;
            var6 = var6.LOADING;
            var32 = var35 === var6;
 2139:
            if(var32) { _fun0002_ip = 2145; continue _fun0002 }
 2142:
            var32 = var3;
 2145:
            var6 = _closure1_slot4;
            var3 = var6.useState;
            var12 = var3.bind(var6)(var10);
            var3 = _closure1_slot3;
            var3 = var3.bind(var5)(var12, var13);
            var12 = var3[var26];
            var3 = var3[var4];
            _closure2_slot40 = var3;
            var4 = var6.useCallback;
            var3 = new Array(1);
            var3[0] = var8;
            var2 = function(arg1) {
                var2 = arg1;
                var4 = _closure2_slot23;
                var1 = undefined;
                var4 = var4.bind(var1)(var2);
                var3 = _closure2_slot40;
                var2 = var2.isBuffering;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var47 = var4.bind(var6)(var2, var3);
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 27;
            var2 = var4[var2];
            var2 = var3.bind(var5)(var2);
            var6 = var2.bind(var5)();
            if(!(var1 != var48)) { _fun0002_ip = 4315; continue _fun0002 }
 2238:
            var24 = var23;
            if(!var24) { _fun0002_ip = 2248; continue _fun0002 }
 2244:
            var24 = var1 != var6;
 2248:
            if(!var24) { _fun0002_ip = 2290; continue _fun0002 }
 2251:
            var2 = {};
            var4 = _closure1_slot23;
            var3 = 'right';
            var3 = var4.bind(var5)(var6, var3);
            var2['paddingRight'] = var3;
            var3 = 'left';
            var3 = var4.bind(var5)(var6, var3);
            var2['paddingLeft'] = var3;
            var24 = var2;
 2290:
            var4 = _closure1_slot12;
            var3 = _closure1_slot5;
            var2 = {};
            var8 = var16.container;
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var2['style'] = var6;
            var2['accessible'] = var10;
            var8 = _closure1_slot13;
            var7 = _closure1_slot6;
            var6 = {};
            var13 = var16.videoContainer;
            var6['style'] = var13;
            var6['onPress'] = var9;
            var21 = _closure1_slot0;
            var9 = _closure1_slot2;
            var28 = 28;
            var13 = var9[var28];
            var13 = var21.bind(var5)(var13);
            var19 = var13.intl;
            var13 = var19.string;
            var9 = var9[var28];
            var9 = var21.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.FlNoSU;
            var9 = var13.bind(var19)(var9);
            var6['accessibilityLabel'] = var9;
            var9 = _closure1_slot20;
            var9 = var9.ERRORED;
            var13 = var35 !== var9;
            if(!var13) { _fun0002_ip = 2528; continue _fun0002 }
 2426:
            var21 = _closure1_slot12;
            var19 = _closure1_slot15;
            var9 = {'mixWithOthers': 'mix', 'ref': null, 'accessible': false, 'importantForAccessibility': 'no-hide-descendants', 'accessibilityRole': 'none'};
            var9['ref'] = var49;
            var49 = var16.video;
            var9['style'] = var49;
            var9['paused'] = var32;
            var9['source'] = var48;
            var9['onBuffer'] = var47;
            var9['onLoad'] = var46;
            var9['onSeek'] = var45;
            var9['onProgress'] = var44;
            var9['onLoadStart'] = var43;
            var9['onEnd'] = var42;
            var9['onError'] = var41;
            var9['onReadyForDisplay'] = var39;
            var39 = 'contain';
            var9['resizeMode'] = var39;
            var13 = var21.bind(var5)(var19, var9);
 2528:
            var9 = new Array(6);
            var9[0] = var13;
            var21 = _closure1_slot12;
            var19 = _closure1_slot0;
            var39 = _closure1_slot2;
            var13 = 29;
            var13 = var39[var13];
            var13 = var19.bind(var5)(var13);
            var19 = var13.VideoQuestCaptions;
            var13 = {};
            var13['quest'] = var29;
            var22 = var22.timestampSec;
            var13['currentTime'] = var22;
            var13['visible'] = var40;
            var22 = {};
            var29 = var1 == var38;
            var39 = undefined;
            if(var29) { _fun0002_ip = 2605; continue _fun0002 }
 2600:
            var39 = var38.top;
 2605:
            var41 = var1 != var39;
            var29 = 0;
            if(!var41) { _fun0002_ip = 2617; continue _fun0002 }
 2614:
            var29 = var39;
 2617:
            var22['top'] = var29;
            var29 = var1 == var38;
            var39 = undefined;
            if(var29) { _fun0002_ip = 2635; continue _fun0002 }
 2630:
            var39 = var38.bottom;
 2635:
            var41 = var1 != var39;
            var29 = 0;
            if(!var41) { _fun0002_ip = 2647; continue _fun0002 }
 2644:
            var29 = var39;
 2647:
            var22['bottom'] = var29;
            var29 = var1 == var38;
            var39 = undefined;
            if(var29) { _fun0002_ip = 2665; continue _fun0002 }
 2660:
            var39 = var38.left;
 2665:
            var41 = var1 != var39;
            var29 = 0;
            if(!var41) { _fun0002_ip = 2677; continue _fun0002 }
 2674:
            var29 = var39;
 2677:
            var22['left'] = var29;
            var29 = var1 == var38;
            var39 = undefined;
            if(var29) { _fun0002_ip = 2695; continue _fun0002 }
 2690:
            var39 = var38.right;
 2695:
            var41 = var1 != var39;
            var29 = 0;
            if(!var41) { _fun0002_ip = 2707; continue _fun0002 }
 2704:
            var29 = var39;
 2707:
            var22['right'] = var29;
            var13['style'] = var22;
            var13 = var21.bind(var5)(var19, var13);
            var9[1] = var13;
            if(!var12) { _fun0002_ip = 2884; continue _fun0002 }
 2731:
            var21 = _closure1_slot12;
            var19 = _closure1_slot7;
            var13 = {};
            var22 = true;
            var13['animating'] = var22;
            var29 = var16.bufferingSpinner;
            var22 = new Array(2);
            var22[0] = var29;
            if(var23) { _fun0002_ip = 2829; continue _fun0002 }
 2765:
            var23 = {};
            var29 = var1 == var38;
            var39 = undefined;
            if(var29) { _fun0002_ip = 2781; continue _fun0002 }
 2776:
            var39 = var38.top;
 2781:
            var41 = var1 != var39;
            var29 = 0;
            if(!var41) { _fun0002_ip = 2793; continue _fun0002 }
 2790:
            var29 = var39;
 2793:
            var23['top'] = var29;
            var39 = var1 == var38;
            var29 = undefined;
            if(var39) { _fun0002_ip = 2811; continue _fun0002 }
 2806:
            var29 = var38.left;
 2811:
            var38 = var1 != var29;
            var26 = 0;
            if(!var38) { _fun0002_ip = 2823; continue _fun0002 }
 2820:
            var26 = var29;
 2823:
            var23['left'] = var26;
            _fun0002_ip = 2835; continue _fun0002;
 2829:
            var23 = var16.bufferingSpinnerFullscreen;
 2835:
            var22[1] = var23;
            var13['style'] = var22;
            var23 = _closure1_slot1;
            var26 = _closure1_slot2;
            var22 = 7;
            var22 = var26[var22];
            var22 = var23.bind(var5)(var22);
            var22 = var22.unsafe_rawColors;
            var22 = var22.WHITE_500;
            var13['color'] = var22;
            var12 = var21.bind(var5)(var19, var13);
 2884:
            var9[2] = var12;
            var11 = !var11;
            if(!var11) { _fun0002_ip = 2943; continue _fun0002 }
 2894:
            var19 = _closure1_slot12;
            var13 = _closure1_slot5;
            var12 = {};
            var21 = var16.loadingContainer;
            var12['style'] = var21;
            var22 = _closure1_slot7;
            var21 = {};
            var23 = true;
            var21['animating'] = var23;
            var21 = var19.bind(var5)(var22, var21);
            var12['children'] = var21;
            var11 = var19.bind(var5)(var13, var12);
 2943:
            var9[3] = var11;
            var13 = _closure1_slot13;
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
            if(!var10) { _fun0002_ip = 3387; continue _fun0002 }
 3019:
            var21 = _closure1_slot13;
            var20 = _closure1_slot5;
            var15 = {};
            var23 = var16.controlsTopBottom;
            var22 = new Array(2);
            var22[0] = var23;
            var22[1] = var24;
            var15['style'] = var22;
            var29 = _closure1_slot12;
            var38 = _closure1_slot0;
            var41 = _closure1_slot2;
            var23 = 30;
            var22 = var41[var23];
            var22 = var38.bind(var5)(var22);
            var26 = var22.PressableOpacity;
            var22 = {};
            var39 = 'button';
            var22['accessibilityRole'] = var39;
            var42 = var41[var28];
            var42 = var38.bind(var5)(var42);
            var44 = var42.intl;
            var43 = var44.string;
            var42 = var41[var28];
            var42 = var38.bind(var5)(var42);
            var42 = var42.t;
            var42 = var42.bDSZOz;
            var42 = var43.bind(var44)(var42);
            var22['accessibilityLabel'] = var42;
            var22['onPress'] = var37;
            var37 = var16.controlButton;
            var22['style'] = var37;
            var37 = 31;
            var37 = var41[var37];
            var37 = var38.bind(var5)(var37);
            var38 = var37.ClosedCaptionsOutlineIcon;
            var37 = {};
            if(var40) { _fun0002_ip = 3189; continue _fun0002 }
 3176:
            var40 = var16.iconDisabled;
            var40 = var40.color;
            _fun0002_ip = 3199; continue _fun0002;
 3189:
            var41 = var16.icon;
            var40 = var41.color;
 3199:
            var37['color'] = var40;
            var37 = var29.bind(var5)(var38, var37);
            var22['children'] = var37;
            var26 = var29.bind(var5)(var26, var22);
            var22 = new Array(2);
            var22[0] = var26;
            var29 = _closure1_slot12;
            var37 = _closure1_slot0;
            var38 = _closure1_slot2;
            var23 = var38[var23];
            var23 = var37.bind(var5)(var23);
            var26 = var23.PressableOpacity;
            var23 = {};
            var23['accessibilityRole'] = var39;
            var39 = var38[var28];
            var39 = var37.bind(var5)(var39);
            var41 = var39.intl;
            var40 = var41.string;
            var39 = var38[var28];
            var39 = var37.bind(var5)(var39);
            var39 = var39.t;
            var39 = var39.KCzjTk;
            var39 = var40.bind(var41)(var39);
            var23['accessibilityLabel'] = var39;
            var23['onPress'] = var31;
            var31 = var16.controlButton;
            var23['style'] = var31;
            var31 = 32;
            var31 = var38[var31];
            var31 = var37.bind(var5)(var31);
            var37 = var31.TranscriptOutlineIcon;
            var31 = {};
            var38 = var16.iconDisabled;
            var38 = var38.color;
            var31['color'] = var38;
            var31 = var29.bind(var5)(var37, var31);
            var23['children'] = var31;
            var23 = var29.bind(var5)(var26, var23);
            var22[1] = var23;
            var15['children'] = var22;
            var19 = var21.bind(var5)(var20, var15);
 3387:
            var15 = new Array(3);
            var15[0] = var19;
            var21 = _closure1_slot13;
            var20 = _closure1_slot5;
            var19 = {};
            var22 = var16.controlsMiddle;
            var19['style'] = var22;
            var31 = _closure1_slot12;
            var40 = _closure1_slot0;
            var37 = _closure1_slot2;
            var23 = 33;
            var22 = var37[var23];
            var22 = var40.bind(var5)(var22);
            var26 = var22.VideoQuestPlayerControlButton;
            var22 = {};
            var29 = _closure1_slot20;
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
            var38 = var38.r9s3Ul;
            var38 = var39.bind(var41)(var38);
            var22['accessibilityLabel'] = var38;
            var22['onPress'] = var27;
            var27 = 34;
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
            var37 = var37.RscU7O;
            var37 = var38.bind(var39)(var37);
            var26['accessibilityLabel'] = var37;
            var26['onPress'] = var36;
            if(var34) { _fun0002_ip = 3760; continue _fun0002 }
 3675:
            var34 = _closure1_slot20;
            var34 = var34.ERRORED;
            if(!(var35 !== var34)) { _fun0002_ip = 3760; continue _fun0002 }
 3689:
            var35 = _closure1_slot12;
            var36 = _closure1_slot0;
            var37 = _closure1_slot2;
            if(var32) { _fun0002_ip = 3724; continue _fun0002 }
 3704:
            var32 = 37;
            var32 = var37[var32];
            var32 = var36.bind(var5)(var32);
            var34 = var32.PauseIcon;
            _fun0002_ip = 3742; continue _fun0002;
 3724:
            var32 = 36;
            var32 = var37[var32];
            var32 = var36.bind(var5)(var32);
            var34 = var32.PlayIcon;
 3742:
            var32 = {};
            var36 = 'lg';
            var32['size'] = var36;
            var32 = var35.bind(var5)(var34, var32);
            _fun0002_ip = 3806; continue _fun0002;
 3760:
            var36 = _closure1_slot12;
            var35 = _closure1_slot0;
            var37 = _closure1_slot2;
            var34 = 35;
            var34 = var37[var34];
            var34 = var35.bind(var5)(var34);
            var35 = var34.RetryIcon;
            var34 = {};
            var37 = 'lg';
            var34['size'] = var37;
            var32 = var36.bind(var5)(var35, var34);
 3806:
            var26['children'] = var32;
            var26 = var31.bind(var5)(var27, var26);
            var22[1] = var26;
            var27 = _closure1_slot12;
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
            var33 = var33.zWDcND;
            var33 = var34.bind(var35)(var33);
            var23['accessibilityLabel'] = var33;
            var23['onPress'] = var30;
            var30 = 38;
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
            if(!var10) { _fun0002_ip = 4186; continue _fun0002 }
 4002:
            var22 = _closure1_slot12;
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
            var23 = 30;
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
            var28 = var28.vKZT5u;
            var28 = var29.bind(var30)(var28);
            var23['accessibilityLabel'] = var28;
            var23['onPress'] = var25;
            var25 = var16.controlButton;
            var23['style'] = var25;
            var25 = 39;
            var25 = var27[var25];
            var25 = var26.bind(var5)(var25);
            var26 = var25.FullscreenEnterIcon;
            var25 = {};
            var25 = var22.bind(var5)(var26, var25);
            var23['children'] = var25;
            var23 = var22.bind(var5)(var24, var23);
            var20['children'] = var23;
            var19 = var22.bind(var5)(var21, var20);
 4186:
            var15[2] = var19;
            var11['children'] = var15;
            var11 = var13.bind(var5)(var12, var11);
            var9[4] = var11;
            if(!var10) { _fun0002_ip = 4289; continue _fun0002 }
 4207:
            var13 = _closure1_slot12;
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
 4289:
            var9[5] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 4315:
            return var1;
        }
    };
    var2 = var5.bind(var8)(var2);
    var5 = 40;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/native/VideoQuestModal/VideoQuestPlayer.tsx';
    var5 = var6.bind(var7)(var5);
    var3['PlayerState'] = var4;
    var3['VideoQuestPlayer'] = var2;
    return var1;
})();