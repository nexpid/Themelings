// app/modules/quests/native/QuestRewardDetailsBottomSheet.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function QuestRewardDetailsBottomSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var24 = var2.quest;
            var _closure2_slot0 = var24;
            var2 = _closure1_slot8;
            var4 = undefined;
            var19 = var2.bind(var4)();
            var6 = _closure1_slot3;
            var5 = var6.useMemo;
            var2 = var24.config;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.isCollectibleQuestRewardPremiumExtendable;
                var1 = _closure2_slot0;
                var1 = var1.config;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var5.bind(var6)(var2, var3);
            var _closure2_slot1 = var2;
            var6 = _closure1_slot3;
            var5 = var6.useMemo;
            var3 = new Array(2);
            var3[0] = var24;
            var3[1] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var1 = var2[var1];
                    var6 = undefined;
                    var8 = var5.bind(var6)(var1);
                    var7 = var8.getQuestPrimaryReward;
                    var3 = _closure2_slot0;
                    var3 = var7.bind(var8)(var3);
                    var3 = var3.type;
                    var7 = 9;
                    var2 = var2[var7];
                    var2 = var5.bind(var6)(var2);
                    var2 = var2.QuestRewardTypes;
                    var2 = var2.COLLECTIBLE;
                    if(!(var2 !== var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var7];
                    var2 = var5.bind(var6)(var2);
                    var2 = var2.QuestRewardTypes;
                    var2 = var2.FRACTIONAL_PREMIUM;
                    if(!(var2 !== var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = null;
                    return var2;
case 4:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 10;
                    var3 = var8[var2];
                    var3 = var7.bind(var6)(var3);
                    var5 = var3.intl;
                    var3 = var5.string;
                    var2 = var8[var2];
                    var2 = var7.bind(var6)(var2);
                    var2 = var2.t;
                    var2 = var2.maMtqM;
                    var2 = var3.bind(var5)(var2);
                    return var2;
case 2:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var7 = 10;
                    var2 = var2[var7];
                    var2 = var3.bind(var6)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = _closure2_slot1;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var5.bind(var6)(var4);
                    var4 = var4.t;
                    if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var1 = var4.ABD2CN;
                    _fun0002_ip = 8; continue _fun0002;
case 6:
                    var1 = var4["66YyBJ"];
case 8:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var17 = var5.bind(var6)(var2, var3);
            var21 = _closure1_slot0;
            var20 = _closure1_slot2;
            var2 = 7;
            var3 = var20[var2];
            var5 = var21.bind(var4)(var3);
            var3 = var5.useShouldShowBonusOrbsUX;
            var7 = var3.bind(var5)(var24);
            var _closure2_slot2 = var7;
            var2 = var20[var2];
            var3 = var21.bind(var4)(var2);
            var2 = var3.useEligibleForQuestOrbMultiplier;
            var6 = var2.bind(var3)();
            var _closure2_slot3 = var6;
            var2 = 8;
            var2 = var20[var2];
            var5 = var21.bind(var4)(var2);
            var3 = var5.hasVirtualCurrencyReward;
            var2 = var24.config;
            var8 = var3.bind(var5)(var2);
            var _closure2_slot4 = var8;
            var5 = _closure1_slot3;
            var3 = var5.useMemo;
            var9 = var24.config;
            var2 = new Array(4);
            var2[0] = var9;
            var2[1] = var8;
            var2[2] = var7;
            var2[3] = var6;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var2 = true;
                    if(!(var2 === var3)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var5 = 8;
                    var3 = var3[var5];
                    var7 = undefined;
                    var6 = var4.bind(var7)(var3);
                    var4 = var6.getVirtualCurrencyRewardOrbQuantity;
                    var3 = _closure2_slot0;
                    var3 = var3.config;
                    var4 = var4.bind(var6)(var3);
                    var3 = _closure2_slot2;
                    if(!var3) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var3 = _closure2_slot3;
case 11:
                    var6 = var4;
                    if(!var3) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var5 = var4.bind(var7)(var3);
                    var4 = var5.getVirtualCurrencyRewardPremiumOrbQuantity;
                    var3 = _closure2_slot0;
                    var3 = var3.config;
                    var6 = var4.bind(var5)(var3);
case 13:
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 10;
                    var4 = var8[var2];
                    var4 = var3.bind(var7)(var4);
                    var5 = var4.intl;
                    var4 = var5.format;
                    var2 = var8[var2];
                    var2 = var3.bind(var7)(var2);
                    var2 = var2.t;
                    var3 = var2.nLXlh+;
                    var2 = {};
                    var2['orbAmount'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var2;
case 9:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 8;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.getDefaultRewardName;
                    var1 = _closure2_slot0;
                    var1 = var1.config;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var23 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot5;
            var1 = 11;
            var1 = var20[var1];
            var1 = var21.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {};
            var5 = true;
            var1['startExpanded'] = var5;
            var7 = _closure1_slot6;
            var12 = 12;
            var5 = var20[var12];
            var5 = var21.bind(var4)(var5);
            var6 = var5.Stack;
            var5 = {};
            var22 = 'vertical';
            var5['direction'] = var22;
            var18 = _closure1_slot1;
            var16 = 4;
            var8 = var20[var16];
            var8 = var18.bind(var4)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_16;
            var5['spacing'] = var8;
            var8 = var19.wrapper;
            var5['style'] = var8;
            var10 = _closure1_slot6;
            var8 = var20[var12];
            var8 = var21.bind(var4)(var8);
            var9 = var8.Stack;
            var8 = {'align': 'center', 'direction': 'horizontal'};
            var11 = var20[var16];
            var11 = var18.bind(var4)(var11);
            var11 = var11.spacing;
            var11 = var11.PX_16;
            var8['spacing'] = var11;
            var15 = _closure1_slot5;
            var11 = 13;
            var11 = var20[var11];
            var13 = var18.bind(var4)(var11);
            var11 = {'quest': null, 'height': 56, 'width': 56, 'withAnimation': true};
            var11['quest'] = var24;
            var13 = var15.bind(var4)(var13, var11);
            var11 = new Array(2);
            var11[0] = var13;
            var15 = _closure1_slot6;
            var12 = var20[var12];
            var12 = var21.bind(var4)(var12);
            var13 = var12.Stack;
            var12 = {};
            var12['direction'] = var22;
            var16 = var20[var16];
            var16 = var18.bind(var4)(var16);
            var16 = var16.spacing;
            var16 = var16.PX_4;
            var12['spacing'] = var16;
            var16 = var19.rewardDetailsCopy;
            var12['style'] = var16;
            var24 = _closure1_slot5;
            var18 = 14;
            var16 = var20[var18];
            var16 = var21.bind(var4)(var16);
            var22 = var16.Text;
            var16 = {'variant': 'eyebrow', 'color': 'text-subtle'};
            var25 = 10;
            var26 = var20[var25];
            var26 = var21.bind(var4)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var25 = var20[var25];
            var25 = var21.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25.jyYgZ+;
            var25 = var26.bind(var27)(var25);
            var16['children'] = var25;
            var22 = var24.bind(var4)(var22, var16);
            var16 = new Array(2);
            var16[0] = var22;
            var22 = _closure1_slot5;
            var20 = var20[var18];
            var20 = var21.bind(var4)(var20);
            var21 = var20.Text;
            var20 = {'variant': 'heading-lg/semibold', 'color': 'text-strong'};
            var20['children'] = var23;
            var20 = var22.bind(var4)(var21, var20);
            var16[1] = var20;
            var12['children'] = var16;
            var12 = var15.bind(var4)(var13, var12);
            var11[1] = var12;
            var8['children'] = var11;
            var9 = var10.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var9 = null;
            var9 = var9 != var17;
            if(!var9) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var12 = _closure1_slot6;
            var11 = _closure1_slot7;
            var10 = {};
            var16 = _closure1_slot5;
            var15 = _closure1_slot4;
            var13 = {};
            var19 = var19.separator;
            var13['style'] = var19;
            var15 = var16.bind(var4)(var15, var13);
            var13 = new Array(2);
            var13[0] = var15;
            var16 = _closure1_slot5;
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var18];
            var14 = var15.bind(var4)(var14);
            var15 = var14.Text;
            var14 = {'variant': 'text-md/normal', 'color': 'text-subtle'};
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var13[1] = var14;
            var10['children'] = var13;
            var9 = var12.bind(var4)(var11, var10);
case 15:
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var12 = 1;
    var4 = var6[var12];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var7 = var4.jsxs;
    var _closure1_slot6 = var7;
    var4 = var4.Fragment;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 4;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9['paddingHorizontal'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9['paddingBottom'] = var13;
    var4['wrapper'] = var9;
    var9 = {};
    var9['flexShrink'] = var12;
    var4['rewardDetailsCopy'] = var9;
    var9 = {};
    var9['height'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BORDER_STRONG;
    var9['backgroundColor'] = var10;
    var4['separator'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestRewardDetailsBottomSheet.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function QuestRewardDetailsBottomSheetConnected(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var6 = var1.questId;
            var5 = _closure1_slot3;
            var4 = var5.useCallback;
            var3 = function() {
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 5;
                var3 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var3);
                var3 = var5.showQuestUnavailableAlert;
                var3 = var3.bind(var5)();
                var3 = _closure1_slot1;
                var2 = 6;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                return var1;
            };
            var1 = new Array(0);
            var4 = var4.bind(var5)(var3, var1);
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 7;
            var1 = var5[var1];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = var3.useNonNullableQuest;
            var6 = var1.bind(var3)(var6, var4);
            var1 = null;
            var3 = var1 == var6;
            if(var3) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var4 = _closure1_slot5;
            var3 = _closure1_slot9;
            var2 = {};
            var2['quest'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 17:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();