// app/modules/quests/native/QuestHome.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var12 = 1;
    var7 = var6[var12];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.View;
    var _closure1_slot5 = var9;
    var9 = var4.ActivityIndicator;
    var _closure1_slot6 = var9;
    var11 = var4.StyleSheet;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.QuestsExperimentLocations;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserSettingsSections;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.spacing;
    var4 = var4.PX_16;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['flex'] = var12;
    var4['container'] = var10;
    var10 = {};
    var14 = var11.absoluteFillObject;
    var15 = var10;
    var11 = copyDataProperties(var15, var14);
    var12 = 'center';
    var11 = 'justifyContent';
    var10[var11] = var12;
    var11 = 'alignItems';
    var10[var11] = var12;
    var4['loadingContainer'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot12 = var4;
    var4 = var7.memo;
    var2 = function QuestHome(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var9 = var2.containerStyle;
            var17 = var2.isNavigationComplete;
            var1 = var2.scrollToQuestId;
            var _closure2_slot0 = var1;
            var5 = var2.ListEmptyComponent;
            var14 = var2.ListFooterComponent;
            var6 = undefined;
            var _closure2_slot2 = var6;
            var _closure2_slot3 = var6;
            var _closure2_slot4 = var6;
            var _closure2_slot5 = var6;
            var _closure2_slot6 = var6;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = 11;
            var3 = var2[var3];
            var10 = var4.bind(var6)(var3);
            var8 = var10.useIsEligibleForQuests;
            var3 = {};
            var11 = _closure1_slot8;
            var11 = var11.QUEST_HOME_MOBILE;
            var3['location'] = var11;
            var18 = var8.bind(var10)(var3);
            var _closure2_slot1 = var18;
            var3 = _closure1_slot12;
            var8 = var3.bind(var6)();
            var10 = _closure1_slot1;
            var3 = 12;
            var3 = var2[var3];
            var3 = var10.bind(var6)(var3);
            var3 = var3.bind(var6)();
            var20 = var3.bottom;
            var3 = 13;
            var3 = var2[var3];
            var11 = var4.bind(var6)(var3);
            var10 = var11.useVirtualCurrencyMobileEnabled;
            var3 = {};
            var12 = 'quest_home';
            var3['location'] = var12;
            var3 = var10.bind(var11)(var3);
            var3 = var3.enabled;
            var26 = 14;
            var2 = var2[var26];
            var2 = var4.bind(var6)(var2);
            var2 = var2.MOBILE_ORBS_INTRO_QUEST_ID;
            var2 = var1 === var2;
            if(!var2) { _fun0001_ip = 216; continue _fun0001 }
 213:
            var2 = var3;
 216:
            var25 = _closure1_slot0;
            var24 = _closure1_slot2;
            var3 = var24[var26];
            var11 = var25.bind(var6)(var3);
            var10 = var11.useFilteredQuests;
            var3 = var24[var26];
            var3 = var25.bind(var6)(var3);
            var3 = var3.QuestTabs;
            var4 = var3.ALL;
            var3 = {};
            var3 = var10.bind(var11)(var4, var3, var2);
            var13 = var3.quests;
            _closure2_slot2 = var13;
            var4 = var3.isFetchingCurrentQuests;
            var3 = var3.hasFetched;
            var10 = var24[var26];
            var11 = var25.bind(var6)(var10);
            var10 = var11.useExpiredQuestsMap;
            var10 = var10.bind(var11)();
            _closure2_slot3 = var10;
            var23 = _closure1_slot4;
            var12 = var23.useMemo;
            var11 = new Array(2);
            var11[0] = var13;
            var11[1] = var10;
            var10 = function() {
                var3 = _closure2_slot2;
                var2 = var3.filter;
                var1 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var3 = arg1;
                        var4 = var3.userStatus;
                        var1 = null;
                        var5 = var1 == var4;
                        var2 = undefined;
                        if(var5) { _fun0002_ip = 26; continue _fun0002 }
 20:
                        var2 = var4.completedAt;
 26:
                        var2 = var1 != var2;
                        var5 = _closure2_slot3;
                        var4 = var5.get;
                        var3 = var3.id;
                        var3 = var4.bind(var5)(var3);
                        var1 = var1 != var3;
                        if(!var1) { _fun0002_ip = 62; continue _fun0002 }
 59:
                        var1 = var3;
 62:
                        var1 = !var1;
                        if(var1) { _fun0002_ip = 71; continue _fun0002 }
 68:
                        var1 = var2;
 71:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16 = var12.bind(var23)(var10, var11);
            _closure2_slot4 = var16;
            var10 = {};
            var12 = var23.useMemo;
            var11 = new Array(2);
            var11[0] = var1;
            var11[1] = var16;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 == var3;
                    if(var3) { _fun0003_ip = 40; continue _fun0003 }
 16:
                    var4 = _closure2_slot4;
                    var3 = var4.findIndex;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure2_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2);
 40:
                    return var1;
                }
            };
            var1 = var12.bind(var23)(var1, var11);
            var10['scrollToIndex'] = var1;
            var10['isMobileOrbsOnboarding'] = var2;
            var1 = function(arg1) {
                var2 = arg1;
                var13 = var2.scrollToIndex;
                var _closure3_slot0 = var13;
                var11 = var2.isMobileOrbsOnboarding;
                var _closure3_slot1 = var11;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 9;
                var2 = var4[var2];
                var15 = undefined;
                var5 = var3.bind(var15)(var2);
                var4 = var5.useStateFromStores;
                var2 = _closure1_slot7;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() {
                    var1 = _closure1_slot7;
                    var1 = var1.useReducedMotion;
                    return var1;
                };
                var14 = var4.bind(var5)(var3, var2);
                var _closure3_slot2 = var14;
                var10 = _closure1_slot4;
                var3 = var10.useRef;
                var2 = null;
                var7 = var3.bind(var10)(var2);
                var _closure3_slot3 = var7;
                var3 = var10.useRef;
                var2 = {};
                var5 = {};
                var4 = 0;
                var5['scrollY'] = var4;
                var2['parent'] = var5;
                var5 = {};
                var2['children'] = var5;
                var2 = var3.bind(var10)(var2);
                var _closure3_slot4 = var2;
                var6 = var10.useCallback;
                var5 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var8 = arg1;
                        var1 = global;
                        var3 = var1.Object;
                        var2 = var3.keys;
                        var1 = _closure3_slot4;
                        var1 = var1.current;
                        var1 = var1.children;
                        var6 = var2.bind(var3)(var1);
                        var1 = var6.length;
                        var5 = 0;
                        var2 = var5 < var1;
                        var1 = undefined;
                        var4 = null;
                        var3 = undefined;
                        if(!var2) { _fun0004_ip = 139; continue _fun0004 }
 58:
                        var10 = var6[var5];
                        var2 = var4 != var8;
                        if(!var2) { _fun0004_ip = 73; continue _fun0004 }
 69:
                        var2 = var10 !== var8;
 73:
                        if(var2) { _fun0004_ip = 101; continue _fun0004 }
 76:
                        var9 = _closure3_slot4;
                        var9 = var9.current;
                        var9 = var9.children;
                        var9 = var9[var10];
                        var2 = var4 == var9;
                        var3 = var9;
 101:
                        if(var2) { _fun0004_ip = 114; continue _fun0004 }
 104:
                        var9 = var3.calculateVisibility;
                        var2 = var4 == var9;
 114:
                        if(var2) { _fun0004_ip = 127; continue _fun0004 }
 117:
                        var2 = var3.calculateVisibility;
                        var2 = var2.bind(var3)();
 127:
                        var5 = var5 + 1;
                        var2 = var6.length;
                        if(var5 < var2) { _fun0004_ip = 58; continue _fun0004 }
 139:
                        return var1;
                    }
                };
                var3 = new Array(0);
                var3 = var6.bind(var10)(var5, var3);
                var _closure3_slot5 = var3;
                var9 = var10.useCallback;
                var6 = new Array(1);
                var6[0] = var3;
                var5 = function(arg1) {
                    var2 = _closure3_slot4;
                    var2 = var2.current;
                    var3 = var2.parent;
                    var2 = arg1;
                    var2 = var2.nativeEvent;
                    var2 = var2.contentOffset;
                    var2 = var2.y;
                    var3['scrollY'] = var2;
                    var2 = _closure3_slot5;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var6 = var9.bind(var10)(var5, var6);
                var12 = var10.useCallback;
                var9 = new Array(1);
                var9[0] = var3;
                var5 = function(arg1) {
                    var2 = _closure3_slot4;
                    var2 = var2.current;
                    var3 = var2.parent;
                    var2 = arg1;
                    var2 = var2.nativeEvent;
                    var2 = var2.layout;
                    var3['layout'] = var2;
                    var2 = _closure3_slot5;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var5 = var12.bind(var10)(var5, var9);
                var12 = var10.useState;
                var9 = false;
                var12 = var12.bind(var10)(var9);
                var9 = _closure1_slot3;
                var8 = 2;
                var8 = var9.bind(var15)(var12, var8);
                var15 = var8[var4];
                var _closure3_slot6 = var15;
                var4 = 1;
                var4 = var8[var4];
                var _closure3_slot7 = var4;
                var9 = var10.useCallback;
                var8 = function() {
                    var3 = _closure3_slot7;
                    var1 = undefined;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var4 = new Array(0);
                var4 = var9.bind(var10)(var8, var4);
                var9 = var10.useCallback;
                var8 = new Array(1);
                var8[0] = var3;
                var3 = function(arg1, arg2) {
                    var3 = arg2;
                    var5 = _closure3_slot4;
                    var2 = var5.current;
                    var4 = var2.children;
                    var2 = {};
                    var5 = var5.current;
                    var5 = var5.children;
                    var7 = var5[var3];
                    var8 = var2;
                    var5 = copyDataProperties(var8, var7);
                    var5 = arg1;
                    var5 = var5.nativeEvent;
                    var6 = var5.layout;
                    var5 = 'layout';
                    var2[var5] = var6;
                    var4[var3] = var2;
                    var2 = _closure3_slot5;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                };
                var3 = var9.bind(var10)(var3, var8);
                var12 = var10.useCallback;
                var9 = new Array(1);
                var9[0] = var14;
                var8 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var1 = _closure3_slot3;
                        var2 = var1.current;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0005_ip = 100; continue _fun0005 }
 18:
                        var1 = _closure3_slot3;
                        var3 = var1.current;
                        var2 = var3.scrollToIndex;
                        var1 = {};
                        var5 = arg1;
                        var1['index'] = var5;
                        var4 = _closure3_slot2;
                        var4 = !var4;
                        var1['animated'] = var4;
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var4 = 7;
                        var5 = var5[var4];
                        var4 = undefined;
                        var4 = var6.bind(var4)(var5);
                        var4 = var4.spacing;
                        var4 = var4.PX_8;
                        var1['viewOffset'] = var4;
                        var1 = var2.bind(var3)(var1);
 100:
                        var1 = undefined;
                        return var1;
                    }
                };
                var12 = var12.bind(var10)(var8, var9);
                var _closure3_slot8 = var12;
                var9 = var10.useEffect;
                var8 = new Array(5);
                var8[0] = var15;
                var8[1] = var14;
                var8[2] = var13;
                var8[3] = var12;
                var8[4] = var11;
                var1 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var3 = _closure3_slot0;
                        var2 = null;
                        var2 = var2 != var3;
                        if(!var2) { _fun0006_ip = 30; continue _fun0006 }
 16:
                        var4 = _closure3_slot0;
                        var3 = -1;
                        var2 = var3 !== var4;
 30:
                        if(!var2) { _fun0006_ip = 37; continue _fun0006 }
 33:
                        var2 = _closure3_slot6;
 37:
                        if(!var2) { _fun0006_ip = 50; continue _fun0006 }
 40:
                        var4 = _closure3_slot1;
                        var3 = true;
                        var2 = var3 !== var4;
 50:
                        if(!var2) { _fun0006_ip = 112; continue _fun0006 }
 53:
                        var2 = _closure3_slot8;
                        var1 = _closure3_slot0;
                        var4 = undefined;
                        var1 = var2.bind(var4)(var1);
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 10;
                        var2 = var5[var2];
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.clearSubsection;
                        var1 = _closure1_slot9;
                        var1 = var1.QUESTS;
                        var1 = var2.bind(var3)(var1);
 112:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var9.bind(var10)(var1, var8);
                var1 = {};
                var1['scrollViewRef'] = var7;
                var1['handleListScroll'] = var6;
                var1['handleListLayout'] = var5;
                var1['handleListLoad'] = var4;
                var1['handleQuestCardLayout'] = var3;
                var1['visibilityRef'] = var2;
                return var1;
            };
            var1 = var1.bind(var6)(var10);
            var19 = var1.scrollViewRef;
            var12 = var1.handleListScroll;
            var13 = var1.handleListLayout;
            var11 = var1.handleListLoad;
            var10 = var1.handleQuestCardLayout;
            _closure2_slot5 = var10;
            var1 = var1.visibilityRef;
            _closure2_slot6 = var1;
            var10 = _closure1_slot1;
            var1 = 15;
            var1 = var24[var1];
            var21 = var10.bind(var6)(var1);
            var1 = {};
            var10 = 16;
            var22 = var24[var10];
            var22 = var25.bind(var6)(var22);
            var22 = var22.ImpressionNames;
            var22 = var22.QUEST_HOME;
            var1['name'] = var22;
            var22 = var24[var10];
            var22 = var25.bind(var6)(var22);
            var22 = var22.ImpressionTypes;
            var22 = var22.VIEW;
            var1['type'] = var22;
            var22 = {};
            var24 = var24[var26];
            var24 = var25.bind(var6)(var24);
            var24 = var24.QuestTabs;
            var24 = var24.ALL;
            var22['tab'] = var24;
            var1['properties'] = var22;
            var1 = var21.bind(var6)(var1);
            var22 = var23.useEffect;
            var21 = new Array(1);
            var21[0] = var18;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = _closure2_slot1;
                    if(!var1) { _fun0007_ip = 51; continue _fun0007 }
 10:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var2 = var1.QuestHomeOpenTriggerPoint;
                    var1 = var2.trigger;
                    var1 = var1.bind(var2)();
 51:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var22.bind(var23)(var1, var21);
            var1 = null;
            if(!var18) { _fun0001_ip = 1077; continue _fun0001 }
 593:
            if(!var17) { _fun0001_ip = 1013; continue _fun0001 }
 599:
            if(var4) { _fun0001_ip = 1013; continue _fun0001 }
 605:
            if(!var3) { _fun0001_ip = 1013; continue _fun0001 }
 611:
            var3 = var16.length;
            var4 = 0;
            if(!(var4 !== var3)) { _fun0001_ip = 999; continue _fun0001 }
 625:
            if(!var2) { _fun0001_ip = 637; continue _fun0001 }
 628:
            var3 = var16.length;
            var2 = var3 > var4;
 637:
            if(!var2) { _fun0001_ip = 661; continue _fun0001 }
 640:
            var4 = var16.some;
            var3 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = arg1;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 18;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.hasVirtualCurrencyReward;
                    var1 = var3.config;
                    var1 = var4.bind(var5)(var1);
                    if(!var1) { _fun0008_ip = 74; continue _fun0008 }
 47:
                    var4 = var3.userStatus;
                    var3 = null;
                    var5 = var3 == var4;
                    var2 = undefined;
                    if(var5) { _fun0008_ip = 70; continue _fun0008 }
 64:
                    var2 = var4.claimedAt;
 70:
                    var1 = var3 == var2;
 74:
                    return var1;
                }
            };
            var3 = var4.bind(var16)(var3);
            var2 = !var3;
 661:
            if(!var2) { _fun0001_ip = 780; continue _fun0001 }
 664:
            var18 = _closure1_slot1;
            var23 = _closure1_slot2;
            var2 = 19;
            var2 = var23[var2];
            var4 = var18.bind(var6)(var2);
            var3 = var4.open;
            var2 = {};
            var17 = 'NO_ORBS_QUESTS_AVAILABLE';
            var2['key'] = var17;
            var17 = 20;
            var17 = var23[var17];
            var17 = var18.bind(var6)(var17);
            var2['icon'] = var17;
            var22 = _closure1_slot0;
            var17 = 21;
            var18 = var23[var17];
            var18 = var22.bind(var6)(var18);
            var21 = var18.intl;
            var18 = var21.string;
            var17 = var23[var17];
            var17 = var22.bind(var6)(var17);
            var17 = var17.t;
            var17 = var17.Au8ug4;
            var17 = var18.bind(var21)(var17);
            var2['content'] = var17;
            var2 = var3.bind(var4)(var2);
 780:
            var4 = _closure1_slot10;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var2 = 22;
            var2 = var18[var2];
            var2 = var17.bind(var6)(var2);
            var3 = var2.FlashList;
            var2 = {};
            var2['ref'] = var19;
            var19 = {};
            var21 = _closure1_slot11;
            var19['padding'] = var21;
            var19['paddingBottom'] = var20;
            var2['contentContainerStyle'] = var19;
            var20 = var8.container;
            var19 = new Array(2);
            var19[0] = var20;
            var19[1] = var9;
            var2['style'] = var19;
            var19 = 21;
            var20 = var18[var19];
            var20 = var17.bind(var6)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var19 = var18[var19];
            var19 = var17.bind(var6)(var19);
            var19 = var19.t;
            var19 = var19.JALI2N;
            var19 = var20.bind(var21)(var19);
            var2['accessibilityLabel'] = var19;
            var2['data'] = var16;
            var16 = function renderItem(arg1) {
                var2 = arg1;
                var1 = var2.item;
                var _closure3_slot0 = var1;
                var2 = var2.index;
                var _closure3_slot1 = var2;
                var5 = _closure1_slot10;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 23;
                var2 = var9[var2];
                var4 = undefined;
                var2 = var8.bind(var4)(var2);
                var3 = var2.QuestContentImpressionTrackerNative;
                var2 = {};
                var2['questOrQuests'] = var1;
                var7 = 24;
                var10 = var9[var7];
                var10 = var8.bind(var4)(var10);
                var10 = var10.QuestContent;
                var10 = var10.QUEST_HOME_MOBILE;
                var2['questContent'] = var10;
                var10 = false;
                var2['trackGuildAndChannelMetadata'] = var10;
                var10 = _closure2_slot6;
                var2['visibilityRef'] = var10;
                var7 = var9[var7];
                var7 = var8.bind(var4)(var7);
                var7 = var7.QuestContent;
                var7 = var7.QUEST_HOME_MOBILE;
                var2['sourceQuestContent'] = var7;
                var6 = function children() {
                    var5 = _closure1_slot10;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 25;
                    var1 = var8[var1];
                    var4 = undefined;
                    var1 = var7.bind(var4)(var1);
                    var3 = var1.QuestCard;
                    var2 = {};
                    var1 = _closure3_slot0;
                    var2['quest'] = var1;
                    var9 = _closure3_slot1;
                    var2['questContentPosition'] = var9;
                    var6 = _closure1_slot11;
                    var2['containerPadding'] = var6;
                    var6 = 24;
                    var6 = var8[var6];
                    var6 = var7.bind(var4)(var6);
                    var6 = var6.QuestContent;
                    var6 = var6.QUEST_HOME_MOBILE;
                    var2['sourceQuestContent'] = var6;
                    var1 = var1.id;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                };
                var2['children'] = var6;
                var1 = var1.id;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var2['renderItem'] = var16;
            var16 = 25;
            var16 = var18[var16];
            var16 = var17.bind(var6)(var16);
            var16 = var16.ESTIMATED_CARD_HEIGHT;
            var2['estimatedItemSize'] = var16;
            var16 = false;
            var2['showsHorizontalScrollIndicator'] = var16;
            var15 = function CellRendererComponent(arg1) {
                var6 = arg1;
                var _closure3_slot0 = var6;
                var4 = _closure1_slot10;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 22;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.CellContainer;
                var1 = {};
                var8 = var1;
                var7 = var6;
                var6 = copyDataProperties(var8, var7);
                var6 = function onLayout(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                        var3 = arg1;
                        var5 = _closure2_slot4;
                        var2 = _closure3_slot0;
                        var2 = var2.index;
                        var2 = var5[var2];
                        var5 = null;
                        if(!(var5 != var2)) { _fun0009_ip = 49; continue _fun0009 }
 32:
                        var5 = _closure2_slot5;
                        var4 = var2.id;
                        var2 = undefined;
                        var2 = var5.bind(var2)(var3, var4);
 49:
                        var2 = _closure3_slot0;
                        var1 = var2.onLayout;
                        var1 = var1.bind(var2)(var3);
                        var1 = undefined;
                        return var1;
                    }
                };
                var5 = 'onLayout';
                var1[var5] = var6;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var2['CellRendererComponent'] = var15;
            var2['ListFooterComponent'] = var14;
            var2['onLayout'] = var13;
            var2['onScroll'] = var12;
            var2['onLoad'] = var11;
            var2['scrollEventThrottle'] = var10;
            var2 = var4.bind(var6)(var3, var2);
            _fun0001_ip = 1011; continue _fun0001;
 999:
            var4 = _closure1_slot10;
            var3 = {};
            var2 = var4.bind(var6)(var5, var3);
 1011:
            _fun0001_ip = 1074; continue _fun0001;
 1013:
            var5 = _closure1_slot10;
            var4 = _closure1_slot5;
            var3 = {};
            var10 = var8.loadingContainer;
            var8 = new Array(2);
            var8[0] = var10;
            var8[1] = var9;
            var3['style'] = var8;
            var8 = _closure1_slot6;
            var7 = {};
            var9 = true;
            var7['animating'] = var9;
            var7 = var5.bind(var6)(var8, var7);
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
 1074:
            var1 = var2;
 1077:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestHome.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();