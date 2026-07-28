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
            var41 = var2.bounty;
            var _closure2_slot0 = var41;
            var40 = var2.sourceQuestContent;
            var _closure2_slot1 = var40;
            var12 = var2.width;
            var _closure2_slot2 = var12;
            var11 = var2.height;
            var _closure2_slot3 = var11;
            var7 = var2.index;
            var19 = var2.isActive;
            var _closure2_slot4 = var19;
            var18 = var2.isRecapPageRevealed;
            var36 = var2.isRecapPageOnTop;
            var17 = var2.isScrollingInBoundsSharedValue;
            var _closure2_slot5 = var17;
            var37 = var2.isScrollIndicatorOverlayEnabled;
            var4 = undefined;
            if(!(var37 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var37 = false;
case 2:
            var1 = var2.shouldLoadHls;
            if(!(var1 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = true;
case 4:
            var22 = var2.scrollAffordance;
            var10 = var2.peekScale;
            var9 = var2.softDownloadCapsEnabled;
            if(!(var9 === var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = false;
case 6:
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
            var13 = _closure1_slot5;
            var6 = var13.useMemo;
            var3 = new Array(2);
            var3[0] = var12;
            var3[1] = var11;
            var2 = function() {
                var1 = {};
                var3 = _closure2_slot2;
                var1['width'] = var3;
                var2 = _closure2_slot3;
                var1['height'] = var2;
                return var1;
            };
            var6 = var6.bind(var13)(var2, var3);
            var3 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 9;
            var2 = var13[var2];
            var14 = var3.bind(var4)(var2);
            var13 = var14.useStateFromStores;
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
            var39 = var13.bind(var14)(var3, var2);
            _closure2_slot6 = var39;
            var3 = _closure1_slot5;
            var2 = var3.useState;
            var3 = var2.bind(var3)(var1);
            var2 = _closure1_slot4;
            var28 = 2;
            var2 = var2.bind(var4)(var3, var28);
            var31 = 0;
            var13 = var2[var31];
            var27 = 1;
            var2 = var2[var27];
            var14 = _closure1_slot5;
            var3 = var14.useState;
            var14 = var3.bind(var14)(var1);
            var3 = _closure1_slot4;
            var3 = var3.bind(var4)(var14, var28);
            var14 = var3[var31];
            var3 = var3[var27];
            if(!(var14 !== var1)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var3.bind(var4)(var1);
            if(!var1) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            var1 = true;
            var1 = var2.bind(var4)(var1);
case 8:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 10;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useBountiesExperience;
            var1 = _closure1_slot9;
            var1 = var1.VIDEO_MODAL_MOBILE;
            var2 = var2.bind(var3)(var1);
            var21 = var2.loopingEnabled;
            var26 = var2.ownedByVerticalScrollExperiment;
            var1 = var2.stage1Enabled;
            var25 = var2.orbAmount;
            _closure2_slot7 = var25;
            var2 = var2.rewardTimerSeconds;
            var14 = _closure1_slot0;
            var3 = _closure1_slot2;
            var23 = 11;
            var3 = var3[var23];
            var3 = var14.bind(var4)(var3);
            var3 = var3.BountyVideoEndMode;
            if(var21) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            if(var26) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var44 = var3.END_CARD_WITH_CTA;
            _fun0001_ip = 15; continue _fun0001;
case 13:
            var44 = var3.END_CARD;
case 15:
            _fun0001_ip = 16; continue _fun0001;
case 11:
            var44 = var3.LOOP;
case 16:
            if(var1) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            if(var26) { _fun0001_ip = 17; continue _fun0001 }
case 19:
            var3 = var41.rewardTimerSeconds;
            var1 = 1000;
            var43 = var1 * var3;
            _fun0001_ip = 20; continue _fun0001;
case 17:
            var1 = 1000;
            var43 = var1 * var2;
case 20:
            _closure2_slot8 = var43;
            var2 = _closure1_slot5;
            var1 = var2.useRef;
            var24 = null;
            var16 = var1.bind(var2)(var24);
            var2 = {};
            var2['isActive'] = var19;
            var2['playerRef'] = var16;
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
                        if(var2) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                        var2 = _closure3_slot0;
                        if(!var2) { _fun0002_ip = 23; continue _fun0002 }
case 24:
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
case 23:
                        if(!var2) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                        var2 = _closure3_slot1;
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0002_ip = 25; continue _fun0002 }
case 27:
                        var2 = var3.play;
                        var2 = var2.bind(var3)();
                        _fun0002_ip = 25; continue _fun0002;
case 21:
                        var2 = _closure3_slot2;
                        var1 = false;
                        var2['current'] = var1;
case 25:
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
            var15 = var1.handlePlayerStateChange;
            var2 = _closure1_slot5;
            var1 = var2.useState;
            var2 = var1.bind(var2)(var19);
            var1 = _closure1_slot4;
            var1 = var1.bind(var4)(var2, var28);
            var20 = var1[var31];
            var1 = var1[var27];
            var14 = _closure1_slot5;
            var3 = var14.useState;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var1 = null;
                    if(!var2) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                    var3 = _closure1_slot7;
                    var2 = var3.getCurrentBalance;
                    var1 = var2.bind(var3)();
case 28:
                    return var1;
                }
            };
            var3 = var3.bind(var14)(var2);
            var2 = _closure1_slot4;
            var2 = var2.bind(var4)(var3, var28);
            var34 = var2[var31];
            var3 = var2[var27];
            _closure2_slot9 = var3;
            var14 = _closure1_slot5;
            var2 = var14.useState;
            var14 = var2.bind(var14)(var31);
            var2 = _closure1_slot4;
            var2 = var2.bind(var4)(var14, var28);
            var14 = var2[var31];
            var2 = var2[var27];
            if(!(var20 !== var19)) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var1 = var1.bind(var4)(var19);
            if(!var19) { _fun0001_ip = 30; continue _fun0001 }
case 32:
            var20 = _closure1_slot7;
            var1 = var20.getCurrentBalance;
            var1 = var1.bind(var20)();
            var3 = var3.bind(var4)(var1);
            if(!(var1 !== var34)) { _fun0001_ip = 30; continue _fun0001 }
case 33:
            var1 = function(arg1) {
                var2 = arg1;
                var1 = 1;
                var1 = var2 + var1;
                return var1;
            };
            var1 = var2.bind(var4)(var1);
case 30:
            var20 = _closure1_slot5;
            var3 = var20.useCallback;
            var2 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                        var3 = false;
case 29: // try_start_0
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
case 36:
                        return var2;
case 37:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0004_ip = 38; continue _fun0004 }
case 26:
                        var3 = true;
case 39: // try_end0
                        _fun0004_ip = 40; continue _fun0004;
case 38:
                        return var2;
case 41: // catch_target0
                        CatchBlockStart(arg_register=4);
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 13;
                        var4 = var4[var2];
                        var2 = undefined;
                        var4 = var6.bind(var2)(var4);
                        var2 = var4.openBountyRewardClaimErrorToast;
                        var2 = var2.bind(var4)(var5);
case 40:
                        var2 = var3;
                        if(!var3) { _fun0004_ip = 42; continue _fun0004 }
case 43:
                        var2 = _closure2_slot4;
case 42:
                        if(!var2) { _fun0004_ip = 44; continue _fun0004 }
case 45:
                        var4 = _closure2_slot9;
                        var3 = undefined;
                        var2 = function(arg1) {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                var3 = arg1;
                                var1 = null;
                                var2 = var1 == var3;
                                if(var2) { _fun0005_ip = 46; continue _fun0005 }
case 29:
                                var2 = _closure2_slot7;
                                var1 = var3 + var2;
case 46:
                                return var1;
                            }
                        };
                        var2 = var4.bind(var3)(var2);
case 44:
                        var2 = undefined;
                        return var2;
case 34:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var2.bind(var4)(var1);
            var27 = var41.id;
            var1 = new Array(4);
            var1[0] = var27;
            var1[1] = var19;
            var1[2] = var25;
            var1[3] = var40;
            var42 = var3.bind(var20)(var2, var1);
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 14;
            var1 = var3[var1];
            var25 = var2.bind(var4)(var1);
            var20 = var25.useBountyVideoProgressPersistence;
            var1 = {};
            var27 = var41.id;
            var1['bountyId'] = var27;
            var1['endMode'] = var44;
            var1 = var20.bind(var25)(var1);
            var20 = var1.initialProgress;
            var46 = var1.handleProgress;
            _closure2_slot10 = var46;
            var1 = var1.flushProgress;
            _closure2_slot11 = var1;
            var28 = _closure1_slot5;
            var27 = var28.useEffect;
            var25 = new Array(1);
            var25[0] = var1;
            var1 = function() {
                var1 = function() {
                    var2 = _closure2_slot11;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    return var1;
                };
                return var1;
            };
            var1 = var27.bind(var28)(var1, var25);
            var1 = 15;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useBountiesModalVideoAnalytics;
            var1 = {};
            var25 = var41.id;
            var1['bountyId'] = var25;
            var1['sourceQuestContent'] = var40;
            var1['rewardDurationMs'] = var43;
            var25 = var20.timestampSec;
            var1['initialPlaybackTimeSec'] = var25;
            var25 = var20.maxTimestampSec;
            var1['initialMaxVideoProgressSec'] = var25;
            var25 = var20.duration;
            var1['initialVideoDurationSec'] = var25;
            var25 = false;
            var1['wasPreloaded'] = var25;
            var25 = 'carousel';
            if(!var26) { _fun0001_ip = 47; continue _fun0001 }
case 48:
            var25 = 'active_only';
case 47:
            var1['startupPath'] = var25;
            var1['verticalScrollingPosition'] = var7;
            var1['isActive'] = var19;
            var1 = var2.bind(var3)(var1);
            var47 = var1.handleVideoProgressAnalytics;
            _closure2_slot12 = var47;
            var35 = var1.handleVideoEndAnalytics;
            var33 = var1.handleVideoLoopedAnalytics;
            var32 = var1.handleVideoPausedAnalytics;
            var30 = var1.handleVideoResumedAnalytics;
            var29 = var1.handleVideoErrorAnalytics;
            var28 = var1.handleLoadStartAnalytics;
            var25 = var1.handleVideoTracksAnalytics;
            var26 = var1.handleReadyForDisplayAnalytics;
            var27 = var1.handleBufferAnalytics;
            var1 = var24 == var22;
            var7 = undefined;
            if(var1) { _fun0001_ip = 49; continue _fun0001 }
case 50:
            var7 = var22.onPlaybackTimeChange;
case 49:
            _closure2_slot13 = var7;
            var1 = var24 == var22;
            var3 = undefined;
            if(var1) { _fun0001_ip = 51; continue _fun0001 }
case 52:
            var3 = var22.onPaused;
case 51:
            _closure2_slot14 = var3;
            var1 = var24 == var22;
            var2 = undefined;
            if(var1) { _fun0001_ip = 53; continue _fun0001 }
case 54:
            var2 = var22.onResumed;
case 53:
            _closure2_slot15 = var2;
            var38 = var24 == var22;
            var1 = undefined;
            if(var38) { _fun0001_ip = 55; continue _fun0001 }
case 56:
            var1 = var22.onEndCardVisible;
case 55:
            _closure2_slot16 = var1;
            var45 = _closure1_slot5;
            var38 = var45.useCallback;
            var22 = new Array(5);
            var22[0] = var47;
            var22[1] = var46;
            var22[2] = var39;
            var22[3] = var7;
            var22[4] = var43;
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
                    if(!(var3 != var4)) { _fun0006_ip = 57; continue _fun0006 }
case 58:
                    var4 = _closure2_slot13;
                    var3 = _closure2_slot6;
                    if(var3) { _fun0006_ip = 26; continue _fun0006 }
case 59:
                    var8 = 1000;
                    var9 = var8 * var7;
                    var8 = _closure2_slot8;
                    var3 = var9 >= var8;
case 26:
                    var10 = _closure2_slot6;
                    var15 = undefined;
                    var14 = var5;
                    var13 = var6;
                    var12 = var3;
                    var11 = var7;
                    var2 = var15[var4](var14, var13, var12, var11, var10, var9);
case 57:
                    return var1;
                }
            };
            var38 = var38.bind(var45)(var7, var22);
            var22 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var23];
            var23 = var22.bind(var4)(var7);
            var22 = var23.useBountiesModalTiming;
            var7 = {};
            var7['endMode'] = var44;
            var7['rewardDurationMs'] = var43;
            var7['isCompleted'] = var39;
            var7['onRewardEarned'] = var42;
            var7['onVideoProgress'] = var38;
            var7['onVideoEnd'] = var35;
            var7['onVideoLooped'] = var33;
            var7['onVideoPaused'] = var32;
            var7['onVideoResumed'] = var30;
            var7['playerRef'] = var16;
            var30 = var20.timestampSec;
            var7['initialProgressSec'] = var30;
            var30 = var20.maxTimestampSec;
            var7['initialMaxVideoProgressSec'] = var30;
            var30 = var20.duration;
            var30 = var30 > var31;
            var24 = null;
            if(!var30) { _fun0001_ip = 60; continue _fun0001 }
case 61:
            var24 = var20.duration;
case 60:
            var7['initialVideoDurationSec'] = var24;
            var7 = var22.bind(var23)(var7);
            var38 = var7.isCtaVisible;
            var35 = var7.isEndCardVisible;
            _closure2_slot17 = var35;
            var33 = var7.handleVideoEnd;
            var32 = var7.handleVideoProgress;
            var43 = var7.handleVideoPaused;
            _closure2_slot18 = var43;
            var42 = var7.handleVideoResumed;
            _closure2_slot19 = var42;
            var22 = var7.handleReplay;
            _closure2_slot20 = var22;
            var24 = var7.rewardRemainingSeconds;
            var23 = var7.rewardTotalSeconds;
            var22 = var7.normalizedProgress;
            var31 = _closure1_slot5;
            var30 = var31.useCallback;
            var7 = new Array(3);
            var7[0] = var43;
            var7[1] = var35;
            var7[2] = var3;
            var3 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var4 = _closure2_slot18;
                    var1 = undefined;
                    var3 = arg1;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot17;
                    if(var3) { _fun0007_ip = 62; continue _fun0007 }
case 63:
                    var5 = _closure2_slot14;
                    var4 = null;
                    var3 = var4 == var5;
case 62:
                    if(var3) { _fun0007_ip = 64; continue _fun0007 }
case 65:
                    var2 = _closure2_slot14;
                    var2 = var2.bind(var1)();
case 64:
                    return var1;
                }
            };
            var31 = var30.bind(var31)(var3, var7);
            var30 = _closure1_slot5;
            var7 = var30.useCallback;
            var3 = new Array(2);
            var3[0] = var42;
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
                    if(!(var3 != var4)) { _fun0008_ip = 66; continue _fun0008 }
case 67:
                    var2 = _closure2_slot15;
                    var2 = var2.bind(var1)();
case 66:
                    return var1;
                }
            };
            var30 = var7.bind(var30)(var2, var3);
            var7 = _closure1_slot5;
            var3 = var7.useEffect;
            var2 = new Array(3);
            var2[0] = var19;
            var2[1] = var35;
            var2[2] = var1;
            var1 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure2_slot17;
                    if(!var2) { _fun0009_ip = 68; continue _fun0009 }
case 35:
                    var2 = _closure2_slot4;
case 68:
                    if(!var2) { _fun0009_ip = 65; continue _fun0009 }
case 69:
                    var3 = _closure2_slot16;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0009_ip = 65; continue _fun0009 }
case 67:
                    var2 = _closure2_slot16;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 65:
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
            var42 = _closure1_slot2;
            var5 = 16;
            var5 = var42[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.BountyVideo;
            var5 = {};
            var5['bounty'] = var41;
            var5['sourceQuestContent'] = var40;
            var5['isCompleted'] = var39;
            var5['isCtaVisible'] = var38;
            var5['isEndCardVisible'] = var35;
            var5['isScrollIndicatorEnabled'] = var37;
            var35 = !var35;
            if(!var35) { _fun0001_ip = 70; continue _fun0001 }
case 71:
            var35 = !var36;
case 70:
            var5['isProgressBarVisible'] = var35;
            var5['orbsBalance'] = var34;
            var5['handleVideoEnd'] = var33;
            var5['handleVideoProgress'] = var32;
            var5['handleVideoPaused'] = var31;
            var5['handleVideoResumed'] = var30;
            var5['handleVideoError'] = var29;
            var5['onLoadStart'] = var28;
            var5['onBuffer'] = var27;
            var5['onFirstFrame'] = var26;
            var5['onVideoTracks'] = var25;
            var5['rewardRemainingSeconds'] = var24;
            var5['rewardTotalSeconds'] = var23;
            var5['normalizedProgress'] = var22;
            var5['repeat'] = var21;
            var5['initialProgress'] = var20;
            var5['isActive'] = var19;
            var5['isRecapPageRevealed'] = var18;
            var5['isScrollingInBoundsSharedValue'] = var17;
            var5['playerRef'] = var16;
            var5['onPlayerStateChange'] = var15;
            var5['balanceWidgetPillResetKey'] = var14;
            var5['shouldLoadHls'] = var13;
            var5['width'] = var12;
            var5['height'] = var11;
            var5['peekScale'] = var10;
            var5['softDownloadCapsEnabled'] = var9;
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
            var2 = var1.index;
            var _closure2_slot4 = var2;
            var6 = var1.isActive;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0010_ip = 72; continue _fun0010 }
case 73:
            var6 = false;
case 72:
            var _closure2_slot5 = var6;
            var2 = var1.isRecapPageRevealed;
            if(!(var2 === var4)) { _fun0010_ip = 41; continue _fun0010 }
case 74:
            var2 = false;
case 41:
            var _closure2_slot6 = var2;
            var2 = var1.isRecapPageOnTop;
            if(!(var2 === var4)) { _fun0010_ip = 75; continue _fun0010 }
case 76:
            var2 = false;
case 75:
            var _closure2_slot7 = var2;
            var2 = var1.isScrollingInBoundsSharedValue;
            var _closure2_slot8 = var2;
            var2 = var1.isScrollIndicatorOverlayEnabled;
            if(!(var2 === var4)) { _fun0010_ip = 77; continue _fun0010 }
case 78:
            var2 = false;
case 77:
            var _closure2_slot9 = var2;
            var2 = var1.shouldLoadHls;
            if(!(var2 === var4)) { _fun0010_ip = 79; continue _fun0010 }
case 80:
            var2 = true;
case 79:
            var _closure2_slot10 = var2;
            var2 = var1.scrollAffordance;
            var _closure2_slot11 = var2;
            var2 = var1.peekScale;
            var _closure2_slot12 = var2;
            var1 = var1.softDownloadCapsEnabled;
            if(!(var1 === var4)) { _fun0010_ip = 81; continue _fun0010 }
case 82:
            var1 = false;
case 81:
            var _closure2_slot13 = var1;
            var3 = _closure1_slot10;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 17;
            var1 = var10[var1];
            var1 = var9.bind(var4)(var1);
            var2 = var1.BillableAdPlacementImpressionTrackerNative;
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
                var2['index'] = var5;
                var5 = _closure2_slot5;
                var2['isActive'] = var5;
                var5 = _closure2_slot6;
                var2['isRecapPageRevealed'] = var5;
                var5 = _closure2_slot7;
                var2['isRecapPageOnTop'] = var5;
                var5 = _closure2_slot8;
                var2['isScrollingInBoundsSharedValue'] = var5;
                var5 = _closure2_slot9;
                var2['isScrollIndicatorOverlayEnabled'] = var5;
                var5 = _closure2_slot10;
                var2['shouldLoadHls'] = var5;
                var5 = _closure2_slot11;
                var2['scrollAffordance'] = var5;
                var5 = _closure2_slot12;
                var2['peekScale'] = var5;
                var1 = _closure2_slot13;
                var2['softDownloadCapsEnabled'] = var1;
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