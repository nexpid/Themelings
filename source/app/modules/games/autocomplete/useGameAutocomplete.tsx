// app/modules/games/autocomplete/useGameAutocomplete.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var8 = var7[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var7[var4];
    var9 = var5.bind(var1)(var4);
    var _closure1_slot4 = var9;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.QueryIds;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var7[var4];
    var8 = var6.bind(var1)(var4);
    var5 = var8.createFetchStore;
    var4 = {};
    var10 = function getQueryId(arg1) {
        var3 = _closure1_slot5;
        var2 = var3.GAME_AUTOCOMPLETE;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 5;
        var4 = var4[var1];
        var1 = undefined;
        var5 = var5.bind(var1)(var4);
        var4 = var5.normalizeGameAutocompleteQuery;
        var1 = arg1;
        var1 = var4.bind(var5)(var1);
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['getQueryId'] = var10;
    var10 = function get(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot4;
            var2 = var3.getResults;
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var3 = var1 != var2;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var4['get'] = var10;
    var10 = function load(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.fetchGameAutocomplete;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['load'] = var10;
    var10 = function getIsLoading(arg1) {
        var3 = _closure1_slot4;
        var2 = var3.isFetching;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['getIsLoading'] = var10;
    var10 = {};
    var11 = function isRetryableError(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var5 = var1.status;
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var2 = 429;
            var2 = var2 === var5;
            if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 3:
            var3 = 500;
            var3 = var5 >= var3;
            if(!var3) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var4 = 503;
            var3 = var4 !== var5;
case 7:
            var2 = var3;
case 6:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var10['retryableErrors'] = var11;
    var4['retryConfig'] = var10;
    var10 = 3600;
    var4['staleAfter'] = var10;
    var10 = 60;
    var4['failureStaleAfter'] = var10;
    var4 = var5.bind(var8)(var9, var4);
    var _closure1_slot6 = var4;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/games/autocomplete/useGameAutocomplete.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = 200;
    var3['GAME_AUTOCOMPLETE_DEBOUNCE_MS'] = var5;
    var5 = 500;
    var3['GAME_AUTOCOMPLETE_DEBOUNCE_MAX_WAIT_MS'] = var5;
    var3['useGameAutocomplete'] = var4;
    var2 = function useDebouncedGameAutocomplete(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 5;
            var2 = var4[var2];
            var7 = undefined;
            var4 = var3.bind(var7)(var2);
            var3 = var4.normalizeGameAutocompleteQuery;
            var2 = arg1;
            var5 = var3.bind(var4)(var2);
            var2 = function useDebouncedQueryValue(arg1) {
                var6 = arg1;
                var _closure3_slot0 = var6;
                var5 = _closure1_slot3;
                var3 = var5.useState;
                var7 = var3.bind(var5)(var6);
                var4 = _closure1_slot2;
                var3 = undefined;
                var1 = 2;
                var7 = var4.bind(var3)(var7, var1);
                var4 = 0;
                var1 = var7[var4];
                var3 = 1;
                var3 = var7[var3];
                var _closure3_slot1 = var3;
                var3 = var5.useRef;
                var3 = var3.bind(var5)(var1);
                var _closure3_slot2 = var3;
                var3 = var5.useRef;
                var3 = var3.bind(var5)(var4);
                var _closure3_slot3 = var3;
                var4 = var5.useEffect;
                var3 = new Array(1);
                var3[0] = var6;
                var2 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var5 = function emit() {
                            var3 = _closure3_slot3;
                            var2 = global;
                            var4 = var2.Date;
                            var2 = var4.now;
                            var2 = var2.bind(var4)();
                            var3['current'] = var2;
                            var2 = _closure3_slot2;
                            var3 = _closure3_slot0;
                            var2['current'] = var3;
                            var2 = _closure3_slot1;
                            var1 = undefined;
                            var2 = var2.bind(var1)(var3);
                            return var1;
                        };
                        var4 = _closure3_slot0;
                        var2 = _closure3_slot2;
                        var2 = var2.current;
                        if(!(var4 !== var2)) { _fun0004_ip = 6; continue _fun0004 }
case 9:
                        var2 = _closure3_slot0;
                        var4 = null;
                        if(!(var4 != var2)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                        var2 = _closure3_slot2;
                        var2 = var2.current;
                        if(!(var4 == var2)) { _fun0004_ip = 12; continue _fun0004 }
case 10:
                        var2 = undefined;
                        var2 = var5.bind(var2)();
case 6:
                        var2 = undefined;
                        return var2;
case 12:
                        var2 = global;
                        var6 = var2.Date;
                        var4 = var6.now;
                        var4 = var4.bind(var6)();
                        var3 = _closure3_slot3;
                        var3 = var3.current;
                        var4 = var4 - var3;
                        var7 = var2.Math;
                        var6 = var7.min;
                        var9 = var2.Math;
                        var8 = var9.max;
                        var3 = 500;
                        var4 = var3 - var4;
                        var3 = 0;
                        var4 = var8.bind(var9)(var3, var4);
                        var3 = 200;
                        var4 = var6.bind(var7)(var3, var4);
                        var3 = var2.setTimeout;
                        var2 = undefined;
                        var2 = var3.bind(var2)(var5, var4);
                        var _closure4_slot0 = var2;
                        var1 = function() {
                            var1 = global;
                            var3 = var1.clearTimeout;
                            var2 = _closure4_slot0;
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            };
            var4 = var2.bind(var7)(var5);
            var2 = _closure1_slot6;
            var2 = var2.bind(var7)(var4);
            var9 = var2.data;
            var3 = var2.error;
            var6 = var2.isLoading;
            var10 = _closure1_slot3;
            var8 = var10.useState;
            var2 = null;
            var10 = var8.bind(var10)(var2);
            var8 = _closure1_slot2;
            var1 = 2;
            var10 = var8.bind(var7)(var10, var1);
            var1 = 0;
            var8 = var10[var1];
            var1 = 1;
            var1 = var10[var1];
            if(!(var2 != var5)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var10 = var2 != var9;
            if(!var10) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var10 = var9 !== var8;
case 15:
            if(!var10) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var10 = var1.bind(var7)(var9);
            _fun0003_ip = 17; continue _fun0003;
case 13:
            if(!(var2 != var8)) { _fun0003_ip = 17; continue _fun0003 }
case 19:
            var1 = var1.bind(var7)(var2);
case 17:
            var1 = {};
            var10 = var2 != var5;
            var7 = null;
            if(!var10) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            if(!(var2 != var9)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var8 = var9;
case 22:
            var7 = var8;
case 20:
            var1['results'] = var7;
            if(var6) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var6 = var4 !== var5;
case 24:
            var1['isLoading'] = var6;
            var2 = null;
            if(!(var4 === var5)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var2 = var3;
case 26:
            var1['error'] = var2;
            return var1;
        }
    };
    var3['useDebouncedGameAutocomplete'] = var2;
    return var1;
})();