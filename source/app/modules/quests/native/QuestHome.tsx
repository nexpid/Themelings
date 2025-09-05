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
            var13 = var1.scrollToQuestId;
            var5 = var1.ListEmptyComponent;
            var15 = var1.ListFooterComponent;
            var6 = undefined;
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var6;
            var _closure2_slot2 = var6;
            var _closure2_slot3 = var6;
            var _closure2_slot4 = var6;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = 12;
            var2 = var1[var2];
            var8 = var3.bind(var6)(var2);
            var4 = var8.useIsEligibleForQuests;
            var2 = {};
            var11 = _closure1_slot9;
            var11 = var11.QUEST_HOME_MOBILE;
            var2['location'] = var11;
            var4 = var4.bind(var8)(var2);
            var2 = _closure1_slot14;
            var8 = var2.bind(var6)();
            var11 = _closure1_slot1;
            var2 = 13;
            var2 = var1[var2];
            var2 = var11.bind(var6)(var2);
            var2 = var2.bind(var6)();
            var18 = var2.bottom;
            var2 = 14;
            var2 = var1[var2];
            var14 = var3.bind(var6)(var2);
            var11 = var14.useVirtualCurrencyMobileEnabled;
            var2 = {};
            var16 = 'quest_home';
            var2['location'] = var16;
            var2 = var11.bind(var14)(var2);
            var2 = var2.enabled;
            var16 = 15;
            var1 = var1[var16];
            var1 = var3.bind(var6)(var1);
            var1 = var1.MOBILE_ORBS_INTRO_QUEST_ID;
            var1 = var13 === var1;
            if(!var1) { _fun0001_ip = 208; continue _fun0001 }
 205:
            var1 = var2;
 208:
            var14 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = var11[var16];
            var19 = var14.bind(var6)(var2);
            var17 = var19.useFilteredQuests;
            var2 = var11[var16];
            var2 = var14.bind(var6)(var2);
            var2 = var2.QuestTabs;
            var3 = var2.ALL;
            var2 = {};
            var2 = var17.bind(var19)(var3, var2, var1);
            var17 = var2.quests;
            _closure2_slot0 = var17;
            var3 = var2.isFetchingCurrentQuests;
            var2 = var2.hasFetched;
            var11 = var11[var16];
            var14 = var14.bind(var6)(var11);
            var11 = var14.useExpiredQuestsMap;
            var11 = var11.bind(var14)();
            _closure2_slot1 = var11;
            var21 = _closure1_slot4;
            var16 = var21.useMemo;
            var14 = new Array(2);
            var14[0] = var17;
            var14[1] = var11;
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
            var16 = var16.bind(var21)(var11, var14);
            var11 = {};
            var11['scrollToQuestId'] = var13;
            var11['isMobileOrbsOnboarding'] = var1;
            var1 = function(arg1) {
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
            var1 = var1.bind(var6)(var11);
            var19 = var1.scrollViewRef;
            _closure2_slot2 = var19;
            var14 = var1.handleLastItemLayout;
            var17 = var1.handleListScroll;
            var13 = var1.handleListLayout;
            var11 = var1.handleQuestCardLayout;
            _closure2_slot3 = var11;
            var1 = var1.visibilityRef;
            _closure2_slot4 = var1;
            var20 = var21.useImperativeHandle;
            var11 = arg2;
            var1 = function() {
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
            var1 = var20.bind(var21)(var11, var1);
            var11 = null;
            var1 = null;
            if(!var4) { _fun0001_ip = 720; continue _fun0001 }
 444:
            if(!var12) { _fun0001_ip = 656; continue _fun0001 }
 450:
            if(var3) { _fun0001_ip = 656; continue _fun0001 }
 456:
            if(!var2) { _fun0001_ip = 656; continue _fun0001 }
 462:
            var3 = var16.length;
            var2 = 0;
            if(!(var2 !== var3)) { _fun0001_ip = 642; continue _fun0001 }
 476:
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
            if(!var12) { _fun0001_ip = 574; continue _fun0001 }
 557:
            var13 = var16.map;
            var10 = function(arg1, arg2) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var2 = arg2;
                var _closure3_slot1 = var2;
                var5 = _closure1_slot11;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 16;
                var2 = var9[var2];
                var4 = undefined;
                var2 = var8.bind(var4)(var2);
                var3 = var2.QuestContentImpressionTrackerNative;
                var2 = {};
                var2['questOrQuests'] = var1;
                var7 = 17;
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
                    var6 = _closure3_slot1;
                    var2['questContentPosition'] = var6;
                    var6 = _closure2_slot3;
                    var2['onLayout'] = var6;
                    var6 = 17;
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
 574:
            var10 = new Array(3);
            var10[0] = var12;
            var11 = var11 != var15;
            if(!var11) { _fun0001_ip = 601; continue _fun0001 }
 589:
            var13 = _closure1_slot11;
            var12 = {};
            var11 = var13.bind(var6)(var15, var12);
 601:
            var10[1] = var11;
            var13 = _closure1_slot11;
            var12 = _closure1_slot5;
            var11 = {};
            var11['onLayout'] = var14;
            var11 = var13.bind(var6)(var12, var11);
            var10[2] = var11;
            var2['children'] = var10;
            var2 = var4.bind(var6)(var3, var2);
            _fun0001_ip = 654; continue _fun0001;
 642:
            var4 = _closure1_slot11;
            var3 = {};
            var2 = var4.bind(var6)(var5, var3);
 654:
            _fun0001_ip = 717; continue _fun0001;
 656:
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
 717:
            var1 = var2;
 720:
            return var1;
        }
    };
    var4 = var4.bind(var7)(var2);
    var2 = var7.memo;
    var2 = var2.bind(var7)(var4);
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestHome.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();