// app/modules/quests/hooks/RewardCodeClaimHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function useHandleRedemptionLinkClick(arg1) {
        var3 = arg1;
        var2 = var3.quest;
        var _closure2_slot0 = var2;
        var5 = var3.redemptionLink;
        var _closure2_slot1 = var5;
        var10 = var3.questContent;
        var _closure2_slot2 = var10;
        var9 = var3.questContentPosition;
        var _closure2_slot3 = var9;
        var8 = var3.sourceQuestContent;
        var _closure2_slot4 = var8;
        var11 = _closure1_slot0;
        var12 = _closure1_slot2;
        var4 = 5;
        var4 = var12[var4];
        var6 = undefined;
        var7 = var11.bind(var6)(var4);
        var4 = var7.useTrackQuestContentClickedWithImpression;
        var7 = var4.bind(var7)();
        var _closure2_slot5 = var7;
        var4 = 6;
        var4 = var12[var4];
        var6 = var11.bind(var6)(var4);
        var4 = var6.useQuestImpressionId;
        var6 = var4.bind(var6)();
        var _closure2_slot6 = var6;
        var4 = _closure1_slot5;
        var3 = var4.useCallback;
        var11 = var2.id;
        var2 = new Array(7);
        var2[0] = var11;
        var2[1] = var10;
        var2[2] = var9;
        var2[3] = var8;
        var2[4] = var7;
        var2[5] = var6;
        var2[6] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot1;
                var2 = null;
                if(!(var2 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 7;
                var6 = var8[var4];
                var3 = undefined;
                var7 = var5.bind(var3)(var6);
                var6 = var7.shouldMigrateToAdAnalyticsInterface;
                var4 = var8[var4];
                var4 = var5.bind(var3)(var4);
                var4 = var4.AdAnalyticsInterfaceExperimentStep;
                var5 = var4.STEP_2_CLICKED_INTERNAL;
                var4 = 'quest_reward_code_redemption_link';
                var4 = var6.bind(var7)(var5, var4);
                if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var5 = _closure2_slot5;
                var4 = {};
                var12 = _closure2_slot0;
                var6 = var12.id;
                var4['questId'] = var6;
                var11 = _closure2_slot2;
                var4['questContent'] = var11;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 11;
                var6 = var10[var8];
                var6 = var9.bind(var3)(var6);
                var6 = var6.QuestContentCTA;
                var6 = var6.REDEEM_REWARD;
                var4['questContentCTA'] = var6;
                var7 = _closure2_slot3;
                var4['questContentPosition'] = var7;
                var6 = _closure2_slot4;
                var4['sourceQuestContent'] = var6;
                var4 = var5.bind(var3)(var4);
                var4 = {};
                var12 = var12.id;
                var4['questId'] = var12;
                var4['questContent'] = var11;
                var8 = var10[var8];
                var8 = var9.bind(var3)(var8);
                var8 = var8.QuestContentCTA;
                var8 = var8.VISIT_REDEMPTION_LINK;
                var4['questContentCTA'] = var8;
                var4['questContentPosition'] = var7;
                var4['sourceQuestContent'] = var6;
                var4 = var5.bind(var3)(var4);
                _fun0001_ip = 6; continue _fun0001;
case 4:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var4 = 8;
                var5 = var13[var4];
                var17 = var12.bind(var3)(var5);
                var6 = var17.captureAdUserAction;
                var5 = {};
                var16 = 9;
                var7 = var13[var16];
                var7 = var12.bind(var3)(var7);
                var7 = var7.AdUserActionType;
                var7 = var7.CLICK_INTERNAL;
                var5['type'] = var7;
                var15 = 10;
                var7 = var13[var15];
                var7 = var12.bind(var3)(var7);
                var7 = var7.AdCreativeType;
                var7 = var7.QUEST;
                var5['adCreativeType'] = var7;
                var14 = _closure2_slot0;
                var7 = var14.id;
                var5['adCreativeId'] = var7;
                var11 = 11;
                var7 = var13[var11];
                var7 = var12.bind(var3)(var7);
                var7 = var7.QuestContentCTA;
                var7 = var7.REDEEM_REWARD;
                var5['questContentCTA'] = var7;
                var10 = _closure2_slot2;
                var5['surfaceId'] = var10;
                var9 = _closure2_slot4;
                var5['sourceQuestContent'] = var9;
                var8 = _closure2_slot6;
                var5['impressionId'] = var8;
                var7 = _closure2_slot3;
                var5['questContentPosition'] = var7;
                var5 = var6.bind(var17)(var5);
                var4 = var13[var4];
                var6 = var12.bind(var3)(var4);
                var5 = var6.captureAdUserAction;
                var4 = {};
                var16 = var13[var16];
                var16 = var12.bind(var3)(var16);
                var16 = var16.AdUserActionType;
                var16 = var16.CLICK_INTERNAL;
                var4['type'] = var16;
                var15 = var13[var15];
                var15 = var12.bind(var3)(var15);
                var15 = var15.AdCreativeType;
                var15 = var15.QUEST;
                var4['adCreativeType'] = var15;
                var14 = var14.id;
                var4['adCreativeId'] = var14;
                var11 = var13[var11];
                var11 = var12.bind(var3)(var11);
                var11 = var11.QuestContentCTA;
                var11 = var11.VISIT_REDEMPTION_LINK;
                var4['questContentCTA'] = var11;
                var4['surfaceId'] = var10;
                var4['sourceQuestContent'] = var9;
                var4['impressionId'] = var8;
                var4['questContentPosition'] = var7;
                var4 = var5.bind(var6)(var4);
case 6:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 12;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
case 2:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var8 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot5 = var5;
    var5 = 13;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/hooks/RewardCodeClaimHooks.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useClaimOrFetchRewardCode(arg1) {
        var2 = arg1;
        var15 = var2.isClaimingReward;
        var _closure2_slot0 = var15;
        var13 = var2.isFetchingRewardCode;
        var _closure2_slot1 = var13;
        var12 = var2.questContent;
        var _closure2_slot2 = var12;
        var11 = var2.quest;
        var _closure2_slot3 = var11;
        var10 = var2.rewardCode;
        var _closure2_slot4 = var10;
        var9 = var2.preview;
        var _closure2_slot5 = var9;
        var3 = _closure1_slot5;
        var2 = var3.useState;
        var18 = false;
        var2 = var2.bind(var3)(var18);
        var16 = _closure1_slot4;
        var5 = undefined;
        var14 = 2;
        var2 = var16.bind(var5)(var2, var14);
        var8 = 0;
        var3 = var2[var8];
        var _closure2_slot6 = var3;
        var7 = 1;
        var2 = var2[var7];
        var _closure2_slot7 = var2;
        var17 = _closure1_slot5;
        var4 = var17.useState;
        var4 = var4.bind(var17)(var18);
        var4 = var16.bind(var5)(var4, var14);
        var14 = var4[var8];
        var _closure2_slot8 = var14;
        var4 = var4[var7];
        var _closure2_slot9 = var4;
        var8 = _closure1_slot5;
        var7 = var8.useCallback;
        var4 = function() {
            var4 = _closure1_slot3;
            var3 = undefined;
            var2 = function* (arg1, arg2, arg3) {
                var1 = function* anon_0_(arg1, arg2, arg3) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                        var6 = arg1;
                        var4 = arg2;
                        var2 = arg3;
case 9: // try_start_0
                        var8 = _closure2_slot9;
                        var5 = undefined;
                        var7 = true;
                        var7 = var8.bind(var5)(var7);
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var7 = 3;
                        var7 = var9[var7];
                        var8 = var8.bind(var5)(var7);
                        var7 = var8.claimQuestReward;
                        var2 = var7.bind(var8)(var6, var4, var2);
                        SaveGenerator(address=75);
case 10:
                        return var2;
case 11:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                        var6 = _closure2_slot7;
                        var4 = false;
                        var6 = var6.bind(var5)(var4);
                        var3 = _closure2_slot9;
                        var3 = var3.bind(var5)(var4);
case 14: // try_end0
                        _fun0002_ip = 15; continue _fun0002;
case 12:
                        return var2;
case 16: // catch_target0
                        CatchBlockStart(arg_register=1);
                        var5 = _closure2_slot7;
                        var4 = undefined;
                        var3 = true;
                        var3 = var5.bind(var4)(var3);
                        var3 = _closure2_slot9;
                        var2 = false;
                        var2 = var3.bind(var4)(var2);
case 15:
                        var2 = undefined;
                        return var2;
case 7:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var4.bind(var3)(var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            return var1;
        };
        var5 = var4.bind(var5)();
        var4 = new Array(0);
        var5 = var7.bind(var8)(var5, var4);
        var _closure2_slot10 = var5;
        var16 = _closure1_slot5;
        var8 = var16.useCallback;
        var7 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = arg1;
case 17: // try_start_0
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 3;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.fetchQuestRewardCode;
                var1 = var2.bind(var3)(var1);
case 18: // try_end0
                _fun0003_ip = 19; continue _fun0003;
case 20: // catch_target0
                CatchBlockStart(arg_register=0);
                var3 = _closure2_slot7;
                var2 = undefined;
                var1 = true;
                var1 = var3.bind(var2)(var1);
case 19:
                var1 = undefined;
                return var1;
            }
        };
        var4 = new Array(0);
        var4 = var8.bind(var16)(var7, var4);
        var _closure2_slot11 = var4;
        var8 = _closure1_slot5;
        var7 = var8.useEffect;
        var6 = new Array(10);
        var6[0] = var5;
        var6[1] = var4;
        var6[2] = var3;
        var6[3] = var15;
        var6[4] = var14;
        var6[5] = var13;
        var6[6] = var12;
        var6[7] = var11;
        var6[8] = var10;
        var6[9] = var9;
        var1 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = _closure2_slot5;
                var2 = true;
                var2 = var2 === var3;
                if(var2) { _fun0004_ip = 21; continue _fun0004 }
case 3:
                var4 = _closure2_slot4;
                var3 = null;
                var2 = var3 != var4;
case 21:
                if(var2) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                var2 = _closure2_slot6;
case 22:
                if(var2) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                var2 = _closure2_slot0;
case 24:
                if(var2) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                var2 = _closure2_slot8;
case 26:
                if(var2) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                var2 = _closure2_slot1;
case 28:
                if(var2) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                var3 = _closure2_slot7;
                var5 = undefined;
                var2 = false;
                var2 = var3.bind(var5)(var2);
                var2 = _closure2_slot3;
                var4 = var2.userStatus;
                var3 = null;
                var6 = var3 == var4;
                var2 = undefined;
                if(var6) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                var2 = var4.claimedAt;
case 32:
                if(!(var3 != var2)) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                var2 = _closure2_slot3;
                var4 = var2.userStatus;
                var6 = var3 == var4;
                var2 = undefined;
                if(var6) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                var2 = var4.claimedAt;
case 36:
                if(!(var3 != var2)) { _fun0004_ip = 30; continue _fun0004 }
case 38:
                var3 = _closure2_slot11;
                var2 = _closure2_slot3;
                var2 = var2.id;
                var2 = var3.bind(var5)(var2);
                _fun0004_ip = 30; continue _fun0004;
case 34:
                var4 = _closure2_slot10;
                var2 = _closure2_slot3;
                var3 = var2.id;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 4;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.QuestRewardCodePlatforms;
                var2 = var2.CROSS_PLATFORM;
                var1 = _closure2_slot2;
                var1 = var4.bind(var5)(var3, var2, var1);
case 30:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var7.bind(var8)(var1, var6);
        var1 = {};
        var1['claimCode'] = var5;
        var1['fetchCode'] = var4;
        var1['hasError'] = var3;
        var1['setHasError'] = var2;
        return var1;
    };
    var3['useClaimOrFetchRewardCode'] = var5;
    var3['useHandleRedemptionLinkClick'] = var4;
    var2 = function useClaimRewardCodePrimaryCtaClickHandler(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var18 = var4.claimCode;
            var _closure2_slot0 = var18;
            var17 = var4.fetchCode;
            var _closure2_slot1 = var17;
            var16 = var4.hasError;
            var _closure2_slot2 = var16;
            var15 = var4.onDismiss;
            var _closure2_slot3 = var15;
            var14 = var4.quest;
            var _closure2_slot4 = var14;
            var12 = var4.questContent;
            var _closure2_slot5 = var12;
            var11 = var4.questContentCTA;
            var13 = undefined;
            if(!(var13 === var11)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 11;
            var2 = var5[var2];
            var2 = var3.bind(var13)(var2);
            var2 = var2.QuestContentCTA;
            var11 = var2.GET_REWARD_CODE;
case 39:
            var _closure2_slot6 = var11;
            var10 = var4.questContentPosition;
            var _closure2_slot7 = var10;
            var7 = var4.redemptionLink;
            var _closure2_slot8 = var7;
            var6 = var4.sourceQuestContent;
            var _closure2_slot9 = var6;
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 5;
            var3 = var8[var3];
            var9 = var5.bind(var13)(var3);
            var3 = var9.useTrackQuestContentClickedWithImpression;
            var9 = var3.bind(var9)();
            var _closure2_slot10 = var9;
            var3 = 6;
            var3 = var8[var3];
            var5 = var5.bind(var13)(var3);
            var3 = var5.useQuestImpressionId;
            var8 = var3.bind(var5)();
            var _closure2_slot11 = var8;
            var3 = _closure1_slot6;
            var5 = var3.bind(var13)(var4);
            var _closure2_slot12 = var5;
            var4 = _closure1_slot5;
            var3 = var4.useCallback;
            var2 = new Array(14);
            var2[0] = var18;
            var2[1] = var17;
            var2[2] = var16;
            var2[3] = var15;
            var15 = var14.id;
            var2[4] = var15;
            var14 = var14.userStatus;
            var15 = null;
            var15 = var15 == var14;
            var13 = undefined;
            if(var15) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var13 = var14.claimedAt;
case 41:
            var2[5] = var13;
            var2[6] = var12;
            var2[7] = var11;
            var2[8] = var10;
            var2[9] = var9;
            var2[10] = var8;
            var2[11] = var7;
            var2[12] = var6;
            var2[13] = var5;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot2;
                    if(var2) { _fun0006_ip = 43; continue _fun0006 }
case 8:
                    var3 = _closure2_slot8;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                    var3 = _closure2_slot12;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
case 44:
                    var3 = _closure2_slot3;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
                    _fun0006_ip = 46; continue _fun0006;
case 43:
                    var2 = _closure2_slot4;
                    var5 = var2.userStatus;
                    var4 = null;
                    var6 = var4 == var5;
                    var3 = undefined;
                    var2 = undefined;
                    if(var6) { _fun0006_ip = 47; continue _fun0006 }
case 48:
                    var2 = var5.claimedAt;
case 47:
                    if(!(var4 == var2)) { _fun0006_ip = 49; continue _fun0006 }
case 13:
                    var9 = _closure2_slot0;
                    var2 = _closure2_slot4;
                    var7 = var2.id;
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 4;
                    var4 = var8[var4];
                    var4 = var5.bind(var3)(var4);
                    var4 = var4.QuestRewardCodePlatforms;
                    var6 = var4.CROSS_PLATFORM;
                    var4 = _closure2_slot5;
                    var4 = var9.bind(var3)(var7, var6, var4);
                    var4 = 7;
                    var6 = var8[var4];
                    var7 = var5.bind(var3)(var6);
                    var6 = var7.shouldMigrateToAdAnalyticsInterface;
                    var4 = var8[var4];
                    var4 = var5.bind(var3)(var4);
                    var4 = var4.AdAnalyticsInterfaceExperimentStep;
                    var5 = var4.STEP_2_CLICKED_INTERNAL;
                    var4 = 'quest_reward_code_primary_cta';
                    var4 = var6.bind(var7)(var5, var4);
                    if(var4) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                    var5 = _closure2_slot10;
                    var4 = {};
                    var6 = _closure2_slot4;
                    var6 = var6.id;
                    var4['questId'] = var6;
                    var6 = _closure2_slot5;
                    var4['questContent'] = var6;
                    var6 = _closure2_slot6;
                    var4['questContentCTA'] = var6;
                    var6 = _closure2_slot7;
                    var4['questContentPosition'] = var6;
                    var6 = _closure2_slot9;
                    var4['sourceQuestContent'] = var6;
                    var4 = var5.bind(var3)(var4);
                    _fun0006_ip = 46; continue _fun0006;
case 50:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 8;
                    var2 = var8[var2];
                    var5 = var7.bind(var3)(var2);
                    var4 = var5.captureAdUserAction;
                    var2 = {};
                    var6 = 9;
                    var6 = var8[var6];
                    var6 = var7.bind(var3)(var6);
                    var6 = var6.AdUserActionType;
                    var6 = var6.CLICK_INTERNAL;
                    var2['type'] = var6;
                    var6 = 10;
                    var6 = var8[var6];
                    var6 = var7.bind(var3)(var6);
                    var6 = var6.AdCreativeType;
                    var6 = var6.QUEST;
                    var2['adCreativeType'] = var6;
                    var6 = _closure2_slot4;
                    var6 = var6.id;
                    var2['adCreativeId'] = var6;
                    var6 = _closure2_slot6;
                    var2['questContentCTA'] = var6;
                    var6 = _closure2_slot5;
                    var2['surfaceId'] = var6;
                    var6 = _closure2_slot9;
                    var2['sourceQuestContent'] = var6;
                    var6 = _closure2_slot11;
                    var2['impressionId'] = var6;
                    var6 = _closure2_slot7;
                    var2['questContentPosition'] = var6;
                    var2 = var4.bind(var5)(var2);
                    _fun0006_ip = 46; continue _fun0006;
case 49:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot4;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
case 46:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useClaimRewardCodePrimaryCtaClickHandler'] = var2;
    return var1;
})();