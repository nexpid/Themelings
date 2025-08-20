// app/modules/profile_effects/utils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/profile_effects/utils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1) {
        var3 = arg1;
        var2 = var3.sort;
        var1 = function(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = arg1;
                var3 = var1.zIndex;
                var4 = null;
                var5 = var4 != var3;
                var1 = 0;
                if(!var5) { _fun0001_ip = 23; continue _fun0001 }
 20:
                var1 = var3;
 23:
                var3 = arg2;
                var3 = var3.zIndex;
                var4 = var4 != var3;
                var2 = 0;
                if(!var4) { _fun0001_ip = 44; continue _fun0001 }
 41:
                var2 = var3;
 44:
                var1 = var1 - var2;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['sortEffectLayers'] = var4;
    var2 = function(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = _closure2_slot0;
                var2 = null;
                if(!(var2 != var4)) { _fun0002_ip = 175; continue _fun0002 }
 18:
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var9 = 1;
                var4 = var2[var9];
                var2 = undefined;
                var5 = var5.bind(var2)(var4);
                var4 = var5.cloneDeep;
                var2 = _closure2_slot0;
                var2 = var4.bind(var5)(var2);
                var6 = var2.effects;
                var5 = var6.reduce;
                var4 = function(arg1, arg2) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var6 = arg1;
                        var1 = arg2;
                        var1 = var1.randomizedSources;
                        var2 = null;
                        var2 = var2 == var1;
                        var5 = undefined;
                        if(var2) { _fun0003_ip = 28; continue _fun0003 }
 23:
                        var5 = var1.length;
 28:
                        var3 = 0;
                        var1 = var6;
                        if(!(var5 > var3)) { _fun0003_ip = 66; continue _fun0003 }
 37:
                        var2 = var5;
                        if(!(var3 !== var6)) { _fun0003_ip = 63; continue _fun0003 }
 44:
                        var3 = global;
                        var4 = var3.Math;
                        var3 = var4.min;
                        var2 = var3.bind(var4)(var6, var5);
 63:
                        var1 = var2;
 66:
                        return var1;
                    }
                };
                var7 = 0;
                var4 = var5.bind(var6)(var4, var7);
                var4 = var4 - var9;
                var8 = global;
                var6 = var8.Math;
                var5 = var6.floor;
                var10 = var8.Math;
                var8 = var10.random;
                var8 = var8.bind(var10)();
                var4 = var4 - var7;
                var4 = var4 + var9;
                var4 = var8 * var4;
                var4 = var4 + var7;
                var4 = var5.bind(var6)(var4);
                var _closure3_slot0 = var4;
                var5 = var2.effects;
                var4 = var5.map;
                var3 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var1 = arg1;
                        var2 = var1.randomizedSources;
                        var3 = null;
                        var4 = var3 == var2;
                        var3 = undefined;
                        if(var4) { _fun0004_ip = 25; continue _fun0004 }
 20:
                        var3 = var2.length;
 25:
                        var2 = 0;
                        if(!(var3 > var2)) { _fun0004_ip = 60; continue _fun0004 }
 31:
                        var3 = var1.randomizedSources;
                        var2 = _closure3_slot0;
                        var2 = var3[var2];
                        var2 = var2.src;
                        var1['src'] = var2;
 60:
                        return var1;
                    }
                };
                var3 = var4.bind(var5)(var3);
                var2['effects'] = var3;
                return var2;
 175:
                var1 = _closure2_slot0;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['usePotentiallyRandomizedConfig'] = var2;
    return var1;
})();