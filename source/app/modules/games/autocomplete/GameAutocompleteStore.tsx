// app/modules/games/autocomplete/GameAutocompleteStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot9 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var2 = global;
    var10 = var2.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot2 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = var2.Map;
    var9 = var8.prototype;
    var9 = Object.create(var9, {constructor: {value: var8}});
    var14 = var9;
    var8 = new var14[var8](var13);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot7 = var8;
    var2 = var2.Set;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var14 = var8;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function GameAutocompleteStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot9;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 8:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'getResults';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 5;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.normalizeGameAutocompleteQuery;
                var3 = arg1;
                var4 = var4.bind(var5)(var3);
                var3 = null;
                var3 = var3 == var4;
                if(var3) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var3 = _closure1_slot7;
                var2 = var3.get;
                var1 = var2.bind(var3)(var4);
case 9:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'getClosestResults';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 5;
                var1 = var3[var1];
                var3 = undefined;
                var4 = var2.bind(var3)(var1);
                var2 = var4.normalizeGameAutocompleteQuery;
                var1 = arg1;
                var8 = var2.bind(var4)(var1);
                var7 = null;
                if(!(var7 != var8)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var2 = _closure1_slot7;
                var1 = var2.get;
                var1 = var1.bind(var2)(var8);
                if(!(var7 == var1)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var2 = var8.length;
                var6 = 1;
                var5 = var2 - var6;
                var4 = 0;
                if(!(var5 >= var6)) { _fun0004_ip = 11; continue _fun0004 }
case 15:
                var11 = _closure1_slot7;
                var10 = var11.get;
                var2 = var8.slice;
                var2 = var2.bind(var8)(var4, var5);
                var2 = var10.bind(var11)(var2);
                var10 = var5;
                if(!(var7 == var2)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                var5 = var10 - 1;
                if(var5 >= var6) { _fun0004_ip = 15; continue _fun0004 }
case 11:
                return var3;
case 16:
                return var2;
case 13:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'shouldSuppressFetch';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var7 = 5;
                var1 = var1[var7];
                var5 = undefined;
                var4 = var2.bind(var5)(var1);
                var2 = var4.normalizeGameAutocompleteQuery;
                var1 = arg1;
                var6 = var2.bind(var4)(var1);
                var1 = null;
                var1 = var1 != var6;
                if(!var1) { _fun0005_ip = 18; continue _fun0005 }
case 10:
                var4 = _closure1_slot7;
                var2 = var4.has;
                var2 = var2.bind(var4)(var6);
                var2 = !var2;
                if(!var2) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                var8 = _closure1_slot8;
                var4 = var8.has;
                var4 = var4.bind(var8)(var6);
                var2 = !var4;
case 19:
                if(!var2) { _fun0005_ip = 13; continue _fun0005 }
case 21:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var7];
                var5 = var4.bind(var5)(var3);
                var4 = var5.shouldSuppressAutocompleteFetch;
                var3 = function(arg1) {
                    var3 = _closure1_slot7;
                    var2 = var3.get;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2 = var4.bind(var5)(var6, var3);
case 13:
                var1 = var2;
case 18:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isFetching';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 5;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.normalizeGameAutocompleteQuery;
                var1 = arg1;
                var4 = var3.bind(var4)(var1);
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0006_ip = 9; continue _fun0006 }
case 10:
                var3 = _closure1_slot8;
                var2 = var3.has;
                var1 = var2.bind(var3)(var4);
case 9:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'GameAutocompleteStore';
    var8['displayName'] = var2;
    var2 = 7;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleLogout() {
        var1 = global;
        var2 = var1.Map;
        var3 = var2.prototype;
        var3 = Object.create(var3, {constructor: {value: var2}});
        var4 = var3;
        var2 = new var4[var2](var3);
        var3 = var2 instanceof Object ? var2 : var3;
        _closure1_slot7 = var3;
        var1 = var1.Set;
        var3 = var1.prototype;
        var3 = Object.create(var3, {constructor: {value: var1}});
        var4 = var3;
        var1 = new var4[var1](var3);
        var1 = var1 instanceof Object ? var1 : var3;
        _closure1_slot8 = var1;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var9;
    var9 = function handleFetch(arg1) {
        var1 = arg1;
        var3 = var1.query;
        var2 = _closure1_slot8;
        var1 = var2.add;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var2['GAME_AUTOCOMPLETE_FETCH'] = var9;
    var9 = function handleFetchSuccess(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var5 = var1.query;
            var3 = var1.results;
            var2 = _closure1_slot8;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var5);
            var2 = _closure1_slot7;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var5);
            var2 = _closure1_slot7;
            var1 = var2.set;
            var1 = var1.bind(var2)(var5, var3);
            var1 = _closure1_slot7;
            var1 = var1.size;
            var3 = 100;
            var2 = null;
            if(!(var1 > var3)) { _fun0007_ip = 22; continue _fun0007 }
case 23:
            var5 = _closure1_slot7;
            var1 = var5.keys;
            var5 = var1.bind(var5)();
            var1 = var5.next;
            var1 = var1.bind(var5)();
            var6 = var1.value;
            if(!(var2 != var6)) { _fun0007_ip = 22; continue _fun0007 }
case 24:
            var5 = _closure1_slot7;
            var1 = var5.delete;
            var1 = var1.bind(var5)(var6);
            var1 = _closure1_slot7;
            var1 = var1.size;
            if(var1 > var3) { _fun0007_ip = 23; continue _fun0007 }
case 22:
            var1 = undefined;
            return var1;
        }
    };
    var2['GAME_AUTOCOMPLETE_FETCH_SUCCESS'] = var9;
    var4 = function handleFetchFailure(arg1) {
        var1 = arg1;
        var3 = var1.query;
        var2 = _closure1_slot8;
        var1 = var2.delete;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var2['GAME_AUTOCOMPLETE_FETCH_FAILURE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/games/autocomplete/GameAutocompleteStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();