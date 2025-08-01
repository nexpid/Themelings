// app/modules/guild_profile/hooks/useProfileSortedGames.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function getSortPriority(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot5;
            var2 = var3.get;
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var3 = var1 != var2;
            var1 = 0;
            if(!var3) { _fun0001_ip = 34; continue _fun0001 }
 31:
            var1 = var2;
 34:
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var4 = function isNSFWGame(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var3 = null;
            var4 = var3 == var2;
            var6 = undefined;
            var1 = undefined;
            if(var4) { _fun0002_ip = 22; continue _fun0002 }
 16:
            var1 = var2.themes;
 22:
            var1 = var3 != var1;
            if(!var1) { _fun0002_ip = 80; continue _fun0002 }
 29:
            var4 = var2.themes;
            var3 = var4.includes;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 3;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.DetectableApplicationTheme;
            var2 = var2.EROTIC;
            var1 = var3.bind(var4)(var2);
 80:
            return var1;
        }
    };
    var _closure1_slot7 = var4;
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
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.HOISTED_SEARCH_APPLICATION_IDS_BY_PRIORITY;
    var _closure1_slot5 = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_profile/hooks/useProfileSortedGames.tsx';
    var5 = var6.bind(var7)(var5);
    var3['isNSFWGame'] = var4;
    var2 = function useProfileSortedGames() {
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 4;
        var4 = var4[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.useStateFromStores;
        var1 = _closure1_slot4;
        var4 = new Array(1);
        var4[0] = var1;
        var1 = function() {
            var1 = _closure1_slot4;
            var1 = var1.games;
            return var1;
        };
        var1 = var5.bind(var6)(var4, var1);
        var _closure2_slot0 = var1;
        var5 = _closure1_slot3;
        var4 = var5.useMemo;
        var3 = new Array(1);
        var3[0] = var1;
        var1 = function() {
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 5;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = _closure2_slot0;
            var4 = var3.bind(var4)(var2);
            var3 = var4.filter;
            var2 = function(arg1) {
                var3 = _closure1_slot7;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                var1 = !var1;
                return var1;
            };
            var4 = var3.bind(var4)(var2);
            var3 = var4.map;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var3 = var2.id;
                var1['value'] = var3;
                var2 = var2.name;
                var1['label'] = var2;
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.sortBy;
            var1 = function(arg1) {
                var1 = arg1;
                var3 = var1.value;
                var2 = _closure1_slot6;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.reverse;
            var2 = var1.bind(var2)();
            var1 = var2.value;
            var1 = var1.bind(var2)();
            return var1;
        };
        var3 = var4.bind(var5)(var1, var3);
        var6 = var5.useCallback;
        var4 = function(arg1, arg2) {
            var4 = _closure1_slot6;
            var1 = arg2;
            var1 = var1.item;
            var1 = var1.value;
            var3 = undefined;
            var2 = var4.bind(var3)(var1);
            var1 = arg1;
            var1 = var1.item;
            var1 = var1.value;
            var1 = var4.bind(var3)(var1);
            var1 = var2 - var1;
            return var1;
        };
        var1 = new Array(0);
        var6 = var6.bind(var5)(var4, var1);
        var _closure2_slot1 = var6;
        var1 = {};
        var1['options'] = var3;
        var4 = var5.useMemo;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            var1 = {};
            var2 = _closure2_slot1;
            var1['baseSort'] = var2;
            var2 = ['label'];
            var1['keys'] = var2;
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        var1['matchSorterOptions'] = var2;
        return var1;
    };
    var3['useProfileSortedGames'] = var2;
    return var1;
})();