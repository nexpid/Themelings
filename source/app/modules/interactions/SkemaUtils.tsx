// app/modules/interactions/SkemaUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var5 = dependencyMap;
    var1 = function getFirstSkemaFieldError(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var6 = arg2;
            var2 = _closure1_slot1;
            var2 = var5[var2];
            var7 = null;
            if(!(var7 != var2)) { _fun0001_ip = 44; continue _fun0001 }
 23:
            var3 = global;
            var4 = var3.Array;
            var3 = var4.isArray;
            var3 = var3.bind(var4)(var2);
            if(var3) { _fun0001_ip = 165; continue _fun0001 }
 44:
            var3 = global;
            var4 = var3.Object;
            var3 = var4.entries;
            var14 = var3.bind(var4)(var5);
            var3 = var14.length;
            var13 = 0;
            var3 = var13 < var3;
            var12 = 'object';
            var5 = undefined;
            var11 = 2;
            var10 = 1;
            var9 = 0;
            if(!var3) { _fun0001_ip = 144; continue _fun0001 }
 91:
            var4 = var14[var9];
            var3 = _closure1_slot0;
            var3 = var3.bind(var5)(var4, var11);
            var4 = var3[var13];
            var3 = var3[var10];
            var8 = _closure1_slot1;
            if(!(var4 !== var8)) { _fun0001_ip = 132; continue _fun0001 }
 121:
            if(!(var7 != var3)) { _fun0001_ip = 132; continue _fun0001 }
 125:
            var8 = typeof var3;
            if(!(var12 !== var8)) { _fun0001_ip = 146; continue _fun0001 }
 132:
            var9 = var9 + 1;
            var8 = var14.length;
            if(var9 < var8) { _fun0001_ip = 91; continue _fun0001 }
 144:
            return var7;
 146:
            var1 = _closure1_slot2;
            if(!(var7 != var6)) { _fun0001_ip = 157; continue _fun0001 }
 154:
            var4 = var6;
 157:
            var1 = var1.bind(var5)(var3, var4);
            return var1;
 165:
            var1 = 0;
            var1 = var2[var1];
            return var1;
        }
    };
    var _closure1_slot2 = var1;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var6 = var5[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot0 = var4;
    var4 = '_errors';
    var _closure1_slot1 = var4;
    var4 = 1;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/interactions/SkemaUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getFirstSkemaError(arg1) {
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = arg1;
        var1 = var3.bind(var2)(var1, var2);
        return var1;
    };
    var3['getFirstSkemaError'] = var2;
    return var1;
})();