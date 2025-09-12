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
    var13 = 1;
    var7 = var6[var13];
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
    var4 = var4.ScrollView;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.QuestsExperimentLocations;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserSettingsSections;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.jsx;
    var _closure1_slot11 = var9;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.spacing;
    var12 = var4.PX_16;
    var _closure1_slot13 = var12;
    var4 = 8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['flex'] = var13;
    var10['paddingHorizontal'] = var12;
    var4['container'] = var10;
    var10 = {};
    var15 = var11.absoluteFillObject;
    var16 = var10;
    var11 = copyDataProperties(var16, var15);
    var12 = 'center';
    var11 = 'justifyContent';
    var10[var11] = var12;
    var11 = 'alignItems';
    var10[var11] = var12;
    var4['loadingContainer'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot14 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var9 = var1.containerStyle;
            var12 = var1.isNavigationComplete;
            var2 = var1.scrollToQuestId;
            var5 = var1.ListEmptyComponent;
            var15 = var1.ListFooterComponent;
            var6 = undefined;
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var6;
            var _closure2_slot2 = var6;
            var _closure2_slot3 = var6;
            var _closure2_slot4 = var6;
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 12;
            var3 = var1[var3];
            var11 = var4.bind(var6)(var3);
            var8 = var11.useIsEligibleForQuests;
            var3 = {};
            var13 = _closure1_slot9;
            var13 = var13.QUEST_HOME_MOBILE;
            var3['location'] = var13;
            var20 = var8.bind(var11)(var3);
            var3 = _closure1_slot14;
            var8 = var3.bind(var6)();
            var11 = _closure1_slot1;
            var3 = 13;
            var3 = var1[var3];
            var3 = var11.bind(var6)(var3);
            var3 = var3.bind(var6)();
            var18 = var3.bottom;
            var3 = 14;
            var3 = var1[var3];
            var13 = var4.bind(var6)(var3);
            var11 = var13.useVirtualCurrencyMobileEnabled;
            var3 = {};
            var14 = 'quest_home';
            var3['location'] = var14;
            var3 = var11.bind(var13)(var3);
            var3 = var3.enabled;
            var14 = 15;
            var1 = var1[var14];
            var1 = var4.bind(var6)(var1);
            var1 = var1.MOBILE_ORBS_INTRO_QUEST_ID;
            var1 = var2 === var1;
            if(!var1) { _fun0001_ip = 208; continue _fun0001 }
 205:
            var1 = var3;
 208:
            var13 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = var11[var14];
            var17 = var13.bind(var6)(var3);
            var16 = var17.useFilteredQuests;
            var3 = var11[var14];
            var3 = var13.bind(var6)(var3);
            var3 = var3.QuestTabs;
            var4 = var3.ALL;
            var3 = {};
            var3 = var16.bind(var17)(var4, var3, var1);
            var16 = var3.quests;
            _closure2_slot0 = var16;
            var4 = var3.isFetchingCurrentQuests;
            var3 = var3.hasFetched;
            var11 = var11[var14];
            var13 = var13.bind(var6)(var11);
            var11 = var13.useExpiredQuestsMap;
            var11 = var11.bind(var13)();
            _closure2_slot1 = var11;
            var22 = _closure1_slot4;
            var14 = var22.useMemo;
            var13 = new Array(2);
            var13[0] = var16;
            var13[1] = var11;
            var11 = function() {
                var3 = _closure2_slot0;
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
                        var5 = _closure2_slot1;
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
            var16 = var14.bind(var22)(var11, var13);
            var11 = {};
            var11['scrollToQuestId'] = var2;
            var11['isMobileOrbsOnboarding'] = var1;
            var2 = function(arg1) {
                var2 = arg1;
                var13 = var2.scrollToQuestId;
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
                var2 = _closure1_slot8;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() {
                    var1 = _closure1_slot8;
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
                var4 = var10.useRef;
                var2 = {};
                var5 = {};
                var3 = 0;
                var5['scrollY'] = var3;
                var2['parent'] = var5;
                var5 = {};
                var2['children'] = var5;
                var2 = var4.bind(var10)(var2);
                var _closure3_slot4 = var2;
                var6 = var10.useCallback;
                var5 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
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
                        if(!var2) { _fun0003_ip = 139; continue _fun0003 }
 58:
                        var10 = var6[var5];
                        var2 = var4 != var8;
                        if(!var2) { _fun0003_ip = 73; continue _fun0003 }
 69:
                        var2 = var10 !== var8;
 73:
                        if(var2) { _fun0003_ip = 101; continue _fun0003 }
 76:
                        var9 = _closure3_slot4;
                        var9 = var9.current;
                        var9 = var9.children;
                        var9 = var9[var10];
                        var2 = var4 == var9;
                        var3 = var9;
 101:
                        if(var2) { _fun0003_ip = 114; continue _fun0003 }
 104:
                        var9 = var3.calculateVisibility;
                        var2 = var4 == var9;
 114:
                        if(var2) { _fun0003_ip = 127; continue _fun0003 }
 117:
                        var2 = var3.calculateVisibility;
                        var2 = var2.bind(var3)();
 127:
                        var5 = var5 + 1;
                        var2 = var6.length;
                        if(var5 < var2) { _fun0003_ip = 58; continue _fun0003 }
 139:
                        return var1;
                    }
                };
                var4 = new Array(0);
                var4 = var6.bind(var10)(var5, var4);
                var _closure3_slot5 = var4;
                var9 = var10.useCallback;
                var6 = new Array(1);
                var6[0] = var4;
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
                var9[0] = var4;
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
                var12 = var10.useCallback;
                var9 = new Array(1);
                var9[0] = var4;
                var4 = function(arg1, arg2) {
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
                var4 = var12.bind(var10)(var4, var9);
                var12 = var10.useState;
                var9 = false;
                var12 = var12.bind(var10)(var9);
                var9 = _closure1_slot3;
                var8 = 2;
                var8 = var9.bind(var15)(var12, var8);
                var15 = var8[var3];
                var _closure3_slot6 = var15;
                var3 = 1;
                var3 = var8[var3];
                var _closure3_slot7 = var3;
                var9 = var10.useCallback;
                var8 = function() {
                    var3 = _closure3_slot7;
                    var1 = undefined;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var3 = new Array(0);
                var3 = var9.bind(var10)(var8, var3);
                var12 = var10.useCallback;
                var9 = new Array(1);
                var9[0] = var14;
                var8 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var6 = arg1;
                        var1 = _closure3_slot3;
                        var1 = var1.current;
                        var3 = null;
                        var1 = var3 != var1;
                        if(!var1) { _fun0004_ip = 75; continue _fun0004 }
 24:
                        var2 = _closure3_slot4;
                        var2 = var2.current;
                        var2 = var2.children;
                        var5 = var2[var6];
                        var7 = var3 == var5;
                        var2 = undefined;
                        if(var7) { _fun0004_ip = 71; continue _fun0004 }
 51:
                        var5 = var5.layout;
                        var7 = var3 == var5;
                        var2 = undefined;
                        if(var7) { _fun0004_ip = 71; continue _fun0004 }
 66:
                        var2 = var5.y;
 71:
                        var1 = var3 != var2;
 75:
                        if(!var1) { _fun0004_ip = 194; continue _fun0004 }
 78:
                        var1 = _closure3_slot3;
                        var3 = var1.current;
                        var2 = var3.scrollTo;
                        var1 = {};
                        var5 = _closure3_slot4;
                        var5 = var5.current;
                        var5 = var5.children;
                        var5 = var5[var6];
                        var5 = var5.layout;
                        var6 = var5.y;
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var5 = 10;
                        var7 = var7[var5];
                        var5 = undefined;
                        var5 = var8.bind(var5)(var7);
                        var7 = var5.QUEST_CARD_SPACING;
                        var5 = -0.5;
                        var5 = var5 * var7;
                        var5 = var6 + var5;
                        var1['y'] = var5;
                        var4 = _closure3_slot2;
                        var4 = !var4;
                        var1['animated'] = var4;
                        var1 = var2.bind(var3)(var1);
 194:
                        var1 = undefined;
                        return var1;
                    }
                };
                var12 = var12.bind(var10)(var8, var9);
                var _closure3_slot8 = var12;
                var9 = var10.useEffect;
                var8 = new Array(7);
                var8[0] = var15;
                var8[1] = var14;
                var8[2] = var13;
                var8[3] = var2;
                var8[4] = var7;
                var8[5] = var12;
                var8[6] = var11;
                var1 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var2 = _closure3_slot0;
                        var4 = null;
                        var2 = var4 != var2;
                        if(!var2) { _fun0005_ip = 20; continue _fun0005 }
 16:
                        var2 = _closure3_slot6;
 20:
                        if(!var2) { _fun0005_ip = 78; continue _fun0005 }
 23:
                        var3 = _closure3_slot4;
                        var3 = var3.current;
                        var5 = var3.children;
                        var3 = _closure3_slot0;
                        var5 = var5[var3];
                        var6 = var4 == var5;
                        var3 = undefined;
                        if(var6) { _fun0005_ip = 74; continue _fun0005 }
 54:
                        var5 = var5.layout;
                        var6 = var4 == var5;
                        var3 = undefined;
                        if(var6) { _fun0005_ip = 74; continue _fun0005 }
 69:
                        var3 = var5.y;
 74:
                        var2 = var4 != var3;
 78:
                        if(!var2) { _fun0005_ip = 94; continue _fun0005 }
 81:
                        var3 = _closure3_slot3;
                        var3 = var3.current;
                        var2 = var4 != var3;
 94:
                        if(!var2) { _fun0005_ip = 107; continue _fun0005 }
 97:
                        var4 = _closure3_slot1;
                        var3 = true;
                        var2 = var3 !== var4;
 107:
                        if(!var2) { _fun0005_ip = 169; continue _fun0005 }
 110:
                        var2 = _closure3_slot8;
                        var1 = _closure3_slot0;
                        var4 = undefined;
                        var1 = var2.bind(var4)(var1);
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 11;
                        var2 = var5[var2];
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.clearSubsection;
                        var1 = _closure1_slot10;
                        var1 = var1.QUESTS;
                        var1 = var2.bind(var3)(var1);
 169:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var9.bind(var10)(var1, var8);
                var1 = {};
                var1['scrollViewRef'] = var7;
                var1['handleListScroll'] = var6;
                var1['handleListLayout'] = var5;
                var1['handleQuestCardLayout'] = var4;
                var1['handleLastItemLayout'] = var3;
                var1['visibilityRef'] = var2;
                return var1;
            };
            var2 = var2.bind(var6)(var11);
            var19 = var2.scrollViewRef;
            _closure2_slot2 = var19;
            var14 = var2.handleLastItemLayout;
            var17 = var2.handleListScroll;
            var13 = var2.handleListLayout;
            var11 = var2.handleQuestCardLayout;
            _closure2_slot3 = var11;
            var2 = var2.visibilityRef;
            _closure2_slot4 = var2;
            var21 = var22.useImperativeHandle;
            var11 = arg2;
            var2 = function() {
                var1 = {};
                var2 = function scrollTo(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var1 = _closure2_slot2;
                        var3 = var1.current;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0006_ip = 32; continue _fun0006 }
 18:
                        var2 = var3.scrollTo;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
 32:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['scrollTo'] = var2;
                return var1;
            };
            var2 = var21.bind(var22)(var11, var2);
            var11 = null;
            var2 = var1;
            var1 = null;
            if(!var20) { _fun0001_ip = 878; continue _fun0001 }
 447:
            if(!var12) { _fun0001_ip = 814; continue _fun0001 }
 453:
            if(var4) { _fun0001_ip = 814; continue _fun0001 }
 459:
            if(!var3) { _fun0001_ip = 814; continue _fun0001 }
 465:
            var3 = var16.length;
            var4 = 0;
            if(!(var4 !== var3)) { _fun0001_ip = 800; continue _fun0001 }
 479:
            if(!var2) { _fun0001_ip = 491; continue _fun0001 }
 482:
            var3 = var16.length;
            var2 = var3 > var4;
 491:
            if(!var2) { _fun0001_ip = 515; continue _fun0001 }
 494:
            var4 = var16.some;
            var3 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = arg1;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 16;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.hasVirtualCurrencyReward;
                    var1 = var3.config;
                    var1 = var4.bind(var5)(var1);
                    if(!var1) { _fun0007_ip = 74; continue _fun0007 }
 47:
                    var4 = var3.userStatus;
                    var3 = null;
                    var5 = var3 == var4;
                    var2 = undefined;
                    if(var5) { _fun0007_ip = 70; continue _fun0007 }
 64:
                    var2 = var4.completedAt;
 70:
                    var1 = var3 == var2;
 74:
                    return var1;
                }
            };
            var3 = var4.bind(var16)(var3);
            var2 = !var3;
 515:
            if(!var2) { _fun0001_ip = 634; continue _fun0001 }
 518:
            var21 = _closure1_slot1;
            var24 = _closure1_slot2;
            var2 = 17;
            var2 = var24[var2];
            var4 = var21.bind(var6)(var2);
            var3 = var4.open;
            var2 = {};
            var20 = 'NO_ORBS_QUESTS_AVAILABLE';
            var2['key'] = var20;
            var20 = 18;
            var20 = var24[var20];
            var20 = var21.bind(var6)(var20);
            var2['icon'] = var20;
            var23 = _closure1_slot0;
            var20 = 19;
            var21 = var24[var20];
            var21 = var23.bind(var6)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var24[var20];
            var20 = var23.bind(var6)(var20);
            var20 = var20.t;
            var20 = var20.Au8ug4;
            var20 = var21.bind(var22)(var20);
            var2['content'] = var20;
            var2 = var3.bind(var4)(var2);
 634:
            var4 = _closure1_slot12;
            var3 = _closure1_slot7;
            var2 = {};
            var21 = var8.container;
            var20 = new Array(2);
            var20[0] = var21;
            var20[1] = var9;
            var2['style'] = var20;
            var2['ref'] = var19;
            var2['onScroll'] = var17;
            var2['onLayout'] = var13;
            var13 = 16;
            var2['scrollEventThrottle'] = var13;
            var13 = {};
            var17 = _closure1_slot13;
            var18 = var18 + var17;
            var13['paddingBottom'] = var18;
            var13['paddingTop'] = var17;
            var2['contentContainerStyle'] = var13;
            if(!var12) { _fun0001_ip = 732; continue _fun0001 }
 715:
            var13 = var16.map;
            var10 = function(arg1, arg2) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var2 = arg2;
                var _closure3_slot1 = var2;
                var5 = _closure1_slot11;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 20;
                var2 = var9[var2];
                var4 = undefined;
                var2 = var8.bind(var4)(var2);
                var3 = var2.QuestContentImpressionTrackerNative;
                var2 = {};
                var2['questOrQuests'] = var1;
                var7 = 21;
                var10 = var9[var7];
                var10 = var8.bind(var4)(var10);
                var10 = var10.QuestContent;
                var10 = var10.QUEST_HOME_MOBILE;
                var2['questContent'] = var10;
                var10 = false;
                var2['trackGuildAndChannelMetadata'] = var10;
                var10 = _closure2_slot4;
                var2['visibilityRef'] = var10;
                var7 = var9[var7];
                var7 = var8.bind(var4)(var7);
                var7 = var7.QuestContent;
                var7 = var7.QUEST_HOME_MOBILE;
                var2['sourceQuestContent'] = var7;
                var6 = function children() {
                    var5 = _closure1_slot11;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 10;
                    var1 = var8[var1];
                    var4 = undefined;
                    var1 = var7.bind(var4)(var1);
                    var3 = var1.QuestCard;
                    var2 = {};
                    var1 = _closure3_slot0;
                    var2['quest'] = var1;
                    var9 = _closure3_slot1;
                    var2['questContentPosition'] = var9;
                    var6 = _closure1_slot13;
                    var2['containerPadding'] = var6;
                    var6 = _closure2_slot3;
                    var2['onLayout'] = var6;
                    var6 = 21;
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
            var12 = var13.bind(var16)(var10);
 732:
            var10 = new Array(3);
            var10[0] = var12;
            var11 = var11 != var15;
            if(!var11) { _fun0001_ip = 759; continue _fun0001 }
 747:
            var13 = _closure1_slot11;
            var12 = {};
            var11 = var13.bind(var6)(var15, var12);
 759:
            var10[1] = var11;
            var13 = _closure1_slot11;
            var12 = _closure1_slot5;
            var11 = {};
            var11['onLayout'] = var14;
            var11 = var13.bind(var6)(var12, var11);
            var10[2] = var11;
            var2['children'] = var10;
            var2 = var4.bind(var6)(var3, var2);
            _fun0001_ip = 812; continue _fun0001;
 800:
            var4 = _closure1_slot11;
            var3 = {};
            var2 = var4.bind(var6)(var5, var3);
 812:
            _fun0001_ip = 875; continue _fun0001;
 814:
            var5 = _closure1_slot11;
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
 875:
            var1 = var2;
 878:
            return var1;
        }
    };
    var4 = var4.bind(var7)(var2);
    var2 = var7.memo;
    var2 = var2.bind(var7)(var4);
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestHome.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();