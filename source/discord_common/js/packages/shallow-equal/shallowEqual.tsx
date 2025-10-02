// discord_common/js/packages/shallow-equal/shallowEqual.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = {};
    var _closure1_slot0 = var1;
    var4 = dependencyMap;
    var1 = 0;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/shallow-equal/shallowEqual.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function shallowEqual(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var7 = arg2;
            var6 = arg3;
            var1 = arguments[3];
            var2 = undefined;
            if(!(var1 === var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = _closure1_slot0;
case 2:
            var3 = var1.shouldWarnLargeObjects;
            var1 = var1.logCallback;
            var1 = var8 === var7;
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(!(var2 !== var8)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            if(!(var2 !== var7)) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var2 = global;
            var4 = var2.Object;
            var3 = var4.keys;
            var5 = var3.bind(var4)(var8);
            var3 = var2.Object;
            var2 = var3.keys;
            var2 = var2.bind(var3)(var7);
            var3 = var5.length;
            var2 = var2.length;
            if(!(var3 === var2)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var2 = var5.length;
            var4 = 0;
            var2 = var4 < var2;
            var3 = null;
            if(!var2) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var9 = var5[var4];
            var10 = var8[var9];
            var2 = var7[var9];
            if(!(var10 !== var2)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            if(!(var3 != var6)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var2 = var6.includes;
            var2 = var2.bind(var6)(var9);
            if(!var2) { _fun0001_ip = 15; continue _fun0001 }
case 13:
            var4 = var4 + 1;
            var2 = var5.length;
            if(var4 < var2) { _fun0001_ip = 12; continue _fun0001 }
case 11:
            var2 = true;
            return var2;
case 15:
            var2 = false;
            return var2;
case 9:
            var2 = false;
            return var2;
case 6:
            return var1;
case 4:
            var1 = true;
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function areArraysShallowEqual(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var1 = arguments[2];
            var _closure2_slot0 = var3;
            var5 = undefined;
            if(!(var1 === var5)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var1 = _closure1_slot0;
case 17:
            var5 = var1.logCallback;
            var1 = var1.shouldWarnLargeObjects;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var5 = var4.length;
            var3 = var3.length;
            var1 = var5 === var3;
case 19:
            if(!var1) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var3 = var4.every;
            var2 = function(arg1, arg2) {
                var2 = _closure2_slot0;
                var1 = arg2;
                var2 = var2[var1];
                var1 = arg1;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var3.bind(var4)(var2);
case 21:
            return var1;
        }
    };
    var3['areArraysShallowEqual'] = var2;
    return var1;
})();