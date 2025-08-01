// app/modules/activities/utils/getStreamURL.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.validStreamURL;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/getStreamURL.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getStreamURL(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = null;
            if(!(var3 != var1)) { _fun0001_ip = 43; continue _fun0001 }
 9:
            var2 = var1.url;
            if(!(var3 != var2)) { _fun0001_ip = 43; continue _fun0001 }
 18:
            var4 = _closure1_slot0;
            var3 = var4.test;
            var2 = var1.url;
            var2 = var3.bind(var4)(var2);
            if(var2) { _fun0001_ip = 47; continue _fun0001 }
 43:
            var2 = undefined;
            return var2;
 47:
            var1 = var1.url;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();