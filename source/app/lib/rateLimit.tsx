// app/lib/rateLimit.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = dependencyMap;
    var1 = 0;
    var4 = var2[var1];
    var2 = require;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = 'lib/rateLimit.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function rateLimit(arg1, arg2, arg3) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var1 = arg3;
        var _closure2_slot2 = var1;
        var1 = new Array(0);
        var _closure2_slot4 = var1;
        var1 = function wrapper(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = 0;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var _closure3_slot0 = var1;
                var5 = global;
                var6 = var5.Date;
                var2 = var6.now;
                var7 = var2.bind(var6)();
                var8 = _closure2_slot3;
                var6 = null;
                if(!(var6 != var8)) { _fun0001_ip = 65; continue _fun0001 }
 44:
                var10 = var5.clearTimeout;
                var9 = _closure2_slot3;
                var8 = undefined;
                var8 = var10.bind(var8)(var9);
                var _closure2_slot3 = var6;
 65:
                var6 = _closure2_slot4;
                var6 = var6.length;
                if(!(var6 > var4)) { _fun0001_ip = 125; continue _fun0001 }
 78:
                var6 = _closure2_slot4;
                var6 = var6[var4];
                if(!(var6 <= var7)) { _fun0001_ip = 125; continue _fun0001 }
 90:
                var6 = _closure2_slot4;
                var8 = var6.shift;
                var8 = var8.bind(var6)();
                var6 = var6.length;
                if(!(var6 > var4)) { _fun0001_ip = 125; continue _fun0001 }
 113:
                var6 = _closure2_slot4;
                var6 = var6[var4];
                if(var6 <= var7) { _fun0001_ip = 90; continue _fun0001 }
 125:
                var6 = _closure2_slot4;
                var8 = var6.length;
                var6 = _closure2_slot0;
                if(!(!(var8 < var6))) { _fun0001_ip = 181; continue _fun0001 }
 142:
                var8 = var5.setTimeout;
                var5 = _closure2_slot4;
                var5 = var5[var4];
                var6 = var5 - var7;
                var5 = undefined;
                var3 = function() {
                    var3 = _closure2_slot5;
                    var6 = _closure3_slot0;
                    var2 = new Array(0);
                    var5 = 0;
                    var7 = var2;
                    var1 = arraySpread(var7, var6, var5);
                    var5 = undefined;
                    var7 = var3;
                    var6 = var2;
                    var1 = apply(var7, var6, var5);
                    return var1;
                };
                var3 = var8.bind(var5)(var3, var6);
                _closure2_slot3 = var3;
                _fun0001_ip = 235; continue _fun0001;
 181:
                var6 = _closure2_slot4;
                var5 = var6.push;
                var3 = _closure2_slot1;
                var3 = var7 + var3;
                var3 = var5.bind(var6)(var3);
                var3 = _closure2_slot2;
                var2 = new Array(0);
                var13 = var2;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var11 = undefined;
                var13 = var3;
                var12 = var2;
                var1 = apply(var13, var12, var11);
 235:
                var1 = undefined;
                return var1;
            }
        };
        var _closure2_slot5 = var1;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();