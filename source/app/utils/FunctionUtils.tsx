// app/utils/FunctionUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var4 = function areArraysShallowlyEqual(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var3 = arg2;
            if(!(var4 !== var3)) { _fun0001_ip = 79; continue _fun0001 }
 10:
            var1 = null;
            if(!(var1 != var4)) { _fun0001_ip = 75; continue _fun0001 }
 16:
            if(!(var1 != var3)) { _fun0001_ip = 75; continue _fun0001 }
 20:
            var2 = var4.length;
            var1 = var3.length;
            if(!(var2 === var1)) { _fun0001_ip = 75; continue _fun0001 }
 34:
            var2 = var4.length;
            var1 = 0;
            var5 = var1 < var2;
            if(!var5) { _fun0001_ip = 67; continue _fun0001 }
 48:
            var6 = var4[var1];
            var5 = var3[var1];
            if(!(var6 === var5)) { _fun0001_ip = 71; continue _fun0001 }
 60:
            var1 = var1 + 1;
            if(var1 < var2) { _fun0001_ip = 48; continue _fun0001 }
 67:
            var1 = true;
            return var1;
 71:
            var1 = false;
            return var1;
 75:
            var1 = false;
            return var1;
 79:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot0 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var5 = dependencyMap;
    var1 = 0;
    var6 = var5[var1];
    var5 = require;
    var1 = undefined;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'utils/FunctionUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['areArraysShallowlyEqual'] = var4;
    var4 = function cachedFunction(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = null;
        var _closure2_slot1 = var2;
        var _closure2_slot2 = var2;
        var1 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var9 = 0;
                var2 = copyRestArgs(var9);
                var4 = _closure1_slot0;
                var3 = _closure2_slot1;
                var5 = undefined;
                var3 = var4.bind(var5)(var3, var2);
                if(var3) { _fun0002_ip = 67; continue _fun0002 }
 31:
                var4 = _closure2_slot0;
                var3 = new Array(0);
                var9 = var3;
                var8 = var2;
                var7 = 0;
                var6 = arraySpread(var9, var8, var7);
                var9 = var4;
                var8 = var3;
                var7 = undefined;
                var3 = apply(var9, var8, var7);
                _closure2_slot2 = var3;
 67:
                _closure2_slot1 = var2;
                var1 = _closure2_slot2;
                return var1;
            }
        };
        return var1;
    };
    var3['cachedFunction'] = var4;
    var4 = function promiseThrottle(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arguments[1];
            var3 = arg1;
            var _closure2_slot0 = var3;
            var3 = undefined;
            if(!(var2 === var3)) { _fun0003_ip = 24; continue _fun0003 }
 18:
            var2 = 5000;
 24:
            var _closure2_slot1 = var2;
            var2 = -1;
            var _closure2_slot2 = var2;
            var2 = null;
            var _closure2_slot3 = var2;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot3;
                    var2 = null;
                    var2 = var2 == var3;
                    if(var2) { _fun0004_ip = 41; continue _fun0004 }
 16:
                    var3 = global;
                    var4 = var3.Date;
                    var3 = var4.now;
                    var4 = var3.bind(var4)();
                    var3 = _closure2_slot2;
                    var2 = var4 >= var3;
 41:
                    if(!var2) { _fun0004_ip = 87; continue _fun0004 }
 44:
                    var2 = global;
                    var3 = var2.Date;
                    var2 = var3.now;
                    var3 = var2.bind(var3)();
                    var2 = _closure2_slot1;
                    var2 = var3 + var2;
                    _closure2_slot2 = var2;
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
                    _closure2_slot3 = var2;
 87:
                    var1 = _closure2_slot3;
                    return var1;
                }
            };
            return var1;
        }
    };
    var3['promiseThrottle'] = var4;
    var4 = function clearObject(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var6 = arg1;
            var4 = var6;
            for(var1 in var4)
 14:
            {
 23:
                var7 = var1;
                var8 = var6.hasOwnProperty;
                var8 = var8.bind(var6)(var7);
                if(!var8) { _fun0005_ip = 14; continue _fun0005 }
 40:
                var7 = delete var6[var7];
                _fun0005_ip = 14; continue _fun0005;
            }
 46:
            var1 = undefined;
            return var1;
        }
    };
    var3['clearObject'] = var4;
    var2 = function isPlainObjectEmpty(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = arg1;
            for(var1 in var4)
 11:
            {
 20:
                var1 = false;
                return var1;
            }
 24:
            var1 = true;
            return var1;
        }
    };
    var3['isPlainObjectEmpty'] = var2;
    return var1;
})();