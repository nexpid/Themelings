// app/modules/quests/native/BountiesModal/BountiesScrollVideoItem.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function BountiesScrollVideoItemInner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var34 = var2.bounty;
            var _closure2_slot0 = var34;
            var33 = var2.sourceQuestContent;
            var _closure2_slot1 = var33;
            var7 = var2.width;
            var _closure2_slot2 = var7;
            var1 = var2.height;
            var _closure2_slot3 = var1;
            var16 = var2.isActive;
            var _closure2_slot4 = var16;
            var15 = var2.isRecapPageRevealed;
            var29 = var2.isRecapPageOnTop;
            var14 = var2.isScrollingInBoundsSharedValue;
            var _closure2_slot5 = var14;
            var30 = var2.isScrollIndicatorOverlayEnabled;
            var4 = undefined;
            if(!(var30 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var30 = false;
case 2:
            var10 = var2.shouldLoadHls;
            if(!(var10 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var10 = true;
case 4:
            var19 = var2.scrollAffordance;
            var9 = var2.peekScale;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var _closure2_slot17 = var4;
            var _closure2_slot18 = var4;
            var _closure2_slot19 = var4;
            var _closure2_slot20 = var4;
            var6 = _closure1_slot5;
            var3 = var6.useMemo;
            var2 = new Array(2);
            var2[0] = var7;
            var2[1] = var1;
            var1 = function() {
                var1 = {};
                var3 = _closure2_slot2;
                var1['width'] = var3;
                var2 = _closure2_slot3;
                var1['height'] = var2;
                return var1;
            };
            var6 = var3.bind(var6)(var1, var2);
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var12 = var2.bind(var4)(var1);
            var11 = var12.useStateFromStores;
            var1 = _closure1_slot8;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                var3 = _closure1_slot8;
                var2 = var3.isBountyCompleted;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var32 = var11.bind(var12)(var7, var1);
            _closure2_slot6 = var32;
            var1 = 10;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useBountiesExperience;
            var1 = _closure1_slot9;
            var1 = var1.VIDEO_MODAL_MOBILE;
            var2 = var2.bind(var3)(var1);
            var18 = var2.loopingEnabled;
            var1 = var2.ownedByVerticalScrollExperiment;
            var3 = var2.stage1Enabled;
            var17 = var2.orbAmount;
            _closure2_slot7 = var17;
            var2 = var2.rewardTimerSeconds;
            var11 = _closure1_slot0;
            var7 = _closure1_slot2;
            var20 = 11;
            var7 = var7[var20];
            var7 = var11.bind(var4)(var7);
            var7 = var7.BountyVideoEndMode;
            if(var18) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            if(var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var37 = var7.END_CARD_WITH_CTA;
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var37 = var7.END_CARD;
case 10:
            _fun0001_ip = 11; continue _fun0001;
case 6:
            var37 = var7.LOOP;
case 11:
            if(var3) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            if(var1) { _fun0001_ip = 12; continue _fun0001 }
case 14:
            var3 = var34.rewardTimerSeconds;
            var1 = 1000;
            var36 = var1 * var3;
            _fun0001_ip = 15; continue _fun0001;
case 12:
            var1 = 1000;
            var36 = var1 * var2;
case 15:
            _closure2_slot8 = var36;
            var2 = _closure1_slot5;
            var1 = var2.useRef;
            var21 = null;
            var13 = var1.bind(var2)(var21);
            var2 = {};
            var2['isActive'] = var16;
            var2['playerRef'] = var13;
            var1 = function useResumeOnActive(arg1) {
                var2 = arg1;
                var7 = var2.isActive;
                var _closure3_slot0 = var7;
                var6 = var2.playerRef;
                var _closure3_slot1 = var6;
                var5 = _closure1_slot5;
                var4 = var5.useRef;
                var2 = true;
                var2 = var4.bind(var5)(var2);
                var _closure3_slot2 = var2;
                var5 = _closure1_slot5;
                var4 = var5.useRef;
                var2 = null;
                var2 = var4.bind(var5)(var2);
                var _closure3_slot3 = var2;
                var8 = _closure1_slot5;
                var5 = var8.useCallback;
                var4 = function(arg1) {
                    var2 = _closure3_slot3;
                    var1 = arg1;
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var2 = new Array(0);
                var2 = var5.bind(var8)(var4, var2);
                var5 = _closure1_slot5;
                var4 = var5.useEffect;
                var3 = new Array(2);
                var3[0] = var7;
                var3[1] = var6;
                var1 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var2 = _closure3_slot2;
                        var2 = var2.current;
                        if(var2) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                        var2 = _closure3_slot0;
                        if(!var2) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                        var3 = _closure3_slot3;
                        var4 = var3.current;
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 8;
                        var5 = var5[var3];
                        var3 = undefined;
                        var3 = var6.bind(var3)(var5);
                        var3 = var3.PlayerState;
                        var3 = var3.PAUSED;
                        var2 = var4 === var3;
case 18:
                        if(!var2) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                        var2 = _closure3_slot1;
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0002_ip = 20; continue _fun0002 }
case 22:
                        var2 = var3.play;
                        var2 = var2.bind(var3)();
                        _fun0002_ip = 20; continue _fun0002;
case 16:
                        var2 = _closure3_slot2;
                        var1 = false;
                        var2['current'] = var1;
case 20:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var4.bind(var5)(var1, var3);
                var1 = {};
                var1['handlePlayerStateChange'] = var2;
                return var1;
            };
            var1 = var1.bind(var4)(var2);
            var12 = var1.handlePlayerStateChange;
            var2 = _closure1_slot5;
            var1 = var2.useState;
            var2 = var1.bind(var2)(var16);
            var1 = _closure1_slot4;
            var23 = 2;
            var1 = var1.bind(var4)(var2, var23);
            var24 = 0;
            var7 = var1[var24];
            var22 = 1;
            var1 = var1[var22];
            var11 = _closure1_slot5;
            var3 = var11.useState;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var1 = null;
                    if(!var2) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                    var3 = _closure1_slot7;
                    var2 = var3.getCurrentBalance;
                    var1 = var2.bind(var3)();
case 23:
                    return var1;
                }
            };
            var3 = var3.bind(var11)(var2);
            var2 = _closure1_slot4;
            var2 = var2.bind(var4)(var3, var23);
            var27 = var2[var24];
            var3 = var2[var22];
            _closure2_slot9 = var3;
            var11 = _closure1_slot5;
            var2 = var11.useState;
            var11 = var2.bind(var11)(var24);
            var2 = _closure1_slot4;
            var2 = var2.bind(var4)(var11, var23);
            var11 = var2[var24];
            var2 = var2[var22];
            if(!(var7 !== var16)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var1 = var1.bind(var4)(var16);
            if(!var16) { _fun0001_ip = 25; continue _fun0001 }
case 27:
            var7 = _closure1_slot7;
            var1 = var7.getCurrentBalance;
            var1 = var1.bind(var7)();
            var3 = var3.bind(var4)(var1);
            if(!(var1 !== var27)) { _fun0001_ip = 25; continue _fun0001 }
case 28:
            var1 = function(arg1) {
                var2 = arg1;
                var1 = 1;
                var1 = var2 + var1;
                return var1;
            };
            var1 = var2.bind(var4)(var1);
case 25:
            var7 = _closure1_slot5;
            var3 = var7.useCallback;
            var2 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                        var3 = false;
case 24: // try_start_0
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 12;
                        var4 = var4[var2];
                        var2 = undefined;
                        var6 = var5.bind(var2)(var4);
                        var5 = var6.claimBountyReward;
                        var4 = _closure2_slot0;
                        var4 = var4.id;
                        var2 = _closure2_slot1;
                        var2 = var5.bind(var6)(var4, var2);
                        SaveGenerator(address=69);
case 31:
                        return var2;
case 32:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0004_ip = 33; continue _fun0004 }
case 21:
                        var3 = true;
case 34: // try_end0
                        _fun0004_ip = 35; continue _fun0004;
case 33:
                        return var2;
case 36: // catch_target0
                        CatchBlockStart(arg_register=4);
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 13;
                        var4 = var4[var2];
                        var2 = undefined;
                        var4 = var6.bind(var2)(var4);
                        var2 = var4.openBountyRewardClaimErrorToast;
                        var2 = var2.bind(var4)(var5);
case 35:
                        var2 = var3;
                        if(!var3) { _fun0004_ip = 37; continue _fun0004 }
case 38:
                        var2 = _closure2_slot4;
case 37:
                        if(!var2) { _fun0004_ip = 39; continue _fun0004 }
case 40:
                        var4 = _closure2_slot9;
                        var3 = undefined;
                        var2 = function(arg1) {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                var3 = arg1;
                                var1 = null;
                                var2 = var1 == var3;
                                if(var2) { _fun0005_ip = 41; continue _fun0005 }
case 24:
                                var2 = _closure2_slot7;
                                var1 = var3 + var2;
case 41:
                                return var1;
                            }
                        };
                        var2 = var4.bind(var3)(var2);
case 39:
                        var2 = undefined;
                        return var2;
case 29:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var2.bind(var4)(var1);
            var22 = var34.id;
            var1 = new Array(4);
            var1[0] = var22;
            var1[1] = var16;
            var1[2] = var17;
            var1[3] = var33;
            var35 = var3.bind(var7)(var2, var1);
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 14;
            var1 = var3[var1];
            var17 = var2.bind(var4)(var1);
            var7 = var17.useBountyVideoProgressPersistence;
            var1 = {};
            var22 = var34.id;
            var1['bountyId'] = var22;
            var1['endMode'] = var37;
            var1 = var7.bind(var17)(var1);
            var17 = var1.initialProgress;
            var39 = var1.handleProgress;
            _closure2_slot10 = var39;
            var1 = var1.flushProgress;
            _closure2_slot11 = var1;
            var23 = _closure1_slot5;
            var22 = var23.useEffect;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                var1 = function() {
                    var2 = _closure2_slot11;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    return var1;
                };
                return var1;
            };
            var1 = var22.bind(var23)(var1, var7);
            var1 = 15;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useBountiesModalVideoAnalytics;
            var1 = {};
            var7 = var34.id;
            var1['bountyId'] = var7;
            var1['sourceQuestContent'] = var33;
            var1['rewardDurationMs'] = var36;
            var7 = var17.timestampSec;
            var1['initialPlaybackTimeSec'] = var7;
            var7 = var17.maxTimestampSec;
            var1['initialMaxVideoProgressSec'] = var7;
            var7 = var17.duration;
            var1['initialVideoDurationSec'] = var7;
            var1 = var2.bind(var3)(var1);
            var40 = var1.handleVideoProgressAnalytics;
            _closure2_slot12 = var40;
            var28 = var1.handleVideoEndAnalytics;
            var26 = var1.handleVideoLoopedAnalytics;
            var25 = var1.handleVideoPausedAnalytics;
            var23 = var1.handleVideoResumedAnalytics;
            var22 = var1.handleVideoErrorAnalytics;
            var1 = var21 == var19;
            var7 = undefined;
            if(var1) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var7 = var19.onPlaybackTimeChange;
case 42:
            _closure2_slot13 = var7;
            var1 = var21 == var19;
            var3 = undefined;
            if(var1) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var3 = var19.onPaused;
case 44:
            _closure2_slot14 = var3;
            var1 = var21 == var19;
            var2 = undefined;
            if(var1) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var2 = var19.onResumed;
case 46:
            _closure2_slot15 = var2;
            var31 = var21 == var19;
            var1 = undefined;
            if(var31) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var1 = var19.onEndCardVisible;
case 48:
            _closure2_slot16 = var1;
            var38 = _closure1_slot5;
            var31 = var38.useCallback;
            var19 = new Array(5);
            var19[0] = var40;
            var19[1] = var39;
            var19[2] = var32;
            var19[3] = var7;
            var19[4] = var36;
            var7 = function(arg1, arg2, arg3) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var7 = arg1;
                    var6 = arg2;
                    var5 = arg3;
                    var3 = _closure2_slot12;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var7, var6, var5);
                    var3 = _closure2_slot10;
                    var3 = var3.bind(var1)(var7, var6, var5);
                    var4 = _closure2_slot13;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                    var4 = _closure2_slot13;
                    var3 = _closure2_slot6;
                    if(var3) { _fun0006_ip = 21; continue _fun0006 }
case 52:
                    var8 = 1000;
                    var9 = var8 * var7;
                    var8 = _closure2_slot8;
                    var3 = var9 >= var8;
case 21:
                    var10 = _closure2_slot6;
                    var15 = undefined;
                    var14 = var5;
                    var13 = var6;
                    var12 = var3;
                    var11 = var7;
                    var2 = var15[var4](var14, var13, var12, var11, var10, var9);
case 50:
                    return var1;
                }
            };
            var31 = var31.bind(var38)(var7, var19);
            var19 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var20];
            var20 = var19.bind(var4)(var7);
            var19 = var20.useBountiesModalTiming;
            var7 = {};
            var7['endMode'] = var37;
            var7['rewardDurationMs'] = var36;
            var7['isCompleted'] = var32;
            var7['onRewardEarned'] = var35;
            var7['onVideoProgress'] = var31;
            var7['onVideoEnd'] = var28;
            var7['onVideoLooped'] = var26;
            var7['onVideoPaused'] = var25;
            var7['onVideoResumed'] = var23;
            var7['playerRef'] = var13;
            var23 = var17.timestampSec;
            var7['initialProgressSec'] = var23;
            var23 = var17.maxTimestampSec;
            var7['initialMaxVideoProgressSec'] = var23;
            var23 = var17.duration;
            var23 = var23 > var24;
            var21 = null;
            if(!var23) { _fun0001_ip = 53; continue _fun0001 }
case 54:
            var21 = var17.duration;
case 53:
            var7['initialVideoDurationSec'] = var21;
            var7 = var19.bind(var20)(var7);
            var31 = var7.isCtaVisible;
            var28 = var7.isEndCardVisible;
            _closure2_slot17 = var28;
            var26 = var7.handleVideoEnd;
            var25 = var7.handleVideoProgress;
            var36 = var7.handleVideoPaused;
            _closure2_slot18 = var36;
            var35 = var7.handleVideoResumed;
            _closure2_slot19 = var35;
            var19 = var7.handleReplay;
            _closure2_slot20 = var19;
            var21 = var7.rewardRemainingSeconds;
            var20 = var7.rewardTotalSeconds;
            var19 = var7.normalizedProgress;
            var24 = _closure1_slot5;
            var23 = var24.useCallback;
            var7 = new Array(3);
            var7[0] = var36;
            var7[1] = var28;
            var7[2] = var3;
            var3 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var4 = _closure2_slot18;
                    var1 = undefined;
                    var3 = arg1;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot17;
                    if(var3) { _fun0007_ip = 55; continue _fun0007 }
case 56:
                    var5 = _closure2_slot14;
                    var4 = null;
                    var3 = var4 == var5;
case 55:
                    if(var3) { _fun0007_ip = 57; continue _fun0007 }
case 58:
                    var2 = _closure2_slot14;
                    var2 = var2.bind(var1)();
case 57:
                    return var1;
                }
            };
            var24 = var23.bind(var24)(var3, var7);
            var23 = _closure1_slot5;
            var7 = var23.useCallback;
            var3 = new Array(2);
            var3[0] = var35;
            var3[1] = var2;
            var2 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var4 = _closure2_slot19;
                    var1 = undefined;
                    var3 = arg1;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure2_slot15;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                    var2 = _closure2_slot15;
                    var2 = var2.bind(var1)();
case 59:
                    return var1;
                }
            };
            var23 = var7.bind(var23)(var2, var3);
            var7 = _closure1_slot5;
            var3 = var7.useEffect;
            var2 = new Array(3);
            var2[0] = var16;
            var2[1] = var28;
            var2[2] = var1;
            var1 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure2_slot17;
                    if(!var2) { _fun0009_ip = 61; continue _fun0009 }
case 30:
                    var2 = _closure2_slot4;
case 61:
                    if(!var2) { _fun0009_ip = 58; continue _fun0009 }
case 62:
                    var3 = _closure2_slot16;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0009_ip = 58; continue _fun0009 }
case 60:
                    var2 = _closure2_slot16;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 58:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var7)(var1, var2);
            var3 = _closure1_slot10;
            var2 = _closure1_slot6;
            var1 = {};
            var1['style'] = var6;
            var7 = _closure1_slot10;
            var6 = _closure1_slot0;
            var35 = _closure1_slot2;
            var5 = 16;
            var5 = var35[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.BountyVideo;
            var5 = {};
            var5['bounty'] = var34;
            var5['sourceQuestContent'] = var33;
            var5['isCompleted'] = var32;
            var5['isCtaVisible'] = var31;
            var5['isEndCardVisible'] = var28;
            var5['isScrollIndicatorEnabled'] = var30;
            var28 = !var28;
            if(!var28) { _fun0001_ip = 63; continue _fun0001 }
case 64:
            var28 = !var29;
case 63:
            var5['isProgressBarVisible'] = var28;
            var5['orbsBalance'] = var27;
            var5['handleVideoEnd'] = var26;
            var5['handleVideoProgress'] = var25;
            var5['handleVideoPaused'] = var24;
            var5['handleVideoResumed'] = var23;
            var5['handleVideoError'] = var22;
            var5['rewardRemainingSeconds'] = var21;
            var5['rewardTotalSeconds'] = var20;
            var5['normalizedProgress'] = var19;
            var5['repeat'] = var18;
            var5['initialProgress'] = var17;
            var5['isActive'] = var16;
            var5['isRecapPageRevealed'] = var15;
            var5['isScrollingInBoundsSharedValue'] = var14;
            var5['playerRef'] = var13;
            var5['onPlayerStateChange'] = var12;
            var5['balanceWidgetPillResetKey'] = var11;
            var5['shouldLoadHls'] = var10;
            var5['peekScale'] = var9;
            var8 = function renderEndCard() {
                var4 = _closure1_slot10;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 17;
                var1 = var8[var1];
                var3 = undefined;
                var1 = var7.bind(var3)(var1);
                var2 = var1.QuestContentImpressionTrackerNative;
                var1 = {};
                var6 = _closure2_slot0;
                var6 = var6.id;
                var1['adContentId'] = var6;
                var6 = 18;
                var6 = var8[var6];
                var6 = var7.bind(var3)(var6);
                var6 = var6.AdCreativeType;
                var6 = var6.BOUNTY;
                var1['adCreativeType'] = var6;
                var6 = 19;
                var6 = var8[var6];
                var6 = var7.bind(var3)(var6);
                var6 = var6.QuestContent;
                var6 = var6.VIDEO_MODAL_END_CARD;
                var1['questContent'] = var6;
                var6 = _closure2_slot1;
                var1['sourceQuestContent'] = var6;
                var5 = _closure2_slot17;
                var1['overrideVisibility'] = var5;
                var5 = function children() {
                    var4 = _closure1_slot10;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 20;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var6 = _closure2_slot0;
                    var1['bounty'] = var6;
                    var6 = _closure2_slot17;
                    var1['visible'] = var6;
                    var6 = _closure2_slot20;
                    var1['onReplay'] = var6;
                    var6 = _closure2_slot4;
                    var1['isActive'] = var6;
                    var6 = _closure2_slot5;
                    var1['isScrollingInBoundsSharedValue'] = var6;
                    var5 = _closure2_slot1;
                    var1['sourceQuestContent'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                var1['children'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var5['renderEndCard'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.QuestsExperimentLocations;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot10 = var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/BountiesModal/BountiesScrollVideoItem.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function BountiesScrollVideoItem(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var8 = var1.bounty;
            var _closure2_slot0 = var8;
            var7 = var1.sourceQuestContent;
            var _closure2_slot1 = var7;
            var2 = var1.width;
            var _closure2_slot2 = var2;
            var2 = var1.height;
            var _closure2_slot3 = var2;
            var6 = var1.isActive;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0010_ip = 52; continue _fun0010 }
case 65:
            var6 = false;
case 52:
            var _closure2_slot4 = var6;
            var2 = var1.isRecapPageRevealed;
            if(!(var2 === var4)) { _fun0010_ip = 66; continue _fun0010 }
case 67:
            var2 = false;
case 66:
            var _closure2_slot5 = var2;
            var2 = var1.isRecapPageOnTop;
            if(!(var2 === var4)) { _fun0010_ip = 2; continue _fun0010 }
case 3:
            var2 = false;
case 2:
            var _closure2_slot6 = var2;
            var2 = var1.isScrollingInBoundsSharedValue;
            var _closure2_slot7 = var2;
            var2 = var1.isScrollIndicatorOverlayEnabled;
            if(!(var2 === var4)) { _fun0010_ip = 68; continue _fun0010 }
case 69:
            var2 = false;
case 68:
            var _closure2_slot8 = var2;
            var2 = var1.shouldLoadHls;
            if(!(var2 === var4)) { _fun0010_ip = 70; continue _fun0010 }
case 71:
            var2 = true;
case 70:
            var _closure2_slot9 = var2;
            var2 = var1.scrollAffordance;
            var _closure2_slot10 = var2;
            var1 = var1.peekScale;
            var _closure2_slot11 = var1;
            var3 = _closure1_slot10;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 17;
            var1 = var10[var1];
            var1 = var9.bind(var4)(var1);
            var2 = var1.QuestContentImpressionTrackerNative;
            var1 = {};
            var8 = var8.id;
            var1['adContentId'] = var8;
            var8 = 18;
            var8 = var10[var8];
            var8 = var9.bind(var4)(var8);
            var8 = var8.AdCreativeType;
            var8 = var8.BOUNTY;
            var1['adCreativeType'] = var8;
            var8 = 19;
            var8 = var10[var8];
            var8 = var9.bind(var4)(var8);
            var8 = var8.QuestContent;
            var8 = var8.VIDEO_MODAL_MOBILE;
            var1['questContent'] = var8;
            var1['sourceQuestContent'] = var7;
            var1['overrideVisibility'] = var6;
            var5 = function children() {
                var4 = _closure1_slot10;
                var3 = _closure1_slot11;
                var2 = {};
                var5 = _closure2_slot0;
                var2['bounty'] = var5;
                var5 = _closure2_slot1;
                var2['sourceQuestContent'] = var5;
                var5 = _closure2_slot2;
                var2['width'] = var5;
                var5 = _closure2_slot3;
                var2['height'] = var5;
                var5 = _closure2_slot4;
                var2['isActive'] = var5;
                var5 = _closure2_slot5;
                var2['isRecapPageRevealed'] = var5;
                var5 = _closure2_slot6;
                var2['isRecapPageOnTop'] = var5;
                var5 = _closure2_slot7;
                var2['isScrollingInBoundsSharedValue'] = var5;
                var5 = _closure2_slot8;
                var2['isScrollIndicatorOverlayEnabled'] = var5;
                var5 = _closure2_slot9;
                var2['shouldLoadHls'] = var5;
                var5 = _closure2_slot10;
                var2['scrollAffordance'] = var5;
                var1 = _closure2_slot11;
                var2['peekScale'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['BountiesScrollVideoItem'] = var2;
    return var1;
})();