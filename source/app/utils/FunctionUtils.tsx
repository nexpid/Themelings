// app/utils/FunctionUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var4 = function areArraysShallowlyEqual(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            if(!(var4 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = null;
            if(!(var1 != var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(!(var1 != var3)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var2 = var4.length;
            var1 = var3.length;
            if(!(var2 === var1)) { _fun0001_ip = 4; continue _fun0001 }
case 7:
            var2 = var4.length;
            var1 = 0;
            var5 = var1 < var2;
            if(!var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = var4[var1];
            var5 = var3[var1];
            if(!(var6 === var5)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var1 = var1 + 1;
            if(var1 < var2) { _fun0001_ip = 9; continue _fun0001 }
case 8:
            var1 = true;
            return var1;
case 10:
            var1 = false;
            return var1;
case 4:
            var1 = false;
            return var1;
case 2:
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
case 0:
                var9 = 0;
                var2 = copyRestArgs(var9);
                var4 = _closure1_slot0;
                var3 = _closure2_slot1;
                var5 = undefined;
                var3 = var4.bind(var5)(var3, var2);
                if(var3) { _fun0002_ip = 8; continue _fun0002 }
case 12:
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
case 8:
                _closure2_slot1 = var2;
                var1 = _closure2_slot2;
                return var1;
            }
        };
        return var1;
    };
    var3['cachedFunction'] = var4;
    var4 = function clearObject(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var6 = arg1;
            var4 = var6;
            for(var1 in var4)
case 13:
            {
case 14:
                var7 = var1;
                var8 = var6.hasOwnProperty;
                var8 = var8.bind(var6)(var7);
                if(!var8) { _fun0003_ip = 13; continue _fun0003 }
case 15:
                var7 = delete var6[var7];
                _fun0003_ip = 13; continue _fun0003;
            }
case 16:
            var1 = undefined;
            return var1;
        }
    };
    var3['clearObject'] = var4;
    var2 = function isPlainObjectEmpty(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            for(var1 in var4)
case 17:
            {
case 6:
                var1 = false;
                return var1;
            }
case 18:
            var1 = true;
            return var1;
        }
    };
    var3['isPlainObjectEmpty'] = var2;
    return var1;
})();