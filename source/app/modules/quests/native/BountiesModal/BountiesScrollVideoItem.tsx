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
            var32 = var2.bounty;
            var _closure2_slot0 = var32;
            var31 = var2.sourceQuestContent;
            var _closure2_slot1 = var31;
            var7 = var2.width;
            var _closure2_slot2 = var7;
            var1 = var2.height;
            var _closure2_slot3 = var1;
            var14 = var2.isActive;
            var _closure2_slot4 = var14;
            var13 = var2.isRecapPageRevealed;
            var27 = var2.isRecapPageOnTop;
            var12 = var2.isScrollingInBoundsSharedValue;
            var _closure2_slot5 = var12;
            var19 = var2.isScrollIndicatorOverlayEnabled;
            var4 = undefined;
            if(!(var19 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var19 = false;
case 2:
            var17 = var2.scrollAffordance;
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
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 9;
            var1 = var9[var1];
            var10 = var7.bind(var4)(var1);
            var3 = var10.useStateFromStores;
            var1 = _closure1_slot8;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot8;
                var2 = var3.isBountyCompleted;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var30 = var3.bind(var10)(var2, var1);
            _closure2_slot6 = var30;
            var1 = 10;
            var1 = var9[var1];
            var1 = var7.bind(var4)(var1);
            var3 = var1.BountiesStage1Experiment;
            var2 = var3.useConfig;
            var1 = {};
            var10 = _closure1_slot9;
            var10 = var10.VIDEO_MODAL_MOBILE;
            var1['location'] = var10;
            var1 = var2.bind(var3)(var1);
            var3 = var1.enabled;
            var16 = var1.loopingEnabled;
            var15 = var1.orbAmount;
            _closure2_slot7 = var15;
            var2 = var1.rewardTimerSeconds;
            var1 = 11;
            var1 = var9[var1];
            var9 = var7.bind(var4)(var1);
            var7 = var9.useIsBountiesVerticalScrollExperimentEnabled;
            var1 = 'BountiesScrollVideoItem';
            var7 = var7.bind(var9)(var1);
            var9 = _closure1_slot0;
            var1 = _closure1_slot2;
            var18 = 12;
            var1 = var1[var18];
            var1 = var9.bind(var4)(var1);
            var1 = var1.BountyVideoEndMode;
            if(var16) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var35 = var1.END_CARD_WITH_CTA;
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var35 = var1.END_CARD;
case 8:
            _fun0001_ip = 9; continue _fun0001;
case 4:
            var35 = var1.LOOP;
case 9:
            var1 = 1000;
            if(var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = var32.rewardTimerSeconds;
            var34 = var1 * var3;
            _fun0001_ip = 12; continue _fun0001;
case 10:
            var34 = var1 * var2;
case 12:
            _closure2_slot8 = var34;
            var2 = _closure1_slot5;
            var1 = var2.useRef;
            var21 = null;
            var11 = var1.bind(var2)(var21);
            var2 = {};
            var2['isActive'] = var14;
            var2['playerRef'] = var11;
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
                        if(var2) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                        var2 = _closure3_slot0;
                        if(!var2) { _fun0002_ip = 15; continue _fun0002 }
case 16:
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
case 15:
                        if(!var2) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                        var2 = _closure3_slot1;
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0002_ip = 17; continue _fun0002 }
case 19:
                        var2 = var3.play;
                        var2 = var2.bind(var3)();
                        _fun0002_ip = 17; continue _fun0002;
case 13:
                        var2 = _closure3_slot2;
                        var1 = false;
                        var2['current'] = var1;
case 17:
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
            var10 = var1.handlePlayerStateChange;
            var2 = _closure1_slot5;
            var1 = var2.useState;
            var2 = var1.bind(var2)(var14);
            var1 = _closure1_slot4;
            var22 = 2;
            var1 = var1.bind(var4)(var2, var22);
            var23 = 0;
            var7 = var1[var23];
            var20 = 1;
            var1 = var1[var20];
            var9 = _closure1_slot5;
            var3 = var9.useState;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var1 = null;
                    if(!var2) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var3 = _closure1_slot7;
                    var2 = var3.getCurrentBalance;
                    var1 = var2.bind(var3)();
case 20:
                    return var1;
                }
            };
            var3 = var3.bind(var9)(var2);
            var2 = _closure1_slot4;
            var2 = var2.bind(var4)(var3, var22);
            var25 = var2[var23];
            var3 = var2[var20];
            _closure2_slot9 = var3;
            var9 = _closure1_slot5;
            var2 = var9.useState;
            var9 = var2.bind(var9)(var23);
            var2 = _closure1_slot4;
            var2 = var2.bind(var4)(var9, var22);
            var9 = var2[var23];
            var2 = var2[var20];
            if(!(var7 !== var14)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var1 = var1.bind(var4)(var14);
            if(!var14) { _fun0001_ip = 22; continue _fun0001 }
case 24:
            var7 = _closure1_slot7;
            var1 = var7.getCurrentBalance;
            var1 = var1.bind(var7)();
            var3 = var3.bind(var4)(var1);
            if(!(var1 !== var25)) { _fun0001_ip = 22; continue _fun0001 }
case 25:
            var1 = function(arg1) {
                var2 = arg1;
                var1 = 1;
                var1 = var2 + var1;
                return var1;
            };
            var1 = var2.bind(var4)(var1);
case 22:
            var7 = _closure1_slot5;
            var3 = var7.useCallback;
            var2 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                        var3 = false;
case 21: // try_start_0
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 13;
                        var4 = var4[var2];
                        var2 = undefined;
                        var6 = var5.bind(var2)(var4);
                        var5 = var6.claimBountyReward;
                        var4 = _closure2_slot0;
                        var4 = var4.id;
                        var2 = _closure2_slot1;
                        var2 = var5.bind(var6)(var4, var2);
                        SaveGenerator(address=69);
case 28:
                        return var2;
case 29:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0004_ip = 30; continue _fun0004 }
case 18:
                        var3 = true;
case 31: // try_end0
                        _fun0004_ip = 32; continue _fun0004;
case 30:
                        return var2;
case 33: // catch_target0
                        CatchBlockStart(arg_register=4);
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 14;
                        var4 = var4[var2];
                        var2 = undefined;
                        var4 = var6.bind(var2)(var4);
                        var2 = var4.openBountyRewardClaimErrorToast;
                        var2 = var2.bind(var4)(var5);
case 32:
                        var2 = var3;
                        if(!var3) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                        var2 = _closure2_slot4;
case 34:
                        if(!var2) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                        var4 = _closure2_slot9;
                        var3 = undefined;
                        var2 = function(arg1) {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                var3 = arg1;
                                var1 = null;
                                var2 = var1 == var3;
                                if(var2) { _fun0005_ip = 38; continue _fun0005 }
case 21:
                                var2 = _closure2_slot7;
                                var1 = var3 + var2;
case 38:
                                return var1;
                            }
                        };
                        var2 = var4.bind(var3)(var2);
case 36:
                        var2 = undefined;
                        return var2;
case 26:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var2.bind(var4)(var1);
            var20 = var32.id;
            var1 = new Array(4);
            var1[0] = var20;
            var1[1] = var14;
            var1[2] = var15;
            var1[3] = var31;
            var33 = var3.bind(var7)(var2, var1);
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 15;
            var1 = var3[var1];
            var15 = var2.bind(var4)(var1);
            var7 = var15.useBountyVideoProgressPersistence;
            var1 = {};
            var20 = var32.id;
            var1['bountyId'] = var20;
            var1['endMode'] = var35;
            var1 = var7.bind(var15)(var1);
            var15 = var1.initialProgress;
            var37 = var1.handleProgress;
            _closure2_slot10 = var37;
            var1 = var1.flushProgress;
            _closure2_slot11 = var1;
            var22 = _closure1_slot5;
            var20 = var22.useEffect;
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
            var1 = var20.bind(var22)(var1, var7);
            var1 = 16;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useBountiesModalVideoAnalytics;
            var1 = {};
            var7 = var32.id;
            var1['bountyId'] = var7;
            var1['sourceQuestContent'] = var31;
            var1['rewardDurationMs'] = var34;
            var7 = var15.timestampSec;
            var1['initialPlaybackTimeSec'] = var7;
            var7 = var15.maxTimestampSec;
            var1['initialMaxVideoProgressSec'] = var7;
            var7 = var15.duration;
            var1['initialVideoDurationSec'] = var7;
            var1 = var2.bind(var3)(var1);
            var38 = var1.handleVideoProgressAnalytics;
            _closure2_slot12 = var38;
            var28 = var1.handleVideoEndAnalytics;
            var26 = var1.handleVideoLoopedAnalytics;
            var24 = var1.handleVideoPausedAnalytics;
            var22 = var1.handleVideoResumedAnalytics;
            var20 = var1.handleVideoErrorAnalytics;
            var1 = var21 == var17;
            var7 = undefined;
            if(var1) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var7 = var17.onPlaybackTimeChange;
case 39:
            _closure2_slot13 = var7;
            var1 = var21 == var17;
            var3 = undefined;
            if(var1) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var3 = var17.onPaused;
case 41:
            _closure2_slot14 = var3;
            var1 = var21 == var17;
            var2 = undefined;
            if(var1) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var2 = var17.onResumed;
case 43:
            _closure2_slot15 = var2;
            var29 = var21 == var17;
            var1 = undefined;
            if(var29) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var1 = var17.onEndCardVisible;
case 45:
            _closure2_slot16 = var1;
            var36 = _closure1_slot5;
            var29 = var36.useCallback;
            var17 = new Array(5);
            var17[0] = var38;
            var17[1] = var37;
            var17[2] = var30;
            var17[3] = var7;
            var17[4] = var34;
            var7 = function(arg1, arg2, arg3) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var8 = arg1;
                    var5 = arg2;
                    var4 = arg3;
                    var2 = _closure2_slot12;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var8, var5, var4);
                    var2 = _closure2_slot10;
                    var2 = var2.bind(var1)(var8, var5, var4);
                    var3 = _closure2_slot13;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 33; continue _fun0006 }
case 47:
                    var3 = _closure2_slot13;
                    var2 = _closure2_slot6;
                    if(var2) { _fun0006_ip = 18; continue _fun0006 }
case 48:
                    var7 = 1000;
                    var7 = var7 * var8;
                    var6 = _closure2_slot8;
                    var2 = var7 >= var6;
case 18:
                    var2 = var3.bind(var1)(var4, var5, var2);
case 33:
                    return var1;
                }
            };
            var29 = var29.bind(var36)(var7, var17);
            var17 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var18];
            var18 = var17.bind(var4)(var7);
            var17 = var18.useBountiesModalTiming;
            var7 = {};
            var7['endMode'] = var35;
            var7['rewardDurationMs'] = var34;
            var7['isCompleted'] = var30;
            var7['onRewardEarned'] = var33;
            var7['onVideoProgress'] = var29;
            var7['onVideoEnd'] = var28;
            var7['onVideoLooped'] = var26;
            var7['onVideoPaused'] = var24;
            var7['onVideoResumed'] = var22;
            var7['playerRef'] = var11;
            var22 = var15.timestampSec;
            var7['initialProgressSec'] = var22;
            var22 = var15.maxTimestampSec;
            var7['initialMaxVideoProgressSec'] = var22;
            var22 = var15.duration;
            var22 = var22 > var23;
            var21 = null;
            if(!var22) { _fun0001_ip = 49; continue _fun0001 }
case 50:
            var21 = var15.duration;
case 49:
            var7['initialVideoDurationSec'] = var21;
            var7['isScrollIndicatorOverlayEnabled'] = var19;
            var7 = var17.bind(var18)(var7);
            var29 = var7.isCtaVisible;
            var26 = var7.isEndCardVisible;
            _closure2_slot17 = var26;
            var28 = var7.isScrollIndicatorVisible;
            var24 = var7.handleVideoEnd;
            var23 = var7.handleVideoProgress;
            var34 = var7.handleVideoPaused;
            _closure2_slot18 = var34;
            var33 = var7.handleVideoResumed;
            _closure2_slot19 = var33;
            var17 = var7.handleReplay;
            _closure2_slot20 = var17;
            var19 = var7.rewardRemainingSeconds;
            var18 = var7.rewardTotalSeconds;
            var17 = var7.normalizedProgress;
            var22 = _closure1_slot5;
            var21 = var22.useCallback;
            var7 = new Array(2);
            var7[0] = var34;
            var7[1] = var3;
            var3 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var4 = _closure2_slot18;
                    var1 = undefined;
                    var3 = arg1;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure2_slot14;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                    var2 = _closure2_slot14;
                    var2 = var2.bind(var1)();
case 51:
                    return var1;
                }
            };
            var22 = var21.bind(var22)(var3, var7);
            var21 = _closure1_slot5;
            var7 = var21.useCallback;
            var3 = new Array(2);
            var3[0] = var33;
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
                    if(!(var3 != var4)) { _fun0008_ip = 51; continue _fun0008 }
case 52:
                    var2 = _closure2_slot15;
                    var2 = var2.bind(var1)();
case 51:
                    return var1;
                }
            };
            var21 = var7.bind(var21)(var2, var3);
            var7 = _closure1_slot5;
            var3 = var7.useEffect;
            var2 = new Array(3);
            var2[0] = var14;
            var2[1] = var26;
            var2[2] = var1;
            var1 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure2_slot17;
                    if(!var2) { _fun0009_ip = 53; continue _fun0009 }
case 27:
                    var2 = _closure2_slot4;
case 53:
                    if(!var2) { _fun0009_ip = 54; continue _fun0009 }
case 55:
                    var3 = _closure2_slot16;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0009_ip = 54; continue _fun0009 }
case 52:
                    var2 = _closure2_slot16;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 54:
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
            var33 = _closure1_slot2;
            var5 = 17;
            var5 = var33[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.BountyVideo;
            var5 = {};
            var5['bounty'] = var32;
            var5['sourceQuestContent'] = var31;
            var5['isCompleted'] = var30;
            var5['isCtaVisible'] = var29;
            var5['isEndCardVisible'] = var26;
            var5['isScrollIndicatorVisible'] = var28;
            var26 = !var26;
            if(!var26) { _fun0001_ip = 56; continue _fun0001 }
case 57:
            var26 = !var27;
case 56:
            var5['isProgressBarVisible'] = var26;
            var5['orbsBalance'] = var25;
            var5['handleVideoEnd'] = var24;
            var5['handleVideoProgress'] = var23;
            var5['handleVideoPaused'] = var22;
            var5['handleVideoResumed'] = var21;
            var5['handleVideoError'] = var20;
            var5['rewardRemainingSeconds'] = var19;
            var5['rewardTotalSeconds'] = var18;
            var5['normalizedProgress'] = var17;
            var5['repeat'] = var16;
            var5['initialProgress'] = var15;
            var5['isActive'] = var14;
            var5['isRecapPageRevealed'] = var13;
            var5['isScrollingInBoundsSharedValue'] = var12;
            var5['playerRef'] = var11;
            var5['onPlayerStateChange'] = var10;
            var5['balanceWidgetPillResetKey'] = var9;
            var8 = function renderEndCard() {
                var4 = _closure1_slot10;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 18;
                var1 = var8[var1];
                var3 = undefined;
                var1 = var7.bind(var3)(var1);
                var2 = var1.QuestContentImpressionTrackerNative;
                var1 = {};
                var6 = _closure2_slot0;
                var6 = var6.id;
                var1['adContentId'] = var6;
                var6 = 19;
                var6 = var8[var6];
                var6 = var7.bind(var3)(var6);
                var6 = var6.AdCreativeType;
                var6 = var6.BOUNTY;
                var1['adCreativeType'] = var6;
                var6 = 20;
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
                    var1 = 21;
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
    var4 = 22;
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
            if(!(var6 === var4)) { _fun0010_ip = 48; continue _fun0010 }
case 58:
            var6 = false;
case 48:
            var _closure2_slot4 = var6;
            var2 = var1.isRecapPageRevealed;
            if(!(var2 === var4)) { _fun0010_ip = 59; continue _fun0010 }
case 60:
            var2 = false;
case 59:
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
            if(!(var2 === var4)) { _fun0010_ip = 61; continue _fun0010 }
case 62:
            var2 = false;
case 61:
            var _closure2_slot8 = var2;
            var1 = var1.scrollAffordance;
            var _closure2_slot9 = var1;
            var3 = _closure1_slot10;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 18;
            var1 = var10[var1];
            var1 = var9.bind(var4)(var1);
            var2 = var1.QuestContentImpressionTrackerNative;
            var1 = {};
            var8 = var8.id;
            var1['adContentId'] = var8;
            var8 = 19;
            var8 = var10[var8];
            var8 = var9.bind(var4)(var8);
            var8 = var8.AdCreativeType;
            var8 = var8.BOUNTY;
            var1['adCreativeType'] = var8;
            var8 = 20;
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
                var1 = _closure2_slot9;
                var2['scrollAffordance'] = var1;
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