// app/modules/quests/native/QuestHomeSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function parseSortMethod(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = global;
            var4 = var2.Object;
            var3 = var4.values;
            var2 = _closure1_slot6;
            var3 = var3.bind(var4)(var2);
            var2 = var3.includes;
            var2 = var2.bind(var3)(var1);
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var2 = _closure1_slot6;
            var1 = var2.SUGGESTED;
case 4:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function parseFilters(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var2 = null;
            if(!(var2 != var4)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
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
            if(!(!(var3 > var2))) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var1 = _closure1_slot10;
case 7:
            return var1;
case 5:
            var1 = _closure1_slot10;
            return var1;
        }
    };
    var _closure1_slot12 = var1;
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
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
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
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestHomeSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function QuestHomeSetting() {
        var3 = _closure1_slot9;
        var4 = undefined;
        var10 = var3.bind(var4)();
        var12 = _closure1_slot4;
        var5 = var12.useState;
        var3 = function() {
            var3 = _closure1_slot11;
            var4 = _closure1_slot5;
            var2 = var4.getField;
            var1 = 'sort';
            var2 = var2.bind(var4)(var1);
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var3 = var5.bind(var12)(var3);
        var16 = _closure1_slot3;
        var15 = 2;
        var3 = var16.bind(var4)(var3, var15);
        var9 = 0;
        var7 = var3[var9];
        var8 = 1;
        var14 = var3[var8];
        var _closure2_slot0 = var14;
        var5 = var12.useState;
        var3 = function() {
            var3 = _closure1_slot12;
            var4 = _closure1_slot5;
            var2 = var4.getField;
            var1 = 'filter';
            var2 = var2.bind(var4)(var1);
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var3 = var5.bind(var12)(var3);
        var3 = var16.bind(var4)(var3, var15);
        var6 = var3[var9];
        var13 = var3[var8];
        var _closure2_slot1 = var13;
        var11 = var12.useEffect;
        var5 = function() {
            var5 = _closure1_slot5;
            var4 = var5.subscribe;
            var3 = {};
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 8;
            var6 = var6[var2];
            var2 = undefined;
            var2 = var7.bind(var2)(var6);
            var2 = var2.shallow;
            var3['equalityFn'] = var2;
            var2 = true;
            var3['fireImmediately'] = var2;
            var2 = function(arg1) {
                var1 = arg1;
                var3 = var1.sort;
                var2 = var1.filter;
                var1 = {};
                var1['sort'] = var3;
                var1['filter'] = var2;
                return var1;
            };
            var1 = function(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var2 = arg2;
                    var4 = var1.sort;
                    var3 = var2.sort;
                    if(!(var4 !== var3)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var5 = _closure2_slot0;
                    var6 = _closure1_slot11;
                    var3 = var1.sort;
                    var4 = undefined;
                    var3 = var6.bind(var4)(var3);
                    var3 = var5.bind(var4)(var3);
case 9:
                    var3 = var1.filter;
                    var2 = var2.filter;
                    if(!(var3 !== var2)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var3 = _closure2_slot1;
                    var4 = _closure1_slot12;
                    var1 = var1.filter;
                    var2 = undefined;
                    var1 = var4.bind(var2)(var1);
                    var1 = var3.bind(var2)(var1);
case 11:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var2, var1, var3);
            return var1;
        };
        var3 = new Array(0);
        var3 = var11.bind(var12)(var5, var3);
        var5 = _closure1_slot0;
        var11 = _closure1_slot2;
        var3 = 7;
        var3 = var11[var3];
        var5 = var5.bind(var4)(var3);
        var3 = var5.useNavigation;
        var3 = var3.bind(var5)();
        var _closure2_slot2 = var3;
        var17 = var12.useState;
        var5 = false;
        var5 = var17.bind(var12)(var5);
        var5 = var16.bind(var4)(var5, var15);
        var9 = var5[var9];
        var5 = var5[var8];
        var _closure2_slot3 = var5;
        var8 = var12.useEffect;
        var5 = new Array(1);
        var5[0] = var3;
        var3 = function() {
            var4 = _closure2_slot2;
            var3 = var4.addListener;
            var2 = 'transitionEnd';
            var1 = function() {
                var3 = _closure2_slot3;
                var2 = undefined;
                var1 = true;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var3 = var8.bind(var12)(var3, var5);
        var8 = var12.useCallback;
        var5 = function() {
            var3 = _closure2_slot1;
            var2 = _closure1_slot10;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var3 = new Array(0);
        var5 = var8.bind(var12)(var5, var3);
        var8 = var12.useEffect;
        var3 = function() {
            var1 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 9;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.close;
                var3 = var3.bind(var4)();
                var3 = _closure1_slot5;
                var2 = var3.resetState;
                var2 = var2.bind(var3)();
                return var1;
            };
            return var1;
        };
        var2 = new Array(0);
        var2 = var8.bind(var12)(var3, var2);
        var8 = _closure1_slot5;
        var3 = var8.useField;
        var2 = 'scrollToQuestId';
        var8 = var3.bind(var8)(var2);
        var2 = _closure1_slot1;
        var3 = 10;
        var3 = var11[var3];
        var12 = var2.bind(var4)(var3);
        var3 = {};
        var3['setSelectedSortMethod'] = var14;
        var3['setSelectedFilters'] = var13;
        var3['selectedFilters'] = var6;
        var3['selectedSortMethod'] = var7;
        var3 = var12.bind(var4)(var3);
        var3 = _closure1_slot8;
        var1 = 11;
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