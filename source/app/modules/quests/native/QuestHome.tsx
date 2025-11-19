// app/modules/quests/native/QuestHome.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function EmptyStateNoQuestsAvailable() {
        var12 = _closure1_slot0;
        var13 = _closure1_slot2;
        var2 = 11;
        var2 = var13[var2];
        var4 = undefined;
        var3 = var12.bind(var4)(var2);
        var2 = var3.useNavigation;
        var7 = var2.bind(var3)();
        var _closure2_slot0 = var7;
        var6 = _closure1_slot4;
        var3 = var6.useCallback;
        var2 = new Array(1);
        var2[0] = var7;
        var1 = function() {
            var2 = _closure2_slot0;
            var1 = var2.goBack;
            var1 = var1.bind(var2)();
            return var1;
        };
        var8 = var3.bind(var6)(var1, var2);
        var3 = _closure1_slot10;
        var2 = _closure1_slot1;
        var1 = 12;
        var1 = var13[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var7 = _closure1_slot10;
        var5 = 13;
        var5 = var13[var5];
        var5 = var12.bind(var4)(var5);
        var6 = var5.Button;
        var5 = {};
        var9 = 'secondary';
        var5['variant'] = var9;
        var9 = 14;
        var10 = var13[var9];
        var10 = var12.bind(var4)(var10);
        var11 = var10.intl;
        var10 = var11.string;
        var9 = var13[var9];
        var9 = var12.bind(var4)(var9);
        var9 = var9.t;
        var9 = var9./g10LC;
        var9 = var10.bind(var11)(var9);
        var5['text'] = var9;
        var5['onPress'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['action'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function EmptyStateFiltered(arg1) {
        var1 = arg1;
        var11 = var1.onClearFilters;
        var4 = _closure1_slot10;
        var2 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 12;
        var1 = var9[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var10 = _closure1_slot10;
        var8 = _closure1_slot0;
        var5 = 13;
        var5 = var9[var5];
        var5 = var8.bind(var3)(var5);
        var7 = var5.Button;
        var6 = {};
        var5 = 'secondary';
        var6['variant'] = var5;
        var5 = 14;
        var12 = var9[var5];
        var12 = var8.bind(var3)(var12);
        var14 = var12.intl;
        var13 = var14.string;
        var12 = var9[var5];
        var12 = var8.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12.urZl31;
        var12 = var13.bind(var14)(var12);
        var6['text'] = var12;
        var6['onPress'] = var11;
        var6 = var10.bind(var3)(var7, var6);
        var1['action'] = var6;
        var6 = var9[var5];
        var6 = var8.bind(var3)(var6);
        var10 = var6.intl;
        var7 = var10.string;
        var6 = var9[var5];
        var6 = var8.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.PBfFnx;
        var6 = var7.bind(var10)(var6);
        var1['title'] = var6;
        var6 = var9[var5];
        var6 = var8.bind(var3)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.nwdKFC;
        var5 = var6.bind(var7)(var5);
        var1['subtitle'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot14 = var1;
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
case 0:
            var1 = arg1;
            var9 = var1.containerStyle;
            var5 = var1.isNavigationComplete;
            var26 = var1.scrollToQuestId;
            var _closure2_slot0 = var26;
            var3 = var1.filters;
            var _closure2_slot1 = var3;
            var23 = var1.sortMethod;
            var _closure2_slot2 = var23;
            var10 = var1.onClearFilters;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var1 = 15;
            var1 = var19[var1];
            var6 = undefined;
            var4 = var18.bind(var6)(var1);
            var2 = var4.useIsEligibleForQuests;
            var1 = {};
            var8 = _closure1_slot8;
            var8 = var8.QUEST_HOME_MOBILE;
            var1['location'] = var8;
            var11 = var2.bind(var4)(var1);
            var _closure2_slot3 = var11;
            var1 = _closure1_slot12;
            var8 = var1.bind(var6)();
            var25 = _closure1_slot1;
            var12 = 16;
            var1 = var19[var12];
            var1 = var25.bind(var6)(var1);
            var1 = var1.bind(var6)();
            var21 = var1.bottom;
            var1 = 17;
            var2 = var19[var1];
            var14 = var18.bind(var6)(var2);
            var13 = var14.useFilteredQuests;
            var2 = var19[var1];
            var2 = var18.bind(var6)(var2);
            var2 = var2.QuestTabs;
            var4 = var2.ALL;
            var20 = _closure1_slot4;
            var17 = var20.useMemo;
            var15 = new Array(2);
            var15[0] = var3;
            var15[1] = var23;
            var2 = function() {
                var1 = {};
                var3 = _closure2_slot1;
                var1['filters'] = var3;
                var2 = _closure2_slot2;
                var1['sortMethod'] = var2;
                return var1;
            };
            var2 = var17.bind(var20)(var2, var15);
            var2 = var13.bind(var14)(var4, var2);
            var22 = var2.quests;
            var _closure2_slot4 = var22;
            var13 = var2.excludedQuests;
            var _closure2_slot5 = var13;
            var4 = var2.isFetchingCurrentQuests;
            var2 = var2.hasFetched;
            var _closure2_slot6 = var2;
            var14 = var19[var1];
            var15 = var18.bind(var6)(var14);
            var14 = var15.useExpiredQuestsMap;
            var14 = var14.bind(var15)();
            var _closure2_slot7 = var14;
            var20 = _closure1_slot4;
            var17 = var20.useMemo;
            var15 = new Array(2);
            var15[0] = var22;
            var15[1] = var14;
            var14 = function() {
                var3 = _closure2_slot4;
                var2 = var3.filter;
                var1 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var3 = arg1;
                        var4 = var3.userStatus;
                        var1 = null;
                        var5 = var1 == var4;
                        var2 = undefined;
                        if(var5) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                        var2 = var4.completedAt;
case 2:
                        var2 = var1 != var2;
                        var5 = _closure2_slot7;
                        var4 = var5.get;
                        var3 = var3.id;
                        var3 = var4.bind(var5)(var3);
                        var1 = var1 != var3;
                        if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var1 = var3;
case 4:
                        var1 = !var1;
                        if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                        var1 = var2;
case 6:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var17 = var17.bind(var20)(var14, var15);
            var _closure2_slot8 = var17;
            var14 = var19[var1];
            var15 = var18.bind(var6)(var14);
            var14 = var15.useShouldShowPreviewToolTab;
            var14 = var14.bind(var15)();
            var _closure2_slot9 = var14;
            var14 = {};
            var24 = _closure1_slot4;
            var20 = var24.useMemo;
            var15 = new Array(3);
            var15[0] = var26;
            var15[1] = var17;
            var15[2] = var13;
            var13 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 18;
                    var5 = var5[var2];
                    var2 = undefined;
                    var8 = var6.bind(var2)(var5);
                    var7 = var8.findQuestOrReplacement;
                    var6 = _closure2_slot0;
                    var5 = _closure2_slot8;
                    var2 = _closure2_slot5;
                    var2 = var7.bind(var8)(var6, var5, var2);
                    var _closure3_slot0 = var2;
                    var5 = var1 == var2;
                    var2 = null;
                    if(var5) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var5 = _closure2_slot8;
                    var4 = var5.findIndex;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure3_slot0;
                        var1 = var1.id;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var2 = var4.bind(var5)(var3);
case 10:
                    return var2;
case 8:
                    return var1;
                }
            };
            var13 = var20.bind(var24)(var13, var15);
            var14['scrollToIndex'] = var13;
            var13 = function(arg1) {
                var2 = arg1;
                var12 = var2.scrollToIndex;
                var _closure3_slot0 = var12;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 9;
                var2 = var4[var2];
                var14 = undefined;
                var5 = var3.bind(var14)(var2);
                var4 = var5.useStateFromStores;
                var2 = _closure1_slot7;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() {
                    var1 = _closure1_slot7;
                    var1 = var1.useReducedMotion;
                    return var1;
                };
                var13 = var4.bind(var5)(var3, var2);
                var _closure3_slot1 = var13;
                var4 = _closure1_slot4;
                var3 = var4.useRef;
                var2 = null;
                var7 = var3.bind(var4)(var2);
                var _closure3_slot2 = var7;
                var5 = _closure1_slot4;
                var3 = var5.useRef;
                var2 = {};
                var6 = {};
                var4 = 0;
                var6['scrollY'] = var4;
                var2['parent'] = var6;
                var6 = {};
                var2['children'] = var6;
                var2 = var3.bind(var5)(var2);
                var _closure3_slot3 = var2;
                var9 = _closure1_slot4;
                var6 = var9.useCallback;
                var5 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var8 = arg1;
                        var1 = global;
                        var3 = var1.Object;
                        var2 = var3.keys;
                        var1 = _closure3_slot3;
                        var1 = var1.current;
                        var1 = var1.children;
                        var6 = var2.bind(var3)(var1);
                        var1 = var6.length;
                        var5 = 0;
                        var2 = var5 < var1;
                        var1 = undefined;
                        var4 = null;
                        var3 = undefined;
                        if(!var2) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                        var10 = var6[var5];
                        var2 = var4 != var8;
                        if(!var2) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                        var2 = var10 !== var8;
case 14:
                        if(var2) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                        var9 = _closure3_slot3;
                        var9 = var9.current;
                        var9 = var9.children;
                        var9 = var9[var10];
                        var2 = var4 == var9;
                        var3 = var9;
case 16:
                        if(var2) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                        var9 = var3.calculateVisibility;
                        var2 = var4 == var9;
case 18:
                        if(var2) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                        var2 = var3.calculateVisibility;
                        var2 = var2.bind(var3)();
case 20:
                        var5 = var5 + 1;
                        var2 = var6.length;
                        if(var5 < var2) { _fun0004_ip = 13; continue _fun0004 }
case 12:
                        return var1;
                    }
                };
                var3 = new Array(0);
                var3 = var6.bind(var9)(var5, var3);
                var _closure3_slot4 = var3;
                var10 = _closure1_slot4;
                var9 = var10.useCallback;
                var6 = new Array(1);
                var6[0] = var3;
                var5 = function(arg1) {
                    var2 = _closure3_slot3;
                    var2 = var2.current;
                    var3 = var2.parent;
                    var2 = arg1;
                    var2 = var2.nativeEvent;
                    var2 = var2.contentOffset;
                    var2 = var2.y;
                    var3['scrollY'] = var2;
                    var2 = _closure3_slot4;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var6 = var9.bind(var10)(var5, var6);
                var11 = _closure1_slot4;
                var10 = var11.useCallback;
                var9 = new Array(1);
                var9[0] = var3;
                var5 = function(arg1) {
                    var2 = _closure3_slot3;
                    var2 = var2.current;
                    var3 = var2.parent;
                    var2 = arg1;
                    var2 = var2.nativeEvent;
                    var2 = var2.layout;
                    var3['layout'] = var2;
                    var2 = _closure3_slot4;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var5 = var10.bind(var11)(var5, var9);
                var11 = _closure1_slot4;
                var10 = var11.useState;
                var9 = false;
                var11 = var10.bind(var11)(var9);
                var10 = _closure1_slot3;
                var9 = 2;
                var9 = var10.bind(var14)(var11, var9);
                var14 = var9[var4];
                var _closure3_slot5 = var14;
                var4 = 1;
                var4 = var9[var4];
                var _closure3_slot6 = var4;
                var11 = _closure1_slot4;
                var10 = var11.useCallback;
                var9 = function() {
                    var3 = _closure3_slot6;
                    var1 = undefined;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var4 = new Array(0);
                var4 = var10.bind(var11)(var9, var4);
                var11 = _closure1_slot4;
                var10 = var11.useCallback;
                var9 = new Array(1);
                var9[0] = var3;
                var3 = function(arg1, arg2) {
                    var3 = arg2;
                    var5 = _closure3_slot3;
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
                    var2 = _closure3_slot4;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                };
                var3 = var10.bind(var11)(var3, var9);
                var15 = _closure1_slot4;
                var11 = var15.useCallback;
                var10 = new Array(1);
                var10[0] = var13;
                var9 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var1 = _closure3_slot2;
                        var2 = var1.current;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0005_ip = 10; continue _fun0005 }
case 22:
                        var1 = _closure3_slot2;
                        var3 = var1.current;
                        var2 = var3.scrollToIndex;
                        var1 = {};
                        var5 = arg1;
                        var1['index'] = var5;
                        var4 = _closure3_slot1;
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
case 10:
                        var1 = undefined;
                        return var1;
                    }
                };
                var11 = var11.bind(var15)(var9, var10);
                var _closure3_slot7 = var11;
                var10 = _closure1_slot4;
                var9 = var10.useEffect;
                var8 = new Array(4);
                var8[0] = var14;
                var8[1] = var13;
                var8[2] = var12;
                var8[3] = var11;
                var1 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var3 = _closure3_slot0;
                        var2 = null;
                        var2 = var2 != var3;
                        if(!var2) { _fun0006_ip = 23; continue _fun0006 }
case 24:
                        var4 = _closure3_slot0;
                        var3 = -1;
                        var2 = var3 !== var4;
case 23:
                        if(!var2) { _fun0006_ip = 25; continue _fun0006 }
case 26:
                        var2 = _closure3_slot5;
case 25:
                        if(!var2) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                        var2 = _closure3_slot7;
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
case 27:
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
            var24 = var13.bind(var6)(var14);
            var20 = var24.scrollViewRef;
            var _closure2_slot10 = var20;
            var14 = var24.handleListScroll;
            var15 = var24.handleListLayout;
            var13 = var24.handleListLoad;
            var26 = var24.handleQuestCardLayout;
            var _closure2_slot11 = var26;
            var24 = var24.visibilityRef;
            var _closure2_slot12 = var24;
            var24 = 19;
            var24 = var19[var24];
            var25 = var25.bind(var6)(var24);
            var24 = {};
            var26 = 20;
            var27 = var19[var26];
            var27 = var18.bind(var6)(var27);
            var27 = var27.ImpressionNames;
            var27 = var27.QUEST_HOME;
            var24['name'] = var27;
            var26 = var19[var26];
            var26 = var18.bind(var6)(var26);
            var26 = var26.ImpressionTypes;
            var26 = var26.VIEW;
            var24['type'] = var26;
            var26 = {};
            var27 = var19[var1];
            var27 = var18.bind(var6)(var27);
            var27 = var27.QuestTabs;
            var27 = var27.ALL;
            var26['tab'] = var27;
            var24['properties'] = var26;
            var24 = var25.bind(var6)(var24);
            var27 = _closure1_slot4;
            var26 = var27.useEffect;
            var25 = new Array(1);
            var25[0] = var11;
            var24 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot3;
                    if(!var1) { _fun0007_ip = 29; continue _fun0007 }
case 30:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 21;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var2 = var1.QuestHomeOpenTriggerPoint;
                    var1 = var2.trigger;
                    var1 = var1.bind(var2)();
case 29:
                    var1 = undefined;
                    return var1;
                }
            };
            var24 = var26.bind(var27)(var24, var25);
            var27 = _closure1_slot4;
            var26 = var27.useEffect;
            var25 = new Array(4);
            var25[0] = var3;
            var25[1] = var23;
            var25[2] = var2;
            var25[3] = var20;
            var24 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot10;
                    var3 = var2.current;
                    var2 = null;
                    var2 = var2 != var3;
                    if(!var2) { _fun0008_ip = 31; continue _fun0008 }
case 32:
                    var2 = _closure2_slot6;
case 31:
                    if(!var2) { _fun0008_ip = 13; continue _fun0008 }
case 33:
                    var1 = _closure2_slot10;
                    var3 = var1.current;
                    var2 = var3.scrollToOffset;
                    var1 = {'offset': 0, 'animated': false};
                    var1 = var2.bind(var3)(var1);
case 13:
                    var1 = undefined;
                    return var1;
                }
            };
            var24 = var26.bind(var27)(var24, var25);
            var1 = var19[var1];
            var19 = var18.bind(var6)(var1);
            var18 = var19.useQuestHomeSortingFilteringAnalytics;
            var1 = {};
            var1['selectedSortMethod'] = var23;
            var1['selectedFilters'] = var3;
            var22 = var22.length;
            var1['numQuestsVisible'] = var22;
            var1 = var18.bind(var19)(var1);
            var22 = _closure1_slot4;
            var19 = var22.useCallback;
            var18 = function() {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 22;
                var2 = var4[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.popAll;
                var2 = var2.bind(var3)();
                var3 = _closure1_slot0;
                var2 = 23;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.openUserSettings;
                var2 = {};
                var5 = _closure1_slot9;
                var5 = var5.QUEST_PREVIEW_TOOL_2;
                var2['screen'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = new Array(0);
            var1 = var19.bind(var22)(var18, var1);
            var _closure2_slot13 = var1;
            var1 = null;
            if(!var11) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            if(!var5) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            if(var4) { _fun0001_ip = 36; continue _fun0001 }
case 38:
            if(!var2) { _fun0001_ip = 36; continue _fun0001 }
case 39:
            var2 = var17.length;
            var4 = 0;
            if(!(var4 !== var2)) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var11 = _closure1_slot10;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var2 = 24;
            var2 = var19[var2];
            var2 = var18.bind(var6)(var2);
            var5 = var2.FlashList;
            var2 = {};
            var2['ref'] = var20;
            var20 = {};
            var22 = _closure1_slot11;
            var20['padding'] = var22;
            var20['paddingBottom'] = var21;
            var2['contentContainerStyle'] = var20;
            var21 = var8.container;
            var20 = new Array(2);
            var20[0] = var21;
            var20[1] = var9;
            var2['style'] = var20;
            var20 = 14;
            var21 = var19[var20];
            var21 = var18.bind(var6)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var19[var20];
            var20 = var18.bind(var6)(var20);
            var20 = var20.t;
            var20 = var20.JALI2K;
            var20 = var21.bind(var22)(var20);
            var2['accessibilityLabel'] = var20;
            var2['data'] = var17;
            var17 = function renderItem(arg1) {
                var2 = arg1;
                var1 = var2.item;
                var _closure3_slot0 = var1;
                var2 = var2.index;
                var _closure3_slot1 = var2;
                var5 = _closure1_slot10;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 25;
                var2 = var9[var2];
                var4 = undefined;
                var2 = var8.bind(var4)(var2);
                var3 = var2.QuestContentImpressionTrackerNative;
                var2 = {};
                var2['questOrQuests'] = var1;
                var7 = 26;
                var10 = var9[var7];
                var10 = var8.bind(var4)(var10);
                var10 = var10.QuestContent;
                var10 = var10.QUEST_HOME_MOBILE;
                var2['questContent'] = var10;
                var10 = false;
                var2['trackGuildAndChannelMetadata'] = var10;
                var10 = _closure2_slot12;
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
                    var1 = 27;
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
                    var6 = 26;
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
            var2['renderItem'] = var17;
            var17 = 27;
            var17 = var19[var17];
            var17 = var18.bind(var6)(var17);
            var17 = var17.ESTIMATED_CARD_HEIGHT;
            var2['estimatedItemSize'] = var17;
            var17 = false;
            var2['showsHorizontalScrollIndicator'] = var17;
            var17 = function ListHeaderComponent() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot9;
                    if(!var1) { _fun0009_ip = 42; continue _fun0009 }
case 43:
                    var5 = _closure1_slot10;
                    var4 = _closure1_slot5;
                    var3 = {};
                    var7 = {};
                    var10 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var2 = 7;
                    var8 = var13[var2];
                    var2 = undefined;
                    var8 = var10.bind(var2)(var8);
                    var8 = var8.spacing;
                    var8 = var8.PX_16;
                    var7['paddingBottom'] = var8;
                    var8 = 'transparent';
                    var7['backgroundColor'] = var8;
                    var3['style'] = var7;
                    var8 = _closure1_slot10;
                    var12 = _closure1_slot0;
                    var6 = 13;
                    var6 = var13[var6];
                    var6 = var12.bind(var2)(var6);
                    var7 = var6.Button;
                    var6 = {'grow': true, 'onPress': null, 'variant': 'primary'};
                    var9 = _closure2_slot13;
                    var6['onPress'] = var9;
                    var9 = 14;
                    var10 = var13[var9];
                    var10 = var12.bind(var2)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var9 = var13[var9];
                    var9 = var12.bind(var2)(var9);
                    var9 = var9.t;
                    var9 = var9.tx5Ax5;
                    var9 = var10.bind(var11)(var9);
                    var6['text'] = var9;
                    var6 = var8.bind(var2)(var7, var6);
                    var3['children'] = var6;
                    var1 = var5.bind(var2)(var4, var3);
case 42:
                    return var1;
                }
            };
            var2['ListHeaderComponent'] = var17;
            var16 = function CellRendererComponent(arg1) {
                var6 = arg1;
                var _closure3_slot0 = var6;
                var4 = _closure1_slot10;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 24;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.CellContainer;
                var1 = {};
                var8 = var1;
                var7 = var6;
                var6 = copyDataProperties(var8, var7);
                var6 = function onLayout(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var3 = arg1;
                        var5 = _closure2_slot8;
                        var2 = _closure3_slot0;
                        var2 = var2.index;
                        var2 = var5[var2];
                        var5 = null;
                        if(!(var5 != var2)) { _fun0010_ip = 44; continue _fun0010 }
case 45:
                        var5 = _closure2_slot11;
                        var4 = var2.id;
                        var2 = undefined;
                        var2 = var5.bind(var2)(var3, var4);
case 44:
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
            var2['CellRendererComponent'] = var16;
            var2['onLayout'] = var15;
            var2['onScroll'] = var14;
            var2['onLoad'] = var13;
            var2['scrollEventThrottle'] = var12;
            var2 = var11.bind(var6)(var5, var2);
            _fun0001_ip = 46; continue _fun0001;
case 40:
            var3 = var3.length;
            if(!(var4 !== var3)) { _fun0001_ip = 47; continue _fun0001 }
case 48:
            var5 = _closure1_slot10;
            var4 = _closure1_slot14;
            var3 = {};
            var3['onClearFilters'] = var10;
            var3 = var5.bind(var6)(var4, var3);
            _fun0001_ip = 49; continue _fun0001;
case 47:
            var10 = _closure1_slot10;
            var5 = _closure1_slot13;
            var4 = {};
            var3 = var10.bind(var6)(var5, var4);
case 49:
            var2 = var3;
case 46:
            _fun0001_ip = 50; continue _fun0001;
case 36:
            var5 = _closure1_slot10;
            var4 = _closure1_slot5;
            var3 = {};
            var10 = var8.loadingContainer;
            var8 = new Array(2);
            var8[0] = var10;
            var8[1] = var9;
            var3['style'] = var8;
            var9 = _closure1_slot10;
            var8 = _closure1_slot6;
            var7 = {};
            var10 = true;
            var7['animating'] = var10;
            var7 = var9.bind(var6)(var8, var7);
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 50:
            var1 = var2;
case 34:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 28;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestHome.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();