// app/modules/quests/native/BountiesModal/BountyVideo.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
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
        var4 = 0;
        var8 = var6[var4];
        var1 = undefined;
        var8 = var7.bind(var1)(var8);
        var _closure1_slot3 = var8;
        var8 = 1;
        var9 = var6[var8];
        var8 = metroImportAll;
        var8 = var8.bind(var1)(var9);
        var _closure1_slot4 = var8;
        var8 = 2;
        var8 = var6[var8];
        var8 = var5.bind(var1)(var8);
        var9 = var8.View;
        var _closure1_slot5 = var9;
        var9 = var8.StyleSheet;
        var _closure1_slot6 = var9;
        var8 = var8.ActivityIndicator;
        var _closure1_slot7 = var8;
        var8 = 3;
        var8 = var6[var8];
        var8 = var5.bind(var1)(var8);
        var8 = var8.QuestsExperimentLocations;
        var _closure1_slot8 = var8;
        var8 = 4;
        var8 = var6[var8];
        var8 = var5.bind(var1)(var8);
        var9 = var8.jsx;
        var _closure1_slot9 = var9;
        var9 = var8.jsxs;
        var _closure1_slot10 = var9;
        var8 = var8.Fragment;
        var _closure1_slot11 = var8;
        var8 = 5;
        var8 = var6[var8];
        var9 = var5.bind(var1)(var8);
        var8 = var9.isAndroid;
        var8 = var8.bind(var9)();
        if(!var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var4 = 150;
case 2:
        var _closure1_slot12 = var4;
        var4 = {'top': 48, 'bottom': 16, 'left': 16, 'right': 16};
        var _closure1_slot13 = var4;
        var4 = 7;
        var4 = var6[var4];
        var4 = var7.bind(var1)(var4);
        var4 = var4.radii;
        var4 = var4.lg;
        var _closure1_slot14 = var4;
        var4 = 8;
        var4 = var6[var4];
        var8 = var5.bind(var1)(var4);
        var7 = var8.createStyles;
        var4 = function() {
            var1 = {};
            var2 = {};
            var3 = _closure1_slot6;
            var10 = var3.absoluteFillObject;
            var11 = var2;
            var4 = copyDataProperties(var11, var10);
            var6 = 'hidden';
            var4 = 'overflow';
            var2[3] = var6;
            var6 = _closure1_slot14;
            var4 = 'borderRadius';
            var2[3] = var6;
            var1['videoContainer'] = var2;
            var2 = {'position': 'absolute', 'top': null, 'left': null, 'flexDirection': 'row', 'alignItems': 'center'};
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 7;
            var4 = var9[var6];
            var8 = undefined;
            var4 = var7.bind(var8)(var4);
            var4 = var4.space;
            var4 = var4.PX_8;
            var2['top'] = var4;
            var4 = var9[var6];
            var4 = var7.bind(var8)(var4);
            var4 = var4.space;
            var4 = var4.PX_8;
            var2['left'] = var4;
            var4 = 'center';
            var6 = var9[var6];
            var6 = var7.bind(var8)(var6);
            var6 = var6.space;
            var6 = var6.PX_8;
            var2['gap'] = var6;
            var1['leftRow'] = var2;
            var2 = {'position': 'absolute', 'bottom': 0};
            var7 = _closure1_slot0;
            var6 = 9;
            var6 = var9[var6];
            var6 = var7.bind(var8)(var6);
            var6 = var6.PROGRESS_BAR_HEIGHT;
            var2['height'] = var6;
            var6 = _closure1_slot14;
            var2['left'] = var6;
            var5 = _closure1_slot14;
            var2['right'] = var5;
            var1['progress'] = var2;
            var2 = {};
            var10 = var3.absoluteFillObject;
            var11 = var2;
            var3 = copyDataProperties(var11, var10);
            var5 = '#000000';
            var3 = 'backgroundColor';
            var2[2] = var5;
            var3 = 'justifyContent';
            var2[2] = var4;
            var3 = 'alignItems';
            var2[2] = var4;
            var1['poster'] = var2;
            var2 = {};
            var3 = 'top';
            var2['transformOrigin'] = var3;
            var1['peekOrigin'] = var2;
            return var1;
        };
        var4 = var7.bind(var8)(var4);
        var _closure1_slot15 = var4;
        var4 = {};
        var7 = 'function BountyVideoTsx1(){const{posterOpacity}=this.__closure;return{opacity:posterOpacity.get()};}';
        var4['code'] = var7;
        var _closure1_slot16 = var4;
        var4 = {};
        var7 = 'function BountyVideoTsx2(){const{isScrollingInBoundsSharedValue,withTiming,isActive,timingStandard}=this.__closure;var _isScrollingInBoundsS;const isScrollingInBounds=((_isScrollingInBoundsS=isScrollingInBoundsSharedValue)===null||_isScrollingInBoundsS===void 0?void 0:_isScrollingInBoundsS.get())===true;return{opacity:withTiming(isActive&&!isScrollingInBounds?1:0,timingStandard)};}';
        var4['code'] = var7;
        var _closure1_slot17 = var4;
        var4 = {};
        var7 = 'function BountyVideoTsx3(){const{peekScale,AUTO_SCROLL_PEEK_SCALE,AUTO_SCROLL_PEEK_TOP_OFFSET}=this.__closure;if(peekScale==null){return{};}const scale=peekScale.get();const scaleProgress=(1-scale)/(1-AUTO_SCROLL_PEEK_SCALE);return{transform:[{translateY:scaleProgress*AUTO_SCROLL_PEEK_TOP_OFFSET},{scale:scale}]};}';
        var4['code'] = var7;
        var _closure1_slot18 = var4;
        var4 = 24;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/quests/native/BountiesModal/BountyVideo.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function BountyVideo(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var30 = var1.bounty;
                var _closure2_slot0 = var30;
                var28 = var1.sourceQuestContent;
                var18 = var1.isCompleted;
                var2 = var1.isCtaVisible;
                var23 = var1.isEndCardVisible;
                var11 = var1.isScrollIndicatorEnabled;
                var24 = var1.isProgressBarVisible;
                var14 = var1.orbsBalance;
                var47 = var1.handleVideoEnd;
                var5 = var1.handleVideoProgress;
                var _closure2_slot1 = var5;
                var46 = var1.handleVideoPaused;
                var45 = var1.handleVideoResumed;
                var7 = var1.handleVideoError;
                var _closure2_slot2 = var7;
                var43 = var1.onLoadStart;
                var42 = var1.onBuffer;
                var8 = var1.onFirstFrame;
                var _closure2_slot3 = var8;
                var38 = var1.onVideoTracks;
                var16 = var1.rewardRemainingSeconds;
                var17 = var1.rewardTotalSeconds;
                var25 = var1.normalizedProgress;
                var49 = var1.initialProgress;
                var34 = var1.repeat;
                var26 = var1.isActive;
                var4 = undefined;
                if(!(var26 === var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var26 = false;
case 4:
                var _closure2_slot4 = var26;
                var50 = var1.isRecapPageRevealed;
                if(!(var50 === var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var50 = false;
case 6:
                var31 = var1.isScrollingInBoundsSharedValue;
                var _closure2_slot5 = var31;
                var15 = var1.renderEndCard;
                var54 = var1.playerRef;
                var33 = var1.onPlayerStateChange;
                var13 = var1.balanceWidgetPillResetKey;
                var21 = var1.shouldLoadHls;
                if(!(var21 === var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var21 = true;
case 8:
                var56 = var1.width;
                var _closure2_slot6 = var56;
                var22 = var1.height;
                var _closure2_slot7 = var22;
                var20 = var1.peekScale;
                var _closure2_slot8 = var20;
                var52 = var1.softDownloadCapsEnabled;
                if(!(var52 === var4)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var52 = false;
case 10:
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var _closure2_slot11 = var4;
                var _closure2_slot12 = var4;
                var _closure2_slot13 = var4;
                var _closure2_slot14 = var4;
                var1 = _closure1_slot15;
                var9 = var1.bind(var4)();
                var6 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 10;
                var1 = var12[var1];
                var27 = var6.bind(var4)(var1);
                var19 = var27.useBountiesExperience;
                var1 = _closure1_slot8;
                var1 = var1.VIDEO_MODAL_MOBILE;
                var1 = var19.bind(var27)(var1);
                var53 = var1.ownedByVerticalScrollExperiment;
                var51 = var1.stage1Enabled;
                var1 = 11;
                var1 = var12[var1];
                var12 = var6.bind(var4)(var1);
                var6 = var12.useIsBountiesVerticalScrollExperimentEnabled;
                var1 = 'BountyVideo';
                var1 = var6.bind(var12)(var1);
                if(!var52) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var52 = !var26;
case 12:
                var55 = _closure1_slot4;
                var6 = var55.useState;
                var36 = false;
                var6 = var6.bind(var55)(var36);
                var48 = _closure1_slot3;
                var44 = 2;
                var6 = var48.bind(var4)(var6, var44);
                var41 = 0;
                var27 = var6[var41];
                var29 = 1;
                var6 = var6[var29];
                _closure2_slot9 = var6;
                var6 = var55.useState;
                var6 = var6.bind(var55)(var36);
                var6 = var48.bind(var4)(var6, var44);
                var35 = var6[var41];
                _closure2_slot10 = var35;
                var19 = var6[var29];
                _closure2_slot11 = var19;
                var6 = var55.useRef;
                var12 = null;
                var6 = var6.bind(var55)(var12);
                _closure2_slot12 = var6;
                var37 = _closure1_slot0;
                var57 = _closure1_slot2;
                var6 = 12;
                var32 = var57[var6];
                var39 = var37.bind(var4)(var32);
                var32 = var39.useSharedValue;
                var32 = var32.bind(var39)(var29);
                _closure2_slot13 = var32;
                var40 = var55.useMemo;
                var39 = new Array(3);
                var39[0] = var30;
                var39[1] = var56;
                var39[2] = var22;
                var22 = function() {
                    var6 = _closure2_slot0;
                    var5 = _closure2_slot6;
                    var4 = _closure2_slot7;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getScaledFirstFrameImageUrl;
                    var1 = {};
                    var6 = var6.videoHls;
                    var1['assetUrl'] = var6;
                    var1['width'] = var5;
                    var1['height'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var40 = var40.bind(var55)(var22, var39);
                var22 = 13;
                var22 = var57[var22];
                var39 = var37.bind(var4)(var22);
                var37 = var39.useToken;
                var56 = _closure1_slot1;
                var22 = 7;
                var22 = var57[var22];
                var22 = var56.bind(var4)(var22);
                var22 = var22.colors;
                var22 = var22.TEXT_DEFAULT;
                var39 = var37.bind(var39)(var22);
                var57 = var30.id;
                var22 = global;
                var22 = var22.HermesInternal;
                var56 = var22.concat;
                var37 = '';
                var22 = ':';
                var22 = var56.bind(var37)(var57, var22, var21);
                var37 = var55.useState;
                var37 = var37.bind(var55)(var22);
                var37 = var48.bind(var4)(var37, var44);
                var41 = var37[var41];
                var37 = var37[var29];
                if(!(var41 !== var22)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                var37 = var37.bind(var4)(var22);
                var19 = var19.bind(var4)(var36);
                var19 = var32.set;
                var19 = var19.bind(var32)(var29);
case 14:
                var19 = _closure1_slot4;
                var37 = var19.useEffect;
                var29 = new Array(1);
                var29[0] = var22;
                var22 = function() {
                    var1 = function() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var2 = _closure2_slot12;
                            var3 = var2.current;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                            var3 = global;
                            var5 = var3.clearTimeout;
                            var3 = _closure2_slot12;
                            var4 = var3.current;
                            var3 = undefined;
                            var3 = var5.bind(var3)(var4);
                            var1 = _closure2_slot12;
                            var1['current'] = var2;
case 16:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    return var1;
                };
                var22 = var37.bind(var19)(var22, var29);
                var37 = var19.useEffect;
                var29 = new Array(2);
                var29[0] = var35;
                var29[1] = var32;
                var22 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var2 = _closure2_slot10;
                        if(!var2) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                        var3 = _closure2_slot13;
                        var2 = var3.set;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var1 = 14;
                        var1 = var8[var1];
                        var4 = undefined;
                        var6 = var7.bind(var4)(var1);
                        var5 = var6.withTiming;
                        var1 = 15;
                        var1 = var8[var1];
                        var1 = var7.bind(var4)(var1);
                        var4 = var1.timingFast;
                        var1 = 0;
                        var1 = var5.bind(var6)(var1, var4);
                        var1 = var2.bind(var3)(var1);
case 18:
                        var1 = undefined;
                        return var1;
                    }
                };
                var22 = var37.bind(var19)(var22, var29);
                var37 = var19.useCallback;
                var29 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var2 = _closure2_slot12;
                        var2 = var2.current;
                        var3 = null;
                        if(!(var3 != var2)) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                        var2 = global;
                        var5 = var2.clearTimeout;
                        var2 = _closure2_slot12;
                        var4 = var2.current;
                        var2 = undefined;
                        var2 = var5.bind(var2)(var4);
                        var2 = _closure2_slot12;
                        var2['current'] = var3;
case 16:
                        var3 = _closure2_slot11;
                        var1 = undefined;
                        var2 = true;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    }
                };
                var22 = new Array(0);
                var29 = var37.bind(var19)(var29, var22);
                _closure2_slot14 = var29;
                var37 = var19.useCallback;
                var22 = new Array(1);
                var22[0] = var8;
                var8 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var2 = _closure2_slot3;
                        var3 = null;
                        if(!(var3 != var2)) { _fun0006_ip = 20; continue _fun0006 }
case 21:
                        var4 = _closure2_slot3;
                        var2 = undefined;
                        var2 = var4.bind(var2)();
case 20:
                        var2 = _closure2_slot12;
                        var2 = var2.current;
                        if(!(var3 != var2)) { _fun0006_ip = 22; continue _fun0006 }
case 23:
                        var2 = global;
                        var4 = var2.clearTimeout;
                        var2 = _closure2_slot12;
                        var3 = var2.current;
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
case 22:
                        var3 = _closure2_slot12;
                        var1 = global;
                        var5 = var1.setTimeout;
                        var4 = _closure1_slot12;
                        var1 = undefined;
                        var2 = function() {
                            var4 = _closure2_slot11;
                            var1 = undefined;
                            var3 = true;
                            var3 = var4.bind(var1)(var3);
                            var3 = _closure2_slot12;
                            var2 = null;
                            var3['current'] = var2;
                            return var1;
                        };
                        var2 = var5.bind(var1)(var2, var4);
                        var3['current'] = var2;
                        return var1;
                    }
                };
                var41 = var37.bind(var19)(var8, var22);
                var22 = var19.useCallback;
                var8 = new Array(2);
                var8[0] = var29;
                var8[1] = var7;
                var7 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var3 = _closure2_slot14;
                        var1 = undefined;
                        var3 = var3.bind(var1)();
                        var4 = _closure2_slot2;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0007_ip = 24; continue _fun0007 }
case 20:
                        var3 = _closure2_slot2;
                        var2 = arg1;
                        var2 = var3.bind(var1)(var2);
case 24:
                        return var1;
                    }
                };
                var44 = var22.bind(var19)(var7, var8);
                var8 = var19.useCallback;
                var7 = new Array(1);
                var7[0] = var5;
                var5 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var3 = arg1;
                        var2 = var3.currentTime;
                        var1 = 0;
                        if(!(var2 > var1)) { _fun0008_ip = 25; continue _fun0008 }
case 26:
                        var4 = _closure2_slot9;
                        var2 = undefined;
                        var1 = true;
                        var1 = var4.bind(var2)(var1);
case 25:
                        var2 = _closure2_slot1;
                        var1 = undefined;
                        var2 = var2.bind(var1)(var3);
                        return var1;
                    }
                };
                var48 = var8.bind(var19)(var5, var7);
                var22 = _closure1_slot0;
                var29 = _closure1_slot2;
                var5 = var29[var6];
                var8 = var22.bind(var4)(var5);
                var7 = var8.useAnimatedStyle;
                var5 = function Ce() {
                    var1 = {};
                    var3 = _closure2_slot13;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var1['opacity'] = var2;
                    return var1;
                };
                var19 = {};
                var19['posterOpacity'] = var32;
                var5['__closure'] = var19;
                var19 = 4975136521719.0;
                var5['__workletHash'] = var19;
                var19 = _closure1_slot16;
                var5['__initData'] = var19;
                var37 = var7.bind(var8)(var5);
                var5 = var29[var6];
                var8 = var22.bind(var4)(var5);
                var7 = var8.useAnimatedStyle;
                var5 = function Ae() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var2 = _closure2_slot5;
                        var1 = null;
                        var1 = var1 == var2;
                        var7 = undefined;
                        var8 = undefined;
                        if(var1) { _fun0009_ip = 27; continue _fun0009 }
case 28:
                        var2 = _closure2_slot5;
                        var1 = var2.get;
                        var8 = var1.bind(var2)();
case 27:
                        var1 = {};
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 14;
                        var4 = var6[var4];
                        var5 = var5.bind(var7)(var4);
                        var4 = var5.withTiming;
                        var6 = _closure2_slot4;
                        var3 = 0;
                        if(!var6) { _fun0009_ip = 29; continue _fun0009 }
case 30:
                        var6 = true;
                        var3 = 0;
                        if(!(var6 !== var8)) { _fun0009_ip = 29; continue _fun0009 }
case 18:
                        var3 = 1;
case 29:
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var2 = 15;
                        var2 = var8[var2];
                        var2 = var6.bind(var7)(var2);
                        var2 = var2.timingStandard;
                        var2 = var4.bind(var5)(var3, var2);
                        var1['opacity'] = var2;
                        return var1;
                    }
                };
                var19 = {};
                var19['isScrollingInBoundsSharedValue'] = var31;
                var31 = 14;
                var31 = var29[var31];
                var31 = var22.bind(var4)(var31);
                var31 = var31.withTiming;
                var19['withTiming'] = var31;
                var19['isActive'] = var26;
                var31 = 15;
                var31 = var29[var31];
                var31 = var22.bind(var4)(var31);
                var31 = var31.timingStandard;
                var19['timingStandard'] = var31;
                var5['__closure'] = var19;
                var19 = 12676706441349.0;
                var5['__workletHash'] = var19;
                var19 = _closure1_slot17;
                var5['__initData'] = var19;
                var19 = var7.bind(var8)(var5);
                var5 = var29[var6];
                var7 = var22.bind(var4)(var5);
                var5 = var7.useAnimatedStyle;
                var3 = function Fe() {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var3 = _closure2_slot8;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0010_ip = 31; continue _fun0010 }
case 21:
                        var2 = _closure2_slot8;
                        var1 = var2.get;
                        var4 = var1.bind(var2)();
                        var1 = {};
                        var3 = {};
                        var10 = 1;
                        var6 = var10 - var4;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var5 = 16;
                        var2 = var9[var5];
                        var7 = undefined;
                        var2 = var8.bind(var7)(var2);
                        var2 = var2.AUTO_SCROLL_PEEK_SCALE;
                        var2 = var10 - var2;
                        var5 = var9[var5];
                        var5 = var8.bind(var7)(var5);
                        var5 = var5.AUTO_SCROLL_PEEK_TOP_OFFSET;
                        var2 = var6 / var2;
                        var2 = var2 * var5;
                        var3['translateY'] = var2;
                        var2 = new Array(2);
                        var2[0] = var3;
                        var3 = {};
                        var3['scale'] = var4;
                        var2[1] = var3;
                        var1['transform'] = var2;
                        return var1;
case 31:
                        var1 = {};
                        return var1;
                    }
                };
                var8 = {};
                var8['peekScale'] = var20;
                var20 = 16;
                var31 = var29[var20];
                var31 = var22.bind(var4)(var31);
                var31 = var31.AUTO_SCROLL_PEEK_SCALE;
                var8['AUTO_SCROLL_PEEK_SCALE'] = var31;
                var20 = var29[var20];
                var20 = var22.bind(var4)(var20);
                var20 = var20.AUTO_SCROLL_PEEK_TOP_OFFSET;
                var8['AUTO_SCROLL_PEEK_TOP_OFFSET'] = var20;
                var3['__closure'] = var8;
                var8 = 7501077341815.0;
                var3['__workletHash'] = var8;
                var8 = _closure1_slot18;
                var3['__initData'] = var8;
                var20 = var5.bind(var7)(var3);
                var29 = var2;
                if(!var1) { _fun0002_ip = 32; continue _fun0002 }
case 33:
                var1 = var2;
                if(!var2) { _fun0002_ip = 34; continue _fun0002 }
case 35:
                var1 = !var23;
case 34:
                var29 = var1;
case 32:
                var3 = _closure1_slot10;
                var2 = _closure1_slot11;
                var1 = {};
                var7 = _closure1_slot1;
                var5 = _closure1_slot2;
                var5 = var5[var6];
                var5 = var7.bind(var4)(var5);
                var7 = var5.View;
                var5 = {};
                var8 = _closure1_slot6;
                var22 = var8.absoluteFillObject;
                var8 = new Array(3);
                var8[0] = var22;
                var22 = var9.peekOrigin;
                var8[1] = var22;
                var8[2] = var20;
                var5['style'] = var8;
                var20 = _closure1_slot5;
                var8 = {};
                var22 = var9.videoContainer;
                var8['style'] = var22;
                var22 = null;
                if(!var21) { _fun0002_ip = 36; continue _fun0002 }
case 37:
                var32 = _closure1_slot9;
                var31 = _closure1_slot0;
                var55 = _closure1_slot2;
                var21 = 17;
                var21 = var55[var21];
                var21 = var31.bind(var4)(var21);
                var31 = var21.AdVideoPlayer;
                var21 = {};
                var21['ref'] = var54;
                var54 = {};
                var55 = var30.videoHls;
                var54['uri'] = var55;
                var21['source'] = var54;
                var51 = !var51;
                if(!var51) { _fun0002_ip = 38; continue _fun0002 }
case 39:
                var51 = !var53;
case 38:
                if(!var51) { _fun0002_ip = 40; continue _fun0002 }
case 41:
                var51 = undefined;
case 40:
                var21['automaticallyWaitsToMinimizeStalling'] = var51;
                var51 = undefined;
                if(!var52) { _fun0002_ip = 42; continue _fun0002 }
case 43:
                var54 = _closure1_slot0;
                var55 = _closure1_slot2;
                var53 = 18;
                var53 = var55[var53];
                var53 = var54.bind(var4)(var53);
                var51 = var53.SOFT_CAP_PRELOAD_MAX_BITRATE;
case 42:
                var21['maxBitRate'] = var51;
                var51 = undefined;
                if(!var52) { _fun0002_ip = 44; continue _fun0002 }
case 45:
                var54 = _closure1_slot0;
                var55 = _closure1_slot2;
                var53 = 18;
                var53 = var55[var53];
                var53 = var54.bind(var4)(var53);
                var51 = var53.SOFT_CAP_PRELOAD_BUFFER_CONFIG;
case 44:
                var21['bufferConfig'] = var51;
                var51 = undefined;
                if(!var52) { _fun0002_ip = 46; continue _fun0002 }
case 47:
                var53 = _closure1_slot0;
                var54 = _closure1_slot2;
                var52 = 18;
                var52 = var54[var52];
                var52 = var53.bind(var4)(var52);
                var51 = var52.SOFT_CAP_PRELOAD_FORWARD_BUFFER_SEC;
case 46:
                var21['preferredForwardBufferDuration'] = var51;
                var21['initialProgress'] = var49;
                var21['isFullscreen'] = var36;
                var49 = !var26;
                if(var49) { _fun0002_ip = 48; continue _fun0002 }
case 49:
                var49 = var23;
case 48:
                if(var49) { _fun0002_ip = 50; continue _fun0002 }
case 51:
                var49 = var50;
case 50:
                var21['externallyPaused'] = var49;
                var49 = _closure1_slot6;
                var49 = var49.absoluteFillObject;
                var21['style'] = var49;
                var49 = _closure1_slot13;
                var21['contentInsets'] = var49;
                var21['onProgress'] = var48;
                var21['onEnd'] = var47;
                var21['onPausePlayback'] = var46;
                var21['onResumePlayback'] = var45;
                var21['onError'] = var44;
                var21['onLoadStart'] = var43;
                var21['onBuffer'] = var42;
                var21['onReadyForDisplay'] = var41;
                var21['onVideoTracks'] = var38;
                var21['hideControls'] = var23;
                var21['showSkipButtons'] = var36;
                var21['repeat'] = var34;
                var34 = 'center';
                var21['bufferingSpinnerPlacement'] = var34;
                var21['onPlayerStateChange'] = var33;
                var22 = var32.bind(var4)(var31, var21);
case 36:
                var21 = new Array(5);
                var21[0] = var22;
                if(!(var12 == var40)) { _fun0002_ip = 52; continue _fun0002 }
case 53:
                var32 = _closure1_slot9;
                var31 = _closure1_slot1;
                var22 = _closure1_slot2;
                var22 = var22[var6];
                var22 = var31.bind(var4)(var22);
                var31 = var22.View;
                var22 = {};
                var34 = var9.poster;
                var33 = new Array(2);
                var33[0] = var34;
                var33[1] = var37;
                var22['style'] = var33;
                var33 = 'none';
                var22['pointerEvents'] = var33;
                var22 = var32.bind(var4)(var31, var22);
                _fun0002_ip = 54; continue _fun0002;
case 52:
                var33 = _closure1_slot10;
                var36 = _closure1_slot1;
                var38 = _closure1_slot2;
                var31 = var38[var6];
                var31 = var36.bind(var4)(var31);
                var32 = var31.View;
                var31 = {};
                var41 = var9.poster;
                var34 = new Array(2);
                var34[0] = var41;
                var34[1] = var37;
                var31['style'] = var34;
                var34 = 'none';
                var31['pointerEvents'] = var34;
                var37 = _closure1_slot9;
                var34 = 19;
                var34 = var38[var34];
                var36 = var36.bind(var4)(var34);
                var34 = {};
                var38 = _closure1_slot6;
                var38 = var38.absoluteFillObject;
                var34['style'] = var38;
                var38 = {};
                var38['uri'] = var40;
                var34['source'] = var38;
                var38 = 'cover';
                var34['resizeMode'] = var38;
                var36 = var37.bind(var4)(var36, var34);
                var34 = new Array(2);
                var34[0] = var36;
                var35 = !var35;
                if(!var35) { _fun0002_ip = 55; continue _fun0002 }
case 56:
                var38 = _closure1_slot9;
                var37 = _closure1_slot7;
                var36 = {'animating': true, 'size': 'small'};
                var36['color'] = var39;
                var35 = var38.bind(var4)(var37, var36);
case 55:
                var34[1] = var35;
                var31['children'] = var34;
                var22 = var33.bind(var4)(var32, var31);
case 54:
                var21[1] = var22;
                var22 = var12 == var15;
                var12 = undefined;
                if(var22) { _fun0002_ip = 57; continue _fun0002 }
case 58:
                var12 = var15.bind(var4)();
case 57:
                var21[2] = var12;
                if(!var11) { _fun0002_ip = 59; continue _fun0002 }
case 60:
                var22 = _closure1_slot9;
                var15 = _closure1_slot1;
                var31 = _closure1_slot2;
                var12 = 20;
                var12 = var31[var12];
                var15 = var15.bind(var4)(var12);
                var12 = {};
                var12['opacityStyle'] = var19;
                if(!var26) { _fun0002_ip = 61; continue _fun0002 }
case 62:
                var26 = var27;
case 61:
                var12['enabled'] = var26;
                var12['isEndCardVisible'] = var23;
                var11 = var22.bind(var4)(var15, var12);
case 59:
                var21[3] = var11;
                var12 = _closure1_slot9;
                var11 = _closure1_slot1;
                var15 = _closure1_slot2;
                var22 = var15[var6];
                var22 = var11.bind(var4)(var22);
                var23 = var22.View;
                var22 = {};
                var26 = _closure1_slot6;
                var27 = var26.absoluteFillObject;
                var26 = new Array(2);
                var26[0] = var27;
                var26[1] = var19;
                var22['style'] = var26;
                var26 = 'box-none';
                var22['pointerEvents'] = var26;
                var26 = 21;
                var26 = var15[var26];
                var27 = var11.bind(var4)(var26);
                var26 = {};
                var26['bounty'] = var30;
                var26['visible'] = var29;
                var26['sourceQuestContent'] = var28;
                var26 = var12.bind(var4)(var27, var26);
                var22['children'] = var26;
                var22 = var12.bind(var4)(var23, var22);
                var21[4] = var22;
                var8['children'] = var21;
                var20 = var3.bind(var4)(var20, var8);
                var8 = new Array(2);
                var8[0] = var20;
                var20 = var15[var6];
                var20 = var11.bind(var4)(var20);
                var21 = var20.View;
                var20 = {};
                var23 = var9.progress;
                var22 = new Array(2);
                var22[0] = var23;
                var22[1] = var19;
                var20['style'] = var22;
                var22 = 9;
                var22 = var15[var22];
                var23 = var11.bind(var4)(var22);
                var22 = {};
                var22['progress'] = var25;
                var22['visible'] = var24;
                var22 = var12.bind(var4)(var23, var22);
                var20['children'] = var22;
                var20 = var12.bind(var4)(var21, var20);
                var8[1] = var20;
                var5['children'] = var8;
                var7 = var3.bind(var4)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var8 = _closure1_slot10;
                var6 = var15[var6];
                var6 = var11.bind(var4)(var6);
                var7 = var6.View;
                var6 = {};
                var20 = var9.leftRow;
                var9 = new Array(2);
                var9[0] = var20;
                var9[1] = var19;
                var6['style'] = var9;
                var9 = 22;
                var9 = var15[var9];
                var11 = var11.bind(var4)(var9);
                var9 = {};
                var9['isCompleted'] = var18;
                var9['totalSeconds'] = var17;
                var9['remainingSeconds'] = var16;
                var11 = var12.bind(var4)(var11, var9);
                var9 = new Array(2);
                var9[0] = var11;
                var11 = _closure1_slot0;
                var10 = 23;
                var10 = var15[var10];
                var10 = var11.bind(var4)(var10);
                var11 = var10.BalanceWidgetPill;
                var10 = {};
                var10['balance'] = var14;
                var10 = var12.bind(var4)(var11, var10, var13);
                var9[1] = var10;
                var6['children'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var3['BountyVideo'] = var2;
        return var1;
    }
})();