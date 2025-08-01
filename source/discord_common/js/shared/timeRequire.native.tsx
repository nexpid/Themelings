// discord_common/js/shared/timeRequire.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/shared/timeRequire.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function timeRequire(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var10 = arg1;
            var2 = global;
            var3 = var2.Date;
            var1 = var3.now;
            var6 = var1.bind(var3)();
            var1 = arg2;
            var5 = undefined;
            var1 = var1.bind(var5)();
            var7 = var2.Date;
            var3 = var7.now;
            var3 = var3.bind(var7)();
            var6 = var3 - var6;
            var3 = 5;
            if(!(var6 >= var3)) { _fun0001_ip = 273; continue _fun0001 }
 60:
            var7 = _closure1_slot0;
            var7 = var7.getModules;
            var8 = 'function';
            var7 = typeof var7;
            if(!(var8 !== var7)) { _fun0001_ip = 147; continue _fun0001 }
 84:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 0;
            var7 = var9[var7];
            var11 = var8.bind(var5)(var7);
            var9 = var11.mark;
            var7 = var2.HermesInternal;
            var8 = var7.concat;
            var7 = 'Require ';
            var8 = var8.bind(var7)(var10);
            var7 = '🏃';
            var7 = var9.bind(var11)(var7, var8, var6);
            _fun0001_ip = 273; continue _fun0001;
 147:
            var8 = _closure1_slot0;
            var7 = var8.getModules;
            var9 = var7.bind(var8)();
            var _closure2_slot0 = var9;
            var8 = var2.Object;
            var7 = var8.keys;
            var8 = var7.bind(var8)(var9);
            var7 = var8.filter;
            var4 = function(arg1) {
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var2[var1];
                var1 = var1.isInitialized;
                return var1;
            };
            var4 = var7.bind(var8)(var4);
            var13 = var4.length;
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 0;
            var3 = var7[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.mark;
            var2 = var2.HermesInternal;
            var8 = var2.concat;
            var16 = 'Require ';
            var14 = ' (';
            var12 = ' modules)';
            var15 = var10;
            var3 = var16[var8](var15, var14, var13, var12, var11);
            var2 = '🏃';
            var2 = var4.bind(var5)(var2, var3, var6);
 273:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();