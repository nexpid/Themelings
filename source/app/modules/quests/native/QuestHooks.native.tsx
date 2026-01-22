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
            var12 = arg1;
            var _closure2_slot0 = var12;
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var3 = 13;
            var3 = var1[var3];
            var14 = undefined;
            var3 = var4.bind(var14)(var3);
            var3 = var3.bind(var14)();
            var4 = _closure1_slot0;
            var16 = 9;
            var1 = var1[var16];
            var6 = var4.bind(var14)(var1);
            var5 = var6.useStateFromStores;
            var1 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var1 = _closure1_slot5;
                var2 = var1.questDeliveryOverride;
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var1 = var5.bind(var6)(var4, var1);
            var8 = !var1;
            if(!var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = null;
            var5 = var4 == var12;
            var1 = undefined;
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var12.userStatus;
case 4:
            var8 = var4 != var1;
case 2:
            if(!var8) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 10;
            var1 = var10[var1];
            var6 = var9.bind(var14)(var1);
            var5 = var6.isDismissed;
            var4 = var12.userStatus;
            var1 = 11;
            var1 = var10[var1];
            var1 = var9.bind(var14)(var1);
            var1 = var1.QuestContent;
            var1 = var1.QUEST_BAR_MOBILE;
            var8 = var5.bind(var6)(var4, var1);
case 6:
            var1 = null;
            var5 = var1 == var12;
            var4 = undefined;
            if(var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = var12.userStatus;
            var6 = var1 == var5;
            var4 = undefined;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            var4 = var5.claimedAt;
case 8:
            var9 = var1 != var4;
            var13 = _closure1_slot0;
            var15 = _closure1_slot2;
            var4 = 14;
            var4 = var15[var4];
            var5 = var13.bind(var14)(var4);
            var4 = var5.useIsQuestExpired;
            var10 = var4.bind(var5)(var12);
            var4 = 15;
            var4 = var15[var4];
            var6 = var13.bind(var14)(var4);
            var5 = var6.useIsEligibleForQuests;
            var4 = {};
            var11 = _closure1_slot7;
            var11 = var11.QUESTS_BAR;
            var4['location'] = var11;
            var11 = var5.bind(var6)(var4);
            var4 = 16;
            var4 = var15[var4];
            var5 = var13.bind(var14)(var4);
            var4 = var5.useIsChannelFocused;
            var4 = var4.bind(var5)();
            var5 = 17;
            var6 = var15[var5];
            var17 = var13.bind(var14)(var6);
            var6 = var17.useCurrentNavigationRouteName;
            var18 = var6.bind(var17)();
            var5 = var15[var5];
            var17 = var13.bind(var14)(var5);
            var6 = var17.coerceGuildsRoute;
            var5 = {};
            var5['name'] = var18;
            var5 = var6.bind(var17)(var5);
            var5 = var1 != var5;
            var6 = var15[var16];
            var19 = var13.bind(var14)(var6);
            var18 = var19.useStateFromStores;
            var6 = _closure1_slot5;
            var17 = new Array(1);
            var17[0] = var6;
            var6 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var4 = _closure1_slot5;
                    var3 = var4.isClaimingReward;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 11:
                    return var1;
                }
            };
            var6 = var18.bind(var19)(var17, var6);
            var16 = var15[var16];
            var17 = var13.bind(var14)(var16);
            var16 = var17.useStateFromStores;
            var18 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var18;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot4;
                    var1 = var3.getKey;
                    var3 = var1.bind(var3)();
                    var1 = _closure1_slot8;
                    var1 = var3 === var1;
                    if(var1) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var2 = _closure1_slot6;
                    var1 = var3 === var2;
case 13:
                    return var1;
                }
            };
            var7 = var16.bind(var17)(var7, var2);
            var2 = 18;
            var2 = var15[var2];
            var14 = var13.bind(var14)(var2);
            var13 = var14.useYouBarEnabled;
            var2 = 'quest';
            var2 = var13.bind(var14)(var2);
            var1 = var1 != var12;
            if(!var1) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var1 = var11;
case 15:
            if(!var1) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var1 = !var10;
case 17:
            if(!var1) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var1 = !var9;
case 19:
            if(!var1) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var1 = !var8;
case 21:
            if(!var1) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            if(var5) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            if(!var6) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var6 = var7;
case 27:
            var5 = var6;
case 25:
            var1 = var5;
case 23:
            if(!var1) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var1 = !var4;
case 29:
            if(!var1) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var1 = !var3;
case 31:
            if(!var1) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var1 = !var2;
case 33:
            return var1;
        }
    };
    var _closure1_slot10 = var5;
    var4 = function useIsMobileQuestDockVisible() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
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
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure1_slot5;
                    var2 = var1.questDeliveryOverride;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0005_ip = 35; continue _fun0005 }
case 36:
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
case 35:
                    var3 = var1 != var2;
                    var1 = null;
                    if(!var3) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                    var1 = var2;
case 37:
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
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
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
                    if(!var3) { _fun0006_ip = 39; continue _fun0006 }
case 40:
                    var1 = var2;
case 39:
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
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var4 = null;
                    var3 = var4 == var1;
                    var1 = undefined;
                    if(var3) { _fun0007_ip = 14; continue _fun0007 }
case 41:
                    var3 = _closure2_slot0;
                    var1 = var3.questId;
case 14:
                    var3 = var4 != var1;
                    var1 = null;
                    if(!var3) { _fun0007_ip = 42; continue _fun0007 }
case 43:
                    var3 = _closure1_slot5;
                    var5 = var3.quests;
                    var3 = var5.get;
                    var2 = _closure2_slot0;
                    var2 = var2.questId;
                    var2 = var3.bind(var5)(var2);
                    var3 = var4 != var2;
                    var1 = null;
                    if(!var3) { _fun0007_ip = 42; continue _fun0007 }
case 44:
                    var1 = var2;
case 42:
                    return var1;
                }
            };
            var4 = var8.bind(var9)(var7, var4, var6);
            var2 = _closure1_slot10;
            if(!var5) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            var1 = var4;
case 45:
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
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
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
            if(var5) { _fun0008_ip = 47; continue _fun0008 }
case 48:
            var2 = 0;
            if(!var4) { _fun0008_ip = 49; continue _fun0008 }
case 50:
            var2 = var3;
case 49:
            var1 = var2;
case 47:
            return var1;
        }
    };
    var3['useMobileQuestDockHeight'] = var6;
    var6 = function useMobileQuestDock() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
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
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = _closure1_slot5;
                    var2 = var1.questDeliveryOverride;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0010_ip = 35; continue _fun0010 }
case 36:
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
case 35:
                    var3 = var1 != var2;
                    var1 = null;
                    if(!var3) { _fun0010_ip = 37; continue _fun0010 }
case 38:
                    var1 = var2;
case 37:
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
            if(!var3) { _fun0009_ip = 51; continue _fun0009 }
case 52:
            var1 = var2;
case 51:
            return var1;
        }
    };
    var3['useMobileQuestDock'] = var6;
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
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
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
                if(!var3) { _fun0011_ip = 53; continue _fun0011 }
case 54:
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
case 53:
                var1 = {};
                var3 = var5.isAnimated;
                var7 = var5.url;
                if(var3) { _fun0011_ip = 55; continue _fun0011 }
case 56:
                var3 = var7;
                _fun0011_ip = 57; continue _fun0011;
case 55:
                var6 = var7.replace;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var9];
                var4 = var5.bind(var8)(var4);
                var5 = var4.EXTENSION_RE;
                var4 = '.png';
                var3 = var6.bind(var7)(var5, var4);
case 57:
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