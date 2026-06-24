// app/modules/core/web/UID.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
    var5 = function uid() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arguments[0];
            var2 = undefined;
            if(!(var3 === var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = 'uid_';
case 2:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 0;
            var1 = var5[var1];
            var1 = var4.bind(var2)(var1);
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot2 = var5;
    var4 = function useUID() {
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 1;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = function() {
            var2 = _closure1_slot2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot3 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 2;
    var7 = var6[var1];
    var6 = require;
    var1 = undefined;
    var8 = var6.bind(var1)(var7);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/core/web/UID.tsx';
    var6 = var7.bind(var8)(var6);
    var3['uid'] = var5;
    var3['useUID'] = var4;
    var2 = function UID(arg1) {
        var1 = arg1;
        var3 = var1.children;
        var1 = _closure1_slot3;
        var2 = undefined;
        var1 = var1.bind(var2)();
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['UID'] = var2;
    return var1;
})();