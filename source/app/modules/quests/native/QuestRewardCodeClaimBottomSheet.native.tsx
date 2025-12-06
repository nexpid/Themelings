// app/modules/quests/native/QuestRewardCodeClaimBottomSheet.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function getPlatformIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = 6;
            var2 = var2[var6];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var2 = var2.QuestRewardCodePlatforms;
            var2 = var2.CROSS_PLATFORM;
            if(!(var2 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var5.bind(var4)(var2);
            var2 = var2.QuestRewardCodePlatforms;
            var2 = var2.PC;
            if(!(var2 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var5.bind(var4)(var2);
            var2 = var2.QuestRewardCodePlatforms;
            var2 = var2.PLAYSTATION;
            if(!(var2 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var5.bind(var4)(var2);
            var2 = var2.QuestRewardCodePlatforms;
            var2 = var2.SWITCH;
            if(!(var2 !== var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var5.bind(var4)(var2);
            var2 = var2.QuestRewardCodePlatforms;
            var2 = var2.XBOX;
            if(!(var2 !== var3)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = null;
            return var2;
case 10:
            var5 = _closure1_slot9;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 11;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.XboxNeutralIcon;
            var2 = {};
            var2 = var5.bind(var4)(var3, var2);
            return var2;
case 8:
            var5 = _closure1_slot9;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 10;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.NintendoSwitchNeutralIcon;
            var2 = {};
            var2 = var5.bind(var4)(var3, var2);
            return var2;
case 6:
            var5 = _closure1_slot9;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 9;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.PlaystationNeutralIcon;
            var2 = {};
            var2 = var5.bind(var4)(var3, var2);
            return var2;
case 4:
            var5 = _closure1_slot9;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 8;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.ScreenIcon;
            var2 = {};
            var2 = var5.bind(var4)(var3, var2);
            return var2;
case 2:
            var3 = _closure1_slot9;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 7;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.ScienceIcon;
            var1 = {};
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function QuestRewardCodeClaimBottomSheet(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var29 = var1.quest;
            var _closure2_slot0 = var29;
            var9 = var1.questContent;
            var8 = var1.questContentPosition;
            var7 = var1.sourceQuestContent;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 14;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var2 = var1.bottom;
            var1 = _closure1_slot12;
            var12 = var1.bind(var4)(var2);
            var1 = var29.config;
            var1 = var1.rewardsConfig;
            var35 = var1.platforms;
            var5 = _closure1_slot4;
            var3 = var5.useState;
            var1 = var35.length;
            var2 = 1;
            var6 = var1 > var2;
            var15 = null;
            var1 = null;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var6 = 0;
            var1 = var35[var6];
case 12:
            var5 = var3.bind(var5)(var1);
            var3 = _closure1_slot3;
            var1 = 2;
            var1 = var3.bind(var4)(var5, var1);
            var3 = 0;
            var34 = var1[var3];
            var37 = var1[var2];
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 15;
            var1 = var5[var1];
            var6 = var3.bind(var4)(var1);
            var5 = var6.useStateFromStoresObject;
            var1 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var1 = {};
                var6 = _closure1_slot7;
                var5 = var6.getRewardCode;
                var2 = _closure2_slot0;
                var4 = var2.id;
                var4 = var5.bind(var6)(var4);
                var1['rewardCode'] = var4;
                var6 = _closure1_slot7;
                var5 = var6.isFetchingRewardCode;
                var4 = var2.id;
                var4 = var5.bind(var6)(var4);
                var1['isFetchingRewardCode'] = var4;
                var4 = _closure1_slot7;
                var3 = var4.isClaimingReward;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                var1['isClaimingReward'] = var2;
                return var1;
            };
            var1 = var5.bind(var6)(var3, var1);
            var27 = var1.rewardCode;
            _closure2_slot1 = var27;
            var22 = var1.isFetchingRewardCode;
            var26 = var1.isClaimingReward;
            var1 = var35.length;
            var18 = var1 > var2;
            if(!var18) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var2 = var29.userStatus;
            var3 = var15 == var2;
            var1 = undefined;
            if(var3) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var1 = var2.claimedAt;
case 16:
            var18 = var15 == var1;
case 14:
            if(!var18) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var18 = var15 == var27;
case 18:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 16;
            var5 = var1[var3];
            var10 = var2.bind(var4)(var5);
            var6 = var10.useClaimOrFetchRewardCode;
            var5 = {};
            var5['isClaimingReward'] = var26;
            var5['isFetchingRewardCode'] = var22;
            var5['quest'] = var29;
            var5['questContent'] = var9;
            var5['requiresPlatformSelection'] = var18;
            var5['rewardCode'] = var27;
            var5['selectedPlatformType'] = var34;
            var5 = var6.bind(var10)(var5);
            var13 = var5.claimCode;
            var11 = var5.fetchCode;
            var10 = var5.hasError;
            _closure2_slot2 = var10;
            var17 = _closure1_slot4;
            var14 = var17.useEffect;
            var6 = new Array(1);
            var6[0] = var10;
            var5 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot2;
                    if(!var1) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 17;
                    var1 = var4[var1];
                    var2 = undefined;
                    var6 = var3.bind(var2)(var1);
                    var5 = var6.open;
                    var1 = {};
                    var8 = 'CLAIM_QUEST_REWARD_ERROR';
                    var1['key'] = var8;
                    var10 = _closure1_slot0;
                    var7 = 18;
                    var8 = var4[var7];
                    var8 = var10.bind(var2)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var7 = var4[var7];
                    var7 = var10.bind(var2)(var7);
                    var7 = var7.t;
                    var7 = var7.CKsXk3;
                    var7 = var8.bind(var9)(var7);
                    var1['content'] = var7;
                    var7 = 19;
                    var7 = var4[var7];
                    var7 = var3.bind(var2)(var7);
                    var1['icon'] = var7;
                    var1 = var5.bind(var6)(var1);
                    var1 = 20;
                    var1 = var4[var1];
                    var2 = var3.bind(var2)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
case 20:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var14.bind(var17)(var5, var6);
            var36 = 21;
            var1 = var1[var36];
            var5 = var2.bind(var4)(var1);
            var2 = var5.isTieredRewardCodeQuest;
            var1 = {};
            var1['quest'] = var29;
            var1 = var2.bind(var5)(var1);
            _closure2_slot3 = var1;
            var6 = _closure1_slot4;
            var5 = var6.useMemo;
            var2 = new Array(3);
            var2[0] = var1;
            var2[1] = var29;
            var14 = var15 == var27;
            var1 = undefined;
            if(var14) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var1 = var27.tier;
case 22:
            var2[2] = var1;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 21;
                    var2 = var4[var2];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.getRewardCodeQuestReward;
                    var2 = {};
                    var7 = _closure2_slot0;
                    var2['quest'] = var7;
                    if(var1) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                    var1 = 0;
                    var2['idx'] = var1;
                    var1 = var3.bind(var4)(var2);
                    _fun0004_ip = 26; continue _fun0004;
case 24:
                    var8 = _closure2_slot1;
                    var7 = null;
                    var7 = var7 == var8;
                    var5 = undefined;
                    if(var7) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                    var6 = _closure2_slot1;
                    var5 = var6.tier;
case 27:
                    var2['idx'] = var5;
                    var1 = var3.bind(var4)(var2);
case 26:
                    return var1;
                }
            };
            var1 = var5.bind(var6)(var1, var2);
            _closure2_slot4 = var1;
            var6 = _closure1_slot4;
            var5 = var6.useMemo;
            var2 = new Array(2);
            var2[0] = var1;
            var2[1] = var27;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot4;
                    var4 = null;
                    var3 = var4 == var1;
                    var7 = undefined;
                    var1 = undefined;
                    if(var3) { _fun0005_ip = 29; continue _fun0005 }
case 30:
                    var3 = _closure2_slot4;
                    var1 = var3.redemptionLink;
case 29:
                    if(!(var4 != var1)) { _fun0005_ip = 25; continue _fun0005 }
case 31:
                    var1 = _closure2_slot4;
                    var1 = var1.redemptionLink;
                    var3 = '';
                    if(!(var3 === var1)) { _fun0005_ip = 32; continue _fun0005 }
case 25:
                    return var7;
case 32:
                    var1 = _closure2_slot1;
                    var5 = var4 == var1;
                    var1 = undefined;
                    if(var5) { _fun0005_ip = 33; continue _fun0005 }
case 34:
                    var5 = _closure2_slot1;
                    var1 = var5.code;
case 33:
                    if(!(var4 != var1)) { _fun0005_ip = 35; continue _fun0005 }
case 36:
                    var1 = _closure2_slot1;
                    var1 = var1.code;
                    if(!(var3 !== var1)) { _fun0005_ip = 35; continue _fun0005 }
case 37:
                    var1 = _closure2_slot4;
                    var5 = var1.redemptionLink;
                    var4 = var5.replace;
                    var3 = _closure1_slot8;
                    var1 = global;
                    var6 = var1.encodeURIComponent;
                    var1 = _closure2_slot1;
                    var1 = var1.code;
                    var1 = var6.bind(var7)(var1);
                    var1 = var4.bind(var5)(var3, var1);
                    _fun0005_ip = 38; continue _fun0005;
case 35:
                    var2 = _closure2_slot4;
                    var1 = var2.redemptionLink;
case 38:
                    return var1;
                }
            };
            var17 = var5.bind(var6)(var1, var2);
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = var1[var3];
            var6 = var2.bind(var4)(var3);
            var5 = var6.useClaimRewardCodePrimaryCtaClickHandler;
            var3 = {};
            var3['claimCode'] = var13;
            var3['fetchCode'] = var11;
            var3['hasError'] = var10;
            var11 = _closure1_slot1;
            var10 = 20;
            var10 = var1[var10];
            var10 = var11.bind(var4)(var10);
            var10 = var10.hideActionSheet;
            var3['onDismiss'] = var10;
            var3['quest'] = var29;
            var3['questContent'] = var9;
            var3['questContentPosition'] = var8;
            var3['requiresPlatformSelection'] = var18;
            var3['selectedPlatformType'] = var34;
            var3['redemptionLink'] = var17;
            var3['sourceQuestContent'] = var7;
            var21 = var5.bind(var6)(var3);
            var7 = _closure1_slot4;
            var6 = var7.useCallback;
            var5 = new Array(1);
            var5[0] = var27;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 39; continue _fun0006 }
case 21:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 22;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.copy;
                    var1 = _closure2_slot1;
                    var2 = var1.code;
                    var1 = function() {
                        var2 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var1 = 17;
                        var1 = var9[var1];
                        var8 = undefined;
                        var3 = var2.bind(var8)(var1);
                        var2 = var3.open;
                        var1 = {};
                        var5 = 'TOAST_QUEST_REWARD_CODE_COPIED';
                        var1['key'] = var5;
                        var7 = _closure1_slot0;
                        var4 = 18;
                        var5 = var9[var4];
                        var5 = var7.bind(var8)(var5);
                        var6 = var5.intl;
                        var5 = var6.string;
                        var4 = var9[var4];
                        var4 = var7.bind(var8)(var4);
                        var4 = var4.t;
                        var4 = var4.MSaeTe;
                        var4 = var5.bind(var6)(var4);
                        var1['content'] = var4;
                        var4 = function icon() {
                            var4 = _closure1_slot9;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 23;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.CopyIcon;
                            var1 = {};
                            var1 = var4.bind(var3)(var2, var1);
                            return var1;
                        };
                        var1['icon'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2, var1);
case 39:
                    var1 = undefined;
                    return var1;
                }
            };
            var42 = var6.bind(var7)(var3, var5);
            var30 = 24;
            var1 = var1[var30];
            var3 = var2.bind(var4)(var1);
            var2 = var3.getRewardCodeRedemptionInstructions;
            var1 = {};
            var1['quest'] = var29;
            var1['rewardCode'] = var27;
            var1['selectedPlatformType'] = var34;
            var31 = var2.bind(var3)(var1);
            if(var22) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var22 = var26;
case 40:
            if(var22) { _fun0002_ip = 42; continue _fun0002 }
case 43:
            var1 = var18;
            if(!var1) { _fun0002_ip = 44; continue _fun0002 }
case 45:
            var1 = var15 == var34;
case 44:
            if(!var1) { _fun0002_ip = 46; continue _fun0002 }
case 47:
            var1 = var15 == var27;
case 46:
            var22 = var1;
case 42:
            if(var22) { _fun0002_ip = 48; continue _fun0002 }
case 49:
            var1 = !var18;
            if(var18) { _fun0002_ip = 50; continue _fun0002 }
case 51:
            var3 = var15 == var27;
            var2 = undefined;
            if(var3) { _fun0002_ip = 52; continue _fun0002 }
case 53:
            var2 = var27.code;
case 52:
            var1 = var15 == var2;
case 50:
            var22 = var1;
case 48:
            var3 = _closure1_slot9;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 25;
            var1 = var8[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {};
            var7 = _closure1_slot9;
            var5 = 26;
            var5 = var8[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.BottomSheetTitleHeader;
            var5 = {};
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var20 = 18;
            var10 = var8[var20];
            var10 = var9.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var8 = var8[var20];
            var8 = var9.bind(var4)(var8);
            var9 = var8.t;
            if(var18) { _fun0002_ip = 54; continue _fun0002 }
case 55:
            var8 = var9.srzsU2;
            var8 = var10.bind(var11)(var8);
            _fun0002_ip = 56; continue _fun0002;
case 54:
            var9 = var9.JRU8dq;
            var8 = var10.bind(var11)(var9);
case 56:
            var5['title'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['header'] = var5;
            var19 = true;
            var1['startExpanded'] = var19;
            var7 = _closure1_slot10;
            var6 = _closure1_slot6;
            var5 = {};
            var8 = var12.wrapper;
            var5['style'] = var8;
            var11 = _closure1_slot10;
            if(var18) { _fun0002_ip = 57; continue _fun0002 }
case 58:
            var9 = _closure1_slot6;
            var8 = {};
            var13 = var15 != var27;
            if(!var13) { _fun0002_ip = 59; continue _fun0002 }
case 60:
            var13 = var15 != var31;
case 59:
            if(!var13) { _fun0002_ip = 61; continue _fun0002 }
case 62:
            var23 = _closure1_slot9;
            var14 = _closure1_slot0;
            var28 = _closure1_slot2;
            var10 = 27;
            var10 = var28[var10];
            var10 = var14.bind(var4)(var10);
            var14 = var10.Text;
            var10 = {'style': null, 'variant': 'text-md/normal', 'color': 'text-default'};
            var24 = var12.redemptionInstructions;
            var10['style'] = var24;
            var25 = _closure1_slot1;
            var24 = 30;
            var24 = var28[var24];
            var28 = var25.bind(var4)(var24);
            var25 = var28.parse;
            var24 = {};
            var24['allowLinks'] = var19;
            var24 = var25.bind(var28)(var31, var19, var24);
            var10['children'] = var24;
            var13 = var23.bind(var4)(var14, var10);
case 61:
            var10 = new Array(2);
            var10[0] = var13;
            var23 = _closure1_slot10;
            var14 = _closure1_slot6;
            var13 = {};
            var25 = _closure1_slot9;
            var24 = {};
            var31 = var15 == var27;
            var28 = undefined;
            if(var31) { _fun0002_ip = 63; continue _fun0002 }
case 64:
            var28 = var27.code;
case 63:
            var28 = var15 == var28;
            if(!var28) { _fun0002_ip = 65; continue _fun0002 }
case 66:
            var28 = var12.codeCopyWrapperLoading;
case 65:
            var24['style'] = var28;
            var32 = _closure1_slot9;
            var39 = _closure1_slot0;
            var38 = _closure1_slot2;
            var28 = 31;
            var28 = var38[var28];
            var28 = var39.bind(var4)(var28);
            var31 = var28.TableRowGroup;
            var28 = {};
            var40 = _closure1_slot9;
            var43 = 32;
            var38 = var38[var43];
            var38 = var39.bind(var4)(var38);
            var39 = var38.TableRow;
            var38 = {};
            var44 = var15 == var27;
            var41 = undefined;
            if(var44) { _fun0002_ip = 67; continue _fun0002 }
case 68:
            var41 = var27.code;
case 67:
            var38['label'] = var41;
            var44 = var15 == var27;
            var41 = undefined;
            if(var44) { _fun0002_ip = 69; continue _fun0002 }
case 70:
            var41 = var27.code;
case 69:
            var41 = var15 != var41;
            if(!var41) { _fun0002_ip = 71; continue _fun0002 }
case 72:
            var45 = _closure1_slot9;
            var47 = _closure1_slot0;
            var48 = _closure1_slot2;
            var43 = var48[var43];
            var43 = var47.bind(var4)(var43);
            var43 = var43.TableRow;
            var44 = var43.Icon;
            var43 = {};
            var46 = 23;
            var46 = var48[var46];
            var46 = var47.bind(var4)(var46);
            var46 = var46.CopyIcon;
            var43['IconComponent'] = var46;
            var41 = var45.bind(var4)(var44, var43);
case 71:
            var38['trailing'] = var41;
            var43 = var15 == var27;
            var41 = undefined;
            if(var43) { _fun0002_ip = 73; continue _fun0002 }
case 74:
            var41 = var27.code;
case 73:
            var43 = var15 != var41;
            var41 = undefined;
            if(!var43) { _fun0002_ip = 75; continue _fun0002 }
case 76:
            var41 = var42;
case 75:
            var38['onPress'] = var41;
            var38 = var40.bind(var4)(var39, var38);
            var28['children'] = var38;
            var28 = var32.bind(var4)(var31, var28);
            var24['children'] = var28;
            var25 = var25.bind(var4)(var14, var24);
            var24 = new Array(2);
            var24[0] = var25;
            var28 = var15 == var27;
            var25 = undefined;
            if(var28) { _fun0002_ip = 77; continue _fun0002 }
case 78:
            var25 = var27.code;
case 77:
            var25 = var15 == var25;
            if(!var25) { _fun0002_ip = 79; continue _fun0002 }
case 80:
            var31 = _closure1_slot9;
            var28 = _closure1_slot5;
            var27 = {};
            var32 = var12.claimingIndicator;
            var27['style'] = var32;
            var27['size'] = var30;
            var25 = var31.bind(var4)(var28, var27);
case 79:
            var24[1] = var25;
            var13['children'] = var24;
            var13 = var23.bind(var4)(var14, var13);
            var10[1] = var13;
            var8['children'] = var10;
            var9 = var11.bind(var4)(var9, var8);
            _fun0002_ip = 81; continue _fun0002;
case 57:
            var10 = _closure1_slot11;
            var8 = {};
            var23 = _closure1_slot9;
            var32 = _closure1_slot0;
            var31 = _closure1_slot2;
            var13 = 27;
            var13 = var31[var13];
            var13 = var32.bind(var4)(var13);
            var14 = var13.Text;
            var13 = {};
            var24 = 'text-md/normal';
            var13['variant'] = var24;
            var24 = var31[var20];
            var24 = var32.bind(var4)(var24);
            var28 = var24.intl;
            var27 = var28.format;
            var24 = var31[var20];
            var24 = var32.bind(var4)(var24);
            var24 = var24.t;
            var25 = var24.ZUA/Ui;
            var24 = {};
            var31 = var31[var36];
            var32 = var32.bind(var4)(var31);
            var31 = var32.getDefaultRewardName;
            var29 = var29.config;
            var29 = var31.bind(var32)(var29);
            var24['rewardName'] = var29;
            var24 = var27.bind(var28)(var25, var24);
            var13['children'] = var24;
            var14 = var23.bind(var4)(var14, var13);
            var13 = new Array(2);
            var13[0] = var14;
            var24 = _closure1_slot10;
            var23 = _closure1_slot6;
            var14 = {};
            var25 = var12.platformSelectWrapper;
            var14['style'] = var25;
            var28 = _closure1_slot9;
            var27 = _closure1_slot6;
            var25 = {};
            var29 = var26;
            if(!var26) { _fun0002_ip = 82; continue _fun0002 }
case 83:
            var29 = var12.platformSelectClaiming;
case 82:
            var25['style'] = var29;
            var32 = _closure1_slot9;
            var39 = _closure1_slot0;
            var36 = _closure1_slot2;
            var29 = 28;
            var29 = var36[var29];
            var29 = var39.bind(var4)(var29);
            var31 = var29.TableRadioGroup;
            var29 = {};
            var29['onChange'] = var37;
            var37 = var36[var20];
            var37 = var39.bind(var4)(var37);
            var38 = var37.intl;
            var37 = var38.string;
            var36 = var36[var20];
            var36 = var39.bind(var4)(var36);
            var36 = var36.t;
            var36 = var36.vVcTtJ;
            var36 = var37.bind(var38)(var36);
            var29['title'] = var36;
            var29['defaultValue'] = var34;
            var29['hasIcons'] = var19;
            var34 = var35.map;
            var33 = function(arg1) {
                var5 = arg1;
                var4 = _closure1_slot9;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 29;
                var1 = var8[var1];
                var3 = undefined;
                var1 = var7.bind(var3)(var1);
                var2 = var1.TableRadioRow;
                var1 = {};
                var6 = _closure1_slot13;
                var6 = var6.bind(var3)(var5);
                var1['icon'] = var6;
                var6 = 21;
                var6 = var8[var6];
                var7 = var7.bind(var3)(var6);
                var6 = var7.getPlatformString;
                var6 = var6.bind(var7)(var5);
                var1['label'] = var6;
                var1['value'] = var5;
                var1 = var4.bind(var3)(var2, var1, var5);
                return var1;
            };
            var33 = var34.bind(var35)(var33);
            var29['children'] = var33;
            var29 = var32.bind(var4)(var31, var29);
            var25['children'] = var29;
            var27 = var28.bind(var4)(var27, var25);
            var25 = new Array(2);
            var25[0] = var27;
            if(!var26) { _fun0002_ip = 84; continue _fun0002 }
case 85:
            var29 = _closure1_slot9;
            var28 = _closure1_slot5;
            var27 = {};
            var31 = var12.claimingIndicator;
            var27['style'] = var31;
            var27['size'] = var30;
            var26 = var29.bind(var4)(var28, var27);
case 84:
            var25[1] = var26;
            var14['children'] = var25;
            var14 = var24.bind(var4)(var23, var14);
            var13[1] = var14;
            var8['children'] = var13;
            var9 = var11.bind(var4)(var10, var8);
case 81:
            var8 = new Array(2);
            var8[0] = var9;
            var11 = _closure1_slot9;
            var10 = _closure1_slot6;
            var9 = {};
            var12 = var12.footer;
            var9['style'] = var12;
            var14 = _closure1_slot9;
            var13 = _closure1_slot0;
            var23 = _closure1_slot2;
            var12 = 33;
            var12 = var23[var12];
            var12 = var13.bind(var4)(var12);
            var13 = var12.Button;
            var12 = {};
            var12['disabled'] = var22;
            var12['onPress'] = var21;
            var12['grow'] = var19;
            if(var18) { _fun0002_ip = 86; continue _fun0002 }
case 87:
            if(!(var15 != var17)) { _fun0002_ip = 88; continue _fun0002 }
case 89:
            var15 = '';
            if(!(var15 === var17)) { _fun0002_ip = 90; continue _fun0002 }
case 88:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var20];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var15[var20];
            var15 = var19.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.23SS+z;
            var15 = var17.bind(var18)(var15);
            _fun0002_ip = 91; continue _fun0002;
case 90:
            var21 = _closure1_slot0;
            var17 = _closure1_slot2;
            var18 = var17[var20];
            var18 = var21.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var17[var20];
            var17 = var21.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.+zx47d;
            var15 = var18.bind(var19)(var17);
case 91:
            _fun0002_ip = 92; continue _fun0002;
case 86:
            var19 = _closure1_slot0;
            var16 = _closure1_slot2;
            var17 = var16[var20];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var16[var20];
            var16 = var19.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.SLZMi1;
            var15 = var17.bind(var18)(var16);
case 92:
            var12['text'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
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
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ActivityIndicator;
    var _closure1_slot5 = var8;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.REWARD_CODE_PLACEHOLDER;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var7 = var4.jsxs;
    var _closure1_slot10 = var7;
    var4 = var4.Fragment;
    var _closure1_slot11 = var4;
    var4 = 12;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        var1 = {};
        var2 = {};
        var3 = 'flex';
        var2['display'] = var3;
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 13;
        var7 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_16;
        var2['paddingHorizontal'] = var7;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.spacing;
        var3 = var3.PX_24;
        var2['gap'] = var3;
        var1['wrapper'] = var2;
        var2 = {};
        var3 = arg1;
        var2['paddingBottom'] = var3;
        var1['footer'] = var2;
        var2 = {};
        var3 = 0.8;
        var2['opacity'] = var3;
        var1['platformSelectClaiming'] = var2;
        var2 = {};
        var3 = 'relative';
        var2['position'] = var3;
        var1['platformSelectWrapper'] = var2;
        var2 = {'position': 'absolute', 'left': '50%', 'top': '50%', 'marginLeft': 4294967284, 'marginTop': 4294967284};
        var1['claimingIndicator'] = var2;
        var2 = {};
        var3 = 0.5;
        var2['opacity'] = var3;
        var1['codeCopyWrapperLoading'] = var2;
        var2 = {};
        var3 = 24;
        var2['marginBottom'] = var3;
        var1['redemptionInstructions'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 35;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestRewardCodeClaimBottomSheet.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function QuestRewardCodeClaimBottomSheetConnected(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var2 = var1.questId;
            var _closure2_slot0 = var2;
            var10 = var1.questContent;
            var _closure2_slot1 = var10;
            var9 = var1.questContentPosition;
            var _closure2_slot2 = var9;
            var8 = var1.sourceQuestContent;
            var _closure2_slot3 = var8;
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 15;
            var1 = var4[var1];
            var5 = undefined;
            var6 = var2.bind(var5)(var1);
            var4 = var6.useStateFromStores;
            var1 = _closure1_slot7;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getQuest;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var4.bind(var6)(var2, var1);
            var _closure2_slot4 = var11;
            var2 = null;
            if(!(var2 != var11)) { _fun0007_ip = 93; continue _fun0007 }
case 94:
            var6 = _closure1_slot9;
            var4 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 34;
            var1 = var12[var1];
            var1 = var4.bind(var5)(var1);
            var4 = var1.QuestContentImpressionTrackerNative;
            var1 = {};
            var12 = true;
            var1['overrideVisibility'] = var12;
            var1['questOrQuests'] = var11;
            var1['questContent'] = var10;
            var1['questContentPosition'] = var9;
            var1['sourceQuestContent'] = var8;
            var7 = function children() {
                var4 = _closure1_slot9;
                var3 = _closure1_slot14;
                var2 = {};
                var5 = _closure2_slot4;
                var2['quest'] = var5;
                var5 = _closure2_slot1;
                var2['questContent'] = var5;
                var5 = _closure2_slot2;
                var2['questContentPosition'] = var5;
                var1 = _closure2_slot3;
                var2['sourceQuestContent'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var1['children'] = var7;
            var1 = var6.bind(var5)(var4, var1);
            _fun0007_ip = 95; continue _fun0007;
case 93:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 20;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.hideActionSheet;
            var3 = var3.bind(var4)();
            var1 = null;
case 95:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();