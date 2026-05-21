// app/modules/quests/native/QuestHooks.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var5 = function useIsMobileQuestDockRenderedBase(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 16;
            var1 = var4[var1];
            var11 = undefined;
            var1 = var2.bind(var11)(var1);
            var5 = var1.bind(var11)();
            var2 = _closure1_slot0;
            var1 = 10;
            var1 = var4[var1];
            var8 = var2.bind(var11)(var1);
            var7 = var8.useStateFromStores;
            var1 = _closure1_slot7;
            var4 = new Array(1);
            var4[0] = var1;
            var2 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getQuestPreviewOverride;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 11;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.QuestContent;
                var1 = var1.QUEST_BAR_MOBILE;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var1 = new Array(0);
            var1 = var7.bind(var8)(var4, var2, var1);
            var2 = null;
            var7 = var2 == var6;
            var4 = undefined;
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var6.userStatus;
case 2:
            var7 = var2 != var4;
            if(!var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var4 = 12;
            var4 = var13[var4];
            var10 = var12.bind(var11)(var4);
            var9 = var10.isDismissed;
            var8 = var6.userStatus;
            var4 = 11;
            var4 = var13[var4];
            var4 = var12.bind(var11)(var4);
            var4 = var4.QuestContent;
            var4 = var4.QUEST_BAR_MOBILE;
            var7 = var9.bind(var10)(var8, var4);
case 4:
            var8 = var2 == var6;
            var4 = undefined;
            if(var8) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = var6.userStatus;
            var9 = var2 == var8;
            var4 = undefined;
            if(var9) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var4 = var8.claimedAt;
case 6:
            var8 = var2 != var4;
            var4 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 17;
            var3 = var12[var3];
            var9 = var4.bind(var11)(var3);
            var3 = var9.useIsQuestExpired;
            var9 = var3.bind(var9)(var6);
            var3 = 18;
            var3 = var12[var3];
            var10 = var4.bind(var11)(var3);
            var3 = var10.getIsEligibleForQuests;
            var10 = var3.bind(var10)();
            var3 = 19;
            var3 = var12[var3];
            var3 = var4.bind(var11)(var3);
            var11 = var3.YouBarExperiment;
            var4 = var11.useConfig;
            var3 = {};
            var12 = 'QuestDock';
            var3['location'] = var12;
            var4 = var4.bind(var11)(var3);
            var3 = var4.enabled;
            var4 = var4.questDockEnabled;
            if(var1) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var1 = var2 != var6;
            if(!var1) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var1 = var10;
case 11:
            if(!var1) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var1 = !var9;
case 13:
            if(!var1) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var1 = !var8;
case 15:
            if(!var1) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var1 = !var7;
case 17:
            if(!var1) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var1 = !var5;
case 19:
            if(!var1) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var7 = var3;
            if(!var3) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var7 = !var4;
case 23:
            var1 = !var7;
case 21:
            _fun0001_ip = 25; continue _fun0001;
case 9:
            var2 = var2 == var6;
            if(var2) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var2 = var5;
case 26:
            if(var2) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            if(!var3) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var3 = !var4;
case 30:
            var2 = var3;
case 28:
            var1 = !var2;
case 25:
            return var1;
        }
    };
    var _closure1_slot12 = var5;
    var4 = function useIsMobileQuestDockRendered() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 9;
            var1 = var9[var1];
            var3 = undefined;
            var6 = var4.bind(var3)(var1);
            var4 = var6.useConfig;
            var1 = {};
            var7 = 'QuestMobileDock';
            var1['location'] = var7;
            var1 = var4.bind(var6)(var1);
            var6 = var1.enableNewRequestBehavior;
            var8 = _closure1_slot0;
            var7 = 10;
            var1 = var9[var7];
            var12 = var8.bind(var3)(var1);
            var11 = var12.useStateFromStores;
            var1 = _closure1_slot7;
            var10 = new Array(1);
            var10[0] = var1;
            var4 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getQuestPreviewOverride;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 11;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.QuestContent;
                var1 = var1.QUEST_BAR_MOBILE;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = new Array(0);
            var1 = var11.bind(var12)(var10, var4, var1);
            var4 = var9[var7];
            var12 = var8.bind(var3)(var4);
            var11 = var12.useStateFromStores;
            var4 = _closure1_slot7;
            var10 = new Array(1);
            var10[0] = var4;
            var4 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 12;
                    var2 = var8[var2];
                    var6 = undefined;
                    var5 = var7.bind(var6)(var2);
                    var4 = var5.getQuestForPlacement;
                    var2 = _closure1_slot7;
                    var3 = var2.quests;
                    var1 = _closure1_slot7;
                    var2 = var1.questToDeliverForPlacement;
                    var1 = 11;
                    var1 = var8[var1];
                    var1 = var7.bind(var6)(var1);
                    var1 = var1.QuestPlacement;
                    var1 = var1.MOBILE_HOME_DOCK_AREA;
                    var2 = var4.bind(var5)(var3, var2, var1);
                    var1 = null;
                    var3 = var1 != var2;
                    if(!var3) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                    var1 = var2;
case 32:
                    return var1;
                }
            };
            var4 = var11.bind(var12)(var10, var4);
            var10 = var9[var7];
            var13 = var8.bind(var3)(var10);
            var12 = var13.useStateFromStores;
            var10 = _closure1_slot7;
            var11 = new Array(1);
            var11[0] = var10;
            var10 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure1_slot7;
                    var3 = var2.questAdDecisionByPlacement;
                    var2 = var3.get;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 11;
                    var4 = var4[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
                    var1 = var1.QuestPlacement;
                    var1 = var1.MOBILE_HOME_DOCK_AREA;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 != var2;
                    if(!var3) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                    var1 = var2;
case 34:
                    return var1;
                }
            };
            var11 = var12.bind(var13)(var11, var10);
            var _closure2_slot0 = var11;
            var7 = var9[var7];
            var10 = var8.bind(var3)(var7);
            var9 = var10.useStateFromStores;
            var7 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = new Array(1);
            var7[0] = var11;
            var5 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var4 = null;
                    var3 = var4 == var1;
                    var1 = undefined;
                    if(var3) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                    var3 = _closure2_slot0;
                    var1 = var3.questId;
case 36:
                    var3 = var4 != var1;
                    var1 = null;
                    if(!var3) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                    var3 = _closure1_slot7;
                    var5 = var3.quests;
                    var3 = var5.get;
                    var2 = _closure2_slot0;
                    var2 = var2.questId;
                    var2 = var3.bind(var5)(var2);
                    var3 = var4 != var2;
                    var1 = null;
                    if(!var3) { _fun0005_ip = 38; continue _fun0005 }
case 40:
                    var1 = var2;
case 38:
                    return var1;
                }
            };
            var5 = var9.bind(var10)(var8, var5, var7);
            var2 = _closure1_slot12;
            var7 = null;
            if(!(var7 == var1)) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            if(!var6) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var4 = var5;
case 43:
            var1 = var4;
case 41:
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot13 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var10 = var8[var6];
    var6 = metroImportAll;
    var6 = var6.bind(var1)(var10);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.QUEST_REWARD_CODE_CLAIM_BOTTOM_SHEET_KEY;
    var _closure1_slot8 = var9;
    var6 = var6.QuestVariants;
    var _closure1_slot9 = var6;
    var6 = 6;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.CAPTCHA_MODAL_KEY;
    var _closure1_slot10 = var6;
    var6 = 7;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.ThemeTypes;
    var _closure1_slot11 = var6;
    var6 = 28;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/quests/native/QuestHooks.native.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function useMobileQuestDockHeight() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = _closure1_slot13;
            var4 = undefined;
            var3 = var2.bind(var4)();
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 8;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useQuestDockExternalOffset;
            var2 = var1.bind(var2)();
            var1 = 0;
            if(!var3) { _fun0006_ip = 45; continue _fun0006 }
case 46:
            var1 = var2;
case 45:
            return var1;
        }
    };
    var3['useMobileQuestDockHeight'] = var6;
    var6 = function useMobileQuestDock() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 9;
            var1 = var8[var1];
            var6 = undefined;
            var7 = var5.bind(var6)(var1);
            var4 = var7.useConfig;
            var1 = {};
            var9 = 'QuestMobileDock';
            var1['location'] = var9;
            var1 = var4.bind(var7)(var1);
            var4 = var1.enableNewRequestBehavior;
            var7 = _closure1_slot0;
            var9 = 10;
            var1 = var8[var9];
            var13 = var7.bind(var6)(var1);
            var12 = var13.useStateFromStores;
            var1 = _closure1_slot7;
            var11 = new Array(1);
            var11[0] = var1;
            var10 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getQuestPreviewOverride;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 11;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.QuestContent;
                var1 = var1.QUEST_BAR_MOBILE;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = new Array(0);
            var1 = var12.bind(var13)(var11, var10, var1);
            var9 = var8[var9];
            var10 = var7.bind(var6)(var9);
            var9 = var10.useStateFromStores;
            var11 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var11;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 12;
                    var2 = var8[var2];
                    var6 = undefined;
                    var5 = var7.bind(var6)(var2);
                    var4 = var5.getQuestForPlacement;
                    var2 = _closure1_slot7;
                    var3 = var2.quests;
                    var1 = _closure1_slot7;
                    var2 = var1.questToDeliverForPlacement;
                    var1 = 11;
                    var1 = var8[var1];
                    var1 = var7.bind(var6)(var1);
                    var1 = var1.QuestPlacement;
                    var1 = var1.MOBILE_HOME_DOCK_AREA;
                    var2 = var4.bind(var5)(var3, var2, var1);
                    var1 = null;
                    var3 = var1 != var2;
                    if(!var3) { _fun0008_ip = 32; continue _fun0008 }
case 33:
                    var1 = var2;
case 32:
                    return var1;
                }
            };
            var2 = var9.bind(var10)(var3, var2);
            var3 = 13;
            var3 = var8[var3];
            var5 = var5.bind(var6)(var3);
            var3 = 11;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.QuestPlacement;
            var3 = var3.MOBILE_HOME_DOCK_AREA;
            var3 = var5.bind(var6)(var3);
            var5 = null;
            if(!(var5 == var1)) { _fun0007_ip = 47; continue _fun0007 }
case 48:
            if(!var4) { _fun0007_ip = 49; continue _fun0007 }
case 50:
            var2 = var3;
case 49:
            var1 = var2;
case 47:
            return var1;
        }
    };
    var3['useMobileQuestDock'] = var6;
    var6 = function useIsMobileQuestDockVisibleToUser(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg2;
            var2 = arg1;
            var _closure2_slot0 = var2;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 14;
            var2 = var10[var2];
            var8 = undefined;
            var3 = var9.bind(var8)(var2);
            var2 = var3.useIsChannelFocused;
            var5 = var2.bind(var3)();
            var2 = 15;
            var3 = var10[var2];
            var7 = var9.bind(var8)(var3);
            var3 = var7.useCurrentNavigationRouteName;
            var11 = var3.bind(var7)();
            var2 = var10[var2];
            var7 = var9.bind(var8)(var2);
            var3 = var7.coerceGuildsRoute;
            var2 = {};
            var2['name'] = var11;
            var3 = var3.bind(var7)(var2);
            var2 = null;
            var2 = var2 != var3;
            var7 = 10;
            var3 = var10[var7];
            var13 = var9.bind(var8)(var3);
            var12 = var13.useStateFromStores;
            var3 = _closure1_slot7;
            var11 = new Array(1);
            var11[0] = var3;
            var3 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0010_ip = 51; continue _fun0010 }
case 52:
                    var4 = _closure1_slot7;
                    var3 = var4.isClaimingReward;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 51:
                    return var1;
                }
            };
            var3 = var12.bind(var13)(var11, var3);
            var7 = var10[var7];
            var8 = var9.bind(var8)(var7);
            var7 = var8.useStateFromStores;
            var9 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var9;
            var4 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = _closure1_slot5;
                    var1 = var3.getKey;
                    var3 = var1.bind(var3)();
                    var1 = _closure1_slot10;
                    var1 = var3 === var1;
                    if(var1) { _fun0011_ip = 53; continue _fun0011 }
case 36:
                    var2 = _closure1_slot8;
                    var1 = var3 === var2;
case 53:
                    return var1;
                }
            };
            var4 = var7.bind(var8)(var6, var4);
            if(!var1) { _fun0009_ip = 54; continue _fun0009 }
case 55:
            var1 = !var5;
case 54:
            if(!var1) { _fun0009_ip = 56; continue _fun0009 }
case 57:
            if(var2) { _fun0009_ip = 58; continue _fun0009 }
case 59:
            if(!var3) { _fun0009_ip = 60; continue _fun0009 }
case 61:
            var3 = var4;
case 60:
            var2 = var3;
case 58:
            var1 = var2;
case 56:
            return var1;
        }
    };
    var3['useIsMobileQuestDockVisibleToUser'] = var6;
    var3['useIsMobileQuestDockRenderedBase'] = var5;
    var3['useIsMobileQuestDockRendered'] = var4;
    var4 = function useQuestGameLogotypeAssetUrl(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 20;
            var3 = var8[var2];
            var6 = undefined;
            var5 = var7.bind(var6)(var3);
            var4 = var5.getQuestAsset;
            var3 = _closure2_slot0;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.QuestAssetType;
            var2 = var2.LOGO_TYPE;
            var1 = _closure1_slot11;
            var1 = var1.DARK;
            var1 = var4.bind(var5)(var3, var2, var1);
            var1 = var1.url;
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useQuestGameLogotypeAssetUrl'] = var4;
    var4 = function useQuestDockHeroAsset(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var7 = _closure1_slot0;
                var3 = _closure1_slot2;
                var9 = 20;
                var1 = var3[var9];
                var8 = undefined;
                var6 = var7.bind(var8)(var1);
                var5 = var6.getQuestAsset;
                var2 = _closure2_slot0;
                var3 = var3[var9];
                var3 = var7.bind(var8)(var3);
                var3 = var3.QuestAssetType;
                var3 = var3.QUEST_BAR_HERO;
                var5 = var5.bind(var6)(var2, var3);
                var2 = var2.config;
                var2 = var2.assets;
                var3 = var2.questBarHeroVideo;
                var2 = null;
                var3 = var2 != var3;
                if(!var3) { _fun0012_ip = 62; continue _fun0012 }
case 63:
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var9];
                var7 = var6.bind(var8)(var3);
                var6 = var7.resolveAsset;
                var1 = _closure2_slot0;
                var3 = var1.id;
                var1 = var1.config;
                var1 = var1.assets;
                var1 = var1.questBarHeroVideo;
                var2 = var6.bind(var7)(var3, var1);
case 62:
                var1 = {};
                var3 = var5.isAnimated;
                var7 = var5.url;
                if(var3) { _fun0012_ip = 64; continue _fun0012 }
case 65:
                var3 = var7;
                _fun0012_ip = 66; continue _fun0012;
case 64:
                var6 = var7.replace;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var9];
                var4 = var5.bind(var8)(var4);
                var5 = var4.EXTENSION_RE;
                var4 = '.png';
                var3 = var6.bind(var7)(var5, var4);
case 66:
                var1['staticUrl'] = var3;
                var1['videoAsset'] = var2;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useQuestDockHeroAsset'] = var4;
    var4 = function useHasWatchVideoOnMobileTasks(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 21;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.hasWatchVideoOnMobileTasks;
            var1 = {};
            var4 = _closure2_slot0;
            var1['config'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useHasWatchVideoOnMobileTasks'] = var4;
    var2 = function useMobileActivityQuest(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 21;
            var3 = var9[var3];
            var8 = undefined;
            var4 = var6.bind(var8)(var3);
            var3 = var4.getActivityApplicationId;
            var11 = var3.bind(var4)(var5);
            var _closure2_slot1 = var11;
            var3 = 10;
            var3 = var9[var3];
            var10 = var6.bind(var8)(var3);
            var7 = var10.useStateFromStores;
            var3 = _closure1_slot6;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getApplication;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var7.bind(var10)(var4, var3);
            var _closure2_slot2 = var3;
            var4 = 22;
            var4 = var9[var4];
            var7 = var6.bind(var8)(var4);
            var4 = var7.canLaunchFrame;
            var7 = var4.bind(var7)(var3);
            var _closure2_slot3 = var7;
            var4 = 23;
            var4 = var9[var4];
            var6 = var6.bind(var8)(var4);
            var4 = var6.canLaunchActivity;
            var4 = var4.bind(var6)(var5);
            if(!var4) { _fun0013_ip = 7; continue _fun0013 }
case 62:
            var6 = var5.config;
            var10 = var6.features;
            var9 = var10.includes;
            var6 = _closure1_slot9;
            var6 = var6.MOBILE_ACTIVITY_QUEST;
            var4 = var9.bind(var10)(var6);
case 7:
            if(!var4) { _fun0013_ip = 67; continue _fun0013 }
case 68:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = 24;
            var6 = var10[var6];
            var9 = var9.bind(var8)(var6);
            var12 = null;
            var10 = var12 == var3;
            var6 = undefined;
            if(var10) { _fun0013_ip = 69; continue _fun0013 }
case 70:
            var10 = var3.embeddedActivityConfig;
            var12 = var12 == var10;
            var6 = undefined;
            if(var12) { _fun0013_ip = 69; continue _fun0013 }
case 71:
            var6 = var10.supported_platforms;
case 69:
            var4 = var9.bind(var8)(var6);
case 67:
            if(!var4) { _fun0013_ip = 72; continue _fun0013 }
case 73:
            var6 = var7;
            if(var6) { _fun0013_ip = 74; continue _fun0013 }
case 75:
            var10 = null;
            var12 = var10 == var3;
            var9 = undefined;
            if(var12) { _fun0013_ip = 76; continue _fun0013 }
case 77:
            var12 = var3.bot;
            var13 = var10 == var12;
            var9 = undefined;
            if(var13) { _fun0013_ip = 76; continue _fun0013 }
case 78:
            var9 = var12.id;
case 76:
            var6 = var10 != var9;
case 74:
            var4 = var6;
case 72:
            var _closure2_slot4 = var4;
            var6 = _closure1_slot4;
            var10 = var6.useEffect;
            var9 = new Array(3);
            var9[0] = var3;
            var9[1] = var11;
            var5 = var5.config;
            var5 = var5.features;
            var9[2] = var5;
            var5 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var4 = null;
                    var2 = var4 == var2;
                    if(!var2) { _fun0014_ip = 79; continue _fun0014 }
case 52:
                    var3 = _closure2_slot1;
                    var2 = var4 != var3;
case 79:
                    if(!var2) { _fun0014_ip = 35; continue _fun0014 }
case 80:
                    var3 = _closure2_slot0;
                    var3 = var3.config;
                    var5 = var3.features;
                    var4 = var5.includes;
                    var3 = _closure1_slot9;
                    var3 = var3.MOBILE_ACTIVITY_QUEST;
                    var2 = var4.bind(var5)(var3);
case 35:
                    if(!var2) { _fun0014_ip = 81; continue _fun0014 }
case 34:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 25;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.fetchApplications;
                    var1 = _closure2_slot1;
                    var2 = new Array(1);
                    var2[0] = var1;
                    var1 = false;
                    var1 = var3.bind(var4)(var2, var1);
case 81:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var10.bind(var6)(var5, var9);
            var5 = var6.useCallback;
            var2 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0015_ip = 82; continue _fun0015 }
case 83:
                        var2 = _closure2_slot4;
                        if(!var2) { _fun0015_ip = 84; continue _fun0015 }
case 85:
                        var2 = _closure2_slot3;
                        if(var2) { _fun0015_ip = 64; continue _fun0015 }
case 86:
                        var2 = _closure2_slot2;
                        var3 = null;
                        var6 = var3 == var2;
                        var4 = undefined;
                        var2 = undefined;
                        if(var6) { _fun0015_ip = 87; continue _fun0015 }
case 88:
                        var6 = _closure2_slot2;
                        var6 = var6.bot;
                        var7 = var3 == var6;
                        var2 = undefined;
                        if(var7) { _fun0015_ip = 87; continue _fun0015 }
case 34:
                        var2 = var6.id;
case 87:
                        if(!(var3 != var2)) { _fun0015_ip = 84; continue _fun0015 }
case 89:
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 27;
                        var2 = var6[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.launchActivityInBotDM;
                        var2 = {};
                        var6 = _closure2_slot2;
                        var7 = var6.id;
                        var2['appId'] = var7;
                        var6 = var6.bot;
                        var6 = var6.id;
                        var2['botId'] = var6;
                        var6 = new Array(0);
                        var2['analyticsLocations'] = var6;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address=160);
case 90:
                        return var2;
case 91:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(!var3) { _fun0015_ip = 84; continue _fun0015 }
case 92:
                        return var2;
case 64:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 26;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.launchFrame;
                        var2 = {};
                        var5 = _closure2_slot2;
                        var5 = var5.id;
                        var2['applicationId'] = var5;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address=224);
case 93:
                        return var2;
case 94:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0015_ip = 69; continue _fun0015 }
case 84:
                        var3 = undefined;
                        return var3;
case 69:
                        return var2;
case 82:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var2.bind(var8)(var1);
            var1 = new Array(3);
            var1[0] = var7;
            var1[1] = var3;
            var1[2] = var4;
            var2 = var5.bind(var6)(var2, var1);
            var1 = {};
            var1['isMobileActivityQuest'] = var4;
            var1['questApplication'] = var3;
            var1['launchMobileActivity'] = var2;
            return var1;
        }
    };
    var3['useMobileActivityQuest'] = var2;
    return var1;
})();