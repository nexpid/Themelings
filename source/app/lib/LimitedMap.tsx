// app/lib/LimitedMap.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot6 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var6);
    var1 = 0;
    var6 = var5[var1];
    var1 = undefined;
    var6 = var7.bind(var1)(var6);
    var _closure1_slot0 = var6;
    var6 = 1;
    var6 = var5[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot1 = var6;
    var6 = 2;
    var6 = var5[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot2 = var6;
    var6 = 3;
    var6 = var5[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 4;
    var6 = var5[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 5;
    var6 = var5[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 6;
    var6 = var5[var6];
    var6 = var7.bind(var1)(var6);
    var4 = var4.Map;
    var4 = var6.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function LimitedMap(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var3 = undefined;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot6;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 62; continue _fun0002 }
 49:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var4, var3);
                _fun0002_ip = 100; continue _fun0002;
 62:
                var6 = global;
                var8 = var6.Reflect;
                var7 = var8.construct;
                var5 = _closure1_slot3;
                var5 = var5.bind(var3)(var4);
                var6 = var5.constructor;
                var5 = new Array(0);
                var1 = var7.bind(var8)(var9, var5, var6);
 100:
                var1 = var2.bind(var3)(var4, var1);
                var2 = arg1;
                var1['maxSize'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot5;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot1;
        var5 = {};
        var6 = 'set';
        var5['key'] = var6;
        var1 = function value(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var6 = this;
                var2 = var6.size;
                var1 = var6.maxSize;
                if(!(var2 >= var1)) { _fun0003_ip = 51; continue _fun0003 }
 18:
                var2 = var6.delete;
                var1 = var6.keys;
                var3 = var1.bind(var6)();
                var1 = var3.next;
                var1 = var1.bind(var3)();
                var1 = var1.value;
                var1 = var2.bind(var6)(var1);
 51:
                var10 = _closure2_slot0;
                var4 = function _superPropGet(arg1, arg2, arg3, arg4) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var5 = arg1;
                        var7 = arg3;
                        var _closure4_slot0 = var7;
                        var6 = _closure1_slot4;
                        var4 = _closure1_slot3;
                        var1 = 1;
                        var3 = 3;
                        var8 = var1 & var3;
                        var1 = var5;
                        if(!var8) { _fun0004_ip = 44; continue _fun0004 }
 39:
                        var1 = var5.prototype;
 44:
                        var5 = undefined;
                        var4 = var4.bind(var5)(var1);
                        var1 = 'set';
                        var5 = var6.bind(var5)(var4, var1, var7);
                        var _closure4_slot1 = var5;
                        var1 = 2;
                        var3 = var1 & var3;
                        var1 = var5;
                        if(!var3) { _fun0004_ip = 100; continue _fun0004 }
 79:
                        var4 = 'function';
                        var3 = typeof var5;
                        var1 = var5;
                        if(!(var4 === var3)) { _fun0004_ip = 100; continue _fun0004 }
 93:
                        var1 = function(arg1) {
                            var4 = _closure4_slot1;
                            var3 = var4.apply;
                            var2 = _closure4_slot0;
                            var1 = arg1;
                            var1 = var3.bind(var4)(var2, var1);
                            return var1;
                        };
 100:
                        return var1;
                    }
                };
                var3 = undefined;
                var9 = 'set';
                var7 = 3;
                var11 = undefined;
                var8 = var6;
                var2 = var11[var4](var10, var9, var8, var7, var6);
                var1 = new Array(2);
                var4 = arg1;
                var1[0] = var4;
                var4 = arg2;
                var1[1] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 7;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/LimitedMap.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();