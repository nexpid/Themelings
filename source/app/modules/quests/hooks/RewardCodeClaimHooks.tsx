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
        var9 = var3.questContent;
        var _closure2_slot2 = var9;
        var8 = var3.questContentPosition;
        var _closure2_slot3 = var8;
        var7 = var3.sourceQuestContent;
        var _closure2_slot4 = var7;
        var10 = _closure1_slot0;
        var6 = _closure1_slot2;
        var4 = 4;
        var6 = var6[var4];
        var4 = undefined;
        var6 = var10.bind(var4)(var6);
        var4 = var6.useTrackQuestContentClickedWithImpression;
        var6 = var4.bind(var6)();
        var _closure2_slot5 = var6;
        var4 = _closure1_slot5;
        var3 = var4.useCallback;
        var10 = var2.id;
        var2 = new Array(6);
        var2[0] = var10;
        var2[1] = var9;
        var2[2] = var8;
        var2[3] = var7;
        var2[4] = var6;
        var2[5] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure2_slot1;
                var1 = null;
                if(!(var1 != var2)) { _fun0001_ip = 158; continue _fun0001 }
 16:
                var6 = _closure2_slot5;
                var1 = {};
                var2 = _closure2_slot0;
                var2 = var2.id;
                var1['questId'] = var2;
                var2 = _closure2_slot2;
                var1['questContent'] = var2;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 4;
                var7 = var5[var2];
                var2 = undefined;
                var7 = var3.bind(var2)(var7);
                var7 = var7.QuestContentCTA;
                var7 = var7.REDEEM_REWARD;
                var1['questContentCTA'] = var7;
                var7 = _closure2_slot3;
                var1['questContentPosition'] = var7;
                var7 = _closure2_slot4;
                var1['sourceQuestContent'] = var7;
                var1 = var6.bind(var2)(var1);
                var1 = 5;
                var1 = var5[var1];
                var3 = var3.bind(var2)(var1);
                var2 = var3.handleClick;
                var1 = {};
                var4 = _closure2_slot1;
                var1['href'] = var4;
                var4 = function onConfirm() {
                    var6 = _closure2_slot5;
                    var4 = {};
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var4['questId'] = var1;
                    var1 = _closure2_slot2;
                    var4['questContent'] = var1;
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 4;
                    var7 = var5[var1];
                    var1 = undefined;
                    var7 = var8.bind(var1)(var7);
                    var7 = var7.QuestContentCTA;
                    var7 = var7.VISIT_REDEMPTION_LINK;
                    var4['questContentCTA'] = var7;
                    var7 = _closure2_slot3;
                    var4['questContentPosition'] = var7;
                    var7 = _closure2_slot4;
                    var4['sourceQuestContent'] = var7;
                    var4 = var6.bind(var1)(var4);
                    var4 = _closure1_slot1;
                    var3 = 6;
                    var3 = var5[var3];
                    var3 = var4.bind(var1)(var3);
                    var2 = _closure2_slot1;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1['onConfirm'] = var4;
                var1 = var2.bind(var3)(var1);
 158:
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
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/hooks/RewardCodeClaimHooks.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useClaimOrFetchRewardCode(arg1) {
        var2 = arg1;
        var17 = var2.isClaimingReward;
        var _closure2_slot0 = var17;
        var15 = var2.isFetchingRewardCode;
        var _closure2_slot1 = var15;
        var14 = var2.questContent;
        var _closure2_slot2 = var14;
        var13 = var2.quest;
        var _closure2_slot3 = var13;
        var12 = var2.requiresPlatformSelection;
        var _closure2_slot4 = var12;
        var11 = var2.rewardCode;
        var _closure2_slot5 = var11;
        var10 = var2.selectedPlatformType;
        var _closure2_slot6 = var10;
        var9 = var2.preview;
        var _closure2_slot7 = var9;
        var3 = _closure1_slot5;
        var2 = var3.useState;
        var20 = false;
        var2 = var2.bind(var3)(var20);
        var18 = _closure1_slot4;
        var5 = undefined;
        var16 = 2;
        var2 = var18.bind(var5)(var2, var16);
        var8 = 0;
        var3 = var2[var8];
        var _closure2_slot8 = var3;
        var7 = 1;
        var2 = var2[var7];
        var _closure2_slot9 = var2;
        var19 = _closure1_slot5;
        var4 = var19.useState;
        var4 = var4.bind(var19)(var20);
        var4 = var18.bind(var5)(var4, var16);
        var16 = var4[var8];
        var _closure2_slot10 = var16;
        var4 = var4[var7];
        var _closure2_slot11 = var4;
        var8 = _closure1_slot5;
        var7 = var8.useCallback;
        var4 = function() {
            var4 = _closure1_slot3;
            var3 = undefined;
            var2 = function* (arg1, arg2, arg3) {
                var1 = function* anon_0_(arg1, arg2, arg3) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0002_ip = 140; continue _fun0002 }
 10:
                        var6 = arg1;
                        var4 = arg2;
                        var2 = arg3;
 19: // try_start_0
                        var8 = _closure2_slot11;
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
 73:
                        return var2;
 75:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0002_ip = 103; continue _fun0002 }
 81:
                        var6 = _closure2_slot9;
                        var4 = false;
                        var6 = var6.bind(var5)(var4);
                        var3 = _closure2_slot11;
                        var3 = var3.bind(var5)(var4);
 101: // try_end0
                        _fun0002_ip = 135; continue _fun0002;
 103:
                        return var2;
 106: // catch_target0
                        CatchBlockStart(arg_register=1);
                        var5 = _closure2_slot9;
                        var4 = undefined;
                        var3 = true;
                        var3 = var5.bind(var4)(var3);
                        var3 = _closure2_slot11;
                        var2 = false;
                        var2 = var3.bind(var4)(var2);
 135:
                        var2 = undefined;
                        return var2;
 140:
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
        var _closure2_slot12 = var5;
        var18 = _closure1_slot5;
        var8 = var18.useCallback;
        var7 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = arg1;
 3: // try_start_0
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 3;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.fetchQuestRewardCode;
                var1 = var2.bind(var3)(var1);
 39: // try_end0
                _fun0003_ip = 59; continue _fun0003;
 41: // catch_target0
                CatchBlockStart(arg_register=0);
                var3 = _closure2_slot9;
                var2 = undefined;
                var1 = true;
                var1 = var3.bind(var2)(var1);
 59:
                var1 = undefined;
                return var1;
            }
        };
        var4 = new Array(0);
        var4 = var8.bind(var18)(var7, var4);
        var _closure2_slot13 = var4;
        var8 = _closure1_slot5;
        var7 = var8.useEffect;
        var6 = new Array(12);
        var6[0] = var5;
        var6[1] = var4;
        var6[2] = var3;
        var6[3] = var17;
        var6[4] = var16;
        var6[5] = var15;
        var6[6] = var14;
        var6[7] = var13;
        var6[8] = var12;
        var6[9] = var11;
        var6[10] = var10;
        var6[11] = var9;
        var1 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = _closure2_slot7;
                var2 = true;
                var2 = var2 === var3;
                if(var2) { _fun0004_ip = 26; continue _fun0004 }
 16:
                var4 = _closure2_slot5;
                var3 = null;
                var2 = var3 != var4;
 26:
                if(var2) { _fun0004_ip = 33; continue _fun0004 }
 29:
                var2 = _closure2_slot8;
 33:
                if(var2) { _fun0004_ip = 40; continue _fun0004 }
 36:
                var2 = _closure2_slot0;
 40:
                if(var2) { _fun0004_ip = 47; continue _fun0004 }
 43:
                var2 = _closure2_slot10;
 47:
                if(var2) { _fun0004_ip = 54; continue _fun0004 }
 50:
                var2 = _closure2_slot1;
 54:
                if(var2) { _fun0004_ip = 61; continue _fun0004 }
 57:
                var2 = _closure2_slot4;
 61:
                if(var2) { _fun0004_ip = 196; continue _fun0004 }
 67:
                var3 = _closure2_slot9;
                var5 = undefined;
                var2 = false;
                var2 = var3.bind(var5)(var2);
                var2 = _closure2_slot3;
                var4 = var2.userStatus;
                var3 = null;
                var6 = var3 == var4;
                var2 = undefined;
                if(var6) { _fun0004_ip = 107; continue _fun0004 }
 101:
                var2 = var4.claimedAt;
 107:
                if(!(var3 == var2)) { _fun0004_ip = 119; continue _fun0004 }
 111:
                var2 = _closure2_slot6;
                if(!(var3 == var2)) { _fun0004_ip = 168; continue _fun0004 }
 119:
                var2 = _closure2_slot3;
                var4 = var2.userStatus;
                var6 = var3 == var4;
                var2 = undefined;
                if(var6) { _fun0004_ip = 144; continue _fun0004 }
 138:
                var2 = var4.claimedAt;
 144:
                if(!(var3 != var2)) { _fun0004_ip = 196; continue _fun0004 }
 148:
                var3 = _closure2_slot13;
                var2 = _closure2_slot3;
                var2 = var2.id;
                var2 = var3.bind(var5)(var2);
                _fun0004_ip = 196; continue _fun0004;
 168:
                var4 = _closure2_slot12;
                var2 = _closure2_slot3;
                var3 = var2.id;
                var2 = _closure2_slot6;
                var1 = _closure2_slot2;
                var1 = var4.bind(var5)(var3, var2, var1);
 196:
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
 0:
            var4 = arg1;
            var19 = var4.claimCode;
            var _closure2_slot0 = var19;
            var18 = var4.fetchCode;
            var _closure2_slot1 = var18;
            var17 = var4.hasError;
            var _closure2_slot2 = var17;
            var16 = var4.onDismiss;
            var _closure2_slot3 = var16;
            var15 = var4.quest;
            var _closure2_slot4 = var15;
            var13 = var4.questContent;
            var _closure2_slot5 = var13;
            var12 = var4.questContentCTA;
            var14 = undefined;
            if(!(var14 === var12)) { _fun0005_ip = 112; continue _fun0005 }
 77:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 4;
            var2 = var5[var2];
            var2 = var3.bind(var14)(var2);
            var2 = var2.QuestContentCTA;
            var12 = var2.GET_REWARD_CODE;
 112:
            var _closure2_slot6 = var12;
            var11 = var4.questContentPosition;
            var _closure2_slot7 = var11;
            var10 = var4.requiresPlatformSelection;
            var _closure2_slot8 = var10;
            var9 = var4.selectedPlatformType;
            var _closure2_slot9 = var9;
            var7 = var4.redemptionLink;
            var _closure2_slot10 = var7;
            var6 = var4.sourceQuestContent;
            var _closure2_slot11 = var6;
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 4;
            var3 = var8[var3];
            var5 = var5.bind(var14)(var3);
            var3 = var5.useTrackQuestContentClickedWithImpression;
            var8 = var3.bind(var5)();
            var _closure2_slot12 = var8;
            var3 = _closure1_slot6;
            var5 = var3.bind(var14)(var4);
            var _closure2_slot13 = var5;
            var4 = _closure1_slot5;
            var3 = var4.useCallback;
            var2 = new Array(15);
            var2[0] = var19;
            var2[1] = var18;
            var2[2] = var17;
            var2[3] = var16;
            var16 = var15.id;
            var2[4] = var16;
            var15 = var15.userStatus;
            var16 = null;
            var16 = var16 == var15;
            var14 = undefined;
            if(var16) { _fun0005_ip = 277; continue _fun0005 }
 271:
            var14 = var15.claimedAt;
 277:
            var2[5] = var14;
            var2[6] = var13;
            var2[7] = var12;
            var2[8] = var11;
            var2[9] = var10;
            var2[10] = var9;
            var2[11] = var8;
            var2[12] = var7;
            var2[13] = var6;
            var2[14] = var5;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = _closure2_slot8;
                    if(!var1) { _fun0006_ip = 23; continue _fun0006 }
 10:
                    var2 = _closure2_slot9;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0006_ip = 212; continue _fun0006 }
 23:
                    var1 = _closure2_slot2;
                    if(var1) { _fun0006_ip = 65; continue _fun0006 }
 30:
                    var2 = _closure2_slot10;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0006_ip = 50; continue _fun0006 }
 40:
                    var2 = _closure2_slot13;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 50:
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    _fun0006_ip = 295; continue _fun0006;
 65:
                    var1 = _closure2_slot4;
                    var5 = var1.userStatus;
                    var2 = null;
                    var6 = var2 == var5;
                    var3 = undefined;
                    var1 = undefined;
                    if(var6) { _fun0006_ip = 94; continue _fun0006 }
 88:
                    var1 = var5.claimedAt;
 94:
                    if(!(var2 == var1)) { _fun0006_ip = 192; continue _fun0006 }
 98:
                    var1 = _closure2_slot9;
                    if(!(var2 != var1)) { _fun0006_ip = 295; continue _fun0006 }
 109:
                    var7 = _closure2_slot0;
                    var6 = _closure2_slot4;
                    var2 = var6.id;
                    var1 = _closure2_slot9;
                    var5 = _closure2_slot5;
                    var1 = var7.bind(var3)(var2, var1, var5);
                    var2 = _closure2_slot12;
                    var1 = {};
                    var6 = var6.id;
                    var1['questId'] = var6;
                    var1['questContent'] = var5;
                    var5 = _closure2_slot6;
                    var1['questContentCTA'] = var5;
                    var5 = _closure2_slot7;
                    var1['questContentPosition'] = var5;
                    var5 = _closure2_slot11;
                    var1['sourceQuestContent'] = var5;
                    var1 = var2.bind(var3)(var1);
                    _fun0006_ip = 295; continue _fun0006;
 192:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot4;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    _fun0006_ip = 295; continue _fun0006;
 212:
                    var7 = _closure2_slot0;
                    var6 = _closure2_slot4;
                    var2 = var6.id;
                    var1 = _closure2_slot9;
                    var5 = _closure2_slot5;
                    var3 = undefined;
                    var1 = var7.bind(var3)(var2, var1, var5);
                    var2 = _closure2_slot12;
                    var1 = {};
                    var6 = var6.id;
                    var1['questId'] = var6;
                    var1['questContent'] = var5;
                    var5 = _closure2_slot6;
                    var1['questContentCTA'] = var5;
                    var5 = _closure2_slot7;
                    var1['questContentPosition'] = var5;
                    var4 = _closure2_slot11;
                    var1['sourceQuestContent'] = var4;
                    var1 = var2.bind(var3)(var1);
 295:
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