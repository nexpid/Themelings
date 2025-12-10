// app/modules/quests/native/QuestRewardCodeClaimBottomSheet.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function QuestRewardCodeClaimBottomSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var6 = var1.quest;
            var _closure2_slot0 = var6;
            var13 = var1.questContent;
            var11 = var1.questContentPosition;
            var10 = var1.sourceQuestContent;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 7;
            var1 = var8[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var3 = var1.bottom;
            var1 = _closure1_slot10;
            var12 = var1.bind(var4)(var3);
            var5 = _closure1_slot0;
            var1 = 8;
            var1 = var8[var1];
            var9 = var5.bind(var4)(var1);
            var7 = var9.useStateFromStoresObject;
            var1 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var1 = {};
                var6 = _closure1_slot6;
                var5 = var6.getRewardCode;
                var2 = _closure2_slot0;
                var4 = var2.id;
                var4 = var5.bind(var6)(var4);
                var1['rewardCode'] = var4;
                var6 = _closure1_slot6;
                var5 = var6.isFetchingRewardCode;
                var4 = var2.id;
                var4 = var5.bind(var6)(var4);
                var1['isFetchingRewardCode'] = var4;
                var4 = _closure1_slot6;
                var3 = var4.isClaimingReward;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                var1['isClaimingReward'] = var2;
                return var1;
            };
            var1 = var7.bind(var9)(var3, var1);
            var25 = var1.rewardCode;
            var _closure2_slot1 = var25;
            var21 = var1.isFetchingRewardCode;
            var1 = var1.isClaimingReward;
            var7 = 9;
            var3 = var8[var7];
            var14 = var5.bind(var4)(var3);
            var9 = var14.useClaimOrFetchRewardCode;
            var3 = {};
            var3['isClaimingReward'] = var1;
            var3['isFetchingRewardCode'] = var21;
            var3['quest'] = var6;
            var3['questContent'] = var13;
            var3['rewardCode'] = var25;
            var3 = var9.bind(var14)(var3);
            var19 = var3.claimCode;
            var18 = var3.fetchCode;
            var14 = var3.hasError;
            var _closure2_slot2 = var14;
            var17 = _closure1_slot3;
            var15 = var17.useEffect;
            var9 = new Array(1);
            var9[0] = var14;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot2;
                    if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 10;
                    var1 = var4[var1];
                    var2 = undefined;
                    var6 = var3.bind(var2)(var1);
                    var5 = var6.open;
                    var1 = {};
                    var8 = 'CLAIM_QUEST_REWARD_ERROR';
                    var1['key'] = var8;
                    var10 = _closure1_slot0;
                    var7 = 11;
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
                    var7 = 12;
                    var7 = var4[var7];
                    var7 = var3.bind(var2)(var7);
                    var1['icon'] = var7;
                    var1 = var5.bind(var6)(var1);
                    var1 = 13;
                    var1 = var4[var1];
                    var2 = var3.bind(var2)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var15.bind(var17)(var3, var9);
            var3 = 14;
            var3 = var8[var3];
            var8 = var5.bind(var4)(var3);
            var5 = var8.isTieredRewardCodeQuest;
            var3 = {};
            var3['quest'] = var6;
            var3 = var5.bind(var8)(var3);
            var _closure2_slot3 = var3;
            var9 = _closure1_slot3;
            var8 = var9.useMemo;
            var5 = new Array(3);
            var5[0] = var3;
            var5[1] = var6;
            var15 = null;
            var17 = var15 == var25;
            var3 = undefined;
            if(var17) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var25.tier;
case 4:
            var5[2] = var3;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 14;
                    var2 = var4[var2];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.getRewardCodeQuestReward;
                    var2 = {};
                    var7 = _closure2_slot0;
                    var2['quest'] = var7;
                    if(var1) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var1 = 0;
                    var2['idx'] = var1;
                    var1 = var3.bind(var4)(var2);
                    _fun0003_ip = 8; continue _fun0003;
case 6:
                    var8 = _closure2_slot1;
                    var7 = null;
                    var7 = var7 == var8;
                    var5 = undefined;
                    if(var7) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var6 = _closure2_slot1;
                    var5 = var6.tier;
case 9:
                    var2['idx'] = var5;
                    var1 = var3.bind(var4)(var2);
case 8:
                    return var1;
                }
            };
            var3 = var8.bind(var9)(var3, var5);
            _closure2_slot4 = var3;
            var9 = _closure1_slot3;
            var8 = var9.useMemo;
            var5 = new Array(2);
            var5[0] = var3;
            var5[1] = var25;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot4;
                    var4 = null;
                    var3 = var4 == var1;
                    var7 = undefined;
                    var1 = undefined;
                    if(var3) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                    var3 = _closure2_slot4;
                    var1 = var3.redemptionLink;
case 11:
                    if(!(var4 != var1)) { _fun0004_ip = 7; continue _fun0004 }
case 13:
                    var1 = _closure2_slot4;
                    var1 = var1.redemptionLink;
                    var3 = '';
                    if(!(var3 === var1)) { _fun0004_ip = 14; continue _fun0004 }
case 7:
                    return var7;
case 14:
                    var1 = _closure2_slot1;
                    var5 = var4 == var1;
                    var1 = undefined;
                    if(var5) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var5 = _closure2_slot1;
                    var1 = var5.code;
case 15:
                    if(!(var4 != var1)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var1 = _closure2_slot1;
                    var1 = var1.code;
                    if(!(var3 !== var1)) { _fun0004_ip = 17; continue _fun0004 }
case 19:
                    var1 = _closure2_slot4;
                    var5 = var1.redemptionLink;
                    var4 = var5.replace;
                    var3 = _closure1_slot7;
                    var1 = global;
                    var6 = var1.encodeURIComponent;
                    var1 = _closure2_slot1;
                    var1 = var1.code;
                    var1 = var6.bind(var7)(var1);
                    var1 = var4.bind(var5)(var3, var1);
                    _fun0004_ip = 20; continue _fun0004;
case 17:
                    var2 = _closure2_slot4;
                    var1 = var2.redemptionLink;
case 20:
                    return var1;
                }
            };
            var17 = var8.bind(var9)(var3, var5);
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var7 = var5[var7];
            var9 = var3.bind(var4)(var7);
            var8 = var9.useClaimRewardCodePrimaryCtaClickHandler;
            var7 = {};
            var7['claimCode'] = var19;
            var7['fetchCode'] = var18;
            var7['hasError'] = var14;
            var18 = _closure1_slot1;
            var14 = 13;
            var14 = var5[var14];
            var14 = var18.bind(var4)(var14);
            var14 = var14.hideActionSheet;
            var7['onDismiss'] = var14;
            var7['quest'] = var6;
            var7['questContent'] = var13;
            var7['questContentPosition'] = var11;
            var7['redemptionLink'] = var17;
            var7['sourceQuestContent'] = var10;
            var19 = var8.bind(var9)(var7);
            var9 = _closure1_slot3;
            var8 = var9.useCallback;
            var7 = new Array(1);
            var7[0] = var25;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 21; continue _fun0005 }
case 3:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 15;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.copy;
                    var1 = _closure2_slot1;
                    var2 = var1.code;
                    var1 = function() {
                        var2 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var1 = 10;
                        var1 = var9[var1];
                        var8 = undefined;
                        var3 = var2.bind(var8)(var1);
                        var2 = var3.open;
                        var1 = {};
                        var5 = 'TOAST_QUEST_REWARD_CODE_COPIED';
                        var1['key'] = var5;
                        var7 = _closure1_slot0;
                        var4 = 11;
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
                            var4 = _closure1_slot8;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 16;
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
case 21:
                    var1 = undefined;
                    return var1;
                }
            };
            var33 = var8.bind(var9)(var2, var7);
            var2 = 17;
            var2 = var5[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.getRewardCodeRedemptionInstructions;
            var2 = {};
            var2['quest'] = var6;
            var2['rewardCode'] = var25;
            var27 = var3.bind(var5)(var2);
            if(var21) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var21 = var1;
case 22:
            if(var21) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var2 = var15 == var25;
            var1 = undefined;
            if(var2) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var1 = var25.code;
case 26:
            var21 = var15 == var1;
case 24:
            var3 = _closure1_slot8;
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 18;
            var1 = var8[var1];
            var1 = var11.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {};
            var7 = _closure1_slot8;
            var5 = 19;
            var5 = var8[var5];
            var5 = var11.bind(var4)(var5);
            var6 = var5.BottomSheetTitleHeader;
            var5 = {};
            var20 = 11;
            var9 = var8[var20];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var8[var20];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.srzsU2;
            var8 = var9.bind(var10)(var8);
            var5['title'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['header'] = var5;
            var18 = true;
            var1['startExpanded'] = var18;
            var7 = _closure1_slot9;
            var6 = _closure1_slot5;
            var5 = {};
            var8 = var12.wrapper;
            var5['style'] = var8;
            var10 = _closure1_slot9;
            var9 = _closure1_slot5;
            var8 = {};
            var13 = var15 != var25;
            if(!var13) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var13 = var15 != var27;
case 28:
            if(!var13) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var22 = _closure1_slot8;
            var14 = _closure1_slot0;
            var26 = _closure1_slot2;
            var11 = 20;
            var11 = var26[var11];
            var11 = var14.bind(var4)(var11);
            var14 = var11.Text;
            var11 = {'style': null, 'variant': 'text-md/normal', 'color': 'text-default'};
            var23 = var12.redemptionInstructions;
            var11['style'] = var23;
            var24 = _closure1_slot1;
            var23 = 21;
            var23 = var26[var23];
            var26 = var24.bind(var4)(var23);
            var24 = var26.parse;
            var23 = {};
            var23['allowLinks'] = var18;
            var23 = var24.bind(var26)(var27, var18, var23);
            var11['children'] = var23;
            var13 = var22.bind(var4)(var14, var11);
case 30:
            var11 = new Array(2);
            var11[0] = var13;
            var22 = _closure1_slot9;
            var14 = _closure1_slot5;
            var13 = {};
            var24 = _closure1_slot8;
            var23 = {};
            var27 = var15 == var25;
            var26 = undefined;
            if(var27) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var26 = var25.code;
case 32:
            var26 = var15 == var26;
            if(!var26) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var26 = var12.codeCopyWrapperLoading;
case 34:
            var23['style'] = var26;
            var28 = _closure1_slot8;
            var30 = _closure1_slot0;
            var29 = _closure1_slot2;
            var26 = 22;
            var26 = var29[var26];
            var26 = var30.bind(var4)(var26);
            var27 = var26.TableRowGroup;
            var26 = {};
            var31 = _closure1_slot8;
            var34 = 23;
            var29 = var29[var34];
            var29 = var30.bind(var4)(var29);
            var30 = var29.TableRow;
            var29 = {};
            var35 = var15 == var25;
            var32 = undefined;
            if(var35) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var32 = var25.code;
case 36:
            var29['label'] = var32;
            var35 = var15 == var25;
            var32 = undefined;
            if(var35) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var32 = var25.code;
case 38:
            var32 = var15 != var32;
            if(!var32) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var36 = _closure1_slot8;
            var38 = _closure1_slot0;
            var39 = _closure1_slot2;
            var34 = var39[var34];
            var34 = var38.bind(var4)(var34);
            var34 = var34.TableRow;
            var35 = var34.Icon;
            var34 = {};
            var37 = 16;
            var37 = var39[var37];
            var37 = var38.bind(var4)(var37);
            var37 = var37.CopyIcon;
            var34['IconComponent'] = var37;
            var32 = var36.bind(var4)(var35, var34);
case 40:
            var29['trailing'] = var32;
            var34 = var15 == var25;
            var32 = undefined;
            if(var34) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var32 = var25.code;
case 42:
            var34 = var15 != var32;
            var32 = undefined;
            if(!var34) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var32 = var33;
case 44:
            var29['onPress'] = var32;
            var29 = var31.bind(var4)(var30, var29);
            var26['children'] = var29;
            var26 = var28.bind(var4)(var27, var26);
            var23['children'] = var26;
            var24 = var24.bind(var4)(var14, var23);
            var23 = new Array(2);
            var23[0] = var24;
            var26 = var15 == var25;
            var24 = undefined;
            if(var26) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var24 = var25.code;
case 46:
            var24 = var15 == var24;
            if(!var24) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var27 = _closure1_slot8;
            var26 = _closure1_slot4;
            var25 = {};
            var28 = var12.claimingIndicator;
            var25['style'] = var28;
            var28 = 24;
            var25['size'] = var28;
            var24 = var27.bind(var4)(var26, var25);
case 48:
            var23[1] = var24;
            var13['children'] = var23;
            var13 = var22.bind(var4)(var14, var13);
            var11[1] = var13;
            var8['children'] = var11;
            var9 = var10.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var11 = _closure1_slot8;
            var10 = _closure1_slot5;
            var9 = {};
            var12 = var12.footer;
            var9['style'] = var12;
            var14 = _closure1_slot8;
            var13 = _closure1_slot0;
            var22 = _closure1_slot2;
            var12 = 24;
            var12 = var22[var12];
            var12 = var13.bind(var4)(var12);
            var13 = var12.Button;
            var12 = {};
            var12['disabled'] = var21;
            var12['onPress'] = var19;
            var12['grow'] = var18;
            if(!(var15 != var17)) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var15 = '';
            if(!(var15 === var17)) { _fun0001_ip = 52; continue _fun0001 }
case 50:
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
            _fun0001_ip = 53; continue _fun0001;
case 52:
            var19 = _closure1_slot0;
            var16 = _closure1_slot2;
            var17 = var16[var20];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var16[var20];
            var16 = var19.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.+zx47d;
            var15 = var17.bind(var18)(var16);
case 53:
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ActivityIndicator;
    var _closure1_slot4 = var8;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.REWARD_CODE_PLACEHOLDER;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 5;
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
        var3 = 6;
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
    var _closure1_slot10 = var4;
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestRewardCodeClaimBottomSheet.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function QuestRewardCodeClaimBottomSheetConnected(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
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
            var1 = 8;
            var1 = var4[var1];
            var5 = undefined;
            var6 = var2.bind(var5)(var1);
            var4 = var6.useStateFromStores;
            var1 = _closure1_slot6;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getQuest;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var4.bind(var6)(var2, var1);
            var _closure2_slot4 = var11;
            var2 = null;
            if(!(var2 != var11)) { _fun0006_ip = 54; continue _fun0006 }
case 55:
            var6 = _closure1_slot8;
            var4 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 25;
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
                var4 = _closure1_slot8;
                var3 = _closure1_slot11;
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
            _fun0006_ip = 56; continue _fun0006;
case 54:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 13;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.hideActionSheet;
            var3 = var3.bind(var4)();
            var1 = null;
case 56:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();