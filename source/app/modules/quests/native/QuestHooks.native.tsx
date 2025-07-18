// app/modules/quests/native/QuestHooks.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function useIsMobileQuestDockVisible() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var16 = 7;
            var3 = var2[var16];
            var15 = undefined;
            var8 = var4.bind(var15)(var3);
            var6 = var8.useStateFromStores;
            var3 = _closure1_slot5;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure1_slot5;
                    var2 = var1.questDeliveryOverride;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0002_ip = 98; continue _fun0002 }
 19:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 8;
                    var4 = var10[var4];
                    var8 = undefined;
                    var7 = var9.bind(var8)(var4);
                    var6 = var7.getQuestForPlacement;
                    var4 = _closure1_slot5;
                    var5 = var4.quests;
                    var3 = _closure1_slot5;
                    var4 = var3.questToDeliverForPlacement;
                    var3 = 9;
                    var3 = var10[var3];
                    var3 = var9.bind(var8)(var3);
                    var3 = var3.QuestPlacement;
                    var3 = var3.MOBILE_HOME_DOCK_AREA;
                    var2 = var6.bind(var7)(var5, var4, var3);
 98:
                    var3 = var1 != var2;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 110; continue _fun0002 }
 107:
                    var1 = var2;
 110:
                    return var1;
                }
            };
            var12 = var6.bind(var8)(var5, var3);
            var _closure2_slot0 = var12;
            var5 = _closure1_slot1;
            var3 = 10;
            var3 = var2[var3];
            var3 = var5.bind(var15)(var3);
            var3 = var3.bind(var15)();
            var2 = var2[var16];
            var6 = var4.bind(var15)(var2);
            var5 = var6.useStateFromStores;
            var2 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                var1 = _closure1_slot5;
                var2 = var1.questDeliveryOverride;
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var2 = var5.bind(var6)(var4, var2);
            var8 = !var2;
            if(!var8) { _fun0001_ip = 147; continue _fun0001 }
 126:
            var4 = null;
            var5 = var4 == var12;
            var2 = undefined;
            if(var5) { _fun0001_ip = 143; continue _fun0001 }
 137:
            var2 = var12.userStatus;
 143:
            var8 = var4 != var2;
 147:
            if(!var8) { _fun0001_ip = 212; continue _fun0001 }
 150:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 8;
            var2 = var10[var2];
            var6 = var9.bind(var15)(var2);
            var5 = var6.isDismissed;
            var4 = var12.userStatus;
            var2 = 9;
            var2 = var10[var2];
            var2 = var9.bind(var15)(var2);
            var2 = var2.QuestContent;
            var2 = var2.QUEST_BAR_MOBILE;
            var8 = var5.bind(var6)(var4, var2);
 212:
            var2 = null;
            var5 = var2 == var12;
            var4 = undefined;
            if(var5) { _fun0001_ip = 244; continue _fun0001 }
 223:
            var5 = var12.userStatus;
            var6 = var2 == var5;
            var4 = undefined;
            if(var6) { _fun0001_ip = 244; continue _fun0001 }
 238:
            var4 = var5.claimedAt;
 244:
            var9 = var2 != var4;
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var4 = 11;
            var4 = var13[var4];
            var5 = var14.bind(var15)(var4);
            var4 = var5.useIsQuestExpired;
            var10 = var4.bind(var5)(var12);
            var4 = 12;
            var4 = var13[var4];
            var6 = var14.bind(var15)(var4);
            var5 = var6.useIsEligibleForQuests;
            var4 = {};
            var11 = _closure1_slot7;
            var11 = var11.QUESTS_BAR;
            var4['location'] = var11;
            var11 = var5.bind(var6)(var4);
            var4 = 13;
            var4 = var13[var4];
            var5 = var14.bind(var15)(var4);
            var4 = var5.useIsChannelFocused;
            var4 = var4.bind(var5)();
            var5 = 14;
            var6 = var13[var5];
            var17 = var14.bind(var15)(var6);
            var6 = var17.useCurrentNavigationRouteName;
            var18 = var6.bind(var17)();
            var5 = var13[var5];
            var17 = var14.bind(var15)(var5);
            var6 = var17.coerceGuildsRoute;
            var5 = {};
            var5['name'] = var18;
            var5 = var6.bind(var17)(var5);
            var5 = var2 != var5;
            var6 = var13[var16];
            var19 = var14.bind(var15)(var6);
            var18 = var19.useStateFromStores;
            var6 = _closure1_slot5;
            var17 = new Array(1);
            var17[0] = var6;
            var6 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0003_ip = 43; continue _fun0003 }
 16:
                    var4 = _closure1_slot5;
                    var3 = var4.isClaimingReward;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
 43:
                    return var1;
                }
            };
            var6 = var18.bind(var19)(var17, var6);
            var13 = var13[var16];
            var14 = var14.bind(var15)(var13);
            var13 = var14.useStateFromStores;
            var15 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var15;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure1_slot4;
                    var1 = var3.getKey;
                    var3 = var1.bind(var3)();
                    var1 = _closure1_slot9;
                    var1 = var3 === var1;
                    if(var1) { _fun0004_ip = 36; continue _fun0004 }
 28:
                    var2 = _closure1_slot6;
                    var1 = var3 === var2;
 36:
                    return var1;
                }
            };
            var7 = var13.bind(var14)(var7, var1);
            var1 = {};
            var1['quest'] = var12;
            var2 = var2 != var12;
            if(!var2) { _fun0001_ip = 487; continue _fun0001 }
 484:
            var2 = var11;
 487:
            if(!var2) { _fun0001_ip = 493; continue _fun0001 }
 490:
            var2 = !var10;
 493:
            if(!var2) { _fun0001_ip = 499; continue _fun0001 }
 496:
            var2 = !var9;
 499:
            if(!var2) { _fun0001_ip = 505; continue _fun0001 }
 502:
            var2 = !var8;
 505:
            if(!var2) { _fun0001_ip = 523; continue _fun0001 }
 508:
            if(var5) { _fun0001_ip = 520; continue _fun0001 }
 511:
            if(!var6) { _fun0001_ip = 517; continue _fun0001 }
 514:
            var6 = var7;
 517:
            var5 = var6;
 520:
            var2 = var5;
 523:
            if(!var2) { _fun0001_ip = 529; continue _fun0001 }
 526:
            var2 = !var4;
 529:
            if(!var2) { _fun0001_ip = 535; continue _fun0001 }
 532:
            var2 = !var3;
 535:
            var1['isVisible'] = var2;
            return var1;
        }
    };
    var _closure1_slot11 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var9 = var7[var1];
    var5 = native4;
    var1 = undefined;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.QUEST_REWARD_CODE_CLAIM_BOTTOM_SHEET_KEY;
    var _closure1_slot6 = var8;
    var8 = var5.QuestsExperimentLocations;
    var _closure1_slot7 = var8;
    var5 = var5.QuestVariants;
    var _closure1_slot8 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.CAPTCHA_MODAL_KEY;
    var _closure1_slot9 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ThemeTypes;
    var _closure1_slot10 = var5;
    var5 = 19;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/native/QuestHooks.native.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useMobileQuestDockHeight() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = _closure1_slot11;
            var4 = undefined;
            var2 = var2.bind(var4)();
            var3 = var2.isVisible;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 6;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useQuestDockExternalOffset;
            var2 = var1.bind(var2)();
            var1 = 0;
            if(!var3) { _fun0005_ip = 57; continue _fun0005 }
 54:
            var1 = var2;
 57:
            return var1;
        }
    };
    var3['useMobileQuestDockHeight'] = var5;
    var3['useIsMobileQuestDockVisible'] = var4;
    var4 = function useQuestGameLogotypeAssetUrl(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var3 = 15;
        var3 = var4[var3];
        var4 = undefined;
        var3 = var5.bind(var4)(var3);
        var5 = var3.bind(var4)();
        var _closure2_slot1 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 16;
                var2 = var4[var2];
                var7 = undefined;
                var5 = var3.bind(var7)(var2);
                var4 = var5.isThemeDark;
                var3 = _closure2_slot1;
                var4 = var4.bind(var5)(var3);
                var3 = _closure1_slot10;
                if(var4) { _fun0006_ip = 58; continue _fun0006 }
 50:
                var5 = var3.LIGHT;
                _fun0006_ip = 64; continue _fun0006;
 58:
                var5 = var3.DARK;
 64:
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 17;
                var3 = var8[var1];
                var4 = var6.bind(var7)(var3);
                var3 = var4.getQuestAsset;
                var2 = _closure2_slot0;
                var1 = var8[var1];
                var1 = var6.bind(var7)(var1);
                var1 = var1.QuestAssetType;
                var1 = var1.LOGO_TYPE;
                var1 = var3.bind(var4)(var2, var1, var5);
                var1 = var1.url;
                return var1;
            }
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
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var7 = _closure1_slot0;
                var3 = _closure1_slot2;
                var9 = 17;
                var1 = var3[var9];
                var8 = undefined;
                var6 = var7.bind(var8)(var1);
                var5 = var6.getQuestAsset;
                var2 = _closure2_slot0;
                var3 = var3[var9];
                var3 = var7.bind(var8)(var3);
                var3 = var3.QuestAssetType;
                var3 = var3.HERO;
                var5 = var5.bind(var6)(var2, var3);
                var2 = var2.config;
                var2 = var2.assets;
                var3 = var2.questBarHeroVideo;
                var2 = null;
                var3 = var2 != var3;
                if(!var3) { _fun0007_ip = 185; continue _fun0007 }
 91:
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var9];
                var10 = var6.bind(var8)(var3);
                var7 = var10.resolveAsset;
                var11 = _closure2_slot0;
                var6 = var11.id;
                var1 = var11.config;
                var1 = var1.assets;
                var3 = var1.questBarHeroVideo;
                var1 = {};
                var11 = var11.config;
                var13 = var11.features;
                var12 = var13.includes;
                var11 = _closure1_slot8;
                var11 = var11.QUESTS_CDN;
                var11 = var12.bind(var13)(var11);
                var1['newCdn'] = var11;
                var2 = var7.bind(var10)(var6, var3, var1);
 185:
                var1 = {};
                var3 = var5.isAnimated;
                var7 = var5.url;
                if(var3) { _fun0007_ip = 206; continue _fun0007 }
 201:
                var3 = var7;
                _fun0007_ip = 246; continue _fun0007;
 206:
                var6 = var7.replace;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var9];
                var4 = var5.bind(var8)(var4);
                var5 = var4.EXTENSION_RE;
                var4 = '.png';
                var3 = var6.bind(var7)(var5, var4);
 246:
                var1['staticUrl'] = var3;
                var1['videoAsset'] = var2;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useQuestDockHeroAsset'] = var4;
    var2 = function useShouldAllowMobileVideoTask(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var8 = arg1;
            var1 = arg2;
            var _closure2_slot0 = var8;
            var6 = var1.location;
            var5 = var1.autoTrackExposure;
            var7 = _closure1_slot3;
            var4 = var7.useMemo;
            var3 = new Array(1);
            var3[0] = var8;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
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
            var2 = var4.bind(var7)(var2, var3);
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 18;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.useIsMobileVideoQuestExperimentEnabled;
            var1 = {};
            var1['location'] = var6;
            var1['autoTrackExposure'] = var5;
            var1 = var3.bind(var4)(var1);
            if(!var1) { _fun0008_ip = 106; continue _fun0008 }
 103:
            var1 = var2;
 106:
            return var1;
        }
    };
    var3['useShouldAllowMobileVideoTask'] = var2;
    return var1;
})();