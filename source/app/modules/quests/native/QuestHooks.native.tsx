// app/modules/quests/native/QuestHooks.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var5 = function useIsMobileQuestDockVisibleBase(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 15;
            var1 = var4[var1];
            var10 = undefined;
            var1 = var2.bind(var10)(var1);
            var3 = var1.bind(var10)();
            var2 = _closure1_slot0;
            var1 = 9;
            var1 = var4[var1];
            var5 = var2.bind(var10)(var1);
            var4 = var5.useStateFromStores;
            var1 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = _closure1_slot5;
                var2 = var1.questDeliveryOverride;
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var1 = var4.bind(var5)(var2, var1);
            var4 = !var1;
            if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = null;
            var5 = var2 == var8;
            var1 = undefined;
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var8.userStatus;
case 4:
            var4 = var2 != var1;
case 2:
            if(!var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 10;
            var1 = var9[var1];
            var6 = var7.bind(var10)(var1);
            var5 = var6.isDismissed;
            var2 = var8.userStatus;
            var1 = 11;
            var1 = var9[var1];
            var1 = var7.bind(var10)(var1);
            var1 = var1.QuestContent;
            var1 = var1.QUEST_BAR_MOBILE;
            var4 = var5.bind(var6)(var2, var1);
case 6:
            var1 = null;
            var5 = var1 == var8;
            var2 = undefined;
            if(var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = var8.userStatus;
            var6 = var1 == var5;
            var2 = undefined;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            var2 = var5.claimedAt;
case 8:
            var5 = var1 != var2;
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 16;
            var2 = var11[var2];
            var6 = var9.bind(var10)(var2);
            var2 = var6.useIsQuestExpired;
            var6 = var2.bind(var6)(var8);
            var2 = 17;
            var2 = var11[var2];
            var12 = var9.bind(var10)(var2);
            var7 = var12.useIsEligibleForQuests;
            var2 = {};
            var13 = _closure1_slot7;
            var13 = var13.QUESTS_BAR;
            var2['location'] = var13;
            var7 = var7.bind(var12)(var2);
            var2 = 18;
            var2 = var11[var2];
            var10 = var9.bind(var10)(var2);
            var9 = var10.useYouBarEnabled;
            var2 = 'YouBar';
            var2 = var9.bind(var10)(var2);
            var1 = var1 != var8;
            if(!var1) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var1 = var7;
case 11:
            if(!var1) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var1 = !var6;
case 13:
            if(!var1) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var1 = !var5;
case 15:
            if(!var1) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var1 = !var4;
case 17:
            if(!var1) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var1 = !var3;
case 19:
            if(!var1) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var1 = !var2;
case 21:
            return var1;
        }
    };
    var _closure1_slot10 = var5;
    var4 = function useIsMobileQuestDockVisible() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 8;
            var1 = var8[var1];
            var3 = undefined;
            var6 = var5.bind(var3)(var1);
            var5 = var6.useConfig;
            var1 = {};
            var7 = 'QuestMobileDock';
            var1['location'] = var7;
            var1 = var5.bind(var6)(var1);
            var5 = var1.enableNewRequestBehavior;
            var7 = _closure1_slot0;
            var6 = 9;
            var1 = var8[var6];
            var11 = var7.bind(var3)(var1);
            var10 = var11.useStateFromStores;
            var1 = _closure1_slot5;
            var9 = new Array(1);
            var9[0] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure1_slot5;
                    var2 = var1.questDeliveryOverride;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 10;
                    var4 = var10[var4];
                    var8 = undefined;
                    var7 = var9.bind(var8)(var4);
                    var6 = var7.getQuestForPlacement;
                    var4 = _closure1_slot5;
                    var5 = var4.quests;
                    var3 = _closure1_slot5;
                    var4 = var3.questToDeliverForPlacement;
                    var3 = 11;
                    var3 = var10[var3];
                    var3 = var9.bind(var8)(var3);
                    var3 = var3.QuestPlacement;
                    var3 = var3.MOBILE_HOME_DOCK_AREA;
                    var2 = var6.bind(var7)(var5, var4, var3);
case 23:
                    var3 = var1 != var2;
                    var1 = null;
                    if(!var3) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                    var1 = var2;
case 25:
                    return var1;
                }
            };
            var1 = var10.bind(var11)(var9, var1);
            var9 = var8[var6];
            var12 = var7.bind(var3)(var9);
            var11 = var12.useStateFromStores;
            var9 = _closure1_slot5;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure1_slot5;
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
                    if(!var3) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                    var1 = var2;
case 27:
                    return var1;
                }
            };
            var10 = var11.bind(var12)(var10, var9);
            var _closure2_slot0 = var10;
            var6 = var8[var6];
            var9 = var7.bind(var3)(var6);
            var8 = var9.useStateFromStores;
            var6 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = new Array(1);
            var6[0] = var10;
            var4 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var4 = null;
                    var3 = var4 == var1;
                    var1 = undefined;
                    if(var3) { _fun0005_ip = 29; continue _fun0005 }
case 30:
                    var3 = _closure2_slot0;
                    var1 = var3.questId;
case 29:
                    var3 = var4 != var1;
                    var1 = null;
                    if(!var3) { _fun0005_ip = 31; continue _fun0005 }
case 32:
                    var3 = _closure1_slot5;
                    var5 = var3.quests;
                    var3 = var5.get;
                    var2 = _closure2_slot0;
                    var2 = var2.questId;
                    var2 = var3.bind(var5)(var2);
                    var3 = var4 != var2;
                    var1 = null;
                    if(!var3) { _fun0005_ip = 31; continue _fun0005 }
case 33:
                    var1 = var2;
case 31:
                    return var1;
                }
            };
            var4 = var8.bind(var9)(var7, var4, var6);
            var2 = _closure1_slot10;
            if(!var5) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var1 = var4;
case 34:
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot11 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var10 = var8[var1];
    var6 = metroImportAll;
    var1 = undefined;
    var6 = var6.bind(var1)(var10);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.QUEST_REWARD_CODE_CLAIM_BOTTOM_SHEET_KEY;
    var _closure1_slot6 = var9;
    var6 = var6.QuestsExperimentLocations;
    var _closure1_slot7 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.CAPTCHA_MODAL_KEY;
    var _closure1_slot8 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.ThemeTypes;
    var _closure1_slot9 = var6;
    var6 = 21;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/quests/native/QuestHooks.native.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function useMobileQuestDockHeight() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = _closure1_slot11;
            var5 = undefined;
            var4 = var2.bind(var5)();
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 6;
            var1 = var6[var1];
            var3 = var2.bind(var5)(var1);
            var1 = var3.useQuestDockExternalOffset;
            var3 = var1.bind(var3)();
            var1 = 7;
            var1 = var6[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.isMetaQuest;
            var5 = var1.bind(var2)();
            var1 = 0;
            if(var5) { _fun0006_ip = 36; continue _fun0006 }
case 37:
            var2 = 0;
            if(!var4) { _fun0006_ip = 38; continue _fun0006 }
case 39:
            var2 = var3;
case 38:
            var1 = var2;
case 36:
            return var1;
        }
    };
    var3['useMobileQuestDockHeight'] = var6;
    var6 = function useMobileQuestDock() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 8;
            var2 = var7[var2];
            var5 = undefined;
            var6 = var4.bind(var5)(var2);
            var3 = var6.useConfig;
            var2 = {};
            var8 = 'QuestMobileDock';
            var2['location'] = var8;
            var2 = var3.bind(var6)(var2);
            var3 = var2.enableNewRequestBehavior;
            var6 = _closure1_slot0;
            var2 = 9;
            var2 = var7[var2];
            var9 = var6.bind(var5)(var2);
            var8 = var9.useStateFromStores;
            var1 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure1_slot5;
                    var2 = var1.questDeliveryOverride;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0008_ip = 23; continue _fun0008 }
case 24:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 10;
                    var4 = var10[var4];
                    var8 = undefined;
                    var7 = var9.bind(var8)(var4);
                    var6 = var7.getQuestForPlacement;
                    var4 = _closure1_slot5;
                    var5 = var4.quests;
                    var3 = _closure1_slot5;
                    var4 = var3.questToDeliverForPlacement;
                    var3 = 11;
                    var3 = var10[var3];
                    var3 = var9.bind(var8)(var3);
                    var3 = var3.QuestPlacement;
                    var3 = var3.MOBILE_HOME_DOCK_AREA;
                    var2 = var6.bind(var7)(var5, var4, var3);
case 23:
                    var3 = var1 != var2;
                    var1 = null;
                    if(!var3) { _fun0008_ip = 25; continue _fun0008 }
case 26:
                    var1 = var2;
case 25:
                    return var1;
                }
            };
            var1 = var8.bind(var9)(var2, var1);
            var2 = 12;
            var2 = var7[var2];
            var4 = var4.bind(var5)(var2);
            var2 = 11;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.QuestPlacement;
            var2 = var2.MOBILE_HOME_DOCK_AREA;
            var2 = var4.bind(var5)(var2);
            if(!var3) { _fun0007_ip = 40; continue _fun0007 }
case 41:
            var1 = var2;
case 40:
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
            var2 = 13;
            var2 = var10[var2];
            var8 = undefined;
            var3 = var9.bind(var8)(var2);
            var2 = var3.useIsChannelFocused;
            var5 = var2.bind(var3)();
            var2 = 14;
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
            var7 = 9;
            var3 = var10[var7];
            var13 = var9.bind(var8)(var3);
            var12 = var13.useStateFromStores;
            var3 = _closure1_slot5;
            var11 = new Array(1);
            var11[0] = var3;
            var3 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0010_ip = 42; continue _fun0010 }
case 43:
                    var4 = _closure1_slot5;
                    var3 = var4.isClaimingReward;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 42:
                    return var1;
                }
            };
            var3 = var12.bind(var13)(var11, var3);
            var7 = var10[var7];
            var8 = var9.bind(var8)(var7);
            var7 = var8.useStateFromStores;
            var9 = _closure1_slot4;
            var6 = new Array(1);
            var6[0] = var9;
            var4 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = _closure1_slot4;
                    var1 = var3.getKey;
                    var3 = var1.bind(var3)();
                    var1 = _closure1_slot8;
                    var1 = var3 === var1;
                    if(var1) { _fun0011_ip = 44; continue _fun0011 }
case 29:
                    var2 = _closure1_slot6;
                    var1 = var3 === var2;
case 44:
                    return var1;
                }
            };
            var4 = var7.bind(var8)(var6, var4);
            if(!var1) { _fun0009_ip = 45; continue _fun0009 }
case 9:
            var1 = !var5;
case 45:
            if(!var1) { _fun0009_ip = 8; continue _fun0009 }
case 46:
            if(var2) { _fun0009_ip = 47; continue _fun0009 }
case 48:
            if(!var3) { _fun0009_ip = 10; continue _fun0009 }
case 49:
            var3 = var4;
case 10:
            var2 = var3;
case 47:
            var1 = var2;
case 8:
            return var1;
        }
    };
    var3['useIsMobileQuestDockVisibleToUser'] = var6;
    var3['useIsMobileQuestDockVisibleBase'] = var5;
    var3['useIsMobileQuestDockVisible'] = var4;
    var4 = function useQuestGameLogotypeAssetUrl(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 19;
            var3 = var8[var2];
            var6 = undefined;
            var5 = var7.bind(var6)(var3);
            var4 = var5.getQuestAsset;
            var3 = _closure2_slot0;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.QuestAssetType;
            var2 = var2.LOGO_TYPE;
            var1 = _closure1_slot9;
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
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var7 = _closure1_slot0;
                var3 = _closure1_slot2;
                var9 = 19;
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
                if(!var3) { _fun0012_ip = 50; continue _fun0012 }
case 51:
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
case 50:
                var1 = {};
                var3 = var5.isAnimated;
                var7 = var5.url;
                if(var3) { _fun0012_ip = 52; continue _fun0012 }
case 53:
                var3 = var7;
                _fun0012_ip = 54; continue _fun0012;
case 52:
                var6 = var7.replace;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var9];
                var4 = var5.bind(var8)(var4);
                var5 = var4.EXTENSION_RE;
                var4 = '.png';
                var3 = var6.bind(var7)(var5, var4);
case 54:
                var1['staticUrl'] = var3;
                var1['videoAsset'] = var2;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useQuestDockHeroAsset'] = var4;
    var2 = function useHasWatchVideoOnMobileTasks(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 20;
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
    var3['useHasWatchVideoOnMobileTasks'] = var2;
    return var1;
})();