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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var13 = 1;
    var4 = var6[var13];
    var4 = var5.bind(var1)(var4);
    var9 = var4.View;
    var _closure1_slot4 = var9;
    var9 = var4.ActivityIndicator;
    var _closure1_slot5 = var9;
    var11 = var4.StyleSheet;
    var4 = var4.ScrollView;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.QuestsExperimentLocations;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.jsx;
    var _closure1_slot9 = var9;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.spacing;
    var12 = var4.PX_16;
    var _closure1_slot11 = var12;
    var4 = 6;
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
    var _closure1_slot12 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var9 = var2.containerStyle;
            var12 = var2.isNavigationComplete;
            var1 = var2.scrollToQuestId;
            var5 = var2.ListEmptyComponent;
            var14 = var2.ListFooterComponent;
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 9;
            var2 = var13[var2];
            var6 = undefined;
            var4 = var11.bind(var6)(var2);
            var3 = var4.useIsEligibleForQuests;
            var2 = {};
            var8 = _closure1_slot8;
            var8 = var8.QUEST_HOME_MOBILE;
            var2['location'] = var8;
            var3 = var3.bind(var4)(var2);
            var2 = _closure1_slot12;
            var8 = var2.bind(var6)();
            var4 = _closure1_slot1;
            var2 = 10;
            var2 = var13[var2];
            var2 = var4.bind(var6)(var2);
            var2 = var2.bind(var6)();
            var17 = var2.bottom;
            var4 = 11;
            var2 = var13[var4];
            var16 = var11.bind(var6)(var2);
            var15 = var16.useFilteredQuests;
            var2 = var13[var4];
            var2 = var11.bind(var6)(var2);
            var2 = var2.QuestTabs;
            var2 = var2.ALL;
            var2 = var15.bind(var16)(var2);
            var15 = var2.quests;
            var _closure2_slot0 = var15;
            var2 = var2.isFetchingCurrentQuests;
            var4 = var13[var4];
            var11 = var11.bind(var6)(var4);
            var4 = var11.useExpiredQuestsMap;
            var4 = var4.bind(var11)();
            var _closure2_slot1 = var4;
            var19 = _closure1_slot3;
            var13 = var19.useMemo;
            var11 = new Array(2);
            var11[0] = var15;
            var11[1] = var4;
            var4 = function() {
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
            var15 = var13.bind(var19)(var4, var11);
            var4 = {};
            var4['scrollToQuestId'] = var1;
            var1 = function(arg1) {
                var2 = arg1;
                var11 = var2.scrollToQuestId;
                var _closure3_slot0 = var11;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 7;
                var4 = var4[var3];
                var3 = undefined;
                var6 = var5.bind(var3)(var4);
                var5 = var6.useStateFromStores;
                var3 = _closure1_slot7;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = function() {
                    var1 = _closure1_slot7;
                    var1 = var1.useReducedMotion;
                    return var1;
                };
                var9 = var5.bind(var6)(var4, var3);
                var _closure3_slot1 = var9;
                var8 = _closure1_slot3;
                var3 = var8.useRef;
                var2 = null;
                var6 = var3.bind(var8)(var2);
                var _closure3_slot2 = var6;
                var3 = var8.useRef;
                var2 = {};
                var4 = {};
                var5 = 0;
                var4['scrollY'] = var5;
                var2['parent'] = var4;
                var4 = {};
                var2['children'] = var4;
                var4 = var3.bind(var8)(var2);
                var _closure3_slot3 = var4;
                var5 = var8.useCallback;
                var3 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
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
                        var9 = _closure3_slot3;
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
                var2 = new Array(0);
                var10 = var5.bind(var8)(var3, var2);
                var _closure3_slot4 = var10;
                var5 = var8.useCallback;
                var3 = new Array(1);
                var3[0] = var10;
                var2 = function(arg1) {
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
                var5 = var5.bind(var8)(var2, var3);
                var7 = var8.useCallback;
                var3 = new Array(1);
                var3[0] = var10;
                var2 = function(arg1) {
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
                var3 = var7.bind(var8)(var2, var3);
                var7 = var8.useCallback;
                var2 = new Array(3);
                var2[0] = var11;
                var2[1] = var10;
                var2[2] = var9;
                var1 = function(arg1, arg2) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var5 = arg1;
                        var3 = arg2;
                        var2 = _closure3_slot0;
                        if(!(var3 === var2)) { _fun0004_ip = 126; continue _fun0004 }
 17:
                        var2 = _closure3_slot2;
                        var6 = var2.current;
                        var2 = null;
                        if(!(var2 != var6)) { _fun0004_ip = 126; continue _fun0004 }
 32:
                        var4 = var6.scrollTo;
                        var2 = {};
                        var7 = var5.nativeEvent;
                        var7 = var7.layout;
                        var8 = var7.y;
                        var10 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var7 = 8;
                        var9 = var9[var7];
                        var7 = undefined;
                        var7 = var10.bind(var7)(var9);
                        var9 = var7.QUEST_CARD_SPACING;
                        var7 = 0.5;
                        var7 = var7 * var9;
                        var7 = var8 + var7;
                        var2['y'] = var7;
                        var7 = _closure3_slot1;
                        var7 = !var7;
                        var2['animated'] = var7;
                        var2 = var4.bind(var6)(var2);
 126:
                        var6 = _closure3_slot3;
                        var2 = var6.current;
                        var4 = var2.children;
                        var2 = {};
                        var6 = var6.current;
                        var6 = var6.children;
                        var11 = var6[var3];
                        var12 = var2;
                        var6 = copyDataProperties(var12, var11);
                        var5 = var5.nativeEvent;
                        var6 = var5.layout;
                        var5 = 'layout';
                        var2[var5] = var6;
                        var4[var3] = var2;
                        var2 = _closure3_slot4;
                        var1 = undefined;
                        var2 = var2.bind(var1)(var3);
                        return var1;
                    }
                };
                var2 = var7.bind(var8)(var1, var2);
                var1 = {};
                var1['scrollViewRef'] = var6;
                var1['onScroll'] = var5;
                var1['visibilityRef'] = var4;
                var1['onLayout'] = var3;
                var1['onQuestCardLayout'] = var2;
                return var1;
            };
            var1 = var1.bind(var6)(var4);
            var18 = var1.scrollViewRef;
            var _closure2_slot2 = var18;
            var16 = var1.onScroll;
            var13 = var1.onLayout;
            var4 = var1.onQuestCardLayout;
            var _closure2_slot3 = var4;
            var1 = var1.visibilityRef;
            var _closure2_slot4 = var1;
            var11 = var19.useImperativeHandle;
            var4 = arg2;
            var1 = function() {
                var1 = {};
                var2 = function scrollTo(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var1 = _closure2_slot2;
                        var3 = var1.current;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0005_ip = 32; continue _fun0005 }
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
            var1 = var11.bind(var19)(var4, var1);
            var11 = null;
            var1 = null;
            if(!var3) { _fun0001_ip = 575; continue _fun0001 }
 330:
            if(!var12) { _fun0001_ip = 511; continue _fun0001 }
 336:
            if(var2) { _fun0001_ip = 511; continue _fun0001 }
 342:
            var3 = var15.length;
            var2 = 0;
            if(!(var2 !== var3)) { _fun0001_ip = 497; continue _fun0001 }
 356:
            var4 = _closure1_slot10;
            var3 = _closure1_slot6;
            var2 = {};
            var20 = var8.container;
            var19 = new Array(2);
            var19[0] = var20;
            var19[1] = var9;
            var2['style'] = var19;
            var2['ref'] = var18;
            var2['onScroll'] = var16;
            var2['onLayout'] = var13;
            var13 = 16;
            var2['scrollEventThrottle'] = var13;
            var13 = {};
            var16 = _closure1_slot11;
            var17 = var17 + var16;
            var13['paddingBottom'] = var17;
            var13['paddingTop'] = var16;
            var2['contentContainerStyle'] = var13;
            if(!var12) { _fun0001_ip = 454; continue _fun0001 }
 437:
            var13 = var15.map;
            var10 = function(arg1, arg2) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var2 = arg2;
                var _closure3_slot1 = var2;
                var5 = _closure1_slot9;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 12;
                var2 = var9[var2];
                var4 = undefined;
                var2 = var8.bind(var4)(var2);
                var3 = var2.QuestContentImpressionTrackerNative;
                var2 = {};
                var2['questOrQuests'] = var1;
                var7 = 13;
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
                    var5 = _closure1_slot9;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 8;
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
                    var6 = 13;
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
            var12 = var13.bind(var15)(var10);
 454:
            var10 = new Array(2);
            var10[0] = var12;
            var11 = var11 != var14;
            if(!var11) { _fun0001_ip = 481; continue _fun0001 }
 469:
            var13 = _closure1_slot9;
            var12 = {};
            var11 = var13.bind(var6)(var14, var12);
 481:
            var10[1] = var11;
            var2['children'] = var10;
            var2 = var4.bind(var6)(var3, var2);
            _fun0001_ip = 509; continue _fun0001;
 497:
            var4 = _closure1_slot9;
            var3 = {};
            var2 = var4.bind(var6)(var5, var3);
 509:
            _fun0001_ip = 572; continue _fun0001;
 511:
            var5 = _closure1_slot9;
            var4 = _closure1_slot4;
            var3 = {};
            var10 = var8.loadingContainer;
            var8 = new Array(2);
            var8[0] = var10;
            var8[1] = var9;
            var3['style'] = var8;
            var8 = _closure1_slot5;
            var7 = {};
            var9 = true;
            var7['animating'] = var9;
            var7 = var5.bind(var6)(var8, var7);
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
 572:
            var1 = var2;
 575:
            return var1;
        }
    };
    var4 = var4.bind(var7)(var2);
    var2 = var7.memo;
    var2 = var2.bind(var7)(var4);
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestHome.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();