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
            var26 = var2.bounty;
            var _closure2_slot0 = var26;
            var25 = var2.sourceQuestContent;
            var _closure2_slot1 = var25;
            var7 = var2.width;
            var _closure2_slot2 = var7;
            var1 = var2.height;
            var _closure2_slot3 = var1;
            var13 = var2.isActive;
            var _closure2_slot4 = var13;
            var12 = var2.isScrollingInBoundsSharedValue;
            var _closure2_slot5 = var12;
            var4 = undefined;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
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
            var1 = 10;
            var1 = var3[var1];
            var10 = var2.bind(var4)(var1);
            var9 = var10.useStateFromStores;
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
            var24 = var9.bind(var10)(var7, var1);
            var1 = 11;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var3 = var1.BountiesStage1Experiment;
            var2 = var3.useConfig;
            var1 = {};
            var7 = _closure1_slot9;
            var7 = var7.VIDEO_MODAL_MOBILE;
            var1['location'] = var7;
            var1 = var2.bind(var3)(var1);
            var15 = var1.loopingEnabled;
            var18 = var1.orbAmount;
            var _closure2_slot6 = var18;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 12;
            var1 = var1[var3];
            var1 = var2.bind(var4)(var1);
            var1 = var1.BountyVideoEndMode;
            if(var15) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var20 = var1.END_CARD_WITH_CTA;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var20 = var1.LOOP;
case 4:
            var2 = _closure1_slot5;
            var1 = var2.useRef;
            var7 = null;
            var11 = var1.bind(var2)(var7);
            var2 = {};
            var2['isActive'] = var13;
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
                        if(var2) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                        var2 = _closure3_slot0;
                        if(!var2) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                        var3 = _closure3_slot3;
                        var4 = var3.current;
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 9;
                        var5 = var5[var3];
                        var3 = undefined;
                        var3 = var6.bind(var3)(var5);
                        var3 = var3.PlayerState;
                        var3 = var3.PAUSED;
                        var2 = var4 === var3;
case 7:
                        if(!var2) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                        var2 = _closure3_slot1;
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0002_ip = 9; continue _fun0002 }
case 11:
                        var2 = var3.play;
                        var2 = var2.bind(var3)();
                        _fun0002_ip = 9; continue _fun0002;
case 5:
                        var2 = _closure3_slot2;
                        var1 = false;
                        var2['current'] = var1;
case 9:
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
            var2 = var1.bind(var2)(var13);
            var1 = _closure1_slot4;
            var22 = 2;
            var1 = var1.bind(var4)(var2, var22);
            var17 = 0;
            var16 = var1[var17];
            var19 = 1;
            var1 = var1[var19];
            var14 = _closure1_slot5;
            var9 = var14.useState;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var1 = null;
                    if(!var2) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var3 = _closure1_slot7;
                    var2 = var3.getCurrentBalance;
                    var1 = var2.bind(var3)();
case 12:
                    return var1;
                }
            };
            var9 = var9.bind(var14)(var2);
            var2 = _closure1_slot4;
            var2 = var2.bind(var4)(var9, var22);
            var21 = var2[var17];
            var14 = var2[var19];
            _closure2_slot7 = var14;
            var9 = _closure1_slot5;
            var2 = var9.useState;
            var9 = var2.bind(var9)(var17);
            var2 = _closure1_slot4;
            var2 = var2.bind(var4)(var9, var22);
            var9 = var2[var17];
            var2 = var2[var19];
            if(!(var16 !== var13)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var1 = var1.bind(var4)(var13);
            if(!var13) { _fun0001_ip = 14; continue _fun0001 }
case 16:
            var16 = _closure1_slot7;
            var1 = var16.getCurrentBalance;
            var1 = var1.bind(var16)();
            var14 = var14.bind(var4)(var1);
            if(!(var1 !== var21)) { _fun0001_ip = 14; continue _fun0001 }
case 17:
            var1 = function(arg1) {
                var2 = arg1;
                var1 = 1;
                var1 = var2 + var1;
                return var1;
            };
            var1 = var2.bind(var4)(var1);
case 14:
            var16 = _closure1_slot5;
            var14 = var16.useCallback;
            var2 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                        var3 = false;
case 13: // try_start_0
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 13;
                        var4 = var4[var2];
                        var2 = undefined;
                        var5 = var5.bind(var2)(var4);
                        var4 = var5.claimBountyReward;
                        var2 = _closure2_slot0;
                        var2 = var2.id;
                        var2 = var4.bind(var5)(var2);
                        SaveGenerator(address=64);
case 20:
                        return var2;
case 21:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                        var3 = true;
case 7: // try_end0
                        _fun0004_ip = 24; continue _fun0004;
case 22:
                        return var2;
case 25: // catch_target0
                        CatchBlockStart(arg_register=4);
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 14;
                        var4 = var4[var2];
                        var2 = undefined;
                        var4 = var6.bind(var2)(var4);
                        var2 = var4.openBountyRewardClaimErrorToast;
                        var2 = var2.bind(var4)(var5);
case 24:
                        var2 = var3;
                        if(!var3) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                        var2 = _closure2_slot4;
case 26:
                        if(!var2) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                        var4 = _closure2_slot7;
                        var3 = undefined;
                        var2 = function(arg1) {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                var3 = arg1;
                                var1 = null;
                                var2 = var1 == var3;
                                if(var2) { _fun0005_ip = 30; continue _fun0005 }
case 13:
                                var2 = _closure2_slot6;
                                var1 = var3 + var2;
case 30:
                                return var1;
                            }
                        };
                        var2 = var4.bind(var3)(var2);
case 28:
                        var2 = undefined;
                        return var2;
case 18:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var2.bind(var4)(var1);
            var19 = var26.id;
            var1 = new Array(3);
            var1[0] = var19;
            var1[1] = var13;
            var1[2] = var18;
            var19 = var14.bind(var16)(var2, var1);
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var14 = 15;
            var14 = var1[var14];
            var18 = var2.bind(var4)(var14);
            var16 = var18.useBountiesModalVideoAnalytics;
            var14 = {};
            var22 = var26.id;
            var14['bountyId'] = var22;
            var14['sourceQuestContent'] = var25;
            var22 = _closure1_slot10;
            var14['rewardDurationMs'] = var22;
            var14 = var16.bind(var18)(var14);
            var28 = var14.handleVideoProgressAnalytics;
            _closure2_slot8 = var28;
            var16 = var14.handleVideoEndAnalytics;
            var14 = 16;
            var14 = var1[var14];
            var22 = var2.bind(var4)(var14);
            var18 = var22.useBountyVideoProgressPersistence;
            var14 = {};
            var23 = var26.id;
            var14['bountyId'] = var23;
            var14['endMode'] = var20;
            var22 = var18.bind(var22)(var14);
            var14 = var22.initialProgress;
            var18 = var22.handleProgress;
            _closure2_slot9 = var18;
            var22 = var22.flushProgress;
            _closure2_slot10 = var22;
            var29 = _closure1_slot5;
            var27 = var29.useEffect;
            var23 = new Array(1);
            var23[0] = var22;
            var22 = function() {
                var1 = function() {
                    var2 = _closure2_slot10;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    return var1;
                };
                return var1;
            };
            var22 = var27.bind(var29)(var22, var23);
            var27 = _closure1_slot5;
            var23 = var27.useCallback;
            var22 = new Array(2);
            var22[0] = var28;
            var22[1] = var18;
            var18 = function(arg1, arg2, arg3) {
                var5 = arg1;
                var4 = arg2;
                var3 = _closure2_slot8;
                var1 = undefined;
                var3 = var3.bind(var1)(var5, var4);
                var3 = _closure2_slot9;
                var2 = arg3;
                var2 = var3.bind(var1)(var5, var4, var2);
                return var1;
            };
            var18 = var23.bind(var27)(var18, var22);
            var1 = var1[var3];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useBountiesModalTiming;
            var1 = {};
            var1['endMode'] = var20;
            var20 = _closure1_slot10;
            var1['rewardDurationMs'] = var20;
            var1['isCompleted'] = var24;
            var1['onRewardEarned'] = var19;
            var1['onVideoProgress'] = var18;
            var1['onVideoEnd'] = var16;
            var1['playerRef'] = var11;
            var16 = var14.maxTimestampSec;
            var1['initialMaxVideoProgressSec'] = var16;
            var16 = var14.duration;
            var16 = var16 > var17;
            var7 = null;
            if(!var16) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var7 = var14.duration;
case 31:
            var1['initialVideoDurationSec'] = var7;
            var1 = var2.bind(var3)(var1);
            var23 = var1.isCtaVisible;
            var22 = var1.isEndCardVisible;
            _closure2_slot11 = var22;
            var20 = var1.handleVideoEnd;
            var19 = var1.handleVideoProgress;
            var2 = var1.handleReplay;
            _closure2_slot12 = var2;
            var18 = var1.rewardRemainingSeconds;
            var17 = var1.rewardTotalSeconds;
            var16 = var1.normalizedProgress;
            var3 = _closure1_slot11;
            var2 = _closure1_slot6;
            var1 = {};
            var1['style'] = var6;
            var7 = _closure1_slot11;
            var6 = _closure1_slot0;
            var27 = _closure1_slot2;
            var5 = 17;
            var5 = var27[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.BountyVideo;
            var5 = {};
            var5['bounty'] = var26;
            var5['sourceQuestContent'] = var25;
            var5['isCompleted'] = var24;
            var5['isCtaVisible'] = var23;
            var5['isEndCardVisible'] = var22;
            var22 = true;
            var5['isProgressBarVisible'] = var22;
            var5['orbsBalance'] = var21;
            var5['handleVideoEnd'] = var20;
            var5['handleVideoProgress'] = var19;
            var5['rewardRemainingSeconds'] = var18;
            var5['rewardTotalSeconds'] = var17;
            var5['normalizedProgress'] = var16;
            var5['repeat'] = var15;
            var5['initialProgress'] = var14;
            var5['isActive'] = var13;
            var5['isScrollingInBoundsSharedValue'] = var12;
            var5['playerRef'] = var11;
            var5['onPlayerStateChange'] = var10;
            var5['balanceWidgetPillResetKey'] = var9;
            var8 = function renderEndCard() {
                var4 = _closure1_slot11;
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
                var5 = _closure2_slot11;
                var1['overrideVisibility'] = var5;
                var5 = function children() {
                    var4 = _closure1_slot11;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 21;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var6 = _closure2_slot0;
                    var1['bounty'] = var6;
                    var6 = _closure2_slot11;
                    var1['visible'] = var6;
                    var6 = _closure2_slot12;
                    var1['onReplay'] = var6;
                    var6 = _closure2_slot4;
                    var1['isActive'] = var6;
                    var5 = _closure2_slot5;
                    var1['isScrollingInBoundsSharedValue'] = var5;
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
    var _closure1_slot12 = var1;
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
    var4 = var4.BOUNTY_REWARD_DURATION_MS;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot11 = var4;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/BountiesModal/BountiesScrollVideoItem.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function BountiesScrollVideoItem(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
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
            if(!(var6 === var4)) { _fun0006_ip = 33; continue _fun0006 }
case 34:
            var6 = false;
case 33:
            var _closure2_slot4 = var6;
            var1 = var1.isScrollingInBoundsSharedValue;
            var _closure2_slot5 = var1;
            var3 = _closure1_slot11;
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
                var4 = _closure1_slot11;
                var3 = _closure1_slot12;
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
                var1 = _closure2_slot5;
                var2['isScrollingInBoundsSharedValue'] = var1;
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