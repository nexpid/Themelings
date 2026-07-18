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
            var36 = var2.bounty;
            var _closure2_slot0 = var36;
            var35 = var2.sourceQuestContent;
            var _closure2_slot1 = var35;
            var11 = var2.width;
            var _closure2_slot2 = var11;
            var10 = var2.height;
            var _closure2_slot3 = var10;
            var18 = var2.isActive;
            var _closure2_slot4 = var18;
            var17 = var2.isRecapPageRevealed;
            var31 = var2.isRecapPageOnTop;
            var16 = var2.isScrollingInBoundsSharedValue;
            var _closure2_slot5 = var16;
            var32 = var2.isScrollIndicatorOverlayEnabled;
            var4 = undefined;
            if(!(var32 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var32 = false;
case 2:
            var1 = var2.shouldLoadHls;
            if(!(var1 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = true;
case 4:
            var21 = var2.scrollAffordance;
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
            var7 = _closure1_slot5;
            var6 = var7.useMemo;
            var3 = new Array(2);
            var3[0] = var11;
            var3[1] = var10;
            var2 = function() {
                var1 = {};
                var3 = _closure2_slot2;
                var1['width'] = var3;
                var2 = _closure2_slot3;
                var1['height'] = var2;
                return var1;
            };
            var6 = var6.bind(var7)(var2, var3);
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 9;
            var2 = var7[var2];
            var12 = var3.bind(var4)(var2);
            var7 = var12.useStateFromStores;
            var2 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot8;
                var2 = var3.isBountyCompleted;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var34 = var7.bind(var12)(var3, var2);
            _closure2_slot6 = var34;
            var3 = _closure1_slot5;
            var2 = var3.useState;
            var3 = var2.bind(var3)(var1);
            var2 = _closure1_slot4;
            var25 = 2;
            var2 = var2.bind(var4)(var3, var25);
            var26 = 0;
            var12 = var2[var26];
            var24 = 1;
            var2 = var2[var24];
            var7 = _closure1_slot5;
            var3 = var7.useState;
            var7 = var3.bind(var7)(var1);
            var3 = _closure1_slot4;
            var3 = var3.bind(var4)(var7, var25);
            var7 = var3[var26];
            var3 = var3[var24];
            if(!(var7 !== var1)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var3.bind(var4)(var1);
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var1 = true;
            var1 = var2.bind(var4)(var1);
case 6:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 10;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useBountiesExperience;
            var1 = _closure1_slot9;
            var1 = var1.VIDEO_MODAL_MOBILE;
            var2 = var2.bind(var3)(var1);
            var20 = var2.loopingEnabled;
            var1 = var2.ownedByVerticalScrollExperiment;
            var3 = var2.stage1Enabled;
            var19 = var2.orbAmount;
            _closure2_slot7 = var19;
            var2 = var2.rewardTimerSeconds;
            var13 = _closure1_slot0;
            var7 = _closure1_slot2;
            var22 = 11;
            var7 = var7[var22];
            var7 = var13.bind(var4)(var7);
            var7 = var7.BountyVideoEndMode;
            if(var20) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            if(var1) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var39 = var7.END_CARD_WITH_CTA;
            _fun0001_ip = 13; continue _fun0001;
case 11:
            var39 = var7.END_CARD;
case 13:
            _fun0001_ip = 14; continue _fun0001;
case 9:
            var39 = var7.LOOP;
case 14:
            if(var3) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            if(var1) { _fun0001_ip = 15; continue _fun0001 }
case 17:
            var3 = var36.rewardTimerSeconds;
            var1 = 1000;
            var38 = var1 * var3;
            _fun0001_ip = 18; continue _fun0001;
case 15:
            var1 = 1000;
            var38 = var1 * var2;
case 18:
            _closure2_slot8 = var38;
            var2 = _closure1_slot5;
            var1 = var2.useRef;
            var23 = null;
            var15 = var1.bind(var2)(var23);
            var2 = {};
            var2['isActive'] = var18;
            var2['playerRef'] = var15;
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
                        if(var2) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                        var2 = _closure3_slot0;
                        if(!var2) { _fun0002_ip = 21; continue _fun0002 }
case 22:
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
case 21:
                        if(!var2) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                        var2 = _closure3_slot1;
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0002_ip = 23; continue _fun0002 }
case 25:
                        var2 = var3.play;
                        var2 = var2.bind(var3)();
                        _fun0002_ip = 23; continue _fun0002;
case 19:
                        var2 = _closure3_slot2;
                        var1 = false;
                        var2['current'] = var1;
case 23:
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
            var14 = var1.handlePlayerStateChange;
            var2 = _closure1_slot5;
            var1 = var2.useState;
            var2 = var1.bind(var2)(var18);
            var1 = _closure1_slot4;
            var1 = var1.bind(var4)(var2, var25);
            var7 = var1[var26];
            var1 = var1[var24];
            var13 = _closure1_slot5;
            var3 = var13.useState;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var1 = null;
                    if(!var2) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                    var3 = _closure1_slot7;
                    var2 = var3.getCurrentBalance;
                    var1 = var2.bind(var3)();
case 26:
                    return var1;
                }
            };
            var3 = var3.bind(var13)(var2);
            var2 = _closure1_slot4;
            var2 = var2.bind(var4)(var3, var25);
            var29 = var2[var26];
            var3 = var2[var24];
            _closure2_slot9 = var3;
            var13 = _closure1_slot5;
            var2 = var13.useState;
            var13 = var2.bind(var13)(var26);
            var2 = _closure1_slot4;
            var2 = var2.bind(var4)(var13, var25);
            var13 = var2[var26];
            var2 = var2[var24];
            if(!(var7 !== var18)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var1 = var1.bind(var4)(var18);
            if(!var18) { _fun0001_ip = 28; continue _fun0001 }
case 30:
            var7 = _closure1_slot7;
            var1 = var7.getCurrentBalance;
            var1 = var1.bind(var7)();
            var3 = var3.bind(var4)(var1);
            if(!(var1 !== var29)) { _fun0001_ip = 28; continue _fun0001 }
case 31:
            var1 = function(arg1) {
                var2 = arg1;
                var1 = 1;
                var1 = var2 + var1;
                return var1;
            };
            var1 = var2.bind(var4)(var1);
case 28:
            var7 = _closure1_slot5;
            var3 = var7.useCallback;
            var2 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                        var3 = false;
case 27: // try_start_0
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
case 34:
                        return var2;
case 35:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0004_ip = 36; continue _fun0004 }
case 24:
                        var3 = true;
case 37: // try_end0
                        _fun0004_ip = 38; continue _fun0004;
case 36:
                        return var2;
case 39: // catch_target0
                        CatchBlockStart(arg_register=4);
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 13;
                        var4 = var4[var2];
                        var2 = undefined;
                        var4 = var6.bind(var2)(var4);
                        var2 = var4.openBountyRewardClaimErrorToast;
                        var2 = var2.bind(var4)(var5);
case 38:
                        var2 = var3;
                        if(!var3) { _fun0004_ip = 40; continue _fun0004 }
case 41:
                        var2 = _closure2_slot4;
case 40:
                        if(!var2) { _fun0004_ip = 42; continue _fun0004 }
case 43:
                        var4 = _closure2_slot9;
                        var3 = undefined;
                        var2 = function(arg1) {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                var3 = arg1;
                                var1 = null;
                                var2 = var1 == var3;
                                if(var2) { _fun0005_ip = 44; continue _fun0005 }
case 27:
                                var2 = _closure2_slot7;
                                var1 = var3 + var2;
case 44:
                                return var1;
                            }
                        };
                        var2 = var4.bind(var3)(var2);
case 42:
                        var2 = undefined;
                        return var2;
case 32:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var2.bind(var4)(var1);
            var24 = var36.id;
            var1 = new Array(4);
            var1[0] = var24;
            var1[1] = var18;
            var1[2] = var19;
            var1[3] = var35;
            var37 = var3.bind(var7)(var2, var1);
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 14;
            var1 = var3[var1];
            var19 = var2.bind(var4)(var1);
            var7 = var19.useBountyVideoProgressPersistence;
            var1 = {};
            var24 = var36.id;
            var1['bountyId'] = var24;
            var1['endMode'] = var39;
            var1 = var7.bind(var19)(var1);
            var19 = var1.initialProgress;
            var41 = var1.handleProgress;
            _closure2_slot10 = var41;
            var1 = var1.flushProgress;
            _closure2_slot11 = var1;
            var25 = _closure1_slot5;
            var24 = var25.useEffect;
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
            var1 = var24.bind(var25)(var1, var7);
            var1 = 15;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useBountiesModalVideoAnalytics;
            var1 = {};
            var7 = var36.id;
            var1['bountyId'] = var7;
            var1['sourceQuestContent'] = var35;
            var1['rewardDurationMs'] = var38;
            var7 = var19.timestampSec;
            var1['initialPlaybackTimeSec'] = var7;
            var7 = var19.maxTimestampSec;
            var1['initialMaxVideoProgressSec'] = var7;
            var7 = var19.duration;
            var1['initialVideoDurationSec'] = var7;
            var1 = var2.bind(var3)(var1);
            var42 = var1.handleVideoProgressAnalytics;
            _closure2_slot12 = var42;
            var30 = var1.handleVideoEndAnalytics;
            var28 = var1.handleVideoLoopedAnalytics;
            var27 = var1.handleVideoPausedAnalytics;
            var25 = var1.handleVideoResumedAnalytics;
            var24 = var1.handleVideoErrorAnalytics;
            var1 = var23 == var21;
            var7 = undefined;
            if(var1) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var7 = var21.onPlaybackTimeChange;
case 45:
            _closure2_slot13 = var7;
            var1 = var23 == var21;
            var3 = undefined;
            if(var1) { _fun0001_ip = 47; continue _fun0001 }
case 48:
            var3 = var21.onPaused;
case 47:
            _closure2_slot14 = var3;
            var1 = var23 == var21;
            var2 = undefined;
            if(var1) { _fun0001_ip = 49; continue _fun0001 }
case 50:
            var2 = var21.onResumed;
case 49:
            _closure2_slot15 = var2;
            var33 = var23 == var21;
            var1 = undefined;
            if(var33) { _fun0001_ip = 51; continue _fun0001 }
case 52:
            var1 = var21.onEndCardVisible;
case 51:
            _closure2_slot16 = var1;
            var40 = _closure1_slot5;
            var33 = var40.useCallback;
            var21 = new Array(5);
            var21[0] = var42;
            var21[1] = var41;
            var21[2] = var34;
            var21[3] = var7;
            var21[4] = var38;
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
                    if(!(var3 != var4)) { _fun0006_ip = 53; continue _fun0006 }
case 54:
                    var4 = _closure2_slot13;
                    var3 = _closure2_slot6;
                    if(var3) { _fun0006_ip = 24; continue _fun0006 }
case 55:
                    var8 = 1000;
                    var9 = var8 * var7;
                    var8 = _closure2_slot8;
                    var3 = var9 >= var8;
case 24:
                    var10 = _closure2_slot6;
                    var15 = undefined;
                    var14 = var5;
                    var13 = var6;
                    var12 = var3;
                    var11 = var7;
                    var2 = var15[var4](var14, var13, var12, var11, var10, var9);
case 53:
                    return var1;
                }
            };
            var33 = var33.bind(var40)(var7, var21);
            var21 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var22];
            var22 = var21.bind(var4)(var7);
            var21 = var22.useBountiesModalTiming;
            var7 = {};
            var7['endMode'] = var39;
            var7['rewardDurationMs'] = var38;
            var7['isCompleted'] = var34;
            var7['onRewardEarned'] = var37;
            var7['onVideoProgress'] = var33;
            var7['onVideoEnd'] = var30;
            var7['onVideoLooped'] = var28;
            var7['onVideoPaused'] = var27;
            var7['onVideoResumed'] = var25;
            var7['playerRef'] = var15;
            var25 = var19.timestampSec;
            var7['initialProgressSec'] = var25;
            var25 = var19.maxTimestampSec;
            var7['initialMaxVideoProgressSec'] = var25;
            var25 = var19.duration;
            var25 = var25 > var26;
            var23 = null;
            if(!var25) { _fun0001_ip = 56; continue _fun0001 }
case 57:
            var23 = var19.duration;
case 56:
            var7['initialVideoDurationSec'] = var23;
            var7 = var21.bind(var22)(var7);
            var33 = var7.isCtaVisible;
            var30 = var7.isEndCardVisible;
            _closure2_slot17 = var30;
            var28 = var7.handleVideoEnd;
            var27 = var7.handleVideoProgress;
            var38 = var7.handleVideoPaused;
            _closure2_slot18 = var38;
            var37 = var7.handleVideoResumed;
            _closure2_slot19 = var37;
            var21 = var7.handleReplay;
            _closure2_slot20 = var21;
            var23 = var7.rewardRemainingSeconds;
            var22 = var7.rewardTotalSeconds;
            var21 = var7.normalizedProgress;
            var26 = _closure1_slot5;
            var25 = var26.useCallback;
            var7 = new Array(3);
            var7[0] = var38;
            var7[1] = var30;
            var7[2] = var3;
            var3 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var4 = _closure2_slot18;
                    var1 = undefined;
                    var3 = arg1;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot17;
                    if(var3) { _fun0007_ip = 58; continue _fun0007 }
case 59:
                    var5 = _closure2_slot14;
                    var4 = null;
                    var3 = var4 == var5;
case 58:
                    if(var3) { _fun0007_ip = 60; continue _fun0007 }
case 61:
                    var2 = _closure2_slot14;
                    var2 = var2.bind(var1)();
case 60:
                    return var1;
                }
            };
            var26 = var25.bind(var26)(var3, var7);
            var25 = _closure1_slot5;
            var7 = var25.useCallback;
            var3 = new Array(2);
            var3[0] = var37;
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
                    if(!(var3 != var4)) { _fun0008_ip = 62; continue _fun0008 }
case 63:
                    var2 = _closure2_slot15;
                    var2 = var2.bind(var1)();
case 62:
                    return var1;
                }
            };
            var25 = var7.bind(var25)(var2, var3);
            var7 = _closure1_slot5;
            var3 = var7.useEffect;
            var2 = new Array(3);
            var2[0] = var18;
            var2[1] = var30;
            var2[2] = var1;
            var1 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure2_slot17;
                    if(!var2) { _fun0009_ip = 64; continue _fun0009 }
case 33:
                    var2 = _closure2_slot4;
case 64:
                    if(!var2) { _fun0009_ip = 61; continue _fun0009 }
case 65:
                    var3 = _closure2_slot16;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0009_ip = 61; continue _fun0009 }
case 63:
                    var2 = _closure2_slot16;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 61:
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
            var37 = _closure1_slot2;
            var5 = 16;
            var5 = var37[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.BountyVideo;
            var5 = {};
            var5['bounty'] = var36;
            var5['sourceQuestContent'] = var35;
            var5['isCompleted'] = var34;
            var5['isCtaVisible'] = var33;
            var5['isEndCardVisible'] = var30;
            var5['isScrollIndicatorEnabled'] = var32;
            var30 = !var30;
            if(!var30) { _fun0001_ip = 66; continue _fun0001 }
case 67:
            var30 = !var31;
case 66:
            var5['isProgressBarVisible'] = var30;
            var5['orbsBalance'] = var29;
            var5['handleVideoEnd'] = var28;
            var5['handleVideoProgress'] = var27;
            var5['handleVideoPaused'] = var26;
            var5['handleVideoResumed'] = var25;
            var5['handleVideoError'] = var24;
            var5['rewardRemainingSeconds'] = var23;
            var5['rewardTotalSeconds'] = var22;
            var5['normalizedProgress'] = var21;
            var5['repeat'] = var20;
            var5['initialProgress'] = var19;
            var5['isActive'] = var18;
            var5['isRecapPageRevealed'] = var17;
            var5['isScrollingInBoundsSharedValue'] = var16;
            var5['playerRef'] = var15;
            var5['onPlayerStateChange'] = var14;
            var5['balanceWidgetPillResetKey'] = var13;
            var5['shouldLoadHls'] = var12;
            var5['width'] = var11;
            var5['height'] = var10;
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
            if(!(var6 === var4)) { _fun0010_ip = 55; continue _fun0010 }
case 68:
            var6 = false;
case 55:
            var _closure2_slot4 = var6;
            var2 = var1.isRecapPageRevealed;
            if(!(var2 === var4)) { _fun0010_ip = 69; continue _fun0010 }
case 70:
            var2 = false;
case 69:
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
            if(!(var2 === var4)) { _fun0010_ip = 71; continue _fun0010 }
case 72:
            var2 = false;
case 71:
            var _closure2_slot8 = var2;
            var2 = var1.shouldLoadHls;
            if(!(var2 === var4)) { _fun0010_ip = 73; continue _fun0010 }
case 74:
            var2 = true;
case 73:
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