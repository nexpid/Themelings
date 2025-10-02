// app/modules/guild_profile/hooks/useGuildProfileGames.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var2 = function useAllGuildProfileGames(arg1) {
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var3 = 1;
        var3 = var5[var3];
        var5 = undefined;
        var4 = var4.bind(var5)(var3);
        var3 = arg1;
        var3 = var3.gameApplicationIds;
        var5 = var4.bind(var5)(var3);
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure2_slot0;
            var2 = var3.filter;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 2;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.isNotNullish;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot4 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot3 = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_profile/hooks/useGuildProfileGames.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useGuildProfileGames(arg1) {
        var6 = arg1;
        var1 = var6.gameActivity;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot4;
        var4 = undefined;
        var7 = var5.bind(var4)(var6);
        var _closure2_slot1 = var7;
        var6 = _closure1_slot3;
        var5 = var6.useMemo;
        var4 = new Array(2);
        var4[0] = var7;
        var4[1] = var1;
        var1 = function() {
            var4 = _closure2_slot0;
            var3 = function gameActivitySorter(arg1) {
                var2 = arg1;
                var _closure4_slot0 = var2;
                var1 = function(arg1, arg2) {
                    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                        var2 = _closure4_slot0;
                        var1 = arg1;
                        var1 = var1.id;
                        var1 = var2[var1];
                        var2 = null;
                        var3 = var2 == var1;
                        var6 = undefined;
                        if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                        var6 = var1.score;
case 2:
                        var7 = var2 != var6;
                        var3 = 0;
                        if(!var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                        var3 = var6;
case 4:
                        var6 = _closure4_slot0;
                        var5 = arg2;
                        var5 = var5.id;
                        var5 = var6[var5];
                        var6 = var2 == var5;
                        var4 = undefined;
                        if(var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                        var4 = var5.score;
case 6:
                        var5 = var2 != var4;
                        var2 = 0;
                        if(!var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                        var2 = var4;
case 8:
                        var1 = 0;
                        if(!(var3 !== var2)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                        var1 = var2 - var3;
case 10:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = undefined;
            var3 = var3.bind(var2)(var4);
            var1 = _closure2_slot1;
            var2 = var1.sort;
            var2 = var2.bind(var1)(var3);
            return var1;
        };
        var6 = var5.bind(var6)(var1, var4);
        var _closure2_slot2 = var6;
        var1 = {};
        var8 = _closure1_slot3;
        var7 = var8.useMemo;
        var5 = new Array(1);
        var5[0] = var6;
        var4 = function() {
            var4 = _closure2_slot2;
            var3 = var4.slice;
            var2 = 0;
            var1 = 5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var4 = var7.bind(var8)(var4, var5);
        var1['gamesToDisplay'] = var4;
        var8 = _closure1_slot3;
        var7 = var8.useMemo;
        var5 = new Array(1);
        var5[0] = var6;
        var4 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure2_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var1 = var2;
case 12:
                return var1;
            }
        };
        var4 = var7.bind(var8)(var4, var5);
        var1['lastGameToDisplay'] = var4;
        var5 = _closure1_slot3;
        var4 = var5.useMemo;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            var3 = _closure2_slot2;
            var2 = var3.slice;
            var1 = 5;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        var1['remainingGames'] = var2;
        return var1;
    };
    var3['default'] = var4;
    var3['useAllGuildProfileGames'] = var2;
    return var1;
})();