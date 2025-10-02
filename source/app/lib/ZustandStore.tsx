// app/lib/ZustandStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = function defaultStatesAreEqual(arg1, arg2) {
        var2 = arg1;
        var1 = arg2;
        var1 = var2 === var1;
        return var1;
    };
    var _closure1_slot2 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 3;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/ZustandStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createZustandStore(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var5 = function useState(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var4 = arguments[1];
                var3 = undefined;
                if(!(var4 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = _closure1_slot2;
case 2:
                var2 = _closure2_slot1;
                var1 = arg1;
                var1 = var2.bind(var3)(var1, var4);
                return var1;
            }
        };
        var _closure2_slot3 = var5;
        var4 = function getState(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = arg1;
                var2 = _closure2_slot1;
                var1 = var2.getState;
                var3 = var1.bind(var2)();
                var2 = null;
                var1 = var3;
                if(!(var2 != var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var2 = undefined;
                var1 = var4.bind(var2)(var3);
case 4:
                return var1;
            }
        };
        var _closure2_slot4 = var4;
        var8 = _closure1_slot0;
        var9 = _closure1_slot1;
        var1 = 0;
        var1 = var9[var1];
        var7 = undefined;
        var6 = var8.bind(var7)(var1);
        var3 = var6.createWithEqualityFn;
        var1 = 1;
        var1 = var9[var1];
        var8 = var8.bind(var7)(var1);
        var7 = var8.subscribeWithSelector;
        var1 = function(arg1, arg2, arg3) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var5 = _closure2_slot0;
            var4 = undefined;
            var3 = function(arg1) {
                var2 = arg1;
                var _closure4_slot0 = var2;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 2;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.batchUpdates;
                var1 = function() {
                    var3 = _closure3_slot0;
                    var2 = _closure4_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = arg2;
            var1 = arg3;
            var1 = var5.bind(var4)(var3, var2, var1);
            return var1;
        };
        var1 = var7.bind(var8)(var1);
        var1 = var3.bind(var6)(var1);
        var _closure2_slot1 = var1;
        var3 = function setState(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 2;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure2_slot1;
                var2 = var3.setState;
                var1 = _closure3_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var _closure2_slot2 = var3;
        var1 = {};
        var1['useState'] = var5;
        var1['getState'] = var4;
        var4 = function useField(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = arguments[1];
                var2 = arg1;
                var _closure3_slot0 = var2;
                var3 = undefined;
                if(!(var4 === var3)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                var4 = _closure1_slot2;
case 6:
                var2 = _closure2_slot3;
                var1 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = arg1;
                    var1 = var1[var2];
                    return var1;
                };
                var1 = var2.bind(var3)(var1, var4);
                return var1;
            }
        };
        var1['useField'] = var4;
        var4 = function getField(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var3 = _closure2_slot4;
            var2 = undefined;
            var1 = function(arg1) {
                var2 = _closure3_slot0;
                var1 = arg1;
                var1 = var1[var2];
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var1['getField'] = var4;
        var4 = function subscribe(arg1, arg2, arg3) {
            var5 = _closure2_slot1;
            var4 = var5.subscribe;
            var3 = arg1;
            var2 = arg2;
            var1 = arg3;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        };
        var1['subscribe'] = var4;
        var1['setState'] = var3;
        var2 = function resetState() {
            var3 = _closure2_slot1;
            var2 = var3.getInitialState;
            var3 = var2.bind(var3)();
            var2 = _closure2_slot2;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            return var1;
        };
        var1['resetState'] = var2;
        return var1;
    };
    var3['createZustandStore'] = var2;
    return var1;
})();