// app/modules/quests/native/QuestHomeSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function getQuestHomeSortingFilteringPressHandler(arg1) {
        var2 = arg1;
        var3 = var2.onSortMethodChange;
        var _closure2_slot0 = var3;
        var3 = var2.onFiltersChange;
        var _closure2_slot1 = var3;
        var3 = var2.initialSortMethod;
        var _closure2_slot2 = var3;
        var2 = var2.initialFilters;
        var _closure2_slot3 = var2;
        var1 = function() {
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 8;
            var4 = var2[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var4);
            var5 = var6.openLazy;
            var4 = _closure1_slot0;
            var3 = 10;
            var3 = var2[var3];
            var4 = var4.bind(var1)(var3);
            var3 = 9;
            var3 = var2[var3];
            var2 = var2.paths;
            var4 = var4.bind(var1)(var3, var2);
            var3 = {};
            var7 = _closure2_slot0;
            var3['onSortMethodChange'] = var7;
            var7 = _closure2_slot1;
            var3['onFiltersChange'] = var7;
            var7 = _closure2_slot2;
            var3['initialSortMethod'] = var7;
            var2 = _closure2_slot3;
            var3['initialFilters'] = var2;
            var2 = 'QuestHomeSortingFilteringBottomSheet';
            var2 = var5.bind(var6)(var4, var2, var3);
            return var1;
        };
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = function getSortMethodFromSearchParams(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = null;
            var4 = var3 == var2;
            var1 = undefined;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2.sort;
case 2:
            if(!(var3 != var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = global;
            var4 = var1.Object;
            var3 = var4.values;
            var1 = _closure1_slot6;
            var4 = var3.bind(var4)(var1);
            var3 = var4.includes;
            var1 = var2.sort;
            var1 = var3.bind(var4)(var1);
            if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 4:
            var1 = _closure1_slot6;
            var1 = var1.SUGGESTED;
            _fun0001_ip = 7; continue _fun0001;
case 6:
            var1 = var2.sort;
case 7:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function getFiltersFromSearchParams(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var4 = null;
            var5 = var4 == var2;
            var3 = undefined;
            if(var5) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var3 = var2.filter;
case 8:
            if(!(var4 != var3)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var4 = var2.filter;
            var3 = var4.split;
            var2 = ',';
            var4 = var3.bind(var4)(var2);
            var3 = var4.map;
            var2 = function(arg1) {
                var3 = _closure1_slot7;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.filter;
            var1 = function(arg1) {
                var2 = null;
                var1 = arg1;
                var1 = var2 != var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var3 = var1.length;
            var2 = 0;
            if(!(!(var3 > var2))) { _fun0002_ip = 12; continue _fun0002 }
case 7:
            var1 = _closure1_slot10;
case 12:
            return var1;
case 10:
            var1 = _closure1_slot10;
            return var1;
        }
    };
    var _closure1_slot13 = var1;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.QuestHomeSortMethods;
    var _closure1_slot6 = var7;
    var4 = var4.getQuestHomeFilterOptionItem;
    var _closure1_slot7 = var4;
    var10 = 4;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['marginRight'] = var10;
    var4['headerIcon'] = var9;
    var9 = {};
    var10 = 6;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOWER;
    var9['backgroundColor'] = var10;
    var4['container'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = new Array(0);
    var _closure1_slot10 = var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestHomeSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function QuestHomeSetting() {
        var3 = _closure1_slot9;
        var4 = undefined;
        var10 = var3.bind(var4)();
        var _closure2_slot0 = var10;
        var8 = _closure1_slot0;
        var11 = _closure1_slot2;
        var3 = 11;
        var5 = var11[var3];
        var9 = var8.bind(var4)(var5);
        var7 = var9.useStateFromStores;
        var13 = _closure1_slot5;
        var6 = new Array(1);
        var6[0] = var13;
        var5 = function() {
            var2 = _closure1_slot5;
            var1 = var2.getSearchParams;
            var1 = var1.bind(var2)();
            return var1;
        };
        var12 = var7.bind(var9)(var6, var5);
        var _closure2_slot1 = var12;
        var16 = _closure1_slot4;
        var6 = var16.useState;
        var5 = function() {
            var3 = _closure1_slot12;
            var2 = _closure2_slot1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var5 = var6.bind(var16)(var5);
        var15 = _closure1_slot3;
        var14 = 2;
        var5 = var15.bind(var4)(var5, var14);
        var6 = 0;
        var7 = var5[var6];
        var _closure2_slot2 = var7;
        var9 = 1;
        var5 = var5[var9];
        var _closure2_slot3 = var5;
        var17 = var16.useState;
        var5 = function() {
            var3 = _closure1_slot13;
            var2 = _closure2_slot1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var5 = var17.bind(var16)(var5);
        var5 = var15.bind(var4)(var5, var14);
        var6 = var5[var6];
        var _closure2_slot4 = var6;
        var5 = var5[var9];
        var _closure2_slot5 = var5;
        var5 = 7;
        var5 = var11[var5];
        var9 = var8.bind(var4)(var5);
        var5 = var9.useNavigation;
        var19 = var5.bind(var9)();
        var _closure2_slot6 = var19;
        var5 = function() {
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 7;
            var3 = var5[var3];
            var7 = undefined;
            var4 = var4.bind(var7)(var3);
            var3 = var4.useNavigation;
            var6 = var3.bind(var4)();
            var _closure3_slot0 = var6;
            var5 = _closure1_slot4;
            var4 = var5.useState;
            var3 = false;
            var4 = var4.bind(var5)(var3);
            var3 = _closure1_slot3;
            var1 = 2;
            var4 = var3.bind(var7)(var4, var1);
            var1 = 0;
            var1 = var4[var1];
            var3 = 1;
            var3 = var4[var3];
            var _closure3_slot1 = var3;
            var4 = var5.useEffect;
            var3 = new Array(1);
            var3[0] = var6;
            var2 = function() {
                var4 = _closure3_slot0;
                var3 = var4.addListener;
                var2 = 'transitionEnd';
                var1 = function() {
                    var3 = _closure3_slot1;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        };
        var9 = var5.bind(var4)();
        var15 = var16.useMemo;
        var14 = new Array(2);
        var14[0] = var6;
        var14[1] = var7;
        var5 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = _closure2_slot4;
                var2 = var1.length;
                var1 = 0;
                var1 = var2 > var1;
                var3 = _closure2_slot2;
                var2 = _closure1_slot6;
                var2 = var2.SUGGESTED;
                var2 = var3 !== var2;
                if(var1) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                var1 = var2;
case 13:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 6;
                var2 = var4[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var2 = var2.colors;
                if(var1) { _fun0003_ip = 6; continue _fun0003 }
case 15:
                var13 = var2.INTERACTIVE_NORMAL;
                _fun0003_ip = 7; continue _fun0003;
case 6:
                var13 = var2.WHITE;
case 7:
                var6 = 'tertiary';
                if(!var1) { _fun0003_ip = 16; continue _fun0003 }
case 12:
                var6 = 'primary';
case 16:
                var3 = _closure1_slot8;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 12;
                var1 = var9[var1];
                var1 = var8.bind(var4)(var1);
                var2 = var1.BaseIconButton;
                var1 = {};
                var10 = 13;
                var10 = var9[var10];
                var10 = var8.bind(var4)(var10);
                var12 = var10.FiltersHorizontalIcon;
                var11 = {};
                var10 = 'sm';
                var11['size'] = var10;
                var11['color'] = var13;
                var11 = var3.bind(var4)(var12, var11);
                var1['icon'] = var11;
                var1['size'] = var10;
                var1['variant'] = var6;
                var6 = _closure1_slot11;
                var5 = {};
                var10 = _closure2_slot3;
                var5['onSortMethodChange'] = var10;
                var10 = _closure2_slot5;
                var5['onFiltersChange'] = var10;
                var10 = _closure2_slot4;
                var5['initialFilters'] = var10;
                var7 = _closure2_slot2;
                var5['initialSortMethod'] = var7;
                var5 = var6.bind(var4)(var5);
                var1['onPress'] = var5;
                var5 = 14;
                var6 = var9[var5];
                var6 = var8.bind(var4)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var4)(var5);
                var5 = var5.t;
                var5 = var5.UdhTtk;
                var5 = var6.bind(var7)(var5);
                var1['accessibilityLabel'] = var5;
                var5 = 4;
                var1['scaleAmountInPx'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var14 = var15.bind(var16)(var5, var14);
        var _closure2_slot7 = var14;
        var5 = 15;
        var5 = var11[var5];
        var17 = var8.bind(var4)(var5);
        var15 = var17.useVirtualCurrencyMobileEnabled;
        var5 = {};
        var18 = 'quest_home_setting_header';
        var5['location'] = var18;
        var5 = var15.bind(var17)(var5);
        var5 = var5.enabled;
        var _closure2_slot8 = var5;
        var17 = var16.useMemo;
        var15 = new Array(3);
        var15[0] = var19;
        var15[1] = var5;
        var15[2] = var14;
        var5 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = _closure2_slot8;
                var1 = undefined;
                if(!var2) { _fun0004_ip = 8; continue _fun0004 }
case 17:
                var1 = function() {
                    var4 = _closure1_slot8;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 16;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var6 = _closure2_slot6;
                    var1['navigation'] = var6;
                    var5 = _closure2_slot7;
                    var1['headerRight'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
case 8:
                return var1;
            }
        };
        var18 = var17.bind(var16)(var5, var15);
        var _closure2_slot9 = var18;
        var17 = var16.useCallback;
        var15 = function() {
            var3 = _closure2_slot5;
            var2 = _closure1_slot10;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var5 = new Array(0);
        var5 = var17.bind(var16)(var15, var5);
        var17 = var16.useLayoutEffect;
        var15 = new Array(4);
        var15[0] = var19;
        var15[1] = var10;
        var15[2] = var18;
        var15[3] = var14;
        var14 = function() {
            var3 = _closure2_slot6;
            var2 = var3.setOptions;
            var1 = {};
            var5 = _closure2_slot9;
            var1['header'] = var5;
            var5 = function headerTitle() {
                var4 = _closure1_slot8;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 17;
                var1 = var7[var1];
                var3 = undefined;
                var1 = var6.bind(var3)(var1);
                var2 = var1.NavigatorHeader;
                var1 = {};
                var5 = 14;
                var8 = var7[var5];
                var8 = var6.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.JALI2K;
                var5 = var8.bind(var9)(var5);
                var1['title'] = var5;
                var5 = 18;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.QuestsIcon;
                var5 = {};
                var7 = _closure2_slot0;
                var7 = var7.headerIcon;
                var5['style'] = var7;
                var5 = var4.bind(var3)(var6, var5);
                var1['icon'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var1['headerTitle'] = var5;
            var4 = function headerRight() {
                var1 = _closure2_slot7;
                return var1;
            };
            var1['headerRight'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var14 = var17.bind(var16)(var14, var15);
        var17 = var16.useEffect;
        var15 = function() {
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 19;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.close;
                var2 = var2.bind(var3)();
                return var1;
            };
            return var1;
        };
        var14 = new Array(0);
        var14 = var17.bind(var16)(var15, var14);
        var15 = var16.useEffect;
        var14 = new Array(1);
        var14[0] = var12;
        var12 = function() {
            var6 = _closure2_slot3;
            var5 = _closure1_slot12;
            var4 = _closure2_slot1;
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var5 = var6.bind(var1)(var5);
            var3 = _closure2_slot5;
            var2 = _closure1_slot13;
            var2 = var2.bind(var1)(var4);
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var12 = var15.bind(var16)(var12, var14);
        var3 = var11[var3];
        var12 = var8.bind(var4)(var3);
        var8 = var12.useStateFromStores;
        var3 = new Array(1);
        var3[0] = var13;
        var2 = function() {
            var2 = _closure1_slot5;
            var1 = var2.getSubsection;
            var1 = var1.bind(var2)();
            return var1;
        };
        var8 = var8.bind(var12)(var3, var2);
        var3 = _closure1_slot8;
        var2 = _closure1_slot1;
        var1 = 20;
        var1 = var11[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var10 = var10.container;
        var1['containerStyle'] = var10;
        var1['isNavigationComplete'] = var9;
        var1['scrollToQuestId'] = var8;
        var1['sortMethod'] = var7;
        var1['filters'] = var6;
        var1['onClearFilters'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();