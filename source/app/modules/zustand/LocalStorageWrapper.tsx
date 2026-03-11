// app/modules/zustand/LocalStorageWrapper.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var6 = {};
    var2 = true;
    var6['value'] = var2;
    var2 = '__esModule';
    var2 = var8.bind(var9)(var3, var2, var6);
    var6 = var1.Object;
    var2 = var6.freeze;
    var1 = {};
    var8 = function getItem(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 0;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var3 = var1.Storage;
            var2 = var3.get;
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var3 = var1 != var2;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var1['getItem'] = var8;
    var8 = function setItem(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var4 = var1.Storage;
        var3 = var4.set;
        var2 = arg1;
        var1 = arg2;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var1['setItem'] = var8;
    var7 = function removeItem(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.Storage;
        var2 = var3.remove;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var1['removeItem'] = var7;
    var2 = var2.bind(var6)(var1);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/zustand/LocalStorageWrapper.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();