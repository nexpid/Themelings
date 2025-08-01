// app/utils/native/AppInfoUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = var7.getConstants;
    var4 = var4.bind(var7)();
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/native/AppInfoUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getAppMajorVersion() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = _closure1_slot0;
            var4 = undefined;
            if(!(var4 !== var2)) { _fun0001_ip = 76; continue _fun0001 }
 13:
            var1 = _closure1_slot0;
            var3 = var1.Version;
            var2 = var3.split;
            var1 = '.';
            var5 = var2.bind(var3)(var1);
            var3 = var5.length;
            var1 = -1;
            var2 = 2;
            if(!(var2 === var3)) { _fun0001_ip = 74; continue _fun0001 }
 55:
            var2 = global;
            var3 = var2.Number;
            var2 = 0;
            var2 = var5[var2];
            var1 = var3.bind(var4)(var2);
 74:
            return var1;
 76:
            var1 = -1;
            return var1;
        }
    };
    var3['getAppMajorVersion'] = var2;
    return var1;
})();