// app/utils/BasicPermissionUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var1 = metroImportAll;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var2 = function() {
        var5 = _closure1_slot3;
        var4 = function BasicPermissionUtils() {
            var4 = _closure1_slot2;
            var3 = _closure2_slot0;
            var1 = undefined;
            var2 = this;
            var2 = var4.bind(var1)(var2, var3);
            return var1;
        };
        var _closure2_slot0 = var4;
        var1 = {};
        var3 = 'has';
        var1['key'] = var3;
        var3 = function value(arg1, arg2) {
            var2 = arg1;
            var1 = arg2;
            var1 = var2 & var1;
            var1 = !var1;
            var1 = !var1;
            return var1;
        };
        var1['value'] = var3;
        var3 = new Array(3);
        var3[0] = var1;
        var1 = {};
        var6 = 'asBasicFlag';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.asUintN;
            var2 = 20;
            var1 = arg1;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1['value'] = var6;
        var3[1] = var1;
        var1 = {};
        var6 = 'asBigFlag';
        var1['key'] = var6;
        var2 = function value(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = arg1;
                var1 = this;
                var3 = global;
                var5 = var3.Object;
                var4 = var5.hasOwn;
                var3 = var1.cache;
                var3 = var4.bind(var5)(var3, var2);
                if(var3) { _fun0001_ip = 81; continue _fun0001 }
 35:
                var4 = var1.cache;
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 2;
                var5 = var5[var3];
                var3 = undefined;
                var5 = var6.bind(var3)(var5);
                var3 = var5.deserialize;
                var3 = var3.bind(var5)(var2);
                var4[var2] = var3;
 81:
                var1 = var1.cache;
                var1 = var1[var2];
                return var1;
            }
        };
        var1['value'] = var2;
        var3[2] = var1;
        var2 = undefined;
        var1 = null;
        var1 = var5.bind(var2)(var4, var1, var3);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = {};
    var2['cache'] = var4;
    var4 = 3;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/BasicPermissionUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();