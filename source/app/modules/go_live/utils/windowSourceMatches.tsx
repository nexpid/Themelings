// app/modules/go_live/utils/windowSourceMatches.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var5 = dependencyMap;
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
    var4 = 1;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/go_live/utils/windowSourceMatches.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function windowSourceMatches(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var4.split;
            var1 = ':';
            var5 = var2.bind(var4)(var1);
            var4 = _closure1_slot0;
            var2 = undefined;
            var1 = 2;
            var2 = var4.bind(var2)(var5, var1);
            var1 = 0;
            var4 = var2[var1];
            var1 = 1;
            var2 = var2[var1];
            var1 = 'window';
            var1 = var1 === var4;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var2 === var3;
case 4:
            return var1;
case 2:
            var1 = false;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();