// app/modules/share/useAutocompleter.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var6 = var5[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot3 = var4;
    var4 = 4;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/share/useAutocompleter.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useAutocompleter(arg1) {
        var1 = arg1;
        var1 = var1.searchOptions;
        var _closure2_slot0 = var1;
        var6 = _closure1_slot3;
        var5 = var6.useState;
        var2 = {};
        var7 = new Array(0);
        var2['results'] = var7;
        var7 = '';
        var2['query'] = var7;
        var5 = var5.bind(var6)(var2);
        var2 = _closure1_slot2;
        var7 = undefined;
        var8 = 2;
        var9 = var2.bind(var7)(var5, var8);
        var2 = 0;
        var2 = var9[var2];
        var5 = 1;
        var5 = var9[var5];
        var _closure2_slot1 = var5;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var4 = var4[var8];
        var5 = var5.bind(var7)(var4);
        var4 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var4 = function(arg1, arg2) {
                var3 = _closure2_slot1;
                var2 = {};
                var1 = arg1;
                var2['results'] = var1;
                var1 = arg2;
                var2['query'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            var3 = var1.setLimit;
            var2 = 20;
            var2 = var3.bind(var1)(var2);
            var3 = var1.search;
            var2 = '';
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var7 = var5.bind(var7)(var4);
        var _closure2_slot2 = var7;
        var8 = var6.useEffect;
        var5 = new Array(1);
        var5[0] = var7;
        var4 = function() {
            var1 = function() {
                var2 = _closure2_slot2;
                var1 = var2.destroy;
                var1 = var1.bind(var2)();
                return var1;
            };
            return var1;
        };
        var4 = var8.bind(var6)(var4, var5);
        var5 = var6.useEffect;
        var4 = new Array(2);
        var4[0] = var7;
        var4[1] = var1;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot0;
                var2 = null;
                var2 = var2 != var3;
                if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = _closure2_slot0;
                var3 = _closure2_slot2;
                var3 = var3.options;
                var2 = var4 !== var3;
case 2:
                if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var3 = _closure2_slot2;
                var2 = var3.setOptions;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
case 4:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var5.bind(var6)(var1, var4);
        var1 = {};
        var5 = var6.useCallback;
        var4 = new Array(1);
        var4[0] = var7;
        var3 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var4 = var1.query;
                var2 = var1.resultTypes;
                var3 = _closure2_slot2;
                var5 = var3.resultTypes;
                var3 = null;
                var3 = var3 != var5;
                if(!var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var5 = _closure2_slot2;
                var7 = var5.resultTypes;
                var6 = function isArrayEqualSet(arg1, arg2) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var4 = arg1;
                        var1 = arg2;
                        var _closure4_slot0 = var1;
                        var3 = var4.length;
                        var1 = var1.size;
                        var1 = var3 === var1;
                        if(!var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                        var3 = var4.every;
                        var2 = function(arg1) {
                            var3 = _closure4_slot0;
                            var2 = var3.has;
                            var1 = arg1;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var1 = var3.bind(var4)(var2);
case 8:
                        return var1;
                    }
                };
                var5 = undefined;
                var3 = var6.bind(var5)(var2, var7);
case 6:
                if(var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var5 = _closure2_slot2;
                var3 = var5.setResultTypes;
                var3 = var3.bind(var5)(var2);
                var3 = var5.setLimit;
                var7 = var2.length;
                var2 = 20;
                var6 = 1;
                if(!(var6 === var7)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var2 = 50;
case 12:
                var2 = var3.bind(var5)(var2);
case 10:
                var3 = _closure2_slot2;
                var2 = var3.search;
                var1 = var4.trim;
                var5 = var1.bind(var4)();
                var1 = '';
                if(!(var1 !== var5)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                var1 = var4;
case 14:
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            }
        };
        var3 = var5.bind(var6)(var3, var4);
        var1['search'] = var3;
        var11 = var1;
        var10 = var2;
        var2 = copyDataProperties(var11, var10);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();