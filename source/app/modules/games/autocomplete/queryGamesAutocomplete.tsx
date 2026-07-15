// app/modules/games/autocomplete/queryGamesAutocomplete.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var10 = true;
    var4['value'] = var10;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var9 = var7.bind(var1)(var4);
    var4 = 2;
    var7 = var6[var4];
    var7 = var5.bind(var1)(var7);
    var8 = var7.GAME_AUTOCOMPLETE_DEBOUNCE_MS;
    var7 = {};
    var7['leading'] = var10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GAME_AUTOCOMPLETE_DEBOUNCE_MAX_WAIT_MS;
    var7['maxWait'] = var4;
    var4 = function(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var4 = var2.useGameAutocomplete;
        var3 = var4.fetchMany;
        var2 = new Array(1);
        var5 = arg1;
        var2[0] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4 = var9.bind(var1)(var4, var8, var7);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/games/autocomplete/queryGamesAutocomplete.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function queryGamesAutocomplete(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var7 = 3;
            var1 = var1[var7];
            var6 = undefined;
            var4 = var3.bind(var6)(var1);
            var3 = var4.normalizeGameAutocompleteQuery;
            var1 = arg1;
            var8 = var3.bind(var4)(var1);
            var3 = null;
            var4 = var3 == var8;
            var1 = null;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot3;
            var4 = var4.bind(var6)(var8);
            var5 = _closure1_slot2;
            var4 = var5.getClosestResults;
            var4 = var4.bind(var5)(var8);
            if(!(var3 == var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = new Array(0);
case 4:
            var3 = var4.filter;
            var5 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var7];
            var2 = var5.bind(var6)(var2);
            var2 = var2.isGameAutocompleteResultAllowedInGameWidgets;
            var1 = var3.bind(var4)(var2);
case 2:
            return var1;
        }
    };
    var3['queryGamesAutocomplete'] = var2;
    return var1;
})();