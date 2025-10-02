// app/utils/callOnce.tsx
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
    var2 = 'utils/callOnce.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function callOnce(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = false;
        var _closure2_slot2 = var2;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var8 = 0;
                var2 = copyRestArgs(var8);
                var3 = _closure2_slot2;
                if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = true;
                _closure2_slot2 = var3;
                var4 = _closure2_slot0;
                var3 = new Array(0);
                var8 = var3;
                var7 = var2;
                var6 = 0;
                var2 = arraySpread(var8, var7, var6);
                var6 = undefined;
                var8 = var4;
                var7 = var3;
                var2 = apply(var8, var7, var6);
                var _closure2_slot1 = var2;
case 2:
                var1 = _closure2_slot1;
                return var1;
            }
        };
        return var1;
    };
    var3['callOnce'] = var2;
    return var1;
})();