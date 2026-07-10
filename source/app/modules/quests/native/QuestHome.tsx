// app/modules/quests/native/QuestHome.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function EmptyStateNoQuestsAvailable() {
        var12 = _closure1_slot0;
        var13 = _closure1_slot2;
        var2 = 13;
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
        var3 = _closure1_slot14;
        var2 = _closure1_slot1;
        var1 = 18;
        var1 = var13[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var7 = _closure1_slot14;
        var5 = 19;
        var5 = var13[var5];
        var5 = var12.bind(var4)(var5);
        var6 = var5.Button;
        var5 = {};
        var9 = 'secondary';
        var5['variant'] = var9;
        var9 = 20;
        var10 = var13[var9];
        var10 = var12.bind(var4)(var10);
        var11 = var10.intl;
        var10 = var11.string;
        var9 = var13[var9];
        var9 = var12.bind(var4)(var9);
        var9 = var9.t;
        var9 = var9["/g10LC"];
        var9 = var10.bind(var11)(var9);
        var5['text'] = var9;
        var5['onPress'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['action'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot19 = var1;
    var1 = function EmptyStateFiltered(arg1) {
        var1 = arg1;
        var11 = var1.onClearFilters;
        var4 = _closure1_slot14;
        var2 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 18;
        var1 = var9[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var10 = _closure1_slot14;
        var8 = _closure1_slot0;
        var5 = 19;
        var5 = var9[var5];
        var5 = var8.bind(var3)(var5);
        var7 = var5.Button;
        var6 = {};
        var5 = 'secondary';
        var6['variant'] = var5;
        var5 = 20;
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
    var _closure1_slot20 = var1;
    var1 = function HeaderPreviewButton() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = _closure1_slot17;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var4 = _closure1_slot4;
            var3 = var4.useCallback;
            var2 = function() {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 21;
                var2 = var4[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.popAll;
                var2 = var2.bind(var3)();
                var3 = _closure1_slot0;
                var2 = 22;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.openUserSettings;
                var2 = {};
                var5 = _closure1_slot13;
                var5 = var5.QUEST_PREVIEW_TOOL_2;
                var2['screen'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = new Array(0);
            var9 = var3.bind(var4)(var2, var1);
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 23;
            var1 = var3[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.useShouldShowPreviewToolTab;
            var2 = var1.bind(var2)();
            var1 = null;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot14;
            var3 = _closure1_slot5;
            var2 = {};
            var7 = var7.previewButton;
            var2['style'] = var7;
            var8 = _closure1_slot14;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 19;
            var6 = var13[var6];
            var6 = var12.bind(var5)(var6);
            var7 = var6.Button;
            var6 = {'grow': true, 'onPress': null, 'variant': 'primary'};
            var6['onPress'] = var9;
            var9 = 20;
            var10 = var13[var9];
            var10 = var12.bind(var5)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.tx5Ax5;
            var9 = var10.bind(var11)(var9);
            var6['text'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 2:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function HeaderWithBounties(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var13 = var1.orbShopProducts;
            var12 = var1.obtainableOrbRewards;
            var10 = var1.showOrbShopPlaceholderCarousel;
            var1 = _closure1_slot17;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 24;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var3 = var1.BountiesStage1Experiment;
            var2 = var3.useConfig;
            var1 = {};
            var5 = _closure1_slot11;
            var5 = var5.QUEST_HOME_MOBILE;
            var1['location'] = var5;
            var1 = var2.bind(var3)(var1);
            var14 = var1.verticalScrollEnabled;
            var3 = _closure1_slot15;
            var2 = _closure1_slot16;
            var1 = {};
            var7 = _closure1_slot14;
            var6 = _closure1_slot21;
            var5 = {};
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(4);
            var5[0] = var6;
            var6 = !var14;
            if(!var6) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var15 = _closure1_slot15;
            var8 = _closure1_slot5;
            var7 = {};
            var17 = var11.sectionHeader;
            var16 = new Array(2);
            var16[0] = var17;
            var17 = var11.sectionHeaderRow;
            var16[1] = var17;
            var7['style'] = var16;
            var18 = _closure1_slot14;
            var21 = _closure1_slot0;
            var25 = _closure1_slot2;
            var16 = 25;
            var16 = var25[var16];
            var16 = var21.bind(var4)(var16);
            var17 = var16.Text;
            var16 = {'variant': 'text-lg/semibold', 'color': 'text-strong'};
            var20 = 20;
            var19 = var25[var20];
            var19 = var21.bind(var4)(var19);
            var23 = var19.intl;
            var22 = var23.string;
            var19 = var25[var20];
            var19 = var21.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.qetVDw;
            var19 = var22.bind(var23)(var19);
            var16['children'] = var19;
            var17 = var18.bind(var4)(var17, var16);
            var16 = new Array(2);
            var16[0] = var17;
            var19 = _closure1_slot14;
            var17 = 26;
            var17 = var25[var17];
            var17 = var21.bind(var4)(var17);
            var18 = var17.PressableOpacity;
            var17 = {};
            var24 = _closure1_slot1;
            var22 = 27;
            var22 = var25[var22];
            var22 = var24.bind(var4)(var22);
            var17['onPress'] = var22;
            var22 = 14;
            var17['hitSlop'] = var22;
            var22 = var25[var20];
            var22 = var21.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var20 = var25[var20];
            var20 = var21.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.hvVgAZ;
            var20 = var22.bind(var23)(var20);
            var17['aria-label'] = var20;
            var20 = 'button';
            var17['accessibilityRole'] = var20;
            var22 = _closure1_slot14;
            var20 = 28;
            var20 = var25[var20];
            var20 = var21.bind(var4)(var20);
            var21 = var20.CircleInformationIcon;
            var20 = {};
            var23 = 'xs';
            var20['size'] = var23;
            var23 = 11;
            var23 = var25[var23];
            var23 = var24.bind(var4)(var23);
            var23 = var23.colors;
            var23 = var23.ICON_SUBTLE;
            var20['color'] = var23;
            var20 = var22.bind(var4)(var21, var20);
            var17['children'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var16[1] = var17;
            var7['children'] = var16;
            var6 = var15.bind(var4)(var8, var7);
case 4:
            var5[1] = var6;
            var8 = _closure1_slot14;
            var7 = _closure1_slot1;
            var16 = _closure1_slot2;
            var6 = 29;
            var6 = var16[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['verticalScrollEnabled'] = var14;
            var6['orbShopProducts'] = var13;
            var6['obtainableOrbRewards'] = var12;
            var6['showOrbShopPlaceholderCarousel'] = var10;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var8 = _closure1_slot14;
            var7 = _closure1_slot5;
            var6 = {};
            var12 = var11.sectionHeader;
            var10 = new Array(2);
            var10[0] = var12;
            var11 = var11.sectionHeaderWithTag;
            var10[1] = var11;
            var6['style'] = var10;
            var11 = _closure1_slot14;
            var15 = _closure1_slot0;
            var9 = 25;
            var9 = var16[var9];
            var9 = var15.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {'variant': 'text-lg/semibold', 'color': 'text-strong'};
            var12 = 20;
            var13 = var16[var12];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.JALI2K;
            var12 = var13.bind(var14)(var12);
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var13 = 1;
    var7 = var6[var13];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot5 = var8;
    var8 = var4.ActivityIndicator;
    var _closure1_slot6 = var8;
    var11 = var4.StyleSheet;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.QuestsExperimentLocations;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticEvents;
    var _closure1_slot12 = var8;
    var4 = var4.UserSettingsSections;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot14 = var8;
    var8 = var4.jsxs;
    var _closure1_slot15 = var8;
    var4 = var4.Fragment;
    var _closure1_slot16 = var4;
    var4 = 10;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['flex'] = var13;
    var4['container'] = var10;
    var10 = {};
    var15 = var11.absoluteFillObject;
    var16 = var10;
    var11 = copyDataProperties(var16, var15);
    var13 = 'center';
    var11 = 'justifyContent';
    var10[10] = var13;
    var11 = 'alignItems';
    var10[10] = var13;
    var4['loadingContainer'] = var10;
    var10 = {};
    var11 = 11;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_16;
    var10['marginBottom'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_16;
    var10['paddingHorizontal'] = var13;
    var4['sectionHeader'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center'};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_4;
    var10['gap'] = var13;
    var4['sectionHeaderRow'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_16;
    var10['marginBottom'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_16;
    var10['paddingHorizontal'] = var13;
    var13 = 'transparent';
    var10['backgroundColor'] = var13;
    var4['previewButton'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.space;
    var11 = var11.PX_4;
    var10['gap'] = var11;
    var4['sectionHeaderWithTag'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot17 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var1 = var2.shouldShowBounties;
            var7 = var2.onLayout;
            var10 = var2.orbShopProducts;
            var9 = var2.obtainableOrbRewards;
            var5 = var2.showOrbShopPlaceholderCarousel;
            var4 = _closure1_slot14;
            var3 = _closure1_slot5;
            var2 = {};
            var2['onLayout'] = var7;
            var8 = _closure1_slot14;
            if(var1) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var11 = _closure1_slot21;
            var7 = undefined;
            var1 = {};
            var1 = var8.bind(var7)(var11, var1);
            _fun0003_ip = 8; continue _fun0003;
case 6:
            var7 = _closure1_slot22;
            var6 = {};
            var6['orbShopProducts'] = var10;
            var6['obtainableOrbRewards'] = var9;
            var6['showOrbShopPlaceholderCarousel'] = var5;
            var5 = undefined;
            var1 = var8.bind(var5)(var7, var6);
case 8:
            var2['children'] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot18 = var4;
    var4 = var7.memo;
    var2 = function QuestHome(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var9 = var1.containerStyle;
            var2 = var1.isNavigationComplete;
            var17 = var1.scrollToQuestId;
            var _closure2_slot0 = var17;
            var3 = var1.filters;
            var _closure2_slot1 = var3;
            var24 = var1.sortMethod;
            var _closure2_slot2 = var24;
            var10 = var1.onClearFilters;
            var6 = undefined;
            var _closure2_slot14 = var6;
            var _closure2_slot15 = var6;
            var _closure2_slot16 = var6;
            var _closure2_slot17 = var6;
            var _closure2_slot18 = var6;
            var _closure2_slot19 = var6;
            var26 = _closure1_slot0;
            var27 = _closure1_slot2;
            var1 = 30;
            var1 = var27[var1];
            var4 = var26.bind(var6)(var1);
            var1 = var4.getIsEligibleForQuests;
            var4 = var1.bind(var4)();
            var _closure2_slot3 = var4;
            var1 = _closure1_slot17;
            var8 = var1.bind(var6)();
            var21 = _closure1_slot1;
            var1 = 31;
            var1 = var27[var1];
            var1 = var21.bind(var6)(var1);
            var1 = var1.bind(var6)();
            var20 = var1.bottom;
            var22 = 23;
            var1 = var27[var22];
            var13 = var26.bind(var6)(var1);
            var12 = var13.useFilteredQuests;
            var1 = var27[var22];
            var1 = var26.bind(var6)(var1);
            var1 = var1.QuestTabs;
            var11 = var1.ALL;
            var16 = _closure1_slot4;
            var15 = var16.useMemo;
            var14 = new Array(2);
            var14[0] = var3;
            var14[1] = var24;
            var1 = function() {
                var1 = {};
                var3 = _closure2_slot1;
                var1['filters'] = var3;
                var2 = _closure2_slot2;
                var1['sortMethod'] = var2;
                return var1;
            };
            var1 = var15.bind(var16)(var1, var14);
            var1 = var12.bind(var13)(var11, var1);
            var18 = var1.quests;
            var _closure2_slot4 = var18;
            var13 = var1.excludedQuests;
            var _closure2_slot5 = var13;
            var23 = var1.isFetchingCurrentQuests;
            var _closure2_slot6 = var23;
            var11 = var1.hasFetched;
            var _closure2_slot7 = var11;
            var1 = 12;
            var1 = var27[var1];
            var16 = var26.bind(var6)(var1);
            var15 = var16.useStateFromStoresArray;
            var1 = _closure1_slot9;
            var14 = new Array(1);
            var14[0] = var1;
            var12 = function() {
                var2 = global;
                var4 = var2.Array;
                var3 = var4.from;
                var2 = _closure1_slot9;
                var5 = var2.quests;
                var2 = var5.values;
                var2 = var2.bind(var5)();
                var4 = var3.bind(var4)(var2);
                var3 = var4.filter;
                var2 = function(arg1) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 32;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isQuestExpired;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    var1 = !var1;
                    return var1;
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.map;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.id;
                    return var1;
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.sort;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = new Array(0);
            var1 = var15.bind(var16)(var14, var12, var1);
            var _closure2_slot8 = var1;
            var15 = _closure1_slot4;
            var14 = var15.useEffect;
            var12 = new Array(1);
            var12[0] = var1;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot8;
                    var3 = var2.length;
                    var2 = 0;
                    if(!(var3 > var2)) { _fun0005_ip = 9; continue _fun0005 }
case 10:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 33;
                    var2 = var7[var2];
                    var5 = undefined;
                    var4 = var6.bind(var5)(var2);
                    var3 = var4.markAdContentSeen;
                    var2 = 34;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.AdCreativeType;
                    var2 = var2.QUEST;
                    var1 = _closure2_slot8;
                    var1 = var3.bind(var4)(var2, var1);
case 9:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var14.bind(var15)(var1, var12);
            var14 = _closure1_slot4;
            var12 = var14.useRef;
            var1 = null;
            var12 = var12.bind(var14)(var1);
            var _closure2_slot9 = var12;
            var16 = _closure1_slot4;
            var15 = var16.useMemo;
            var14 = new Array(3);
            var14[0] = var17;
            var14[1] = var18;
            var14[2] = var13;
            var12 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0006_ip = 11; continue _fun0006 }
case 12:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 32;
                    var5 = var5[var2];
                    var2 = undefined;
                    var8 = var6.bind(var2)(var5);
                    var7 = var8.findQuestOrReplacement;
                    var6 = _closure2_slot0;
                    var5 = _closure2_slot4;
                    var2 = _closure2_slot5;
                    var2 = var7.bind(var8)(var6, var5, var2);
                    var _closure3_slot0 = var2;
                    var5 = var1 == var2;
                    var2 = null;
                    if(var5) { _fun0006_ip = 13; continue _fun0006 }
case 14:
                    var5 = _closure2_slot4;
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
case 13:
                    return var2;
case 11:
                    return var1;
                }
            };
            var12 = var15.bind(var16)(var12, var14);
            var16 = _closure1_slot4;
            var15 = var16.useEffect;
            var14 = new Array(5);
            var14[0] = var17;
            var14[1] = var18;
            var14[2] = var13;
            var14[3] = var11;
            var14[4] = var23;
            var13 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0007_ip = 15; continue _fun0007 }
case 16:
                    var5 = _closure2_slot0;
                    var3 = '';
                    var2 = var3 !== var5;
case 15:
                    if(!var2) { _fun0007_ip = 17; continue _fun0007 }
case 18:
                    var2 = _closure2_slot7;
case 17:
                    if(!var2) { _fun0007_ip = 19; continue _fun0007 }
case 20:
                    var3 = _closure2_slot6;
                    var2 = !var3;
case 19:
                    if(!var2) { _fun0007_ip = 21; continue _fun0007 }
case 22:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 32;
                    var3 = var5[var3];
                    var5 = undefined;
                    var9 = var6.bind(var5)(var3);
                    var8 = var9.findQuestOrReplacement;
                    var7 = _closure2_slot0;
                    var6 = _closure2_slot4;
                    var3 = _closure2_slot5;
                    var3 = var8.bind(var9)(var7, var6, var3);
                    var3 = var4 == var3;
                    if(!var3) { _fun0007_ip = 23; continue _fun0007 }
case 24:
                    var4 = _closure2_slot9;
                    var6 = var4.current;
                    var4 = _closure2_slot0;
                    var3 = var6 !== var4;
case 23:
                    if(!var3) { _fun0007_ip = 21; continue _fun0007 }
case 25:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 35;
                    var3 = var6[var3];
                    var8 = var4.bind(var5)(var3);
                    var7 = var8.open;
                    var3 = {};
                    var9 = 'QUEST_HOME_MOBILE_DEEP_LINK_QUEST_NOT_FOUND';
                    var3['key'] = var9;
                    var12 = _closure1_slot0;
                    var9 = 20;
                    var10 = var6[var9];
                    var10 = var12.bind(var5)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var9 = var6[var9];
                    var9 = var12.bind(var5)(var9);
                    var9 = var9.t;
                    var9 = var9.sIyHuY;
                    var9 = var10.bind(var11)(var9);
                    var3['content'] = var9;
                    var9 = 36;
                    var9 = var6[var9];
                    var9 = var4.bind(var5)(var9);
                    var3['icon'] = var9;
                    var9 = 5000;
                    var3['toastDurationMs'] = var9;
                    var3 = var7.bind(var8)(var3);
                    var3 = 37;
                    var3 = var6[var3];
                    var6 = var4.bind(var5)(var3);
                    var5 = var6.track;
                    var2 = _closure1_slot12;
                    var4 = var2.QUEST_HOME_MOBILE_DEEP_LINK_MISSING_QUEST;
                    var3 = {};
                    var2 = _closure2_slot0;
                    var3['quest_id'] = var2;
                    var3 = var5.bind(var6)(var4, var3);
                    var1 = _closure2_slot9;
                    var1['current'] = var2;
case 21:
                    var1 = undefined;
                    return var1;
                }
            };
            var13 = var15.bind(var16)(var13, var14);
            var13 = {};
            var13['scrollToIndex'] = var12;
            var12 = function useScrollAndLayoutCallbacks(arg1) {
                var2 = arg1;
                var13 = var2.scrollToIndex;
                var _closure3_slot0 = var13;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 12;
                var2 = var4[var2];
                var12 = undefined;
                var5 = var3.bind(var12)(var2);
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
                var _closure3_slot1 = var14;
                var4 = _closure1_slot4;
                var3 = var4.useRef;
                var2 = null;
                var8 = var3.bind(var4)(var2);
                var _closure3_slot2 = var8;
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
                var7 = _closure1_slot4;
                var6 = var7.useCallback;
                var5 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
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
                        if(!var2) { _fun0008_ip = 26; continue _fun0008 }
case 7:
                        var10 = var6[var5];
                        var2 = var4 != var8;
                        if(!var2) { _fun0008_ip = 27; continue _fun0008 }
case 28:
                        var2 = var10 !== var8;
case 27:
                        if(var2) { _fun0008_ip = 29; continue _fun0008 }
case 30:
                        var9 = _closure3_slot3;
                        var9 = var9.current;
                        var9 = var9.children;
                        var9 = var9[var10];
                        var2 = var4 == var9;
                        var3 = var9;
case 29:
                        if(var2) { _fun0008_ip = 31; continue _fun0008 }
case 32:
                        var9 = var3.calculateVisibility;
                        var2 = var4 == var9;
case 31:
                        if(var2) { _fun0008_ip = 33; continue _fun0008 }
case 34:
                        var2 = var3.calculateVisibility;
                        var2 = var2.bind(var3)();
case 33:
                        var5 = var5 + 1;
                        var2 = var6.length;
                        if(var5 < var2) { _fun0008_ip = 7; continue _fun0008 }
case 26:
                        return var1;
                    }
                };
                var3 = new Array(0);
                var3 = var6.bind(var7)(var5, var3);
                var _closure3_slot4 = var3;
                var10 = _closure1_slot4;
                var7 = var10.useCallback;
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
                var7 = var7.bind(var10)(var5, var6);
                var11 = _closure1_slot4;
                var10 = var11.useCallback;
                var6 = new Array(1);
                var6[0] = var3;
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
                var6 = var10.bind(var11)(var5, var6);
                var11 = _closure1_slot4;
                var10 = var11.useState;
                var5 = false;
                var11 = var10.bind(var11)(var5);
                var10 = _closure1_slot3;
                var5 = 2;
                var5 = var10.bind(var12)(var11, var5);
                var15 = var5[var4];
                var _closure3_slot5 = var15;
                var4 = 1;
                var4 = var5[var4];
                var _closure3_slot6 = var4;
                var11 = _closure1_slot4;
                var10 = var11.useCallback;
                var5 = function() {
                    var3 = _closure3_slot6;
                    var1 = undefined;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var4 = new Array(0);
                var5 = var10.bind(var11)(var5, var4);
                var12 = _closure1_slot4;
                var11 = var12.useCallback;
                var10 = new Array(1);
                var10[0] = var3;
                var4 = function(arg1, arg2) {
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
                    var2[4] = var6;
                    var4[var3] = var2;
                    var2 = _closure3_slot4;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                };
                var4 = var11.bind(var12)(var4, var10);
                var16 = _closure1_slot4;
                var12 = var16.useCallback;
                var11 = new Array(1);
                var11[0] = var14;
                var10 = function(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var1 = _closure3_slot2;
                        var2 = var1.current;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0009_ip = 35; continue _fun0009 }
case 10:
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
                        var4 = 11;
                        var5 = var5[var4];
                        var4 = undefined;
                        var4 = var6.bind(var4)(var5);
                        var4 = var4.space;
                        var4 = var4.PX_8;
                        var1['viewOffset'] = var4;
                        var1 = var2.bind(var3)(var1);
case 35:
                        var1 = undefined;
                        return var1;
                    }
                };
                var12 = var12.bind(var16)(var10, var11);
                var _closure3_slot7 = var12;
                var16 = _closure1_slot4;
                var11 = var16.useCallback;
                var10 = new Array(1);
                var10[0] = var3;
                var3 = function(arg1) {
                    var2 = _closure3_slot3;
                    var2 = var2.current;
                    var3 = var2.parent;
                    var2 = arg1;
                    var2 = var2.nativeEvent;
                    var2 = var2.layout;
                    var2 = var2.height;
                    var3['firstItemOffset'] = var2;
                    var2 = _closure3_slot4;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var3 = var11.bind(var16)(var3, var10);
                var11 = _closure1_slot4;
                var10 = var11.useEffect;
                var9 = new Array(4);
                var9[0] = var15;
                var9[1] = var14;
                var9[2] = var13;
                var9[3] = var12;
                var1 = function() {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var4 = null;
                        var2 = var4 != var2;
                        if(!var2) { _fun0010_ip = 36; continue _fun0010 }
case 16:
                        var5 = _closure3_slot0;
                        var3 = -1;
                        var2 = var3 !== var5;
case 36:
                        if(!var2) { _fun0010_ip = 37; continue _fun0010 }
case 38:
                        var2 = _closure3_slot5;
case 37:
                        if(!var2) { _fun0010_ip = 39; continue _fun0010 }
case 40:
                        var3 = _closure3_slot7;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = _closure1_slot8;
                        var2 = var3.setState;
                        var1 = {};
                        var1['scrollToQuestId'] = var4;
                        var1 = var2.bind(var3)(var1);
case 39:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var10.bind(var11)(var1, var9);
                var1 = {};
                var1['scrollViewRef'] = var8;
                var1['handleListScroll'] = var7;
                var1['handleListLayout'] = var6;
                var1['handleListLoad'] = var5;
                var1['handleQuestCardLayout'] = var4;
                var1['handleHeaderLayout'] = var3;
                var1['visibilityRef'] = var2;
                return var1;
            };
            var16 = var12.bind(var6)(var13);
            var19 = var16.scrollViewRef;
            var _closure2_slot10 = var19;
            var13 = var16.handleListScroll;
            var14 = var16.handleListLayout;
            var12 = var16.handleListLoad;
            var15 = var16.handleQuestCardLayout;
            var _closure2_slot11 = var15;
            var30 = var16.handleHeaderLayout;
            var _closure2_slot12 = var30;
            var17 = var16.visibilityRef;
            var _closure2_slot13 = var17;
            var25 = _closure1_slot10;
            var16 = function(arg1) {
                var2 = arg1;
                var1 = var2.getUtmCurrentContext;
                var1 = var1.bind(var2)();
                return var1;
            };
            var28 = var25.bind(var6)(var16);
            var16 = 38;
            var16 = var27[var16];
            var21 = var21.bind(var6)(var16);
            var16 = {};
            var25 = 39;
            var29 = var27[var25];
            var29 = var26.bind(var6)(var29);
            var29 = var29.ImpressionNames;
            var29 = var29.QUEST_HOME;
            var16['name'] = var29;
            var25 = var27[var25];
            var25 = var26.bind(var6)(var25);
            var25 = var25.ImpressionTypes;
            var25 = var25.VIEW;
            var16['type'] = var25;
            var25 = {};
            var29 = var28.utmSourceCurrent;
            var25['utm_source_current'] = var29;
            var29 = var28.utmMediumCurrent;
            var25['utm_medium_current'] = var29;
            var29 = var28.utmCampaignCurrent;
            var25['utm_campaign_current'] = var29;
            var28 = var28.utmContentCurrent;
            var25['utm_content_current'] = var28;
            var28 = var27[var22];
            var28 = var26.bind(var6)(var28);
            var28 = var28.QuestTabs;
            var28 = var28.ALL;
            var25['tab'] = var28;
            var16['properties'] = var25;
            var16 = var21.bind(var6)(var16);
            var28 = _closure1_slot4;
            var25 = var28.useEffect;
            var21 = new Array(1);
            var21[0] = var4;
            var16 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = _closure2_slot3;
                    if(!var1) { _fun0011_ip = 22; continue _fun0011 }
case 41:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 40;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var2 = var1.QuestHomeOpenTriggerPoint;
                    var1 = var2.trigger;
                    var1 = var1.bind(var2)();
case 22:
                    var1 = undefined;
                    return var1;
                }
            };
            var16 = var25.bind(var28)(var16, var21);
            var25 = _closure1_slot4;
            var21 = var25.useEffect;
            var16 = new Array(4);
            var16[0] = var3;
            var16[1] = var24;
            var16[2] = var11;
            var16[3] = var19;
            var11 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var2 = _closure2_slot10;
                    var3 = var2.current;
                    var2 = null;
                    var2 = var2 != var3;
                    if(!var2) { _fun0012_ip = 42; continue _fun0012 }
case 43:
                    var2 = _closure2_slot7;
case 42:
                    if(!var2) { _fun0012_ip = 7; continue _fun0012 }
case 15:
                    var1 = _closure2_slot10;
                    var3 = var1.current;
                    var2 = var3.scrollToOffset;
                    var1 = {'offset': 0, 'animated': false};
                    var1 = var2.bind(var3)(var1);
case 7:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = var21.bind(var25)(var11, var16);
            var11 = var27[var22];
            var21 = var26.bind(var6)(var11);
            var16 = var21.useQuestHomeSortingFilteringAnalytics;
            var11 = {};
            var11['selectedSortMethod'] = var24;
            var11['selectedFilters'] = var3;
            var24 = var18.length;
            var11['numQuestsVisible'] = var24;
            var11 = var16.bind(var21)(var11);
            var11 = 41;
            var11 = var27[var11];
            var16 = var26.bind(var6)(var11);
            var11 = var16.useVirtualCurrencyMobileEnabled;
            var11 = var11.bind(var16)();
            var11 = var11.enabled;
            var16 = 42;
            var16 = var27[var16];
            var16 = var26.bind(var6)(var16);
            var24 = var16.QuestHomeBountiesExperiment;
            var21 = var24.useConfig;
            var16 = {};
            var25 = _closure1_slot11;
            var25 = var25.QUEST_HOME_MOBILE;
            var16['location'] = var25;
            var16 = var21.bind(var24)(var16);
            var24 = var16.enabled;
            var16 = 24;
            var16 = var27[var16];
            var16 = var26.bind(var6)(var16);
            var25 = var16.BountiesStage1Experiment;
            var21 = var25.useConfig;
            var16 = {};
            var28 = _closure1_slot11;
            var28 = var28.QUEST_HOME_MOBILE;
            var16['location'] = var28;
            var16 = var21.bind(var25)(var16);
            var21 = var16.verticalScrollEnabled;
            var16 = 43;
            var16 = var27[var16];
            var16 = var26.bind(var6)(var16);
            var28 = var16.OrbsHoldoutExperiment;
            var25 = var28.useConfig;
            var16 = {};
            var29 = _closure1_slot11;
            var29 = var29.QUEST_HOME_MOBILE;
            var16['location'] = var29;
            var16 = var25.bind(var28)(var16);
            var16 = var16.enabled;
            var25 = 44;
            var25 = var27[var25];
            var26 = var26.bind(var6)(var25);
            var25 = var26.useRoute;
            var25 = var25.bind(var26)();
            var25 = var25.params;
            var26 = var1 == var25;
            var28 = undefined;
            if(var26) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var28 = var25.previewAdCreativeIds;
case 44:
            var26 = _closure1_slot0;
            var25 = _closure1_slot2;
            var25 = var25[var22];
            var27 = var26.bind(var6)(var25);
            var26 = var27.useFetchQuestHomeBounties;
            var25 = {};
            var25['previewAdCreativeIds'] = var28;
            var26 = var26.bind(var27)(var25);
            var25 = var26.isLoading;
            var27 = var26.questHomeBounties;
            if(!var11) { _fun0004_ip = 46; continue _fun0004 }
case 47:
            var11 = var24;
case 46:
            if(!var11) { _fun0004_ip = 48; continue _fun0004 }
case 49:
            var11 = !var16;
case 48:
            if(!var11) { _fun0004_ip = 50; continue _fun0004 }
case 51:
            var24 = _closure1_slot0;
            var26 = _closure1_slot2;
            var16 = 45;
            var16 = var26[var16];
            var24 = var24.bind(var6)(var16);
            var16 = var24.shouldShowBountiesGivenFilters;
            var11 = var16.bind(var24)(var3);
case 50:
            _closure2_slot14 = var11;
            var24 = _closure1_slot0;
            var26 = _closure1_slot2;
            var16 = 46;
            var16 = var26[var16];
            var16 = var24.bind(var6)(var16);
            var29 = var16.BountiesShopCarouselExperiment;
            var28 = var29.useConfig;
            var16 = {};
            var31 = _closure1_slot11;
            var31 = var31.QUEST_HOME_MOBILE;
            var16['location'] = var31;
            var16 = var28.bind(var29)(var16);
            var29 = var16.enabled;
            var28 = var16.variation;
            var16 = 47;
            var16 = var26[var16];
            var26 = var24.bind(var6)(var16);
            var24 = var26.useQuestHomeOrbShopCarouselData;
            var16 = {};
            if(!var29) { _fun0004_ip = 52; continue _fun0004 }
case 53:
            var29 = var11;
case 52:
            var16['enabled'] = var29;
            var16['variation'] = var28;
            var16 = var24.bind(var26)(var16);
            var29 = var16.products;
            _closure2_slot15 = var29;
            var28 = var16.obtainableOrbRewards;
            _closure2_slot16 = var28;
            var16 = var16.showPlaceholderCarousel;
            _closure2_slot17 = var16;
            var26 = {};
            var24 = var11;
            if(!var11) { _fun0004_ip = 54; continue _fun0004 }
case 55:
            var24 = !var25;
case 54:
            if(!var24) { _fun0004_ip = 56; continue _fun0004 }
case 57:
            var31 = var27.length;
            var27 = 0;
            var24 = var31 > var27;
case 56:
            var26['bountiesAvailable'] = var24;
            var24 = function useSurveyActions(arg1) {
                var1 = arg1;
                var4 = var1.bountiesAvailable;
                var _closure3_slot0 = var4;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 13;
                var5 = var5[var1];
                var1 = undefined;
                var6 = var6.bind(var1)(var5);
                var5 = var6.useNavigation;
                var6 = var5.bind(var6)();
                var _closure3_slot1 = var6;
                var7 = _closure1_slot4;
                var5 = var7.useRef;
                var8 = false;
                var5 = var5.bind(var7)(var8);
                var _closure3_slot2 = var5;
                var7 = _closure1_slot4;
                var5 = var7.useRef;
                var5 = var5.bind(var7)(var8);
                var _closure3_slot3 = var5;
                var7 = _closure1_slot4;
                var5 = var7.useRef;
                var5 = var5.bind(var7)(var8);
                var _closure3_slot4 = var5;
                var8 = _closure1_slot4;
                var7 = var8.useEffect;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var2 = _closure3_slot0;
                        if(!var2) { _fun0013_ip = 58; continue _fun0013 }
case 41:
                        var2 = _closure3_slot2;
                        var1 = true;
                        var2['current'] = var1;
case 58:
                        var1 = undefined;
                        return var1;
                    }
                };
                var4 = var7.bind(var8)(var4, var5);
                var8 = _closure1_slot4;
                var7 = var8.useEffect;
                var5 = function() {
                    var5 = function handleBountiesModalPush(arg1) {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                            var1 = arg1;
                            var3 = var1.key;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 14;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var4.bind(var1)(var2);
                            var2 = var2.BOUNTIES_MODAL_KEY;
                            if(!(var3 === var2)) { _fun0014_ip = 7; continue _fun0014 }
case 59:
                            var3 = _closure3_slot3;
                            var2 = true;
                            var3['current'] = var2;
case 7:
                            return var1;
                        }
                    };
                    var _closure4_slot0 = var5;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 15;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.subscribe;
                    var2 = 'MODAL_PUSH';
                    var2 = var3.bind(var4)(var2, var5);
                    var1 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 15;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.unsubscribe;
                        var3 = _closure4_slot0;
                        var2 = 'MODAL_PUSH';
                        var2 = var4.bind(var5)(var2, var3);
                        return var1;
                    };
                    return var1;
                };
                var4 = new Array(0);
                var4 = var7.bind(var8)(var5, var4);
                var8 = _closure1_slot4;
                var7 = var8.useEffect;
                var5 = function() {
                    var5 = function handleClaimSuccess() {
                        var2 = _closure3_slot4;
                        var1 = true;
                        var2['current'] = var1;
                        var1 = undefined;
                        return var1;
                    };
                    var _closure4_slot0 = var5;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 15;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.subscribe;
                    var2 = 'BOUNTIES_CLAIM_REWARD_SUCCESS';
                    var2 = var3.bind(var4)(var2, var5);
                    var1 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 15;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.unsubscribe;
                        var3 = _closure4_slot0;
                        var2 = 'BOUNTIES_CLAIM_REWARD_SUCCESS';
                        var2 = var4.bind(var5)(var2, var3);
                        return var1;
                    };
                    return var1;
                };
                var4 = new Array(0);
                var4 = var7.bind(var8)(var5, var4);
                var5 = _closure1_slot4;
                var4 = var5.useEffect;
                var3 = new Array(1);
                var3[0] = var6;
                var2 = function() {
                    var4 = _closure3_slot1;
                    var3 = var4.addListener;
                    var2 = 'beforeRemove';
                    var1 = function() {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                            var1 = _closure3_slot2;
                            var1 = var1.current;
                            if(!var1) { _fun0015_ip = 60; continue _fun0015 }
case 10:
                            var1 = _closure3_slot4;
                            var3 = var1.current;
                            if(var3) { _fun0015_ip = 34; continue _fun0015 }
case 38:
                            var2 = _closure3_slot3;
                            var5 = var2.current;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var2 = 16;
                            var2 = var8[var2];
                            var6 = undefined;
                            var4 = var7.bind(var6)(var2);
                            var3 = var4.fireSurveyAction;
                            var2 = 17;
                            var2 = var8[var2];
                            var2 = var7.bind(var6)(var2);
                            var2 = var2.SurveyActionTypes;
                            if(var5) { _fun0015_ip = 32; continue _fun0015 }
case 61:
                            var5 = var2.BOUNTY_IMMEDIATE_DISMISSAL;
                            var5 = var3.bind(var4)(var5);
                            _fun0015_ip = 60; continue _fun0015;
case 32:
                            var2 = var2.BOUNTY_ABANDONED;
                            var2 = var3.bind(var4)(var2);
                            _fun0015_ip = 60; continue _fun0015;
case 34:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 16;
                            var1 = var6[var1];
                            var4 = undefined;
                            var3 = var5.bind(var4)(var1);
                            var2 = var3.fireSurveyAction;
                            var1 = 17;
                            var1 = var6[var1];
                            var1 = var5.bind(var4)(var1);
                            var1 = var1.SurveyActionTypes;
                            var1 = var1.BOUNTY_SESSION_COMPLETED;
                            var1 = var2.bind(var3)(var1);
case 60:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            };
            var24 = var24.bind(var6)(var26);
            var27 = _closure1_slot4;
            var26 = var27.useCallback;
            var24 = new Array(5);
            var24[0] = var11;
            var24[1] = var30;
            var24[2] = var29;
            var24[3] = var28;
            var24[4] = var16;
            var16 = function() {
                var4 = _closure1_slot14;
                var3 = _closure1_slot18;
                var2 = {};
                var5 = _closure2_slot14;
                var2['shouldShowBounties'] = var5;
                var5 = _closure2_slot12;
                var2['onLayout'] = var5;
                var5 = _closure2_slot15;
                var2['orbShopProducts'] = var5;
                var5 = _closure2_slot16;
                var2['obtainableOrbRewards'] = var5;
                var1 = _closure2_slot17;
                var2['showOrbShopPlaceholderCarousel'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var16 = var26.bind(var27)(var16, var24);
            var27 = _closure1_slot4;
            var26 = var27.useCallback;
            var24 = new Array(1);
            var24[0] = var17;
            var17 = function(arg1) {
                var1 = arg1;
                var6 = var1.item;
                var _closure3_slot0 = var6;
                var9 = var1.index;
                var _closure3_slot1 = var9;
                var4 = _closure1_slot14;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 48;
                var1 = var8[var1];
                var3 = undefined;
                var1 = var7.bind(var3)(var1);
                var2 = var1.QuestContentImpressionTrackerNative;
                var1 = {};
                var1['questOrQuests'] = var6;
                var6 = 49;
                var10 = var8[var6];
                var10 = var7.bind(var3)(var10);
                var10 = var10.QuestContent;
                var10 = var10.QUEST_HOME_MOBILE;
                var1['questContent'] = var10;
                var1['questContentPosition'] = var9;
                var9 = false;
                var1['trackGuildAndChannelMetadata'] = var9;
                var9 = _closure2_slot13;
                var1['visibilityRef'] = var9;
                var9 = true;
                var1['skipRemountKey'] = var9;
                var6 = var8[var6];
                var6 = var7.bind(var3)(var6);
                var6 = var6.QuestContent;
                var6 = var6.QUEST_HOME_MOBILE;
                var1['sourceQuestContent'] = var6;
                var5 = function children() {
                    var4 = _closure1_slot14;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 50;
                    var1 = var7[var1];
                    var3 = undefined;
                    var1 = var6.bind(var3)(var1);
                    var2 = var1.QuestCard;
                    var1 = {};
                    var8 = _closure3_slot0;
                    var1['quest'] = var8;
                    var5 = _closure3_slot1;
                    var1['questContentPosition'] = var5;
                    var5 = 0;
                    var1['containerPadding'] = var5;
                    var5 = 49;
                    var5 = var7[var5];
                    var5 = var6.bind(var3)(var5);
                    var5 = var5.QuestContent;
                    var5 = var5.QUEST_HOME_MOBILE;
                    var1['sourceQuestContent'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                var1['children'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var17 = var26.bind(var27)(var17, var24);
            var27 = _closure1_slot4;
            var26 = var27.useCallback;
            var24 = new Array(2);
            var24[0] = var18;
            var24[1] = var15;
            var15 = function(arg1) {
                var5 = arg1;
                var _closure3_slot0 = var5;
                var4 = _closure1_slot14;
                var3 = _closure1_slot5;
                var2 = {};
                var7 = var2;
                var6 = var5;
                var5 = copyDataProperties(var7, var6);
                var5 = function onLayout(arg1) {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                        var3 = arg1;
                        var5 = _closure2_slot4;
                        var2 = _closure3_slot0;
                        var2 = var2.index;
                        var2 = var5[var2];
                        var5 = null;
                        if(!(var5 != var2)) { _fun0016_ip = 62; continue _fun0016 }
case 63:
                        var5 = _closure2_slot11;
                        var4 = var2.id;
                        var2 = undefined;
                        var2 = var5.bind(var2)(var3, var4);
case 62:
                        var2 = _closure3_slot0;
                        var1 = var2.onLayout;
                        var1 = var1.bind(var2)(var3);
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = 'onLayout';
                var2[0] = var5;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var15 = var26.bind(var27)(var15, var24);
            var2 = !var2;
            if(var2) { _fun0004_ip = 64; continue _fun0004 }
case 65:
            var24 = var11;
            if(!var24) { _fun0004_ip = 66; continue _fun0004 }
case 67:
            var24 = var25;
case 66:
            var2 = var24;
case 64:
            if(var2) { _fun0004_ip = 68; continue _fun0004 }
case 69:
            if(!var23) { _fun0004_ip = 70; continue _fun0004 }
case 71:
            var25 = var18.length;
            var24 = 0;
            var23 = var24 === var25;
case 70:
            var2 = var23;
case 68:
            _closure2_slot18 = var2;
            var24 = _closure1_slot4;
            var23 = var24.useRef;
            var23 = var23.bind(var24)(var11);
            _closure2_slot19 = var23;
            var25 = _closure1_slot4;
            var24 = var25.useEffect;
            var23 = new Array(1);
            var23[0] = var11;
            var11 = function() {
                var2 = _closure2_slot19;
                var1 = _closure2_slot14;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var11 = var24.bind(var25)(var11, var23);
            var25 = _closure1_slot4;
            var24 = var25.useEffect;
            var23 = new Array(1);
            var23[0] = var4;
            var11 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var1 = _closure2_slot3;
                    if(var1) { _fun0017_ip = 72; continue _fun0017 }
case 41:
                    var1 = undefined;
                    return var1;
case 72:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 51;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.startTracking;
                    var1 = {};
                    var4 = _closure2_slot19;
                    var4 = var4.current;
                    var1['includesBounties'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 51;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.clearTracking;
                        var2 = var2.bind(var3)();
                        return var1;
                    };
                    return var1;
                }
            };
            var11 = var24.bind(var25)(var11, var23);
            var24 = _closure1_slot4;
            var23 = var24.useEffect;
            var11 = new Array(2);
            var11[0] = var4;
            var11[1] = var2;
            var5 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var1 = _closure2_slot3;
                    if(!var1) { _fun0018_ip = 73; continue _fun0018 }
case 41:
                    var2 = _closure2_slot18;
                    var1 = !var2;
case 73:
                    if(!var1) { _fun0018_ip = 74; continue _fun0018 }
case 75:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 51;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.stopTracking;
                    var1 = {};
                    var4 = _closure2_slot19;
                    var4 = var4.current;
                    var1['includesBounties'] = var4;
                    var1 = var2.bind(var3)(var1);
case 74:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var23.bind(var24)(var5, var11);
            var11 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var22];
            var11 = var11.bind(var6)(var5);
            var5 = var11.useShouldShowPreviewToolTab;
            var22 = var5.bind(var11)();
            var1 = null;
            if(!var4) { _fun0004_ip = 76; continue _fun0004 }
case 77:
            if(var2) { _fun0004_ip = 78; continue _fun0004 }
case 79:
            var2 = var18.length;
            var4 = 0;
            if(!(var4 !== var2)) { _fun0004_ip = 80; continue _fun0004 }
case 81:
            var11 = _closure1_slot14;
            var5 = _closure1_slot0;
            var23 = _closure1_slot2;
            var2 = 52;
            var2 = var23[var2];
            var2 = var5.bind(var6)(var2);
            var5 = var2.FlashList;
            var2 = {};
            var2['ref'] = var19;
            var19 = {};
            if(!var21) { _fun0004_ip = 82; continue _fun0004 }
case 83:
            var21 = 0;
            if(!var22) { _fun0004_ip = 84; continue _fun0004 }
case 82:
            var23 = _closure1_slot1;
            var24 = _closure1_slot2;
            var22 = 11;
            var22 = var24[var22];
            var22 = var23.bind(var6)(var22);
            var22 = var22.space;
            var21 = var22.PX_16;
case 84:
            var19['paddingTop'] = var21;
            var19['paddingBottom'] = var20;
            var2['contentContainerStyle'] = var19;
            var20 = var8.container;
            var19 = new Array(2);
            var19[0] = var20;
            var19[1] = var9;
            var2['style'] = var19;
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var19 = 20;
            var20 = var23[var19];
            var20 = var22.bind(var6)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var19 = var23[var19];
            var19 = var22.bind(var6)(var19);
            var19 = var19.t;
            var19 = var19.JALI2K;
            var19 = var20.bind(var21)(var19);
            var2['accessibilityLabel'] = var19;
            var2['data'] = var18;
            var2['renderItem'] = var17;
            var17 = false;
            var2['showsHorizontalScrollIndicator'] = var17;
            var2['ListHeaderComponent'] = var16;
            var2['CellRendererComponent'] = var15;
            var2['onLayout'] = var14;
            var2['onScroll'] = var13;
            var2['onLoad'] = var12;
            var12 = 16;
            var2['scrollEventThrottle'] = var12;
            var2 = var11.bind(var6)(var5, var2);
            _fun0004_ip = 85; continue _fun0004;
case 80:
            var3 = var3.length;
            if(!(var4 !== var3)) { _fun0004_ip = 86; continue _fun0004 }
case 87:
            var5 = _closure1_slot14;
            var4 = _closure1_slot20;
            var3 = {};
            var3['onClearFilters'] = var10;
            var3 = var5.bind(var6)(var4, var3);
            _fun0004_ip = 88; continue _fun0004;
case 86:
            var10 = _closure1_slot14;
            var5 = _closure1_slot19;
            var4 = {};
            var3 = var10.bind(var6)(var5, var4);
case 88:
            var2 = var3;
case 85:
            _fun0004_ip = 89; continue _fun0004;
case 78:
            var5 = _closure1_slot14;
            var4 = _closure1_slot5;
            var3 = {};
            var10 = var8.loadingContainer;
            var8 = new Array(2);
            var8[0] = var10;
            var8[1] = var9;
            var3['style'] = var8;
            var9 = _closure1_slot14;
            var8 = _closure1_slot6;
            var7 = {};
            var10 = true;
            var7['animating'] = var10;
            var7 = var9.bind(var6)(var8, var7);
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 89:
            var1 = var2;
case 76:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 53;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestHome.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();