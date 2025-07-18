// app/modules/quests/hooks/RewardCodeClaimHooks.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/hooks/RewardCodeClaimHooks.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useClaimOrFetchRewardCode(arg1) {
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
        var8 = _closure1_slot5;
        var2 = var8.useState;
        var19 = false;
        var2 = var2.bind(var8)(var19);
        var18 = _closure1_slot4;
        var5 = undefined;
        var16 = 2;
        var2 = var18.bind(var5)(var2, var16);
        var7 = 0;
        var3 = var2[var7];
        var _closure2_slot8 = var3;
        var6 = 1;
        var2 = var2[var6];
        var _closure2_slot9 = var2;
        var4 = var8.useState;
        var4 = var4.bind(var8)(var19);
        var4 = var18.bind(var5)(var4, var16);
        var16 = var4[var7];
        var _closure2_slot10 = var16;
        var4 = var4[var6];
        var _closure2_slot11 = var4;
        var6 = var8.useCallback;
        var4 = function() {
            var4 = _closure1_slot3;
            var3 = undefined;
            var2 = function* (arg1, arg2, arg3) {
                var1 = function* anon_0_(arg1, arg2, arg3) {
                    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0001_ip = 140; continue _fun0001 }
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
                        if(var4) { _fun0001_ip = 103; continue _fun0001 }
 81:
                        var6 = _closure2_slot9;
                        var4 = false;
                        var6 = var6.bind(var5)(var4);
                        var3 = _closure2_slot11;
                        var3 = var3.bind(var5)(var4);
 101: // try_end0
                        _fun0001_ip = 135; continue _fun0001;
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
        var5 = var6.bind(var8)(var5, var4);
        var _closure2_slot12 = var5;
        var7 = var8.useCallback;
        var6 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
                _fun0002_ip = 59; continue _fun0002;
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
        var4 = var7.bind(var8)(var6, var4);
        var _closure2_slot13 = var4;
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
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = _closure2_slot7;
                var2 = true;
                var2 = var2 === var3;
                if(var2) { _fun0003_ip = 26; continue _fun0003 }
 16:
                var4 = _closure2_slot5;
                var3 = null;
                var2 = var3 != var4;
 26:
                if(var2) { _fun0003_ip = 33; continue _fun0003 }
 29:
                var2 = _closure2_slot8;
 33:
                if(var2) { _fun0003_ip = 40; continue _fun0003 }
 36:
                var2 = _closure2_slot0;
 40:
                if(var2) { _fun0003_ip = 47; continue _fun0003 }
 43:
                var2 = _closure2_slot10;
 47:
                if(var2) { _fun0003_ip = 54; continue _fun0003 }
 50:
                var2 = _closure2_slot1;
 54:
                if(var2) { _fun0003_ip = 61; continue _fun0003 }
 57:
                var2 = _closure2_slot4;
 61:
                if(var2) { _fun0003_ip = 196; continue _fun0003 }
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
                if(var6) { _fun0003_ip = 107; continue _fun0003 }
 101:
                var2 = var4.claimedAt;
 107:
                if(!(var3 == var2)) { _fun0003_ip = 119; continue _fun0003 }
 111:
                var2 = _closure2_slot6;
                if(!(var3 == var2)) { _fun0003_ip = 168; continue _fun0003 }
 119:
                var2 = _closure2_slot3;
                var4 = var2.userStatus;
                var6 = var3 == var4;
                var2 = undefined;
                if(var6) { _fun0003_ip = 144; continue _fun0003 }
 138:
                var2 = var4.claimedAt;
 144:
                if(!(var3 != var2)) { _fun0003_ip = 196; continue _fun0003 }
 148:
                var3 = _closure2_slot13;
                var2 = _closure2_slot3;
                var2 = var2.id;
                var2 = var3.bind(var5)(var2);
                _fun0003_ip = 196; continue _fun0003;
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
    var3['useClaimOrFetchRewardCode'] = var4;
    var2 = function useClaimRewardCodePrimaryCtaClickHandler(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var18 = var2.claimCode;
            var _closure2_slot0 = var18;
            var17 = var2.fetchCode;
            var _closure2_slot1 = var17;
            var16 = var2.hasError;
            var _closure2_slot2 = var16;
            var15 = var2.onDismiss;
            var _closure2_slot3 = var15;
            var14 = var2.quest;
            var _closure2_slot4 = var14;
            var12 = var2.questContent;
            var _closure2_slot5 = var12;
            var11 = var2.questContentCTA;
            var13 = undefined;
            if(!(var13 === var11)) { _fun0004_ip = 112; continue _fun0004 }
 77:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 4;
            var3 = var5[var3];
            var3 = var4.bind(var13)(var3);
            var3 = var3.QuestContentCTA;
            var11 = var3.GET_REWARD_CODE;
 112:
            var _closure2_slot6 = var11;
            var10 = var2.questContentPosition;
            var _closure2_slot7 = var10;
            var9 = var2.requiresPlatformSelection;
            var _closure2_slot8 = var9;
            var8 = var2.selectedPlatformType;
            var _closure2_slot9 = var8;
            var6 = var2.redemptionLink;
            var _closure2_slot10 = var6;
            var5 = var2.sourceQuestContent;
            var _closure2_slot11 = var5;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 4;
            var3 = var7[var3];
            var4 = var4.bind(var13)(var3);
            var3 = var4.useTrackQuestContentClickedWithImpression;
            var7 = var3.bind(var4)();
            var _closure2_slot12 = var7;
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
            if(var15) { _fun0004_ip = 264; continue _fun0004 }
 258:
            var13 = var14.claimedAt;
 264:
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
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = _closure2_slot8;
                    if(!var1) { _fun0005_ip = 23; continue _fun0005 }
 10:
                    var2 = _closure2_slot9;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0005_ip = 350; continue _fun0005 }
 23:
                    var1 = _closure2_slot2;
                    if(var1) { _fun0005_ip = 203; continue _fun0005 }
 33:
                    var2 = _closure2_slot10;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0005_ip = 188; continue _fun0005 }
 46:
                    var6 = _closure2_slot12;
                    var1 = {};
                    var2 = _closure2_slot4;
                    var2 = var2.id;
                    var1['questId'] = var2;
                    var2 = _closure2_slot5;
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
                    var7 = _closure2_slot7;
                    var1['questContentPosition'] = var7;
                    var7 = _closure2_slot11;
                    var1['sourceQuestContent'] = var7;
                    var1 = var6.bind(var2)(var1);
                    var1 = 5;
                    var1 = var5[var1];
                    var3 = var3.bind(var2)(var1);
                    var2 = var3.handleClick;
                    var1 = {};
                    var5 = _closure2_slot10;
                    var1['href'] = var5;
                    var5 = function onConfirm() {
                        var6 = _closure2_slot12;
                        var4 = {};
                        var1 = _closure2_slot4;
                        var1 = var1.id;
                        var4['questId'] = var1;
                        var1 = _closure2_slot5;
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
                        var7 = _closure2_slot7;
                        var4['questContentPosition'] = var7;
                        var7 = _closure2_slot11;
                        var4['sourceQuestContent'] = var7;
                        var4 = var6.bind(var1)(var4);
                        var4 = _closure1_slot1;
                        var3 = 6;
                        var3 = var5[var3];
                        var3 = var4.bind(var1)(var3);
                        var2 = _closure2_slot10;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1['onConfirm'] = var5;
                    var1 = var2.bind(var3)(var1);
 188:
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    _fun0005_ip = 433; continue _fun0005;
 203:
                    var1 = _closure2_slot4;
                    var5 = var1.userStatus;
                    var2 = null;
                    var6 = var2 == var5;
                    var3 = undefined;
                    var1 = undefined;
                    if(var6) { _fun0005_ip = 232; continue _fun0005 }
 226:
                    var1 = var5.claimedAt;
 232:
                    if(!(var2 == var1)) { _fun0005_ip = 330; continue _fun0005 }
 236:
                    var1 = _closure2_slot9;
                    if(!(var2 != var1)) { _fun0005_ip = 433; continue _fun0005 }
 247:
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
                    _fun0005_ip = 433; continue _fun0005;
 330:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot4;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    _fun0005_ip = 433; continue _fun0005;
 350:
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
 433:
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