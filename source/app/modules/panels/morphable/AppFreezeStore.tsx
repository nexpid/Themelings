// app/modules/panels/morphable/AppFreezeStore.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var7 = var5.bind(var1)(var4);
    var4 = var7.create;
    var2 = function(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = {};
        var3 = global;
        var3 = var3.Set;
        var4 = var3.prototype;
        var4 = Object.create(var4, {constructor: {value: var3}});
        var5 = var4;
        var3 = new var5[var3](var4);
        var3 = var3 instanceof Object ? var3 : var4;
        var1['lockKeys'] = var3;
        var2 = function requestFreezeLock(arg1) {
            var1 = arg1;
            var3 = var1.key;
            var _closure3_slot0 = var3;
            var1 = var1.lockEnabled;
            var _closure3_slot1 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure2_slot0;
                var1 = undefined;
                var2 = function(arg1) {
                    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                        var4 = arg1;
                        var1 = _closure3_slot1;
                        var6 = var4.lockKeys;
                        var5 = var6.has;
                        var2 = _closure3_slot0;
                        var2 = var5.bind(var6)(var2);
                        if(var1) { _fun0001_ip = 106; continue _fun0001 }
 33:
                        if(var2) { _fun0001_ip = 38; continue _fun0001 }
 36:
                        return var4;
 38:
                        var1 = global;
                        var1 = var1.Set;
                        var5 = var1.prototype;
                        var5 = Object.create(var5, {constructor: {value: var1}});
                        var11 = var5;
                        var10 = var6;
                        var1 = new var11[var1](var10, var9);
                        var6 = var1 instanceof Object ? var1 : var5;
                        var5 = var6.delete;
                        var1 = _closure3_slot0;
                        var1 = var5.bind(var6)(var1);
                        var1 = {};
                        var10 = var1;
                        var9 = var4;
                        var5 = copyDataProperties(var10, var9);
                        var5 = 'lockKeys';
                        var1[var5] = var6;
                        return var1;
 106:
                        var1 = var4;
                        if(var2) { _fun0001_ip = 211; continue _fun0001 }
 112:
                        var2 = {};
                        var10 = var2;
                        var9 = var4;
                        var5 = copyDataProperties(var10, var9);
                        var6 = global;
                        var5 = var6.Set;
                        var7 = _closure3_slot0;
                        var3 = new Array(1);
                        var3[0] = var7;
                        var7 = var6.Array;
                        var6 = var7.from;
                        var4 = var4.lockKeys;
                        var9 = var6.bind(var7)(var4);
                        var8 = 1;
                        var10 = var3;
                        var4 = arraySpread(var10, var9, var8);
                        var4 = var5.prototype;
                        var4 = Object.create(var4, {constructor: {value: var5}});
                        var11 = var4;
                        var10 = var3;
                        var3 = new var11[var5](var10, var9);
                        var4 = var3 instanceof Object ? var3 : var4;
                        var3 = 'lockKeys';
                        var2[var3] = var4;
                        var1 = var2;
 211:
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['requestFreezeLock'] = var2;
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/panels/morphable/AppFreezeStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();